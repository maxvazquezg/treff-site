import React, { useState } from "react";

const ChatInput = (props) => {
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const isMessageProvided = message && message !== "";

    if (isMessageProvided) {
      props.sendMessage(message);
    } else {
      alert("Please insert an user and a message.");
    }
  };

  const onMessageUpdate = (e) => {
    setMessage(e.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      {/* <label htmlFor="user">User:</label>
      <br />
      <input id="user" name="user" value={user} onChange={onUserUpdate} />
      <br /> */}
      <label htmlFor="message">Message:</label>
      <br />
      <input
        type="text"
        id="message"
        name="message"
        value={message}
        onChange={onMessageUpdate}
      />
      {/* <br />
      <label htmlFor="message">Group:</label>
      <br />
      <input
        type="text"
        id="message"
        name="message"
        value={group}
        onChange={onGroupUpdate}
      /> */}
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default ChatInput;
