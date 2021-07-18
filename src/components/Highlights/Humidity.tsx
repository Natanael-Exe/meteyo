import { getPercentIndicator } from "../../helpers";

function Humidity({ humidity }: { humidity: number }) {
  return (
    <div className="cardItem">
      <h4 className="cardItem__title">Humidity</h4>
      <div className="cardItem__percent">
        <p className="cartItem__percent-number">
          {humidity ? humidity : " - "}
          <sup className="cardItem__percent-symbol">%</sup>
        </p>
        <div className="cardItem__percentIndicator">
          <div
            className={`cardItem__percentIndicator-dot ${getPercentIndicator(
              humidity
            )} `}
          />
        </div>
      </div>
      <p className="mt-6">{humidity > 50 ? "Anormal" : "normal"}</p>
    </div>
  );
}

export default Humidity;
