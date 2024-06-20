"use client";

import { StyledResourcesPage } from "@/app/components/organisms/ResourcesPage/ResourcesPage.styles";
import { FAQPageMock } from "@/app/mocks/FAQPage.mock";
import { TabDescriptions } from "@/app/components/molecules/TabDescriptions/TabDescriptions";

export default function FAQs() {
  return (
    <>
      <StyledResourcesPage>
        <TabDescriptions tabDetails={FAQPageMock} />
      </StyledResourcesPage>
    </>
  );
}
