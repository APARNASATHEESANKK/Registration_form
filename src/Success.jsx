import React from "react";

const SuccessPage = () => {
  return (
    <>
    <div style={{height:'20px',width:"100%",backgroundColor:"purple"}}></div>
    <div style={{ textAlign: "center", marginTop: "50px", color: "#333" }}>
      <h1>Form Submitted Successfully!</h1>
      <p>Your Response has been recorded.</p>
      <a href="Submit another response"><u>Submit another response</u></a>
    </div>
      <div style={{marginLeft:"10px"}}>
      This content is neither created not endorsed by Google <u>Report Abuse-Terms of Service- Privacy Policy</u>
    </div>
    <div>
        <h3 style={{color:"gray",textAlign:"center",marginTop:"50px"}}>Google Forms</h3>
    </div>
   </>
  );
};

export default SuccessPage;
