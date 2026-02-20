import React from 'react';
import { Button } from 'react-bootstrap';
import { BiLeftArrowAlt } from 'react-icons/bi';
import styled from 'styled-components';

export const BackButton = (): React.JSX.Element => {
  return (
    <div>
      <BackButtonStyled variant="outline-light" className="float-start">
        <BiLeftArrowAlt className="mx-auto my-auto" color={'white'} size={25} />
      </BackButtonStyled>
    </div>
  );
};

const BackButtonStyled = styled(Button)`
  height: 40px;
  width: 40px;
  margin-top: 0;
  border-radius: 20px;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.3);
`;
