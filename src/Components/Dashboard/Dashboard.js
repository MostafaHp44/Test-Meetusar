import './Dashboard.css'
import { IoMdHelp } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { IoAppsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoReaderOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { FaQrcode } from "react-icons/fa";
import { GrUpgrade } from "react-icons/gr";
import logomeet from '../Assets/LogoMeetus/verticallogo/meetus.png'





const Dashboard =()=>{
return(
    <div className='MainDashboard'>


        <div className='HorizintalLine'>

            <div className='FirstPart'>
              <div className='Username'><span>Placeholder Name</span></div>
            </div>
      

      <div className='SecPart'>
        <button className='Inform'><IoMdHelp size={30}/></button>
        <button className='Chat'><IoChatbubblesOutline size={30} /></button>
        <button className='Notification'><IoIosNotifications size={30}/></button>
        <div className='Profile'></div>
        <button className='ScanQrCode'><FaQrcode size={20}/> Scan QR Code</button>
        <button className='Upgarde'><GrUpgrade size={20 }/>Upgrade</button>
      </div>

        </div>

        <div className='VerticalLine'>

            <button className='ME'><img></img></button>
            <button className='app'><IoAppsOutline size={30}/></button>
            <button className='user'><CiUser size={30}/></button>
            <button className='Instruction'><IoReaderOutline size={30}/></button>
            <button className='Lock'><CiLock size={30}/></button>
            <button className='MainChat'><IoChatbubblesOutline size={30}/></button>
            <div className='LogoMeetdashboard'><img src={logomeet} alt="Logo"  className='Meetuslogodashboard'/> </div>



        </div>

      
    </div>
)
}
export default Dashboard