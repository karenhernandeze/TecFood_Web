import React, { Component } from 'react'
import CourseDataService from "./service/CourseDataService";

class ListCoursesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            materials: [],
            message: null
        }
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
        this.updateCourseClicked = this.updateCourseClicked.bind(this)
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
                    console.log("LIST COURSE COMPONENTS DATA: "+response.data);
                    this.setState({ materials: response.data })
                }
            )
    }

    deleteCourseClicked(id) {
        CourseDataService.deleteCourse(id)
            .then(
                response => {
                    this.setState({ message: `Delete of material ${id} Successful` })
                    this.refreshCourses()
                }
            )

    }

    addCourseClicked() {
        this.props.history.push(`/materials`)
    }

    updateCourseClicked(id) {
        //console.log('update ' + id)
        this.props.history.push(`/materials/${id}`)
    }

    render() {
        //console.log('render')
        return (
            <div className="container">
                <h3>All Orders</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Order Number</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.materials.map(
                                material =>
                                    <tr key={material._id}>
                                        <td>{material.CustomerName}</td>
                                        <td>{material.OrderDescription}</td>
                                        <td>{material.OrderNumber}</td>
                                        <td>{material.OrderStatus}</td>

                                        <td><button className="btn btn-success">Update</button></td>
                                        <td><button className="btn btn-warning">Delete</button></td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addCourseClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListCoursesComponent














// import React, { Component } from 'react'
// import CourseDataService from "./service/CourseDataService";
//
// class ListCoursesComponent extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             materials: [],
//             message: null
//         }
//         this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
//         this.updateCourseClicked = this.updateCourseClicked.bind(this)
//         this.addCourseClicked = this.addCourseClicked.bind(this)
//         this.refreshCourses = this.refreshCourses.bind(this)
//     }
//
//     componentDidMount() {
//         this.refreshCourses();
//     }
//
//     refreshCourses() {
//         CourseDataService.retrieveAllCourses()
//             .then(
//                 response => {
//                     //console.log(response.data);
//                     this.setState({ materials: response.data })
//                 }
//             )
//     }
//
//     deleteCourseClicked(id) {
//         CourseDataService.deleteCourse(id)
//             .then(
//                 response => {
//                     this.setState({ message: `Delete of material ${id} Successful` })
//                     this.refreshCourses()
//                 }
//             )
//
//     }
//
//     addCourseClicked() {
//         this.props.history.push(`/materials`)
//     }
//
//     updateCourseClicked(id) {
//         //console.log('update ' + id)
//         this.props.history.push(`/materials/${id}`)
//     }
//
//     render() {
//         //console.log('render')
//         return (
//             <div className="container">
//                 <h3>All Materials</h3>
//                 {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
//                 <div className="container">
//                     <table className="table">
//                         <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Key Name</th>
//                             <th>Presentation</th>
//                             <th>Measurement</th>
//                             <th>Dimensions</th>
//                             <th>Quantity - Presentation</th>
//                             <th>Total Amount</th>
//                             <th>Price</th>
//                             <th>Supplier</th>
//                             <th>Description</th>
//                             <th>Update</th>
//                             <th>Delete</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {
//                             this.state.materials.map(
//                                 material =>
//                                     <tr key={material.id}>
//                                         <td>{material.name}</td>
//                                         <td>{material.keyName}</td>
//                                         <td>{material.presentation}</td>
//                                         <td>{material.measurementType}</td>
//                                         <td>{material.dimensions}</td>
//                                         <td>{material.quantityPresentation}</td>
//                                         <td>{material.amountToRequest}</td>
//                                         <td>{material.price}</td>
//                                         <td>{material.supplier}</td>
//                                         <td>{material.description}</td>
//                                         <td><button className="btn btn-success" onClick={() => this.updateCourseClicked(material.id)}>Update</button></td>
//                                         <td><button className="btn btn-warning" onClick={() => this.deleteCourseClicked(material.id)}>Delete</button></td>
//                                     </tr>
//                             )
//                         }
//                         </tbody>
//                     </table>
//                     <div className="row">
//                         <button className="btn btn-success" onClick={this.addCourseClicked}>Add</button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default ListCoursesComponent