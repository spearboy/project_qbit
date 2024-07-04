"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();

  return (
    <div className="top__header">
      {pathname === '/main' ? (
        <div className="call__button">직원호출</div>
      ) : (
        <Link href="/main">
          <i className="icon-24-arrow-left"></i>
        </Link>
      )}
      <div className="right__action__buttons">
        {pathname === '/result' ? (
          <Link href="/bag">
            <i className="icon-24-bag"></i>
          </Link>
        ) : pathname === '/bag' ? (
          <Link href="/result">
            <i className="icon-24-receipt"></i>
          </Link>
        ) : (
          <>
            <Link href="/result">
              <i className="icon-24-receipt"></i>
            </Link>
            <Link href="/bag">
              <i className="icon-24-bag"></i>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
