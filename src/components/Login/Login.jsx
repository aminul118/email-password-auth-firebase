import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [sucessfull, setSucessfull] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleShowpassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.email.value;
    console.log(email, password);

    // Login User
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setSucessfull("Loged in sucesssfully");
        toast.success("Loged in sucesssfully");
        setErrorMessage("");
        return;
      })
      .catch((error) => {
        console.log("ERROR", error.message);
        setErrorMessage(error.message);
        setSucessfull("");
      });
  };
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full max-w-sm shrink-0 ">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
                className="absolute right-4 top-14"
                onClick={handleShowpassword}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaEye />}
              </button>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="py-2">
            New to this website? please
            <Link to={`/signup`} className="text-blue-600 hover:underline ml-2">
              signup
            </Link>
          </p>
          {errorMessage ? (
            <p className="text-center text-red-700">{errorMessage}</p>
          ) : (
            <p className="text-center text-green-500">{sucessfull}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
