export const HomePage = () => {
  const dummyPostList = [
    {
      id: 1,
      username: "hanol_issue",
      timeAgo: "1일",
      imageUrl: "https://picsum.photos/seed/travel1/600/400",
      description: "이렇게 깜짝 이벤트 해주면 좋아서 기절할따구요!",
    },
    {
      id: 2,
      username: "hanol_issue",
      timeAgo: "2일",
      imageUrl: "https://picsum.photos/seed/travel2/600/400",
      description: "여행 사진 올려요!",
    },
    {
      id: 3,
      username: "hanol_issue",
      timeAgo: "3일",
      imageUrl: "https://picsum.photos/seed/travel3/600/400",
      description: "멋진 풍경이죠?",
    },
    {
      id: 4,
      username: "hanol_issue",
      timeAgo: "4일",
      imageUrl: "https://picsum.photos/seed/travel4/600/400",
      description: "이곳은 정말 아름다워요!",
    },
    {
      id: 5,
      username: "hanol_issue",
      timeAgo: "5일",
      imageUrl: "https://picsum.photos/seed/travel5/600/400",
      description: "여기서 휴가를 보내고 싶어요!",
    },
  ];

  return (
    <>
      <div className="max-w-3xl mx-auto">
        {/* Stories */}
        <div className="flex space-x-4 overflow-x-auto py-4">
          <div className="w-16 h-16 rounded-full bg-gray-300"></div>
          <div className="w-16 h-16 rounded-full bg-gray-300"></div>
          <div className="w-16 h-16 rounded-full bg-gray-300"></div>
          <div className="w-16 h-16 rounded-full bg-gray-300"></div>
          <div className="w-16 h-16 rounded-full bg-gray-300"></div>
          <div className="w-16 h-16 rounded-full bg-gray-300"></div>
        </div>

        {/* Post */}
        {dummyPostList.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-4"
          >
            <div className="p-4 flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div className="ml-4">
                <p className="text-sm font-bold">{post.username}</p>
                <p className="text-xs text-gray-500">{post.timeAgo}</p>
              </div>
            </div>
            <img src={post.imageUrl} alt="Post" className="w-full" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <button>
                    <i className="fas fa-heart mr-1"></i>
                  </button>
                  <button>
                    <i className="fas fa-comment mr-1"></i>
                  </button>
                  <button>
                    <i className="fas fa-paper-plane mr-1"></i>
                  </button>
                </div>
                <button>
                  <i className="fas fa-bookmark mr-1"></i>
                </button>
              </div>
              <p className="mt-4 text-sm">
                <span className="font-bold">{post.username}</span>{" "}
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
