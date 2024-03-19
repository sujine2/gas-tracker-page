// LineChart.js
import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";
import "./chart.css";

Chart.register(annotationPlugin);
export const LineChartSm = ({ color, gas, time, gwei }) => {
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

  const ctx = React.useRef(null);
  useEffect(() => {
    const times = fromUnix();
    const gasData = gwei ? toGwei() : gas;
    const unit = gwei ? "gwei" : "wei";

    // 차트 데이터 정의
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

    const areaChart = new Chart(ctx.current, {
      type: "line",
      data: data,
      options: options,
    });

    return () => {
      areaChart.clear();
      areaChart.destroy();
    };
  }, [gas, time, gwei]);

  return (
    <div>
      <div className="area-chart-container">
        <div className="area-chart-content area-chart-sm">
          <canvas ref={ctx} id="areaChart"></canvas>
        </div>
      </div>
    </div>
  );
};

function average(ctx) {
  const values = ctx.chart.data.datasets[0].data;
  return values.reduce((a, b) => a + b, 0) / values.length;
}
