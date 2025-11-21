import { useNavigate } from "react-router";
import { motion } from "motion/react";

export default function SpashScreen() {
  const navigate = useNavigate();
  const isFirstVisit = !localStorage.getItem("visited");

  return (
    <motion.div
      className="splash-screen"
      animate={{
        scale: 1.5,
        opacity: 1,
        transition: { duration: 0.1 },
      }}
      onAnimationComplete={() =>
        navigate(isFirstVisit ? "/LandingPage" : "/Home")
      }
    ></motion.div>
  );
}
