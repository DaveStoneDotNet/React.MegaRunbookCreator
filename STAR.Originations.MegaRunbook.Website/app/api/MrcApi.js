
import 'whatwg-fetch';
import 'babel-polyfill';

const API_HEADERS = {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json, text/plain, */*' 
                    }

class MrcApi {

    static getCourses() {

        return fetch('api/GetGourses',
               {
                   headers: API_HEADERS
               })
               .then((response) => response.json());
    }

    static getUser() {

        return fetch('api/GetUserProfile',
               {
                   headers: API_HEADERS
               })
               .then((response) => response.json());
    }

    static getLookups() {

        return fetch('api/GetLookups',
               {
                   headers: API_HEADERS
               })
               .then((response) => response.json());
    }
};

export default MrcApi;
