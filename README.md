# GraphQL Experiment

Just a quick GraphQL experimentation

Install dependencies

`npm install`

Start the server 

`npm start`

Run the queries in a new terminal tab

`curl -XPOST -H 'Content-Type:application/graphql'  -d '{ people { fname, lname, age } }' http://localhost:3000/graphql`
