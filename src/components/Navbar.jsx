import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Goals", path: "/goals" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">Carson Hom</h1>
        <ul className="flex gap-6 text-sm md:text-base font-medium text-gray-700">
          {navItems.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className={`hover:text-blue-600 transition ${
                  location.pathname === path
                    ? "text-blue-600 font-semibold"
                    : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
