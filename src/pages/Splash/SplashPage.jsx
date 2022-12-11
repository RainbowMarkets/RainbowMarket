import { useEffect, useState } from "react";
import LoginModal from "../../components/Login/LoginModal/LoginModal"
import Splash from "../../components/Splash/Splash";

export default function SplashPage() {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsActive(true);
        }, 1000);
    })
  return (
    <>
        {isActive ? (
            <LoginModal isActive={isActive} />
        ) : (
            <Splash isActive={isActive} />
        )}
    </>
  );
}


