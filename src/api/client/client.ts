import { Client } from 'pg';

function client() { 
  const clientService = new Client({
    host: 'localhost',
    port: 5432,
    user: 'course',
    password: 'defjam',
  })
  

  clientService.connect()
    .then(() => console.log("PostgreSQL connected!"))
    .catch((error: Error) => console.log("ERROR: ", error))
 
  return clientService;  
}

export default client;

    