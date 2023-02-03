import React, { useState, useEffect, useRef } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import ChatInput from "./ChatInput";
import ChatWindow from "./ChatWindow";
import { vars } from "../../utils/vars";

// import ChatWindow from './ChatWindow/ChatWindow';
// import ChatInput from './ChatInput/ChatInput';

const Chat = (props) => {
  const [chat, setChat] = useState([]);
  const latestChat = useRef(null);

  latestChat.current = chat;

  useEffect(() => {
    const connection = new HubConnectionBuilder()
      .withUrl(vars.BACKEND_URL + "hubs/chat")
      .withAutomaticReconnect()
      .build();

    connection
      .start()
      .then(async (result) => {
        console.log("Connected!" + result);

        connection.on("UsersAdded", (message) => {
          const updatedChat = [...latestChat.current];
          updatedChat.push(message);

          setChat(updatedChat);
        });

        if (connection.state === "Connected") {
          connection
            .invoke("SubscribeToBoard", props.chat.identifier)
            .catch((err) => {
              return console.error(err.toString());
            });
        }

        connection.on("Message", (message) => {
          if (message.user) {
            const updatedChat = [...latestChat.current];
            updatedChat.push(message);

            setChat(updatedChat);
          }
        });
        // await  fetch(vars.BACKEND_URL + 'api/v1/chat/add', {
        //     method: 'POST',
        //     body: JSON.stringify({user: "Max", group: "Test"}),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
      })
      .catch((e) => console.log("Connection failed: ", e));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const messages = [];
    props.chat.chatMessages.forEach((element) => {
      messages.push({
        user: element?.user?.name,
        message: element?.message,
      });
    });
    setChat(messages);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = async (message) => {
    const chatMessage = {
      user: props.user.name,
      message: message,
      group: props.chat.identifier,
      userId: props.user.id,
      chatId: props.chat.id,
    };

    try {
      await fetch(vars.BACKEND_URL + "api/v1/chat/messages", {
        method: "POST",
        body: JSON.stringify(chatMessage),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (e) {
      console.log("Sending message failed.", e);
    }
  };

  return (
    <div>
      <ChatWindow chat={chat} />
      <hr />
      <ChatInput sendMessage={sendMessage} />
    </div>
  );
};

export default Chat;
