import { StyledPage } from "./TabDescriptions.styles";
import { TabDescriptionsProps } from "./TabDescriptions.types";
import { useVerticalTabStore } from "../../../../../store/verticalTabStore";
import { useEffect } from "react";
import parse from "html-react-parser";

export const TabDescriptions: React.FC<TabDescriptionsProps> = ({
  tabDetails,
}) => {
  const selectedTab = useVerticalTabStore((state) => state.selectedTab);
  console.log(selectedTab);
  const setSelectedTab = useVerticalTabStore((state) => state.setSelectedTab);

  useEffect(() => {
    if (window) {
      const URL = window.location.href;
      const tabKey = URL.split("#")[1];
      const allDescriptorElements = document.getElementsByClassName(
        "tab-description-display",
      );
      if (tabKey) {
        for (let tabIdx = 0; tabIdx < allDescriptorElements.length; tabIdx++) {
          if (allDescriptorElements[tabIdx].classList.contains(tabKey)) {
            setSelectedTab(tabIdx);
          }
        }
        // window.history.replaceState(null, "New Page Title", URL.split("#")[0])
      }
    }
  });

  return (
    <StyledPage>
      <div className="descriptions-container">
        {tabDetails.map((element: any, index: number) => (
          <div
            className={`${element?.tabIdentifier} ${selectedTab == index ? "active-tab-description" : ""} tab-description-display`}
            key={index}
            id={element?.tabIdentifier}
          >
            <div className="tab-heading">{element.tabName}</div>
            <div className="tab-content">
              {element?.tabContent?.map(
                (descriptionContent: any, idx: number) => (
                  <>
                    {descriptionContent?.isParaText && (
                      <p className="description-para" key={idx}>
                        {descriptionContent?.textContent}
                      </p>
                    )}
                    {descriptionContent?.isSubHeading && (
                      <p className="description-sub-heading" key={idx}>
                        {descriptionContent?.textContent}
                      </p>
                    )}
                    {descriptionContent?.isBulletList && (
                      <p className="description-bullet-point" key={idx}>
                        {descriptionContent?.textContent}
                      </p>
                    )}
                    {descriptionContent?.isRichText && (
                      <p className="description-bullet-point" key={idx}>
                        {parse(descriptionContent?.textContent)}
                      </p>
                    )}
                    {descriptionContent?.isQuote && (
                      <p className="description-centralised-content" key={idx}>
                        {descriptionContent?.textContent}
                      </p>
                    )}
                    {descriptionContent?.isLink && (
                      <a
                        className="description-centralised-content-link"
                        key={idx}
                        href={descriptionContent?.linkLocation}
                        target="_blank"
                      >
                        {descriptionContent?.textContent}
                      </a>
                    )}
                  </>
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </StyledPage>
  );
};
