const express = require("express");
const cors = require("cors");
const app = express();

// CORS 설정
app.use(
  cors({
    origin: ["http://localhost:3000", "http://qbitorder.com"], // 허용할 도메인 추가
    credentials: true, // 쿠키와 함께 요청을 허용
  })
);

const mongoose = require("mongoose");
const User = require("./models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const secret = "qbit";

app.use(express.json());
app.use(cookieParser());

mongoose.connect(
  "mongodb+srv://wlsakf23:rudgml1221@cluster0.q3mmet5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/", (req, res) => {
  res.json("ok");
});

// 로그인
app.post("/login", async (req, res) => {
  const { ID, password } = req.body;

  try {
    const userInfo = await User.findOne({ youID: ID });
    if (!userInfo) {
      return res
        .status(400)
        .json({ message: "아이디 또는 비밀번호가 정확하지 않습니다." });
    }

    // 비밀번호 검사
    const isPassValid = bcrypt.compareSync(password, userInfo.youPass);
    if (!isPassValid) {
      return res
        .status(400)
        .json({ message: "아이디 또는 비밀번호가 정확하지 않습니다." });
    }

    // 로그인(토큰 발행)
    jwt.sign(
      { youName: userInfo.youName, youID: userInfo.youID, id: userInfo._id },
      secret,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) {
          return res.status(500).json({ message: err.message });
        }
        // 발행한 토큰을 쿠키에 저장
        res.cookie("token", token, { httpOnly: true, secure: true }).json({
          id: userInfo._id,
          youName: userInfo.youName,
          youID: userInfo.youID,
          token,
        });
      }
    );
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// 로그인 확인
app.get("/profile", (req, res) => {
  const { token } = req.cookies;

  // 토큰 값 유효성 확인
  jwt.verify(token, secret, (err, info) => {
    if (err) {
      return res.json({ message: "토큰 검증 실패, 관리자에게 문의하세요!" });
    }
    res.json(info);
  });
});

// 로그아웃
app.post("/logout", (req, res) => {
  res.cookie("token", "").json({ message: "로그아웃 성공" });
});

app.listen(3000, () => {
  console.log("3000 서버가 작동되고 있습니다.");
});
