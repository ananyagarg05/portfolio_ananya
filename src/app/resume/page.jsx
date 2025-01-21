"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "I am a full stack developer with a passion for creating beautiful and functional websites. I have experience with HTML, CSS, JavaScript, React, Node.js, and more. I am always looking to learn new technologies and improve my skills.",
  info: [
    { fieldName: "Name", fieldValue: "Ananya Garg" },
    { fieldName: "Phone", fieldValue: "123-456-7890" },
    { fieldName: "Email", fieldValue: "ananyagargtech@gmail.com" },
    { fieldName: "Languages", fieldValue: "English, Hindi" },
  ],
};

const experience = {
  icon: "/assests2/resume/badge.svg",
  title: "My Experience",
  description:
    "I have worked on a variety of projects, including websites, web applications, and mobile apps. I have experience with both front-end and back-end development, and I am comfortable working with a variety of technologies.",
  items: [
    {
      company: "Rohit Enterprises",
      position: "Web Developer Intern",
      duration: "Jan 2025 - Present",
    },
    {
      company: "Bharat Intern",
      position: "Front-End Developer Intern",
      duration: "Aug 2024 - Oct 2024",
    },
  ],
};

const education = {
  icon: "/assests2/resume/cap.svg",
  title: "My Education",
  description:
    "I have done B.Tech from Guru Gobind Singh Indraprastha University. I have taken courses in web development, software engineering, and data structures. I am always looking to learn new things and improve my skills.",
  items: [
    {
      institution: "Guru Gobind Singh Indraprastha University",
      degree: "Bachelor of Technology",
      duration: "2021 - 2025",
    },
    {
      institution: "Kerala Sr. Secondary School",
      degree: "12th",
      duration: "2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have experience with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, and more. I am always looking to learn new things and improve my skills.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3 />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaFigma />, name: "Figma" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.0, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul>
                  {experience.items.map((item) => (
                    <li
                      key={item.company}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl">{item.position}</h3>
                      <p className="text-white/60">{item.company}</p>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul>
                  {education.items.map((item) => (
                    <li
                      key={item.institution}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl">{item.degree}</h3>
                      <p className="text-white/60">{item.institution}</p>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {skills.description}
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                {skills.skillList.map((skill, index) => (
                  <li key={skill.name}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                ))}
              </ul>
            </TabsContent>

            {/* About Me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {about.description}
              </p>
              <ul className="flex flex-wrap gap-6">
                {about.info.map((item) => (
                  <li key={item.fieldName} className="flex items-center gap-4">
                    <span className="text-white/60">{item.fieldName}</span>
                    <span className="text-xl">{item.fieldValue}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
