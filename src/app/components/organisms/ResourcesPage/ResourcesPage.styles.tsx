import styled from "styled-components";

export const StyledResourcesPage = styled.div`
  padding-top: 100px;
  margin-left: 100px;
  .resources-page-class {
    margin-bottom: 100px;
    .page-title {
      margin-top: 50px;
      margin-bottom: 25px;
      font-size: 30px;
    }
    .descriptions-container {
      margin-top: 10px;
      margin-left: 0;
    }
    .section-details-wrapper {
      margin-bottom: 20px;
      .section-title {
        font-size: 24px;
        margin-bottom: 10px;
      }
      .links-wrapper {
        .individual-link {
          .multiple-language-link {
            display: flex;
          }
          &:hover {
            color: #b08c8c;
          }
        }
      }
    }
  }
`;
