import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function Nav() {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate()
  return (
    <div className="navbar bg-base-100 bg-emerald-600">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-3xl mx-10">
          BLACK CUMIN BANGLADESH
        </a>
      </div>
      <div className="flex-none gap-10 font-bold">
        <Link>Home</Link>
        <Link>Blogs</Link>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.ibb.co/tKyYD4x/Whats-App-Image-2023-02-14-at-10-01-18-AM.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        {user?.email ? (
          <button onClick={logOut} className="btn btn-primary">Logout</button>
        ) : (
          <button onClick={()=>navigate("/login")} className="btn btn-primary">LOGIN</button>
        )}
      </div>
    </div>
  );
}
