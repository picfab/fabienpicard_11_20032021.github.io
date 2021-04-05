import React from "react"
import ListAppartement from '../Components/ListAppartement'
import Openning from '../Components/Openning'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import { siteUrl } from '../utils/dataApp'

export default class Home extends React.Component {
    render() {
        console.log('header', siteUrl)

        return <>
            <Menu />
            <main>
                <header>
                    <Openning
                        img={`${siteUrl}/img/header.jpg`}
                        title="Chez vous, partout et ailleurs"
                    />
                </header>
                <ListAppartement />
            </main>
            <Footer />
        </>
    }
}


