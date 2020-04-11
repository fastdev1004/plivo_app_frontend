import React, { useEffect, useState } from "react";

let plivo = require("plivo");

const MessageLogs = (props) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const client = new plivo.Client(
      `${process.env.REACT_APP_PLIVO_AUTH_ID}`,
      `${process.env.REACT_APP_PLIVO_AUTH_TOKEN}`
    );

    client.messages.list({ limit: 5, offset: 0 }).then((response) => {
      setLogs(response);
      console.log(logs);
    });
  }, []);

  return (
    <div>
      <h1>Messages Logs</h1>
    </div>
  );
};

export default MessageLogs;
