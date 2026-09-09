import "server-only";

import { createClient } from "@/lib/supabase/server";

export type CompanySettings = {
  company_name: string;
  legal_name: string | null;
  logo_url: string | null;
  email: string | null;
  phone: string | null;
  whatsapp: string | null;
  address: string | null;
  website: string | null;
  tax_number: string | null;
  currency_default: string;
};

export async function getCompanySettings(): Promise<CompanySettings> {
  const supabase = await createClient();
  const { data } = await supabase.from("company_settings").select("*").limit(1).maybeSingle();
  return (
    data ?? {
      company_name: "Italy Limo Service",
      legal_name: null,
      logo_url: null,
      email: null,
      phone: null,
      whatsapp: null,
      address: null,
      website: null,
      tax_number: null,
      currency_default: "EUR",
    }
  );
}
