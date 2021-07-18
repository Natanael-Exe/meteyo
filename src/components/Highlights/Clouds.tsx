function Clouds({clouds }: { clouds: number}) {
  return (
    <div className="cardItem">
          <h4 className="cardItem__title">Clouds</h4>
          <div className="cardItem__percent">
            <p className="cartItem__percent-number">
              {clouds>=0 ? clouds : " - "}
              <sup className="cardItem__percent-symbol">%</sup>
            </p>
            
          </div>
          <p className="mt-6">{clouds > 35 ? "Anormal" : "normal"}</p>
        </div>
  )
}

export default Clouds
