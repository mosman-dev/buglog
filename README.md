Using json-server as a fake REST API for the backend

## json-server

Use Postman to send GET request to localhost:5000/logs & /techs to test
Can send POST request with Content-Type application/json to /techs for example:
{
"firstName": "Me",
"lastName": "Moo"
}

Which returns :

{
"firstName": "Me",
"lastName": "Moo",
"id": 4  
}

NOTE: id was automatically incremented

## Set up proxy in package.json to localhost:5000
