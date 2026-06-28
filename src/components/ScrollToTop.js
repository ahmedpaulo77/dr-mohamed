import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // السطر السحري اللي بيطلع الشاشة لفوق أول ما الصفحة تتغير
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;