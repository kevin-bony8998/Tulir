import { StyledNavbar } from "./Navbar.styles";

export default function Heading() {
  return (
    <StyledNavbar>
        <div className="navbar">
            <div className="navbar-item">
                <p className="navbar-heading">
                    About Us
                </p>
                <div className="sub-item-container">
                    <div className="navbar-subitem">
                        Tulir - CPHCSA
                    </div>
                    <div className="navbar-subitem">
                        Mission Statement
                    </div>
                    <div className="navbar-subitem">
                        Objectives
                    </div>
                </div>
            </div>
            <div className="navbar-item">
                <p className="navbar-heading">
                    Child Sexual Abuse
                </p>
                <div className="sub-item-container">
                    <div className="navbar-subitem">
                        Child Sexual Abuse
                    </div>
                    <div className="navbar-subitem">
                        Abusers
                    </div>
                    <div className="navbar-subitem">
                        Groomers
                    </div>
                    <div className="navbar-subitem">
                        Indicators and Effects
                    </div>
                </div>
            </div>
            <div className="navbar-item">
                <p className="navbar-heading">
                    Services & Programs
                </p>
                <div className="sub-item-container">
                    <div className="navbar-subitem">
                        Services & Programs
                    </div>
                    <div className="navbar-subitem">
                        Personal Safety Education
                    </div>
                </div>
            </div>
            <div className="navbar-item">
                <p className="navbar-heading">
                    Resources
                </p>
            </div>
            <div className="navbar-item">
                <p className="navbar-heading">
                    FAQ's
                </p>
            </div>
            <div className="navbar-item">
                <p className="navbar-heading">
                    Downloads
                </p>
            </div>
            <div className="navbar-item">
                <p className="navbar-heading">
                    Links
                </p>
            </div>
            <div className="navbar-item">
                <p className="navbar-heading">
                    Contact Us
                </p>
            </div>
        </div>
    </StyledNavbar>
  );
}
