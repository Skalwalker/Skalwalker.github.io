import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { BiUpArrowAlt } from 'react-icons/bi';

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
      <Button
        variant="outline-secondary"
        className="float-end"
        onClick={scrollToTop}
        style={{
          display: visible ? 'inline' : 'none',
          position: 'fixed',
          zIndex: 1,
          bottom: '30px',
          height: '50px',
          width: '50px',
          right: '0',
          marginRight: '23px',
          borderRadius: '25px',
          padding: '0',
          backgroundColor: 'rgba(255, 48, 214, 0.3)',
        }}
      >
        <BiUpArrowAlt className="mx-auto my-auto" color={'white'} size={35} />
      </Button>
    </div>
  );
};
