import React, { Component } from 'react'
import CourseDataService from "../service/CourseDataService";
import InputForm from "../InputForm";

class AddMaterialForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            keyName: '',
            presentation: '',
            measurementType: '',
            dimensions: '',
            quantityPresentation: '',
            amountToRequest: '',
            price: '',
            supplier: '',
            description: null
        }
        this.addCourseClicked = this.addCourseClicked.bind(this)
        this.refreshCourses = this.refreshCourses.bind(this)
    }



    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        CourseDataService.retrieveAllCourses()
            .then(
                response => {
                    //console.log(response);
                    this.setState({ materials: response.data })
                }
            )
    }

    addCourseClicked() {
        console.log("state "+ this.state)
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


    render() {
        return (
            <div className="container">
                <h3>Add Materials</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
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
                            handleChange={this.handleChange}
                            value={this.presentation}
                        />
                        <InputForm
                            name="measurementType"
                            label="measurementType"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.measurementType}
                        />
                        <InputForm
                            name="dimensions"
                            label="dimensions"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.dimensions}
                        />
                        <InputForm
                            name="quantityPresentation"
                            label="quantityPresentation"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.quantityPresentation}
                        />
                        <InputForm
                            name="amountToRequest"
                            label="amountToRequest"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.amountToRequest}
                        />
                        <InputForm
                            name="price"
                            label="price"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.price}
                        />
                        <InputForm
                            name="supplier"
                            label="supplier"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.supplier}
                        />
                        <InputForm
                            name="description"
                            label="description"
                            type="text"
                            handleChange={this.handleChange}
                            value={this.description}
                        />
                    </table>
                    <div className="row">
                        <button className="btn btn-success" >Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddMaterialForm