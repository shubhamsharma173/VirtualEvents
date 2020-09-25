import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { adminRoot } from '../../../constants/defaultValues';
// import Tour from "react-user-tour";
import Vimeo from '@u-wave/react-vimeo';
import Tour, { STATUS } from "react-joyride";
import login from '../../user/login';

const DefaultDashboard = ({ intl, match }) => {
  const { messages } = intl;

  const steps = [
    {
      target: "#t2",
      content: "Click here to access Helpdesk",
      disableBeacon: true,
      placement: "top"
    },
    {
      target: "#t3",
      content: "Click here to enter Conference",
      disableBeacon: true,
      placement: "top"
    },
    {
      target: "#t4",
      content: "Click here to enter Networking Lounge",
      disableBeacon: true,
      placement: "top"
    },
    {
      target: "#t5",
      content: "Click here to view Agenda",
      disableBeacon: true,
      placement: "top"
    },
    {
      target: "#t6",
      content: "Click here to view Speaker Profile",
      disableBeacon: true,
      placement: "top"
    },
    {
      target: "#a5",
      content: "Click here to view Document Library",
      disableBeacon: true,
      placement: "top"
    },
    {
      target: "#a6",
      content: "Click here for Technical Support",
      disableBeacon: true,
      placement: "top"
    }
  ]

  const image={
    position: "relative",
  }
  const hdstyle1={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '16.63%', height: '14.63%',
                   top: '68.11%',left: '41.51%'
  }
  const hdstyle={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '16.63%', height: '14.63%',
                   top: '82.11%',left: '41.51%'
  }
  const constyle1={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '20.52%', height: '20%',
                   top: '42.93%',left: '39.79%',
  }
  const constyle={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '20.52%', height: '20%',
                   top: '55.93%',left: '39.79%',
  }
  const lounge1={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '10%', height: '18.07%',
                   top: '43.74%',left: '21.44%'
  }
  const lounge={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '10%', height: '18.07%',
                   top: '59.74%',left: '21.44%'
  }
  const speaker1={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.61%', height: '6.37%',
                   top: '56.11%',left: '13.59%'
  }
  const speaker={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.61%', height: '6.37%',
                   top: '68.11%',left: '13.59%'
  }
  const agenda1={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.41%', height: '3.91%',
                   top: '63.13%',left: '13.59%'
  }
  const agenda={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.41%', height: '3.91%',
                   top: '75.13%',left: '13.59%'
  }
  const doc1={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.35%', height: '4.37%',
                   top: '58.2%',left: '78.96%'
  }
  const doc={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.35%', height: '4.37%',
                   top: '69.2%',left: '78.96%'
  }
  const support1={
    display: 'flex', justifyContent: 'center', alignItems: 'center',
                   transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   width: '6.35%', height: '5.09%',
                   top: '63.59%',left: '79.01%'
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

      <Tour
        // disableOverlay
        showProgress={true}
        steps={steps}
        run={true}
        continuous={true}
        showSkipButton={true}
        floaterProps={{ disableAnimation: true }}
        callback={data => {
          if ([STATUS.FINISHED, STATUS.SKIPPED].includes(data.status)) {
            // this.setState({ isTouropen: false })
            // this.props.togglehometour(true);
          }
        }}
      />

      <div style={constyle1} id='t3'/>
      <NavLink to={`${adminRoot}/applications/conference`}>
      <div style={constyle}>
        <span className="blinkingdot"></span>
      </div>
      </NavLink>

      <div style={lounge1} id='t4'/>
      <NavLink to={`${adminRoot}/dashboards/analytics`}>
      <div style={lounge}>
        <span className="blinkingdot"></span>
      </div>
      </NavLink>

      <div style={hdstyle1} id='t2'/>
      <NavLink to={`${adminRoot}/ui/help`}>
      <div style={hdstyle}>
        <span className="blinkingdot"></span>
      </div>
      </NavLink>

      <div style={speaker1} id='t6'/>
      <NavLink to={`${adminRoot}/applications/speaker`}>
      <div style={speaker}>
        <span className="blinkingdot"></span>
      </div>
      </NavLink>

      <div style={agenda1} id='t5'/>
      <NavLink to={`${adminRoot}/applications/todo`}>
      <div style={agenda}>
        <span className="blinkingdot"></span>
      </div>
      </NavLink>

      <div style={doc1} id='a5'/>
      <NavLink to={`${adminRoot}/pages/blog/blog-list`}>
      <div style={doc}>
        <span className="blinkingdot"></span>
      </div>
      </NavLink>

      <div style={support1} id='a6'/>
      <NavLink to={`${adminRoot}/ui/faq`}>
      <div style={support}>
        <span className="blinkingdot"></span>
      </div>
      </NavLink>
  </div>
  );
};
export default injectIntl(DefaultDashboard);
