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
            .tab-heading {
                font-size: 30px;
                text-decoration: underline;
            }
            .tab-content {
                font-size: 20px;
            }
            &.active-tab-description {
                visibility: visible;
                opacity: 1;
                height: max-content;
            }
        }
    }
`;