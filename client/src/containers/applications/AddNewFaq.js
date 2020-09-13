import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  CustomInput,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
} from 'reactstrap';
import Select from 'react-select';
import CustomSelectInput from '../../components/common/CustomSelectInput';
import IntlMessages from '../../helpers/IntlMessages';

import { addTodoItem } from '../../redux/actions';

const initialState = {
  question: '',
  answer: '',
};

const AddNewFaq = ({
  modalOpen,
  toggleModal,
  labels,
  categories,
  addTodoItemAction,
}) => {
  const [state, setState] = useState(initialState);

  const addNetItem = () => {
    const newItem = {
      question: state.question,
      answer: state.answer,
    };
    addTodoItemAction(newItem);
    toggleModal();
    setState(initialState);
  };

  return (
    <Modal
      isOpen={modalOpen}
      toggle={toggleModal}
      wrapClassName="modal-right"
      backdrop="static"
    >
      <ModalHeader toggle={toggleModal}>
        <IntlMessages id="Add New FAQ" />
      </ModalHeader>
      <ModalBody>
        <Label className="mt-4">
          <IntlMessages id="Question" />
        </Label>
        <Input
          type="text"
          defaultValue={state.question}
          onChange={(event) =>
            setState({ ...state, question: event.target.value })
          }
        />
        <Label className="mt-4">
          <IntlMessages id="todo.answer" />
        </Label>
        <Input
          type="textarea"
          defaultValue={state.answer}
          onChange={(event) =>
            setState({ ...state, answer: event.target.value })
          }
        />
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" outline onClick={toggleModal}>
          <IntlMessages id="todo.cancel" />
        </Button>
        <Button color="primary" onClick={() => addNetItem()}>
          <IntlMessages id="todo.submit" />
        </Button>{' '}
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ todoApp }) => {
  const { labels, categories } = todoApp;
  return {
    labels,
    categories,
  };
};
export default connect(mapStateToProps, {
  addTodoItemAction: addTodoItem,
})(AddNewFaq);
