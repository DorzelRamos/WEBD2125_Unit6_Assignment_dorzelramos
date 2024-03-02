// XHR Request

'use strict';

// /////// insert URL of API: Open Library does not require an auth key.

// /////// Below is the Endpoint for the API
// const url = 'https://openlibrary.org/search.json';

// /////// Example for URL API
const url = 'https://openlibrary.org/search.json?q=the+lord+of+the+rings.json';

// /////// broken URL will show 404 Error!
// const url = 'https://openlibrary.org/sear'



// ////// No need to write new code when using XHR, functions can be reusable
const updateUISuccess = function(data) {
    console.log(data);
};

const updateUIError = function(error) {
    console.log(error);
}

const responseMethod = function(httpRequest) {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
            updateUISuccess(httpRequest.responseText);
        }
        else {
            updateUIError(httpRequest.status + ': ' + httpRequest.responseText);
        }
    }
}

const createRequest = function(url) {
   const httpRequest = new XMLHttpRequest(url);
   httpRequest.addEventListener('readystatechange', (url) => responseMethod(httpRequest));
   httpRequest.open('GET', url);
   httpRequest.send();
};
createRequest(url);
