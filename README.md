# GraphQL Experiment

Just a quick GraphQL experimentation

Install dependencies

`npm install`

Start the server 

`npm start`

Run the queries in a new terminal tab

`curl -XPOST -H 'Content-Type:application/graphql'  -d '{ people { name } }' http://localhost:3000/graphql`

`curl -XPOST -H 'Content-Type:application/graphql'  -d '{ people { name, age } }' http://localhost:3000/graphql`

`curl -XPOST -H 'Content-Type:application/graphql'  -d '{ count }' http://localhost:3000/graphql`
