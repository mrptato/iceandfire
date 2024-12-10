'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

interface PaginationProps {
    currentPage: number;
    lastPage: boolean;
}

const buttonClass = 'px-4 py-2 w-24 bg-amber-500 text-gray-900 rounded-lg hover:bg-amber-400 transition-colors font-semibold';

export function Pagination({ currentPage, lastPage }: PaginationProps) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const handlePageChange = (newPage: number) => {
        if (newPage < 1) return;
        startTransition(() => {
            router.push(`/?page=${newPage}`);
        });
    };

    return (
        <div className="flex items-center justify-center gap-4 mt-8">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1 || isPending}
                className={`${buttonClass} ${
                    currentPage === 1 || isPending
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-amber-400'
                }`}
            >
                Prev
            </button>
            
            <div className="text-white font-semibold text-lg">
                {currentPage}
            </div>

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={isPending || lastPage}
                className={`${buttonClass} ${
                    lastPage || isPending
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-amber-400'
                }`}
            >
                Next
            </button>
        </div>
    );
}
