
import 'whatwg-fetch';
import 'babel-polyfill';

const API_HEADERS = {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json, text/plain, */*' 
                    }

class MrcApi {

    // --------------------------------------------------------------------------------------------------------------------

    static getCourses() {
        return fetch('/api/GetCourses',
               {
                   headers: API_HEADERS
               })
               .then((response) => response.json());
    }

    static getCourse(courseId) {
        return fetch('/api/GetCourse',
               {
                   headers: API_HEADERS, 
                   method:  'POST', 
                   body:    JSON.stringify({ courseId: courseId })
               })
               .then((response) => response.json());
    }

    // ---

    static getAuthorLookups() {
        return fetch('/api/GetAuthorLookups',
               {
                   headers: API_HEADERS
               })
               .then((response) => response.json());
    }

    static getCourseDemos() {
        return fetch('/api/GetCourseDemos',
               {
                   headers: API_HEADERS
               })
               .then((response) => response.json());
    }

    static getCourseDemo(courseId) {
        return fetch('/api/GetCourseDemo',
               {
                   headers: API_HEADERS, 
                   method:  'POST', 
                   body:    JSON.stringify({ courseId: courseId })
               })
               .then((response) => response.json());
    }
    static upsertCourseDemo(course) {
        return fetch('/api/UpsertCourse',
               {
                   headers: API_HEADERS, 
                   method:  'POST', 
                   body:    JSON.stringify({ courseDemo: course })
               })
               .then((response) => response.json());
    }

    // --------------------------------------------------------------------------------------------------------------------

    static getUserProfile() {

        return fetch('/api/GetUserProfile',
               {
                   headers: API_HEADERS
               })
               .then((response) => response.json());
    }

    static getLookups() {

        return fetch('/api/GetLookups',
               {
                   headers: API_HEADERS
               })
               .then((response) => response.json());
    }

    static getData() {

        return fetch('/api/GetData',
               {
                   headers: API_HEADERS
               })
               .then((response) => response.json());
    }
};

export default MrcApi;
