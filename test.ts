import express, { Request, Response } from 'express'; // Import express and types

const app = express();

app.get('/', (req: Request, res: Response) => {
  console.log("hello, testtt")
  res.send('hellope, odin!'); // Send a response
});

app.listen(3000, () => {
  console.log(`run at : http://localhost:3000`);
});
