
import React, { useEffect, useState, useRef } from "react";

export const Socket = () => {
    const [socketConnected, setSocketConnected] = useState(false);
    const [sendMsg, setSendMsg] = useState(false);
    const [items, setItems] = useState([]);
  
    const webSocketUrl = `ws://127.0.0.1:8888/ethereum`;
    let ws = useRef(null);
  
    // 소켓 객체 생성
    useEffect(() => {
      if (!ws.current) {
        ws.current = new WebSocket(webSocketUrl);
        ws.current.onopen = () => {
          console.log("connected to " + webSocketUrl);
          setSocketConnected(true);
        };
        ws.current.onclose = (error) => {
          console.log("disconnect from " + webSocketUrl);
          console.log(error);
        };
        ws.current.onerror = (error) => {
          console.log("connection error " + webSocketUrl);
          console.log(error);
        };
        ws.current.onmessage = (evt) => {
        //   const data = JSON.parse(evt.data);
          console.log(evt);
        //   setItems((prevItems) => [...prevItems, data]);
        };
      }
  
      return () => {
        console.log("clean up");
        ws.current.close();
      };
    }, []);
  
}