import React, { Component } from "react";
import { arrowUp, arrowDown} from '../utils/picto'

export default class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    openAccordion = (e) => {
        const accordionTitle = e.target.closest('.accordion__titleBox')
        const panel = accordionTitle.nextElementSibling
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
        this.setState({ open: !this.state.open })
    }
    render() {
        const { description,title } = this.props
        const { open } = this.state
        return (
            <div className='accordion'>
                <div className="accordion__container">
                    <div className='accordion__titleBox' onClick={this.openAccordion}><h2 className='accordion__title'>{title}</h2><span className='accordion__icon'>{open ? arrowUp : arrowDown}</span></div>
                    <div className={`accordion__content`}>
                        <div className="accordion__texte">{description}</div>
                    </div>
                </div>
            </div>
        )
    }
}
