import { StyledPage } from "./TabDescriptions.styles";
import { TabDescriptionsProps } from "./TabDescriptions.types";
import { useVerticalTabStore } from "../../../../../store/verticalTabStore";
import { useEffect } from "react";
import parse from "html-react-parser";
import Image from "next/image";
import { readMoreText } from "../../constants";

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
                (descriptionContent: any, idx: number) => {
                  let itemProps = {};
                  if (descriptionContent?.isExternalLink) {
                    itemProps = { target: "_blank" };
                  }
                  return (
                    <>
                      {descriptionContent?.isParaText && (
                        <div className="description-para">
                          <p className="description-para-content" key={idx}>
                            {descriptionContent?.textContent}
                          </p>
                          {descriptionContent?.hasMoreInfo && (
                            <a
                              href={descriptionContent?.hasMoreInfoLink}
                              className="read-more-link"
                            >
                              {readMoreText}
                              <Image
                                src="./assets/link_svg.svg"
                                height={20}
                                width={20}
                                alt="link image"
                                className="link-icon"
                              />
                            </a>
                          )}
                        </div>
                      )}
                      {descriptionContent?.isSubHeading && (
                        <p
                          className="description-sub-heading"
                          key={idx}
                          id={descriptionContent?.titleIdentifier}
                        >
                          {descriptionContent?.textContent}
                        </p>
                      )}
                      {descriptionContent?.isBulletList && (
                        <div className="description-bullet-point" key={idx}>
                          <Image
                            src="./assets/leaf_bullet_point.svg"
                            alt="bullet point"
                            className="bullet-image"
                            height={20}
                            width={20}
                          />
                          <p
                            className="description-bullet-point-text"
                            key={idx}
                          >
                            {descriptionContent?.textContent}
                          </p>
                        </div>
                      )}
                      {descriptionContent?.isRichText && (
                        <p className="description-rich-text" key={idx}>
                          {parse(descriptionContent?.textContent)}
                        </p>
                      )}
                      {descriptionContent?.isQuote && (
                        <p className="description-quote-content" key={idx}>
                          {descriptionContent?.textContent}
                        </p>
                      )}
                      {descriptionContent?.isLink && (
                        <div className="description-content-link">
                          <a
                            className="description-content-link"
                            key={idx}
                            href={descriptionContent?.linkLocation}
                            {...itemProps}
                          >
                            {descriptionContent?.textContent}
                          </a>
                          <Image
                            src="./assets/link_svg.svg"
                            height={20}
                            width={20}
                            alt="link image"
                            className="link-icon"
                          />
                        </div>
                      )}
                      {descriptionContent?.svgLink &&
                        descriptionContent?.svgLink !== "" && (
                          <div className="description-svg-link">
                            <object
                              type="image/svg+xml"
                              data={descriptionContent?.svgLink}
                              className="animated-svg"
                            >
                              svg-animation
                            </object>
                          </div>
                        )}
                      {descriptionContent?.isThumbnail && (
                        <div className="full-thumbnail-container">
                          <div
                            className="thumbnail-heading"
                            id={descriptionContent?.titleIdentifier}
                          >
                            {descriptionContent?.thumbnailHeading}
                          </div>

                          <div className="description-thumbnail-container">
                            <Image
                              src={descriptionContent?.imageSrc}
                              height={descriptionContent?.imageHeight}
                              width={descriptionContent?.imageWidth}
                              alt="link image"
                              className="link-icon"
                            />
                            <div className="text-content">
                              {descriptionContent?.thumbnailtextContent?.map(
                                (content: any, idx: number) => (
                                  <div
                                    className="thumbnail-text-container"
                                    key={idx}
                                  >
                                    {content?.textType === "Para" && (
                                      <div className="thumbnail-para">
                                        <p className="thumbnail-para-text-content">
                                          {content?.textContent}
                                        </p>
                                        {content.hasMoreInfo && (
                                          <a
                                            href={content.hasMoreInfoLink}
                                            className="read-more-link"
                                          >
                                            {readMoreText}
                                            <Image
                                              src="./assets/link_svg.svg"
                                              height={20}
                                              width={20}
                                              alt="link image"
                                              className="link-icon"
                                            />
                                          </a>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  );
                },
              )}
            </div>
          </div>
        ))}
      </div>
    </StyledPage>
  );
};
