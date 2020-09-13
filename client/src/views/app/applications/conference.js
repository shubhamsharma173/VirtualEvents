import React from 'react';
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
                    top: '-19%',left: '30.50%',
   }
    return (
    <div>
     <img height="100%" width="100%" style={image2} src="https://ficci-capam.framez.sg/images/audi3.jpg" />
     <div style={vid}>
       <Vimeo video="451526648" height="800px" width="700px" autoplay/>
     </div>
     </div>
    );
};
export default injectIntl(DefaultConference);
