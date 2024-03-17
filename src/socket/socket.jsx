import React, { useEffect, useState, useRef } from "react";

export const Socket = () => {
  const [socketConnected, setSocketConnected] = useState(false);
  const connection = useRef(null);

  const webSocketUrl = "ws://localhost:8888/priorityGas/ethereum";
  useEffect(() => {
    if (!connection.current) {
      connection.current = new WebSocket(webSocketUrl);
      connection.current.onopen = () => {
        console.log("connected to " + webSocketUrl);
        console.log(connection.current);
        setSocketConnected(true);
      };
      connection.current.onclose = (error) => {
        console.log("disconnect from " + webSocketUrl);
        console.log(error);
        setSocketConnected(false);
      };
      connection.current.onerror = (error) => {
        console.log("connection error " + webSocketUrl);
        console.log(error);
        connection.current.close();
      };

      // connection.current.addEventListener("message", (event) => {
      //   console.log("Message from server ", event.data);
      // });

      connection.current.onmessage = (evt) => {
        console.log(evt);
        console.log(evt.data);
        var data = JSON.parse(evt.data);
        if (typeof data === "string") data = JSON.parse(data);
        console.log(data.chain);
        console.log(data.gas);
        console.log(data.time);
        // setItems((prevItems) => [...prevItems, data]);
      };
    }

    return () => {
      console.log("clean up");
      connection.current.close();
    };
  }, [connection]);

  console.log("connected", socketConnected);

  // useEffect(() => {
  //   items.map((item) => {
  //     console.log(JSON.stringify(item));
  //   });
  // }, [items]);
  // {
  //   items.map((item) => {
  //     console.log(JSON.stringify(item));
  //   });
  // }
};
