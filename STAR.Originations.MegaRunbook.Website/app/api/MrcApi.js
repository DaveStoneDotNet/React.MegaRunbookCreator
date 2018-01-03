
import 'whatwg-fetch';
import 'babel-polyfill';

const API_HEADERS = {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json, text/plain, */*' 
                    };

class MrcApi {

    // --------------------------------------------------------------------------------------------------------------------

    static getRelease(request) {
        return fetch('/api/GetRelease',
               {
                   headers: API_HEADERS, 
                   method:  'POST', 
                   body:    JSON.stringify(request)
               })
               .then((response) => response.json());
    }

    static getReleaseBlock(blockId) {
        return fetch('/api/GetReleaseBlock',
               {
                   headers: API_HEADERS, 
                   method:  'POST', 
                   body:    JSON.stringify({ blockId: blockId })
               })
               .then((response) => response.json());
    }

    static getActivities(request) {
        return fetch('/api/GetActivities',
               {
                   headers: API_HEADERS, 
                   method:  'POST', 
                   body:    JSON.stringify(request)
               })
               .then((response) => response.json());
    }

    static getReleaseContacts(request) {
        return fetch('/api/GetReleaseContacts',
               {
                   headers: API_HEADERS, 
                   method:  'POST', 
                   body:    JSON.stringify(request)
               })
               .then((response) => response.json());
    }

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

    static getCourseDemos(request) {
        return fetch('/api/GetCourseDemos',
               {
                   headers: API_HEADERS, 
                   method:  'POST', 
                   body:    JSON.stringify(request)
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
            .then((response) => response.json())
            .catch((error) => error);
    }

    // --------------------------------------------------------------------------------------------------------------------

    static getBingAuthorizationToken(apiKey) {
        return fetch('https://api.cognitive.microsoft.com/sts/v1.0/issueToken',
               {
                   headers: {
                                'Content-Length': '0',
                                'Ocp-Apim-Subscription-Key': apiKey
                            }, 
                   method:  'POST'
               })
               .then((response) => {
                    return response;
                }
               );
    }

    // --------------------------------------------------------------------------------------------------------------------

    static getConfig() {

        return fetch('/api/GetConfig',
               {
                   headers: API_HEADERS
               })
               .then((response) => response.json());
    }

    static postSlackMessage(request) {
        return fetch(request.webhookurl,
               {
                   mode:    'no-cors',
                   headers: {
                                'Content-Type': 'application/json'
                            }, 
                   method:  'POST', 
                   body:    JSON.stringify({ text: 'Testing. Please ignore. ' + request.message })
               })
               .then((response) => {
                   return response;
               }
              );
    }

    static sendTwilioMessage(request) {
        return fetch('/api/SendTwilioMessage',
            {
                headers: API_HEADERS, 
                method: 'POST',
                body:   JSON.stringify(request)
            })
            .then((response) => response.json());
    }

    // --------------------------------------------------------------------------------------------------------------------

    static getRfcs(request) {
        return fetch('/api/GetRfcs',
            {
                headers: API_HEADERS, 
                method: 'POST',
                body:   JSON.stringify(request)
            })
            .then((response) => response.json());
    }

    static getRfc(request) {
        return fetch('/api/GetRfc',
            {
                headers: API_HEADERS, 
                method: 'POST',
                body:   JSON.stringify(request)
            })
            .then((response) => response.json());
    }

    static getRunbookTemplates(request) {
        return fetch('/api/GetRunbookTemplates',
            {
                headers: API_HEADERS, 
                method: 'POST',
                body:   JSON.stringify(request)
            })
            .then((response) => response.json());
    }

    static getRunbookTemplate(request) {
        return fetch('/api/GetRunbookTemplate',
            {
                headers: API_HEADERS, 
                method: 'POST',
                body:   JSON.stringify(request)
            })
            .then((response) => response.json());
    }

    static getRunbookSteps(request) {
        return fetch('/api/GetRunbookSteps',
            {
                headers: API_HEADERS, 
                method: 'POST',
                body:   JSON.stringify(request)
            })
            .then((response) => response.json());
    }

    static getRunbookStep(request) {
        return fetch('/api/GetRunbookStep',
            {
                headers: API_HEADERS, 
                method: 'POST',
                body:   JSON.stringify(request)
            })
            .then((response) => response.json());
    }

    static updateRunbookStep(request) {
        return fetch('/api/UpdateRunbookStep',
            {
                headers: API_HEADERS, 
                method: 'POST',
                body:   JSON.stringify(request)
            })
            .then((response) => response.json());
    }

    static getApplicationGroups(request) {
        return fetch('/api/GetApplicationGroups',
            {
                headers: API_HEADERS, 
                method: 'POST',
                body:   JSON.stringify(request)
            })
            .then((response) => response.json());
    }

    static getApplicationLinks(request) {
        return fetch('/api/GetApplicationLinks',
            {
                headers: API_HEADERS, 
                method: 'POST',
                body:   JSON.stringify(request)
            })
            .then((response) => response.json());
    }

    static insertRfc(request) {
        return fetch('/api/InsertRfc',
            {
                headers: API_HEADERS, 
                method: 'POST',
                body:   JSON.stringify(request)
            })
            .then((response) => response.json());
    }

    static getHardCodedApplicationLinks(request) {
        return fetch('/api/GetHardCodedApplicationLinks',
            {
                headers: API_HEADERS, 
                method: 'POST',
                body:   JSON.stringify(request)
            })
            .then((response) => response.json());
    }

}

export default MrcApi;
