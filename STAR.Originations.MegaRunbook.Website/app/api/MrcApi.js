import 'whatwg-fetch';
import 'babel-polyfill';

const API_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*' 
}

let MrcApi = {

    fetchCourses() {
        return fetch('api/GetGourses',
               {
                   headers: API_HEADERS
               })
               .then((response) => response.json());
    }

};

export default MrcApi;
