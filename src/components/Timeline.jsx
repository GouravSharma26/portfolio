import React, { useRef, useEffect } from "react";
import {
  FaGraduationCap,
  FaUsers,
  FaCode,
  FaLaptopCode,
  FaBook,
  FaRobot,
  FaArchive,
} from "react-icons/fa";

const timelineData = [
  { year: "2023", event: "Started B.Tech in Computer Science @ SRM IST", icon: <FaGraduationCap /> },
  { year: "2023", event: "Joined Aarush Envision Club", icon: <FaUsers /> },
  { year: "2024", event: "Learned Python, built first CLI tools", icon: <FaCode /> },
  { year: "2024", event: "Completed Django Full-Stack Course", icon: <FaLaptopCode /> },
  { year: "2024", event: "Built HealthTech Website", icon: <FaLaptopCode /> },
  { year: "2024", event: "Published E-Book Management System", icon: <FaBook /> },
  { year: "2024", event: "Developed Chat Bot Application", icon: <FaRobot /> },
  { year: "2024", event: "Created Old Newspaper Archive", icon: <FaArchive /> },
];

const Timeline = () => {
  const containerRef = useRef(null);

  const handleWheel = (e) => {
    const container = containerRef.current;
    if (!container) return;

    if (container.contains(e.target)) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const startTouch = (e) => {
      isDown = true;
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const moveTouch = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (startX - x) * 2;
      container.scrollLeft = scrollLeft + walk;
    };

    const endTouch = () => {
      isDown = false;
    };

    container.addEventListener("touchstart", startTouch);
    container.addEventListener("touchmove", moveTouch, { passive: false });
    container.addEventListener("touchend", endTouch);

    return () => {
      container.removeEventListener("touchstart", startTouch);
      container.removeEventListener("touchmove", moveTouch);
      container.removeEventListener("touchend", endTouch);
    };
  }, []);

  return (
    <section
      id="timeline"
      className="w-full bg-gradient-to-r from-[#e0f7ff] to-[#f7faff] text-black py-20 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-600">
          My Timeline
        </h2>

        <div
          ref={containerRef}
          className="flex overflow-x-auto overflow-y-hidden relative px-12 pb-10 gap-10 custom-scrollbar"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollBehavior: "smooth",
          }}
        >
          {/* Timeline Line */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 z-0"></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center flex-shrink-0 w-[280px] md:w-[320px] group scroll-snap-align-center"
            >
              {/* Dot with Icon */}
              <div className="z-10 w-12 h-12 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                <div className="text-blue-600 text-xl">{item.icon}</div>
              </div>

              {/* Card */}
              <div
                className={`mt-10 ${index % 2 === 0 ? "translate-y-[-60px]" : "translate-y-[60px]"}
                bg-white rounded-2xl shadow-xl p-6 border-t-4 border-blue-500 transition-transform duration-300 group-hover:scale-105 w-full`}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-blue-600 mb-2 text-center">
                  {item.year}
                </h3>
                <p className="text-sm md:text-base text-gray-700 text-center">
                  {item.event}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
