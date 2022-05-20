import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FaceImage from "../image/face.png"
import MainText from "../image/main-text.png"

const Login = () => {
  return (
    <div className='login-page'>
        <img src={FaceImage} className="face-image"/>
        <div className='login-background'>
            <img src={MainText} className="text-image"/>
            <div className="input-background">
                <div className='login-input'>
                    ID:<input className='login-input-box'/>
                </div>
                <div className='login-input'>
                    PW:<input className='login-input-box'/>
                </div>
                <div className='login-button-area'>
                    <div className='find-button'><b>계정찾기</b></div>
                    <div className='login-button'><b>LOGIN</b></div>
                </div>
            </div>
            <div className="api-login-button-area">
                <button><img width="100%" src="http://lab.anybuild.co.kr/API/naver/img/naver_g_b_login.PNG"/></button>
                <button><img width="100%" src="https://m.gelatofactory.co.kr/web/upload/img/m/ico-kakao.png"/></button>
                <button><img width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/36px-Google_%22G%22_Logo.svg.png"/></button>
            </div>
            <div>처음이신가요? <a href="#"><b>회원가입</b></a></div>
        </div>
      
    </div>
  )
}

export default Login
