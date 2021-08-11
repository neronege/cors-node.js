const data = { mail: 'musatafaegemen@gamil',
password:123456 };

fetch('https://api.minimumcrm.com/dev/MinimumCRMUserGatewayWS/functions/authenticate', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

