import React from 'react';
import { Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { adminRoot } from '../../../constants/defaultValues';

const BlankPage = ({ match }) => {
  const image1={
    position: "relative"
   }
   const constyle={
     display: 'flex', justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '15.57%', height: '11.3%',
                    top: '21.13%',left: '12.17%',
   }
   const lounge={
     display: 'flex', justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '15.57%', height: '11.3%',
                    top: '20.67%',left: '80.17%'
   }
   const speaker={
     display: 'flex', justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '15.07%', height: '11.3%',
                    top: '33.19%',left: '12.17%'
   }
   const agenda={
     display: 'flex', justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '15.57%', height: '11.3%',
                    top: '47.15%',left: '11.90%'
   }
   const doc={
     display: 'flex', justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '15.7%', height: '11.3%',
                    top: '31.98%',left: '80.17%'
   }
   const support={
     display: 'flex', justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '15.57%', height: '11.3%',
                    top: '46.53%',left: '80.47%'
   }
    return (
    <div style={image1}>
     <img height="100%" width="100%" style={image1} src="https://ficci-capam.framez.sg/images/helpdesk.jpg" />
     <NavLink to={`${adminRoot}/applications/conference`}>
     <div style={constyle}>
       <span className="blinkingdot"></span>
     </div>
     </NavLink>

     <NavLink to={`${adminRoot}/dashboards/analytics`}>
     <div style={lounge}>
       <span className="blinkingdot"></span>
     </div>
     </NavLink>

     <NavLink to={`${adminRoot}/applications/speaker`}>
     <div style={speaker}>
       <span className="blinkingdot"></span>
     </div>
     </NavLink>

     <NavLink to={`${adminRoot}/applications/todo`}>
     <div style={agenda}>
       <span className="blinkingdot"></span>
     </div>
     </NavLink>

     <NavLink to={`${adminRoot}/pages/blog/blog-list`}>
     <div style={doc}>
       <span className="blinkingdot"></span>
     </div>
     </NavLink>

     <NavLink to={`${adminRoot}/ui/faq`}>
     <div style={support}>
       <span className="blinkingdot"></span>
     </div>
     </NavLink>
    </div>
    );
};

export default BlankPage;
