export const ProfilePage = () => {
  return (
    <div className="flex justify-center p-6  h-screen">
      <div className="max-w-4xl w-full bg-white p-6">
        <div className="flex items-center">
          <div className="relative">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-32 h-32 rounded-full"
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded-lg">
              메모...
            </div>
          </div>
          <div className="ml-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold mr-4">dev.root.lee</h1>
              <button className="bg-gray-200 px-4 py-2 rounded-lg mr-2">
                프로필 편집
              </button>
              <button className="bg-gray-200 px-4 py-2 rounded-lg">
                보관된 스토리 보기
              </button>
              <i className="fas fa-cog text-2xl ml-2"></i>
            </div>
            <div className="mt-4 flex space-x-4">
              <div>
                게시물 <span className="font-bold">19</span>
              </div>
              <div>
                팔로워 <span className="font-bold">478</span>
              </div>
              <div>
                팔로우 <span className="font-bold">754</span>
              </div>
            </div>
            <div className="mt-4">
              <div>Root</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
