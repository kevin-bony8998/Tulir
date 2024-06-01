import { StyledDetailsPage } from "./DetailsPage.styles";
import { DetailsPageProps } from "./DetailsPage.types";
import { VerticalNavBar } from "../../molecules/VerticalNavBar/VerticalNavBar";
import { TabDescriptions } from "../../molecules/TabDescriptions/TabDescriptions";

export const DetailsPage: React.FC<DetailsPageProps> = ({
  pageClassName,
  tabDetails,
}) => {
  const tabNames: string[] = [];
  tabDetails?.forEach((singleTab: any) => {
    tabNames.push(singleTab?.tabName);
  });

  return (
    <StyledDetailsPage>
      <div className={`${pageClassName} page-content`}>
        <VerticalNavBar tabNames={tabNames} />
        <TabDescriptions tabDetails={tabDetails} />
      </div>
    </StyledDetailsPage>
  );
};
