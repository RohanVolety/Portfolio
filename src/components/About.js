import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about" className="section my-20">
      <div className="container mx-auto">
        <div className=" h-screen flex flex-col gap-y-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-row gap-x-4 lg:flex-col lg:gap-y-4 underline  min-w-[40%] lg:animate-bounce  font-tertiary items-center justify-center">
            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="mb-2 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              About
            </motion.p>
            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="mb-2 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              Me
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="font-tertiary text-gradient text-[14px] sm:text-[18px] text-center lg:text-left text-white"
          >
            <p>
              My name is Rohan Volety pursing Btech focused in Computer Science Engineering.
              I have a strong passion for problem-solving and find innovative solutions to complex challenges.
              I love to collab with people to explore new technologies.
            </p>
            <br />
            <p>
              Skilled in Web development using MERN stack. Have good exposure to cloud Technologies, devops, and Python frameworks.

            </p>
            <br/>
            <p>
              Throughout my academic journey, I have had the opportunity to engage in internships at renowned organizations.
              Overall, my diverse experiences in backend development, machine learning, and
              internships at reputed organizations have equipped me with a strong foundation in
              computer science and a practical understanding of real-world applications.
              I am eager to leverage my skills and knowledge to make a positive impact in the field of
              technology.

            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
