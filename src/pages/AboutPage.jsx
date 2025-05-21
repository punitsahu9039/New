// AboutPage.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBuilding, FaHandshake, FaRupeeSign, FaUsers } from "react-icons/fa";
import Layout from '@/components/Layout';

const stats = [
  { icon: <FaBuilding size={28} className="text-yellow-400" />, number: "96+", text: "Banks & NBFCs" },
  { icon: <FaUsers size={28} className="text-yellow-400" />, number: "1,50,000+", text: "Channel Partners" },
  { icon: <FaRupeeSign size={28} className="text-yellow-400" />, number: "USD 300M+", text: "Annual Transactions" },
  { icon: <FaHandshake size={28} className="text-yellow-400" />, number: "#1", text: "Secured Mortgage Provider" },
];

const brands = [
  { title: "Square Yards", desc: "The best foreign real estate platform, offering seamless investment solutions globally." },
  { title: "Square Connect", desc: "India’s leading digital broker platform, enabling seamless property transactions." },
  { title: "Azuro", desc: "Leading property management firm providing comprehensive real estate solutions." },
  { title: "PropsAMC", desc: "Transforming property valuation, tracking, and management for investors." },
  { title: "Interior Company", desc: "Providing end-to-end home interior solutions with an artistic approach." },
  { title: "PropVR", desc: "Utilizing 3D visualization & AI for immersive real estate experiences." },
];

const directors = [
  {
    name: "Shri Debadatta Chand",
    designation: "Managing Director & CEO",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    profile: "Shri Debadatta Chand assumed charge as MD & CEO of the Bank on 1st July 2023...",
  },
];

const teamMembers = [
  {
    name: "Shri Lalit Tyagi",
    designation: "Executive Director",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    profile: "Profile details for Shri Lalit Tyagi...",
  },
  {
    name: "Shri Sanjay Mudaliar",
    designation: "Executive Director",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    profile: "Profile details for Shri Sanjay Mudaliar...",
  },
  {
    name: "Shri Lal Singh",
    designation: "Executive Director",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    profile: "Profile details for Shri Lal Singh...",
  },
  {
    name: "Ms. Beena Vaheed",
    designation: "Executive Director",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    profile: "Profile details for Ms. Beena Vaheed...",
  },
];

const missionVisionValues = [
  {
    title: "MISSION",
    icon: "https://cdn-icons-png.flaticon.com/512/189/189683.png",
    text: "To provide innovative and reliable financial solutions...",
  },
  {
    title: "VISION",
    icon: "https://cdn-icons-png.flaticon.com/512/159/159604.png",
    text: "To be the leading financial institution recognized for integrity...",
  },
  {
    title: "VALUES",
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910761.png",
    text: "Integrity, Customer Focus, Innovation, Collaboration, and Social Responsibility...",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const openModal = (person) => {
    setSelectedPerson(person);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPerson(null);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* HEADER with gradient */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 text-center px-4">
          <motion.h5
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="uppercase tracking-widest font-bold text-yellow-300 mb-4"
          >
            About Us
          </motion.h5>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            An Inspiration, And Now <br />
            <span className="text-yellow-300">We Inspire.</span>
          </motion.h1>
        </section>

        {/* COMPANY INTRO + STATS */}
        <motion.section
          className="container mx-auto my-16 px-4 md:px-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col md:flex-row md:gap-12 items-stretch">
            {/* Left Content */}
            <motion.div className="md:flex-1 mb-10 md:mb-0 h-full" variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-4">About Hously Finntech</h3>
              <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
                Hously-Finntech is a leading online lending platform, helping millions achieve their dreams of home ownership. We provide seamless access to loan products from over 96 banks and NBFCs, enabling fast, transparent and reliable financial solutions.
              </p>
            </motion.div>

            {/* Right: Offering Products */}
            <motion.div
              className="md:flex-1 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg p-8 shadow-lg h-full flex flex-col justify-between"
              variants={itemVariants}
            >
              <div>
                <h5 className="font-bold text-yellow-400 mb-4 text-lg">Offering Products</h5>
                <p className="mb-6">From Over 96 Banks and NBFCs</p>
                <hr className="border-yellow-400 mb-6" />
                <div>
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-4 mb-5"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div>{stat.icon}</div>
                      <div>
                        <h4 className="font-bold text-yellow-400 text-xl">{stat.number}</h4>
                        <p className="text-white">{stat.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* GROUP BRANDS */}
        <motion.section
          className="container mx-auto my-16 px-4 md:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-center text-3xl font-bold mb-10">Our Group Brands</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brands.map((brand, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl cursor-pointer transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="font-bold text-[#0074D9] mb-3">{brand.title}</h4>
                <p className="text-gray-600 text-sm">{brand.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* BOARD OF DIRECTORS */}
        <motion.section
          className="container mx-auto my-16 px-4 md:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-center text-3xl font-bold mb-10">Board of Directors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {directors.map((dir, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg shadow-md flex items-center gap-6 p-6 cursor-pointer hover:shadow-xl transition-shadow"
                variants={itemVariants}
                onClick={() => openModal(dir)}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={dir.image}
                  alt={dir.name}
                  className="rounded-full w-20 h-20 object-cover flex-shrink-0"
                />
                <div className="whitespace-normal break-words">
                  <h4 className="text-[#0074D9] font-bold text-xl">{dir.name}</h4>
                  <p className="text-gray-600">{dir.designation}</p>
                  <button
                    className="text-[#0d9488] underline mt-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(dir);
                    }}
                  >
                    View Profile →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EXECUTIVE DIRECTORS */}
        <motion.section
          className="container mx-auto my-16 px-4 md:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-center text-3xl font-bold mb-10">Executive Directors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg shadow-md text-center p-6 cursor-pointer hover:shadow-xl transition-shadow"
                variants={itemVariants}
                onClick={() => openModal(member)}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-24 h-24 mx-auto object-cover mb-4"
                />
                <h4 className="text-[#0074D9] font-bold text-lg whitespace-normal break-words">{member.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{member.designation}</p>
                <button
                  className="text-[#0d9488] underline mt-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(member);
                  }}
                >
                  View Profile →
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* MODAL */}
        <AnimatePresence>
          {modalOpen && selectedPerson && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  &times;
                </button>
                <div className="text-center">
                  <img
                    src={selectedPerson.image}
                    alt={selectedPerson.name}
                    className="rounded-full mx-auto mb-4 w-36 h-36 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-[#0074D9]">{selectedPerson.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedPerson.designation}</p>
                  <p className="text-gray-700">{selectedPerson.profile}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MISSION VISION VALUES */}
        <motion.section
          className="container mx-auto my-16 px-4 md:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-center text-3xl font-bold mb-10">Our Mission, Vision & Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {missionVisionValues.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg shadow-md p-8 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <img src={item.icon} alt={item.title} className="mx-auto mb-6 w-12 h-12" />
                <h5 className="text-[#0074D9] font-bold mb-3">{item.title}</h5>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default AboutPage;
