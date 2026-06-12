import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  // State variable for sign in and sign up form
  const [signIn, setSignIn] = useState(true);

  // State variable for error message
  const [errMsg, setErrMsg] = useState<string | null>("");

  // useRef variables for validation purposes
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  // Function for validation
  const handleButtonClick = () => {
    const msg = checkValidData(email.current!.value, password.current!.value);
    setErrMsg(msg);
  };

  // Function for form toggle
  const toggleSignIn = () => {
    setSignIn(!signIn);
  };

  return (
    // min-h-screen ensures the page takes full height, flex centers the form vertically
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center bg-black">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg"
          alt="Netflix background"
          className="w-full h-full object-cover opacity-50"
        />
        {/* Cinematic dark overlay gradient covering the image */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/80"></div>
      </div>

      {/* Header component placed on top */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      {/* Sign In/Up Form Container */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative z-10 bg-black/75 p-16 w-4/12 max-w-112.5 text-white rounded-md font-sans mt-24 mb-12 opacity-80"
      >
        <h1 className="text-3xl font-bold mb-7">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>

        {errMsg && (
          <p className="text-red-500 font-extrabold text-sm mb-4">{errMsg}</p>
        )}

        {!signIn && (
          <input
            className="p-4 mb-4 w-full bg-zinc-800/80 border border-zinc-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-zinc-400"
            type="text"
            placeholder="Full Name"
          />
        )}

        <input
          ref={email}
          className="p-4 mb-4 w-full bg-zinc-800/80 border border-zinc-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-zinc-400"
          type="email"
          placeholder="Email or mobile number"
          required
        />

        <input
          ref={password}
          className="p-4 mb-6 w-full bg-zinc-800/80 border border-zinc-700 rounded-sm focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-zinc-400"
          type="password"
          placeholder="Password"
          required
        />

        <button
          className="p-3 w-full bg-red-600 hover:bg-red-700 active:bg-red-800 transition duration-200 font-semibold cursor-pointer rounded-sm mb-4"
          formNoValidate
          onClick={handleButtonClick}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>

        <div className="text-zinc-400 text-sm mt-4">
          {signIn ? "New to Netflix? " : "Already have an account? "}
          <span
            className="cursor-pointer text-white hover:underline font-medium"
            onClick={toggleSignIn}
          >
            {signIn ? "Sign up now." : "Sign In."}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
