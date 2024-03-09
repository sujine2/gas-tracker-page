// LineChart.js
import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import "./chart.css";

export const BarChart = ({ color }) => {
  useEffect(() => {
    // 차트 데이터 정의
    const label = [
      "0 AM",
      "3 AM",
      "6 AM",
      "9 AM",
      "12 PM",
      "3 PM",
      "6 PM",
      "9 PM",
    ];
    const data = {
      labels: label,
      datasets: [
        {
          label: "Sepolia Gas fee (Wei)",
          data: [65, 59, 80, 81, 56, 55, 40, 51],
          backgroundColor: [
            "rgba(" + color + ", 0.2)",
            "rgba(" + color + ", 0.2)",
            "rgba(" + color + ", 0.2)",
            "rgba(" + color + ", 0.2)",
            "rgba(" + color + ", 0.2)",
            "rgba(" + color + ", 0.2)",
            "rgba(" + color + ", 0.2)",
            "rgba(" + color + ", 0.2)",
          ],
          borderColor: [
            "rgba(" + color + ", 1)",
            "rgba(" + color + ", 1)",
            "rgba(" + color + ", 1)",
            "rgba(" + color + ", 1)",
            "rgba(" + color + ", 1)",
            "rgba(" + color + ", 1)",
            "rgba(" + color + ", 1)",
            "rgba(" + color + ", 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    // 차트 옵션 정의
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
        xAxes: [
          {
            barThickness: 6, // number (pixels) or 'flex'
            maxBarThickness: 8, // number (pixels)
          },
        ],
      },
    };

    // 차트 생성
    const ctx = document.getElementById("barChart").getContext("2d");
    const barChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: options,
    });

    return () => {
      barChart.destroy();
    };
  }, [color]);

  return (
    <div className="area-chart-container">
      <div className="area-chart-content bar-chart">
        <canvas id="barChart"></canvas>
      </div>
    </div>
  );
};
