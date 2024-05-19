import { StyledPage } from "./DetailsPage.styles";
import Navbar from "../../molecules/Navbar/Navbar";
import { DetailsPageProps } from "./DetailsPage.types";
import { VerticalNavBar } from "../../molecules/VerticalNavBar/VerticalNavBar";

export const DetailsPage:React.FC<DetailsPageProps> = ({pageClassName, tabDetails}) => {
  console.log(pageClassName, tabDetails)
  const tabNames: string[] = [];
  tabDetails?.forEach((singleTab: any) => {
    tabNames.push(singleTab?.tabName);
  });

  return (
    <StyledPage>
        <Navbar />
        <div className="page-content">
          <VerticalNavBar tabNames={tabNames} />
        </div>
    </StyledPage>
  );
}
