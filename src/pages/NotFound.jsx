import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          {/* Error Icon */}
          <div className="w-24 h-24 mx-auto mb-6">
            <svg className="w-full h-full text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
            </svg>
          </div>
          
          {/* Error Message */}
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-6">Oops! Looks like the conversation you're looking for doesn't exist or has been moved.</p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-center">
              <Link 
                to="/" 
                className="bg-indigo-600 text-white px-4 py-3 rounded-md font-medium hover:bg-indigo-700 transition duration-200 text-center"
              >
                Return to Home
              </Link>
              <Link 
                to="/chats" 
                className="bg-gray-200 text-gray-800 px-4 py-3 rounded-md font-medium hover:bg-gray-300 transition duration-200 text-center"
              >
                My Conversations
              </Link>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t">
          <div className="text-center text-sm text-gray-500">
            <p>Need help? <Link to="/support" className="text-indigo-600 hover:text-indigo-800 font-medium">Contact Support</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;