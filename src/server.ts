import express, { Application, Request, Response }  from 'express';
import axios from "axios";
import ngrok from "ngrok";

const app : Application = express()
app.use(express.urlencoded({ extended: true }));
const PORT = 8080;


app.get("/", (req: Request, res: Response) => res.send(`
  <html>
    <head><title>Success!</title></head>
    <body>
      <h1>Get req successful..!!!</h1>
      <img src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif" alt="Cool kid doing thumbs up" />
    </body>
  </html>
`));

app.post("/github", (req: Request, res: Response) => {

    const content = ":wave: :wave: Hi Everyone!!  New :star: :star: added to repository ";
    const postUri = `https://discord.com/api/webhooks/986989221577379920/fVkpahzukPyqRVOFutXih5hpFe0rpzOJ-evV6Oy8EkI5QxeNLpLdvD0n_VFjKK8ZFyC6`

    axios
        .post(postUri, { content: content })
        .then(() => console.log("post method successful"))
        .catch((err) => console.log("Error :-> ", err))
})

app.listen(PORT, () => {
    console.log("Server started on Port..",PORT)
})