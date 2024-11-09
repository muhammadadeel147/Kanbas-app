// src/Kanbas/Account/Signin.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState<{ username?: string; password?: string }>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password
    );
    console.log(db.users);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Dashboard");
  };

  return (
    <div id="wd-signin-screen" className="container mt-5">
      <h1>Sign in</h1>
      <input
        value={credentials.username || ""}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        className="form-control mb-2"
        placeholder="Username"
        id="wd-username"
      />
      <input
        value={credentials.password || ""}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        className="form-control mb-2"
        placeholder="Password"
        type="password"
        id="wd-password"
      />
      <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100">
        Sign in
      </button>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup" className="d-block text-center mt-3">
        Sign up
      </Link>
    </div>
  );
}
