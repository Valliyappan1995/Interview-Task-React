import React, { useState } from "react";

// Functional Component
const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (isNaN(formData.age)) {
      newErrors.age = "Age must be a number";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully");
      console.log("Form Data:", formData);
    }
  };

  return (
    <div>
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          {errors.age && <span style={{ color: "red" }}>{errors.age}</span>}
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm;
