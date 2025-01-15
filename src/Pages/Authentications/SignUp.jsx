import React from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleBtn from "../../Shared/GoogleBtn";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast"; // Importing the toast properly
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    if (password.length < 6) {
      toast.error("Password must contain at least 6 characters");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        return updateUserProfile(name, photoURL);
      })
      .then(() => {
        const userInfo = {
          name: name,
          email: email,
          role: "user"
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "User registration success",
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
            navigate("/");
          }
        });
      })
      .catch((error) => {
        console.error("Sign-up failed:", error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-gradient-to-tr from-primary via-primary-light to-accent min-h-screen h-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-transparent w-full max-w-sm min-w-96 shrink-0 shadow-2xl rounded-none">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-neutral-white text-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="text-neutral-white text-bold">
                    Photo URL
                  </span>
                </label>
                <input
                  type="url"
                  placeholder="Photo URL"
                  name="photoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-accent hover:bg-accent/40 border-none text-neutral-white">
                  Sign Up
                </button>
              </div>
            </form>
            <GoogleBtn></GoogleBtn>
            <p className="text-neutral-white p-4">
              Already have an account?{" "}
              <Link to="/login" className="btn btn-xs rounded-none">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
