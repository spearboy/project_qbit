# PROJECT - QBIT

QR 테이블 오더를 구현한 시스템 포트폴리오 입니다.

## 프로젝트 개요

프로젝트 큐빗은 기존의 불편했던 메뉴판과 키오스크를 대체할 QR주문을 제시합니다. 멀리 붙어있는 메뉴판, 테이블당 한두개 있는 메뉴판, 줄서서 주문해야하는 키오스크, 이제 큐빗을 이용해 기다림과 불편함 없이 QR스캔으로 여러명이 같이 메뉴판을 보며 주문합니다. 큐빗은 동시에 메뉴판을 보며 서로의 메뉴를 확인하며 주문이 가능합니다.

## 사이트 링크

### 메뉴판

**모바일 & 테블릿**  
![사이트 QR](qr.png)

1. [메인 랜딩 페이지](https://project-qbit.vercel.app/)
2. [메뉴판 메인 페이지](https://project-qbit.vercel.app/main)
3. [메뉴판 메뉴 디테일](https://project-qbit.vercel.app/detail?id=1)
4. [메뉴판 카트](https://project-qbit.vercel.app/bag)
5. [메뉴판 계산서](https://project-qbit.vercel.app/result)
6. [메뉴판 주문완료](https://project-qbit.vercel.app/complete)

# 작업 환경

## 사용 스택

프론트엔드 - Next.js
백엔드 - node.js express
데이터베이스 - mongodb

## 설치 라이브러리

작업시 필요한 라이브러리를 정리했습니다.

```
npx create-next-app@latest
npm i sass
npm i gsap
npm i swiper
npm install react-slick
npm install slick-carousel 설치 필요
(탭 메뉴 슬라이드 할 때 필요한 라이브러리)

sudo npm install socket.io socket.io-client
npm install --save react-lottie-player
npm install react-lottie

sudo npm install next-auth axios jsonwebtoken cookie // 로그인시 필요한 패키지
npm install mongoose
npm install @auth/prisma-adapter
npx prisma generate

```

---

## 네이버 아이디 연동

사용 API 필수

```
회원 이름
연락처 이메일 주소
휴대전화번호
```

```선택
성별
생일
연령대
출생연도
```

NAVER_CLIENT_ID, NAVER_CLIENT_SECRET 은 .env.local
