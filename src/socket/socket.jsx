import React, { useEffect, useState, useRef } from "react";
import { LineChartSm } from "../chart/LineChart-sm";
import { LineChart } from "../chart/LineChart";

export const Socket = ({ id, color, isSm, gwei }) => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [gas, setGasData] = useState([]);
  const [time, setTimeData] = useState([]);

  const webSocketUrl = `ws://127.0.0.1:8888/priorityGas/` + id;
  let ws = useRef(null);

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
        setSocketConnected(false);
      };
      ws.current.onerror = (error) => {
        console.log("connection error " + webSocketUrl);
        ws.current.close();
        console.log(error);
      };
      ws.current.onmessage = (evt) => {
        var data = JSON.parse(evt.data);
        if (typeof data == "string") data = JSON.parse(data);
        console.log(data);
        setGasData(data.gas);
        setTimeData(data.time);
        // console.log(gas);
        // console.log(time);
        //   setItems((prevItems) => [...prevItems, data]);
      };
    }

    return () => {
      console.log("clean up");
      ws.current.close();
    };
  }, []);

  return (
    <div>
      {isSm ? (
        gas.length > 0 && time.length > 0 ? (
          <LineChartSm color={color} gas={gas} time={time} gwei={gwei} />
        ) : (
          <></>
        )
      ) : gas.length > 0 && time.length > 0 ? (
        <LineChart color={color} gas={gas} time={time} gwei={gwei} />
      ) : (
        <></>
      )}
    </div>
  );
};
