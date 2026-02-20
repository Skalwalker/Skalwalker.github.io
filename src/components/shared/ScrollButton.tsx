import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { BiUpArrowAlt } from 'react-icons/bi';
import styled from 'styled-components';

export const ScrollButton = (): React.JSX.Element => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = (): void => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);

    return (): void => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <ScrollButtonStyled
        variant="outline-secondary"
        className="float-end"
        onClick={scrollToTop}
        $visible={visible}
      >
        <BiUpArrowAlt className="mx-auto my-auto" color={'white'} size={35} />
      </ScrollButtonStyled>
    </div>
  );
};

const ScrollButtonStyled = styled(Button)<{ $visible: boolean }>`
  display: ${({ $visible }): string => ($visible ? 'inline' : 'none')};
  position: fixed;
  z-index: 1;
  bottom: 30px;
  height: 50px;
  width: 50px;
  right: 0;
  margin-right: 23px;
  border-radius: 25px;
  padding: 0;
  background-color: rgba(255, 48, 214, 0.3);
`;
