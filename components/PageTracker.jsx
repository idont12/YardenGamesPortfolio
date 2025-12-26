import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPage } from "../utils/analytics";

export default function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    const fullPath = location.pathname + location.hash;
    trackPage(fullPath);
  }, [location]);

  return null;
}
