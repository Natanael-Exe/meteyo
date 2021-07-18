function Visibility({ visibility }: { visibility: number }) {
  return (
    <div className="cardItem">
      <h4 className="cardItem__title">Visibility</h4>
      <p className="cardItem__number">
        {visibility ? visibility / 1000 : " - "}
        <sub className="cartItem__meters">Km</sub>
      </p>
      <p className="mt-6">
        {(!visibility || visibility < 10000) && "Low"}
        {visibility >= 10000 && "Average"}
        {visibility > 20000 && "High"}
      </p>
    </div>
  );
}

export default Visibility;
