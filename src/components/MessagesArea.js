import React from "react";
import { Alert, Container, Row, Col, FormText } from "react-bootstrap";
import NewMessageForm from "./NewMessageForm";

const MessagesArea = ({ conversation: { id, title, messages } }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Row xs={10} md={20} lg={30}>
        <Col>{orderedMessages(messages)}</Col>
        <Col></Col>
      </Row>
      <NewMessageForm conversation_id={id} />
    </Container>
  );
};

export default MessagesArea;

const orderedMessages = (messages) => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return sortedMessages.map((message) => {
    let messageCreated = new Date(message.created_at);
    let date = messageCreated.toLocaleDateString();
    let time = messageCreated.toLocaleTimeString();
    return message.origin === "app" ? (
      <Row key={message.id}>
        <Col xs={{ span: 6, offset: 2 }} md={{ span: 6, offset: 2 }}>
          <Alert key={message.id} variant="dark" style={{ marginBottom: 0 }}>
            {message.text}
          </Alert>
          <FormText className="text-muted" style={{ marginBottom: 10 }}>
            {date} {time}
          </FormText>
        </Col>
      </Row>
    ) : (
      <Row key={message.id}>
        <Col xs={6} md={6}>
          <Alert key={message.id} variant="primary" style={{ marginBottom: 0 }}>
            {message.text}
          </Alert>
          <FormText className="text-muted" style={{ marginBottom: 10 }}>
            {date} {time}
          </FormText>
        </Col>
      </Row>
    );
  });
};
