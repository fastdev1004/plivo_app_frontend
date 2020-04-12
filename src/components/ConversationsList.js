import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_ROOT } from "../constants";
import { Container } from "react-bootstrap";

import NewConversationForm from "./NewConversationForm";
import MessagesArea from "./MessagesArea";
import Cable from "./Cable";

const ConversationsList = (props) => {
  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);

  useEffect(() => {
    axios.get(`${API_ROOT}/conversations`).then((response) => {
      console.log("get convos", response);
      setConversations(response.data);
    });
  }, []);

  const handleClick = (id) => {
    setActiveConversation(id);
  };

  const handleReceivedConversation = (response) => {
    setConversations([...conversations, response]);
  };

  const handleReceivedMessage = (response) => {
    console.log("received message", response);
    const { message } = response;
    const receivedConversations = [...conversations];
    const receivedConversation = receivedConversations.find(
      (convo) => convo.id === message.conversation_id
    );
    receivedConversation.messages = [...receivedConversation.messages, message];
    setConversations(receivedConversations);
  };

  const mapConversations = (conversations, handleClick) =>
    conversations.map((conversation) => {
      console.log("mapped convo", conversation);
      return (
        <li key={conversation.id} onClick={() => handleClick(conversation.id)}>
          {conversation.title} - {conversation.phone}
        </li>
      );
    });

  const findActiveConversation = (conversations, activeConversation) => {
    return conversations.find(
      (conversation) => conversation.id === activeConversation
    );
  };

  props.cableApp.cable.subscriptions.create(
    {
      channel: "ConversationsChannel",
    },
    {
      received: (receivedConversation) => {
        console.log("receivedConvo", receivedConversation);
        handleReceivedConversation(receivedConversation.conversation);
      },
    }
  );

  return (
    <Container>
      {conversations.length ? (
        <Cable
          cableApp={props.cableApp}
          conversations={conversations}
          handleReceivedMessage={handleReceivedMessage}
        />
      ) : null}
      <h2>Conversations</h2>
      <ul>{mapConversations(conversations, handleClick)}</ul>
      <NewConversationForm />
      {activeConversation ? (
        <MessagesArea
          conversation={findActiveConversation(
            conversations,
            activeConversation
          )}
        />
      ) : null}
    </Container>
  );
};

export default ConversationsList;
