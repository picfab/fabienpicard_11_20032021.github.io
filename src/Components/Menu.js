import React, { Component } from "react";
import { kasa } from '../utils/picto'
import {
    Link,
    withRouter,
} from "react-router-dom";

class MenuComponent extends Component {
    render() {
        const { match} = this.props
        return (
            <nav className="navPrimary">
                {kasa}
                <ul className="navPrimary__list">
                    <li className="navPrimary__elt"><Link className={`navPrimary__link${match.path==='/'?' active':''}`} to="/">Accueil</Link></li>
                    <li className="navPrimary__elt"><Link className={`navPrimary__link${match.path === '/a-propos' ? ' active' : ''}`} to="/a-propos">À Propos</Link></li>
                </ul>
            </nav>
        )
    }
}

const Menu = withRouter(MenuComponent)
export default Menu
