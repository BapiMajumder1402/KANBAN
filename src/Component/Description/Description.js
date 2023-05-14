import React, { useState } from "react";
import d from "./Description.module.css";
import { GrMore } from "react-icons/gr";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  Input,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { GrView } from "react-icons/gr";
import { MdOutlineViewComfy } from "react-icons/md";
// import { itemId } from "../CardComponent/CardComponent";

function Description() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [title, setTitle] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleBlurInput = () => {
    setIsEditing(false);
  };

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <GrMore onClick={onOpen} />
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        className={d.Container}
      >
        <ModalOverlay />
        <ModalContent className={d.subContainer}>
          <ModalBody pb={6} className={d.desBody}>
            <div className={d.inputField}>
              <MdOutlineViewComfy />
              {isEditing ? (
                <Input
                  type="text"
                  value={title}
                  onChange={handleInputChange}
                  onBlur={handleBlurInput}
                />
              ) : (
                <h1 onClick={handleTitleClick} className={d.title}>
                  <strong>{title}</strong>
                </h1>
              )}
              <p>
                in List <u>ToDo</u>
              </p>
            </div>

            <div className={d.notification}>
              <h3>Notification</h3>
              <Button>
                <GrView /> Watch
              </Button>
            </div>

            <div className={d.description}>
              <h4>Description</h4>
              {!isFocused ? (
                <Input
                  placeholder="Add a more detailed description..."
                  height="3rem"
                  onFocus={handleFocus}
                />
              ) : (
                <ReactQuill
                  theme="snow"
                  value={value}
                  onChange={setValue}
                  onBlur={handleBlur}
                />
              )}
              <Button>Add</Button>
            </div>
            <div className={d.activity}>
              <h3>Activity</h3>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Description;
