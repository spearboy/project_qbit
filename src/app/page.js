"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { logoImg } from "@/assets/images/logo.svg"
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const logoRef = useRef(null);

  useEffect(() => {
    gsap.to(logoRef.current, { rotation: 360, duration: 3, ease: "power1.inOut" });

    const timer = setTimeout(() => {
      // router.push("/main");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="randing_page_wrapper">
      <Image ref={logoRef} src={logoImg} alt="Logo" className="logo" />
    </div>
  );
}