import React, { useState, useEffect } from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Inertia } from "@inertiajs/inertia";
import {
  Head,
  Link,
  InertiaLink,
  usePage,
  useForm,
} from "@inertiajs/inertia-react";
import axios from "axios";

const UserWorkorders = (props) => {
  console.log("userworkorders", props);
  const [users, setUsers] = useState([]);
  const [user_id, setUser_id] = useState(props);

  return (
    <div className="">
      <ul className="p-0  list-group-flush">
        {users ? (
          users.map((w, i) => {
            return (
              <li key={i} className="list-group-item nav-item">
                <Link
                  className="nav-link "
                  href={route("workorder.show", w.id)}
                  style={{ fontFamily: "Roboto" }}
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

export default UserWorkorders;
