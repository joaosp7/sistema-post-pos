import express from "express";
import { env } from "./env/env";
import router from './routes/routes'
const app = express();

app.use('/posts', router);


app.get('/ok', (req,res)=> {
  res.status(200).send('ok');
})
app.listen(env.PORT, () => {
  console.log("Server is running on port", env.PORT);
});
