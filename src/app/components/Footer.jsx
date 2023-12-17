import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container px-12 py-4 flex justify-between">
        <div>
          <span className="">{"< "}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-linkedin to-linkedinlight">
            Owais Khan
          </span>
          <span className="">{" />"}</span>
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
