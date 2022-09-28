import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Access from "../../assets/icons/access.svg";
import Logo from "../../assets/logos/metaversity-logo.svg";
import Bell from "../../assets/icons/bell.svg";
import Moon from "../../assets/icons/moon.svg";
// import Menu from "../../assets/icons/menuBar.svg";
import Announcement from "../../assets/logos/announcement.svg";
import RightArrow from "../../assets/icons/arrow-right.svg";
import Tool from "../../assets/icons/tool.svg";
import Close from "../../assets/icons/close.svg";
import Button from "../Button";

const Header: React.FC = () => {
  const [close, setClose] = useState(true);

  useEffect(() => {
    if (close) {
      document.body.style.marginTop = "150px";
    } else {
      document.body.style.marginTop = "60px";
    }
  }, [close]);

  return (
    <>
      <div className="header-container">
        <div className="header">
          <div>
            {close && (
              <div className="alert_box">
                <div className="mx">
                  <div className="announcement">
                    <img src={Announcement} alt="" />
                  </div>
                  <div className="header-para">
                    <p>
                      This is to announce that we have launch all the websites
                      for de industries and subsidiary firms all together.
                    </p>
                  </div>
                  <div className="header-btn">
                    <div>
                      <Button variant="primary">
                        Visit <img src={RightArrow} alt="" />
                      </Button>
                    </div>
                  </div>
                  <div className="header-tool">
                    <div>
                      <img src={Tool} alt="" />
                    </div>
                    <div>
                      <p>Notification Settings</p>
                    </div>
                  </div>
                  <div
                    className="header-close"
                    onClick={() => setClose(!close)}
                  >
                    <div>
                      <img src={Close} alt="" />
                    </div>
                    <div>
                      <p>Close.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="header-contant">
            <div className="mx">
              <div className="logo">
                <img src={Logo} alt="" />
              </div>
              <div className="content">
                <Link to="/">Home</Link>
                <Link to="/">Charter</Link>
                <Link to="/">Certifications</Link>
                <Link to="/">Stories</Link>
              </div>
              <div className="access-contant">
                <div className="bell">
                  <div>
                    <img src={Bell} alt="" />
                  </div>
                  <div>
                    <img src={Moon} alt="" />
                  </div>
                </div>
                <div className="skew">
                  <div className="fingerprint">
                    <img src={Access} alt="" />
                    <p>Access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
