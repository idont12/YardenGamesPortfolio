import ReactGA from "react-ga4";

export const initGA = () => {
  if (import.meta.env.MODE === "production") {
    ReactGA.initialize(import.meta.env.VITE_GA_ID);
  }
};

export const trackPage = (path) => {
  if (import.meta.env.MODE === "production") {
    ReactGA.send({
      hitType: "pageview",
      page: path,
    });
  }
};

export const trackEvent = (action, category, label) => {
  if (import.meta.env.MODE === "production") {
    ReactGA.event({
      action,
      category,
      label,
    });
  }
};
