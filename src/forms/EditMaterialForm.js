import React, { Component } from 'react'
import CourseDataService from "../service/CourseDataService";
import InputForm from "../InputForm";
import {withRouter} from "react-router-dom";

class EditMaterialForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            _id: this.props.match.params._id,
            name: '',
            keyName: '',
            presentation: '',
            measurementType: '',
            dimensions: '',
            quantityPresentation: '',
            amountToRequest: '',
            price: '',
            supplier: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        //console.log(this.state.id)
        const course = CourseDataService.retrieveCourse(this.state.id).then(
            response=> this.setState({
                name : response.name,
                keyName: response.keyName,
                presentation: response.presentation,
                measurementType: response.measurementType,
                dimensions: response.dimensions,
                quantityPresentation: response.quantityPresentation,
                amountToRequest: response.amountToRequest,
                price: response.price,
                supplier: response.supplier
            })
        )
    }

    onSubmit() {
        //console.log("state "+ this.state.name)
        //console.log("state "+ this.state.id)
        CourseDataService.updateCourse(this.state.id, this.state)
            .then(
                response => {
                    this.props.history.push(`/`)
                    this.setState({ material: response.data })
                }
            )
        //console.log("SSSSSS "+ this.state.name)
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            ...this.state,
            [name]: value
        });
        console.log(this.state)
    };

    render() {
        return (
            <div className="container">
                <h3>UPDATE Materials</h3>
                <div className="container">
                    <table className="table">
                        <InputForm
                            name="name"
                            label="name"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.state.name}
                        />
                        <InputForm
                            name="keyName"
                            label="keyName"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.state.keyName}
                        />
                        <InputForm
                            name="presentation"
                            label="presentation"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.state.presentation}
                        />
                        <InputForm
                            name="measurementType"
                            label="measurementType"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.state.measurementType}
                        />
                        <InputForm
                            name="dimensions"
                            label="dimensions"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.state.dimensions}
                        />
                        <InputForm
                            name="quantityPresentation"
                            label="quantityPresentation"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.state.quantityPresentation}
                        />
                        <InputForm
                            name="amountToRequest"
                            label="amountToRequest"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.state.amountToRequest}
                        />
                        <InputForm
                            name="price"
                            label="price"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.state.price}
                        />
                        <InputForm
                            name="supplier"
                            label="supplier"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.state.supplier}
                        />
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.onSubmit}>Update</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter (EditMaterialForm)







/*
import React, { Component } from 'react'
import CourseDataService from "../service/CourseDataService";
import InputForm from "../InputForm";
import {withRouter} from 'react-router-dom';

class EditMaterialForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            keyName: '',
            specification: {
                presentation: '',
                measurementType: '',
                dimensions: '',
                quantityPresentation: '',
                amountToRequest: '',
                price: '',
                supplier: ''
            },
            message: null
        }
    }

    componentDidMount() {
        const material = CourseDataService.retrieveCourse(this.props.match.params.id);
        console.log('edit ... ' + material  )

        this.setState({
            name: material.name,
            keyName: material.keyName,
            specification: {
                presentation: material.specification.presentation,
                measurementType: material.specification.measurementType,
                dimensions: material.specification.dimensions,
                quantityPresentation: material.specification.quantityPresentation,
                amountToRequest: material.specification.amountToRequest,
                price: material.specification.price,
                supplier: material.specification.supplier
            }
        })
    }

    updateCourseClicked() {
        console.log(this.state)
        CourseDataService.createCourse(this.state)
            .then(
                response => {
                    //console.log(response);
                    this.props.history.push(`/`)
                    this.setState({ material: response.data })
                }
            )
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            ...this.state,
            [name]: value
        });
        console.log(this.state)
    };

    handleSpecificationChange = event => {
        const { value, name } = event.target;
        const {specification} = this.state;
        specification[name]=value;
        this.setState({
            ...this.state,
            specification
        });
        console.log(this.state)
    };

    render()  {
        console.log(this.props.match.params.id)
        return (
            <div className="container">
                <h3>Update Material</h3>
                <div className="container">
                    <table className="table">
                        <InputForm
                            name="name"
                            label="name"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.name}
                        />
                        <InputForm
                            name="keyName"
                            label="keyName"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.keyName}
                        />
                        <InputForm
                            name="presentation"
                            label="presentation"
                            type="text"
                            handleChange={this.handleSpecificationChange}
                            value={this.presentation}
                        />
                        <InputForm
                            name="measurementType"
                            label="measurementType"
                            type="text"
                            handleChange={this.handleSpecificationChange}
                            value={this.measurementType}
                        />
                        <InputForm
                            name="dimensions"
                            label="dimensions"
                            type="text"
                            handleChange={this.handleSpecificationChange}
                            value={this.dimensions}
                        />
                        <InputForm
                            name="quantityPresentation"
                            label="quantityPresentation"
                            type="text"
                            handleChange={this.handleSpecificationChange}
                            value={this.quantityPresentation}
                        />
                        <InputForm
                            name="amountToRequest"
                            label="amountToRequest"
                            type="text"
                            handleChange={this.handleSpecificationChange}
                            value={this.amountToRequest}
                        />
                        <InputForm
                            name="price"
                            label="price"
                            type="text"
                            handleChange={this.handleSpecificationChange}
                            value={this.price}
                        />
                        <InputForm
                            name="supplier"
                            label="supplier"
                            type="text"
                            handleChange={this.handleSpecificationChange}
                            value={this.supplier}
                        />
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.updateCourseClicked}>Update</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter (EditMaterialForm);




    return (
        <form
            onSubmit={event => {
                event.preventDefault()

                props.updateMaterial(material.id, material)
            }}
        >

            <label>Name</label>
            <input type="text" name="name" value={material.name} onChange={handleInputChange} />
            <label>Key</label>
            <input type="text" name="username" value={material.keyName} onChange={handleInputChange} />
            <label>Presentation</label>
            <input type="text" name="username" value={material.presentation} onChange={handleInputChange} />
            <label>Measurement</label>
            <input type="text" name="username" value={material.measurementType} onChange={handleInputChange} />
            <label>Dimensions</label>
            <input type="text" name="username" value={material.dimensionsMaterial} onChange={handleInputChange} />
            <label>Quantity - Presentation</label>
            <input type="text" name="username" value={material.quantityPresentation} onChange={handleInputChange} />
            <label>Total Amount</label>
            <input type="text" name="username" value={material.amountToRequest} onChange={handleInputChange} />
            <label>Price</label>
            <input type="text" name="username" value={material.price} onChange={handleInputChange} />
            <label>Supplier</label>
            <input type="text" name="username" value={material.supplier} onChange={handleInputChange} />

            <button>Update material</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    )
}

export default EditMaterialForm*/
