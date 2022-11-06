import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [{
    username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
}];
const tweets = [{
    username: "bobesponja",
		tweet: "oiiiiiii"
}, {
    username: "bobesponja",
		tweet: "oiiiiiii"
}, {
    username: "bobesponja",
		tweet: "oiiiiiii"
}];

app.post("/sign-up", (req,res) => {
    let q = users.some(u => u.username === req.body.username);
    if(q){
        res.status(401).send({ message: "Usuario já existe! Escolha outro nome de usuário!" });
    }
    
    else if(!req.body.username || !req.body.avatar){
        res.status(401).send({ message: "Prencha corretamente os campos!" });
    }
    else{
    users.push(req.body);
    res.status(201).send({ message: "ok!" })   
}
})

app.post("/tweets", (req,res) => {
    if(!req.body.username || !req.body.tweet){
        res.status(401).send({ message: "Prencha corretamente os campos!" });
    }
    else{
    tweets.push(req.body);
    res.status(201).send({ message: "ok!" })  
}
    

})

app.get("/tweets", (req,res) => {
   
    const tweetsToShow = [];
    for(let i = 0; i <= 10; i++){
           if(tweets[tweets.length - (i+1)]){
            let t = tweets[tweets.length - (i+1)];
            
            let nt = users.find(u => u.username = t.username);
            let obj = { username: nt.username, avatar: (nt.avatar), tweet: t.tweet,};
            console.log(obj);
            tweetsToShow.push(obj);
            
           }
    
    }
    
    
res.send(tweetsToShow);
return;
})



app.listen(5000);