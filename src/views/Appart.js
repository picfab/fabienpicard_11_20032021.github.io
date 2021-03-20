import React from "react";
import Slideshow from '../Components/Gallery'
import Accordion from '../Components/Accordion'
import Tag from '../Components/Tag'
import Stars from '../Components/Stars'
import Auteur from '../Components/Auteur'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import {
    withRouter,
    Redirect
} from "react-router-dom";

class AppartComponent extends React.Component {
    state = { error: false }
    constructor(props) {
        super(props);
        const {location } = this.props
        if (location.state !== undefined) {
            this.state = { ...location.state };
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const { location } = this.props
        const prevLocation = prevProps.location
        let update = false
        if (prevLocation.state) {
            if (location.state !== undefined) {
                if (prevLocation.state.id !== location.state.id) {
                    update = true
                }
            }
        }

        if (update) {
            this.setState({ ...location.state });
        }
    }

    equipement = (equipements) => {
        return <ul className="equipements">
            {equipements.map((materiel, i) => <li key={i}>{materiel}</li>)}
        </ul>
    }
    paragraphe = (text) => {
        return <p>{text}</p>
    }

    render() {
        const {
            pictures,
            title,
            description,
            equipments,
            tags,
            rating,
            host,
            location } = this.state
        if (!this.state.id) {
            return <Redirect to='/404' />
        }
        return <>
            <Menu />
            <main>
                <article className="appart">
                    <header className="headerAppart">
                        <Slideshow pictures={pictures} />
                        <div className="titleBox">
                            <h1 className="title">{title}</h1>
                            <p className="location">{location}</p>
                        </div>
                        <Auteur name={host.name} picture={host.picture} />
                        <div className="tags">
                            {tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
                        </div>
                        <Stars rating={rating} />
                    </header>
                    <div className="content">
                        <Accordion description={this.paragraphe(description)} title="Description" />
                        <Accordion description={this.equipement(equipments)} title="Équipements" />
                    </div>
                </article>
            </main>
            <Footer />
        </>
    }
}

const Appart = withRouter(AppartComponent)
export default Appart
