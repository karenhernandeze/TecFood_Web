import React, { useState, useEffect } from 'react'

const EditMaterialForm = props => {
    const [material, setMaterial] = useState(props.currentMaterial)

    useEffect(() => {
        setMaterial(props.currentMaterial)
    }, [props])


    const handleInputChange = event => {
        const { name, value } = event.target

        setMaterial({ ...material, [name]: value })
    }

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

export default EditMaterialForm




/*
import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from "./service/CourseDataService";

class CourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        CourseDataService.retrieveCourse(1, this.state.id)
            .then(response => this.setState({
                description: response.data.description
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a Description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }

        return errors

    }

    onSubmit(values) {
        let username = 1

        let course = {
            id: this.state.id,
            description: values.description
        }

        if (this.state.id === -1) {
            CourseDataService.createCourse(username, course)
                .then(() => this.props.history.push('/material'))
        } else {
            CourseDataService.updateCourse(username, this.state.id, course)
                .then(() => this.props.history.push('/material'))
        }

        console.log(values);
    }

    render() {

        let { description, id } = this.state

        return (
            <div>
                <h3>Course</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, description }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                                  className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default CourseComponent
*/