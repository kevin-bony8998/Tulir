"use client";

import "../src/app/globals.css";
import Navbar from "@/app/components/molecules/Navbar/Navbar";
import { StyledNavbar } from "@/app/components/molecules/Navbar/Navbar.styles";

function MyApp({ Component, pageProps }: any) {
  return (
    <main className="flex p-0 m-0 tulir-site h-full w-full">
      <StyledNavbar>
        <Navbar />
      </StyledNavbar>
      <video className="videoTag" autoPlay loop muted>
        <source src={`assets/Incense_BG_Desktop.mp4`} type="video/mp4" />
      </video>
      <Component {...pageProps} />
      {/* <DownloadsPage pageClassName={'about-page-class'} tabDetails={AboutPageMock}/> */}
    </main>
  );
}

export default MyApp;
