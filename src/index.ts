import express from "express";

const app = express();

app.get('/ok', (req,res)=> {
  res.status(200).send('ok');
})
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
