import React, { useState, useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import axios from "axios";

const WorkorderList = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios(route("list")).then((res) => setData(res.data));
  }, []);
  return (
    <div className="">
      <ul className="p-0  list-group-flush">
        {data ? (
          data.map((w, i) => {
            return (
              <li key={i} className="list-group-item nav-item">
                <Link
                  className="nav-link "
                  href={route("workorder.show", w.id)}
                  style={{ fontFamily: "Roboto", fontWeight: "bold" }}
                >
                  {w.task}
                </Link>
              </li>
            );
          })
        ) : (
          <h2>No Work Orders !!</h2>
        )}
      </ul>
    </div>
  );
};

export default WorkorderList;
