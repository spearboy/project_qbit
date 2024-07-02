const Quantity = () => {
  return (
    <div className="quantity__wrapper">
        <div className="quantity__button remove disabled"></div>
        <input type="text" value={1}/>
        <div className="quantity__button add"></div>
    </div>
  )
}

export default Quantity;