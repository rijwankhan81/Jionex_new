
// backend.tsx
import {
  FaNodeJs,
  FaPython,
  FaPhp,
  FaJava,
  FaLaravel,
  FaDatabase,
  FaServer,
  FaCodeBranch,
  FaCloud,
  FaCloudUploadAlt,
  FaDocker,
  FaLinux,
  FaFire,
} from 'react-icons/fa';

import {
  MdStorage,
  MdOutlineDns,
  MdApi
} from 'react-icons/md';

import {
  RiDatabase2Line,
  RiServerLine
} from 'react-icons/ri';

import {
  AiOutlineCloudServer,
  AiFillApi
} from 'react-icons/ai';

import {
  TbBrandAo3,
  TbBrandDjango,
  TbBrandRust,
  TbBrandMysql,
  TbBrandFirebase,
  TbBrandTypescript
} from 'react-icons/tb';

import {
  BiNetworkChart,
} from 'react-icons/bi';

export const backendTech = [
  // Languages & Runtimes
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Ruby", icon: <FaCodeBranch /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Kotlin", icon: <FaCodeBranch /> },
  { name: "C#", icon: <FaCodeBranch /> },
  { name: "Go", icon: <TbBrandAo3 /> },
  { name: "Rust", icon: <TbBrandRust /> },
  { name: "Dart", icon: <FaCodeBranch /> },

  // Frameworks
  { name: "Express.js", icon: <FaNodeJs /> },
  { name: "Django", icon: <TbBrandDjango /> },
  { name: "Flask", icon: <FaFire /> },
  { name: "Laravel", icon: <FaLaravel /> },
  { name: "Spring Boot", icon: <FaJava /> },
  { name: "FastAPI", icon: <AiFillApi /> },
  { name: "NestJS", icon: <TbBrandTypescript /> },
  { name: "ASP.NET Core", icon: <FaCodeBranch /> },
  { name: "Koa", icon: <FaNodeJs /> },
  { name: "Ruby on Rails", icon: <FaCodeBranch /> },

  // Databases
  { name: "MongoDB", icon: <RiDatabase2Line /> },
  { name: "MySQL", icon: <TbBrandMysql /> },
  { name: "PostgreSQL", icon: <FaDatabase /> },
  { name: "SQLite", icon: <MdStorage /> },
  { name: "Redis", icon: <FaServer /> },
  { name: "MariaDB", icon: <FaDatabase /> },
  { name: "Firebase", icon: <TbBrandFirebase /> },
  { name: "Cassandra", icon: <MdOutlineDns /> },
  { name: "DynamoDB", icon: <MdOutlineDns /> },

  // Tools & APIs
  { name: "GraphQL", icon: <MdApi /> },
  { name: "REST API", icon: <AiFillApi /> },
  { name: "Postman", icon: <FaCloud /> },
  { name: "Swagger", icon: <FaCloudUploadAlt /> },
  { name: "NGINX", icon: <RiServerLine /> },
  { name: "Apache", icon: <FaServer /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "CI/CD", icon: <BiNetworkChart /> },
];

export const backendTechnologies = [
  { image: "/images/ch.png", name: "C#" },
  { image: "/images/ASP.NET.png", name: "ASP.NET Web API" },
  { image: "/images/Azure.png", name: "Azure" },
  { image: "/images/Dependency-Injection.png", name: "Dependency-Injection" },
  { image: "/images/Docker.png", name: "Docker" },
  { image: "/images/ASP.NET.png", name: "ASP.NET" },
  { image: "/images/Windows-Forms.png", name: "Windows-Forms" },
  { image: "/images/SQL-Server.png", name: "SQL-Server" },
  {
    image: "/images/REST-and-SOAP-WebServices.png",
    name: "REST and SOAP Web Services",
  },
  {
    image: "/images/Microservices-Architecture.png",
    name: "Microservices Architecture",
  },
  { image: "/images/MVC-Framework.png", name: "MVC Framework" },
  { image: "/images/WPF.png", name: "WPF" },
  { image: "/images/Unit-Testing.png", name: "Unit Testing" },
  { image: "/images/Git.png", name: "Git" },
  { image: "/images/Quarkus.png", name: "Quarkus" },
  { image: "/images/Entity-Framework.png", name: "Entity Framework" },
  { image: "/images/ASP.NET.png", name: "ASP.NET Identity" },
  { image: "/images/Visual-Studio.png", name: "Visual Studio" },
  { image: "/images/CI-CD.png", name: "CI/CD" },
];
