import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Authenticated from "@/Layouts/Authenticated";
import Button from "@/Components/Button";
const EditWorkorder = (props) => {
  console.log("Edit", props[0].task);
  const { workorder } = usePage().props[0];
  const { data, setData, errors, put, processing } = useForm({
    task: props[0].task || "",
    desc: props[0].desc || "",
    priority: props[0].priority || "",
    status: props[0].status || "",
    assigned_to: props[0].assigned_to || "",
    user_id: props.auth.user.id,
    cover_image: props[0].cover_image || "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("data", data);
    put(route("workorder.update", props[0].id));
  }
  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    );
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
      header={<h2>Edit Work Order</h2>}
    >
      <div className="card p-3">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="task">
              <span className="fs-2">What's going on?</span>
            </label>
            <input
              type="text"
              name="task"
              defaultValue={props[0].task}
              className="form-control"
              onChange={onHandleChange}
              placeholder="task"
            />
          </div>
          <div className="">
            <label htmlFor="desc" className="l">
              <span className="fs-2">Task Description</span>
            </label>
            <textarea
              name="desc"
              className="form-control"
              defaultValue={props[0].desc}
              rows="3"
              onChange={handleTextarea}
            ></textarea>
          </div>
          <input
            type="file"
            name="cover_image"
            defaultValue={props[0].cover_image}
            onChange={handleImage}
          />

          <Button className="btn btn-outline-primary" type="submit">
            Send
          </Button>
        </form>
        <div className="card-footer">
          <img
            className="img-fluid"
            alt={`workorder image ${props[0].id}`}
            src={`/storage/cover_images/${props[0].image}`}
          />
        </div>
      </div>
    </Authenticated>
  );
};

export default EditWorkorder;
