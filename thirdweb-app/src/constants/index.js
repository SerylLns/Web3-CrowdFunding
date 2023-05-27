import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
} from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "projet",
    imgUrl: createCampaign,
    link: "/create-campaign",
  },
  {
    name: "paiement",
    imgUrl: payment,
    link: "/",
    disabled: true,
  },
  {
    name: "retirer",
    imgUrl: withdraw,
    link: "/",
    disabled: true,
  },
  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
  },
  {
    name: "logout",
    imgUrl: logout,
    link: "/",
    disabled: true,
  },
];
