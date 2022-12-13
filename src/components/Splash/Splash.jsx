import MainLogo from "../../assets/images/mainLogo.png";
import { SplashBox } from "./Splash.style";

function Splash({ isActive }) {
  return (
    <SplashBox isActive={isActive}>
      <img className="logo-img" src={MainLogo} alt="" />
      <h1 className="hidden">무지개마켓</h1>
    </SplashBox>
  );
}

export default Splash;
