
import React from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';

type myState = {visible: any}
type myProps = {}

class ScrollButton extends React.Component<myProps, myState> {

    constructor(props: any) {
        super(props);
        this.state = {
          visible: false
        };
        this.toggleVisible = this.toggleVisible.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.toggleVisible);
    }

    toggleVisible() {
        let scrolled = document.documentElement.scrollTop;
        let new_this = this
        if (scrolled > 300) {
            new_this.setState({visible: true})
        } else if (scrolled <= 300) {
            new_this.setState({visible: false})
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div>
                <Button variant="outline-secondary"  className="float-right" onClick={this.scrollToTop} style={{
                    display: this.state.visible ? 'inline' : 'none',
                    position: 'fixed',
                    zIndex: 1,
                    bottom: '30px',
                    height: '50px',
                    width: '50px',
                    right: '0',
                    marginRight: '23px',
                    borderRadius: '25px',
                    padding: '0',
                    backgroundColor: 'rgba(255, 48, 214, 0.3)'
                }}>
                    <BiUpArrowAlt className='mx-auto my-auto' color={'white'} size={35}/>
                </Button>
            </div>
        )
    }
}

export default ScrollButton;
