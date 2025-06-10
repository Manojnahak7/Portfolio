import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { color } from "chart.js/helpers";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const skillData = [
  { name: "Java", proficiency: 90 },
  { name: "SpringBoot", proficiency: 85 },
  { name: "Hibernate", proficiency: 80 },
  { name: "JPA", proficiency: 75 },
  { name: "MySQL", proficiency: 88 },
  { name: "ReactJS", proficiency: 85 },
  { name: "HTML5", proficiency: 95 },
  { name: "CSS3", proficiency: 90 },
  { name: "Bootstrap", proficiency: 80 },
  { name: "JavaScript", proficiency: 90 },
  { name: "C#", proficiency: 70 },
  { name: "C++", proficiency: 65 },
];

const data = {
  labels: skillData.map((skill) => skill.name),
  datasets: [
    {
      data: skillData.map((skill) => skill.proficiency),
      backgroundColor: "rgba(0, 216, 255, 0.4)",
      borderColor: "#00d8ff",
      borderWidth: 2,
      pointBackgroundColor: "#00d8ff",
    },
  ],
};

const options = {
  scales: {
    r: {
      beginAtZero: true,
      min: 0,
      max: 100,
      ticks: {
        stepSize: 25,
        color: "#aaa",
      },
      pointLabels: {
        color: "#ccc",
        font: {
          size: 14,
        },
      },
      grid: {
        color: "#444",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const SkillRadarChart = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "10px 0" }}>
      <Radar data={data} options={options} />
    </div>
  );
};
