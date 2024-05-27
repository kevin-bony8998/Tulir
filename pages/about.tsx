"use client";

import { DetailsPage } from "@/app/components/organisms/DetailsPage/DetailsPage";
import { AboutPageMock } from "@/app/mocks/AboutPage.mock";
import { StyledDetailsPage } from "@/app/components/organisms/DetailsPage/DetailsPage.styles";

export default function LandingPage() {
  return (
    <>
      <StyledDetailsPage>
        <DetailsPage pageClassName={'about-page-class'} tabDetails={AboutPageMock}/>
      </StyledDetailsPage>
    </>
  );
}
