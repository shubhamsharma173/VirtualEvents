import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { adminRoot } from '../../../constants/defaultValues';
import Validation from '../../../containers/wizard/Validation';

const FormWizard = ({ match }) => {

  return (
    <div style={{padding:"20px"}}>
    <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="My Profile" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row>
    </div>
  );
};
export default FormWizard;
