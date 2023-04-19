import React from "react";
import "../Signin.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  function handlchange() {
    alert("Signup Successfully !");
    navigate("/signin");
  }

  return (
    <>
      <div className="sectionp">
        <div className="box-contact">
          <div className="container-contact">
            <div className="top-contact">
              <header className="headercontact">Signup</header>
            </div>
            <div className="input-field input-contact">
              <input
                type="text"
                className="input input1"
                placeholder="Enter Your Name"
                id
              />
              <i className="bx bx-user" />
            </div>
            <div className="input-field">
              <input
                type="email"
                className="input2"
                placeholder="Enter Your Email"
                id
              />
              <i className="bx bx-user" />
            </div>
           
            <div className="input-field">
              <input
                type="Password"
                className="input2"
                placeholder="Password"
                id
              />
              <i className="bx bx-lock-alt" />
            </div>
            <div className="input-field">
              <input
                type="submit"
                className="submit submit-contact"
                defaultValue="Login"
                id
                onClick={handlchange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
