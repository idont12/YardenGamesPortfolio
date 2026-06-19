import ReactGA from "react-ga4";

const GA_ID =
  import.meta.env.VITE_GA_ID ||
  window.__GA_ID__ ||
  document.querySelector('meta[name="ga-id"]')?.content ||
  "";

let isInitialized = false;

export const initGA = () => {
  if (isInitialized) {
    return true;
  }

  if (!GA_ID) {
    console.warn(
      "GA not initialized: missing measurement ID. Set VITE_GA_ID, window.__GA_ID__, or a meta[name=\"ga-id\"] tag."
    );
    return false;
  }

  ReactGA.initialize(GA_ID);
  isInitialized = true;
  console.log("GA Initialized");
  return true;
};

export const trackPage = (path) => {
  if (!initGA()) {
    return;
  }

  if (import.meta.env.DEV) {
    console.debug("GA pageview", path);
  }

  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (category, action, label) => {
  if (!initGA()) {
    return;
  }

  if (import.meta.env.DEV) {
    console.debug("GA event", { category, action, label });
  }

  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};