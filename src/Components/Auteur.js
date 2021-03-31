import React, { Component } from "react"

export default class Auteur extends Component {
    render() {
        const { name, picture } = this.props
        const newName = name.split(' ')
        return (
            <div className="auteur">
                <div className="auteur__identity">
                    {newName.map((x, i) => <span className={i < 1 ? 'auteur__prenom' : 'auteur__nom'} key={i}>{x}</span>)}
                </div>
                <div className="auteur__imgBox">
                    {picture && <img className="auteur__img" src={picture} alt={`${name}`} />}
                    <svg className="auteur__mask" viewBox='0 0 1 1' />
                </div>
            </div>
        )
    }
}
