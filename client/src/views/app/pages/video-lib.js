import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import {
  Colxx,
  Separator,
} from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

const BlogList = ({ match }) => {
  const [modalBasic, setModalBasic] = useState(false);
  const [modalLong, setModalLong] = useState(false);
  const [modalBack, setModalBack] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [modalRight, setModalRight] = useState(false);
  const [modalNestedContainer, setModalNestedContainer] = useState(false);
  const [modalNested, setModalNested] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [modalLarge, setModalLarge] = useState(false);
  const [modalSmall, setModalSmall] = useState(false);
  return (
    <div style={{padding:"20px"}}>
    <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="Video Library" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row>
    <Row>
      <Colxx xxs="12">
        <Card className="mb-4">
          <CardBody>
            <CardTitle>
              Welcome Video
            </CardTitle>
            <div>
              <Button
                color="primary"
                outline
                onClick={() => setModalBasic(true)}
              >
                View
              </Button>
              <Modal
                isOpen={modalBasic}
                toggle={() => setModalBasic(!modalBasic)}
              >
                <ModalHeader>
                  Welcome Video
                </ModalHeader>
                <ModalBody>
                  <video src=''/>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="secondary"
                    onClick={() => setModalBasic(false)}
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </CardBody>
        </Card>
      </Colxx>
      </Row>

      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                L&T
              </CardTitle>
              <div>
                <Button
                  color="primary"
                  outline
                  onClick={() => setModalBasic(true)}
                >
                  View
                </Button>
                <Modal
                  isOpen={modalBasic}
                  toggle={() => setModalBasic(!modalBasic)}
                >
                  <ModalHeader>
                    L&T
                  </ModalHeader>
                  <ModalBody>
                    <video src=''/>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="secondary"
                      onClick={() => setModalBasic(false)}
                    >
                      Cancel
                    </Button>
                  </ModalFooter>
                </Modal>
              </div>
            </CardBody>
          </Card>
        </Colxx>
        </Row>
    </div>
  );
};

export default BlogList;
