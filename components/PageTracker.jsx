import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPage } from "../utils/analytics";

export default function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPage(location.pathname);
  }, [location]);

  return null;
}
