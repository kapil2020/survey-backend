# Custom Design Dynamic Survey Backend (CDDS)

This repository hosts the backend code for the **Custom Design Dynamic Survey (CDDS)**. The backend handles survey response submissions, stores them in a `responses.json` file, and provides endpoints for data retrieval.

## 🌟 Features
- Accepts survey responses via a POST request.
- Saves survey data to a `responses.json` file for analysis.
- Provides an endpoint to retrieve all survey responses.
- Cross-Origin Resource Sharing (CORS) enabled for seamless integration with the frontend.

## 🚀 Deployment
- Hosted on Render: [Survey Backend API](https://survey-backend-zsdp.onrender.com)

## 📋 API Endpoints
1. **Submit Survey**:
   - **Endpoint**: `/submit-survey`
   - **Method**: `POST`
   - **Description**: Accepts survey responses and appends them to `responses.json`.
   - **Request Example**:
     ```json
     {
       "name": "John Doe",
       "travelMode": "car",
       "response": "This is a test response"
     }
     ```
   - **Response**:
     - `200 OK`: If the response is saved successfully.
     - `500 Error`: If there is an issue saving the response.

2. **Fetch All Responses**:
   - **Endpoint**: `/responses`
   - **Method**: `GET`
   - **Description**: Retrieves all survey responses in JSON format.
   - **Response Example**:
     ```json
     [
       {
         "id": 1,
         "name": "John Doe",
         "travelMode": "car",
         "response": "This is a test response"
       }
     ]
     ```

## 📂 Repository Structure
- **server.js**: Main backend application logic built with Node.js.
- **responses.json**: File where all survey responses are stored.
- **package.json**: Node.js dependencies and scripts.

## 🛠️ Technologies Used
- **Backend Framework**: Node.js with Express.js.
- **Hosting**: Render for API deployment.
- **Data Storage**: Local JSON file (`responses.json`).

## 🔗 Integration with Frontend
This backend interacts with the frontend hosted on Vercel:
- **Frontend Repository**: [Survey Frontend](https://github.com/kapil2020/survey-frontend)

## ✉️ Contact
For questions or issues, contact:
- **Kapil Meena**: [kapil.meena@kgpian.iitkgp.ac.in](mailto:kapil.meen@kgpian.iitkgp.ac.in)
- **Prof. Arkopal Goswami**: [akgoswami@infra.iitkgp.ac.in](mailto:akgoswami@infra.iitkgp.ac.in)

## ❤️ Acknowledgments
- Made with ❤️ by [Kapil Meena](https://sites.google.com/view/kapil-lab/home) and [Prof. Arkopal Goswami](https://www.mustlab.in/faculty).
- Supported by IIT Kharagpur's Department of Infrastructure.

---

