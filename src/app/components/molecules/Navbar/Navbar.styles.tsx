import styled from "styled-components";

export const StyledNavbar = styled.div`
    .navbar {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        font-size: 22px;
        padding-top: 30px;
        animation: slide-in 1s ease-out;
        position: absolute;
        top: 0;
        left: 0;
        background: #284A44;
        z-index: 1;
        .navbar-item {
            .navbar-heading {
                padding: 0 10px;
            }
            cursor: pointer;
            border: 2px solid transparent;
            border-radius: 5px;
            padding: 10px;
            .sub-item-container {
                position: absolute;
                visibility: hidden;
                opacity: 0;
                display: block;
                margin: 0 -12px;
                padding: 10px;
                background: #BACDBB;
                border: 2px solid #BACDBB;
                border-right: 2px solid #BACDBB;
                border-bottom: 2px solid #BACDBB;
                border-radius: 5px;
                transition: opacity 0.2s, visibility 0.2s;
            }
            &:hover {
                position: relative;
                .navbar-heading {
                    background-color: #4F6F52;
                    border-radius: 5px;
                }
                .sub-item-container {
                    width: max-content;
                    position: absolute;
                    left: 20px;
                    visibility: visible;
                    opacity: 1;
                    display: block;
                    margin: 0 -12px;
                    padding: 10px;
                    background: #BACDBB;
                    border: 2px solid #BACDBB;
                    border-right: 2px solid #BACDBB;
                    border-bottom: 2px solid #BACDBB;
                    border-radius: 5px;
                    transition: opacity 0.2s, visibility 0.2s;
                    .navbar-subitem:hover {
                        color: #E8DFCA;
                    }
                }
            }
        }
    }
`;