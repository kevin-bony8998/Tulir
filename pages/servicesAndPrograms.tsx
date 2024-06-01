"use client";

import { DetailsPage } from "@/app/components/organisms/DetailsPage/DetailsPage";
import { ServicesAndProgramsPageMock } from "@/app/mocks/ServicesAndProgramsPage.mock";
import { StyledDetailsPage } from "@/app/components/organisms/DetailsPage/DetailsPage.styles";

export default function ServicesAndPrograms() {
  return (
    <>
      <StyledDetailsPage>
        <DetailsPage
          pageClassName={"about-page-class"}
          tabDetails={ServicesAndProgramsPageMock}
        />
      </StyledDetailsPage>
    </>
  );
}
