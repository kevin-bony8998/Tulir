import { StyledVerticalNavBar } from "./VerticalNavBar.styles";
import { VerticalNavBarProps } from "./VerticalNavBar.types";
import { useVerticalTabStore } from "../../../../../store/verticalTabStore";

export const VerticalNavBar: React.FC<VerticalNavBarProps> = ({ tabNames }) => {
  const setSelectedTab = useVerticalTabStore((state) => state.setSelectedTab);
  const selectedTab = useVerticalTabStore((state) => state.selectedTab);

  function handleOnClick(key: number) {
    setSelectedTab(key);
  }

  return (
    <StyledVerticalNavBar>
      <div className="navbar-container">
        {tabNames?.map((tabName: string, index: number) => (
          <div
            className={`${index === selectedTab ? "active-vertical-tab" : ""} vertical-navbar-item`}
            key={index}
            onClick={() => handleOnClick(index)}
          >
            {tabName}
          </div>
        ))}
      </div>
    </StyledVerticalNavBar>
  );
};
