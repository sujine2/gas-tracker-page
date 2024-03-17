// LineChart.js
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";
import "./chart.css";

Chart.register(annotationPlugin);
export const LineChart = ({ color }) => {
  const [lowestDesView, setLowestDesView] = useState(false);
  const [averageDesView, setAverageDesView] = useState(false);
  const [highestDesView, setHighestDesView] = useState(false);
  const [chainGas, setGasData] = useState();
  const [chainTime, setTimeData] = useState();

  function openLowestDes() {
    if (lowestDesView) {
      setLowestDesView(false);
    } else {
      setLowestDesView(true);
    }
  }
  function openAverageDes() {
    if (averageDesView) {
      setAverageDesView(false);
    } else {
      setAverageDesView(true);
    }
  }

  function openHighestDes() {
    if (highestDesView) {
      setHighestDesView(false);
    } else {
      setHighestDesView(true);
    }
  }

  // useEffect(() => {
  //   // Socket 컴포넌트에서 setMessage 함수를 전달받아 사용
  //   const handleMessage = (newMessage) => {
  //     setMessage(newMessage);
  //   };

  //   // Socket 컴포넌트의 메시지 수신 이벤트에 handleMessage 함수 등록
  //   Socket.onMessage(handleMessage);

  //   return () => {
  //     // 컴포넌트가 언마운트될 때 이벤트 핸들러 제거
  //     Socket.offMessage(handleMessage);
  //   };
  // }, []);

  var areaChart;
  useEffect(() => {
    // 차트 데이터 정의
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Sepolia Gas fee (Wei)",
          backgroundColor: "rgba(" + color + ", 0.2)",
          borderColor: "rgba(" + color + ", 1)",
          borderWidth: 1,
          fill: false,
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };

    const annotation = {
      type: "line",
      borderColor: "rgba(255, 255, 255, 0.3)",
      borderDash: [6, 6],
      borderDashOffset: 0,
      borderWidth: 1,
      label: {
        display: true,
        content: (ctx) => "Average: " + average(ctx).toFixed(2),
        position: "end",
      },
      scaleID: "y",
      value: (ctx) => average(ctx),
    };
    // 차트 옵션 정의
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      animations: {
        tension: {
          duration: 1000,
          easing: "easeInQuart",
          from: 0.3,
          to: 0,
          loop: true,
        },
      },
      plugins: {
        annotation: {
          annotations: [annotation],
        },
      },
      hoverRadius: 12,
      hoverBackgroundColor: "white",
      interaction: {
        mode: "nearest",
        intersect: false,
        axis: "x",
      },
    };

    // 차트 생성
    const ctx = document.getElementById("areaChart").getContext("2d");

    areaChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: options,
    });

    return () => {
      areaChart.clear();
      areaChart.destroy();
    };
  }, [color]);

  return (
    <div>
      <div className="area-chart-container">
        <div className="area-chart-content area-chart">
          <canvas id="areaChart"></canvas>
        </div>
        <div className="area-chart-content">
          <div className="area-chart-des">
            Current Gas <span style={{ fontWeight: 700 }}> 30wei</span>
            <br /> <br />
            <span
              style={{
                transform: highestDesView ? "rotate( 90deg )" : "",
                transition: "all 0.3s ease-in-out",
                display: "inline-block",
                margin: 6,
              }}
            >
              ❯
            </span>{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                openHighestDes();
              }}
            >
              The Highest Gas
            </span>
            <br />
            <span
              style={{
                transform: lowestDesView ? "rotate( 90deg )" : "",
                transition: "all 0.3s ease-in-out",
                display: "inline-block",
                margin: 6,
              }}
            >
              ❯
            </span>{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                openLowestDes();
              }}
            >
              The Lowest Gas
            </span>
            <br />
            <span
              style={{
                transform: averageDesView ? "rotate( 90deg )" : "",
                transition: "all 0.3s ease-in-out",
                display: "inline-block",
                margin: 6,
              }}
            >
              ❯
            </span>{" "}
            <span
              style={{ cursor: "pointer" }}
              onClick={() => {
                openAverageDes();
              }}
            >
              Average Gas
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

function average(ctx) {
  const values = ctx.chart.data.datasets[0].data;
  return values.reduce((a, b) => a + b, 0) / values.length;
}
