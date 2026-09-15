// ars.tsx
import React from 'react';
import {
  FaUnity,
  FaUncharted,
  FaPython,
  FaJs,
  FaGoogle,
  FaAws,
  FaMicrosoft,
  FaApple
} from 'react-icons/fa';

import {
  MdFaceRetouchingNatural,
  MdTrackChanges,
  MdViewInAr,
  MdOutlineCloud,
  MdCamera,
  MdExplore
} from 'react-icons/md';

import {
  RiCodeBoxLine
} from 'react-icons/ri';

import {
  AiOutlineCloud,
  AiOutlineScan
} from 'react-icons/ai';

import {
  GiProcessor
} from 'react-icons/gi';

import {
  TbBrandBlender,
  TbBrandThreejs
} from 'react-icons/tb';

export const arSolutions = [
  // SDKs & AR Platforms
  { name: "ARKit (iOS)", icon: <FaApple /> },
  { name: "ARCore (Android)", icon: <FaGoogle /> },
  { name: "Vuforia", icon: <MdViewInAr /> },
  { name: "8thWall", icon: <MdExplore /> },
  { name: "Wikitude", icon: <AiOutlineScan /> },
  { name: "Spark AR", icon: <MdFaceRetouchingNatural /> },
  { name: "Lens Studio", icon: <MdCamera /> },
  { name: "Unity (AR Foundation)", icon: <FaUnity /> },
  { name: "Unreal Engine", icon: <FaUncharted /> },

  // Dev Tools
  { name: "Blender", icon: <TbBrandBlender /> },
  { name: "3ds Max", icon: <GiProcessor /> },
  { name: "Maya", icon: <GiProcessor /> },

  // Programming
  { name: "C#", icon: <RiCodeBoxLine /> },
  { name: "C++", icon: <RiCodeBoxLine /> },
  { name: "Swift", icon: <RiCodeBoxLine /> },
  { name: "Kotlin", icon: <RiCodeBoxLine /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Python", icon: <FaPython /> },

  // Cloud & Devices
  { name: "Google Cloud", icon: <FaGoogle /> },
  { name: "Firebase", icon: <AiOutlineCloud /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Azure", icon: <FaMicrosoft /> },
  { name: "Microsoft HoloLens", icon: <FaMicrosoft /> },
  { name: "Apple Vision Pro", icon: <FaApple /> },

  // Use Cases
  { name: "Face Filters", icon: <MdFaceRetouchingNatural /> },
  { name: "Object Tracking", icon: <MdTrackChanges /> },
  { name: "Plane Detection", icon: <MdViewInAr /> },
  { name: "Image Recognition", icon: <MdCamera /> },
  { name: "Markerless AR", icon: <MdOutlineCloud /> },
];
