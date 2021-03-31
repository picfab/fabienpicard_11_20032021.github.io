import { Component } from "react"
import Slideshow from '../Components/Gallery'
import Accordion from '../Components/Accordion'
import Tag from '../Components/Tag'
import Stars from '../Components/Stars'
import Auteur from '../Components/Auteur'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import Equipements from '../Components/Equipements'
import Paragraphe from '../Components/Paragraphe'
import getdata from '../utils/getdata'
import {
    withRouter,
    Redirect
} from "react-router-dom"

/**
 * The view of single Appartement
 */
class AppartComponent extends Component {
    state = { error: false, wait: true }
    /**
     * Need the data of the appartement in props.location
     * If not have see componentDidMount
     */
    constructor(props) {
        super(props)
        const { location } = this.props
        if (location.state !== undefined) {
            this.state = { ...this.state, ...location.state, wait: false }
        }
    }
    /**
     * this.props.location is undefined try to get the appartement id in url
     * and fetch appartement for find this one or set error
     */
    componentDidMount() {
        const { location } = this.props
        if (location.state === undefined) {
            getdata('appartements.json')
                .then(appartements => {
                    const idAppart = location.pathname.split('/').pop()
                    const appartFind = appartements.find(x => x.id === idAppart)
                    if (appartFind) {
                        this.setState({ error: false, wait: false, ...appartFind })
                    } else {
                        this.setState({ error: true })
                    }
                }).catch(err => console.error(err))
        }
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
            location,
            error,
            wait
        } = this.state

        if (error) {
            return <Redirect to='/404' />
        }
        return <>
            <Menu />
            <main>
                {wait ? <div>Wait</div> :
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
                            <Accordion description={<Paragraphe texte={description} />} title="Description" />
                            <Accordion description={<Equipements equipements={equipments} />} title="Équipements" />
                        </div>
                    </article>
                }
            </main>
            <Footer />
        </>
    }
}

const Appart = withRouter(AppartComponent)
export default Appart
