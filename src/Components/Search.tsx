export const SearchPage = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[640px] p-4">
        <h1 className="text-2xl font-bold mb-4">검색</h1>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="검색"
            className="w-full p-2 bg-gray-100 rounded-lg focus:outline-none"
          />
        </div>
        <hr />
        <div className="h-[20px]" />
        <div>
          <h2 className="text-lg font-semibold mb-2">최근 검색 항목</h2>
          <p className="text-gray-500">최근 검색 내역 없음.</p>
        </div>
      </div>
    </div>
  );
};
