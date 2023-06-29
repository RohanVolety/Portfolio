import React from "react";
import { motion } from "framer-motion";
import { DiOpensource } from "react-icons/di";
import { FaLink } from "react-icons/fa";
import expenseTrackerImg from "../assets/expense.JPG";
import urlShortenerImg from "../assets/url.jpg";
import passwordGeneratorImg from "../assets/password-.JPG";
import emotionDetectorImg from "../assets/emotion.jpg";
import smartAttendanceImg from "../assets/attendance.jpg";

const Work = () => {
  return (

    <section id="work" className="py-16 lg:section md:my-20">
     
      <div className="container mx-auto text-center ">
        <h2 className="text-4xl font-bold mb-16 center">Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
          {/* Project 1 */}
          <motion.div
            className="rounded-lg p-4 shadow-md w-80 border border-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="group relative">
              <img
                src={expenseTrackerImg}
                alt="Expense Tracker"
                className="w-full h-30 object-cover mb-2 group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-black/80 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-2">Expense Tracker</h3>
                  <div className="flex gap-x-2">
                    <DiOpensource fill="#FF56F6" />
                    <a
                      href="https://github.com/RohanVolety/expense-tracker"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className="flex gap-x-2">
                    <FaLink fill="#FF56F6" />
                    <a
                      href="https://expense-tracker-zstr.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-base font-medium mb-1">Description:</h4>
                <ul className="list-disc list-inside text-sm text-white-600">
                  <li>A Full stack web application where users can calculate their expenses on a day-to-day basis.</li>
                  <li>Users can add expenses, including details such as the amount, date, category, and description.</li>
                  <li>For data storage, the application utilizes MongoDB, which stores expense data in collections.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            className="bg- rounded-lg p-4 shadow-md w-80 border border-black "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="group relative ">
              <img
                src={urlShortenerImg}
                alt="URL Shortener"
                className="w-full h-50 object-cover mb-2 group-hover:scale-110 transition-all duration-300 "
              />
              <div className="absolute bottom-0 left-0 bg-black/80 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center ">
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-2">URL Shortener</h3>
                  <div className="flex gap-x-2">
                    <DiOpensource fill="#FF56F6" />
                    <a
                      href="https://github.com/RohanVolety/url_shortner"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-base font-medium mb-1">Description:</h4>
                <ul className="list-disc list-inside text-sm text-white-600">
                  <li>A simple URL shortener made using Nodejs and MongoDB.</li>
                  <li>When a user submits a long URL, the server receives the request and generates a unique shortcode for that URL.</li>
                  <li> Users can take lengthy URLs and generate short and concise alternatives.</li>
                  
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            className="bg- rounded-lg p-4 shadow-md w-80 border border-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="group relative">
              <img
                src={passwordGeneratorImg}
                alt="Password Generator"
                className="w-full h-50 object-cover mb-2 group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-black/80 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-2">Password Generator</h3>
                  <div className="flex gap-x-2">
                    <DiOpensource fill="#FF56F6" />
                    <a
                      href="https://github.com/RohanVolety/Password-Generator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className="flex gap-x-2">
                    <FaLink fill="#FF56F6" />
                    <a
                      href="https://password-generator-three-sand.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-base font-medium mb-1">Description:</h4>
                <ul className="list-disc list-inside text-sm text-white-600">
                  <li>This is a simple password generator web application built using HTML, CSS, and JavaScript.</li>
                  <li>It allows users to generate strong and secure passwords with customizable options.</li>
                  <li>Include or exclude uppercase letters, lowercase letters, numbers, and special characters.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Project 4 */}
          <motion.div
            className="bg- rounded-lg p-4 shadow-md w-80 border border-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="group relative">
              <img
                src={emotionDetectorImg}
                alt="Emotion Detector"
                className="w-full h-50 object-cover mb-2 group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-black/80 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-2">Emotion Detector</h3>
                  <div className="flex gap-x-2">
                    <DiOpensource fill="#FF56F6" />
                    <a
                      href="https://github.com/RohanVolety/emotion-detector"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-base font-medium mb-1">Description:</h4>
                <ul className="list-disc list-inside text-sm text-white-600">
                  <li>A Custom trained CNN model which would detect real-time human emotions.</li>
                  <li>Trained the Model on 7 different labels(emotions).</li>
                  <li>Deployed the model on the webpage using Streamlit.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Project 5 */}
          <motion.div
            className="bg- rounded-lg p-4 shadow-md w-80 border border-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="group relative">
              <img
                src={smartAttendanceImg}
                alt="Smart Attendance"
                className="w-full h-50 object-cover mb-2 group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute bottom-0 left-0 bg-black/80 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-2">Smart Attendance</h3>
                  <div className="flex gap-x-2">
                    <DiOpensource fill="#FF56F6" />
                    <a
                      href="https://github.com/RohanVolety/Smart-Attendance"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-base font-medium mb-1">Description:</h4>
                <ul className="list-disc list-inside text-sm text-white-600">
                  <li>A smart attendance recognizes student's faces and updates the name and time accordingly in the CSV file.</li>
                  <li>Different Face Encodings are made for different faces and then used to compare them.</li>
                  </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
