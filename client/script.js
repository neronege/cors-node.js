const data = { mail: 'crm@minimumcrm.com',
password: 'Hermes35**' };

fetch('http://localhost:3000/authenticate', {
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
const date = { beginDate: '2021-08-12',
endDate: '2021-08-13' };

fetch('http://localhost:3000/getEventLogs', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(date),
})
.then(response => response.json())
.then(date => {
  console.log('Success:', date);
})
.catch((error) => {
  console.error('Error:', error);
});


