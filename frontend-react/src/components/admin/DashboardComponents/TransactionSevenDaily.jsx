import { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';

function TransactionSevenDaily() {
  const [total, setTotal] = useState(0);
  const [chartData, setChartData] = useState([]);
  const [chartCategories, setChartCategories] = useState([]);
  const [currentMonth, setCurrentMonth] = useState('');
  const [percentage, setPercentage] = useState(0);
  const chartRef = useRef(null);

  useEffect(() => {
    getTransactionSevenDaily();
  }, []);

  useEffect(() => {
    if (chartData.length > 0 && chartCategories.length > 0) {
      renderChart();
    }
  }, [chartData, chartCategories]);

  const accessToken = sessionStorage.getItem('access_token');

  const getTransactionSevenDaily = async () => {
    try {
      const response = await fetch('https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/transactions-daily', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      });
      const result = await response.json();
      if (result.success) {
        const totalAmount = result.data.total_amount;
        setTotal(totalAmount);

        const dates = result.data.transaction.map(item => new Date(item.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }));
        const amounts = result.data.transaction.map(item => item.amount);
        
        setChartCategories(dates);
        setChartData(amounts);

        setCurrentMonth(result.data.moth);
        setPercentage(result.data.percentage);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderChart = () => {
    const options = {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0
        },
      },
      series: [
        {
          name: "data transaksi",
          data: chartData,
          color: "#1A56DB",
        },
      ],
      xaxis: {
        categories: chartCategories,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };

    if (chartRef.current) {
      chartRef.current.updateOptions(options);
    } else {
      chartRef.current = new ApexCharts(document.getElementById("area-chart"), options);
      chartRef.current.render();
    }
  };

  return (
    <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">Rp. {total.toLocaleString()}</h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Transaksi selama 7 hari terakhir</p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
          {percentage}%
          <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
          </svg>
        </div>
      </div>
      <div id="area-chart"></div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          <div
            className="text-sm font-medium text-gray-500 text-center inline-flex items-center">
            7 Hari 
          </div>
          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
            {currentMonth.toUpperCase()}
            <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TransactionSevenDaily;