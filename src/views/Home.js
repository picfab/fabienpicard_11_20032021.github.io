import React from "react";
import getdata from '../utils/getdata'
import Card from '../Components/Card'
import Openning from '../Components/Openning'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'


export default class Home extends React.Component {
    render() {
        return <>
            <Menu />
            <main>
                <header>
                    <Openning
                        img='http://localhost:3000/header.jpg'
                        title="Chez vous, partout et ailleurs"
                    />
                </header>
                <ListAppartement />
            </main>
            <Footer />
        </>
    }
}


export class ListAppartement extends React.Component {
    constructor(props) {
        super(props);
        this.state = { appartements: [] };
    }
    componentDidMount() {
        getdata('appartements.json')
            .then(appartements => {
                console.log(appartements);
                this.setState({ appartements })
            })
    }
    render() {
        return (
            <ul className="listAppart">
                {this.state.appartements.map((appart, i) =>
                    <li key={i}>
                        <Card appart={appart} />
                    </li>
                )}
            </ul>
        )
    }
}
