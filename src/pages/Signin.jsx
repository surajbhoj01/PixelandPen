import React, { useState } from 'react';
import AppleIcon from '../assets/images/apple-173-svgrepo-com.svg';
import FacebookIcon from '../assets/images/facebook-1-svgrepo-com.svg';
import GoogleIcon from '../assets/images/google-color-svgrepo-com.svg';
import EyeOpenIcon from '../assets/images/eye-svgrepo-com.svg';
import EyeCloseIcon from '../assets/images/eye-closed-svgrepo-com.svg';

const EyeIcon = ({ show, onClick }) => (
  <img 
    src={show ? EyeOpenIcon : EyeCloseIcon} 
    onClick={onClick} 
    alt="Toggle Password Visibility" 
    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
  />
);



const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    contributorReason: '',
    adminSecretCode: ''
  });

  const toggleView = () => {
    setIsLogin(!isLogin);
    // Reset form data and password visibility when switching
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
      contributorReason: '',
      adminSecretCode: ''
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const togglePasswordVisibility = (type) => {
    if (type === 'password') {
      setShowPassword(!showPassword);
    } else if (type === 'confirmPassword') {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const renderNormalUserLogin = () => (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-8">
        Normal User Sign In
      </h2>
      
      <div className="space-y-4">
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none 
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
        </div>
        
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none 
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
          <EyeIcon 
            show={showPassword} 
            onClick={() => togglePasswordVisibility('password')} 
          />
        </div>
        
        <button className="w-full p-3 bg-blue-400 hover:bg-blue-500 text-white rounded font-semibold">
          Sign In
        </button>
      </div>
    </div>
  );

  const renderNormalUserSignup = () => (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-8">
        Normal User Sign Up
      </h2>
      
      <div className="space-y-4">
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none 
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
        </div>
        
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none 
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
          <EyeIcon 
            show={showPassword} 
            onClick={() => togglePasswordVisibility('password')} 
          />
        </div>
        
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none 
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
          <EyeIcon 
            show={showConfirmPassword} 
            onClick={() => togglePasswordVisibility('confirmPassword')} 
          />
        </div>
        
        <button className="w-full p-3 bg-blue-400 hover:bg-blue-500 text-white rounded font-semibold">
          Sign Up
        </button>
      </div>
    </div>
  );

  const renderContributorLogin = () => (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-8">
        Contributor Sign In
      </h2>
      
      <div className="space-y-4">
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Enter contributor email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none 
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
        </div>
        
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none 
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
          <EyeIcon 
            show={showPassword} 
            onClick={() => togglePasswordVisibility('password')} 
          />
        </div>
        
        <button className="w-full p-3 bg-green-400 hover:bg-green-500 text-white rounded font-semibold">
          Sign In
        </button>
      </div>
    </div>
  );

  const renderContributorSignup = () => (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-8">
        Contributor Sign Up
      </h2>
      
      <div className="space-y-4">
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none 
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
        </div>
        
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none 
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
          <EyeIcon 
            show={showPassword} 
            onClick={() => togglePasswordVisibility('password')} 
          />
        </div>
        
        <div className="relative">
          <textarea
            name="contributorReason"
            placeholder="Why do you want to be a contributor?"
            value={formData.contributorReason}
            onChange={handleInputChange}
            className="w-full p-3 border-2 border-gray-300 rounded h-32 focus:border-green-500 focus:outline-none 
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
        </div>
        
        <button className="w-full p-3 bg-green-400 hover:bg-green-500 text-white rounded font-semibold">
          Submit Application
        </button>
      </div>
    </div>
  );

  const renderAdminLogin = () => (
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-8">
        Admin Sign In
      </h2>
      
      <div className="space-y-4">
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Enter admin email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none 
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
        </div>
        
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none 
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
          <EyeIcon 
            show={showPassword} 
            onClick={() => togglePasswordVisibility('password')} 
          />
        </div>
        
        <div className="relative">
          <input
            type="text"
            name="adminSecretCode"
            placeholder="Enter admin secret code"
            value={formData.adminSecretCode}
            onChange={handleInputChange}
            className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none 
              dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          />
        </div>
        
        <button className="w-full p-3 bg-red-400 hover:bg-red-500 text-white rounded font-semibold">
          Admin Sign In
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900 p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-blue-50 dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden relative">
        {/* Login Section */}
        <div className={`w-full md:w-1/2 p-6 bg-white dark:bg-gray-800 transition-transform duration-500 ease-in-out absolute md:static
          ${isLogin ? 'translate-x-0 opacity-100' : 'md:-translate-x-full opacity-0 pointer-events-none'}`}>
          {userType === 'normalUser' ? renderNormalUserLogin() : 
           userType === 'contributor' ? renderContributorLogin() : 
           renderAdminLogin()}
        </div>
        
        {/* Signup Section */}
        <div className={`w-full md:w-1/2 p-6 bg-white dark:bg-gray-800 transition-transform duration-500 ease-in-out absolute md:static
          ${!isLogin ? 'translate-x-0 opacity-100' : 'md:translate-x-full opacity-0 pointer-events-none'}`}>
          {userType === 'normalUser' ? renderNormalUserSignup() : 
           userType === 'contributor' ? renderContributorSignup() : null}
        </div>
        
        {/* Toggle Section */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl text-center">
            <div className="space-y-4">
              <button 
                onClick={() => {
                  setUserType('normalUser');
                  toggleView();
                }}
                className="w-full p-3 bg-blue-400 hover:bg-blue-500 text-white rounded font-semibold"
              >
                Normal User
              </button>
              <button 
                onClick={() => {
                  setUserType('contributor');
                  toggleView();
                }}
                className="w-full p-3 bg-green-400 hover:bg-green-500 text-white rounded font-semibold"
              >
                Contributor
              </button>
              <button 
                onClick={() => {
                  setUserType('admin');
                  toggleView();
                }}
                className="w-full p-3 bg-red-400 hover:bg-red-500 text-white rounded font-semibold"
              >
                Admin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;