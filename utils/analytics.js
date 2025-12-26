import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GA_ID;

export const initGA = () => {
  if (GA_ID) {
    ReactGA.initialize(GA_ID);
    console.log("GA Initialized with ID:", GA_ID);
  }
};

export const trackPage = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};