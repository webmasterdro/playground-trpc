import { MdKeyboardArrowDown } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { BsHandbag } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

export function DeliveryAddress() {
   return (
    <div className="flex items-center justify-center">
        <div className="cursor-pointer ml-6">
            <span className="uppercase text-sm text-neutral-300">entregar em</span>
            <div className="flex items-center justify-center">
                <GrLocation className="text-sm"/>
                <span className="block font-bold text-neutral-600 text-sm">
                    Avenida dos Autonomistas, 1496
                </span>
                <MdKeyboardArrowDown className="text-red-500 h-6 w-6"></MdKeyboardArrowDown>
            </div>
        </div>
        <div className="flex items-center justify-center ml-10 mt-1">
            <FaRegUser className="text-red-500 w-6 h-6"/>
            <BsHandbag className="text-red-500 w-6 font-semibold h-6 ml-6" />
        </div>
    </div>
   )
}