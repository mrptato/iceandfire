'use client';

import { useState } from 'react';
import type { House as HouseType } from "@/types/House";
import HousesList from "../HouseList/HousesList";
import { SwornMembers } from '../SwornMembers/SwornMembers';
import { Pagination } from '../Pagination/Pagination';

export function HouseLayout({ houses, currentPage, lastPage }: { houses: HouseType[], currentPage: number, lastPage: boolean }) {
    const [selectedHouse, setSelectedHouse] = useState<HouseType | null>(null);

    return (
        <div className="mt-8 flex gap-8">
            <div className="w-1/2 flex flex-col h-[850px]">
                <h2 className="text-2xl font-semibold text-gray-200 mb-6">Houses</h2>
                <div className="flex-1 mb-4 overflow-y-auto">
                    <HousesList
                        houses={houses}
                        onHouseSelect={setSelectedHouse}
                        selectedHouseId={selectedHouse?.url}
                    />
                </div>
                <div className="mt-auto">
                    <Pagination currentPage={currentPage} lastPage={lastPage} />
                </div>
            </div>

            <div className="w-1/2 flex flex-col">
                <h2 className="text-2xl font-semibold text-gray-200 mb-6">
                    {selectedHouse?.name ? `Sworn members of ${selectedHouse?.name}` : 'Sworn members'}
                </h2>
                <div className="bg-gray-800 rounded-lg h-[700px]">
                    {!selectedHouse ? (
                        <div className="flex items-center justify-center h-full text-gray-400">
                            Click on a house to see its sworn members
                        </div>
                    ) : (
                        <div className="h-full overflow-y-auto p-6">
                            <SwornMembers urls={selectedHouse.swornMembers} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
} 