const express = require("express");

const app = express();
const users = [
  {
    name: "sanju",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json);
app.get("/", function (req, res) {
  const sanjuKidneys = users[0].kidneys;
  const numberOfKindneys = kidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < sanjuKidneys.length; i++) {
    if (sanjuKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }

  const numberOfUnhealthyKidneys = numberOfKindneys - numberOfHealthyKidneys;
  res.json({
    sanjuKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

// middleware.
app.post("/", function (req, res) {
  // console.log(req.body); //undefined
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy,
  });
  res.json({
    msg: "Done!",
  });
});

app.delete("/", function(req,res){
  const newKidneys=[]
  for(let i=0;i<users[0].kidneys.length;i++){
    if(users[0].kidneys[i].healthy)
  }
})

app.listen(3001);
