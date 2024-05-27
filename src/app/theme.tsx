import { css, keyframes } from "styled-components"

const colors = {
    "navBarColor": "#5C7A29",
    "navBarItemColor": "#2E3A1F",
    "navBarSubMenuBGColor": "#A8B57B",
    "navBarSubMenuItemColor": "#7F8C63",
    "verticalNavBarItemColor": "#C68642",
    "mainTextColor": "#8D6E63"
}

const slideInAnimation = keyframes`
    0% {
        margin-left: -100%;
        opacity: 0;
    }
    100% {
        margin-left: 0%;
        opacity: 1;
    }
`;

const animations = {
    "slideInAnimation": css`
        1s 1 alternate ${slideInAnimation}
    `
};

export const theme = {
    colors,
    ...animations
}
