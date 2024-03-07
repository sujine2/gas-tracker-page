// LineChart.js
import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import annotationPlugin from 'chartjs-plugin-annotation';
import "./chart.css"

Chart.register(annotationPlugin);
export const AreaChart = ({color}) => {
  useEffect(() => {
 
    // 차트 데이터 정의
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Sepolia Gas fee (Wei)',
        backgroundColor: 'rgba(' + color + ', 0.2)',
        borderColor: 'rgba(' + color + ', 1)',
        borderWidth: 1,
        fill: false,
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };

    const annotation = {
      type: 'line',
      borderColor: 'rgba(255, 255, 255, 0.3)',
      borderDash: [6, 6],
      borderDashOffset: 0,
      borderWidth: 1,
      label: {
        display: true,
        content: (ctx) => 'Average: ' + average(ctx).toFixed(2),
        position: 'end'
      },
      scaleID: 'y',
      value: (ctx) => average(ctx)
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
          from: 0.3,
          to: 0,
          loop: true
        }
      },
      plugins: {
        annotation: {
          annotations: [
            annotation
          ],
        },
      }, 
      hoverRadius: 12,
      hoverBackgroundColor: 'white',
      interaction: {
        mode: 'nearest',
        intersect: false,
        axis: 'x'
      },
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
  }, [color]);
  

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

function average(ctx) {
  const values = ctx.chart.data.datasets[0].data;
  return values.reduce((a, b) => a + b, 0) / values.length;
}