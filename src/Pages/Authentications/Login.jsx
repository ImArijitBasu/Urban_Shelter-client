import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleBtn from "../../Shared/GoogleBtn";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
const Login = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation()

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      console.log(result.user);
      Swal.fire({
        title: "User login success",
        showClass: {
          popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `,
        },
        hideClass: {
          popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `,
        },
      });
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <div className="hero bg-gradient-to-tr from-primary via-primary-light to-accent min-h-screen h-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-transparent w-full max-w-sm shrink-0 shadow-2xl rounded-none">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-neutral-white text-bold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-neutral-white text-bold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-accent hover:bg-accent/40 border-none text-neutral-white">
                  Login
                </button>
              </div>
            </form>
            <GoogleBtn></GoogleBtn>
            <p className="text-neutral-white p-4">
              New here ? please{" "}
              <Link to={"/signup"} className="btn btn-xs rounded-none">Create Account</Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
