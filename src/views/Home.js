import React from "react"
import ListAppartement from '../Components/ListAppartement'
import Openning from '../Components/Openning'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import { siteUrl } from '../utils/dataApp'

export default class Home extends React.Component {
    render() {
        return <>
            <Menu />
            <main>
                <header>
                    <Openning
                        img={`${siteUrl}/header.jpg`}
                        title="Chez vous, partout et ailleurs"
                    />
                </header>
                <ListAppartement />
            </main>
            <Footer />
        </>
    }
}


