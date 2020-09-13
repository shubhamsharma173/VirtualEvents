import React, { useState } from 'react';
import {
Row,
Collapse,
Card,
Button,
CardBody,
CardTitle,
CardSubtitle,
CardImg,
CardText,
Modal,
ModalHeader,
ModalBody,
ModalFooter,
FormGroup,
Input,
Label, } from 'reactstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import {
  Separator,
  Colxx,
} from '../../../components/common/CustomBootstrap';
import faqData from '../../../data/faq';
import IntlMessages from '../../../helpers/IntlMessages';

const Faq = ({match}) => {
  const [showingIndex, setShowIndex] = useState(0);
  const [modalRight, setModalRight] = useState(false);
  const [modalBasic, setModalBasic] = useState(false);
  const [modalLong, setModalLong] = useState(false);
  const [modalBack, setModalBack] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [modalNestedContainer, setModalNestedContainer] = useState(false);
  const [modalNested, setModalNested] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [modalLarge, setModalLarge] = useState(false);
  const [modalSmall, setModalSmall] = useState(false);

  return (
    <div style={{padding:"20px"}}>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="FAQ" match={match} />
          <div className="text-zero top-right-button-container">
            <Button
              color="primary"
              size="lg"
              className="top-right-button"
              onClick={() => setModalRight(true)}
              >
              <IntlMessages id="todo.add-new" />
            </Button>
            <Modal
              isOpen={modalRight}
              toggle={() => setModalRight(!modalRight)}
              wrapClassName="modal-right"
            >
              <ModalHeader>Add New FAQ</ModalHeader>
              <ModalBody>

              </ModalBody>
                <ModalFooter>
                  <Button
                    color="secondary"
                    onClick={() => setModalRight(false)}
                    align="right"
                  >
                    Submit
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          <Separator className="mb-5" />
        </Colxx>

        <Colxx xxs="12" className="mb-4">
          <>
            {faqData.map((item, index) => {
              return (
                <Card className="d-flex mb-3" key={`faqItem_${index}`}>
                  <div className="d-flex flex-grow-1 min-width-zero">
                    <Button
                      color="link"
                      className="card-body  btn-empty btn-link list-item-heading text-left text-one"
                      onClick={() => setShowIndex(index)}
                      aria-expanded={showingIndex === index}
                    >
                      {item.question}
                    </Button>
                  </div>
                  <Collapse isOpen={showingIndex === index}>
                    <div
                      className="card-body accordion-content pt-0"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </Collapse>
                </Card>
              );
            })}
          </>
        </Colxx>
      </Row>
    </div>
  );
};

export default Faq;
