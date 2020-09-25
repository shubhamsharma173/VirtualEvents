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
import { NavLink } from 'react-router-dom';
import Vimeo from '@u-wave/react-vimeo';

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
  const [modalSmall, setModalSmall] = useState(true);
  const [myLink, setLink] = useState("https://player.vimeo.com/video/451526648?autoplay=1&app_id=122963");
  const maindivi={
    position:"inline-block",
  }
  const divi={
    width:"27%",
    float:"right",
    position:"relative",
    borderRadius:"20px",
    border: "2px solid rgba(34,41,47,.125"
  }
  const leftdivi={
    height:"400px",
    width:"70%",
    float:"left",
    position:"relative"
  }
  const vid={
    display: 'block', transform:`skew(${0}deg, ${0}deg)`,position: 'absolute',
                   top: '0.40%',left: '0%'
  }
  const list={
    listStyle:'none'
  }
  const listitem={
    position:"relative",
    padding: "10px 10px 10px 0px",
    backgroundcolor: "#fff",
    fontSize:"14.6px",
    float:"left"
  }
  const listitemactive={
    position:"relative",
    padding: "15px 10px 10px 0px",
    backgroundcolor: "#fff",
    textcolor:"purple" ,
    fontSize:"14.6px",
    fontAlign:"center"
  }

  return (
    <div style={{padding:"20px"}}>
    <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="Video Library" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row>

    <div>
        <Modal
                isOpen={modalSmall}
                toggle={() => setModalSmall(!modalSmall)}
                style={{maxWidth: "800px"}}
              >
                <ModalHeader>
                  VIDEO LIBRARY
                </ModalHeader>
                <ModalBody>
                <div style={maindivi}>
                  <div style={leftdivi}>
                    <div style={vid}>
                      <iframe src={myLink} height="300px" width="525px">
                      </iframe>
                      </div>
                  </div>
                  <div style={divi}>
                  <ul style={list}>
                    <li style={listitemactive} onClick={() => setLink("https://player.vimeo.com/video/451526648?autoplay=1&app_id=122963")}>WELCOME VIDEO</li>
                    <li style={listitem} onClick={() => setLink("https://player.vimeo.com/video/451526648?autoplay=1&app_id=122963")}> L&T </li>
                  </ul>
                  </div>
                </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="secondary"
                    onClick={() => setModalSmall(false)}
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
      </div>
    {/*<Row>
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
        </Row>*/}
    </div>
  );
};

export default BlogList;
