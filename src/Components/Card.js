import React, { Component } from "react"
import {
    Link,
} from "react-router-dom"

export default class Card extends Component {
    state = { width: 340, height: 340 };
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions)
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    /**
     * Update the heigt of the component in function the window width
     */
    updateDimensions = () => {
        if (window.innerWidth > 550) {
            this.setState({ height: 340 })
        } else {
            this.setState({ height: 240 })
        }
    }

    render() {
        const { appart } = this.props
        const { cover, id, title } = appart
        const { height, width } = this.state
        return (
            <Link className="card" to={{
                pathname: `/fabienpicard_11_20032021.github.io/appartements/${id}`,
                state: { ...appart }
            }}>
                <svg className='card__mask' viewBox={`0 0 ${width} ${height}`} />
                {cover && <img src={cover} className='card__img' alt={`Présentation de l'appartement ${title}`} />}
                <h2 className="card__title">{title}</h2>
            </Link>
        )
    }
}
