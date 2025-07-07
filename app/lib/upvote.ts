import { supabase, PlatformVote } from './supabase';

export async function getClientIP(): Promise<string> {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error getting IP:', error);
    // Fallback to a random string if IP detection fails
    return Math.random().toString(36).substring(2, 15);
  }
}

export async function getUserUpvotes(ipAddress: string): Promise<string[]> {
  const { data, error } = await supabase
    .from('upvotes')
    .select('platform_name')
    .eq('ip_address', ipAddress);

  if (error) {
    console.error('Error fetching user upvotes:', error);
    return [];
  }

  return data?.map(record => record.platform_name) || [];
}

export async function getPlatformVotes(): Promise<PlatformVote[]> {
  const { data, error } = await supabase
    .from('upvotes')
    .select('platform_name')
    .order('platform_name');

  if (error) {
    console.error('Error fetching platform votes:', error);
    return [];
  }

  // Count votes per platform
  const voteCounts: { [key: string]: number } = {};
  data?.forEach(record => {
    voteCounts[record.platform_name] = (voteCounts[record.platform_name] || 0) + 1;
  });

  return Object.entries(voteCounts).map(([platform_name, vote_count]) => ({
    platform_name,
    vote_count
  }));
}

export async function addUpvote(platformName: string, ipAddress: string): Promise<boolean> {
  const { error } = await supabase
    .from('upvotes')
    .insert({
      platform_name: platformName,
      ip_address: ipAddress
    });

  if (error) {
    console.error('Error adding upvote:', error);
    return false;
  }

  return true;
}

export async function checkUpvoteExists(platformName: string, ipAddress: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('upvotes')
    .select('id')
    .eq('platform_name', platformName)
    .eq('ip_address', ipAddress)
    .single();

  if (error && error.code !== 'PGRST116') { // PGRST116 is "not found" error
    console.error('Error checking upvote existence:', error);
    return false;
  }

  return !!data;
} 