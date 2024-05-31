import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import home from "../../../assets/images/home.png"
import admin from "../../../assets/images/admin.png"
import organization from "../../../assets/images/UsersThree.png"
import logout from "../../../assets/images/SignOut.png"
import info from "../../../assets/images/Info.png"
import transaksi from "../../../assets/images/ArrowsLeftRight.png"
import user from "../../../assets/images/User.png"
import up from "../../../assets/images/CaretUp.png"
import down from "../../../assets/images/CaretDown.png"
import manage from "../../../assets/images/HandCoins.png"
import Modal from '../../ui/Modal/Modal';

function Sidebar() {
    const [isContentOpen, setIsContentOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const toggleOpen = () => {
      setIsContentOpen(!isContentOpen);
      setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
      localStorage.setItem("isAuthenticated", "false");
      navigate("login");
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const handleShowModal = () => {
      setShowModal(true);
    };

    return (
      <div className="w-[300px] relative bg-white">
        <div className="p-5 flex items-center">
          <div className="w-[260px] h-[60px] p-2 bg-neutral-100 rounded-lg justify-start items-center gap-2.5 inline-flex">
              <img className="w-10 h-10 relative rounded-[31px]" src={admin} />
                <div className="h-[34px] justify-start items-center gap-[100px] flex">
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="self-stretch text-teal-900 text-xs font-normal leading-tight">Cornelia</div>
                        <div className="self-stretch text-teal-900 text-[10px] font-normal leading-[14px]">Oniel@gmail.com</div>
                    </div>
                </div>
          </div>
        </div>
        <div className="p-2">
          <div className="flex flex-col gap-2">
            <div className="rounded-md flex items-center gap-5 justify-start">
              <img className="w-5 h-5 relative ml-5" src={home} />
              <Link to="">
              <div className="text-stone-400 text-base font-normal font-['Roboto'] leading-tight">
                Home
              </div>
              </Link>
            </div>
            <div className={`pt-3 py-2 rounded-md flex items-center gap-5 justify-between ${isContentOpen ? 'bg-sky-500' : 'bg-white'}`} onClick={toggleOpen}>
             <div className="flex items-center gap-5">
               <img className="w-5 h-5 relative ml-5" src={manage} />
               <Link to="#">
                <div className={`text-stone-400 font-normal font-['Roboto'] leading-tight ${isContentOpen ? 'text-white' : 'text-sky-500'}`}>Manage Content</div>
               </Link>
             </div>
             <button onClick={toggleOpen}>
               <img className="w-5 h-5 relative mx-7" src={isDropdownOpen ? up : down} />
             </button>
            </div>
            {isContentOpen && (
              <div className="flex flex-col gap-1.5">
                <div className="h-[41px] bg-white rounded-[10px] flex items-center gap-5 justify-start">
                  <div className="w-[21px] h-[21px] relative" />
                  <Link to="manage-content/donasi">
                  <div className="text-stone-400 text-base font-normal font-['Roboto'] leading-tight">• Donasi</div>
                  </Link>
                  <div className="w-5 h-5 relative" />
                </div>
                <div className="h-[41px] bg-white rounded-[10px] flex items-center gap-5 justify-start">
                  <div className="w-[21px] h-[21px] relative" />
                  <Link to="manage-content/relawan">
                  <div className="text-stone-400 text-base font-normal font-['Roboto'] leading-tight">• Relawan</div>
                  </Link>
                  <div className="w-5 h-5 relative" />
                </div>
                <div className="h-[41px] bg-white rounded-[10px] flex items-center gap-5 justify-start">
                  <div className="w-[21px] h-[21px] relative" />
                  <Link to="manage-content/artikel">
                  <div className="text-stone-400 text-base font-normal font-['Roboto'] leading-tight">• Artikel</div>
                  </Link>
                  <div className="w-5 h-5 relative" />
                </div>
              </div>
            )}
            <div className="h-[41px] bg-white rounded-[10px] flex items-center gap-5 justify-start">
            <img className="w-5 h-5 relative ml-5" src={user} />
            <Link to="manage-user">
              <div className="text-stone-400 text-base font-normal font-['Roboto'] leading-tight">Manage User</div>
            </Link>
            </div>
            <div className="h-[41px] bg-white rounded-[10px] flex items-center gap-5 justify-start">
            <img className="w-5 h-5 relative ml-5" src={organization} />
            <Link to="manage-organization">
              <div className="text-stone-400 text-base font-normal font-['Roboto'] leading-tight">Manage Organization</div>
            </Link>
            </div>
            <div className="h-[41px] bg-white rounded-[10px] flex items-center gap-5 justify-start">
            <img className="w-5 h-5 relative ml-5" src={transaksi} />
            <Link to="transaksi"> 
              <div className="text-stone-400 text-base font-normal font-['Roboto'] leading-tight">Transaksi</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-[20px] top-[450px] bg-white absolute flex-col justify-start items-start gap-4 inline-flex">
          <div className="w-[260px] h-[0px] justify-center items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-[0px] border border-blue-300"></div>
          </div>
          <div className="h-[41px] bg-white rounded-[10px] flex items-center gap-5 justify-start">
          <img className="w-5 h-5 relative ml-5" src={info} />
          <Link to="tentang-kami">
            <div className="text-stone-400 text-base font-normal font-['Roboto'] leading-tight">Tentang Kami</div>
          </Link>
          </div>
          <div className="h-[41px] bg-white rounded-[10px] flex items-center gap-5 justify-start">
          <img className="w-5 h-5 relative ml-5" src={logout} />
          <button onClick={handleShowModal}>
            <div className="text-stone-400 text-base font-normal font-['Roboto'] leading-tight">Logout</div>
          </button>
          <Modal show={showModal} onClose={handleCloseModal} backdrop={true}>
            <h2 className="text-xl font-semibold mb-4 text-center text-black">Apakah Anda Yakin ingin Keluar?</h2>
            <p className="text-md mb-7 text-center text-black">Anda akan kehilangan semua perubahan <br/> 
            yang belum anda simpan</p>
            <div className="flex justify-evenly mt-4">
            <button onClick={handleCloseModal} 
            className="bg-gray-200 text-black py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400">
            Batal
            </button>
            <button onClick={handleLogout} 
            className="bg-red-500 text-white py-2 px-5 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600">
            Keluar
            </button>
            </div>
          </Modal>
          </div>
        </div>
      </div>
    )
  }
  
  export default Sidebar;
