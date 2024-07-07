/* eslint-disable react/prop-types */
import { useState } from "react";
import validateForm from "../utils/validateForm";

const qualifications = ["High School", "Bachelor's", "Master's", "PhD"];
const years = Array.from(
  { length: 10 },
  (_, i) => new Date().getFullYear() - i
);
const genders = ["male", "female", "other"];

const Form = ({ setShowModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    qualification: "",
    year: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { hasNoErrors, newErrors } = validateForm(formData);
    console.log(hasNoErrors);
    if (hasNoErrors === true) {
      try {
        const res = await fetch("https://accredian-backend-task-t8c2.onrender.com/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        alert(data.message);
      } catch (err) {
        alert("Failed to Add Referral");
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-lg"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-xl font-semibold">
            Add a new <span className="text-primary">Referral</span>
          </h3>
          <span
            className="block cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            {" "}
            X{" "}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required={true}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required={true}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required={true}
              className="w-full p-2.5 border border-gray-300 rounded mt-1"
            >
              <option value="">Select</option>
              {genders.map((gender, idx) => (
                <option key={idx} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required={true}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Qualification</label>
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required={true}
              className="w-full p-2.5 border border-gray-300 rounded mt-1"
            >
              <option value="">Select</option>
              {qualifications.map((qual, idx) => (
                <option key={idx} value={qual}>
                  {qual}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Year of Passing Out</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required={true}
              className="w-full p-2.5 border border-gray-300 rounded mt-1"
            >
              <option value="">Select</option>
              {years.map((year, idx) => (
                <option key={idx} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white p-2 rounded mt-4 ring-offset-2 ring-sky-500 focus:ring-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
