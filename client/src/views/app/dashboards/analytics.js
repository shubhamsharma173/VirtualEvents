import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import Vimeo from '@u-wave/react-vimeo';

const DashboardAnalytics = ({ intl, match }) => {
  const image1={
    position: "relative"
   }
   const vid={
     display: 'block', transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                    top: '-7.98%',left: '45%',
   }
    return (
    <div>
     <img height="100%" width="100%" style={image1} src="https://ficci-capam.framez.sg/images/lounge.jpg" />

     <div style={vid}>
       <Vimeo video="451526648" height="603px" width="260px" autoplay/>
     </div>
    </div>
    );
};
export default injectIntl(DashboardAnalytics);
