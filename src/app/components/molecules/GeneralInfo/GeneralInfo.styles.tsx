import styled from "styled-components";

export const StyledGeneralInfo = styled.div`
    .svg-container {
        position: relative;
        margin-top: 120px;
        .general-info-bubble {
            position: absolute;
            max-width: 200px;
            overflow: hidden;
            .bubble-heading {
                font-weight: 700;
                font-size: 20px;
                text-transform: capitalize;
            }
            .bubble-content {
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 7; 
                .bubble-list {
                    list-style-type: disc;
                }
            }
            &.famous-quote {
                top: 12%;
                left: 40%;
            }
            &.about-tulir {
                top: 35%;
                left: 26%;
            }
            &.personal-safety-rules {
                top: 15%;
                left: 60%;
            }
            &.it-takes-a-vaillage {
                top: 37%;
                left: 67%;
            }
            &.myths-facts {
                top: 63%;
                left: 69%;
            }
        }
    }
`;