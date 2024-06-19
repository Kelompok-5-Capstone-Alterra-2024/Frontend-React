import { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';

const TopDonationCategory = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTopDonationCategory();
  }, []);

  const accessToken = sessionStorage.getItem('access_token');
  const getTopDonationCategory = async () => {
    try {
      const response = await fetch(`https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/categories-top`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      });
      const result = await response.json();
      if (result.success) {
        setData(result.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getChartOptions = (chartData) => {
    const series = chartData.map(item => item.count);
    const labels = chartData.map(item => item.category.name);

    return {
      series,
      colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
      // colors: ["#0EA5E9", "#E0F2FE", "#075985", "#7DD3FC"],
      chart: {
        height: 320,
        width: "100%",
        type: "donut",
      },
      stroke: {
        colors: ["transparent"],
        lineCap: "",
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: 20,
              },
              total: {
                showAlways: true,
                show: true,
                label: "Top Donasi",
                fontFamily: "Inter, sans-serif",
                formatter: function (w) {
                  const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                  return sum + ' donasi';
                },
              },
              value: {
                show: true,
                fontFamily: "Inter, sans-serif",
                offsetY: -20,
                formatter: function (value) {
                  return value + " donasi";
                },
              },
            },
            size: "80%",
          },
        },
      },
      grid: {
        padding: {
          top: -2,
        },
      },
      labels,
      dataLabels: {
        enabled: false,
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + " donasi";
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value) {
            return value + " donasi";
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    };
  }

  useEffect(() => {
    if (document.getElementById("donut-chart") && typeof ApexCharts !== 'undefined' && data.length) {
      const chart = new ApexCharts(document.getElementById("donut-chart"), getChartOptions(data));
      chart.render();

      const checkboxes = document.querySelectorAll('#devices input[type="checkbox"]');

      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => chart.updateOptions(getChartOptions(data)));
      });

      return () => {
        checkboxes.forEach((checkbox) => {
          checkbox.removeEventListener('change', () => chart.updateOptions(getChartOptions(data)));
        });
        chart.destroy();
      };
    }
  }, [data]);

  return (
    <div className="md:col-span-1 bg-white rounded-lg shadow flex flex-col items-center">
      <div className="max-w-sm w-full bg-white md:p-6">
        <div className="flex justify-between mb-3">
          <div className="w-full flex flex-col mb-2">
            <p className="text-zinc-900 text-base font-bold">Donasi</p>
            <p className="text-zinc-500 text-sm">Kategori donasi paling populer</p>
          </div>
        </div>
        <div id="donut-chart"></div>
      </div>
    </div>
  );
}

export default TopDonationCategory;

