import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";

export default function Guest({ header, children }) {
  return (
    <div className="container">
      {header && (
        <header className="">
          <div className="">{header}</div>
        </header>
      )}
      <div className="m-5">
        <div className="  ">{children}</div>
      </div>
    </div>
  );
}
