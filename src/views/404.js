import { Component } from "react"
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import {
    Link,
} from "react-router-dom"

/**
 * The view of error 404
 */
export default class ErrorPage extends Component {
    render() {
        return <>
            <Menu />
            <main className="noFound">
                <h1 className="noFound__title">404</h1>
                <p className='noFound__text'>Oups! La page que vous demandez n'existe pas.</p>
                <Link className="noFound__link" to="/fabienpicard_11_20032021.github.io/">Retourner sur la page d’accueil</Link>
            </main>
            <Footer />
        </>
    }
}
