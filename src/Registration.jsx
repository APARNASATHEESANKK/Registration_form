import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    qualification: "",
    skills: [],
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle checkbox array for skills
    if (e.target.type === "checkbox") {
      const skill = e.target.value;
      setFormData((prevData) => ({
        ...prevData,
        skills: prevData.skills.includes(skill)
          ? prevData.skills.filter((s) => s !== skill)
          : [...prevData.skills, skill],
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      dob: "",
      gender: "",
      phone: "",
      email: "",
      qualification: "",
      skills: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
   // alert("Form submitted successfully!");
    navigate("/success"); // Navigate to the success page
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{backgroundColor: "black", padding: "30px", borderRadius: "10px", maxWidth: "500px", width: "100%", color: "#eee",}}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#eee" }}>
        Registration Form
      </h2>
      <div style={{ marginBottom: "15px" ,marginLeft:"" }}>
        <label>Name:</label>
        <input className="text-dark" type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} required />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>Date of Birth:</label>
        <input className="text-dark" type="date"name="dob"value={formData.dob}onChange={handleChange}style={inputStyle}required/>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>Gender:</label>
        <div>
          <label style={{ marginRight: "10px" }}>
            <input type="radio"name="gender"value="Male" onChange={handleChange} checked={formData.gender =="Male"} required/>{" "}
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" onChange={handleChange} checked={formData.gender === "Female"}/>{" "}
            Female
          </label>
          <label style={{ marginRight: "10px" }}>
            <input type="radio"name="gender"value="Male" onChange={handleChange} checked={formData.gender =="Others"} required/>{" "}
            Others
          </label>
        </div>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>Phone No:</label>
        <input className="text-dark" type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} required />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>Email:</label>
        <input className="text-dark" type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>Qualification:</label>
        <select className="text-dark" name="qualification" value={formData.qualification} onChange={handleChange} style={inputStyle} required>
          <option value="">Select</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Graduate">Graduate</option>
          <option value="Postgraduate">Postgraduate</option>
        </select>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>Skills:</label>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {["HTML", "CSS", "Bootstrap", "JavaScript", "React"].map((skill) => (
            <label key={skill}>
              <input type="checkbox" value={skill} onChange={handleChange} checked={formData.skills.includes(skill)} />{" "} {skill}
            </label>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
        <button type="button" onClick={handleReset} style={resetButtonStyle}>
          Reset
        </button>
      </div>
    </form>
  );
};

const inputStyle = { width: "100%", padding: "10px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc", backgroundColor: "#eee",};

const buttonStyle = {padding: "10px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer",};

const resetButtonStyle = { padding: "10px",backgroundColor: "#007bff",color: "#fff",border: "none", borderRadius: "5px", cursor: "pointer",};

export default RegistrationForm;
