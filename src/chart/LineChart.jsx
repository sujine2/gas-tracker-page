// LineChart.js
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";
import "./chart.css";

Chart.register(annotationPlugin);
export const LineChart = ({ color, gas, time, gwei }) => {
  const [lowestDesView, setLowestDesView] = useState(false);
  const [averageDesView, setAverageDesView] = useState(false);
  const [highestDesView, setHighestDesView] = useState(false);
  const [currentPriority, setCurrentPriority] = useState("");

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

  function fromUnix() {
    const times = time.map((timestamp) => {
      const milliseconds = timestamp * 1000;
      const date = new Date(milliseconds);

      const hours = date.getHours();
      const minutes = date.getMinutes();

      // 시간 문자열 반환
      return `${hours}:${minutes}`;
    });
    return times;
  }

  function toGwei() {
    const gweiGas = gas.map((weiGas) => {
      const gweiGas = weiGas / 10 ** 9;
      return gweiGas;
    });
    return gweiGas;
  }

  var areaChart;
  useEffect(() => {
    const times = fromUnix();
    const gasData = gwei ? toGwei() : gas;
    const unit = gwei ? "gwei" : "wei";

    console.log("gas", gas);
    console.log("time", time);
    const data = {
      labels: times,
      datasets: [
        {
          label: "Sepolia Gas fee" + "(" + unit + ")",
          backgroundColor: "rgba(" + color + ", 0.2)",
          borderColor: "rgba(" + color + ", 1)",
          borderWidth: 1,
          fill: false,
          data: gasData,
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
          from: 0.5,
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

    setCurrentPriority(gasData.pop() + " " + unit);

    return () => {
      areaChart.clear();
      areaChart.destroy();
    };
  }, [gas, time, gwei]);

  return (
    <div className="area-chart-container">
      <div className="area-chart-content area-chart">
        <canvas id="areaChart"></canvas>
      </div>
      <div className="area-chart-content">
        <div className="area-chart-des">
          Current Gas{": "}
          <span style={{ fontWeight: 700 }}> {currentPriority}</span>
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
  );
};

function average(ctx) {
  const values = ctx.chart.data.datasets[0].data;
  return values.reduce((a, b) => a + b, 0) / values.length;
}
