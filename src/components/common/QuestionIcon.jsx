import React, { useState } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import styled from 'styled-components';

const QuestionContainer = styled.div`
  position: absolute;
  top: 45%;
  right: -8px;
`;

const TextArea = styled.p`
  display: ${props => (props.isShown ? 'block' : 'none')};
  position: absolute;
  min-width: 110px;
  bottom: 10px;
  left: 40px;
  padding: 4px 4px 4px 16px;
  text-align: left;
  background-color: #ecebf155;
  color: #52525255;
  border-radius: 5%;

  ${QuestionContainer}:hover & {
    display: block;
  }
`;

function QuestionIcon({ textContent }) {
  const [isShown, setIsShown] = useState();

  const handleClickBox = () => {
    setIsShown(!isShown);
  };

  return (
    <QuestionContainer onClick={handleClickBox}>
      <TextArea isShown={isShown}>{textContent}</TextArea>
      <BsQuestionCircle size={30} color="#525252" />
    </QuestionContainer>
  );
}

export default QuestionIcon;
