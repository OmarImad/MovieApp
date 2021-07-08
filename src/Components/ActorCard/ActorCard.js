import { ActorImage, CardContainer } from "./ActorCard.Styles";
import { Link } from "react-router-dom";
import { InfoText } from "../../Screen/MovieScreen/MovieScreen.Styles";

function ActorCard({ img, name, id }) {
  return (
    <CardContainer as={Link} to={""}>
      <ActorImage src={img} alt={name} />
      <InfoText margin={"20px"} fontSize={16} fontWeight={700}>
        Actor Name
      </InfoText>
    </CardContainer>
  );
}

export default ActorCard;
