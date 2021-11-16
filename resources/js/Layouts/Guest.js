import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";

export default function Guest({ children }) {
  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5 ">
        <div className="card p-2 w-50  ">{children}</div>
      </div>
    </div>
  );
}
