import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const login = () => {
  // state variable for sign in and sign up form
  const [signIn, setSignIn] = useState(true);

  // state variable for error message
  const [errMsg, setErrMsg] = useState<string|null>("");

  // useRef variables for validation purposes
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  // function for validation
  const handleButtonClick = () => {
    const msg = checkValidData(email.current!.value, password.current!.value);
    setErrMsg(msg)
  };

  // function for form toggle
  const toggleSignIn = () => {
    setSignIn(!signIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg"
          alt="Netflix background"
        />
      </div>

      {/* sign in/up form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black p-10 w-96.25 my-36 mx-auto right-0 left-0 text-white font-['Roboto'] opacity-88"
      >
        <h1 className="mx-auto my-3 text-[35px] font-bold">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        <p className="text-red-500 font-bold">{errMsg}</p>
        {!signIn && (
          <input
            className="p-3.5 mx-auto my-3.5 w-full bg-gray-700 rounded-xs focus: outline-none"
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          ref={email}
          className="p-3.5 mx-auto my-3.5 w-full bg-gray-700 rounded-xs focus: outline-none"
          type="email"
          placeholder="Email"
          required
        />
        <input
          ref={password}
          className="p-3.5 mx-auto my-3.5 w-full bg-gray-700 rounded-xs focus: outline-none"
          type="password"
          placeholder="Password"
          required
        />
        <button
          className="p-3.5 mx-auto mt-3.5 w-full bg-red-700 cursor-pointer rounded-xs"
          formNoValidate
          onClick={handleButtonClick}
        >
          Sign In
        </button>
        <p className="mx-auto my-2.5">
          {signIn ? "New to Netflix?" : "Already have an account?"}{" "}
          <span
            className="cursor-pointer text-decoration-line: underline"
            onClick={toggleSignIn}
          >
            {signIn ? "Sign up" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default login;
