import { House } from '../House/House';
import type { House as HouseType } from "@/types/House";

interface HousesListProps {
  houses: HouseType[];
  onHouseSelect: (house: HouseType) => void;
  selectedHouseId?: string;
  isLoading?: boolean;
}

export default function HousesList({ 
  houses, 
  onHouseSelect,
  selectedHouseId,
  isLoading = false
}: HousesListProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full min-h-[200px]">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"/>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {houses.map((house) => (
        <House 
          key={house.url} 
          house={house} 
          onSelect={() => onHouseSelect(house)}
          isSelected={selectedHouseId === house.url}
        />
      ))}
    </div>
  );
}
