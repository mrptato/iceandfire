import type { House as HouseType } from "@/types/House";

export function House({
    house,
    onSelect,
    isSelected
}: {
    house: HouseType;
    onSelect: () => void;
    isSelected?: boolean;
}) {
    return (
        <div
            onClick={onSelect}
            className={`p-4 rounded-lg cursor-pointer transition-colors ${isSelected
                ? 'bg-amber-500 text-gray-900'
                : 'bg-gray-800 hover:bg-gray-700'
                }`}
        >
            <div className="flex justify-between items-center">
                <h2 className="text-gray-200">
                    {house.name}
                </h2>
                <p className="text-gray-400">
                    ({house.swornMembers.length} members)
                </p>
            </div>
        </div>
    );
}
