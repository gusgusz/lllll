import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];
const tweetsToShow = []
app.post("/sign-up", (res,req) => {
    
    if(!req.body.username && !req.body.avatar){
        res.sendstatus(401)
    }
    else{
    users.push(req.body);
    res.send("ok")    
}
})

app.post("/tweets", (res,req) => {
    if(!req.body.username && !req.body.tweet){
        res.sendstatus(401)
    }
    else{
    tweets.push(req.body);
    res.send("ok")    
}
    
res.send("ok")
})

app.get("/tweets", (res,req) => {
    const t = [];

    for(let i = 0; i <= 10; i++){
        t.push(tweets[tweets.length - (i+1)])
    }
    
res.send(tweets)
})
app.listen(5000);