import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import home from "../../../assets/images/home.png";
import admin from "../../../assets/images/admin.png";
import organization from "../../../assets/images/UsersThree.png";
import logout from "../../../assets/images/SignOut.png";
import transaksi from "../../../assets/images/ArrowsLeftRight.png";
import user from "../../../assets/images/User.png";
import up from "../../../assets/images/CaretUp.png";
import down from "../../../assets/images/CaretDown.png";
import manage from "../../../assets/images/HandCoins.png";
import Modal from '../../ui/Modal/Modal';

function Sidebar() {
    const [isContentOpen, setIsContentOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();
    const [activeItem, setActiveItem] = useState(location.pathname);

    const toggleOpen = () => {
        setIsContentOpen(!isContentOpen);
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
      navigate("login");
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleItemClick = (path) => {
        setActiveItem(path);
        navigate(path);
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
                    <div className={`h-[41px] bg-white rounded-[10px] flex items-center gap-5 justify-start ${activeItem === '' ? 'bg-sky-400' : ''}`} onClick={() => handleItemClick('')}>
                        <img className="w-5 h-5 relative ml-5" src={home} />
                        <Link to="manage-user">
                            <div className={`text-base font-normal font-['Roboto'] leading-tight ${activeItem === '' ? 'text-white' : 'text-stone-400'}`}>
                                Home
                            </div>
                        </Link>
                    </div>
                    <div className={`pt-3 py-2 rounded-md flex items-center gap-5 justify-between ${isContentOpen ? 'bg-sky-400' : 'bg-white'}`} onClick={toggleOpen}>
                        <div className="flex items-center gap-5">
                            <img className="w-5 h-5 relative ml-5" src={manage} />
                            <Link to="#">
                                <div className={`font-normal font-['Roboto'] leading-tight ${isContentOpen ? 'text-white' : 'text-stone-400'}`}>
                                    Manage Content
                                </div>
                            </Link>
                        </div>
                        <button onClick={toggleOpen}>
                            <img className="w-5 h-5 relative mx-7" src={isDropdownOpen ? up : down} />
                        </button>
                    </div>
                    {isContentOpen && (
                        <div className="flex flex-col gap-1.5">
                            <div className={`h-[41px] bg-white rounded-[10px] flex items-center gap-5 justify-start ${activeItem === 'manage-content/donasi' ? 'bg-sky-300' : ''}`} onClick={() => handleItemClick('manage-content/donasi')}>
                                <div className="w-[21px] h-[21px] relative" />
                                <Link to="manage-content/donasi">
                                    <div className={`text-base font-normal font-['Roboto'] leading-tight ${activeItem === 'manage-content/donasi' ? 'text-white' : 'text-stone-400'}`}>
                                        • Donasi
                                    </div>
                                </Link>
                                <div className="w-5 h-5 relative" />
                            </div>
                            <div className={`h-[41px] bg-white rounded-[10px] flex items-center gap-5 justify-start ${activeItem === 'manage-content/relawan' ? 'bg-sky-300' : ''}`} onClick={() => handleItemClick('manage-content/relawan')}>
                                <div className="w-[21px] h-[21px] relative" />
                                <Link to="manage-content/relawan">
                                    <div className={`text-base font-normal font-['Roboto'] leading-tight ${activeItem === 'manage-content/relawan' ? 'text-white' : 'text-stone-400'}`}>
                                        • Relawan
                                    </div>
                                </Link>
                                <div className="w-5 h-5 relative" />
                            </div>
                            <div className={`h-[41px] bg-white rounded-[10px] flex items-center gap-5 justify-start ${activeItem === 'manage-content/artikel' ? 'bg-sky-300' : ''}`} onClick={() => handleItemClick('manage-content/artikel')}>
                                <div className="w-[21px] h-[21px] relative" />
                                <Link to="manage-content/artikel">
                                    <div className={`text-base font-normal font-['Roboto'] leading-tight ${activeItem === 'manage-content/artikel' ? 'text-white' : 'text-stone-400'}`}>
                                        • Artikel
                                    </div>
                                </Link>
                                <div className="w-5 h-5 relative" />
                            </div>
                        </div>
                    )}
                    <div className={`h-[41px] bg-white rounded-[10px] flex items-center gap-5 justify-start ${activeItem === 'manage-user' ? 'bg-sky-400' : ''}`} onClick={() => handleItemClick('manage-user')}>
                        <img className="w-5 h-5 relative ml-5" src={user} />
                        <Link to="manage-user">
                            <div className={`text-base font-normal font-['Roboto'] leading-tight ${activeItem === 'manage-user' ? 'text-white' : 'text-stone-400'}`}>
                                Manage User
                            </div>
                        </Link>
                    </div>
                    <div className={`h-[41px] bg-white rounded-[10px] flex items-center gap-5 justify-start ${activeItem === 'manage-organization' ? 'bg-sky-400' : ''}`} onClick={() => handleItemClick('manage-organization')}>
                        <img className="w-5 h-5 relative ml-5" src={organization} />
                        <Link to="manage-organization">
                            <div className={`text-base font-normal font-['Roboto'] leading-tight ${activeItem === 'manage-organization' ? 'text-white' : 'text-stone-400'}`}>
                                Manage Organization
                            </div>
                        </Link>
                    </div>
                    <div className={`h-[41px] bg-white rounded-[10px] flex items-center gap-5 justify-start ${activeItem === 'transaksi' ? 'bg-sky-400' : ''}`} onClick={() => handleItemClick('transaksi')}>
                        <img className="w-5 h-5 relative ml-5" src={transaksi} />
                        <Link to="transaksi">
                            <div className={`text-base font-normal font-['Roboto'] leading-tight ${activeItem === 'transaksi' ? 'text-white' : 'text-stone-400'}`}>
                                Transaksi
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-[20px] top-[500px] bg-white absolute flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-[260px] h-[0px] justify-center items-center gap-4 inline-flex">
                    <div className="grow shrink basis-0 h-[0px] border border-blue-300"></div>
                </div>
                <div className="h-[41px] bg-white rounded-[10px] flex items-center gap-5 justify-start">
                    <img className="w-5 h-5 relative ml-5" src={logout} />
                    <button onClick={handleShowModal}>
                        <div className="text-base font-normal font-['Roboto'] leading-tight">
                            Logout
                        </div>
                    </button>
                    <Modal show={showModal} onClose={handleCloseModal} backdrop={true}>
                        <h2 className="text-xl font-semibold mb-4 text-center text-black">Apakah Anda Yakin ingin Keluar?</h2>
                        <p className="text-md mb-7 text-center text-black">Anda akan kehilangan semua perubahan <br />
                            yang belum anda simpan
                        </p>
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
    );
}

export default Sidebar;

