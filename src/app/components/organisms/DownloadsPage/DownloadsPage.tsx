import { StyledDownloadsPage } from "./DownloadsPage.styles";
import Navbar from "../../molecules/Navbar/Navbar";
import { DetailsPageProps } from "./DownloadsPage.types";
import { DownloadsMock } from "@/app/mocks/Downloads.mock";

export const DownloadsPage: React.FC<DetailsPageProps> = ({
  pageClassName,
}) => {
  return (
    <StyledDownloadsPage>
      <h1 className={`page-title ${pageClassName}`}>
        {DownloadsMock?.pageTitle}
      </h1>
      {DownloadsMock?.pageContent?.map((sectionDetails, index: number) => (
        <div className="section-details-wrapper" key={index}>
          <div className="section-title">{sectionDetails?.sectionName}</div>
          <div className="links-wrapper">
            {sectionDetails?.sectionContent?.map(
              (individualSectionDetails, index: number) => (
                <div className="individual-link" key={index}>
                  {individualSectionDetails?.multipleLanguagesAvailable ? (
                    <div className="multiple-language-link">
                      <p className="link-text">
                        {individualSectionDetails?.linkTitle}
                      </p>
                      (
                      {individualSectionDetails?.languages?.map(
                        (languageDetails, index: number) => (
                          <a
                            href={`${languageDetails?.link}`}
                            className="language-link downloads-link"
                            key={index}
                            target="_blank"
                          >
                            {" " +
                              languageDetails?.language +
                              (index ===
                              individualSectionDetails?.languages?.length - 1
                                ? " "
                                : " / ")}
                          </a>
                        ),
                      )}
                      )
                    </div>
                  ) : (
                    <div className="single-language-link">
                      <a
                        href={`${individualSectionDetails?.generalLink}`}
                        className="general-link-hyperlink downloads-link"
                        target="_blank"
                      >
                        {individualSectionDetails?.linkTitle}
                      </a>
                    </div>
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      ))}
    </StyledDownloadsPage>
  );
};
