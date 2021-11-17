import React, { useEffect } from "react";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
const ImageBox = (props) => {
  console.log("ImageProps", props.props.id);

  const { data, setData, errors, post, processing } = useForm({
    workorder_image: "",
    workorder_id: props.props.id,
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route("images.store", data));
  }

  const handleInput = (event) => {
    console.log("imagefile", event.target.files[0]);
    setData("workorder_image", event.target.files[0]);
  };
  return (
    <>
      <form>
        <div className="input-group mb-3">
          <input
            type="file"
            className="form-control"
            name="workorder_image"
            onChange={handleInput}
          />
          <button
            onClick={handleSubmit}
            className="btn btn-outline-primary btn-sm"
          >
            Image
          </button>
        </div>
        <div className="input-group mb-3">
          <input
            className="fix-input"
            type="hidden"
            name="workorder_id"
            value={props}
          />
        </div>
      </form>
    </>
  );
};

export default ImageBox;
