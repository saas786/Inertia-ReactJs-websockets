import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: "",
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    );
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("login"));
  };

  return (
    <Guest
      className="container"
      header={
        <div>
          <div className="d-flex justify-content-center">
            <img
              src="/storage/images/Legendary_Logo.png"
              alt="legendary logo"
              height="165"
            />
          </div>
          <div className="d-flex justify-content-center">
            <h2>Login</h2>
          </div>
        </div>
      }
    >
      <Head title="Log in" />

      {status && <div className="">{status}</div>}

      <ValidationErrors errors={errors} />
      <div className="card p-3">
        <form onSubmit={submit}>
          <div>
            <Label forInput="email" value="Email" className="form-label" />

            <Input
              type="text"
              name="email"
              value={data.email}
              className="form-control"
              autoComplete="username"
              isFocused={true}
              handleChange={onHandleChange}
            />
          </div>

          <div className="my-3">
            <Label
              forInput="password"
              value="Password"
              className="form-label"
            />

            <Input
              type="password"
              name="password"
              value={data.password}
              className="form-control"
              autoComplete="current-password"
              handleChange={onHandleChange}
            />
          </div>

          <div className="form-check my-3">
            <label className="form-check-label mb-3">
              <Checkbox
                name="remember"
                value={data.remember}
                handleChange={onHandleChange}
              />

              <span className="">Remember me</span>
            </label>
          </div>

          <div className="d-flex  justify-content-evenly">
            <Link
              className="btn  btn-outline-success "
              href={route("register")}
            >
              Register Here
            </Link>
            {canResetPassword && (
              <Link
                href={route("password.request")}
                className="btn btn-outline-warning"
              >
                Forgot your password?
              </Link>
            )}
            <Button className="btn btn-outline-primary" processing={processing}>
              Log in
            </Button>
          </div>
        </form>
      </div>
    </Guest>
  );
}
