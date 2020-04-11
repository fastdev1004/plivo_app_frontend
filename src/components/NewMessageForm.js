import React, { useState, useEffect } from "react";
import { API_ROOT } from "../constants";
import axios from "axios";

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
    <div className="newMessageForm">
      <form onSubmit={handleSubmit}>
        <label>New Message:</label>
        <br />
        <input type="text" value={text} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewMessageForm;
