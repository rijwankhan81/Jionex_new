// cms.tsx
import {
    FaWordpress,
    FaPhp,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGitAlt,
    FaDatabase,
    FaShopify,
    FaDocker
  } from 'react-icons/fa';
  
  import {
    TbBrandWix,
    TbBrandWebflow,
  } from 'react-icons/tb';
  
  import {
    MdOutlineWeb,
    MdSettings,
    MdApi
  } from 'react-icons/md';
  
  import {
    AiOutlineAppstoreAdd,
    AiFillTool
  } from 'react-icons/ai';
  
  import {
    RiSeoLine,
    RiShoppingCart2Line,
    RiGhost2Line,
    RiStackFill
  } from 'react-icons/ri';
  
  import {
    BiCodeAlt,
    BiNetworkChart
  } from 'react-icons/bi';
  
  export const cmsDevTools = [
    // CMS Platforms
    { name: "WordPress", icon: <FaWordpress /> },
    { name: "WooCommerce", icon: <RiShoppingCart2Line /> },
    { name: "Shopify", icon: <FaShopify /> },
    { name: "Joomla", icon: <MdOutlineWeb /> },
    { name: "Drupal", icon: <MdOutlineWeb /> },
    { name: "Magento", icon: <MdSettings /> },
    { name: "Wix", icon: <TbBrandWix /> },
    { name: "Webflow", icon: <TbBrandWebflow /> },
    { name: "Ghost", icon: <RiGhost2Line /> },
    { name: "Strapi", icon: <RiStackFill /> },
    { name: "Contentful", icon: <MdApi /> },
    { name: "Sanity", icon: <BiCodeAlt /> },
  
    // Languages & Tech
    { name: "PHP", icon: <FaPhp /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "MySQL", icon: <FaDatabase /> },
    { name: "REST API", icon: <MdApi /> },
    { name: "GraphQL", icon: <BiNetworkChart /> },
  
    // Tools & Plugins
    { name: "Elementor", icon: <AiOutlineAppstoreAdd /> },
    { name: "WPBakery", icon: <AiFillTool /> },
    { name: "ACF (Advanced Custom Fields)", icon: <MdSettings /> },
    { name: "Yoast SEO", icon: <RiSeoLine /> },
    { name: "WPForms", icon: <MdOutlineWeb /> },
    { name: "Jetpack", icon: <MdSettings /> },
  
    // Dev Tools
    { name: "Local by Flywheel", icon: <FaWordpress /> },
    { name: "MAMP / XAMPP", icon: <FaDatabase /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "Docker", icon: <FaDocker /> },
  ];
  