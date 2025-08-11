//tuples definition : a very strict, ordered list or a fixed-length record where each slot has a predefined purpose and type.


//q - show http statuscode, message, success

type HttpResponse = [number, string, boolean];


// Example 1: A successful response (200 OK)
let successResponse: HttpResponse = [200, "Request was successful", true];

// Example 2: An error response (404 Not Found)
let errorResponse: HttpResponse = [404, "Resource not found", false];


// --- Invalid Examples (these would cause errors) ---

// Error: The order is wrong. The first element must be a number.
// let invalidOrder: HttpResponse = ["OK", 200, true];

// Error: The number of elements is wrong. It needs 3, but only has 2.
// let wrongLength: HttpResponse = [500, "Server Error"];

// Error: The type of the third element is wrong. It must be a boolean.
// let wrongType: HttpResponse = [401, "Unauthorized", "no"];
