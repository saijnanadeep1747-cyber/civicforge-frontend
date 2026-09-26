const API_BASE_URL = 'https://civicforge-backend-dipd.onrender.com';

export async function fetchChallenges() {
  const res = await fetch(`${API_BASE_URL}/challenges`);
  if (!res.ok) throw new Error('Failed to fetch challenges');
  return res.json();
}

export async function reviveChallenge(id: string) {
  const res = await fetch(`${API_BASE_URL}/challenges/${id}/revive`, {
    method: 'PATCH',
  });
  if (!res.ok) throw new Error('Failed to revive project');
  return res.json();
}