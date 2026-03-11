import express from "express";
import cookiesParser from "cookie-parser";

const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookiesParser());

app.get("/", (req, res) => {
    res.json({
        msg: "Welcome, back"
    })
});

export default app;