"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/main");
  }, 3000);

  return (
    <div className="randing_page_wrapper">
    </div>
  );
}