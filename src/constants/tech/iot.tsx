// iot.tsx
import React from 'react';
import { FaMicrochip, FaWifi, FaBluetooth, FaNetworkWired, FaAws, FaMicrosoft, FaGoogle, FaNodeJs, FaDatabase, FaPython, FaJs } from 'react-icons/fa';
import { AiOutlineCloud } from 'react-icons/ai';
import { MdNetworkCheck, MdBuild, MdDeveloperMode, MdWifiTethering } from 'react-icons/md';
import { RiDeviceLine, RiBarChart2Line } from 'react-icons/ri';
import { BiNetworkChart, BiCodeAlt } from 'react-icons/bi';
import { GiRaspberry } from 'react-icons/gi';

export const iotDevTools = [
  // Hardware Platforms
  { name: "Arduino", icon: <FaMicrochip /> },
  { name: "Raspberry Pi", icon: <GiRaspberry /> },
  { name: "ESP32", icon: <FaWifi /> },
  { name: "BeagleBone", icon: <MdDeveloperMode /> },
  { name: "Particle", icon: <RiDeviceLine /> },

  // Communication Protocols
  { name: "MQTT", icon: <MdNetworkCheck /> },
  { name: "Bluetooth", icon: <FaBluetooth /> },
  { name: "Zigbee", icon: <FaNetworkWired /> },
  { name: "HTTP/REST", icon: <AiOutlineCloud /> },
  { name: "CoAP", icon: <BiNetworkChart /> },

  // Cloud & IoT Platforms
  { name: "AWS IoT", icon: <FaAws /> },
  { name: "Azure IoT", icon: <FaMicrosoft /> },
  { name: "Google Cloud IoT", icon: <FaGoogle /> },

  // Development Tools & Frameworks
  { name: "Node-RED", icon: <FaNodeJs /> },
  { name: "Mosquitto", icon: <MdWifiTethering /> },
  { name: "InfluxDB", icon: <FaDatabase /> },
  { name: "Grafana", icon: <RiBarChart2Line /> },
  { name: "PlatformIO", icon: <MdBuild /> },

  // Programming Languages
  { name: "C / C++", icon: <BiCodeAlt /> },
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <FaJs /> },
];
