
import 'whatwg-fetch';
import 'babel-polyfill';

const API_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*' 
}

let KanbanAPI = {

    fetchCards() {
        return fetch('api/cards',
            {
                 headers: API_HEADERS
            })
            .then((response) => response.json());
    },

    fetchCourses() {
        return fetch('api/GetGourses',
            {
                headers: API_HEADERS
            })
            .then((response) => response.json());
    },

    addCard(card) {
        return fetch('api/cards',             
            {
                method:  'post',
                headers: API_HEADERS,
                body:    JSON.stringify(card)
            }
            ).then((response) => response.json());
    },

    updateCard(card, draftCard) {
        return fetch('api/cards/${card.id}', 
            {
                method: 'put',
                headers: API_HEADERS,
                body:    JSON.stringify(draftCard)
            });
    },

    persistCardDrag(cardId, status, index) {
        return fetch('api/cards/${cardId}', 
            {
                method: 'put',
                headers: API_HEADERS,
                body:    JSON.stringify({status, row_order_position: index})
            });
    },

    addTask(cardId, task) {
        return fetch('api/cards/${cardId}/tasks', 
            {
                method: 'post',
                headers: API_HEADERS,
                body:    JSON.stringify(task)
            })
            .then((response) => response.json());
    },

    deleteTask(cardId, task) {
        return fetch('api/cards/${cardId}/tasks/${task.id}', 
            {
                method: 'delete',
                headers: API_HEADERS
            });
    },

    toggleTask(cardId, task) {
        return fetch('api/cards/${cardId}/tasks/${task.id}', 
            {
                method: 'put',
                headers: API_HEADERS,
                body:    JSON.stringify({done:!task.done})
            });
    }

};

export default KanbanAPI;
