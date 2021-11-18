import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const CreateWorkorder = (props) => {
  const { data, setData, errors, post, processing } = useForm({
    task: "",
    desc: "",
    priority: "none",
    status: "open",
    assigned_to: "maint",
    user_id: props.auth.user.id,
    cover_image: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route("workorder.store", data));
  }
  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    );
  };
  const handleRadios = (e) => {
    setData(event.target.name, event.target.value);
  };
  const handleTextarea = (e) => {
    setData("desc", e.target.value);
  };
  const handleImage = (e) => {
    console.log("cover_image", e.target.files[0]);
    setData("cover_image", e.target.files[0]);
  };
  return (
    <Authenticated
      auth={props.auth}
      errors={props.errors}
      header={
        <div>
          <h2>Create New Work Order</h2>
          <strong className="text-danger">
            Do not use Names of Residents in Work Orders
          </strong>
        </div>
      }
    >
      <div className="card p-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="task">
              <span className="fs-2">What's going on?</span>
            </label>
            <Input
              type="text"
              name="task"
              className=""
              handleChange={onHandleChange}
              placeholder="task"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="l">
              <span className="fs-2">Description</span>
            </label>
            <textarea
              name="desc"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onChange={handleTextarea}
            ></textarea>
          </div>
          <div className="d-inline">
            <div className="d-flex mb-3 justify-content-around">
              <span className="me-1">
                <h3>Priority</h3>
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setData("priority", "none");
                }}
                className="btn btn-sm form-control  btn-outline-primary"
              >
                NONE
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setData("priority", "low");
                }}
                className="btn mx-1 btn-sm  form-control btn-outline-success"
              >
                LOW
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setData("priority", "med");
                }}
                className="btn  form-control btn-outline-warning"
              >
                MED
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setData("priority", "high");
                }}
                className="btn mx-1 btn-sm  form-control btn-outline-danger"
              >
                HIGH
              </button>
            </div>
            <div className="d-flex mb-3 justify-content-evenly">
              <span className="me-3">
                <h3>Status </h3>
              </span>
              <button
                className="btn btn-sm form-control btn-outline-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setData("status", "open");
                }}
              >
                Open
              </button>
              <button
                className="btn mx-1  form-control btn-outline-success"
                onClick={(e) => {
                  e.preventDefault();
                  setData("status", "inprog");
                }}
              >
                In Progress
              </button>
              <button
                className="btn  form-control btn-outline-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setData("status", "hold");
                }}
              >
                On Hold
              </button>
              <button
                className="btn mx-1  form-control btn-outline-danger"
                onClick={(e) => {
                  e.preventDefault();
                  setData("status", "closed");
                }}
              >
                Closed
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-evenly">
            <span>
              <h3>Upload a photo</h3>
            </span>
            <label className=" fix-input">
              <input
                type="file"
                name="cover_image"
                id="cover-image"
                onChange={handleImage}
              />
              <FontAwesomeIcon
                className="text-primary"
                icon={faCameraRetro}
                size="2x"
              />
            </label>
          </div>
          <div className="d-flex justify-content-evenly">
            <span>
              <h3>Submit Order:</h3>
            </span>
            <button className="btn  btn-outline-primary" type="submit">
              <FontAwesomeIcon icon={faPaperPlane} size="2x" />
            </button>
          </div>
        </form>
      </div>
    </Authenticated>
  );
};

export default CreateWorkorder;
