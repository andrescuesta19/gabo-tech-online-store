// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ctoldkhdqxhveixqgmlr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0b2xka2hkcXhodmVpeHFnbWxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3NjE2ODcsImV4cCI6MjA2ODMzNzY4N30.vxYM3nZWHUjgnIs5Fi0qJBWD49_y53BTXxJHMuM-hBE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});