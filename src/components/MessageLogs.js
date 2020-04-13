import React, { useEffect, useState } from "react";
import axios from "axios";
import * as constant from "../constants";

const MessageLogs = (props) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      <h1>Messages Logs</h1>
    </div>
  );
};

export default MessageLogs;
