import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import CampaignList from "../components/CampaignList";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <CampaignList title="Projets" loading={isLoading} campaigns={campaigns} />
  );
};

export default Home;
