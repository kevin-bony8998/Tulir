import { StyledResourcesPage } from "./ResourcesPage.styles";
import Navbar from "../../molecules/Navbar/Navbar";
import { ResourcesPageProps } from "./ResourcesPage.types";
import { ResourcesPageMock } from "@/app/mocks/ResourcesPage.mock";
import { TabDescriptions } from "../../molecules/TabDescriptions/TabDescriptions";

export const ResourcesPage: React.FC<ResourcesPageProps> = ({
  pageClassName,
}) => {
  return (
    <StyledResourcesPage>
      <div className={`page-content ${pageClassName}`}>
        <h1 className={`page-title`}>{ResourcesPageMock?.pageTitle}</h1>
        <TabDescriptions tabDetails={ResourcesPageMock?.pageContent} />
      </div>
    </StyledResourcesPage>
  );
};
