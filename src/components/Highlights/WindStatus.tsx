import { LocationMarkerIcon } from "@heroicons/react/solid";

function WindStatus({ wind }: { wind: number| undefined}) {
  return (
    <div className="cardItem">
      <h4 className="cardItem__title">Wind Status</h4>
      <p className="cardItem__number">
        {wind ? wind : " - "}
        <sub className="cartItem__meters">Km/h</sub>
      </p>
      <LocationMarkerIcon className="cardItem__mapIcon" />
    </div>
  );
}

export default WindStatus;
