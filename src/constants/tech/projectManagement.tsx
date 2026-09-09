// Tools.tsx
import {
  FaDocker,
  FaGitAlt,
  FaJenkins,
  FaSlack,
  FaMicrosoft,
  FaTrello,
} from "react-icons/fa";

import {
  SiJira,
  SiConfluence,
  SiAsana,
  SiPostman,
  SiCypress,
} from "react-icons/si";

import { AiOutlineDeploymentUnit } from "react-icons/ai";

import {
  RiStackLine,
  RiBarChart2Line,
  RiDatabase2Fill,
  RiShieldCheckLine,
} from "react-icons/ri";

import { MdOutlineCloudDone, MdOutlineSecurity, MdApi } from "react-icons/md";

import { BiNetworkChart } from "react-icons/bi";

export const projectManagementTools = [
  // Project Tracking & Collaboration
  { name: "Jira", icon: <SiJira /> },
  { name: "Confluence", icon: <SiConfluence /> },
  { name: "Asana", icon: <SiAsana /> },
  { name: "Slack", icon: <FaSlack /> },
  { name: "MS Teams", icon: <FaMicrosoft /> },
  { name: "Trello", icon: <FaTrello /> },

  // CI/CD & DevOps
  { name: "GitHub Actions", icon: <FaGitAlt /> },
  { name: "Jenkins", icon: <FaJenkins /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Terraform", icon: <AiOutlineDeploymentUnit /> },
  { name: "Ansible", icon: <RiStackLine /> },
  { name: "Helm", icon: <MdApi /> },

  // QA & Testing
  { name: "Postman", icon: <SiPostman /> },
  { name: "Cypress", icon: <SiCypress /> },

  // Monitoring & Performance
  { name: "CloudWatch", icon: <MdOutlineCloudDone /> },
  { name: "Grafana", icon: <RiBarChart2Line /> },
  { name: "Prometheus", icon: <BiNetworkChart /> },
  { name: "Datadog", icon: <RiBarChart2Line /> },
  { name: "New Relic", icon: <RiDatabase2Fill /> },

  // Security
  { name: "IAM", icon: <RiShieldCheckLine /> },
  { name: "Cloudflare", icon: <MdOutlineSecurity /> },
];
