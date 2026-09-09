// Cloud.tsx
import {
    FaAws,
    FaGoogle,
    FaMicrosoft,
    FaCloud,
    FaDocker,
    FaGitAlt,
    FaJenkins
  } from 'react-icons/fa';
  
  import {
    TbBrandVercel,
    // TbBrandKubernetes,
    // TbBrandDigitalocean
  } from 'react-icons/tb';
  
  import {
    MdCloudQueue,
    MdOutlineCloudDone,
    MdOutlineSecurity,
    MdApi,
    MdOutlineStorage
  } from 'react-icons/md';
  
  import {
    AiOutlineDeploymentUnit,
    AiOutlineFunction,
    AiOutlineCloudServer
  } from 'react-icons/ai';
  
  import {
    BiNetworkChart,
    BiServer
  } from 'react-icons/bi';
  
  import {
    RiCloudLine,
    RiStackLine,
    RiBarChart2Line,
    RiDatabase2Fill,
    RiShieldCheckLine
  } from 'react-icons/ri';
  
  export const cloudTools = [
    // Major Cloud Platforms
    { name: "AWS", icon: <FaAws /> },
    { name: "Azure", icon: <FaMicrosoft /> },
    { name: "Google Cloud", icon: <FaGoogle /> },
    { name: "IBM Cloud", icon: <FaCloud /> },
    { name: "Oracle Cloud", icon: <RiCloudLine /> },
    { name: "Linode", icon: <BiServer /> },
    { name: "Heroku", icon: <MdCloudQueue /> },
    { name: "Vercel", icon: <TbBrandVercel /> },
    { name: "Netlify", icon: <MdCloudQueue /> },
    { name: "Cloudflare", icon: <MdOutlineSecurity /> },
  
    // Cloud Services
    { name: "Compute / EC2", icon: <AiOutlineCloudServer /> },
    { name: "Storage / S3 / GCS", icon: <MdOutlineStorage /> },
    { name: "Serverless / Lambda / Functions", icon: <AiOutlineFunction /> },
    { name: "Cloud Run / App Engine", icon: <MdCloudQueue /> },
    { name: "CDN / CloudFront", icon: <MdOutlineCloudDone /> },
    { name: "IAM / Identity Management", icon: <RiShieldCheckLine /> },
  
    // DevOps & Infra
    { name: "Docker", icon: <FaDocker /> },
    { name: "Terraform", icon: <AiOutlineDeploymentUnit /> },
    { name: "Ansible", icon: <RiStackLine /> },
    { name: "Jenkins", icon: <FaJenkins /> },
    { name: "GitHub Actions", icon: <FaGitAlt /> },
    { name: "Helm", icon: <MdApi /> },
  
    // Monitoring & Analytics
    { name: "Datadog", icon: <RiBarChart2Line /> },
    { name: "Prometheus", icon: <BiNetworkChart /> },
    { name: "Grafana", icon: <RiBarChart2Line /> },
    { name: "CloudWatch", icon: <MdOutlineCloudDone /> },
    { name: "New Relic", icon: <RiDatabase2Fill /> },
  ];
  