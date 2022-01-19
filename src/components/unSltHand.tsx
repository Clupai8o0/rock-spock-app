import { Types, Who } from "../scripts/constants";

interface props {
  type: Types;
  player: Who;
}

const UnSelectedHand = ({ type, player }: props) => {
  return (
    <div>
      <i className={`fas ${type} ${player}`}></i>
    </div>
  );
};

export default UnSelectedHand;
