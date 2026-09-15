// uiuxData.tsx
import {
    FaFigma,
    FaSketch,
    FaInvision,
    FaAccessibleIcon,
    FaSitemap,
    FaHotjar,
    FaFontAwesome,
  } from 'react-icons/fa';
  
  import {
    AiOutlineCloud,
    AiOutlineExperiment,
    AiOutlineInteraction,
    AiOutlineLayout,
  } from 'react-icons/ai';
  
  import {
    MdDesignServices,
    MdDraw,
    MdOutlineScreenSearchDesktop,
    MdIntegrationInstructions,
    MdOutlineInsertChart,
  } from 'react-icons/md';
  
  import {
    RiTestTubeLine,
    RiFlowChart,
    RiDraftLine,
    RiArtboardLine,
    RiLayout3Fill
  } from 'react-icons/ri';
  
  import {
    BiNetworkChart,
    BiLinkExternal,
    BiHighlight
  } from 'react-icons/bi';
import { TbBrandAdobeXd } from 'react-icons/tb';
  
  export const uiuxTools = [
    { name: "Figma", icon: <FaFigma /> },
    { name: "Adobe XD", icon: <TbBrandAdobeXd /> },
    { name: "Sketch", icon: <FaSketch /> },
    { name: "InVision Studio", icon: <FaInvision /> },
    { name: "Framer", icon: <RiArtboardLine /> },
    { name: "UXPin", icon: <AiOutlineLayout /> },
    { name: "Penpot", icon: <MdDraw /> },
    { name: "Moqups", icon: <RiDraftLine /> },
    { name: "Marvel", icon: <FaAccessibleIcon /> },
    { name: "Proto.io", icon: <AiOutlineInteraction /> },
    { name: "Balsamiq", icon: <MdDesignServices /> },
    { name: "Origami Studio", icon: <AiOutlineExperiment /> },
  
    // Design Systems & Handoff
    { name: "Zeplin", icon: <BiLinkExternal /> },
    { name: "Avocode", icon: <MdIntegrationInstructions /> },
    { name: "Abstract", icon: <AiOutlineCloud /> },
    { name: "Sympli", icon: <BiHighlight /> },
  
    // Research & Testing
    { name: "Lookback", icon: <MdOutlineScreenSearchDesktop /> },
    { name: "Maze", icon: <RiTestTubeLine /> },
    { name: "Useberry", icon: <RiTestTubeLine /> },
    { name: "Hotjar", icon: <FaHotjar /> },
    { name: "Crazy Egg", icon: <MdOutlineInsertChart /> },
    { name: "UsabilityHub", icon: <FaAccessibleIcon /> },
    { name: "Optimal Workshop", icon: <FaSitemap /> },
  
    // Wireframing & Flow
    { name: "Lucidchart", icon: <RiFlowChart /> },
    { name: "FlowMapp", icon: <BiNetworkChart /> },
    { name: "Whimsical", icon: <RiLayout3Fill /> },
    { name: "Draw.io", icon: <MdDraw /> },
  
    // Icons & Assets
    { name: "Iconscout", icon: <FaFontAwesome /> },
    { name: "Flaticon", icon: <FaFontAwesome /> },
    { name: "FontAwesome", icon: <FaFontAwesome /> },
    { name: "Material Icons", icon: <MdDesignServices /> },
    { name: "Heroicons", icon: <RiArtboardLine /> },
  ];
  