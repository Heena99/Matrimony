
import Received from "./Received";
import NewProfiles from "./NewProfile";
import Buttontoggle from "./Buttontoggle";
import { useState } from "react";

export default function Home() {
  const Bell = require('../assets/Notification.svg');
  const [activeNav, setActiveNav] = useState("Profile")
  return (
    <div className="h-dvh w-dvw relative flex justify-center">
    <img
      src="/assets/ReactangleMiddle.png"
      alt="bg image"
      className="sm:absolute sm:translate-y-[-50%] sm:translate-x-[-50%] sm:top-[55%] sm:left-1/2 sm:h-[33rem] sm:w-full sm:inline hidden"
    />
    <img
      src="/assets/HATHI.svg"
      alt="hathi image"
      className="sm:absolute sm:bottom-0 sm:left-0 hidden sm:inline"
    />
    <img
      src="../assets/IButton.png"
      alt="UnCover Button"
      className="sm:absolute sm:top-1/2 sm:right-[110px] sm:translate-y-[-50%] hidden sm:inline"
    />
    <img
      src="/assets/PhoneJhoomar.png"
      alt="Jhoomar"
      className="absolute w-full top-0 sm:hidden"
    />

    <nav className="absolute z-50 w-[90%] sm:w-full flex justify-center sm:top-20 top-36">
      <ul className="w-[26rem] flex justify-between font-poppinsmedium rounded-full border-[1px] border-[#FFD2E1] sm:border-none text-xs sm:text-base">
        <li>
          <button className={`${activeNav === 'Profile' ? 'bg-[#FF709D] relative rounded-full py-1 sm:py-0.5 px-1 sm:px-2' : 'relative rounded-full py-1 sm:py-0.5 px-1 sm:px-2'}`} onClick={() => setActiveNav("Profile")}>
            <div className={`${activeNav === 'Profile' ? 'text-white' : 'text-[#959595]'}`}>New Profiles</div>
            <div className="text-[0.6rem] sm:text-sm text-white size-4 sm:size-5 rounded-[50%] absolute top-[-10px] sm:top-[-12px] right-[-4px] sm:right-[-8px] bg-[#EFC325] border-[#FFF0BB] border-[1px] flex items-center justify-center">
              2
            </div>
          </button>
        </li>
        <li>
          <button className={`${activeNav === 'Received' ? 'bg-[#FF709D] relative rounded-full py-1 sm:py-0.5 px-1 sm:px-2' : 'relative rounded-full py-1 sm:py-0.5 px-1 sm:px-2'}`} onClick={() => setActiveNav("Received")}>
            <div className={`${activeNav === 'Received' ? 'text-white' : 'text-[#959595]'}`}>Received</div>
            <div className="text-[0.6rem] sm:text-sm text-white size-4 sm:size-5 rounded-[50%] absolute top-[-10px] sm:top-[-12px] right-[-4px] sm:right-[-8px] bg-[#EFC325] border-[#FFF0BB] border-[1px] flex items-center justify-center">
              2
            </div>
          </button>
        </li>
        <li>
          <button className={`${activeNav === 'Matched' ? 'bg-[#FF709D] relative rounded-full py-1 sm:py-0.5 px-1 sm:px-2' : 'relative rounded-full py-1 sm:py-0.5 px-1 sm:px-2'}`} onClick={() => setActiveNav("Matched")}>
            <div className={`${activeNav === 'Matched' ? 'text-white' : 'text-[#959595]'}`}>Matched</div>
            <div className="text-[0.6rem] sm:text-sm text-white size-4 sm:size-5 rounded-[50%] absolute top-[-10px] sm:top-[-12px] right-[-4px] sm:right-[-8px] bg-[#EFC325] border-[#FFF0BB] border-[1px] flex items-center justify-center">
              2
            </div>
          </button>
        </li>
        <li>
          <button className={`${activeNav === 'Chats' ? 'bg-[#FF709D] relative rounded-full py-1 sm:py-0.5 px-1 sm:px-2' : 'relative rounded-full py-1 sm:py-0.5 px-1 sm:px-2'}`} onClick={() => setActiveNav("Chats")}>
            <div className={`${activeNav === 'Chats' ? 'text-white' : 'text-[#959595]'}`}>Chats</div>
            <div className="text-[0.6rem] sm:text-sm text-white size-4 sm:size-5 rounded-[50%] absolute top-[-10px] sm:top-[-12px] right-[-4px] sm:right-[-8px] bg-[#EFC325] border-[#FFF0BB] border-[1px] flex items-center justify-center">
              2
            </div>
          </button>
        </li>
      </ul>
    </nav>

    <div className="absolute sm:top-32 top-20 flex justify-between w-[92%]">
      <div className=" font-brolimo text-[#FF550D] flex items-center sm:text-4xl">
        <div>Ishaare</div>
        <div className=" font-brolimo text-[#FF25B6] flex items-center sm:text-4xl">
          .
        </div>
        <div className="sm:text-4xl font-brolimo text-[#FF550D] flex items-center">com</div>
      </div>

      <div className="sm:w-56 w-28 flex items-center justify-between">
        <button>
          <img src="/assets/Filter.svg" alt="Settings" className="size-5 sm:size-8" />
        </button>
        <button>
          <img src="/assets/IButton.svg" alt="Info" className="size-5 sm:size-8"/>
        </button>
        <button>
          <img src="/assets/Notification.svg" alt="Bell" className="size-5 sm:size-8"/>
        </button>
        <div className="size-5 sm:size-8 p-[2px] rounded-[50%] font-poppinsmedium text-[#585858] bg-gradient-to-r from-[#C4A204] to-[#D09767] ">
          <div className="text-xs sm:text-base h-full w-full rounded-[50%] bg-[#FAF3DC] flex items-center justify-center cursor-pointer">
            PY
          </div>
        </div>
      </div>
    </div>

    <div className="h-[41rem] w-[38rem] relative translate-y-[-50%] top-[55%] sm:rounded-[5rem] box-border sm:border-[#DED9D3] sm:border-[6px] sm:border-solid sm:bg-white sm:drop-shadow-lg">
      <img src="/assets/Maskgroup.png" alt="Jhoomar" className="sm:absolute sm:top-0 sm:w-full sm:inline hidden" />

      <div className="flex flex-col items-center justify-center sm:mt-36 mt-28 gap-1">
        <div className="font-poppinsbold text-transparent font-extrabold sm:text-2xl bg-clip-text bg-gradient-to-r from-[#EF629F] to-[#ECC38F]">
          Namaste Nandip
        </div>

        <div className="font-poppinsregular text-[#7C3838] text-xs sm:text-base">
          We have some amazing prospects for you today
        </div>

        {activeNav==="Profile" ? <Buttontoggle/> : ""}

        
          {activeNav==="Profile" ? <NewProfiles/> : <Received/> }
        
      </div>
    </div>
  </div>
  )
}
