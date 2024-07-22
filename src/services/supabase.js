import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://scgxzkjdllgltjjvkcsx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjZ3h6a2pkbGxnbHRqanZrY3N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyMzU5OTgsImV4cCI6MjAyOTgxMTk5OH0.aLJVvEpxtPj3lYCR0J2ej0s1W3PAfLb1PHNieqFws8o";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
