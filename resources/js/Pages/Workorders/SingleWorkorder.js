import React, { useState, useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, Link, useForm, usePage } from "@inertiajs/inertia-react";
import axios from "axios";
import CommentBox from "@/Components/CommentBox";
import ImageBox from "@/Components/ImageBox";

const SingleWorkorder = (props) => {
  console.log("singleworkorker", props);
  const { data, setData, errors, put, processing } = useForm({
    id: props[0].id,
    workorder_id: props[0].id,
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
          <CommentBox props={data} />
          <ImageBox props={data} />
          <h3>Comments:</h3>
          <ul className="list-group list-group flush">
            {props[1].map((c, i) => {
              return (
                <li key={i} className="list-group-item">
                  {c.text}
                </li>
              );
            })}
          </ul>
          <div className="card-group">
            {props[2].map((i) => {
              return (
                <div key={i} className="card">
                  <img
                    className="card-img-top img-fluid"
                    src={`/storage/workorder_images/${i.workorder_image}`}
                  />
                  <div className="card-footer">
                    <small className="text-muted">
                      Created on: {i.created_at}
                    </small>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Authenticated>
  );
};

export default SingleWorkorder;
