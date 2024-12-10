'use client';

import { Character } from '@/types/Character';

export function MembersList({ members }: { members: Character[] }) {
    return (
        <div className="space-y-4">
            {members.map((member) => (
                <div
                    key={member.url}
                    className="p-4 bg-gray-700 rounded-lg"
                >
                    <h3 className="text-lg font-semibold text-gray-200">
                        {member.name || 'Unknown Member'}
                    </h3>
                    <div className="mt-2 text-sm text-gray-400">
                        {member.died ? (
                            <>
                                <span className="text-red-400">Status: Dead</span>
                                <div className="mt-1">Died: {member.died}</div>
                            </>
                        ) : (
                            <span className="text-green-400">Status: Alive</span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
} 