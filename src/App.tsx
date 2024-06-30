import React, { useState } from "react";
import "./App.css";
import { HomePage } from "./Components/Home";
import { ExplorePage } from "./Components/Explore";
import { SearchPage } from "./Components/Search";
import { ProfilePage } from "./Components/Profile";

function App() {
  const [pageState, setPageState] = useState("home");

  const handlePageChange = (page: string) => {
    // url replace
    window.history.pushState(null, "", `/${page}`);
    setPageState(page);
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200">
        <div className="p-4">
          <h1 className="text-xl font-bold">
            <a
              // href="/"
              className="flex items-center"
              onClick={() => handlePageChange("home")}
            >
              Instagram
            </a>
          </h1>
          <nav className="mt-4">
            <ul>
              <li className="py-2">
                <a
                  // href="/home"
                  className="flex items-center"
                  onClick={() => handlePageChange("home")}
                >
                  <i className="fas fa-home mr-2"></i>
                  <span>Home</span>
                </a>
              </li>
              <li className="py-2">
                <a
                  // href="/search"
                  className="flex items-center"
                  onClick={() => handlePageChange("search")}
                >
                  <i className="fas fa-search mr-2"></i>
                  <span>Search</span>
                </a>
              </li>
              <li className="py-2">
                <a
                  // href="/explore"
                  className="flex items-center"
                  onClick={() => handlePageChange("explore")}
                >
                  {/* 나침반 fa */}
                  <i className="fas fa-compass mr-2"></i>
                  <span>Explore</span>
                </a>
              </li>
              <li className="py-2">
                <a
                  // href="/profile"
                  className="flex items-center"
                  onClick={() => handlePageChange("profile")}
                >
                  <i className="fas fa-user mr-2"></i>
                  <span>Profile</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {
          {
            home: <HomePage />,
            search: <SearchPage />,
            explore: <ExplorePage />,
            profile: <ProfilePage />,
          }[pageState]
        }
      </main>
    </div>
  );
}

export default App;
