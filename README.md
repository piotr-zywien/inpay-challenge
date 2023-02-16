# inpay-challenge

## Introduction

The [InPay Coding Challenge](https://backend-talntcast.s3.amazonaws.com/media/public/mediastorage/fcFtQ5nS8_s6urG_jWaThDljOHWa_3nToqM62G0itHk.pdf) consisted of implementing a [business signup flow design](https://xd.adobe.com/view/332d3199-9fd9-4c35-9e24-d3895f0ec2ee-667e/?fullscreen) to within 4-ish hours of work. That being said, this is not a finished product by any means.

## Challenges / Gaps

The design came without styling accessible, thus I went to the inpay.com website to approximate the look and feel of the design. The unfinished product thus does not look exactly like the design. Would have been nice to have:

- Styling explicitly provided
- Assets
- A better idea about the form's behavior beyond the mockup

## Stack

The code uses the following frameworks and tech:

- Written (mostly) in TypeScript
- Uses React for single-page web app
- Uses MaterialUI for UI components
- Uses JSS for styling
- Uses WebPack for bundling
- Uses ExpressJS to mock up a backend service 

## How to run

0. Before you do anything make sure you have NodeJS installed and whn you do, run the command `npm install` in the root of the project

1. The messier option (Backend and Frontend in *development mode* separately)
  - Run the Backend: run `node backed` from the root of the project (*this will provide a backend server on port* **1186**)
  - Run the Frontend: run `npm run start` from the root of the project (*this will run the web app on port* **2011**)
 
 2. The more elegant option (Backend and Bundle in *production mode*)
  - Run the Backend only: run `npm run serve` (*which will run the frontend and backend in the same domain on port* **1186**)
  - Navigate to http://localhost:1186 in your web browser
  
## Things missing
  
As this is not finished code, there are a few things missing, and stuff that could be implemented in the future, and here are a few of them:

- Use React Redux and React Toolkit
- Provide a "real" backend with proper endpoints
- Implement file uploading
- Use custom font and branding
- Miscellaneous fixes and polish
