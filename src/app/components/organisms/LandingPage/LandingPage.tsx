import { StyledPage } from "./LandingPage.styles";
import Heading from "../../molecules/Heading/Heading";
import GeneralInfo from "../../molecules/GeneralInfo/GeneralInfo";

export default function LandingPage() {
  return (
    <StyledPage>
        <Heading />
        <GeneralInfo />
    </StyledPage>
  );
}
