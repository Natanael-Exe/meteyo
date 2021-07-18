import { ArrowCircleDownIcon, ArrowCircleUpIcon } from "@heroicons/react/solid";

type Props = {
  sunrise: string;
  sunset: string;
};
function SunsetAndSunrise({ sunset, sunrise }: Props) {

  return (
    <div className="cardItem">
      <h4 className="cardItem__title">Sunrise & Sunset</h4>
      <div className="cardItem__row mt-2">
        <ArrowCircleUpIcon className="cardItem__arrowIcon mt-2" />
        <div>
          <p>{ sunrise}</p>
        </div>
      </div>
      <div className="cardItem__row mt-3">
        <ArrowCircleDownIcon className="cardItem__arrowIcon" />
        <p>{sunset}</p>
      </div>
    </div>
  );
}

export default SunsetAndSunrise;
