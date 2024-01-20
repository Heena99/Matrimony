import { useState } from "react";

const Buttontoggle = () => {
    const [status, setStatus] = useState("New")
    return (
        <div className="w-[90%] sm:w-3/4 flex justify-between mt-4">
            <div></div>
            <div className="w-32 rounded-full border-[#BCBCBC] border-[1px]">
                <ul className="flex justify-between items-center font-poppinsmedium">
                    <li>
                        <button className={`${status === "New" ? "bg-[#FF6A2B] relative rounded-full h-full py-0.5 px-3" : "relative rounded-full py-0.5 px-3"}`} onClick={() => setStatus("New")}>
                            <div className={`${status === "New" ? 'text-white text-sm m-0.5' : 'text-[#A0A0A0] text-sm m-0.5'}`}>New</div>
                            <div className={`${status === "New" ? "h-[5px] w-[5px] rounded-[50%] absolute top-1.5 right-2 bg-[#FFFFFF]" : "h-[5px] w-[5px] rounded-[50%] absolute top-1.5 right-2 bg-[#FF6A2B]"}`}></div>
                        </button>
                    </li>
                    <li>
                        <button className={`${status === "Sent" ? "bg-[#FF6A2B] relative rounded-full h-full py-0.5 px-3" : "relative rounded-full py-0.5 px-3"}`} onClick={() => setStatus("Sent")}>
                            <div className={`${status === "Sent" ? 'text-white text-sm m-0.5' : 'text-[#A0A0A0] text-sm m-0.5'}`}>Sent</div>
                            <div className={`${status === "Sent" ? "h-[5px] w-[5px] rounded-[50%] absolute top-1.5 right-2 bg-[#FFFFFF]" : "h-[5px] w-[5px] rounded-[50%] absolute top-1.5 right-2 bg-[#FF6A2B]"}`}></div>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="font-poppinsmedium text-xs sm:text-base flex item-center">(3)</div>
        </div>
    )
}

export default Buttontoggle