// src/components/Navbar.jsx
export default function Navbar() {
    return (
      <nav className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
        <div className="text-2xl font-bold">Gourav Sharma</div>
        <div className="space-x-6">
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>
    );
  }
  