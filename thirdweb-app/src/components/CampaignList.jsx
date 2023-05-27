import React from "react";
import { useNavigate } from "react-router-dom";
import CampaignCard from "./CampaignCard";
import Loader from "./Loader";

const CampaignList = ({ title, loading, campaigns }) => {
  const navigate = useNavigate();
  const handleNavigate = (campaign) => {
    navigate(`/campaign/${campaign.title}`, { state: campaign });
  };

  return (
    <div>
      <h1 className="font-semibold text-[22px] text-white text-left">
        {title} ({campaigns.length})
      </h1>
      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {loading && <Loader />}

        {!loading && campaigns.length === 0 && (
          <p className="font-semibold text-[16px] leading-[30px] text-grayLight">
            Pas encore de Projets
          </p>
        )}

        {!loading &&
          campaigns.length > 0 &&
          campaigns.map((campaign) => (
            <CampaignCard
              key={campaign.pId}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))}
      </div>
    </div>
  );
};

export default CampaignList;
