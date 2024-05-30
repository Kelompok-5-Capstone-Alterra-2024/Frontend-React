import logo from '../../../assets/images/logo.png';
import backgroundImage from '../../../assets/images/background-login.png';
import user from '../../../assets/images/user.svg';
import password from '../../../assets/images/password.svg';

function Login() {
  return (
    <div 
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-cyan-50 rounded-2xl shadow-md shadow-gray-500 p-8 md:p-10 lg:p-20 flex flex-col items-center">
        <img className="w-80 mb-8" src={logo} alt="Logo" />
          <form className="flex-col justify-start items-start gap-9 flex">
            <div className="flex-col justify-center items-center gap-5 flex">
              <input
                type="text"
                placeholder="USERNAME"
                required
                className="w-full h-14 bg-gray-50 border border-cyan-500 rounded-lg px-12 py-2 placeholder-gray-800 focus:outline-none"
                style={{
                  backgroundImage: `url(${user})`,
                  backgroundPosition: '10px center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '24px 24px',
                  paddingLeft: '50px'
                }}
              />
              <input
                  type="password"
                  placeholder="PASSWORD"
                  required
                  className="w-80 h-14 bg-gray-50 border border-cyan-500 rounded-lg px-4 py-2 placeholder-gray-800"
                  style={{
                    backgroundImage: `url(${password})`,
                    backgroundPosition: '10px center', 
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '24px 24px',
                    paddingLeft: '50px'
                  }}
                />
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
  )
}

export default Login