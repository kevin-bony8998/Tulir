import { create } from "zustand";

interface verticalTabStoreProps {
    selectedTab: number,
    setSelectedTab: (tabIdx: number) => any,
}


export const useVerticalTabStore = create<verticalTabStoreProps>((set) => ({
    selectedTab: 0,
    setSelectedTab: (tabIdx: number) => set(state => ({
        ...state,
        selectedTab: tabIdx,
    }))
}))