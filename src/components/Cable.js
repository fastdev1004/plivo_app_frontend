import React, { useEffect } from "react";
// import { ActionCableConsumer } from "react-actioncable-provider";

const Cable = ({ conversations, handleReceivedMessage, cableApp }) => {
  useEffect(() => {
    conversations.map(
      (conversation) =>
        (cableApp.conversations = cableApp.cable.subscriptions.create(
          {
            channel: "MessagesChannel",
            conversation: conversation.id,
            message: conversation,
          },
          {
            received: (receivedMessage) => {
              console.log("received message", receivedMessage);
              handleReceivedMessage(receivedMessage);
            },
          }
        ))
    );
  }, []);

  return (
    <div></div>
    // <Fragment>
    //   {conversations.map((conversation) => {
    //     return (
    //       <ActionCableConsumer
    //         key={conversation.id}
    //         channel={{
    //           channel: "MessagesChannel",
    //           conversation: conversation.id,
    //         }}
    //         onReceived={handleReceivedMessage}
    //       />
    //     );
    //   })}
    // </Fragment>
  );
};

export default Cable;
