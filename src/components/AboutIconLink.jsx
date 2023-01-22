import React from "react";
import { FaQuestion } from "react-icons/fa";

import { Link } from "react-router-dom";

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to={{ pathname: "/about", search: "?sort=na+++", hash: "work" }}>
        <FaQuestion size={30} />
      </Link>
      {/* a tag cannot be used because the link when given in the href falshes on the screen and reloads. to get it done immediately on the client side withour refreshing we use LINK  */}
    </div>
  );
}

export default AboutIconLink;
