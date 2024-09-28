import React from "react";
import { IconContext } from "react-icons";
import { BiDownload } from "react-icons/bi";

const ResumeButton: React.FC = () => {
  const resumeUrl = "https://docs.google.com/document/d/1-uhoD5jaSrI6tekyIymQtpHNQhnHt4NdYzCTR5tSTu4/export?format=pdf";

  return (
    <a href={resumeUrl} download className='download-cv-btn' rel='noopener noreferrer' target='_blank'>
      Download CV
      <IconContext.Provider value={{ className: "download-icon" }}>
        <BiDownload />
      </IconContext.Provider>
    </a>
  );
};

export default ResumeButton;
