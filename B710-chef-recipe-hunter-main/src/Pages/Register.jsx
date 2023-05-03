import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { registerUser } = useContext(AuthContext);
  const handleRegister = async () => {
    console.log(name, email, password);

    try {
      const result = await registerUser(email, password);
      const user = result?.user;
      console.log(user);
      if (user?.email) {
        navigate("/");
        setError("");
      }
    } catch (error) {
      console.log(error);
      setError(error?.message);
    }
  };
  return (
    <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100 mx-auto ">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Create an account
      </h2>
      <p className="text-sm text-center text-gray-400">
        Already have account?
        <Link to={"/login"} className="focus:underline hover:underline">
          Login
        </Link>
      </p>

      <form
        novalidate=""
        action=""
        className="space-y-8 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label for="email" className="block text-sm">
              Email address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label for="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline text-gray-400"
              >
                Forgot password?
              </a>
            </div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
        </div>
        <button
          onClick={handleRegister}
          type="button"
          className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
