// ///////// fetch()
// anytime a fetch(url) to any HTTP response, it's either resolve(value) or reject(error)
// resolve(value) = state:"fufilled" and result:value
// reject(error) = state:"rejected" and result:error. *fetch only rejects when a network issue prevents a request from being executed
// response object puts out a status: 200 with "OK" statusText. Satus code from 200-299.
// Otherwise if the status is anything else it becomes statusText: "Forbidden"

'use strict';

// ///////// *remember to define your variables and methods
const updateUISuccess = function(data) {
    console.log(data);
};
const updateUIError = function(error) {
    console.log(error);
};
const url = 'https://jsonplaceholder.typicode.com/posts' //list of resources url

const handleErrors = function(response) {
    if(!response.ok) {
        throw (response.status + ': ' + response.statusText);
    }
    return response.json();
}


// const responseMethod = function(httpRequest) {
//     if (httpRequest.readyState === 4) {
//         if (httpRequest.status === 200) {
//             updateUISuccess(httpRequest.responseText);
//         }
//         else {
//             updateUIError(httpRequest.status + ': ' + httpRequest.responseText);
//         }
//     }
// }
// ///////// you can pass function names in parameter 
const responseMethod = function(httpRequest, succeed, fail) {
    if (httpRequest.readyState === 4) {
        if (httpRequest.status === 200) {
            succeed(httpRequest.responseText);
        }
        else {
            fail(httpRequest.status + ': ' + httpRequest.responseText);
        }
    }
}

// ///////// this fetches a list of resources
//fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// ///////// this fetches a single resource with a userID of 1
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// ///////// Fetch Request: testing error - you get a TypeError saying "failed to fetch"
// fetch('https://jsonplaceholder.picode.com/posts/1')
// //////// You get a RefferenceError saying "handleErrors is not defined", so commit for now
    // .then(function(response) {
    // return handleErrors(response);
    // })
    // .then(function(data) {
    // return updateUISuccess(data);
    // })
    // .catch(function(error) {
    // return updateUIError(error);
    // });

// ///////// Fetch Request: status - you get status:200 "ok" back in console
// fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(function(response) {
    // return handleErrors(response);
    // })
    // .then(function(data) {
    // return updateUISuccess(data);
    // })
    // .catch(function(error) {
    // return updateUIError(error);
    // });

// /////////// Fetch Request but with arrow functions
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => handleErrors(response))
    .then((data) => updateUISuccess(data))
    .catch((error) => updateUIError(error));

// /////////// createRequest
const createRequest = function(url) {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {console.log(data)});
};

// /////////// createRequest with parameters
// const createRequest = function(url, succeed, fail) {
//     const httpRequest = new XMLHttpRequest(url);
//     httpRequest.addEventListener('readystatechange', (url) => responseMethod(httpRequest, succeed, fail));
//     httpRequest.open('GET', url);
//     httpRequest.send();
//  };
// ///////////




