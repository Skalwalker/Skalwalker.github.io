
import React from 'react';
import { BiLeftArrowAlt } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';

class BackButton extends React.Component {
    render() {
        return (
            <div>
                <Button variant="outline-light"  className="float-left"
                    style={{
                    // display: this.state.visible ? 'inline' : 'none',
                    // position: 'fixed',
                    // zIndex: 1,
                    // bottom: '30px',
                    height: '40px',
                    width: '40px',
                    // right: '0',
                    marginTop: '0px',
                    borderRadius: '20px',
                    padding: '0',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)'
                }}>
                    <BiLeftArrowAlt className='mx-auto my-auto' color={'white'} size={25}/>
                </Button>
            </div>
        )
    }
}

export default BackButton;
