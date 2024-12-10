export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-gradient-to-b from-gray-900 to-gray-800">
      <main className="flex-grow p-8">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-amber-500 mb-4">
            A Song of Ice and Fire
          </h1>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">Houses</h2>
          <div className="w-full flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
          </div>
        </div>
      </main>
      <footer className="py-4 text-center text-gray-400 border-t border-gray-700">
        <p>Data provided by An API of Ice and Fire</p>
      </footer>
    </div>
  );
} 