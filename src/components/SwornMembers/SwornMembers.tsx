'use client';

import { useEffect, useState } from 'react';
import { Character } from '@/types/Character';
import { MembersList } from './MembersList';

const FETCH_DELAY = 50;

export function SwornMembers({ urls }: { urls: string[] }) {
  const [members, setMembers] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setMembers([]);
    setCurrentIndex(0);
    setError(null);
  }, [urls]);

  useEffect(() => {
    if (!urls.length || currentIndex >= urls.length) return;
    
    let mounted = true;
    setLoading(true);

    const fetchNext = async () => {
      try {
        const response = await fetch(`/api/members?url=${encodeURIComponent(urls[currentIndex])}`)
          .then(res => res.json());
        
        if (mounted) {
          setMembers(prev => [...prev, response]);
          setLoading(false);

          setTimeout(() => {
            if (mounted) setCurrentIndex(prev => prev + 1);
          }, FETCH_DELAY);
        }
      } catch (err) {
        console.error('Failed to fetch member:', err);
        if (mounted) {
          setError('Failed to load members');
          setLoading(false);
        }
      }
    };

    fetchNext();

    return () => {
      mounted = false;
    };
  }, [urls, currentIndex]);

  if (!urls.length) {
    return <div className="text-gray-400">This house has no sworn members</div>;
  }

  if (error) {
    return <div className="text-red-400">{error}</div>;
  }

  return (
    <div className="space-y-4">
      <MembersList members={members} />
      {loading && (
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-amber-500" />
        </div>
      )}
      <div className="text-sm text-gray-400 text-center">
        Loading members: {members.length}/{urls.length}
      </div>
    </div>
  );
}