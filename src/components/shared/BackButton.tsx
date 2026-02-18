import React from 'react';
import { Button } from 'react-bootstrap';
import { BiLeftArrowAlt } from 'react-icons/bi';

export const BackButton = (): React.JSX.Element => {
  return (
    <div>
      <Button
        variant="outline-light"
        className="float-start"
        style={{
          height: '40px',
          width: '40px',
          marginTop: '0px',
          borderRadius: '20px',
          padding: '0',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
        }}
      >
        <BiLeftArrowAlt className="mx-auto my-auto" color={'white'} size={25} />
      </Button>
    </div>
  );
};
