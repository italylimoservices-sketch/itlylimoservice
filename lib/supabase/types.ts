export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      activity_logs: {
        Row: {
          action: string
          actor_id: string | null
          created_at: string
          entity_id: string | null
          entity_type: string
          id: string
          metadata: Json
        }
        Insert: {
          action: string
          actor_id?: string | null
          created_at?: string
          entity_id?: string | null
          entity_type: string
          id?: string
          metadata?: Json
        }
        Update: {
          action?: string
          actor_id?: string | null
          created_at?: string
          entity_id?: string | null
          entity_type?: string
          id?: string
          metadata?: Json
        }
        Relationships: [
          {
            foreignKeyName: "activity_logs_actor_id_fkey"
            columns: ["actor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      booking_passengers: {
        Row: {
          booking_id: string
          full_name: string
          id: string
          is_primary: boolean
          phone: string | null
        }
        Insert: {
          booking_id: string
          full_name: string
          id?: string
          is_primary?: boolean
          phone?: string | null
        }
        Update: {
          booking_id?: string
          full_name?: string
          id?: string
          is_primary?: boolean
          phone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "booking_passengers_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      booking_status_history: {
        Row: {
          booking_id: string
          changed_at: string
          changed_by: string | null
          from_status: Database["public"]["Enums"]["booking_status"] | null
          id: string
          note: string | null
          to_status: Database["public"]["Enums"]["booking_status"]
        }
        Insert: {
          booking_id: string
          changed_at?: string
          changed_by?: string | null
          from_status?: Database["public"]["Enums"]["booking_status"] | null
          id?: string
          note?: string | null
          to_status: Database["public"]["Enums"]["booking_status"]
        }
        Update: {
          booking_id?: string
          changed_at?: string
          changed_by?: string | null
          from_status?: Database["public"]["Enums"]["booking_status"] | null
          id?: string
          note?: string | null
          to_status?: Database["public"]["Enums"]["booking_status"]
        }
        Relationships: [
          {
            foreignKeyName: "booking_status_history_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_status_history_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings: {
        Row: {
          assigned_at: string | null
          assigned_by: string | null
          booking_reference: string
          created_at: string
          created_by: string | null
          currency: string
          customer_id: string
          customer_notes: string | null
          deleted_at: string | null
          discount: number
          driver_id: string | null
          dropoff: string
          flight_number: string | null
          id: string
          internal_notes: string | null
          luggage: number | null
          passengers: number | null
          payment_status: Database["public"]["Enums"]["payment_status"]
          pickup: string
          price: number
          quotation_id: string | null
          source: Database["public"]["Enums"]["booking_source"]
          special_requests: string | null
          status: Database["public"]["Enums"]["booking_status"]
          tax_amount: number
          total: number
          trip_date: string
          trip_time: string
          updated_at: string
          vehicle_id: string | null
        }
        Insert: {
          assigned_at?: string | null
          assigned_by?: string | null
          booking_reference: string
          created_at?: string
          created_by?: string | null
          currency?: string
          customer_id: string
          customer_notes?: string | null
          deleted_at?: string | null
          discount?: number
          driver_id?: string | null
          dropoff: string
          flight_number?: string | null
          id?: string
          internal_notes?: string | null
          luggage?: number | null
          passengers?: number | null
          payment_status?: Database["public"]["Enums"]["payment_status"]
          pickup: string
          price?: number
          quotation_id?: string | null
          source?: Database["public"]["Enums"]["booking_source"]
          special_requests?: string | null
          status?: Database["public"]["Enums"]["booking_status"]
          tax_amount?: number
          total?: number
          trip_date: string
          trip_time: string
          updated_at?: string
          vehicle_id?: string | null
        }
        Update: {
          assigned_at?: string | null
          assigned_by?: string | null
          booking_reference?: string
          created_at?: string
          created_by?: string | null
          currency?: string
          customer_id?: string
          customer_notes?: string | null
          deleted_at?: string | null
          discount?: number
          driver_id?: string | null
          dropoff?: string
          flight_number?: string | null
          id?: string
          internal_notes?: string | null
          luggage?: number | null
          passengers?: number | null
          payment_status?: Database["public"]["Enums"]["payment_status"]
          pickup?: string
          price?: number
          quotation_id?: string | null
          source?: Database["public"]["Enums"]["booking_source"]
          special_requests?: string | null
          status?: Database["public"]["Enums"]["booking_status"]
          tax_amount?: number
          total?: number
          trip_date?: string
          trip_time?: string
          updated_at?: string
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_assigned_by_fkey"
            columns: ["assigned_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_quotation_id_fkey"
            columns: ["quotation_id"]
            isOneToOne: false
            referencedRelation: "quotations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      company_settings: {
        Row: {
          address: string | null
          auto_generate_invoice_on_confirm: boolean
          booking_prefix: string
          company_name: string
          currency_default: string
          email: string | null
          id: string
          invoice_prefix: string
          lead_prefix: string
          legal_name: string | null
          logo_url: string | null
          payment_terms: string | null
          phone: string | null
          quotation_prefix: string
          receipt_prefix: string
          singleton: boolean
          tax_number: string | null
          tax_rate_default: number
          terms_and_conditions: string | null
          updated_at: string
          website: string | null
          whatsapp: string | null
        }
        Insert: {
          address?: string | null
          auto_generate_invoice_on_confirm?: boolean
          booking_prefix?: string
          company_name?: string
          currency_default?: string
          email?: string | null
          id?: string
          invoice_prefix?: string
          lead_prefix?: string
          legal_name?: string | null
          logo_url?: string | null
          payment_terms?: string | null
          phone?: string | null
          quotation_prefix?: string
          receipt_prefix?: string
          singleton?: boolean
          tax_number?: string | null
          tax_rate_default?: number
          terms_and_conditions?: string | null
          updated_at?: string
          website?: string | null
          whatsapp?: string | null
        }
        Update: {
          address?: string | null
          auto_generate_invoice_on_confirm?: boolean
          booking_prefix?: string
          company_name?: string
          currency_default?: string
          email?: string | null
          id?: string
          invoice_prefix?: string
          lead_prefix?: string
          legal_name?: string | null
          logo_url?: string | null
          payment_terms?: string | null
          phone?: string | null
          quotation_prefix?: string
          receipt_prefix?: string
          singleton?: boolean
          tax_number?: string | null
          tax_rate_default?: number
          terms_and_conditions?: string | null
          updated_at?: string
          website?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          billing_address: string | null
          company_name: string | null
          country: string | null
          created_at: string
          created_by: string | null
          deleted_at: string | null
          email: string | null
          full_name: string
          id: string
          notes: string | null
          phone: string | null
          updated_at: string
          whatsapp: string | null
        }
        Insert: {
          billing_address?: string | null
          company_name?: string | null
          country?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          email?: string | null
          full_name: string
          id?: string
          notes?: string | null
          phone?: string | null
          updated_at?: string
          whatsapp?: string | null
        }
        Update: {
          billing_address?: string | null
          company_name?: string | null
          country?: string | null
          created_at?: string
          created_by?: string | null
          deleted_at?: string | null
          email?: string | null
          full_name?: string
          id?: string
          notes?: string | null
          phone?: string | null
          updated_at?: string
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      document_sequences: {
        Row: {
          doc_type: string
          next_number: number
        }
        Insert: {
          doc_type: string
          next_number?: number
        }
        Update: {
          doc_type?: string
          next_number?: number
        }
        Relationships: []
      }
      documents: {
        Row: {
          created_at: string
          doc_type: Database["public"]["Enums"]["document_kind"]
          entity_id: string
          entity_type: string
          file_name: string
          id: string
          mime_type: string | null
          size_bytes: number | null
          storage_path: string
          uploaded_by: string | null
        }
        Insert: {
          created_at?: string
          doc_type: Database["public"]["Enums"]["document_kind"]
          entity_id: string
          entity_type: string
          file_name: string
          id?: string
          mime_type?: string | null
          size_bytes?: number | null
          storage_path: string
          uploaded_by?: string | null
        }
        Update: {
          created_at?: string
          doc_type?: Database["public"]["Enums"]["document_kind"]
          entity_id?: string
          entity_type?: string
          file_name?: string
          id?: string
          mime_type?: string | null
          size_bytes?: number | null
          storage_path?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "documents_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      driver_assignments: {
        Row: {
          assigned_at: string
          assigned_by: string | null
          booking_id: string
          driver_id: string | null
          id: string
          notes: string | null
          status: string
          unassigned_at: string | null
          vehicle_id: string | null
        }
        Insert: {
          assigned_at?: string
          assigned_by?: string | null
          booking_id: string
          driver_id?: string | null
          id?: string
          notes?: string | null
          status?: string
          unassigned_at?: string | null
          vehicle_id?: string | null
        }
        Update: {
          assigned_at?: string
          assigned_by?: string | null
          booking_id?: string
          driver_id?: string | null
          id?: string
          notes?: string | null
          status?: string
          unassigned_at?: string | null
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "driver_assignments_assigned_by_fkey"
            columns: ["assigned_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "driver_assignments_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "driver_assignments_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "driver_assignments_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      drivers: {
        Row: {
          active: boolean
          assigned_vehicle_id: string | null
          availability: Database["public"]["Enums"]["driver_availability"]
          created_at: string
          deleted_at: string | null
          email: string | null
          full_name: string
          id: string
          license_expiry: string | null
          license_number: string | null
          nationality: string | null
          notes: string | null
          phone: string | null
          updated_at: string
          whatsapp: string | null
        }
        Insert: {
          active?: boolean
          assigned_vehicle_id?: string | null
          availability?: Database["public"]["Enums"]["driver_availability"]
          created_at?: string
          deleted_at?: string | null
          email?: string | null
          full_name: string
          id?: string
          license_expiry?: string | null
          license_number?: string | null
          nationality?: string | null
          notes?: string | null
          phone?: string | null
          updated_at?: string
          whatsapp?: string | null
        }
        Update: {
          active?: boolean
          assigned_vehicle_id?: string | null
          availability?: Database["public"]["Enums"]["driver_availability"]
          created_at?: string
          deleted_at?: string | null
          email?: string | null
          full_name?: string
          id?: string
          license_expiry?: string | null
          license_number?: string | null
          nationality?: string | null
          notes?: string | null
          phone?: string | null
          updated_at?: string
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "drivers_assigned_vehicle_id_fkey"
            columns: ["assigned_vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      expenses: {
        Row: {
          amount: number
          booking_id: string | null
          category: Database["public"]["Enums"]["expense_category"]
          created_at: string
          created_by: string | null
          currency: string
          deleted_at: string | null
          description: string | null
          driver_id: string | null
          expense_date: string
          id: string
          updated_at: string
          vehicle_id: string | null
        }
        Insert: {
          amount: number
          booking_id?: string | null
          category: Database["public"]["Enums"]["expense_category"]
          created_at?: string
          created_by?: string | null
          currency?: string
          deleted_at?: string | null
          description?: string | null
          driver_id?: string | null
          expense_date?: string
          id?: string
          updated_at?: string
          vehicle_id?: string | null
        }
        Update: {
          amount?: number
          booking_id?: string | null
          category?: Database["public"]["Enums"]["expense_category"]
          created_at?: string
          created_by?: string | null
          currency?: string
          deleted_at?: string | null
          description?: string | null
          driver_id?: string | null
          expense_date?: string
          id?: string
          updated_at?: string
          vehicle_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "expenses_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expenses_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expenses_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expenses_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      follow_ups: {
        Row: {
          assigned_to: string | null
          booking_id: string | null
          completed_at: string | null
          created_at: string
          created_by: string | null
          customer_id: string | null
          due_date: string
          id: string
          invoice_id: string | null
          lead_id: string | null
          notes: string | null
          quotation_id: string | null
          status: Database["public"]["Enums"]["follow_up_status"]
          type: Database["public"]["Enums"]["follow_up_type"]
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          booking_id?: string | null
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          customer_id?: string | null
          due_date: string
          id?: string
          invoice_id?: string | null
          lead_id?: string | null
          notes?: string | null
          quotation_id?: string | null
          status?: Database["public"]["Enums"]["follow_up_status"]
          type: Database["public"]["Enums"]["follow_up_type"]
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          booking_id?: string | null
          completed_at?: string | null
          created_at?: string
          created_by?: string | null
          customer_id?: string | null
          due_date?: string
          id?: string
          invoice_id?: string | null
          lead_id?: string | null
          notes?: string | null
          quotation_id?: string | null
          status?: Database["public"]["Enums"]["follow_up_status"]
          type?: Database["public"]["Enums"]["follow_up_type"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "follow_ups_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follow_ups_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follow_ups_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follow_ups_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follow_ups_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follow_ups_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "follow_ups_quotation_id_fkey"
            columns: ["quotation_id"]
            isOneToOne: false
            referencedRelation: "quotations"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_items: {
        Row: {
          amount: number
          description: string
          id: string
          invoice_id: string
          quantity: number
          sort_order: number
          unit_price: number
        }
        Insert: {
          amount?: number
          description: string
          id?: string
          invoice_id: string
          quantity?: number
          sort_order?: number
          unit_price?: number
        }
        Update: {
          amount?: number
          description?: string
          id?: string
          invoice_id?: string
          quantity?: number
          sort_order?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_status_history: {
        Row: {
          changed_at: string
          changed_by: string | null
          from_status: Database["public"]["Enums"]["invoice_status"] | null
          id: string
          invoice_id: string
          note: string | null
          to_status: Database["public"]["Enums"]["invoice_status"]
        }
        Insert: {
          changed_at?: string
          changed_by?: string | null
          from_status?: Database["public"]["Enums"]["invoice_status"] | null
          id?: string
          invoice_id: string
          note?: string | null
          to_status: Database["public"]["Enums"]["invoice_status"]
        }
        Update: {
          changed_at?: string
          changed_by?: string | null
          from_status?: Database["public"]["Enums"]["invoice_status"] | null
          id?: string
          invoice_id?: string
          note?: string | null
          to_status?: Database["public"]["Enums"]["invoice_status"]
        }
        Relationships: [
          {
            foreignKeyName: "invoice_status_history_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoice_status_history_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          amount_paid: number
          balance_due: number | null
          booking_id: string | null
          created_at: string
          created_by: string | null
          currency: string
          customer_id: string
          deleted_at: string | null
          discount: number
          due_date: string | null
          id: string
          invoice_number: string
          payment_terms: string | null
          sent_at: string | null
          status: Database["public"]["Enums"]["invoice_status"]
          subtotal: number
          tax_amount: number
          tax_rate: number
          terms_and_conditions: string | null
          total: number
          updated_at: string
        }
        Insert: {
          amount_paid?: number
          balance_due?: number | null
          booking_id?: string | null
          created_at?: string
          created_by?: string | null
          currency?: string
          customer_id: string
          deleted_at?: string | null
          discount?: number
          due_date?: string | null
          id?: string
          invoice_number: string
          payment_terms?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["invoice_status"]
          subtotal?: number
          tax_amount?: number
          tax_rate?: number
          terms_and_conditions?: string | null
          total?: number
          updated_at?: string
        }
        Update: {
          amount_paid?: number
          balance_due?: number | null
          booking_id?: string | null
          created_at?: string
          created_by?: string | null
          currency?: string
          customer_id?: string
          deleted_at?: string | null
          discount?: number
          due_date?: string | null
          id?: string
          invoice_number?: string
          payment_terms?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["invoice_status"]
          subtotal?: number
          tax_amount?: number
          tax_rate?: number
          terms_and_conditions?: string | null
          total?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoices_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_status_history: {
        Row: {
          changed_at: string
          changed_by: string | null
          from_status: Database["public"]["Enums"]["lead_status"] | null
          id: string
          lead_id: string
          note: string | null
          to_status: Database["public"]["Enums"]["lead_status"]
        }
        Insert: {
          changed_at?: string
          changed_by?: string | null
          from_status?: Database["public"]["Enums"]["lead_status"] | null
          id?: string
          lead_id: string
          note?: string | null
          to_status: Database["public"]["Enums"]["lead_status"]
        }
        Update: {
          changed_at?: string
          changed_by?: string | null
          from_status?: Database["public"]["Enums"]["lead_status"] | null
          id?: string
          lead_id?: string
          note?: string | null
          to_status?: Database["public"]["Enums"]["lead_status"]
        }
        Relationships: [
          {
            foreignKeyName: "lead_status_history_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lead_status_history_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          assigned_to: string | null
          created_at: string
          created_by: string | null
          currency: string
          customer_id: string | null
          deleted_at: string | null
          dropoff: string | null
          email: string | null
          estimated_value: number | null
          full_name: string
          id: string
          lead_number: string
          next_follow_up_at: string | null
          notes: string | null
          passengers: number | null
          phone: string | null
          pickup: string | null
          source: string
          status: Database["public"]["Enums"]["lead_status"]
          trip_date: string | null
          trip_time: string | null
          updated_at: string
          vehicle_requested:
            | Database["public"]["Enums"]["vehicle_category"]
            | null
          whatsapp: string | null
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string
          created_by?: string | null
          currency?: string
          customer_id?: string | null
          deleted_at?: string | null
          dropoff?: string | null
          email?: string | null
          estimated_value?: number | null
          full_name: string
          id?: string
          lead_number: string
          next_follow_up_at?: string | null
          notes?: string | null
          passengers?: number | null
          phone?: string | null
          pickup?: string | null
          source?: string
          status?: Database["public"]["Enums"]["lead_status"]
          trip_date?: string | null
          trip_time?: string | null
          updated_at?: string
          vehicle_requested?:
            | Database["public"]["Enums"]["vehicle_category"]
            | null
          whatsapp?: string | null
        }
        Update: {
          assigned_to?: string | null
          created_at?: string
          created_by?: string | null
          currency?: string
          customer_id?: string | null
          deleted_at?: string | null
          dropoff?: string | null
          email?: string | null
          estimated_value?: number | null
          full_name?: string
          id?: string
          lead_number?: string
          next_follow_up_at?: string | null
          notes?: string | null
          passengers?: number | null
          phone?: string | null
          pickup?: string | null
          source?: string
          status?: Database["public"]["Enums"]["lead_status"]
          trip_date?: string | null
          trip_time?: string | null
          updated_at?: string
          vehicle_requested?:
            | Database["public"]["Enums"]["vehicle_category"]
            | null
          whatsapp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          body: string | null
          channel: Database["public"]["Enums"]["notification_channel"]
          created_at: string
          error: string | null
          event_type: string
          id: string
          recipient_id: string | null
          recipient_type: string
          related_entity_id: string | null
          related_entity_type: string | null
          sent_at: string | null
          status: Database["public"]["Enums"]["notification_status"]
          subject: string | null
        }
        Insert: {
          body?: string | null
          channel?: Database["public"]["Enums"]["notification_channel"]
          created_at?: string
          error?: string | null
          event_type: string
          id?: string
          recipient_id?: string | null
          recipient_type: string
          related_entity_id?: string | null
          related_entity_type?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["notification_status"]
          subject?: string | null
        }
        Update: {
          body?: string | null
          channel?: Database["public"]["Enums"]["notification_channel"]
          created_at?: string
          error?: string | null
          event_type?: string
          id?: string
          recipient_id?: string | null
          recipient_type?: string
          related_entity_id?: string | null
          related_entity_type?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["notification_status"]
          subject?: string | null
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number
          booking_id: string | null
          created_at: string
          currency: string
          customer_id: string | null
          deleted_at: string | null
          id: string
          invoice_id: string
          method: Database["public"]["Enums"]["payment_method"]
          notes: string | null
          payment_date: string
          recorded_by: string | null
          reference_number: string | null
          updated_at: string
        }
        Insert: {
          amount: number
          booking_id?: string | null
          created_at?: string
          currency?: string
          customer_id?: string | null
          deleted_at?: string | null
          id?: string
          invoice_id: string
          method: Database["public"]["Enums"]["payment_method"]
          notes?: string | null
          payment_date?: string
          recorded_by?: string | null
          reference_number?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number
          booking_id?: string | null
          created_at?: string
          currency?: string
          customer_id?: string | null
          deleted_at?: string | null
          id?: string
          invoice_id?: string
          method?: Database["public"]["Enums"]["payment_method"]
          notes?: string | null
          payment_date?: string
          recorded_by?: string | null
          reference_number?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_recorded_by_fkey"
            columns: ["recorded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          active: boolean
          created_at: string
          email: string
          full_name: string
          id: string
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          email: string
          full_name?: string
          id: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
        }
        Update: {
          active?: boolean
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
        }
        Relationships: []
      }
      quotation_items: {
        Row: {
          amount: number
          description: string
          id: string
          quantity: number
          quotation_id: string
          sort_order: number
          unit_price: number
        }
        Insert: {
          amount?: number
          description: string
          id?: string
          quantity?: number
          quotation_id: string
          sort_order?: number
          unit_price?: number
        }
        Update: {
          amount?: number
          description?: string
          id?: string
          quantity?: number
          quotation_id?: string
          sort_order?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "quotation_items_quotation_id_fkey"
            columns: ["quotation_id"]
            isOneToOne: false
            referencedRelation: "quotations"
            referencedColumns: ["id"]
          },
        ]
      }
      quotation_status_history: {
        Row: {
          changed_at: string
          changed_by: string | null
          from_status: Database["public"]["Enums"]["quotation_status"] | null
          id: string
          note: string | null
          quotation_id: string
          to_status: Database["public"]["Enums"]["quotation_status"]
        }
        Insert: {
          changed_at?: string
          changed_by?: string | null
          from_status?: Database["public"]["Enums"]["quotation_status"] | null
          id?: string
          note?: string | null
          quotation_id: string
          to_status: Database["public"]["Enums"]["quotation_status"]
        }
        Update: {
          changed_at?: string
          changed_by?: string | null
          from_status?: Database["public"]["Enums"]["quotation_status"] | null
          id?: string
          note?: string | null
          quotation_id?: string
          to_status?: Database["public"]["Enums"]["quotation_status"]
        }
        Relationships: [
          {
            foreignKeyName: "quotation_status_history_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quotation_status_history_quotation_id_fkey"
            columns: ["quotation_id"]
            isOneToOne: false
            referencedRelation: "quotations"
            referencedColumns: ["id"]
          },
        ]
      }
      quotations: {
        Row: {
          accepted_at: string | null
          converted_booking_id: string | null
          created_at: string
          created_by: string | null
          currency: string
          customer_id: string
          deleted_at: string | null
          discount: number
          driver_id: string | null
          dropoff: string | null
          id: string
          internal_notes: string | null
          lead_id: string | null
          luggage: number | null
          passengers: number | null
          payment_terms: string | null
          pickup: string | null
          quotation_number: string
          rejected_at: string | null
          sent_at: string | null
          status: Database["public"]["Enums"]["quotation_status"]
          subtotal: number
          tax_amount: number
          tax_rate: number
          terms_and_conditions: string | null
          total: number
          trip_date: string | null
          trip_time: string | null
          updated_at: string
          valid_until: string | null
          vehicle_id: string | null
          viewed_at: string | null
        }
        Insert: {
          accepted_at?: string | null
          converted_booking_id?: string | null
          created_at?: string
          created_by?: string | null
          currency?: string
          customer_id: string
          deleted_at?: string | null
          discount?: number
          driver_id?: string | null
          dropoff?: string | null
          id?: string
          internal_notes?: string | null
          lead_id?: string | null
          luggage?: number | null
          passengers?: number | null
          payment_terms?: string | null
          pickup?: string | null
          quotation_number: string
          rejected_at?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["quotation_status"]
          subtotal?: number
          tax_amount?: number
          tax_rate?: number
          terms_and_conditions?: string | null
          total?: number
          trip_date?: string | null
          trip_time?: string | null
          updated_at?: string
          valid_until?: string | null
          vehicle_id?: string | null
          viewed_at?: string | null
        }
        Update: {
          accepted_at?: string | null
          converted_booking_id?: string | null
          created_at?: string
          created_by?: string | null
          currency?: string
          customer_id?: string
          deleted_at?: string | null
          discount?: number
          driver_id?: string | null
          dropoff?: string | null
          id?: string
          internal_notes?: string | null
          lead_id?: string | null
          luggage?: number | null
          passengers?: number | null
          payment_terms?: string | null
          pickup?: string | null
          quotation_number?: string
          rejected_at?: string | null
          sent_at?: string | null
          status?: Database["public"]["Enums"]["quotation_status"]
          subtotal?: number
          tax_amount?: number
          tax_rate?: number
          terms_and_conditions?: string | null
          total?: number
          trip_date?: string | null
          trip_time?: string | null
          updated_at?: string
          valid_until?: string | null
          vehicle_id?: string | null
          viewed_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "quotations_converted_booking_fk"
            columns: ["converted_booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quotations_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quotations_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quotations_driver_id_fkey"
            columns: ["driver_id"]
            isOneToOne: false
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quotations_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quotations_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      receipts: {
        Row: {
          amount: number
          booking_id: string | null
          created_at: string
          customer_id: string | null
          id: string
          invoice_id: string | null
          method: Database["public"]["Enums"]["payment_method"]
          payment_date: string
          payment_id: string
          receipt_number: string
          remaining_balance: number
        }
        Insert: {
          amount: number
          booking_id?: string | null
          created_at?: string
          customer_id?: string | null
          id?: string
          invoice_id?: string | null
          method: Database["public"]["Enums"]["payment_method"]
          payment_date: string
          payment_id: string
          receipt_number: string
          remaining_balance?: number
        }
        Update: {
          amount?: number
          booking_id?: string | null
          created_at?: string
          customer_id?: string | null
          id?: string
          invoice_id?: string | null
          method?: Database["public"]["Enums"]["payment_method"]
          payment_date?: string
          payment_id?: string
          receipt_number?: string
          remaining_balance?: number
        }
        Relationships: [
          {
            foreignKeyName: "receipts_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "receipts_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "receipts_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "receipts_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: true
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
      vehicles: {
        Row: {
          active: boolean
          category: Database["public"]["Enums"]["vehicle_category"]
          created_at: string
          deleted_at: string | null
          description: string | null
          id: string
          image_url: string | null
          insurance_expiry: string | null
          luggage_capacity: number | null
          make: string | null
          model: string | null
          name: string
          registration_expiry: string | null
          registration_number: string | null
          seats: number | null
          status: Database["public"]["Enums"]["vehicle_status"]
          updated_at: string
          year: number | null
        }
        Insert: {
          active?: boolean
          category?: Database["public"]["Enums"]["vehicle_category"]
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          insurance_expiry?: string | null
          luggage_capacity?: number | null
          make?: string | null
          model?: string | null
          name: string
          registration_expiry?: string | null
          registration_number?: string | null
          seats?: number | null
          status?: Database["public"]["Enums"]["vehicle_status"]
          updated_at?: string
          year?: number | null
        }
        Update: {
          active?: boolean
          category?: Database["public"]["Enums"]["vehicle_category"]
          created_at?: string
          deleted_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          insurance_expiry?: string | null
          luggage_capacity?: number | null
          make?: string | null
          model?: string | null
          name?: string
          registration_expiry?: string | null
          registration_number?: string | null
          seats?: number | null
          status?: Database["public"]["Enums"]["vehicle_status"]
          updated_at?: string
          year?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      convert_quotation_to_booking: {
        Args: { p_quotation_id: string }
        Returns: string
      }
      create_upcoming_trip_reminders: {
        Args: { p_days_ahead?: number }
        Returns: number
      }
      current_user_active: { Args: never; Returns: boolean }
      current_user_role: {
        Args: never
        Returns: Database["public"]["Enums"]["user_role"]
      }
      dashboard_crm_kpis: {
        Args: { p_from: string; p_to: string }
        Returns: {
          accepted_quotations: number
          new_customers: number
          new_leads: number
          pending_quotations: number
          sent_quotations: number
        }[]
      }
      dashboard_finance_kpis: {
        Args: { p_from: string; p_to: string; p_today: string }
        Returns: {
          expenses_period: number
          outstanding_invoices: number
          overdue_invoices_amount: number
          overdue_invoices_count: number
          payments_received_period: number
          revenue_period: number
          todays_revenue: number
        }[]
      }
      dashboard_operational_kpis: {
        Args: { p_today: string }
        Returns: {
          cancelled_bookings: number
          completed_bookings: number
          confirmed_bookings: number
          pending_bookings: number
          todays_trips: number
          unassigned_trips: number
          upcoming_trips: number
        }[]
      }
      is_admin: { Args: never; Returns: boolean }
      is_staff_role: {
        Args: { roles: Database["public"]["Enums"]["user_role"][] }
        Returns: boolean
      }
      log_activity: {
        Args: {
          p_action: string
          p_entity_id: string
          p_entity_type: string
          p_metadata?: Json
        }
        Returns: string
      }
      mark_overdue_invoices: { Args: never; Returns: number }
      next_document_number: { Args: { p_doc_type: string }; Returns: string }
    }
    Enums: {
      booking_source:
        | "WEBSITE"
        | "ADMIN"
        | "PHONE"
        | "EMAIL"
        | "WHATSAPP"
        | "REPEAT"
      booking_status:
        | "PENDING"
        | "CONFIRMED"
        | "ASSIGNED"
        | "DRIVER_EN_ROUTE"
        | "PASSENGER_PICKED_UP"
        | "IN_PROGRESS"
        | "COMPLETED"
        | "CANCELLED"
        | "NO_SHOW"
      document_kind:
        | "QUOTATION"
        | "INVOICE"
        | "RECEIPT"
        | "BOOKING_CONFIRMATION"
        | "DRIVER_DOCUMENT"
        | "VEHICLE_DOCUMENT"
        | "OTHER"
      driver_availability: "AVAILABLE" | "ON_TRIP" | "OFF_DUTY"
      expense_category:
        | "DRIVER"
        | "FUEL"
        | "TOLL"
        | "PARKING"
        | "MAINTENANCE"
        | "AIRPORT"
        | "COMMISSION"
        | "OTHER"
      follow_up_status: "PENDING" | "COMPLETED" | "CANCELLED"
      follow_up_type:
        | "NEW_LEAD"
        | "QUOTATION_FOLLOWUP"
        | "UNPAID_INVOICE"
        | "UPCOMING_TRIP"
        | "POST_TRIP_FOLLOWUP"
        | "REVIEW_REQUEST"
        | "REPEAT_BOOKING"
        | "CUSTOM"
      invoice_status:
        | "DRAFT"
        | "SENT"
        | "PARTIALLY_PAID"
        | "PAID"
        | "OVERDUE"
        | "VOID"
        | "REFUNDED"
      lead_status:
        | "NEW"
        | "CONTACTED"
        | "QUOTED"
        | "NEGOTIATING"
        | "WON"
        | "LOST"
      notification_channel: "EMAIL" | "WHATSAPP" | "SYSTEM"
      notification_status: "PENDING" | "SENT" | "FAILED"
      payment_method: "CASH" | "BANK_TRANSFER" | "CARD" | "ONLINE" | "OTHER"
      payment_status: "UNPAID" | "PARTIALLY_PAID" | "PAID" | "REFUNDED"
      quotation_status:
        | "DRAFT"
        | "SENT"
        | "VIEWED"
        | "ACCEPTED"
        | "REJECTED"
        | "EXPIRED"
        | "CONVERTED"
      user_role:
        | "SUPER_ADMIN"
        | "ADMIN"
        | "OPERATIONS"
        | "FINANCE"
        | "DISPATCHER"
        | "VIEWER"
      vehicle_category: "SEDAN" | "SUV" | "VAN" | "LUXURY" | "MINIBUS"
      vehicle_status: "ACTIVE" | "MAINTENANCE" | "INACTIVE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      booking_source: [
        "WEBSITE",
        "ADMIN",
        "PHONE",
        "EMAIL",
        "WHATSAPP",
        "REPEAT",
      ],
      booking_status: [
        "PENDING",
        "CONFIRMED",
        "ASSIGNED",
        "DRIVER_EN_ROUTE",
        "PASSENGER_PICKED_UP",
        "IN_PROGRESS",
        "COMPLETED",
        "CANCELLED",
        "NO_SHOW",
      ],
      document_kind: [
        "QUOTATION",
        "INVOICE",
        "RECEIPT",
        "BOOKING_CONFIRMATION",
        "DRIVER_DOCUMENT",
        "VEHICLE_DOCUMENT",
        "OTHER",
      ],
      driver_availability: ["AVAILABLE", "ON_TRIP", "OFF_DUTY"],
      expense_category: [
        "DRIVER",
        "FUEL",
        "TOLL",
        "PARKING",
        "MAINTENANCE",
        "AIRPORT",
        "COMMISSION",
        "OTHER",
      ],
      follow_up_status: ["PENDING", "COMPLETED", "CANCELLED"],
      follow_up_type: [
        "NEW_LEAD",
        "QUOTATION_FOLLOWUP",
        "UNPAID_INVOICE",
        "UPCOMING_TRIP",
        "POST_TRIP_FOLLOWUP",
        "REVIEW_REQUEST",
        "REPEAT_BOOKING",
        "CUSTOM",
      ],
      invoice_status: [
        "DRAFT",
        "SENT",
        "PARTIALLY_PAID",
        "PAID",
        "OVERDUE",
        "VOID",
        "REFUNDED",
      ],
      lead_status: ["NEW", "CONTACTED", "QUOTED", "NEGOTIATING", "WON", "LOST"],
      notification_channel: ["EMAIL", "WHATSAPP", "SYSTEM"],
      notification_status: ["PENDING", "SENT", "FAILED"],
      payment_method: ["CASH", "BANK_TRANSFER", "CARD", "ONLINE", "OTHER"],
      payment_status: ["UNPAID", "PARTIALLY_PAID", "PAID", "REFUNDED"],
      quotation_status: [
        "DRAFT",
        "SENT",
        "VIEWED",
        "ACCEPTED",
        "REJECTED",
        "EXPIRED",
        "CONVERTED",
      ],
      user_role: [
        "SUPER_ADMIN",
        "ADMIN",
        "OPERATIONS",
        "FINANCE",
        "DISPATCHER",
        "VIEWER",
      ],
      vehicle_category: ["SEDAN", "SUV", "VAN", "LUXURY", "MINIBUS"],
      vehicle_status: ["ACTIVE", "MAINTENANCE", "INACTIVE"],
    },
  },
} as const
