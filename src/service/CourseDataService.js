import axios from 'axios'

//const COURSE_API_URL = 'http://localhost:1111'
//const INSTRUCTOR_API_URL = 'https://tecfood.herokuapp.com/orders'
const INSTRUCTOR_API_URL = 'https://tecfood.herokuapp.com/orders'
//const INSTRUCTOR_API_URL = `${COURSE_API_URL}/materials`

export class CourseDataService {

    async retrieveAllCourses() {
        console.log( "COURSE DATA SERVICE : RETRIEVE ALL COURSES")
        try{
            // const data =  axios.get(`${INSTRUCTOR_API_URL}/`);
          //  delete axios.defaults.headers.common["Referer"];
            const data =  axios.get(INSTRUCTOR_API_URL,
                {
                    headers:{
                        'Content-Type': null,
                        'Host': null
                    }

                });
            console.log((await data).data);
            return data;
        }catch (err) {
            return err.message
        }

    }

    // retrieveCourse(id) {
    //     return axios.get(`${INSTRUCTOR_API_URL}/${id}`).then(res =>{
    //         console.log(res.data + "COURSE DATA SERVICE : RETRIEVE ONE COURSE")
    //         return res.data
    //     })
    // }
    //
    // async deleteCourse(id) {
    //     //console.log('executed service')
    //     return axios.delete(`${INSTRUCTOR_API_URL}/${id}`).then(resp => {
    //         return resp.data
    //     });
    // }
    //
    // // async updateCourse(id, material) {
    // //     //console.log('executed service')
    // //     return axios.put(`${INSTRUCTOR_API_URL}/${id}`, material);
    // // }
    //
    // async createCourse(material) {
    //     //console.log('executed service')
    //     return axios.post(`tecfood.herokuapp.com/orders`, material);
    // }
};

export default new CourseDataService();