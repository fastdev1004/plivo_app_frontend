import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

import { API_ROOT } from "../constants";

const NewMessageForm = (props) => {
  const [text, setText] = useState("");
  const [conversationId, setConversationId] = useState(props.conversation_id);

  useEffect(() => {
    setConversationId(conversationId);
  }, [conversationId]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle message submit target", e.target.value);
    axios.post(`${API_ROOT}/messages`, {
      text: text,
      conversation_id: props.conversation_id,
    });

    setText("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>New Message:</Form.Label>
        <Form.Control type="text" value={text} onChange={handleChange} />
      </Form.Group>
      <Button type="submit">Send Text</Button>
    </Form>
  );
};

export default NewMessageForm;
