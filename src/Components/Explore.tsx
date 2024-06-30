export const ExplorePage = () => {
  const dummyImages = [
    "https://fastly.picsum.photos/id/7/600/600.jpg?hmac=2WMHWjX5YpSEZT-_5fFqEblhtDtpAxaXV898cibGLY8",
    "https://fastly.picsum.photos/id/419/600/600.jpg?hmac=JxDlVqTnDXUmIH151loHzAZDwfVXGLvT17tSQY5Wfls",
    "https://fastly.picsum.photos/id/900/600/600.jpg?hmac=4Wbmj-iAhvC5eF3eoDzwJvzqUC9WSgX3MfeaBRrF5uQ",
    "https://fastly.picsum.photos/id/119/600/600.jpg?hmac=eStlgDtxByisy-CHoCTBkwB5gMAXhJJec9kVPk1UOmg",
    "https://fastly.picsum.photos/id/537/600/600.jpg?hmac=jb9j7NRsalqBzVuz963tSeV-c3Ea4eoD134WnbwbWrI",
    "https://fastly.picsum.photos/id/1018/600/600.jpg?hmac=B_xXmnBCwBofg-Be3_2ZKV3toiHbMHhlfYmi9TleAaU",
    "https://fastly.picsum.photos/id/744/600/600.jpg?hmac=QWR3QPePRzXNfGvesobnH-txrq5qWSN9PkGmh1VJD1w",
    "https://fastly.picsum.photos/id/954/600/600.jpg?hmac=qa7eliq7BtCUMrigRjg9vxgH0qj6Oj1fM6AVYnYdQNg",
    "https://fastly.picsum.photos/id/254/600/600.jpg?hmac=jYP9ouT1omVqH34ZflNORaCdREWZpTLMOQq8pXY8RDU",
    "https://fastly.picsum.photos/id/912/600/600.jpg?hmac=O7ePZaS2tMxczRCfNQizxtZXCxd1nkWX5k96RrFbL98",
    "https://fastly.picsum.photos/id/7/600/600.jpg?hmac=2WMHWjX5YpSEZT-_5fFqEblhtDtpAxaXV898cibGLY8",
    "https://fastly.picsum.photos/id/419/600/600.jpg?hmac=JxDlVqTnDXUmIH151loHzAZDwfVXGLvT17tSQY5Wfls",
    "https://fastly.picsum.photos/id/900/600/600.jpg?hmac=4Wbmj-iAhvC5eF3eoDzwJvzqUC9WSgX3MfeaBRrF5uQ",
    "https://fastly.picsum.photos/id/119/600/600.jpg?hmac=eStlgDtxByisy-CHoCTBkwB5gMAXhJJec9kVPk1UOmg",
    "https://fastly.picsum.photos/id/537/600/600.jpg?hmac=jb9j7NRsalqBzVuz963tSeV-c3Ea4eoD134WnbwbWrI",
    "https://fastly.picsum.photos/id/1018/600/600.jpg?hmac=B_xXmnBCwBofg-Be3_2ZKV3toiHbMHhlfYmi9TleAaU",
    "https://fastly.picsum.photos/id/744/600/600.jpg?hmac=QWR3QPePRzXNfGvesobnH-txrq5qWSN9PkGmh1VJD1w",
    "https://fastly.picsum.photos/id/954/600/600.jpg?hmac=qa7eliq7BtCUMrigRjg9vxgH0qj6Oj1fM6AVYnYdQNg",
    "https://fastly.picsum.photos/id/254/600/600.jpg?hmac=jYP9ouT1omVqH34ZflNORaCdREWZpTLMOQq8pXY8RDU",
    "https://fastly.picsum.photos/id/912/600/600.jpg?hmac=O7ePZaS2tMxczRCfNQizxtZXCxd1nkWX5k96RrFbL98",
    "https://fastly.picsum.photos/id/119/600/600.jpg?hmac=eStlgDtxByisy-CHoCTBkwB5gMAXhJJec9kVPk1UOmg",
  ];
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-1">
        {dummyImages.map((src, index) => (
          <div
            key={index}
            className="w-64 h-64 bg-gray-200 flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Content ${index + 1}`}
              className="object-cover h-full w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
