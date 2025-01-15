import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const GoogleBtn = () => {
  const { googleSignIn, user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        name: result?.user?.displayName,
        email: result?.user?.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Successfully logged in as ${result?.user?.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      });
    });
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className="btn rounded-lg mx-8 text-xl bg-primary-light hover:bg-primary text-neutral-white border-accent-orange"
    >
      <FcGoogle /> Google
    </button>
  );
};

export default GoogleBtn;
