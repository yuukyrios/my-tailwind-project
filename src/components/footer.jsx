const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 py-8" id="footer">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section: Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-white text-2xl font-bold mb-2">Enver</h2>
            <p className="text-sm text-gray-400">
              Build your platform with us. High-quality design and development
              services tailored for your success.
            </p>
          </div>

          {/* Center Section: Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="hover:text-gray-100 transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-gray-100 transition"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-gray-100 transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section: Social Media Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12C22 5.925 17.075 1 11 1S0 5.925 0 12c0 5.177 3.664 9.454 8.438 10.724V15.89H5.897v-3.389h2.54V9.926c0-2.507 1.492-3.89 3.775-3.89 1.093 0 2.238.194 2.238.194v2.469h-1.26c-1.242 0-1.629.771-1.629 1.563v1.874h2.776l-.443 3.39h-2.333v6.835C18.336 21.455 22 17.178 22 12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.823 9.823 0 0 1-2.828.775 4.94 4.94 0 0 0 2.165-2.723 9.865 9.865 0 0 1-3.127 1.195 4.924 4.924 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0-.665 2.475c0 1.71.87 3.223 2.188 4.104A4.904 4.904 0 0 1 .964 9.03v.06a4.927 4.927 0 0 0 3.95 4.827 4.902 4.902 0 0 1-2.212.084 4.928 4.928 0 0 0 4.604 3.419 9.864 9.864 0 0 1-6.102 2.105c-.396 0-.787-.023-1.175-.067a13.93 13.93 0 0 0 7.557 2.212c9.054 0 14-7.496 14-13.986 0-.21-.004-.423-.013-.635A10.002 10.002 0 0 0 24 4.557z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM7.734 19.238H4.571v-8.722h3.163v8.722zM6.152 9.476a1.82 1.82 0 1 1 0-3.64 1.82 1.82 0 0 1 0 3.64zm13.085 9.762h-3.161v-4.254c0-1.015-.018-2.324-1.414-2.324-1.416 0-1.633 1.104-1.633 2.245v4.333H9.867v-8.722h3.032v1.191h.043c.423-.8 1.454-1.646 2.993-1.646 3.2 0 3.79 2.107 3.79 4.847v4.33z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Enver Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
