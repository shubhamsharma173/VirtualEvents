import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { adminRoot } from '../../../constants/defaultValues';
import Tour from "react-user-tour";
import Vimeo from '@u-wave/react-vimeo';

const DefaultDashboard = ({ intl, match }) => {
  const { messages } = intl;

  const image={
    position: "relative"
  }
  const hdstyle={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '16.63%', height: '14.63%',
                   top: '82.11%',left: '41.51%'
  }
  const constyle={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '20.52%', height: '20%',
                   top: '55.93%',left: '39.79%',
  }
  const lounge={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '10%', height: '18.07%',
                   top: '59.74%',left: '21.44%'
  }
  const speaker={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.61%', height: '6.37%',
                   top: '68.11%',left: '13.59%'
  }
  const agenda={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.41%', height: '3.91%',
                   top: '75.13%',left: '13.59%'
  }
  const doc={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.35%', height: '4.37%',
                   top: '69.2%',left: '78.96%'
  }
  const support={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.35%', height: '5.09%',
                   top: '74.59%',left: '79.01%'
  }
 const video={
  cursor: "pointer",
  zIndex: 2,
  transform: "skew(0deg, 0deg)",
  position: "absolute",
  width: "17%",
  height: "17.3%",
  top: "24.75%",
  left: "41.65%"}

  return (
    <div style={image}>
      <img style={image} height="100%" width="100%" src="https://ficci-capam.framez.sg/images/lobby.jpg" />
      <iframe src="https://player.vimeo.com/video/451526648?autoplay=1&app_id=122963" allowFullScreen allow="autoplay; encrypted-media" style={video}>      </iframe>
    

      <NavLink to={`${adminRoot}/applications/conference`}>
      <div style={constyle} class="step1">
        <span className="blinkingdot"></span>
      </div>
      </NavLink>

      <NavLink to={`${adminRoot}/dashboards/analytics`}>
      <div style={lounge} class="step2">
        <span className="blinkingdot"></span>
      </div>
      </NavLink>

      <NavLink to={`${adminRoot}/ui/help`}>
      <div style={hdstyle}>
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
export default injectIntl(DefaultDashboard);
