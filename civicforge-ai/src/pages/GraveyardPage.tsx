import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export default function GraveyardPage() {
  const queryClient = useQueryClient();

  // 1. Fetch Challenges automatically
  const { data: challenges, isLoading, isError } = useQuery({
    queryKey: ['challenges'],
    queryFn: async () => {
      const res = await fetch('https://civicforge-backend-dipd.onrender.com/api/challenges');
      if (!res.ok) throw new Error('Failed to fetch from server');
      return res.json();
    },
  });

  // 2. Mutation for Reviving Projects
  const reviveMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`https://civicforge-backend-dipd.onrender.com/api/challenges/${id}/revive`, {
        method: 'PATCH',
      });
      if (!res.ok) throw new Error('Revive failed');
      return res.json();
    },
    onSuccess: () => {
      // Refresh challenges instantly after reviving
      queryClient.invalidateQueries({ queryKey: ['challenges'] });
    },
  });

  if (isLoading) return <div className="p-6 text-white">Loading challenges from backend...</div>;
  if (isError) return <div className="p-6 text-rose-500">Error connecting to server on port 5000.</div>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-white">Project Graveyard</h1>
      <div className="grid gap-4">
        {challenges?.map((c: any) => (
          <div key={c._id || c.id} className="p-4 border rounded shadow-sm bg-slate-800 text-white">
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-slate-300 text-sm">{c.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs px-2 py-1 rounded bg-slate-700">{c.status}</span>
              {c.status === 'Graveyard' && (
                <button
                  onClick={() => reviveMutation.mutate(c._id || c.id)}
                  disabled={reviveMutation.isPending}
                  className="px-3 py-1 bg-rose-600 hover:bg-rose-700 text-white text-xs rounded transition"
                >
                  {reviveMutation.isPending ? 'Reviving...' : 'Revive Project'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
