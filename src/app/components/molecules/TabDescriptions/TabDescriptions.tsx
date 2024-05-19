import { StyledPage } from "./TabDescriptions.styles";
import { TabDescriptionsProps } from "./TabDescriptions.types";
import { useVerticalTabStore } from "../../../../../store/verticalTabStore";

export const TabDescriptions: React.FC<TabDescriptionsProps> = ({ tabDetails }) => {

    const selectedTab = useVerticalTabStore((state) => state.selectedTab);

    return (
        <StyledPage>
            <div className="descriptions-container">
                {tabDetails.map((element: any, index: number) => (
                    <div className={`${element?.tabIdentifier} ${selectedTab == index ? 'active-tab-description' : ''} tab-description-display`} key={index}>
                        <div className="tab-heading">
                            {element.tabName}
                        </div>
                        <div className="tab-content">
                            {element?.tabContent?.map((descriptionPara: string, idx: number) => (
                                <p className="description-para" key={idx}>
                                    {descriptionPara}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </StyledPage>
    );
}
