import { theme } from "@/app/theme";
import styled from "styled-components";

export const StyledPage = styled.div`
  .descriptions-container {
    margin-left: 50px;
    margin-top: 100px;
    margin-right: 50px;
    .tab-description-display {
      visibility: hidden;
      opacity: 0;
      height: 0;
      scroll-margin-top: 300px;
      .tab-heading {
        font-size: 30px;
        text-decoration: underline;
      }
      .tab-content {
        font-size: 20px;
        color: #fffdd0;
        .description-rich-text {
          background-clip: text;
          -webkit-background-clip: text;
          margin-bottom: 20px;
        }
        .description-para {
          background-clip: text;
          -webkit-background-clip: text;
          margin-bottom: 20px;
          .animated-svg {
            color: white;
            svg {
              color: white;
              line {
                stroke: white !important;
              }
            }
          }
          .description-para-content {
            display: inline;
          }
          .link-icon {
            display: inline;
            margin-left: 4px;
          }
        }
        .description-sub-heading {
          margin: 16px 0;
          font-size: 24px;
          color: white;
          scroll-margin-top: 100px;
        }
        .description-bullet-point {
          display: flex;
          align-items: flex-start;
          .bullet-image {
            margin-right: 10px;
            margin-top: 4px;
          }
        }
        .description-content-link {
          display: flex;
          align-items: flex-start;
          .link-icon {
            margin-left: 10px;
            margin-top: 4px;
          }
        }
        .full-thumbnail-container {
          margin-top: 28px;
          .thumbnail-heading {
            font-size: 24px;
            scroll-margin-top: 100px;
          }
          .description-thumbnail-container {
            display: flex;
            margin-top: 12px;
            padding: 0 20px;
            .thumbnail-text-container {
              margin-left: 24px;
              .thumbnail-para {
                .thumbnail-para-text-content {
                  display: inline;
                }
                .read-more-link {
                  display: inline-flex;
                  .link-icon {
                    margin-left: 10px;
                    margin-top: 4px;
                  }
                }
              }
            }
          }
        }
      }
      &.active-tab-description {
        visibility: visible;
        opacity: 1;
        height: max-content;
        animation: ${theme?.slideInAnimation};
      }
    }
  }
`;
