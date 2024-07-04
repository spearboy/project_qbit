import Link from "next/link"

export const Header = () => {
  return (
    <div className="top__header">
      <div className="call__button">직원호출</div>
      <div className="right__action__buttons">
        <Link href={'/result'}>
          <i className="icon-24-receipt"></i>
        </Link>
        <Link href={'/bag'}>
          <i className="icon-24-bag"></i>
        </Link>
      </div>
    </div>
  )
}
