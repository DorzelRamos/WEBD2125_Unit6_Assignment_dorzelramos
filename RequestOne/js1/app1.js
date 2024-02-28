// XHR Request

'use strict';

const url = '';
// /////// insert URL of api


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
