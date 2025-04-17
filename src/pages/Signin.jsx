// import GoogleIcon from '../assets/images/google-color-svgrepo-com.svg';
import React, { useState, useEffect } from 'react';
import EyeOpenIcon from '../assets/images/eye-svgrepo-com.svg';
import EyeCloseIcon from '../assets/images/eye-closed-svgrepo-com.svg';

const EyeIcon = ({ show, onClick }) => (
  <img
    src={show ? EyeOpenIcon : EyeCloseIcon}
    onClick={onClick}
    alt="Toggle Password Visibility"
    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer w-5 h-5"
  />
);

const InputField = ({ type, name, value, onChange, placeholder, showToggle, showPassword, toggle }) => (
  <div className="relative">
    <input
      type={showToggle && showPassword ? "text" : type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
    />
    {showToggle && <EyeIcon show={showPassword} onClick={toggle} />}
  </div>
);

const AnimatedBackground = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 animate-gradient-xy overflow-hidden"></div>
  </div>
);

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('normalUser');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    contributorReason: '',
    adminSecretCode: ''
  });

  // Effect to handle userType changes when isLogin changes
  useEffect(() => {
    // If switching to signup and currently on admin role, change to normal user
    if (!isLogin && userType === 'admin') {
      setUserType('normalUser');
    }
  }, [isLogin, userType]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
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

  const handleSwitchMode = () => {
    // First set the login state
    setIsLogin(prev => !prev);
    
    // Then reset the form
    resetForm();
    
    // Immediately change userType if needed
    // This ensures we don't have to wait for the effect to run
    if (isLogin && userType === 'admin') {
      setUserType('normalUser');
    }
  };

  const renderFormFields = () => {
    const commonFields = (
      <>
        <InputField
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <InputField
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleInputChange}
          showToggle
          showPassword={showPassword}
          toggle={() => setShowPassword(prev => !prev)}
        />
      </>
    );

    switch (userType) {
      case 'normalUser':
        return isLogin ? (
          <>
            {commonFields}
          </>
        ) : (
          <>
            {commonFields}
            <InputField
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              showToggle
              showPassword={showConfirmPassword}
              toggle={() => setShowConfirmPassword(prev => !prev)}
            />
          </>
        );

      case 'contributor':
        return isLogin ? (
          <>
            {commonFields}
          </>
        ) : (
          <>
            {commonFields}
            <textarea
              name="contributorReason"
              placeholder="Why do you want to be a contributor?"
              value={formData.contributorReason}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-gray-300 rounded h-32 focus:border-green-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
            />
          </>
        );

      case 'admin':
        return (
          <>
            {commonFields}
            <InputField
              type="text"
              name="adminSecretCode"
              placeholder="Enter admin secret code"
              value={formData.adminSecretCode}
              onChange={handleInputChange}
            />
          </>
        );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="w-full max-w-lg bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-lg shadow-xl space-y-6 z-10">
        <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-200 mb-2">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </h2>

        <div className="flex justify-between items-center gap-4">
          <label className="text-gray-700 dark:text-gray-300">Role:</label>
          <select
            value={userType}
            onChange={e => setUserType(e.target.value)}
            className="flex-1 p-2 border-2 border-gray-300 rounded focus:border-blue-500 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          >
            <option value="normalUser">Normal User</option>
            <option value="contributor">Contributor</option>
            {isLogin && <option value="admin">Admin</option>}
          </select>
        </div>

        <form className="space-y-4">
          {renderFormFields()}
          <button
            type="submit"
            className={`w-full p-3 ${
              userType === 'admin' ? 'bg-red-400 hover:bg-red-500' :
              userType === 'contributor' ? 'bg-green-400 hover:bg-green-500' :
              'bg-blue-400 hover:bg-blue-500'
            } text-white rounded font-semibold transition-colors duration-300`}
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button onClick={handleSwitchMode} className="text-blue-500 hover:underline">
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
