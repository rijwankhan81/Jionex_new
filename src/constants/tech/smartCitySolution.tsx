// coreCapabilities.tsx
import { FaCloud, FaLock, FaMobileAlt, FaTrafficLight } from "react-icons/fa";

import {
  MdSensors,
  MdOutlineEnergySavingsLeaf,
  MdOutlinePrivacyTip,
} from "react-icons/md";

import { RiBarChart2Line } from "react-icons/ri";

import { AiOutlineControl } from "react-icons/ai";

export const smartCityCore = [
  { name: "IoT Deployment", icon: <MdSensors /> },
  { name: "Cloud & Edge Platforms", icon: <FaCloud /> },
  { name: "Data & Analytics", icon: <RiBarChart2Line /> },
  { name: "Mobility & Traffic Tech", icon: <FaTrafficLight /> },
  { name: "Public Service Interfaces", icon: <FaMobileAlt /> },
  { name: "Command & Control Centers", icon: <AiOutlineControl /> },
  { name: "Security & Resilience", icon: <FaLock /> },
  { name: "Energy & Sustainability", icon: <MdOutlineEnergySavingsLeaf /> },
  { name: "Compliance & Data Privacy", icon: <MdOutlinePrivacyTip /> },
];
