# Express.js - Incorrect Error Handling in Route

This repository demonstrates a common error in Express.js route handling: improperly using `res.send()` within error handling blocks.  This can lead to unexpected behavior or the masking of errors.

## Bug

The original code incorrectly uses `res.send()` to respond with a 404 status.  While this might seem to work, it omits the crucial aspect of setting the status code correctly.  This can cause inconsistencies in how your API reports errors and potential issues when clients expect specific HTTP status codes.

## Solution

The solution showcases the proper way to handle this situation using `res.status()` before sending the response. This clearly conveys the 404 status to the client. This ensures consistency and maintainability in your error handling.

## How to run

1. Clone the repository.
2. Navigate to the repository directory.
3. Run `npm install`.
4. Run `node bug.js` to see the incorrect implementation.
5. Run `node bugSolution.js` to see the corrected implementation.