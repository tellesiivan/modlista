import React, { useState } from "react";
import LoadingButton from "../../helpers/LoadingButton";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import AlertMessage from "../../helpers/AlertMessage";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { authModalStatus } from "../../../store/slices/modalsSlice";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errorFound, setErrorFound] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onChangeHandler = (e) => {
    if (errorFound) {
      setErrorFound("");
    }
    const {
      target: { name, value },
    } = e;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const SignInHandler = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(values.email, values.password);
      dispatch(authModalStatus({ open: false, from: "login" }));
    } catch (error) {
      setErrorFound("User not found, check email and password");
    }
    if (error && !loading) {
      console.log(error.message);
      setErrorFound("User not found, check email and password");
      return;
    }
  };

  return (
    <form onSubmit={SignInHandler}>
      <div className="flex flex-col max-w-md mx-auto mb-4 space-y-2">
        <input
          type="email"
          value={values.email}
          onChange={onChangeHandler}
          name="email"
          placeholder="Email Address"
          className="px-2 py-3 text-gray-300 rounded-md sm:text-sm bg-alt focus-within:outline-none placeholder:text-gray-500"
        />
        <input
          type="password"
          value={values.password}
          onChange={onChangeHandler}
          name="password"
          placeholder="Password"
          className="px-2 py-3 text-gray-300 rounded-md sm:text-sm bg-alt focus-within:outline-none placeholder:text-gray-500"
        />
      </div>
      {errorFound && <AlertMessage message={errorFound} />}
      <LoadingButton
        styling={
          "inline-flex justify-center w-full p-3 text-sm font-medium tracking-wide text-white bg-ag-green border border-transparent rounded-md hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 text-dark"
        }
        loading={loading}
        text="Login"
        type="submit"
        disabled={values.password === "" || values.email === "" || errorFound}
      />
    </form>
  );
}
