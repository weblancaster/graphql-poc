import fetch from 'node-fetch';

export let getClients = () => {
	var url = 'http://www.filltext.com/?rows=5&fname={firstName}&lname={lastName}&age={number|70}&address={addressObject}';

	return fetch(url)
    	.then( (res) => {
        	return res.json();
    	})
    	.then( (data) => {
        	console.log(data);
        	return Promise.resolve(data);
    	});

}