import { StyledNavbar } from "./Navbar.styles";
import Link from "next/link";

export default function Heading() {
  return (
    <StyledNavbar>
      <div className="navbar">
        <div className="navbar-item">
          <Link className="navbar-heading" href="/about">
            About Us
          </Link>
          <div className="sub-item-container">
            <Link className="navbar-subitem" href="/about#tulir-cphcsa">
              Tulir - CPHCSA
            </Link>
            <Link className="navbar-subitem" href="/about#mission-statement">
              Mission Statement
            </Link>
            <Link className="navbar-subitem" href="/about#objectives">
              Objectives
            </Link>
          </div>
        </div>
        <div className="navbar-item">
          <Link className="navbar-heading" href="/childSexualAbuse">
            Child Sexual Abuse
          </Link>
          <div className="sub-item-container">
            <Link className="navbar-subitem" href="">
              Child Sexual Abuse
            </Link>
            <Link className="navbar-subitem" href="">
              Abusers
            </Link>
            <Link className="navbar-subitem" href="">
              Groomers
            </Link>
            <Link className="navbar-subitem" href="">
              Indicators and Effects
            </Link>
          </div>
        </div>
        <div className="navbar-item">
          <Link className="navbar-heading" href="/servicesAndPrograms">
            Services & Programs
          </Link>
          <div className="sub-item-container">
            <div className="navbar-subitem">Services & Programs</div>
            <div className="navbar-subitem">Personal Safety Education</div>
          </div>
        </div>
        <div className="navbar-item">
          <Link className="navbar-heading" href="resources">
            Resources
          </Link>
        </div>
        <div className="navbar-item">
          <p className="navbar-heading">FAQ's</p>
        </div>
        <div className="navbar-item">
          <Link className="navbar-heading" href="downloads">
            Downloads
          </Link>
        </div>
        <div className="navbar-item">
          <p className="navbar-heading">Links</p>
        </div>
        <div className="navbar-item">
          <p className="navbar-heading">Contact Us</p>
        </div>
      </div>
    </StyledNavbar>
  );
}
