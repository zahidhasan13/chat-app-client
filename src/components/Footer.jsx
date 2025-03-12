const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              &copy; {new Date().getFullYear()} Chat Mate. All rights reserved.
            </div>
  
            <div className="flex space-x-4">
              <a
                href="/terms"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;