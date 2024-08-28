import React from "react";
import "./InputForm.css";

const InputForm = () => {
  return (
    <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">Company Email</label>
          <input 
            required
            name="email" 
            id="email" 
            type="email" 
            placeholder="Enter your company email" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">How Can We Help You?</label>
          <textarea
            required
            id="textarea"
            name="textarea"
            placeholder="Describe your issue or request here"
          >
          </textarea>
        </div>
        <button type="submit" className="form-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
