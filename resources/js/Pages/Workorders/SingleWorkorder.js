import React, { useState, useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, Link, useForm, usePage } from "@inertiajs/inertia-react";
import axios from "axios";

const SingleWorkorder = (props) => {
  const { data, setData, errors, put, processing } = useForm({
    id: props[0].id,
  });
  const handleDelete = () => {
    if (confirm("do you really want to delete this workorder?")) {
      Inertia.delete(route("workorder.destroy", data));
    }
  };
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={
        <div className="card-header fs-3 p-2 border"> {props[0].task}</div>
      }
    >
      <div>
        <div className="card">
          <InertiaLink href={route("workorder.index")}>
            <div className="card-body">
              <span>{props[0].desc}</span>
            </div>
          </InertiaLink>
          <div className="card-text p-3">
            <p>Priority: {props[0].priority}</p>
            <p>Status: {props[0].status}</p>
            <p>Assigned to: {props[0].assigned_to}</p>
          </div>
          <div className="d-flex justify-content-around pt-3 card-footer">
            <Link
              className="btn btn-outline-warning"
              href={route("workorder.edit", props[0].id)}
            >
              Edit
            </Link>
            <button className="btn btn-outline-warning" onClick={handleDelete}>
              Delete
            </button>
          </div>
          <img
            className="img-fluid"
            alt={`work order ${props[0].id}`}
            src={`/storage/cover_images/${props[0].image}`}
          />
        </div>
      </div>
    </Authenticated>
  );
};

export default SingleWorkorder;
