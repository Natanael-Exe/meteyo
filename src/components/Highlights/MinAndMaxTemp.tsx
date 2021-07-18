import { CloudIcon } from "@heroicons/react/solid";
type Props = {
  maxTemp: number| undefined;
  minTemp: number| undefined;
};
function MinAndMaxTemp({ maxTemp, minTemp }: Props) {
  return (
    <div className="cardItem">
      <h4 className="cardItem__title">Max & Min Temperature</h4>
      <div className="flex items-center">
        <CloudIcon className="cardItem__cloudIcon" />
        <p className="flex-shrink-0">{maxTemp ? maxTemp : " - "} &deg;C</p>
      </div>
      <div className="flex items-center">
        <CloudIcon className="cardItem__cloudIcon" />
        <p className="flex-shrink-0">{minTemp ? minTemp : " - "} &deg;C</p>
      </div>
    </div>
  );
}

export default MinAndMaxTemp;
