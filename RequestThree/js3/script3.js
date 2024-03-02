// jQuery Request
// almost based on promises. Similar to fetch with different syntax

'use strict';

// //////// code is assisted with gemini ai

// Accessing the URL:

// To access the URL used for the request, you'll need to use the url property directly within the $.ajax configuration object

// Explanation:

// The url property within $.ajax holds the actual URL used for the request.
// The response object in the success callback contains the data returned from the server, not URL-related information.
// Using this.url within the success callback references the url property from the $.ajax configuration.

// Key Points:

// Use this.url to access the request URL in jQuery AJAX's success callback.
// The responseURL property is a feature of the native Fetch API, not jQuery AJAX.
//Understand the differences in response objects between different AJAX methods.

$.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    success: function(response) {
        console.log("Request URL:", this.url);  // Access the URL here
        console.log("Response Data:", response);
    },
    error: function(error) {
        console.error("Error:", error);
    }
});

