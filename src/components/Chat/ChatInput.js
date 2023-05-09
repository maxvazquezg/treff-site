import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ChatInput = (props) => {
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const isMessageProvided = message && message !== "";

    if (isMessageProvided) {
      props.sendMessage(message);
      setMessage("");
    } else {
      alert("Please insert an user and a message.");
    }
  };

  const onMessageUpdate = (value) => {
    // setMessage(e.target.value);
    setMessage(value);
  };
  return (
    <form onSubmit={onSubmit}>
      {/* <br />
      <input
        type="text"
        id="message"
        name="message"
        value={message}
        onChange={onMessageUpdate}
        placeholder="Escribir un comentario"
        style={{
          width: "100%",
          height: "46px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      />
      <br />
      <br /> */}
      <ReactQuill
        value={message}
        onChange={onMessageUpdate}
        placeholder="Escribir un mensaje"
        style={{ height: "100px" }}
      />
      <br />
      <br />
      <button className="button is-link" type="submit">Enviar</button>
    </form>
  );
};

export default ChatInput;
