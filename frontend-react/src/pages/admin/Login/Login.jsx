import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import backgroundImage from '../../../assets/images/background-login.png';
import user from '../../../assets/images/user.svg';
import passwordIcon from '../../../assets/images/password.svg';
import visible from '../../../assets/images/visible.png';
import invalid from '../../../assets/images/WarningCircle.png';

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [passwordIconSrc, setPasswordIconSrc] = useState(passwordIcon);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      setPasswordIconSrc(visible);
    } else {
      setPasswordType('password');
      setPasswordIconSrc(passwordIcon);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://capstone-alterra-424313.as.r.appspot.com/api/v1/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password
        })
      });

      const data = await response.json();

      if (data.success) {
        // Store the tokens in sessionStorage
        sessionStorage.setItem('access_token', data.data.access_token);
        sessionStorage.setItem('refresh_token', data.data.refresh_token);
        setIsLoggedIn(true);
        navigate('/admin');
      } else {
        setShowAlert(true);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setShowAlert(true);
    }
  };

  return (
    <div 
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-cyan-50 rounded-2xl shadow-md shadow-gray-500 p-10 md:p-10 lg:p-10 flex flex-col items-center px-5">
        <img className="w-80 mb-8" src={logo} alt="Logo" />
        {showAlert && (
          <div className="w-full mb-4 p-3 bg-red-100 text-black border border-red-300 rounded-lg flex items-center">
            <img src={invalid} alt="Warning Circle" className="w-6 h-6 mr-2" />
            INVALID USERNAME OR PASSWORD
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex-col justify-start items-start gap-9 w-full">
          <div className="flex-col justify-center items-center gap-5 flex w-full">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="USERNAME"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full h-14 bg-gray-50 border border-cyan-500 rounded-lg pl-12 pr-4 py-2 placeholder-gray-800 focus:outline-none"
                style={{
                  backgroundImage: `url(${user})`,
                  backgroundPosition: '10px center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '24px 24px',
                }}
              />
            </div>
            <div className="relative w-full">
              <input
                type={passwordType}
                placeholder="PASSWORD"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-14 bg-gray-50 border border-cyan-500 rounded-lg pl-12 pr-4 py-2 placeholder-gray-800 focus:outline-none"
              />
              <div 
                className="absolute inset-y-0 left-4 flex items-center cursor-pointer" 
                onClick={togglePasswordVisibility}
              >
                <img src={passwordIconSrc} alt="Toggle Password Visibility" className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="w-full mt-8 bg-sky-500 text-gray-50 text-md font-bold leading-tight rounded-full py-3.5 hover:bg-sky-600 transition duration-300"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
