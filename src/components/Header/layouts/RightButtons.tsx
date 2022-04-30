import React, { FC, useState } from 'react'
import { FaRegUser } from 'react-icons/fa';
import { IoIosArrowDown, IoMdBasket } from 'react-icons/io'

const RightButtons: FC = () => {

    const [showList,setShowList] = useState<boolean>(false);

    return (
        <div className="login-basket-buttons relative h-12 flex flex-row">
            <div className="login-wrapper h-full">
                <button 
                    onClick = {()=>setShowList(!showList)}
                    className="h-full text-sm flex justify-center items-center px-2 mx-3 gap-4 border-2 rounded-lg border-gray-400"
                >
                    <FaRegUser className="h-10 w-4"/>
                    <div className="flex flex-col items-start">
                    <p className="font-semibold text-md">Giriş Yap</p>
                    <p className="text-[0.7rem]">veya Üye Ol</p>
                    </div>
                    <IoIosArrowDown className="h-12 w-6"/>
                </button>
                
                <div className={`absolute bg-white w-48 mt-3 ${!showList && "hidden"} rounded shadow-md border-2 z-10`}>
                    <ul className="flex flex-col gap-3">
                        <li className="text-xs pl-8 pt-4 pb-1 font-semibold"><a href="#">Giriş Yap</a></li>
                        <li className="text-xs pl-8 pt-0 pb-1 font-semibold"><a href="#">Üye Ol</a></li>

                        <div className="flex flex-col justify-center items-center bg-gray-200 p-2">
                        <p className="text-grey-900 font-extrabold">EFSANELER</p>
                        <p className="tracking-tighter">Kulübü</p>
                        </div>

                        <li className="text-xs pl-8 pt-0 pb-1 font-semibold"><a href="#">Siparişlerim</a></li>
                        <li className="text-xs pl-8 pt-0 pb-1 font-semibold"><a href="#">Hepsipay Cüzdanım</a></li>
                        <li className="text-xs pl-8 pt-0 pb-1 font-semibold"><a href="#">Kullanıcı Bilgilerim</a></li>
                        <li className="text-xs pl-8 pt-0 pb-1 font-semibold border-b"><a href="#">Değerlendirmelerim</a></li>
                        <li className="text-xs pl-8 pt-0 pb-1 font-semibold"><a href="#">Beğendiklerim</a></li>
                        <li className="text-xs pl-8 pt-0 pb-1 font-semibold border-b"><a href="#">Tüm Listelerim</a></li>
                        <li className="text-xs pl-8 pt-0 pb-1 font-semibold border-b"><a href="#">Kuponlarım</a></li>
                        <li className="text-xs pl-8 pt-0 pb-4 font-semibold"><a href="#">Destek Taleplerim</a></li>
                    </ul>
                </div>
            </div>

            <div className="basket-wrapper h-full">
            <button className="h-full text-sm flex justify-center items-center gap-0 px-3 mx-3 rounded bg-gray-400">
                    <IoMdBasket className="h-10 w-4 text-white"/>
                    <p className="font-semibold text-lg text-white px-3">Sepetim</p>
                </button>
            </div>
        </div>
    )
}


export default RightButtons;