import './Home.css'

import Sidebar from '../Components/Sidebar/Sidebar'
import HeaderB from '../Components/HeaderB/HeaderB';
import MainSection from '../Components/MainSection/MainSection';

import ContactIMG from '../Components/assets/Contact.png'
function Home() {
  return (
   <>
   {/* This Assesment Task Also Deployed On Netlify with the link: https://dc-schedule.netlify.app/ */}
   <div className='schedule__parent'>
   <div className='Ssidebar__parent'>
   <Sidebar />
   </div>
   <div className='Ssection__parent'>
    <div><h2 className='schedule__parent__heading'>You currently  have 3 requests</h2> </div>
   <div><HeaderB /></div>
   <div><MainSection /></div>
   </div>
      <div>
      <div className='contact__image'>
        <img src={ContactIMG} alt="" />
        </div>
      </div>
   </div>
   
   
   </>
  );
}

export default Home;
