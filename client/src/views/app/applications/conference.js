import React from 'react';
import {
	Route,
	Redirect,
} from 'react-router-dom';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import Vimeo from '@u-wave/react-vimeo';

const DefaultConference = ({ intl, match }) => {
  const image2={
    position: "relative"
   }
   const vid={
     display: 'block', transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    top: '-19.5%',left: '29.15%',
   }
   const slido={
     display: 'flex', justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '350px', height: '440px',
                    top: '25.11%',left: '71.51%'
   }
	 const logo={
		 display: 'flex', justifyContent: 'center', alignItems: 'center',
                    transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    width: '200px', height: '200px',
                    top: '45.11%',left: '71.51%'
	 }
    return (
    <div>
     <img height="100%" width="100%" style={image2} src="https://ficci-capam.framez.sg/images/audi3.jpg" />
     <div style={vid}>
       <Vimeo video="451526648" height="805px" width="720px" autoplay/>
     </div>
		 	<iframe src="client/public/assets/logos/slido.png" height="100%" width="100%" style={slido}/>
      {/*<iframe src="https://app.sli.do/event/e1oazdil" height="100%" width="100%" style={slido}/>*/}
     </div>
    );
};

export default injectIntl(DefaultConference);
