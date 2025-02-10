import React from "react";
import { BsCodeSlash, BsFileCode, BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/ayan-pal-45732222a/"
        rel="noopener noreferrer"
        // eslint-disable-next-line
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/AyanPal06"
        rel="noopener noreferrer"
        // eslint-disable-next-line
        target="_blank"
      >
        <BsGithub />
      </a>
      <a
        href="https://x.com/AyanPal63087154"
        rel="noopener noreferrer"
        // eslint-disable-next-line
        target="_blank"
      >
        <BsTwitter />
      </a>
      <a
        href="https://www.geeksforgeeks.org/user/palayan/"
        rel="noopener noreferrer"
        // eslint-disable-next-line
        target="_blank"
      >
       <BsCodeSlash />
      </a>
      <a
        href="https://leetcode.com/u/Ayan__Pal/"
        rel="noopener noreferrer"
        // eslint-disable-next-line
        target="_blank"
      >
       <BsFileCode />
      </a>
    </div>
  );
}

export default HeaderSocials;