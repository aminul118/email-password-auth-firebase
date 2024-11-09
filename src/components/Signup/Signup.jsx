import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [sucessfull, setSucessfull] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = (e) => {
    e.preventDefault(); // Prevent form submission

    console.log("eye");
    setShowPassword(!showPassword);
  };
  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;
    console.log(email, password, terms);
    // console.log(typeof password);
    // console.log(terms);

    if (password.length < 6) {
      setErrorMessage("Password Should be 6 characters or longer");
      toast.error("Password Should be 6 characters or longer");

      return;
    }

    
    if (!terms) {
      toast.warning("Accepct terms and constitions to signup");
      setErrorMessage('Please Accepct terms and conditions')
      // console.log('Click checkbox to continue');
      return;
    }

    //  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{6,}$/;

    //     if (!regex.test(password)){
    //       console.log('Wrong password')
    //       toast.error("Password Should be 6 characters or longer");
    //       return;
    //     }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        setSucessfull("Signup sucessfully complected");
        setErrorMessage("");
        toast.success("Signup sucessfully complected");
      })
      .catch((error) => {
        console.log("ERROR", error);
        // const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setSucessfull("");
      });
  };

  return (
    <div className=" max-w-lg mx-auto">
      <h2 className="text-4xl my-8">Signup</h2>
      <form onSubmit={handleSignup} className="w-full ">
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
            type={!showPassword ? "password" : "text"}
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />

          <button
            onClick={handleShowPassword}
            className="absolute right-4 top-14 "
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
          <div className="form-control">
            <label className="cursor-pointer  flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                name="terms"
                className="checkbox checkbox-accent"
              />
              <span className="label-text">Terms and conditions</span>
            </label>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Signup</button>
        </div>
      </form>
      {errorMessage ? (
        <p className="text-red-600 py-4 text-center">{errorMessage}</p>
      ) : (
        <p className="text-green-600 py-4 text-center">{sucessfull}</p>
      )}
    </div>
  );
};

export default Signup;
