
import 'whatwg-fetch';
import 'babel-polyfill';

const API_HEADERS = {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json, text/plain, */*' 
                    }

class MrcApi {

    static getCourses() {

        return fetch('/api/GetGourses',
               {
                   headers: API_HEADERS
               })
               .then((response) => response.json());
    }

    static getCourse(courseId) {
        console.log('getCourse in the MrcApi..................');
        return fetch('/api/GetGourse',
               {
                   headers: API_HEADERS, 
                   method:  'POST', 
                   body:    JSON.stringify({ courseId: courseId })
               })
               .then((response) => response.json());
    }

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
