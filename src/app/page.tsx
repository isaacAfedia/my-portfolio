"use client";
import { useState } from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { HiOutlineDownload } from "react-icons/hi";
import { AiOutlineLink } from "react-icons/ai";
import deved from "../app/assets/port.jpg";
import python from "../app/assets/python-svgrepo-com.svg";
import java from "../app/assets/java-svgrepo-com.svg";
import R from "../app/assets/R_logo.svg.png";
import scala from "../app/assets/scala-svgrepo-com.svg";
import react from "../app/assets/react-svgrepo-com.svg";
import sql from "../app/assets/sql-svgrepo-com.svg";
import cypher from "../app/assets/neo4j_logo_globe.png";
import oracle from "../app/assets/oracle-svgrepo-com.svg";
import mssql from "../app/assets/microsoft-sql-server-logo.svg";
import hbase from "../app/assets/hbase.svg";
import tableau from "../app/assets/tableau-svgrepo-com.svg";
import excel from "../app/assets/excel-svgrepo-com.svg";
import hadoop from "../app/assets/hadoop-svgrepo-com.svg";
import git from "../app/assets/git.svg";
import linux from "../app/assets/linux.svg";
import sas from "../app/assets/sas-svgrepo-com.svg";
import humber from "../app/assets/Humber-logo.jpg";
import aau from "../app/assets/aau.jpeg";
import creditScore from "../app/assets/credit_score.png";
import restaurant from "../app/assets/Analytics.jpg";
import breastCancer from "../app/assets/BCP.png";
import newP from "../app/assets/pexels-towfiqu-barbhuiya-14547032.jpg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("projects");
  const textColorClass = darkMode ? "text-white" : "text-gray-800";
  const iconColorClass = darkMode
    ? "text-white hover:text-teal-500"
    : "text-gray-800 hover:text-teal-500";

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main
        className={`bg-white px-10 md:px-20 lg:px-40 ${
          darkMode ? "dark:bg-gray-900" : ""
        }`}
      >
        <section className="min-h-screen">
          <nav className="py-10 flex justify-between">
            <h1 className={`text-xl font-burtons ${textColorClass}`}>
              Isaac&apos;s Portfolio
            </h1>
            <ul className="flex items-center">
              {darkMode ? (
                <MdOutlineLightMode
                  onClick={() => setDarkMode(!darkMode)}
                  className={`cursor-pointer text-2xl ${iconColorClass}`}
                />
              ) : (
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className={`cursor-pointer text-2xl ${iconColorClass}`}
                />
              )}

              <li>
                <a
                  className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 ${textColorClass}`}
                  href="/Isaac-Afedia-Resume.pdf"
                  download="Isaac-Afedia-Resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-2">
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 overflow-hidden">
              <Image src={deved} alt="" layout="fill" objectFit="cover" />
            </div>
            <h2
              className={`text-4xl py-2 font-medium md:text-6xl ${textColorClass}`}
            >
              Isaac Afedia
            </h2>
            <h3
              className={`text-2xl py-2 md:text-3xl font-burtons ${textColorClass}`}
            >
              Data Developer and Analyst
            </h3>
            <p
              className={`text-md mb-8 md:text-xl max-w-lg mx-auto ${textColorClass}`}
            >
              Experienced data analyst skilled in driving business growth
              through actionable insights. Proficient in programming,
              statistics, and data visualization. Effective communicator,
              collaborating cross-functionally to optimize performance.
            </p>
            <a
              className={`bg-teal-500 text-white text-xl px-6 py-3 rounded-md ${textColorClass}`}
              href="/Isaac-Afedia-Resume.pdf"
              download="Isaac-Afedia-Resume.pdf"
            >
              Download Resume
              <HiOutlineDownload className="inline-block text-2xl md:inline " />
            </a>
            <div className="text-2xl flex justify-center gap-5 py-3 mt-4">
              <a href="https://www.linkedin.com/in/isaac-afedia-/">
                <AiFillLinkedin className="text-blue-800" />
              </a>
              <a href="https://github.com/isaacAfedia">
                <AiFillGithub
                  className={`text-black-800 ${darkMode ? "text-white" : ""}`}
                />
              </a>
              <a href="https://api.whatsapp.com/send?phone=14373311205&text=Hello,%20more%20information!">
                <AiOutlineWhatsApp className="text-teal-500" />
              </a>
            </div>
          </div>
        </section>

        <section className="">
          <div className="flex justify-center">
            <div
              className={`${
                darkMode ? "bg-gray-70max-w-lg mx-auto0" : "bg-gray-300"
              } p-2 rounded-lg  shadow flex gap-2`}
            >
              <button
                onClick={() => handleTabClick("projects")}
                className={`px-8 py-4 rounded-md ${
                  activeTab === "projects"
                    ? `bg-teal-500 ${textColorClass}`
                    : `${
                        darkMode
                          ? "bg-gray-900 text-white"
                          : "bg-white text-gray-600"
                      } hover:bg-gray-400 hover:text-gray-800 `
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => handleTabClick("proficiencies")}
                className={`px-8 py-4 rounded-md ${
                  activeTab === "proficiencies"
                    ? `bg-teal-500 ${textColorClass}`
                    : `${
                        darkMode
                          ? "bg-gray-900 text-white"
                          : "bg-white text-gray-600"
                      } hover:bg-gray-400 hover:text-gray-800 `
                }`}
              >
                Technology
              </button>
              <button
                onClick={() => handleTabClick("education")}
                className={`px-8 py-4 rounded-md ${
                  activeTab === "education"
                    ? `bg-teal-500 ${textColorClass}`
                    : `${
                        darkMode
                          ? "bg-gray-900 text-white"
                          : "bg-white text-gray-600"
                      } hover:bg-gray-400 hover:text-gray-800 `
                }`}
              >
                Education
              </button>
            </div>
          </div>
          <div className="text-center py-10">
            {activeTab === "projects" && (
              <div className="a1">
                <div className="flex flex-wrap justify-center">
                  <div
                    className={`${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    } shadow-lg mx-4 my-4 rounded-lg `}
                  >
                    <div className="flex items-center flex-col p-4">
                      <div>
                        <a
                          href="https://github.com/isaacAfedia/Restaurant-Chain-Analysis"
                          className={`text-2xl md:text-3xl font-burtons ${textColorClass} hover:text-teal-500`}
                        >
                          Restaurant Chain Analysis
                        </a>
                      </div>
                      <div
                        style={{
                          width: "400px",
                          height: "200px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src={restaurant}
                          alt=""
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <a
                          className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xl px-8 py-2 rounded-md mt-4 ${textColorClass}`}
                          href="https://github.com/isaacAfedia/Breast-Cancer-detection-Analysis"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    } shadow-lg mx-4 my-4 rounded-lg `}
                  >
                    <div className="flex items-center flex-col p-4">
                      <div>
                        <a
                          href="https://github.com/isaacAfedia/Breast-Cancer-detection-Analysis"
                          className={`text-2xl md:text-3xl font-burtons ${textColorClass} hover:text-teal-500`}
                        >
                          Breast Cancer Prediction
                        </a>
                      </div>
                      <div
                        style={{
                          width: "400px",
                          height: "200px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src={breastCancer}
                          alt=""
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <a
                          className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xl px-8 py-2 rounded-md mt-4 ${textColorClass}`}
                          href="https://github.com/isaacAfedia/Breast-Cancer-detection-Analysis"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center">
                  <div
                    className={`${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    } shadow-lg mx-4 my-4 rounded-lg  `}
                  >
                    <div className="flex items-center flex-col p-4">
                      <div>
                        <a
                          href="https://github.com/isaacAfedia/Credit-Score-prediction"
                          className={`text-2xl md:text-3xl font-burtons ${textColorClass} hover:text-teal-500`}
                        >
                          Credit Score Analysis
                        </a>
                      </div>
                      <div
                        style={{
                          width: "400px",
                          height: "200px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src={creditScore}
                          alt=""
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <a
                          className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xl px-8 py-2 rounded-md mt-4 ${textColorClass}`}
                          href="https://github.com/isaacAfedia/Credit-Score-prediction"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${
                      darkMode ? "bg-gray-800" : "bg-gray-100"
                    } shadow-lg mx-4 my-4 rounded-lg `}
                  >
                    <div className="flex items-center flex-col p-4">
                      <div>
                        <a
                          href="https://your-restaurant-link.com"
                          className={`text-2xl md:text-3xl font-burtons ${textColorClass} hover:text-teal-500`}
                        >
                          Coming Soon
                        </a>
                      </div>
                      <div
                        style={{
                          width: "400px",
                          height: "200px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src={newP}
                          alt=""
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <a
                          className={`bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xl px-8 py-2 rounded-md mt-4 ${textColorClass}`}
                          href="https://github.com/isaacAfedia/Restaurant-Chain-Analysis"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "proficiencies" && (
              <div
                className={` flex justify-center items-center space-x-12 gap-4  ${textColorClass}`}
              >
                <div className="skill_name">
                  <h1 className="text-2xl text-left text-teal-500 font-bold mb-10">
                    Programming
                  </h1>
                  <div className="flex items-center mb-6">
                    <Image
                      src={python}
                      alt=""
                      style={{ maxWidth: "2rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Python</h3>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <Image
                      src={java}
                      alt=""
                      style={{ maxWidth: "2rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Java</h3>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <Image
                      src={R}
                      alt=""
                      style={{ maxWidth: "2rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h3 className="text-lg font-bold">R</h3>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={scala}
                      alt=""
                      style={{ maxWidth: "2rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Scala</h3>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={react}
                      alt=""
                      style={{ maxWidth: "2rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h3 className="text-lg font-bold">React</h3>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h1 className="text-2xl text-left text-teal-500 font-bold mb-8 ">
                    Database
                  </h1>
                  <div className="flex items-center mt-2">
                    <Image
                      src={sql}
                      alt=""
                      style={{ maxWidth: "2rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h3 className="text-lg font-bold">SQL</h3>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <Image
                      src={oracle}
                      alt=""
                      style={{ maxWidth: "2rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Oracle</h3>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <Image
                      src={cypher}
                      alt=""
                      style={{ maxWidth: "2rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Cypher</h3>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={mssql}
                      alt=""
                      style={{ maxWidth: "2rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h3 className="text-lg font-bold">MS SQL server</h3>
                    </div>
                  </div>
                  <div className="flex items-center mb-2">
                    <Image
                      src={hbase}
                      alt=""
                      style={{ maxWidth: "2rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h3 className="text-lg font-bold">HBase</h3>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <Image
                      src={hadoop}
                      alt=""
                      style={{ maxWidth: "2rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Hadoop</h3>
                    </div>
                  </div>
                </div>

                <div className="skill_name">
                  <h1 className="text-2xl text-left text-teal-500 font-bold mb-8">
                    Analytics
                  </h1>
                  <div className="flex items-center mb-4">
                    <Image
                      src={tableau}
                      alt=""
                      style={{ maxWidth: "2rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Tableau</h3>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <Image
                      src={excel}
                      alt=""
                      style={{ maxWidth: "2rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Excel</h3>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <Image
                      src={sas}
                      alt=""
                      style={{ maxWidth: "2rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h3 className="text-lg font-bold">SAS</h3>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={git}
                      alt=""
                      style={{ maxWidth: "2rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Git</h3>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={linux}
                      alt=""
                      style={{ maxWidth: "2rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h3 className="text-lg font-bold">Linux</h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "education" && (
              <div className={`${textColorClass}`}>
                <div className="flex flex-col items-center">
                  <div className="flex items-center mb-4">
                    <Image
                      src={humber}
                      alt=""
                      style={{ maxWidth: "8rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h2 className="text-lg font-bold">
                        Information Technology Solutions
                      </h2>
                      <p className="text-gray-400">Humber college</p>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <Image
                      src={aau}
                      alt=""
                      style={{ maxWidth: "8rem" }}
                      className="mr-2"
                    />
                    <div>
                      <h2 className="text-lg font-bold">Civil Engineering</h2>
                      <p className="text-gray-400">Ambrose Alli University</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="content-right"></div>
          </div>
        </section>
        <footer className={`text-center py-4 `}>
          <p className={`${textColorClass}`}>
            &#169; Isaac Afedia. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
