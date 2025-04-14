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

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        skills: checked
          ? [...prevData.skills, value]
          : prevData.skills.filter((s) => s !== value),
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
    navigate("/success");
  };

  return (
    <div style={overlay}>
      <div style={modal}>
        <form onSubmit={handleSubmit} style={formStyle}>
          <h2 style={headerStyle}>Registration Form</h2>

          <div style={inputContainer}>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} required />
          </div>

          <div style={inputContainer}>
            <label>Date of Birth:</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} style={inputStyle} required />
          </div>

          <div style={inputContainer}>
            <label>Gender:</label>
            <div>
              {["Male", "Female", "Others"].map((gender) => (
                <label key={gender} style={{ marginRight: "10px" }}>
                  <input type="radio" name="gender" value={gender} onChange={handleChange} checked={formData.gender === gender} required /> {gender}
                </label>
              ))}
            </div>
          </div>

          <div style={inputContainer}>
            <label>Phone No:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} required />
          </div>

          <div style={inputContainer}>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />
          </div>

          <div style={inputContainer}>
            <label>Qualification:</label>
            <select name="qualification" value={formData.qualification} onChange={handleChange} style={inputStyle} required >
              <option value=""className="bg-secondary">Select</option>
              <option value="Undergraduate"className="bg-secondary">Undergraduate</option>
              <option value="Graduate"className="bg-secondary">Graduate</option>
              <option value="Postgraduate"className="bg-secondary">Postgraduate</option>
            </select>
          </div>

          <div style={inputContainer}>
            <label>Skills:</label>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {["HTML", "CSS", "Bootstrap", "JavaScript", "React"].map((skill) => (
                <label key={skill}>
                  <input type="checkbox" value={skill} onChange={handleChange} checked={formData.skills.includes(skill)} /> {skill}
                </label>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button  type="submit" style={buttonStyle}>Submit</button>
            <button type="button" onClick={handleReset} style={resetButtonStyle}>Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// **Styles for Background & Glassmorphism**
const overlay = {position: "fixed",top: 0,left: 0,width: "100vw",height: "100vh",display: "flex",justifyContent: "center",alignItems: "center",
  backgroundImage: "url('https://healthystadia.eu/wp-content/uploads/2017/12/Background-Registration-Form.png')",
  backgroundSize: "cover",backgroundPosition: "center",};

const modal = { width: "100%", maxWidth: "500px"};

const formStyle = {backgroundColor: "rgba(255, 255, 255, 0.2)", padding: "30px",borderRadius: "15px",width: "100%",color: "#fff",
  boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", border: "1px solid rgba(255, 255, 255, 0.3)",};

const headerStyle = {textAlign: "center",marginBottom: "20px",color: "#fff",};

const inputContainer = {marginBottom: "15px"};

const inputStyle = {width: "100%",padding: "10px",marginTop: "5px",borderRadius: "8px",border: "none",backgroundColor: "rgba(255, 255, 255, 0.2",
   color: "black", outline: "none", backdropFilter: "blur(5px)"};

const buttonStyle = { padding: "10px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", flex: "1",};

const resetButtonStyle = { padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", flex: "1",};

export default RegistrationForm;
