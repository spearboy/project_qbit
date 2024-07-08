export const tabs = ["추천메뉴", "사이드"];

export const menuItems = [
  {
    id: 1,
    label: "BEST",
    name: "큐빗 돈코츠 라멘",
    price: 10000,
    imageUrl: "/img/menu01.png",
    desc: "큐빗 라멘의 근본 24시간동안 우려낸 돈코츠 라멘입니다! 진한 맛과 정성을 더해 준비했습니다.",
    optionFix: {
      type: "사이즈",
      maxSelect: "1",
      label: "필수",
      text: [
        { name: "기본", price: 0 },
        { name: "곱빼기(면2배, 차슈 2개 추가)", price: 8000 },
      ],
    },
    option: {
      type: "토핑 추가",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "차슈", price: 2000 },
        { name: "멘마", price: 1000 },
        { name: "온센타마고", price: 3000 },
        { name: "김", price: 500 },
      ],
    },
    option: {
      type: "음료",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "코카콜라", price: 2000 },
        { name: "스프라이트", price: 2000 },
        { name: "환타", price: 2000 },
        { name: "닥터페퍼", price: 2000 },
      ],
    },
  },
  {
    id: 2,
    label: "NEW",
    name: "병현 멍청 덮밥",
    price: 18000,
    imageUrl: "/img/menu02.png",
    desc: "큐빗 라멘에서 선보이는 신메뉴 가츠동입니다! 제주산 흑돼지 특등심을 수비드 조리 한 후 빠르게 튀겨냈습니다.",
    optionFix: {
      type: "사이즈",
      maxSelect: "1",
      label: "필수",
      text: [
        { name: "기본", price: 0 },
        { name: "밥 적게(돈카츠는 정사이즈)", price: 0 },
        { name: "곱빼기(밥2배, 돈카츠 1/2개 추가)", price: 8000 },
      ],
    },
    option: {
      type: "양념",
      maxSelect: "0",
      label: "선택",
      text: [
        { name: "양념 추가", price: 500 },
        { name: "양념 빼기", price: 0 },
      ],
    },
  },
  // {
  //   id: 3,
  //   name: "큐빗 마제소바",
  //   price: 9000,
  //   imageUrl: "/img/menu03.png",
  //   desc: "큐빗 라멘에서 선보이는 신메뉴 가츠동입니다! 제주산 흑돼지 특등심을 수비드 조리 한 후 빠르게 튀겨냈습니다.",
  // },
];

export const sideMenus = [
  {
    id: 4,
    label: "BEST",
    cate: "사이드",
    name: "지나가 좋아하는 교자",
    price: 6000,
    imageUrl: "/img/menu03.png",
    desc: "큐빗 라멘에서 선보이는 신메뉴 가츠동입니다! 제주산 흑돼지 특등심을 수비드 조리 한 후 빠르게 튀겨냈습니다.",
    optionFix: {
      type: "사이즈",
      label: "필수",
      text: [
        { name: "기본", price: 0 },
        { name: "큰판", price: 2000 },
        { name: "대왕판", price: 10000 },
      ],
    },
    option: {
      type: "소스",
      label: "선택",
      text: [
        { name: "간장", price: 0 },
        { name: "식초", price: 0 },
        { name: "고추가루", price: 0 },
      ],
    },
  },
  {
    id: 5,
    label: "soldout",
    name: "보미픽 고구마",
    price: 6000,
    imageUrl: "/img/menu02.png",
    desc: "큐빗 라멘에서 선보이는 신메뉴 가츠동입니다! 제주산 흑돼지 특등심을 수비드 조리 한 후 빠르게 튀겨냈습니다.",
    optionFix: {
      type: "사이즈",
      label: "필수",
      text: [
        { name: "기본", price: 0 },
        { name: "큰판", price: 2000 },
        { name: "대왕판", price: 10000 },
      ],
    },
    option: {
      type: "소스",
      label: "선택",
      text: [
        { name: "간장", price: 0 },
        { name: "식초", price: 0 },
        { name: "고추가루", price: 0 },
      ],
    },
  },
];
