"use client";

import { DetailsPage } from "@/app/components/organisms/DetailsPage/DetailsPage";
import { ChildSexualAbuseMock } from "@/app/mocks/ChildSexualAbuse.mock";
import { StyledDetailsPage } from "@/app/components/organisms/DetailsPage/DetailsPage.styles";

export default function ChildSexualAbuse() {
  return (
    <>
      <StyledDetailsPage>
        <DetailsPage
          pageClassName={"about-page-class"}
          tabDetails={ChildSexualAbuseMock}
        />
      </StyledDetailsPage>
    </>
  );
}
