"use client";

import { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// ✅ Register required components
Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Filler,
  Tooltip,
  Legend
);

export default function AdoptionChart() {
  // ✅ Properly typed refs
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");
    if (!ctx) return;

    // Destroy old instance (important for hot reload or state changes)
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // ✅ Chart setup
    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["2010", "2012", "2015", "2018", "2020", "2023", "2025 (Est.)"],
        datasets: [
          {
            label: "Axle Counters Deployed",
            data: [10000, 20000, 30000, 55000, 70000, 110000, 135000],
            borderColor: "#0d9488",
            backgroundColor: "rgba(13, 148, 136, 0.1)",
            fill: true,
            tension: 0.3,
          },
          {
            label: "Track Circuits Deployed",
            data: [90000, 84500, 75000, 71000, 65000, 52000, 40000],
            borderColor: "#a1a1aa",
            backgroundColor: "rgba(161, 161, 170, 0.1)",
            fill: true,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Adoption Trends (New Installations)",
            color: "#f5f5f5",
            font: { size: 18, weight: "bold" },
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
          legend: {
            labels: {
              color: "#f5f5f5",
            },
          },
        },
        scales: {
          x: {
            ticks: { color: "#e4e4e7" },
            grid: { color: "rgba(255,255,255,0.1)" },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Units Deployed",
              color: "#f5f5f5",
            },
            ticks: { color: "#e4e4e7" },
            grid: { color: "rgba(255,255,255,0.1)" },
          },
        },
      },
    });

    // ✅ Cleanup
    return () => {
      chartInstanceRef.current?.destroy();
    };
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[500px] bg-neutral-800 p-6 rounded-2xl shadow-lg">
      <canvas ref={chartRef} />
    </div>
  );
}


