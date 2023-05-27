import React, { useEffect, useState } from "react";
import CampaignCard from "../components/CampaignCard";
import { useStateContext } from "../context";
import CampaignList from "../components/CampaignList";

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <CampaignList
      title="Mes Projets"
      loading={isLoading}
      campaigns={campaigns}
    />
  );
};

export default Profile;
