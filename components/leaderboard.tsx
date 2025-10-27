"use client";

import { useEffect, useState } from "react";

interface LeaderboardEntry {
  name: string;
  created_at: string;
}

export function Leaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");

  const fetchEntries = () => {
    fetch('/api/leaderboard')
      .then(res => res.json())
      .then(data => {
        setEntries(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setEntries([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const response = await fetch('/api/leaderboard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.trim() })
    });

    if (response.status === 400) {
      alert('Inappropriate name detected. Please use a different name.');
      return;
    }

    if (response.status === 429) {
      alert('Maximum submissions reached (2 per IP address)');
      setShowPopup(false);
      return;
    }

    setName("");
    setShowPopup(false);
    fetchEntries();
  };

  if (loading) return <p className="text-center text-yellow-900">Loading...</p>;

  return (
    <div className="space-y-4">
      <button
        onClick={() => setShowPopup(true)}
        className="w-full rounded border-4 border-orange-700 bg-orange-500 px-6 py-3 text-lg font-medium text-white shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.3),inset_4px_4px_0px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
      >
        Join Leaderboard
      </button>

      <div className="space-y-3">
        {entries.map((entry, index) => (
          <div
            key={index}
            className="flex justify-between rounded border-3 border-orange-700 bg-orange-500 px-4 py-3 text-white shadow-[inset_-2px_-2px_0px_rgba(0,0,0,0.3),inset_2px_2px_0px_rgba(255,255,255,0.3)]"
          >
            <span className="font-bold">#{index + 1} {entry.name}</span>
            <span className="text-sm">{new Date(entry.created_at).toLocaleDateString()}</span>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50">
          <div className="rounded-lg border-4 border-cyan-700 bg-cyan-100 p-6 shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.1),inset_4px_4px_0px_rgba(255,255,255,0.5)]">
            <h3 className="mb-4 text-xl font-bold text-cyan-900">Enter Your Name</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded border-2 border-cyan-700 px-4 py-2 text-cyan-900"
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 rounded border-4 border-green-700 bg-green-500 px-4 py-2 font-medium text-white shadow-[inset_-2px_-2px_0px_rgba(0,0,0,0.3),inset_2px_2px_0px_rgba(255,255,255,0.3)] hover:scale-105"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowPopup(false)}
                  className="flex-1 rounded border-4 border-red-700 bg-red-500 px-4 py-2 font-medium text-white shadow-[inset_-2px_-2px_0px_rgba(0,0,0,0.3),inset_2px_2px_0px_rgba(255,255,255,0.3)] hover:scale-105"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
