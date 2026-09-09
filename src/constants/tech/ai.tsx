// ai.tsx
import React from 'react';
import {
  FaPython,
  FaJs,
  FaGoogle,
  FaAws,
  FaMicrosoft,
  FaRobot,
  FaCloud,
  FaBrain,
  FaDocker
} from 'react-icons/fa';

import {
  MdMemory,
  MdOutlineAnalytics,
  MdOutlineTextsms,
  MdOutlineSpeakerNotes
} from 'react-icons/md';

import {
  RiComputerLine,
  RiCodeLine,
  RiLightbulbFlashLine,
  RiRobot2Line
} from 'react-icons/ri';

import {
  AiOutlineFunction,
  AiOutlineCloud
} from 'react-icons/ai';

import {
  BiChip,
  BiBrain
} from 'react-icons/bi';

import {
  TbDatabaseSearch
} from 'react-icons/tb';

export const aiTools = [
  // Frameworks & Libraries
  { name: "TensorFlow", icon: <FaBrain /> },
  { name: "PyTorch", icon: <BiBrain /> },
  { name: "Keras", icon: <MdMemory /> },
  { name: "Scikit-learn", icon: <RiCodeLine /> },
  { name: "spaCy", icon: <MdOutlineTextsms /> },
  { name: "NLTK", icon: <MdOutlineTextsms /> },
  { name: "Hugging Face", icon: <FaRobot /> },
  { name: "XGBoost", icon: <AiOutlineFunction /> },
  { name: "FastAI", icon: <RiRobot2Line /> },

  // Programming Languages
  { name: "Python", icon: <FaPython /> },
  { name: "R", icon: <RiComputerLine /> },
  { name: "Julia", icon: <RiLightbulbFlashLine /> },
  { name: "JavaScript", icon: <FaJs /> },

  // Cloud AI Platforms
  { name: "Google Cloud AI", icon: <FaGoogle /> },
  { name: "AWS AI/ML", icon: <FaAws /> },
  { name: "Azure AI", icon: <FaMicrosoft /> },
  { name: "IBM Watson", icon: <FaCloud /> },
  { name: "OpenAI", icon: <FaRobot /> },

  // Tools & Environments
  { name: "Jupyter Notebook", icon: <RiCodeLine /> },
  { name: "Google Colab", icon: <AiOutlineCloud /> },
  { name: "Kaggle", icon: <TbDatabaseSearch /> },
  { name: "MATLAB", icon: <BiChip /> },
  { name: "Docker", icon: <FaDocker /> },

  // Use Cases
  { name: "NLP", icon: <MdOutlineTextsms /> },
  { name: "Speech Recognition", icon: <MdOutlineSpeakerNotes /> },
  { name: "Recommendation Systems", icon: <MdOutlineAnalytics /> },
  { name: "Predictive Analytics", icon: <MdOutlineAnalytics /> },
];
