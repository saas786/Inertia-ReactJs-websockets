import React, { useEffect } from "react";
import Button from "@/Components/Button";
import Guest from "@/Layouts/Guest";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
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

    post(route("register"));
  };

  return (
    <Guest
      header={
        <div>
          <div className="d-flex justify-content-center">
            <img
              src="/storage/images/Legendary_Logo.png"
              alt="legendary logo"
              height="165"
            />
          </div>
          <h2>Registration</h2>
          <strong className="text-danger">
            The email and passwords are only used for registration and login
            purposes only.
          </strong>
          <p>
            You may use any email address you wish as long as it's valid email
            format (eg. something@something.something){" "}
          </p>
          <p>
            Just make sure you <strong>remember</strong> what you use for an
            email address and password to login with
          </p>
        </div>
      }
    >
      <Head title="Register" />
      <ValidationErrors errors={errors} />
      <div className="p-3">
        <form onSubmit={submit}>
          <div>
            <Label forInput="name" value="Name" />

            <Input
              type="text"
              name="name"
              value={data.name}
              className="form-control mb-3"
              autoComplete="name"
              isFocused={true}
              handleChange={onHandleChange}
              required
            />
          </div>

          <div className="">
            <Label forInput="email" value="Email" />

            <Input
              type="email"
              name="email"
              value={data.email}
              className="form-control mb-3"
              autoComplete="username"
              handleChange={onHandleChange}
              required
            />
          </div>

          <div className="mt-4">
            <Label forInput="password" value="Password (min-8 chars.)" />

            <Input
              type="password"
              name="password"
              value={data.password}
              className="form-control mb-3"
              autoComplete="new-password"
              handleChange={onHandleChange}
              required
            />
          </div>

          <div className="mt-4">
            <Label forInput="password_confirmation" value="Confirm Password" />

            <Input
              type="password"
              name="password_confirmation"
              value={data.password_confirmation}
              className="form-control mb-3"
              handleChange={onHandleChange}
              required
            />
          </div>

          <div className="d-flex justify-content-around mb-3">
            <Link href={route("login")} className="btn btn-outline-primary">
              Already registered?
            </Link>

            <Button className="btn btn-outline-success" processing={processing}>
              Register
            </Button>
          </div>
        </form>
      </div>
    </Guest>
  );
}
