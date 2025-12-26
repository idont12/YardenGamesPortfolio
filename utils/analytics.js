import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GA_ID;

export const initGA = () => {
  if (GA_ID) {
    ReactGA.initialize(GA_ID);
    console.log("GA Initialized");
  }
};

export const trackPage = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (category, action, label) => {
    // console.log("Tracking Event:", { category, action, label }); // Add this line
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};