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
        .description-para {
          /* background-image: linear-gradient(to left, #008080, #FFFDD0); */
          background-clip: text;
          -webkit-background-clip: text;
          margin-bottom: 20px;
        }
        .description-sub-heading {
          margin: 16px 0;
          font-size: 24px;
          color: white;
        }
        .description-bullet-point {
          display: flex;
          align-items: flex-start;
          .bullet-image {
            margin-right: 10px;
            margin-top: 4px;
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
