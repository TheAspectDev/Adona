export function monthlyChart() {
  return {
    options: {
      interaction: {
        intersect: false,
        mode: "index",
      },
      layout: {
        padding: {
          left: 5,
          right: 5,
          top: 5,
          bottom: 5,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      },

      responsive: true,
      plugins: {
        datalabels: {
          display: false,
        },
        legend: {
          position: "top",
        },
        title: {
          display: false,
        },
      },
    },

    data: {
      labels: [
        "2023-5-1",
        "2023-5-2",
        "2023-5-3",
        "2023-5-4",
        "2023-5-5",
        "2023-5-6",
        "2023-5-7",
        "2023-5-8",
        "2023-5-9",
        "2023-5-10",
        "2023-5-11",
        "2023-5-12",
        "2023-5-13",
        "2023-5-14",
        "2023-5-15",
        "2023-5-16",
        "2023-5-17",
        "2023-5-18",
        "2023-5-19",
        "2023-5-20",
        "2023-5-21",
        "2023-5-22",
        "2023-5-23",
        "2023-5-24",
        "2023-5-25",
        "2023-5-26",
        "2023-5-27",
        "2023-5-28",
        "2023-5-29",
        "2023-5-30",
      ],
      datasets: [
        {
          label: "درآمد",
          data: [
            5, 20300, 1009, 52, 524, 22, 15, 900, 154235, 25141, 15151, 9093,
            151512, 2525, 252524, 25252, 2525, 25425, 252556, 25245, 23525, 252,
            252, 2525, 52352, 25253, 13434, 1414, 4141, 199999,
          ],
          borderColor: "rgb(239 68 68)",
          backgroundColor: "rgb(239 68 68)",
          pointRadius: 0,
          borderDashOffset: 10,
          tension: 0.3,
          pointHitRadius: 1000,
        },
        {
          label: "تعداد حمایت ها",
          data: [
            5, 1, 62, 2, 5, 8, 2, 1, 5, 15, 13, 1, 14, 1, 8, 4, 31, 3, 30, 8, 6,
            1, 2, 1, 6, 1, 2, 1, 1, 20,
          ],
          borderColor: "#fff",
          backgroundColor: "#fff",
          pointRadius: 0,
          borderDashOffset: 10,
          tension: 0.3,
          pointHitRadius: 1000,
        },
      ],
    },
  };
}

export function weeklyChart() {
  return {
    options: {
      interaction: {
        intersect: false,
        mode: "index",
      },
      layout: {
        padding: {
          left: 5,
          right: 5,
          top: 5,
          bottom: 5,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      },

      responsive: true,
      plugins: {
        datalabels: {
          display: false,
        },
        legend: {
          position: "top",
        },
        title: {
          display: false,
        },
      },
    },

    data: {
      labels: [
        "2023-5-1",
        "2023-5-2",
        "2023-5-3",
        "2023-5-4",
        "2023-5-5",
        "2023-5-6",
        "2023-5-7",
      ],
      datasets: [
        {
          label: "درآمد",
          data: [5, 20300, 1009, 52, 524, 22, 15, 900],
          borderColor: "rgb(239 68 68)",
          backgroundColor: "rgb(239 68 68)",
          pointRadius: 0,
          borderDashOffset: 10,
          tension: 0.3,
          pointHitRadius: 1000,
        },
        {
          label: "تعداد حمایت ها",
          data: [5, 4, 3, 2, 1, 2, 7, 2],
          borderColor: "#fff",
          backgroundColor: "#fff",
          pointRadius: 0,
          borderDashOffset: 10,
          tension: 0.3,
          pointHitRadius: 1000,
        },
      ],
    },
  };
}
