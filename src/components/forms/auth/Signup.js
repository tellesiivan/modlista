import { useState } from "react";
import LoadingButton from "../../helpers/LoadingButton";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import AlertMessage from "../../helpers/AlertMessage";
import { authModalStatus } from "../../../store/user/modalsSlice";

export default function Signup() {
  const [isError, setIsError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
    comfirmPassword: "",
  });

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

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

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (values.password !== values.comfirmPassword) {
        setIsError("Passwords do not match");
        return;
      } else if (values.password.length < 5) {
        setIsError("Password is too short");
        return;
      }
      createUserWithEmailAndPassword(values.email, values.password);
    } catch (error) {
      console.log("onSubmitHandler:Signup", error.message);
      setIsError(error.message);
    }
    if (error) {
      throw new Error("Unable to create user: " + email + error.message);
    }
    dispatch(authModalStatus({ open: false, from: "signup" }));
    router.replace(`/`);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="flex flex-col max-w-md mx-auto mb-4 space-y-2">
        <input
          type="email"
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
          className="px-2 py-3 text-black rounded-md sm:text-sm bg-slate-200 focus-within:outline-none placeholder:text-xs sm:placeholder:text-sm "
        />
        <input
          type="password"
          value={values.comfirmPassword}
          onChange={onChangeHandler}
          name="comfirmPassword"
          placeholder="Verify password"
          className="px-2 py-3 text-black rounded-md sm:text-sm bg-slate-200 focus-within:outline-none placeholder:text-xs sm:placeholder:text-sm "
        />
      </div>

      {isError && <AlertMessage message={isError} />}
      <LoadingButton
        styling={
          "inline-flex justify-center w-full p-3 text-sm font-medium tracking-wide text-white bg-black border border-transparent rounded-md hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        }
        loading={loading}
        text="Create account"
        type="submit"
        disabled={
          values.password === "" ||
          values.email === "" ||
          values.comfirmPassword === "" ||
          isError
        }
      />
    </form>
  );
}
