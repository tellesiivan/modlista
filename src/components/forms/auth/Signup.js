import { useState } from "react";

export default function Signup() {
  const [ui, setUid] = useState({
    error: "",
    loading: false,
  });
  const [values, setValues] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const {
      target: { name, value },
    } = e;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form>
      <div className="flex flex-col max-w-md mx-auto mb-4 space-y-2">
        <div className="flex flex-row items-center pr-2 overflow-hidden text-black rounded-md h-11 sm:text-sm bg-slate-200 focus-within:outline-none">
          <div className="flex items-center justify-center h-full px-2 mr-1 text-xs font-semibold tracking-wide text-black bg-gray-300 ">
            Paaartly.app/
          </div>
          <input
            type="text"
            value={values.userName}
            onChange={onChangeHandler}
            name="userName"
            placeholder="Your username goes here..."
            className="flex-1 bg-transparent focus-within:outline-none placeholder:text-gray-400 placeholder:text-xs sm:placeholder:text-sm"
          />
        </div>
        <input
          type="text"
          value={values.email}
          onChange={onChangeHandler}
          name="email"
          placeholder="Email Address"
          className="px-2 py-3 text-black rounded-md sm:text-sm bg-slate-200 focus-within:outline-none placeholder:text-xs sm:placeholder:text-sm"
        />
        <input
          type="password"
          value={values.password}
          onChange={onChangeHandler}
          name="password"
          placeholder="Password"
          className="px-2 py-3 text-black rounded-md sm:text-sm bg-slate-200 focus-within:outline-none placeholder:text-xs sm:placeholder:text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={
          values.password === "" ||
          values.email === "" ||
          values.userName === ""
        }
        className="inline-flex justify-center w-full p-3 text-sm font-medium tracking-wide text-white bg-black border border-transparent rounded-md hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {true ? (
          <span className="w-5 h-5 border-2 border-white rounded-full animate-spin"></span>
        ) : (
          "   Create account"
        )}
      </button>
    </form>
  );
}
