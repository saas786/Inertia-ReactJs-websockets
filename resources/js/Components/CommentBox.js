import React, { useEffect } from "react";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
const CommentBox = (props) => {
  console.log("commentBox", props.props.id);

  const { data, setData, errors, post, processing } = useForm({
    text: "",
    workorder_id: props.props.id,
  });
  function handleSubmit(e) {
    e.preventDefault();
    post(route("comments.store", data));
  }

  const handleInput = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    );
  };
  return (
    <>
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            name="text"
            placeholder="Comment"
            onChange={handleInput}
          />
          <input type="hidden" name="workorder_id" value={props} />
          <button
            onClick={handleSubmit}
            className="btn btn-outline-primary btn-sm"
          >
            Comment
          </button>
        </div>
      </form>
    </>
  );
};

export default CommentBox;
