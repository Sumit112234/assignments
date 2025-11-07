import React, { useState } from "react";

export default function GreetingApp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (name, value) => {
    switch (name) {
      case "name":
        return value.length < 2 ? "Name must be at least 2 characters" : "";
      case "email":
        return !/^\S+@\S+\.\S+$/.test(value) ? "Invalid email format" : "";
      case "password":
        return value.length < 8 ? "Password must be at least 8 characters" : "";
      case "confirmPassword":
        return value !== form.password ? "Passwords do not match" : "";
      case "agree":
        return !value ? "You must agree to terms" : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setForm({ ...form, [name]: val });
    setErrors({ ...errors, [name]: validate(name, val) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(form).forEach((key) => {
      newErrors[key] = validate(key, form[key]);
    });
    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((err) => err === "");
    if (isValid) {
      setSubmitted(true);
    }
  };

  const passwordStrength = form.password.length >= 12
    ? "Strong"
    : form.password.length >= 8
    ? "Medium"
    : "Weak";

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Mini Greeting App</h2>
      {submitted ? (
        <p className="text-green-600 font-semibold">
          🎉 Welcome, {form.name}! Your registration is successful.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border w-full p-2 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label>Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="border w-full p-2 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="border w-full p-2 rounded"
            />
            <p className="text-sm mt-1">Strength: {passwordStrength}</p>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="border w-full p-2 rounded"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mr-2"
            />
            <label>I agree to the Terms & Conditions</label>
          </div>
          {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

          <button
            type="submit"
            disabled={
              !form.name ||
              !form.email ||
              !form.password ||
              !form.confirmPassword ||
              !form.agree ||
              Object.values(errors).some((err) => err !== "")
            }
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
