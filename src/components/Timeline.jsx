import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const timelineData = [
    { year: "2023", title: "Started B.Tech in Computer Science", description: "SRM Institute of Science and Technology" },
    { year: "2023", title: "Joined Aarush Envision Club", description: "Active member of the technical club" },
    { year: "2023", title: "Built Basic Web Projects", description: "Created personal portfolio using HTML, CSS, JS" },
    { year: "2024", title: "Learned Python & Built CLI Tools", description: "Automated tasks with command-line applications" },
    { year: "2024", title: "Completed Django Full-Stack Course", description: "Full-stack apps with Django, React & PostgreSQL" },
    { year: "2025", title: "Interned as Software Developer", description: "Backend APIs with Django & PostgreSQL" },
    { year: "2025", title: "Learning DevOps & Cloud", description: "Docker, AWS, CI/CD pipelines" },
  ];

const Timeline = () => {
  const scrollRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const cardsPerView = 4;

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollX = scrollRef.current.scrollLeft;
      const currentIndex = Math.round(scrollX / 320);
      setScrollIndex(currentIndex);
    };

    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-white via-gray-100 to-white py-16">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        My Journey
      </h2>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
        >
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-72 snap-start p-6 pt-10 bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 relative"
            >
              <div className="absolute top-4 left-6 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                {item.year}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-6">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-md border border-gray-300 shadow-lg p-3 rounded-full hover:bg-indigo-50 transition-all z-10"
        >
          <ArrowLeft className="text-indigo-600" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-md border border-gray-300 shadow-lg p-3 rounded-full hover:bg-indigo-50 transition-all z-10"
        >
          <ArrowRight className="text-indigo-600" />
        </button>

        {/* Progress Indicator Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({
            length: Math.ceil(timelineData.length / cardsPerView),
          }).map((_, idx) => (
            <div
              key={idx}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${
                scrollIndex === idx ? "bg-indigo-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
