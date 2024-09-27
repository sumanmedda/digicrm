import React, {useState} from "react"
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaCircleArrowLeft } from "react-icons/fa6";

export default function Sidebar({ sendDataToParent }){
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    const handleSidebarClick = () => {
        setSidebarIsOpen(!sidebarIsOpen);
        sendDataToParent(sidebarIsOpen)
    }

    return <>
        <div className="custom-sidebar">
            <div style={{display:"flex", alignItems:"center"}}>
                <h1 className={`${sidebarIsOpen ? "mr-24": "mr-2"}`}>Sidebar</h1>
                {sidebarIsOpen ? <FaCircleArrowLeft onClick={handleSidebarClick}/> : <FaCircleArrowRight onClick={handleSidebarClick}/>}
            </div>
            
        </div>
    </>
}