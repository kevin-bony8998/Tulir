"use client";

import { StyledResourcesPage } from "@/app/components/organisms/ResourcesPage/ResourcesPage.styles";
import { ResourcesPageMock } from "@/app/mocks/ResourcesPage.mock";
import { ResourcesPage } from "@/app/components/organisms/ResourcesPage/ResourcesPage";

export default function Resources() {
  return (
    <>
      <StyledResourcesPage>
        <ResourcesPage pageClassName={"resources-page-class"} />
      </StyledResourcesPage>
    </>
  );
}
