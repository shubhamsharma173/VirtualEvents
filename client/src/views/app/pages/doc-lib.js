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
  Label, } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import {
  Colxx,
  Separator,
} from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import { NavLink } from 'react-router-dom';

const BlogList = ({ match }) => {
  const [modalBasic, setModalBasic] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [closeAll, setCloseAll] = useState(false);
  const [modalLarge, setModalLarge] = useState(true);
  const [modalLarge1, setModalLarge1] = useState(true);
  const [modalLarge2, setModalLarge2] = useState(false);
  const [modalLarge3, setModalLarge3] = useState(false);
  const [modalLarge4, setModalLarge4] = useState(false);
  const [modalLarge5, setModalLarge5] = useState(false);
  const [modalLarge6, setModalLarge6] = useState(false);
  const [myLink, setLink] = useState("https://ficci-capam.framez.sg/docs/Sponsors.pdf");
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
    <div>
    <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="Document Library" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row>
    <div>
        <Modal
                isOpen={modalLarge1}
                toggle={() => setModalLarge1(!modalLarge1)}
                style={{maxWidth: "800px"}}
              >
                <ModalHeader>
                  DOCUMENT LIBRARY
                </ModalHeader>
                <ModalBody>
                <div style={maindivi}>
                  <div style={leftdivi}>
                  <iframe src={myLink} height="400px" width="100%">
                    <embed width="100%" height="100%" src={myLink} type="application/pdf" />
                  </iframe>
                  </div>
                  <div style={divi}>
                  <ul style={list}>
                    <li style={listitemactive}
                      onClick={() => setLink("https://ficci-capam.framez.sg/docs/Sponsors.pdf")}>SPONSORS</li>
                    <li style={listitem}
                        onClick={() => setLink("https://ficci-capam.framez.sg/docs/FICCI%20EOS%20-%20July%202020.pdf")}>FICCI EOS - JULY 2020 </li>
                    <li style={listitem}
                        onClick={() => setLink("https://ficci-capam.framez.sg/docs/FICCI%20EOS%20-%20July%202020.pdf")}>MANUFACTURING SURVEY REPORT </li>
                    <li style={listitem}
                        onClick={() => setLink("https://ficci-capam.framez.sg/docs/FICCI%20EOS%20-%20July%202020.pdf")}>FICCI DHRUVA SURVEY </li>
                    <li style={listitem}
                        onClick={() => setLink("https://ficci-capam.framez.sg/docs/FICCI%20EOS%20-%20July%202020.pdf")}>WOB_FINAL REPORT_3103_V12 </li>
                    <li style={listitem}
                        onClick={() => setLink("https://ficci-capam.framez.sg/docs/FICCI%20EOS%20-%20July%202020.pdf")}>CAPAM COMPENDIUM 2020 </li>
                    <li style={listitem}
                        onClick={() => setLink("https://ficci-capam.framez.sg/docs/FICCI%20EOS%20-%20July%202020.pdf")}>L&T PROFILE </li>
                  </ul>
                  </div>
                </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="secondary"
                    onClick={() => setModalLarge1(false)}
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
      </div>

        {/*<div>
      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                FICCI EOS - July 2020
              </CardTitle>
              <div>
                <Button
                  color="primary"
                  outline
                  onClick={() => setModalLarge2(true)}
                >
                  View
                </Button>
                <Modal
                  isOpen={modalLarge2}
                  toggle={() => setModalLarge2(!modalLarge2)}
                  style={{maxWidth: "800px"}}
                >
                  <ModalHeader>
                    FICCI EOS - July 2020
                  </ModalHeader>
                  <ModalBody>
                    <iframe src="https://ficci-capam.framez.sg/docs/FICCI%20EOS%20-%20July%202020.pdf" height="400px" width="100%">
                      <embed width="100%" height="100%" src="https://ficci-capam.framez.sg/docs/FICCI%20EOS%20-%20July%202020.pdf" type="application/pdf" />
                    </iframe>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="secondary"
                      onClick={() => setModalLarge2(false)}
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

        <div>
        <Row>
          <Colxx xxs="12">
            <Card className="mb-4">
              <CardBody>
                <CardTitle>
                  MANUFACTURING SURVEY REPORT
                </CardTitle>
                <div>
                  <Button
                    color="primary"
                    outline
                    onClick={() => setModalLarge3(true)}
                  >
                    View
                  </Button>
                  <Modal
                    isOpen={modalLarge3}
                    toggle={() => setModalLarge3(!modalLarge3)}
                    style={{maxWidth: "800px"}}
                  >
                    <ModalHeader>
                      MANUFACTURING SURVEY REPORT
                    </ModalHeader>
                    <ModalBody>
                      <iframe src="https://ficci-capam.framez.sg/docs/MANUFACTURING%20SURVEY%20REPORT.pdf" height="400px" width="100%">
                        <embed width="100%" height="https://ficci-capam.framez.sg/docs/MANUFACTURING%20SURVEY%20REPORT.pdf" type="application/pdf" />
                      </iframe>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="secondary"
                        onClick={() => setModalLarge3(false)}
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

          <div>
          <Row>
            <Colxx xxs="12">
              <Card className="mb-4">
                <CardBody>
                  <CardTitle>
                    FICCI Dhruva Survey
                  </CardTitle>
                  <div>
                    <Button
                      color="primary"
                      outline
                      onClick={() => setModalLarge4(true)}
                    >
                      View
                    </Button>
                    <Modal
                      isOpen={modalLarge4}
                      toggle={() => setModalLarge4(!modalLarge4)}
                      style={{maxWidth: "800px"}}
                    >
                      <ModalHeader>
                        FICCI Dhruva Survey
                      </ModalHeader>
                      <ModalBody>
                        <iframe src="https://ficci-capam.framez.sg/docs/Final%20FICCI%20Dhruva%20Survey%206.7.2020.pdf" height="400px" width="100%">
                          <embed width="100%" height="100%" src="https://ficci-capam.framez.sg/docs/Final%20FICCI%20Dhruva%20Survey%206.7.2020.pdf" type="application/pdf" />
                        </iframe>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="secondary"
                          onClick={() => setModalLarge4(false)}
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

            <div>
            <Row>
              <Colxx xxs="12">
                <Card className="mb-4">
                  <CardBody>
                    <CardTitle>
                      WOB_Final Report_3103_V12
                    </CardTitle>
                    <div>
                      <Button
                        color="primary"
                        outline
                        onClick={() => setModalLarge5(true)}
                      >
                        View
                      </Button>
                      <Modal
                        isOpen={modalLarge5}
                        toggle={() => setModalLarge5(!modalLarge5)}
                        style={{maxWidth: "800px"}}
                      >
                        <ModalHeader>
                          WOB_Final Report_3103_V12
                        </ModalHeader>
                        <ModalBody>
                          <iframe src="https://ficci-capam.framez.sg/docs/WOB_Final%20Report_3103_V12_Final_compressed.pdf" height="400px" width="100%">
                            <embed width="100%" height="100%" src="https://ficci-capam.framez.sg/docs/WOB_Final%20Report_3103_V12_Final_compressed.pdf" type="application/pdf" />
                          </iframe>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="secondary"
                            onClick={() => setModalLarge5(false)}
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

              <div>
              <Row>
                <Colxx xxs="12">
                  <Card className="mb-4">
                    <CardBody>
                      <CardTitle>
                        CAPAM Compendium 2020
                      </CardTitle>
                      <div>
                        <Button
                          color="primary"
                          outline
                          onClick={() => setModalLarge6(true)}
                        >
                          View
                        </Button>
                        <Modal
                          isOpen={modalLarge6}
                          toggle={() => setModalLarge6(!modalLarge6)}
                          style={{maxWidth: "800px"}}
                        >
                          <ModalHeader>
                            CAPAM Compendium 2020
                          </ModalHeader>
                          <ModalBody>
                            <iframe src="https://ficci-capam.framez.sg/docs/CAPAM%20Compendium%202020%20Final.pdf" height="400px" width="100%">
                              <embed width="100%" height="100%" src="https://ficci-capam.framez.sg/docs/CAPAM%20Compendium%202020%20Final.pdf" type="application/pdf" />
                            </iframe>
                          </ModalBody>
                          <ModalFooter>
                            <Button
                              color="secondary"
                              onClick={() => setModalLarge6(false)}
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

                <div>
                <Row>
                  <Colxx xxs="12">
                    <Card className="mb-4">
                      <CardBody>
                        <CardTitle>
                          L&T PROFILE
                        </CardTitle>
                        <div>
                          <Button
                            color="primary"
                            outline
                            onClick={() => setModalLarge(true)}
                          >
                            View
                          </Button>
                          <Modal
                            isOpen={modalLarge}
                            toggle={() => setModalLarge(!modalLarge)}
                            style={{maxWidth: "800px"}}
                          >
                            <ModalHeader>
                              L&T PROFILE
                            </ModalHeader>
                            <ModalBody>
                              <iframe src="https://ficci-capam.framez.sg/docs/L&T%20PROFILE.pdf" height="400px" width="100%">
                              <embed width="100%" height="100%" src="https://ficci-capam.framez.sg/docs/L&T%20PROFILE.pdf" type="application/pdf" />
                              </iframe>

                            </ModalBody>
                            <ModalFooter>
                              <Button
                                color="secondary"
                                onClick={() => setModalLarge(false)}
                              >
                                Close
                              </Button>
                            </ModalFooter>
                          </Modal>
                        </div>
                      </CardBody>
                    </Card>
                  </Colxx>
                  </Row>
                  </div>*/}
    </div>
  );
};

export default BlogList;
