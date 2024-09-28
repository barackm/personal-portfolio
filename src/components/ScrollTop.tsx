import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = ({ children }: PropsWithChildren) => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowLoadingScreen(true);
    const timeout = setTimeout(() => {
      setShowLoadingScreen(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{showLoadingScreen ? <div>Loading...</div> : children}</>;
};

export default ScrollToTop;
