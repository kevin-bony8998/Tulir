import styled from "styled-components";

export const StyledDownloadsPage = styled.div`
    padding-top: 100px;
    margin-left: 100px;
    .page-title {
        margin-top: 50px;
        margin-bottom: 25px;
        font-size: 30px;
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
                    color: #B08C8C;
                }
            }
        }
    }
`;