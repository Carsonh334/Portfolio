function Footer() {
  return (
    <footer className="bg-white border-t py-4 mt-12">
      <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Carson Hom. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a
            href="https://github.com/Carsonh334"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/carson-hom"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
