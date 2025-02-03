# Number Classification API

A RESTful API developed with NestJS that classifies numbers and provides interesting mathematical properties and fun facts.

## List Of Technologies Used
- NestJS
- TypeScript
- Numbers API
- Axios

## Installation

Clone the repository:
```bash
git clone https://github.com/BigLens/hng-1.git

Install Dependencies:
'npm install'

Run the App in your local:
'npm run start:dev'

API Endpoint
GET /api/classify-number?number=371

Request Parameters
number (required): The number to classify.
Response (200 OK)
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}

Response (400 Bad Request)
{
  "number": "alphabet",
  "error": true
}


Deployment
The project is deployed and accessible at 'https://hng-1-6o5c.onrender.com/api/classify-number'