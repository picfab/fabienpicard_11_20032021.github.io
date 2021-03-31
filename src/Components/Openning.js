import React, { Component } from "react"

export default class Openning extends Component {
    render() {
        const { title, img, keepHeight } = this.props
        return (
            <div className={`openning${keepHeight ? ' keepHeight' : ''}`} style={{ backgroundImage: `url(${img})` }}>
                {title && <h1 className={`openning__title`}>{title}</h1>}
            </div>
        )
    }
}
