import { createClient } from "@supabase/supabase-js"

// const SUPABASE_URL = "https://buqtgjprkywmpugnomdx.supabase.co"
// const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1cXRnanBya3l3bXB1Z25vbWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyOTA3OTUsImV4cCI6MTk5Nzg2Njc5NX0.MjcD7_Jrp-BCCt-OP4EM0e3Fon1y6w9t1dm6dJOYids"

const SUPABASE_URL = "https://uvqkeeochozlokkgdjvf.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2cWtlZW9jaG96bG9ra2dkanZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0MDg5NzksImV4cCI6MTk5Nzk4NDk3OX0.kJtLlcmcXsAsa9pqlIFB2U2rXgQxla4L2oMyLi7lim0"

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default supabase