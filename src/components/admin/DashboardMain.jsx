import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const DashboardMain = () => {
  const data = {
    labels: ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
    datasets: [
      {
        label: 'Sales',
        data: [22000, 62000, 68000, 43000, 25000, 30000, 20000, 40000, 70000, 80000, 50000, 30000],
        backgroundColor: '#F76F5A',
        borderRadius: '8',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


  return (
    <div className='dashboard'>
      <div className="dash_title">
        <p>안녕하세요 <span>큐빗 라멘</span> 님!</p>
        <p>오늘의 주문완료 금액은 <span className='dash_num'>123,456원</span>입니다.</p>
      </div>
      <div className="dash_btn">
        <p>매출현황</p>
        <ul>
          <li>어제</li>
          <li>오늘</li>
          <li>이번주</li>
          <li>이번달</li>
        </ul>
      </div>
      <div className="dash_box">
        <div className="actual_sales">
          <p className='actual_sales_title'>실매출</p>
          <p>123,456,789원</p>
        </div>
        <div className="order">
          <p className='actual_sales_title'>주문건</p>
          <p>123건</p>
        </div>
        <div className="cancellation">
          <p className='actual_sales_title'>취소</p>
          <p>123,456원</p>
        </div>
      </div>
      <div className="dash_chart">
        <Bar data={data} options={options} />
      </div>
    </div>
  )
}

export default DashboardMain