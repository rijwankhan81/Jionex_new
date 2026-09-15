// Blockchain.tsx
import React from 'react';
import {
  FaEthereum,
  FaRust,
  FaReact,
  FaWallet,
  FaCube,
  FaProjectDiagram,
  FaCode,
  FaCubes
} from 'react-icons/fa';

import {
  MdDeveloperMode,
  MdOutlineApps,
  MdAccountBalanceWallet,
  MdIntegrationInstructions
} from 'react-icons/md';

import {
  RiCoinsLine,
  RiStackLine,
  RiNodeTree,
  RiShieldKeyholeLine
} from 'react-icons/ri';

import {
  BiCodeAlt
} from 'react-icons/bi';

import {
  AiOutlineAppstoreAdd,
  AiOutlineApi
} from 'react-icons/ai';

import {
  TbNetwork,
  TbBrandPython,
  TbDatabaseDollar
} from 'react-icons/tb';

export const blockchainTools = [
  // Blockchain Platforms
  { name: "Ethereum", icon: <FaEthereum /> },
  { name: "Solana", icon: <FaCubes /> },
  { name: "Polygon", icon: <TbBrandPython /> },
  { name: "Binance Smart Chain", icon: <FaCube /> },
  { name: "Hyperledger Fabric", icon: <RiStackLine /> },
  { name: "Avalanche", icon: <RiNodeTree /> },
  { name: "Polkadot", icon: <RiCoinsLine /> },
  { name: "Cardano", icon: <TbNetwork /> },

  // Smart Contract Languages
  { name: "Solidity", icon: <BiCodeAlt /> },
  { name: "Vyper", icon: <FaCode /> },
  { name: "Rust", icon: <FaRust /> },
  { name: "Go", icon: <MdDeveloperMode /> },

  // Development Tools
  { name: "Hardhat", icon: <FaReact /> },
  { name: "Truffle", icon: <FaCode /> },
  { name: "Remix IDE", icon: <MdOutlineApps /> },
  { name: "Ganache", icon: <MdDeveloperMode /> },
  { name: "MetaMask", icon: <FaWallet /> },
  { name: "Alchemy", icon: <AiOutlineApi /> },
  { name: "Infura", icon: <MdIntegrationInstructions /> },
  { name: "Chainlink", icon: <RiShieldKeyholeLine /> },

  // Wallets
  { name: "WalletConnect", icon: <MdAccountBalanceWallet /> },
  { name: "Trust Wallet", icon: <FaWallet /> },

  // Use Cases
  { name: "DeFi", icon: <TbDatabaseDollar /> },
  { name: "NFTs", icon: <AiOutlineAppstoreAdd /> },
  { name: "DAOs", icon: <FaProjectDiagram /> },
  { name: "DApps", icon: <MdOutlineApps /> },
];
