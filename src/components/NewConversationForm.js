import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

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
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>New Conversation Title:</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={values.title}
          onChange={handleChange}
          placeholder="Convo Title"
        />
        <Form.Text className="text-muted">
          Best practice is to name this based on the person being messaged.
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          <Form.Text className="text-muted">
            Please enter a country code (1 for the US) followed by a 10 digit
            phone number.
          </Form.Text>
        </Form.Label>
      </Form.Group>
      <Button type="submit">Create Conversation</Button>
    </Form>
  );
};

export default NewConversationForm;
