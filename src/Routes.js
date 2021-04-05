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
            <Router>
                <Switch>
                    <Route path="/fabienpicard_11_20032021.github.io/:id" children={appart} />
                    <Route path="/fabienpicard_11_20032021.github.io/a-propos" children={apropos} />
                    <Route exact path="/fabienpicard_11_20032021.github.io/" children={home} />
                    <Route path="/fabienpicard_11_20032021.github.io/404" children={error} />
                    <Route children={error} />
                </Switch>
            </Router>
        )
    }
}
