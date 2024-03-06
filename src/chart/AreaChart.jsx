// LineChart.js
import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import "./chart.css"

export const AreaChart = () => {
  useEffect(() => {
 
    // 차트 데이터 정의
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Sepolia Gas fee (Wei)',
        backgroundColor: 'rgba(3, 230, 200, 0.2)',
        borderColor: 'rgba(3, 230, 200, 1)',
        borderWidth: 1,
        fill: true,
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };

    // 차트 옵션 정의
    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      animations: {
        tension: {
          duration: 1000,
          easing: 'easeInQuart',
          from: 1,
          to: 0,
          loop: true
        }
      }
    };

    // 차트 생성
    const ctx = document.getElementById('areaChart').getContext('2d');
    const areaChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });

    return () => {
      areaChart.destroy()
      }
  }, []);
  

  return (
    <div>
      <div className="area-chart-container">
        <div className="area-chart-content area-chart">
          <canvas id="areaChart"></canvas>
        </div>
        <div className="area-chart-content">
          <div className="area-chart-des">
            <p className="des-p">Current Gas:</p> 30 gwei <br/>
            <p className="des-p">Base fee:</p> 9 wei
          </div>
        </div>
      </div>
    </div>
    
  );
};
