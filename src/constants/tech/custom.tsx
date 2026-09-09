// custom.tsx
import {
    FaJs,
    FaPython,
    FaJava,
    FaPhp,
    FaDocker,
    FaGitAlt,
    FaCuttlefish,
    FaNodeJs,
    FaLaravel,
    FaCloud,
    FaGitlab,
    FaDatabase
  } from 'react-icons/fa';
  
  import {
    TbBrandTypescript,
    TbBrandFlutter,
    TbBrandReactNative,
    TbBrandGolang,
    TbBrandRust,
    TbBrandCpp
  } from 'react-icons/tb';
  
  import {
    MdOutlineWeb,
    MdApi,
    MdSettingsApplications,
    MdOutlineCloudQueue,
    MdOutlineDraw,
  } from 'react-icons/md';
  
  import {
    RiCodeSSlashLine,
    RiGitBranchLine,
    RiServerLine
  } from 'react-icons/ri';
  
  import {
    AiOutlineCloudServer
  } from 'react-icons/ai';
  
  export const customSoftwareTools = [
    // Programming Languages
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <TbBrandTypescript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C#", icon: <FaCuttlefish /> },
    { name: "C++", icon: <TbBrandCpp /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Ruby", icon: <RiCodeSSlashLine /> },
    { name: "Dart", icon: <MdOutlineDraw /> },
    { name: "Go", icon: <TbBrandGolang /> },
    { name: "Rust", icon: <TbBrandRust /> },
  
    // Frameworks & Platforms
    { name: ".NET / ASP.NET Core", icon: <FaCuttlefish /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Spring Framework", icon: <FaJava /> },
    { name: "Django", icon: <FaPython /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "Ruby on Rails", icon: <RiCodeSSlashLine /> },
    { name: "Flutter", icon: <TbBrandFlutter /> },
    { name: "React Native", icon: <TbBrandReactNative /> },
    { name: "Electron", icon: <MdOutlineWeb /> },
  
    // Architecture & APIs
    { name: "MVC", icon: <MdSettingsApplications /> },
    { name: "Microservices", icon: <AiOutlineCloudServer /> },
    { name: "REST APIs", icon: <MdApi /> },
    { name: "GraphQL", icon: <MdApi /> },
    { name: "WebSocket", icon: <MdApi /> },
  
    // DevOps & Tools
    { name: "Docker", icon: <FaDocker /> },
    { name: "Kubernetes", icon: <FaCloud /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub Actions", icon: <RiGitBranchLine /> },
    { name: "Jenkins", icon: <MdOutlineCloudQueue /> },
    { name: "Azure DevOps", icon: <FaCloud /> },
    { name: "GitLab CI/CD", icon: <FaGitlab /> },
  
    // Databases
    { name: "MySQL", icon: <FaDatabase /> },
    { name: "PostgreSQL", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <RiServerLine /> },
    { name: "SQLite", icon: <FaDatabase /> },
    { name: "Firebase", icon: <FaCloud /> },
  ];
  