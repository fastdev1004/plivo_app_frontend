import React, { useState } from "react";
import axios from "axios";

import { API_ROOT } from "../constants";

const NewConversationForm = () => {
  const [values, setValues] = useState({
    title: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_ROOT}/conversations`, {
      title: values.title,
      phone: values.phone,
    });
    setValues({ title: "", phone: "" });
  };

  return (
    <div className="newConversationForm">
      <form onSubmit={handleSubmit}>
        <label>New Conversation Title:</label>
        <br />
        <input
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
          placeholder="Convo Title"
        />
        <br />
        <input
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewConversationForm;
