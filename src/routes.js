import React from "react"
import { Switch, Route } from "react-router-dom"
import HomePage from "./Views/HomePage/HomePage"

export default (
  <Switch>
    <Route exact path="/" component={HomePage} />
    {/* Import your routes */}
  </Switch>
)
