import styled from "styled-components";
import { theme } from "@/app/theme";

export const StyledVerticalNavBar = styled.div`
    padding-top: 100px;
    margin-left: 100px;
    .navbar-container {
        padding-right: 50px;
        border-right: 1px solid white;
        max-width: max-content;
        animation: ${theme?.slideInAnimation};
        .vertical-navbar-item {
            font-size: 22px;
            margin-bottom: 20px;
            width: 300px;
            padding: 10px 20px;
            cursor: pointer;
            &.active-vertical-tab {
                font-size: 30px;
                border: 1px solid white;
                border-radius: 0 15px 15px 0;
                background: white;
                color: black;
            }
        }
    }

    /* @keyframes slidein {
    from {
        margin-left: -100%;
        opacity: 0;
    }

    to {
        margin-left: 0%;
        opacity: 1;
    }
    } */
`;