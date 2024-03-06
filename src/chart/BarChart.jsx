// LineChart.js
import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import "./chart.css"

export const BarChart = () => {
  useEffect(() => {
    // 차트 데이터 정의
    const label = [
        '0 AM',
        '3 AM',
        '6 AM',
        '9 AM',
        '12 PM',
        '3 PM',
        '6 PM',
        '9 PM',
      ];
    const data = {
        labels: label,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40, 51],
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };
    // 차트 옵션 정의
    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    // 차트 생성
    const ctx = document.getElementById('barChart').getContext('2d');
    const barChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });

    return () => {
        barChart.destroy()
      }
  }, []);
  

  return (
    <div className="bar-chart-container">
      <canvas id="barChart"></canvas>
    </div>
  );
};