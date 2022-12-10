import { Link } from "react-router-dom";
import MainLogoWhite from "../../../assets/images/mainLogoWhite.png";
import { LogInModalBox } from "./loginModal.style";

function LoginModal({ isActive }) {
    return (
        <LogInModalBox isActive={isActive}>
            <img
                className="main-logo-white"
                src={MainLogoWhite}
                alt="무지개마켓 로그인"
            />
            <div className="login-box">
                <button className="login-box-button" type="button">
                    카카오톡 계정으로 로그인
                </button>
                <button className="login-box-button" type="button">
                    구글 계정으로 로그인
                </button>
                <button className="login-box-button" type="button">
                    페이스북 계정으로 로그인
                </button>
                <div className="signup-box">
                    <Link to="/login" className="email-login">이메일로 로그인</Link>
                    <Link to="/join" className="join-link">회원가입</Link>
                </div>
            </div>
        </LogInModalBox>
    )
}

export default LoginModal