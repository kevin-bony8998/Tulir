import { StyledPage } from "./AboutPage.styles";
import Heading from "../../molecules/Heading/Heading";
import GeneralInfo from "../../molecules/GeneralInfo/GeneralInfo";
import Navbar from "../../molecules/Navbar/Navbar";

export default function AboutPage() {
  return (
    <StyledPage>
        <Heading />
        <GeneralInfo />
    </StyledPage>
  );
}
