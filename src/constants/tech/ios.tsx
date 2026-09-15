
// ios.tsx
import {
  FaApple,
  FaSwift,
  FaGithub,
  FaCloud,
  FaUnity,
  FaReact,
  FaDatabase
} from 'react-icons/fa';

import {
  TbBrandCpp,
  TbBrandFlutter,
  TbBrandReactNative
} from 'react-icons/tb';

import {
  MdOutlineMobileFriendly,
  MdOutlineCloudCircle,
  MdApi,
  MdOutlineSecurity,
} from 'react-icons/md';

import {
  AiOutlineRobot,
  AiOutlineBuild,
  AiFillBug
} from 'react-icons/ai';

import {
  RiTestTubeLine,
  RiCloudLine,
} from 'react-icons/ri';

import {
  BiNetworkChart,
  BiCodeAlt
} from 'react-icons/bi';

export const iosDevTools = [
  // Languages
  { name: "Swift", icon: <FaSwift /> },
  { name: "Objective-C", icon: <BiCodeAlt /> },
  { name: "Dart", icon: <BiCodeAlt /> },
  { name: "C++", icon: <TbBrandCpp /> },
  { name: "JavaScript", icon: <FaReact /> },

  // Frameworks / Platforms
  { name: "Xcode", icon: <FaApple /> },
  { name: "SwiftUI", icon: <MdOutlineMobileFriendly /> },
  { name: "UIKit", icon: <MdOutlineMobileFriendly /> },
  { name: "Flutter", icon: <TbBrandFlutter /> },
  { name: "React Native", icon: <TbBrandReactNative /> },
  { name: "Xamarin", icon: <AiOutlineBuild /> },
  { name: "Ionic", icon: <AiOutlineBuild /> },
  { name: "Unity", icon: <FaUnity /> },

  // Build & CI/CD Tools
  { name: "Xcode Build", icon: <AiOutlineBuild /> },
  { name: "Fastlane", icon: <BiNetworkChart /> },
  { name: "GitHub Actions", icon: <FaGithub /> },
  { name: "Jenkins", icon: <MdOutlineCloudCircle /> },
  { name: "Bitrise", icon: <RiCloudLine /> },
  { name: "Firebase App Distribution", icon: <FaCloud /> },

  // Testing Tools
  { name: "XCTest", icon: <RiTestTubeLine /> },
  { name: "XCUITest", icon: <AiFillBug /> },
  { name: "Firebase Test Lab", icon: <FaCloud /> },
  { name: "TestFlight", icon: <FaApple /> },
  { name: "Appium", icon: <AiOutlineRobot /> },

  // Libraries & APIs
  { name: "Alamofire", icon: <MdApi /> },
  { name: "Core Data", icon: <FaDatabase /> },
  { name: "Combine", icon: <MdApi /> },
  { name: "Firebase", icon: <FaCloud /> },
  { name: "MapKit", icon: <FaApple /> },
  { name: "ARKit", icon: <AiOutlineRobot /> },
  { name: "Core ML", icon: <AiOutlineRobot /> },
  { name: "AVFoundation", icon: <MdOutlineSecurity /> },
];




export const iosTechnologies = [
  { image: "/images/swift.png", name: "Swift" },
  { image: "/images/Core-Data.png", name: "Core Data" },
  { image: "/images/Core-Animation.png", name: "Core Animation" },
  { image: "/images/CocoaPods.png", name: "CocoaPods" },
  { image: "/images/MapKit.png", name: "MapKit" },
  { image: "/images/Objective-C.png", name: "Objective-C" },
  { image: "/images/Cocoa-Touch.png", name: "Cocoa Touch" },
  {
    image: "/images/Grand-Central-Dispatch.png",
    name: "Grand Central Dispatch",
  },
  { image: "/images/Core-Graphics.png", name: "Core Graphics" },
  { image: "/images/SceneKit.png", name: "SceneKit" },
  { image: "/images/Xcode.png", name: "Xcode" },
  { image: "/images/Auto-Layout.png", name: "Auto Layout" },
  { image: "/images/RESTful-APIs.png", name: "RESTful APIs" },
  { image: "/images/ARKit.png", name: "ARKit" },
  { image: "/images/Push-Notifications.png", name: "Push Notifications" },
  { image: "/images/UIKit.png", name: "UIKit" },
  { image: "/images/SwiftUI.png", name: "SwiftUI" },
  { image: "/images/Git (1).png", name: "Git" },
  { image: "/images/SiriKit.jpg", name: "SiriKit" },
];
