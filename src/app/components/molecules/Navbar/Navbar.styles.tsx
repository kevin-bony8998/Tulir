import styled from "styled-components";
import { theme } from "@/app/theme";

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
    background: ${theme?.colors?.navBarColor};
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
        background: #bacdbb;
        border: 2px solid #bacdbb;
        border-right: 2px solid #bacdbb;
        border-bottom: 2px solid #bacdbb;
        border-radius: 5px;
        transition:
          opacity 0.2s,
          visibility 0.2s;
      }
      &:hover {
        position: relative;
        .navbar-heading {
          background-color: #4f6f52;
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
          background: #bacdbb;
          border: 2px solid #bacdbb;
          border-right: 2px solid #bacdbb;
          border-bottom: 2px solid #bacdbb;
          border-radius: 5px;
          transition:
            opacity 0.2s,
            visibility 0.2s;
          display: flex;
          flex-direction: column;
          .navbar-subitem:hover {
            color: #e8dfca;
          }
        }
      }
    }
  }
`;
