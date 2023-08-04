import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[80vh] lg:min-h-[70vh]  flex justify-center items-center"
    >
      <div className="container mx-auto ">
        <div className=" flex-col text-center font-secondary">
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="mb-4 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
          >
            <span className="mr-4 text-white">I am a </span>
            <TypeAnimation
              sequence={["Full Stack Developer.", 2000, "Programmer.", 2000]}
              speed={50}
              className="text-blue-800"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.div>
          <div className="text-[15px] lg:text-[22px]">
           
          </div>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex-col mx-auto mb-8 flex-wrap"
          >
            <Link to="contact" smooth={true}>
              <button className="btn btn-sm md:btn-lg mr-4 mb-2">
                Contact me
              </button>
            </Link>

            <Link to="work" smooth={true}>
              <button className="btn btn-sm md:btn-lg mr-4 mb-2">
                Portfolio
              </button>
            </Link>
            
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="flex text-[25px] gap-x-6 max-w-max mx-auto "
          >
            <a
              href="https://github.com/RohanVolety"
              rel="noreferrer"
              target="_blank"
              className="hover:text-accent transition-all duration-300"
            >
              <FaGithub />
            </a>
                <a
              href="https://www.linkedin.com/in/rohan-volety-30a816221/"
              rel="noreferrer"
              target="_blank"
              className="hover:text-accent transition-all duration-300"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
