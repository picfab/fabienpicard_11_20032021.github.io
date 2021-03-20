import React, { Component } from "react";
import { kasa } from '../utils/picto'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__logo">{kasa}</div>
                <div className="footer__credit">© 2020 Kasa. All rights reserved</div>
            </footer>
        )
    }
}


