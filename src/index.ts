import express, { Application, Response, Request } from "express";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => res.send("Hello World"));
app.listen(PORT, () => console.log(`Server on port: ${PORT}`));
