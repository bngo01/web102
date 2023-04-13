import {createClient} from "@supabase/supabase-js"

const URL = 'https://sftgbiscwqiprsuclldk.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmdGdiaXNjd3FpcHJzdWNsbGRrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTE4NDA2MiwiZXhwIjoxOTk2NzYwMDYyfQ.QH3e1X-q0Uv5ia5kNc-e1hqtH9KqUwgaF0_NACN7__4'

export const supabase = createClient(URL, API_KEY)