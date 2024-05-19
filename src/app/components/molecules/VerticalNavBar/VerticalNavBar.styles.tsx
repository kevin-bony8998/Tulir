import styled from "styled-components";

export const StyledVerticalNavBar = styled.div`
    padding-top: 100px;
    margin-left: 100px;
    .navbar-container {
        padding-right: 50px;
        border-right: 1px solid white;
        max-width: max-content;
        .vertical-navbar-item {
            font-size: 22px;
            margin-bottom: 20px;
            width: 300px;
            padding: 10px 20px;
            &.active-vertical-tab {
                font-size: 30px;
                border: 1px solid white;
                border-radius: 0 15px 15px 0;
                background: white;
                color: black;
            }
        }
    }
`;