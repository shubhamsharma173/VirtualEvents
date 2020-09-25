import React,{useState} from 'react';
import { injectIntl } from 'react-intl';
import { Row, Button } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import Vimeo from '@u-wave/react-vimeo';


const DashboardAnalytics = ({ intl, match }) => {
  const [showSlido,setSlidoshow]=useState("none");
  const image1={
    position: "relative"
   }
   const vid={
     display: 'block', transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    top: '-7.98%',left: '45%',
   }
   let slido={
     display:showSlido, justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '350px', height: '440px',
                    top: '25.11%',left: '71.51%'
   }
  const logo={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '50px', height: '50px',
                    top: '81%',left: '94.31%'
  }
  const slidoToggle=()=>{
    if (showSlido=="flex")
      setSlidoshow("none")
    else
      setSlidoshow("flex")
  }
    return (
    <div>
     <img height="100%" width="100%" style={image1} src="https://ficci-capam.framez.sg/images/lounge.jpg" />

     <div style={vid}>
       <Vimeo video="451526648" height="603px" width="260px" autoplay/>
     </div>
     <Button onClick={()=>slidoToggle()}><img src="../../../../assets/logos/slido.png" height="100%" width="100%" style={logo}/></Button>
     <iframe src="https://app.sli.do/event/e1oazdil" height="100%" width="100%" style={slido}/>
    </div>
    );
};
export default injectIntl(DashboardAnalytics);
