import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FaceImage from "../image/face.png";
import MainText from "../image/main-text.png";

const ApiLogin = ({ setAuthenticate }) => {
  const clientId =
    "349163810320-i194g22jcpt6jk7i7f6lublu2qto71jb.apps.googleusercontent.com";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState(""); //구글에서 받아온 이메일 저장 용도
  const [emailState, setEmailState] = useState("none"); //받아온 이메일 확인용

  const email = useSelector((state) => state.email);

  const responseGoogle = async (response) => {
    window.localStorage.setItem("user_id", response.googleId);
    window.localStorage.setItem("user_email", response.profileObj.email);
    window.localStorage.setItem("user_name", response.profileObj.name);
    setAuthenticate(true);
    setUserEmail(localStorage?.getItem("user_email"));
    await setUserStatus();
    await setEmailState(email);
    navigate("/");
  };
  const logout = () => {
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("user_email");
    window.localStorage.removeItem("user_name");
    setAuthenticate(false);
    setUserEmail("");
    setEmailState("none");
    setUserStatus();
  };

  //reducer의 state에 구글에서 불러온 이메일 값 저장
  const setUserStatus = () => {
    dispatch({ type: "GET_STATUS", payload: { userEmail } });
  };

  return (
    <div className="login-page">
      <img src={FaceImage} className="face-image" />
      <div className="login-background">
        <img src={MainText} className="text-image" />
        <div className="api-login-button-area">
          <button className="button-naver">
            <img
              width="100%"
              src="https://blog.kakaocdn.net/dn/OJ1qC/btrbe6cIFPq/4kLO2R4uyZBVksNVpZQZ1K/tfile.ico"
            />
            네이버로 로그인
          </button>
          <button className="button-kakao">
            <img
              width="100%"
              src="https://m.gelatofactory.co.kr/web/upload/img/m/ico-kakao.png"
            />
            카카오로 로그인
          </button>
          {localStorage?.getItem("user_id") == null ? (
            <GoogleLogin
              className="google-button"
              clientId={clientId}
              buttonText="구글로 로그인"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          ) : (
            <GoogleLogout
              className="google-button"
              clientId={clientId}
              buttonText="로그아웃"
              onLogoutSuccess={logout}
            />
          )}
        </div>
        <div>Login? : {emailState /*저장된 이메일 값 보여줌*/}</div>
        <div>
          처음이신가요? {""}
          <a href="#">
            <b>회원가입</b>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ApiLogin;
