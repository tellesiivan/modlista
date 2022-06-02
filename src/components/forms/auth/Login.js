import React, { useState } from "react";
import LoadingButton from "../../helpers/LoadingButton";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import AlertMessage from "../../helpers/AlertMessage";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onChangeHandler = (e) => {
    if (isError) {
      setIsError("");
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
      signInWithEmailAndPassword(values.email, values.password);

      if (error) {
        throw new Error("Email or password not found.");
      }

      router.replace(`/dashboard`);
    } catch (error) {
      console.error(error);
      setIsError(error.message);
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
      {isError && <AlertMessage message={isError} />}
      <LoadingButton
        styling={
          "inline-flex justify-center w-full p-3 text-sm font-medium tracking-wide text-white bg-black border border-transparent rounded-md hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        }
        loading={loading}
        text="Login"
        type="submit"
        disabled={values.password === "" || values.email === "" || isError}
      />
    </form>
  );
}
