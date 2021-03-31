import React, { Component } from "react"
import { arrowLeft, arrowRight } from '../utils/picto'

/**
 * The Gallery
 */
export default class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 0,
            total: this.props.pictures.length
        }
    }

    goLeft = () => this.setState({ page: this.state.page === 0 ? this.state.total - 1 : this.state.page - 1 })
    goRigth = () => this.setState({ page: this.state.page + 1 === this.state.total ? 0 : this.state.page + 1 })

    render() {
        const { pictures } = this.props
        const { page } = this.state
        return (
            <div className='slideshow'>
                {pictures.length > 1 &&
                    <>
                        <nav className='slideshow__nav'><span onClick={this.goLeft}>{arrowLeft}</span><span onClick={this.goRigth}>{arrowRight}</span></nav>
                        <span className='slideshow__page'>{page + 1}/{pictures.length}</span>
                    </>
                }
                {pictures.map((img, i) => {
                    const show = this.state.page === i ? ' show' : ''
                    return <img src={img} key={i} className={`slideshow__img${show}`} alt={`Slide n°${i}`} />
                })}
            </div>
        )
    }
}
