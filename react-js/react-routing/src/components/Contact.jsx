import { NavLink, Outlet } from "react-router-dom";
import MainBranch from "./MainBranch";
import SubBranch from "./SubBranch";
import { useState } from "react";

function Contact() {
  let [branched] = useState(["b-1", "b-2", "b-3"]);
  return (
    <div>
      <ul>
        <ul>
          <li>
            <NavLink to={"/contact"}>Main Branch</NavLink>
          </li>
          {branched.map((branch, index) => {
            return (
              <li key={index}>
                <NavLink to={`/contact/${branch}`}>{branch}</NavLink>
              </li>
            );
          })}
        </ul>
      </ul>
      <Outlet />
    </div>
  );
}

export default Contact;
