import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { requireUser } from "@/lib/auth/dal";
import { canManageOps } from "@/lib/auth/roles";
import { createClient } from "@/lib/supabase/server";
import { PageHeader } from "@/components/admin/ui/PageHeader";
import { Section } from "@/components/admin/ui/Section";
import { SimpleTable } from "@/components/admin/ui/SimpleTable";
import { StatusBadge } from "@/components/admin/ui/Badge";
import { DriverForm } from "@/components/admin/drivers/DriverForm";
import { DocumentUploadForm } from "@/components/admin/documents/DocumentUploadForm";
import { formatDate, formatTime } from "@/lib/admin/format";
import { updateDriver, setDriverActive, setDriverAvailability } from "@/lib/admin/actions/drivers";

export const metadata: Metadata = { title: "Driver" };

const AVAILABILITY = ["AVAILABLE", "ON_TRIP", "OFF_DUTY"] as const;

export default async function DriverDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const profile = await requireUser();
  const supabase = await createClient();

  const { data: driver } = await supabase.from("drivers").select("*").eq("id", id).maybeSingle();
  if (!driver) notFound();

  const { data: trips } = await supabase
    .from("bookings")
    .select("id, booking_reference, pickup, dropoff, trip_date, trip_time, status")
    .eq("driver_id", id)
    .order("trip_date", { ascending: false })
    .limit(20);

  const canEdit = canManageOps(profile.role);

  return (
    <div>
      <PageHeader
        title={driver.full_name}
        actions={
          <div className="flex items-center gap-2">
            <StatusBadge status={driver.availability} />
            <StatusBadge status={driver.active ? "ACTIVE" : "INACTIVE"} />
          </div>
        }
      />

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <Section title="Driver details">
            <div className="p-4">
              {canEdit ? (
                <DriverForm action={updateDriver.bind(null, id)} driver={driver} submitLabel="Save changes" />
              ) : (
                <p className="text-sm text-stone">{driver.phone}</p>
              )}
            </div>
          </Section>

          <Section title="Trips">
            <SimpleTable
              rows={trips ?? []}
              emptyTitle="No trips yet"
              columns={[
                { header: "Reference", cell: (t) => t.booking_reference },
                { header: "Route", cell: (t) => `${t.pickup} → ${t.dropoff}` },
                { header: "Date", cell: (t) => `${formatDate(t.trip_date)} ${formatTime(t.trip_time)}` },
                { header: "Status", cell: (t) => <StatusBadge status={t.status} /> },
              ]}
            />
          </Section>
        </div>

        {canEdit ? (
          <div className="space-y-4">
            <Section title="Documents">
              <div className="p-4">
                <DocumentUploadForm entityType="driver" entityId={id} defaultDocType="DRIVER_DOCUMENT" />
              </div>
            </Section>
            <Section title="Availability">
              <div className="p-4 flex flex-wrap gap-1.5">
                {AVAILABILITY.map((a) => (
                  <form key={a} action={setDriverAvailability.bind(null, id, a)}>
                    <button
                      type="submit"
                      disabled={driver.availability === a}
                      className={`text-xs px-2.5 py-1.5 rounded-sm border ${driver.availability === a ? "border-navy bg-navy text-ivory" : "border-line hover:bg-ivory-deep"}`}
                    >
                      {a.replaceAll("_", " ")}
                    </button>
                  </form>
                ))}
              </div>
            </Section>
            <Section title="Status">
              <div className="p-4">
                <form action={setDriverActive.bind(null, id, !driver.active)}>
                  <button type="submit" className="w-full text-sm border border-line px-3 py-2 rounded-sm hover:bg-ivory-deep">
                    {driver.active ? "Deactivate" : "Activate"}
                  </button>
                </form>
              </div>
            </Section>
          </div>
        ) : null}
      </div>
    </div>
  );
}
