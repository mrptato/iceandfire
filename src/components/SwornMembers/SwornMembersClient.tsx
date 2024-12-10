'use client';

import { Suspense } from 'react';
import { SwornMembers } from './SwornMembers';

export function SwornMembersClient({ urls }: { urls: string[] }) {
  return (
    <Suspense 
      fallback={
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-amber-500" />
        </div>
      }
    >
      <SwornMembers urls={urls} />
    </Suspense>
  );
} 