"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "/web-development",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "We create user interfaces that are intuitive, easy to use, and engaging.",
    href: "/ui-ux-design",
  },
  {
    num: "03",
    title: "SEO",
    description:
      "We optimize your website to rank higher in search engines and attract more visitors.",
    href: "/seo",
  },
  {
    num: "04",
    title: "Logo Design",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    href: "/web-development-again",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 gap-[60px] md:grid-cols-2"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col justify-center gap-6 group"
            >
              {/* Top Section */}
              <div className="w-full flex items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45 "
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              {/* Title Section */}
              <h2 className="text-2xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              {/* Description Section */}
              <p className="text-white/60">{service.description}</p>
              {/* Border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
