import React from 'react'
import '../index.css'

const Contact = () => {

  function handlechange(){
    alert("Thanks! we will contact you shortly")
  }
  return (
    <>
      {/* Title */}

      <div
        className="section"
        style={{ display: "block", justifyContent: "center" }}
      >
        <h1 className="heading">
          <span>C</span>
          <span>O</span>
          <span>N</span>
          <span>T</span>
          <span>A</span>
          <span>C</span>
          <span>T</span>
          <span className="space"></span>
          <span>U</span>
          <span>S</span>
          <span className="space"></span>
        </h1>
        {/* Title */}

        <form className="maindiv-form" >
          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label"
              style={{ fontWeight: "bold" }}
            >
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
              style={{
                background: "rgba(255, 255, 255, 0.5)",
                color: "black",
                padding: "10px",
                borderRadius: "10px",
               
              }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label"
              style={{ fontWeight: "bold" }}
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
              style={{
                background: "rgba(255, 255, 255, 0.5)",
                color: "black",
                padding: "10px",
                borderRadius: "10px",
                
              }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="message"
              className="form-label"
              style={{ fontWeight: "bold" }}
            >
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows={5}
              required
              defaultValue={""}
              style={{
                resize: "vertical",
                background: "rgba(255, 255, 255, 0.5)",
                color: "black",
               
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-warning"
            style={{
              marginTop: "1rem",
              // width: "100%",
              backgroundColor: "#e35e0a",
              color: "white",
              fontSize: "1.5rem",
              
            }}
            onClick={handlechange}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact