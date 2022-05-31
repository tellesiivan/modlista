import React, { useState } from "react";
import LoadingButton from "../../helpers/LoadingButton";

export default function Login() {
  const [ui, setUid] = useState({
    error: "",
    loading: false,
  });
  const [values, setValues] = useState({
    email: "",
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
        <input
          type="text"
          value={values.email}
          onChange={onChangeHandler}
          name="email"
          placeholder="Email Address"
          className="px-2 py-3 rounded-md sm:text-sm bg-slate-200 text-slate-600 focus-within:outline-none "
        />
        <input
          type="password"
          value={values.password}
          onChange={onChangeHandler}
          name="password"
          placeholder="Password"
          className="px-2 py-3 rounded-md sm:text-sm bg-slate-200 text-slate-600 focus-within:outline-none "
        />
      </div>
      <LoadingButton
        styling={
          "inline-flex justify-center w-full p-3 text-sm font-medium tracking-wide text-white bg-black border border-transparent rounded-md hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        }
        loading={ui.loading}
        text="Login"
        type="submit"
        action={() => console.log("clicked")}
        disabled={values.password === "" || values.email === ""}
      />
    </form>
  );
}
