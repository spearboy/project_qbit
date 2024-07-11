"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import axios from "axios";

// 로그인 페이지 컴포넌트
const LoginPage = () => {
  // useState 훅을 사용하여 아이디, 비밀번호, 아이디 저장, 자동 로그인 상태를 관리합니다.
  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();

  // 컴포넌트가 마운트될 때 isMounted 상태를 true로 설정
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 로그인 버튼 클릭 시 실행되는 함수
  const handleLogin = async (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 리로드를 막습니다.

    try {
      // axios를 사용하여 로그인 API 요청을 보냅니다.
      const response = await axios.post(
        "http://localhost:3000/login",
        {
          ID,
          password,
        },
        {
          withCredentials: true, // 쿠키를 포함시키기 위해 설정
        }
      );

      // rememberMe 상태에 따라 로컬 스토리지에 아이디를 저장하거나 삭제합니다.
      if (rememberMe) {
        localStorage.setItem("ID", ID);
      } else {
        localStorage.removeItem("ID");
      }

      // autoLogin 상태에 따라 로컬 스토리지에 자동 로그인 설정을 저장하거나 삭제합니다.
      if (autoLogin) {
        localStorage.setItem("autoLogin", "true");
      } else {
        localStorage.removeItem("autoLogin");
      }

      // 로그인 성공 시 홈 페이지로 리다이렉트합니다.
      router.push("/admin");
    } catch (error) {
      console.error("로그인 실패:", error); // 로그인 실패 시 에러를 콘솔에 출력합니다.
    }
  };

  // 컴포넌트가 마운트된 후에만 렌더링
  if (!isMounted) {
    return null;
  }

  return (
    <div className="container">
      <div className="login__wrapper">
        <div className="login__container">
          <div className="login__logo_wrap">
            <div className="login__logo">
              <Image
                src="/img/logo.png"
                alt="로고"
                layout="intrinsic"
                width={150}
                height={50}
              />
            </div>
          </div>
          {/* 로그인 폼 */}
          <form onSubmit={handleLogin}>
            <div className="login__info">
              <div className="id__wrap">
                <label className="login_id">아이디</label>
                <input
                  type="text"
                  placeholder="아이디를 입력해주세요"
                  value={ID} // 아이디 입력 필드의 값입니다.
                  onChange={(e) => setID(e.target.value)} // 아이디 입력 필드의 값이 변경될 때 상태를 업데이트합니다.
                />
                <label className="login_password">비밀번호</label>
                <input
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  value={password} // 비밀번호 입력 필드의 값입니다.
                  onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력 필드의 값이 변경될 때 상태를 업데이트합니다.
                />
              </div>
              {/* 로그인 버튼과 회원가입 버튼 */}
              <div className="login__btn">
                <Button className={"main__button"}>로그인</Button>
                <Button className={"signup__button"}>회원가입</Button>
                <span className="login__find">아이디/비밀번호 찾기</span>
              </div>
              {/* 아이디 저장 및 자동 로그인 체크박스 */}
              <div className="id__save">
                <input
                  type="checkbox"
                  checked={rememberMe} // 아이디 저장 체크박스의 상태입니다.
                  onChange={(e) => setRememberMe(e.target.checked)} // 체크박스 상태가 변경될 때 상태를 업데이트합니다.
                />
                <p>아이디 저장</p>
              </div>
              <div className="auto__login">
                <input
                  type="checkbox"
                  checked={autoLogin} // 자동 로그인 체크박스의 상태입니다.
                  onChange={(e) => setAutoLogin(e.target.checked)} // 체크박스 상태가 변경될 때 상태를 업데이트합니다.
                />
                <p>자동 로그인</p>
              </div>
            </div>
          </form>
          {/* 소셜 로그인 버튼 */}
          <div className="social__login">
            <ul>
              <li className="naver__login">
                <Image
                  src="/img/naver.svg"
                  alt="네이버 로그인"
                  layout="intrinsic"
                  width={50}
                  height={50}
                  onClick={() => signIn("naver")}
                />
              </li>
              {/* 다른 소셜 로그인 버튼 추가 가능 */}
              <li className="kakao__login">
                <Image
                  src="/img/kakao.svg"
                  alt="카카오 로그인"
                  width={50}
                  height={50}
                />
              </li>
            </ul>
          </div>

          <div className="login__footer">
            <p className="footer__call">고객센터 3828-0398</p>
            <p className="footer__time">평일 오전9:00~6:00</p>
            <div className="login__copy">
              <p>Copyright 2024. Gina All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
