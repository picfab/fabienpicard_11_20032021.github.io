import React, { Component } from "react";
import { star } from '../utils/picto'

export default class Tag extends Component {
    constructor(props) {
        super(props);
        const { nb, rating } = props
        let nbStars = nb ? nb : 5
        const stars = []
        for (var i = 0; i < nbStars; i++) {
            const value = i < rating
            stars.push(value)
        }
        this.state = {
            stars
        }
    }

    setRating=(i)=>{
        const {stars} = this.state
        const newStars = stars.map((starElt,s) => {
            if(s<=i){
                return true
            }else{
                return false
            }
        });
        this.setState({stars:[...newStars]})
    }

    handleMouseEnter=(e,i)=>{
        const starsBox = e.target.closest('.stars')
        const starElts = starsBox.getElementsByClassName('stars__elt')
        Array.from(starElts).forEach((starElt,s) => {
            if(s<i){
                starElt.classList.add('temp')
            }
            else{
                starElt.classList.remove('temp')
            }
        });
    }

    handleMouseLeave = (e)=>{
            const starElts = e.target.getElementsByClassName('stars__elt')
            Array.from(starElts).forEach((starElt) => {
                starElt.classList.remove('temp')
            })
    }

    render() {
        const {stars} = this.state
        return (
            <ul
                className='stars'
                onMouseLeave={this.handleMouseLeave}
            >
                {stars.map((starElt, i) =>
                    <li key={i}
                        className={`stars__elt${starElt?' active':''}`}
                        onClick={() => this.setRating(i)}
                        onMouseEnter={(e) => this.handleMouseEnter(e,i)}
                    >
                        {star}
                    </li>
                )}

            </ul>
        )
    }
}
