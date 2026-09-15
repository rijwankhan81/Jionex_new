
// Android.tsx
import {
  FaAndroid,
  FaJava,
  FaPython,
  FaUnity,
  FaGithub,
  FaCloud,
  FaDatabase
} from 'react-icons/fa';

import {
  TbBrandKotlin,
  TbBrandFlutter,
  TbBrandReactNative,
  TbBrandCpp
} from 'react-icons/tb';

import {
  MdOutlineMobileFriendly,
  MdApi,
  MdCloudCircle,
  MdBuildCircle,
  MdOutlineSecurity,
} from 'react-icons/md';

import {
  AiOutlineRobot,
  AiOutlineBuild,
  AiFillBug,
} from 'react-icons/ai';

import {
  RiTestTubeLine,
  RiToolsFill
} from 'react-icons/ri';

import {
  BiCodeAlt,
  BiNetworkChart
} from 'react-icons/bi';

export const androidDevTools = [
  // Languages
  { name: "Kotlin", icon: <TbBrandKotlin /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Dart", icon: <BiCodeAlt /> },
  { name: "C++", icon: <TbBrandCpp /> },
  { name: "Python", icon: <FaPython /> },

  // Frameworks / Platforms
  { name: "Android Studio", icon: <FaAndroid /> },
  { name: "Jetpack Compose", icon: <MdOutlineMobileFriendly /> },
  { name: "Flutter", icon: <TbBrandFlutter /> },
  { name: "React Native", icon: <TbBrandReactNative /> },
  { name: "Xamarin", icon: <MdBuildCircle /> },
  { name: "Apache Cordova", icon: <MdBuildCircle /> },
  { name: "Unity", icon: <FaUnity /> },
  { name: "Ionic", icon: <MdBuildCircle /> },

  // Build & CI/CD Tools
  { name: "Gradle", icon: <AiOutlineBuild /> },
  { name: "Maven", icon: <MdBuildCircle /> },
  { name: "Jenkins", icon: <MdCloudCircle /> },
  { name: "GitHub Actions", icon: <FaGithub /> },
  { name: "Fastlane", icon: <BiNetworkChart /> },
  { name: "Firebase App Distribution", icon: <FaCloud /> },

  // Testing Tools
  { name: "Espresso", icon: <AiOutlineRobot /> },
  { name: "JUnit", icon: <RiTestTubeLine /> },
  { name: "Robolectric", icon: <AiFillBug /> },
  { name: "Mockito", icon: <RiToolsFill /> },
  { name: "Firebase Test Lab", icon: <FaCloud /> },

  // Libraries & APIs
  { name: "Retrofit", icon: <MdApi /> },
  { name: "Room DB", icon: <FaDatabase /> },
  { name: "Dagger / Hilt", icon: <MdOutlineSecurity /> },
  { name: "Firebase", icon: <FaCloud /> },
  { name: "Google Maps SDK", icon: <FaAndroid /> },
  { name: "ML Kit", icon: <AiOutlineRobot /> },
  { name: "Glide / Picasso", icon: <BiCodeAlt /> },
];



export const technologies = [
  { image: "/images/java.png", name: "Java" },
  { image: "/images/xml.png", name: "XML" },
  { image: "/images/api.png", name: "RESTful APIs" },
  { image: "/images/dagger.png", name: "Dagger 2" },
  { image: "/images/room.png", name: "Room Persistence Library" },
  { image: "/images/kotlin.png", name: "Kotlin" },
  { image: "/images/md.png", name: "Material Design" },
  { image: "/images/git.png", name: "Git" },
  { image: "/images/espresso.png", name: "Espresso" },
  { image: "/images/databinding.png", name: "Data Binding" },
  { image: "/images/android.png", name: "Android SDK" },
  { image: "/images/gradle.png", name: "Gradle" },
  { image: "/images/firebase.png", name: "Firebase" },
  { image: "/images/mvvm.png", name: "MVVM Architecture" },
  { image: "/images/jetpack.png", name: "Jetpack Compose" },
];
