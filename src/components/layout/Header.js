import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="transparent scroll-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div className="de-flex-col">
                  <div id="logo">
                    <a href="03_grey-index.html">
                      <img alt="" src="/assets/images/logo-6.png" />
                    </a>
                  </div>
                </div>
                <div className="de-flex-col">
                  <input
                    id="quick_search"
                    className="xs-hide style-2"
                    name="quick_search"
                    placeholder="search"
                    type="text"
                  />
                </div>
              </div>
              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu">
                  <li>
                    <Link to="/">
                      Home<span></span>
                    </Link>
                  </li>
                  <li>
                    <a href="03_grey-explore.html">
                      Countries<span></span>
                    </a>
                  </li>
                  <li>
                    <a href="03_grey-author.html">
                      Types<span></span>
                    </a>
                  </li>
                </ul>

                <div class="menu_side_area">
                  <Link to="/connect_wallet">
                    <a class="btn-main btn-wallet">
                      <i class="icon_wallet_alt"></i>
                      <span>Connect Wallet</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
