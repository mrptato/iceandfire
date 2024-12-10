import { Pagination } from "@/components/Pagination/Pagination";
import { Suspense } from "react";
import { HouseLayout } from "@/components/HouseLayout/HouseLayout";

const HOUSES_URL = "https://www.anapioficeandfire.com/api/houses";
const PAGE_SIZE = 10;

async function getHouses(currentPage: number) {
  const res = await fetch(
    `${HOUSES_URL}?page=${currentPage}&pageSize=${PAGE_SIZE}`,
    { cache: 'no-store' }
  );
  if (!res.ok) throw new Error('Failed to fetch houses');
  return res.json();
}

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Home({
  searchParams,
}: PageProps) {
  const params = await Promise.resolve(searchParams);
  const currentPage = Number(params?.page) || 1;

  const houses = await getHouses(currentPage);
  const lastPage = houses.length < 10;

  return (
    <div className="flex flex-col min-h-screen justify-between bg-gradient-to-b from-gray-900 to-gray-800">
      <main className="flex-grow p-8">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-amber-500 mb-4">
            A Song of Ice and Fire
          </h1>
        </div>
        <Suspense fallback={
          <div className="w-full flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
          </div>
        }>
          <HouseLayout houses={houses} currentPage={currentPage} lastPage={lastPage} />
        </Suspense>
      </main>
      <footer className="py-4 text-center text-gray-400 border-t border-gray-700">
        <p>Data provided by An API of Ice and Fire</p>
      </footer>
    </div>
  );
}
