import Bottom from '../components/Bottom';
import Top from '../components/Top';
import './MainContent.scss';
import RightBar from './RightBar';


const MainContent=()=>{
    return (
       <div className="main-right-content">
         <div className="middle-content">
         <div className="top">
          <Top/>
        </div>
        <div className="bottom">
          <Bottom/>
        </div>
      </div>
       <div className="rightbar">
       <RightBar/> 
       </div>

             
 </div>
    )
};

export default MainContent;

