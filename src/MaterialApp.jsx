import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddMaterialForm from "./forms/AddMaterialForm";
import EditMaterialForm from "./forms/EditMaterialForm";

class MaterialApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Restaurant Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListCoursesComponent} />
                        <Route path="/materials" exact component={AddMaterialForm} />
                        <Route path="/materials/:id" component={EditMaterialForm} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default MaterialApp