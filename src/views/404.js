import React from "react";
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import {
    Link,
} from "react-router-dom";
export default class ErrorPage extends React.Component {
    render() {
        return <>
            <Menu />
            <main className="noFound">
                <h1 className="noFound__title">404</h1>
                <p className='noFound__text'>Oups! La page que vous demandez n'existe pas.</p>
                <Link className="noFound__link" to="/">Retourner sur la page d’accueil</Link>
            </main>
            <Footer />
        </>
    }
}
