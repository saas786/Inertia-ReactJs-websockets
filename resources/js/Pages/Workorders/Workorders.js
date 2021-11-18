import React, { useState, useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import Pagination from "@/Components/Pagination";

const Workorders = (props) => {
  console.log("workorders props", props);
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={<h2>Here are your work orders {props.auth.user.name}</h2>}
    >
      <div className="accordion" id="workorder-accordion">
        {props[0] ? (
          props[0].data.map((w, i) => {
            return (
              <div key={i}>
                <div className="accordion-item">
                  <h2 className="accordion-header" id={"heading" + w.id}>
                    <button
                      className="accordion-button"
                      type="button "
                      data-bs-toggle="collapse"
                      data-bs-target={"#collapse" + w.id}
                      aria-expanded="true"
                      aria-controls={"collapse" + w.id}
                    >
                      {w.task}
                    </button>
                  </h2>
                </div>
                <div
                  id={"collapse" + w.id}
                  className=" card border-0 accordion-collapse collapse"
                  aria-labelledby={"heading" + w.id}
                  data-bs-parent="#workorder-accordion"
                >
                  <div className="accordion-body">
                    <Link
                      className="nav-link"
                      href={route("workorder.show", w.id)}
                    >
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item border-0">
                          <h5 className="">Description: </h5>
                          <p>{w.desc} </p>
                        </li>
                        <li className="list-group-item">Status: {w.status}</li>
                        <li className="list-group-item">
                          Priority: {w.priority}
                        </li>
                      </ul>
                    </Link>
                    <Link href={route("workorder.destroy", w.id)}>Delete</Link>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h2>No Work Orders !!</h2>
        )}
        {props[0].links ? (
          <nav className="paginagion">
            <Pagination links={props[0].links} />{" "}
          </nav>
        ) : (
          <div></div>
        )}
      </div>
    </Authenticated>
  );
};

export default Workorders;
