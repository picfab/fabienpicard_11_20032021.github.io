import React from "react"
import Accordion from '../Components/Accordion'
import Openning from '../Components/Openning'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import { siteUrl } from '../utils/dataApp'

export default class Apropos extends React.Component {

    fiabilite = () => <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
    respect = () => <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
    service = () => <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
    securite = () => <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>

    render() {
        return <>
            <Menu />
            <main className="Apropos">
                <header>
                    <Openning
                        img={`${siteUrl}/apropos.jpeg`}
                        keepHeight
                    />
                </header>
                <Accordion description={this.fiabilite()} title="Fiabilité" />
                <Accordion description={this.respect()} title="Respect" />
                <Accordion description={this.service()} title="Service" />
                <Accordion description={this.securite()} title="Sécurité" />

            </main>
            <Footer />
        </>
    }
}

