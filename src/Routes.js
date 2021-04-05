import React, { Component } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

export default class Routes extends Component {
    render() {
        const { appart, apropos, home, error } = this.props.urls
        return (
            <Router baseName='/fabienpicard_11_20032021.github.io'>
                <Switch>
                    <Route path="/appartements/:id" children={appart} />
                    <Route exact path="/a-propos" children={apropos} />
                    <Route exact path="/" children={home} />
                    <Route path="/404" children={error} />
                    <Route children={error} />
                </Switch>
            </Router>
        )
    }
}
