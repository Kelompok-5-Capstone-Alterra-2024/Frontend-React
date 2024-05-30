import { useState } from 'react';
import logo from '../../../assets/images/logo.png';
import backgroundImage from '../../../assets/images/background-login.png';
import user from '../../../assets/images/user.svg';
import passwordIcon from '../../../assets/images/password.svg';
import visible from '../../../assets/images/visible.png';

function Login() {
  const [passwordType, setPasswordType] = useState('password');
  const [passwordIconSrc, setPasswordIconSrc] = useState(passwordIcon);

  const togglePasswordVisibility = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      setPasswordIconSrc(visible);
    } else {
      setPasswordType('password');
      setPasswordIconSrc(passwordIcon);
    }
  };

  return (
    <div 
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-cyan-50 rounded-2xl shadow-md shadow-gray-500 p-8 md:p-10 lg:p-20 flex flex-col items-center px-5">
        <img className="w-80 mb-8" src={logo} alt="Logo" />
        <form className="flex-col justify-start items-start gap-9 flex">
          <div className="flex-col justify-center items-center gap-5 flex">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="USERNAME"
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
              className="w-full bg-sky-500 text-gray-50 text-sm font-normal font-['Roboto'] leading-tight rounded-full py-3.5 hover:bg-sky-600 transition duration-300"
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