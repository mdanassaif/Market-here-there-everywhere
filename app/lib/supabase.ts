import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface UpvoteRecord {
  id: string;
  platform_name: string;
  ip_address: string;
  created_at: string;
}

export interface PlatformVote {
  platform_name: string;
  vote_count: number;
} 