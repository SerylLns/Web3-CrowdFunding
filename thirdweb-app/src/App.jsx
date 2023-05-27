import { ConnectWallet } from "@thirdweb-dev/react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import CreateCampaign from "./pages/CreateCampaign";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CampaignDetail from "./pages/CampaignDetail";

export default function App() {
  return (
    <div
      id="mainContainer"
      className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row"
    >
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign/:id" element={<CampaignDetail />} />
        </Routes>
      </div>
    </div>
  );
}
