const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT;

app.get("/home", (req, res) => {
  res.write("this homepage");
  res.end();
});

let users = [
  { id: 1, name: "adeoluwa" },
  { id: 2, name: "blessing" },
];

app.get("/users", (req, res) => {
  res.json(200, users);
});

try {
  app.post("/create", (req, res) => {
    const NewUser = req.body;
    users.push(NewUser);
    res.json(200, "user created successfully");
  });
} catch (error) {
  console.error(error);
}

app.put("/user/:id", (req, res) => {
  let found = users.find(function (user) {
    return user.id == parseInt(req.params.id);
  });

  if (found) {
    Object.assign(found, req.body);
    res.json(200, `User updated successfully`);
  } else res.send("user not found");
});


app.delete('/:id', (req, res) =>{
    let deleteUser = users.find(function(user){
         return user.id == parseInt(req.params.id);
    })

    if (deleteUser) {

        let Target = users.indexOf(deleteUser)

        users.splice(Target, 1);
        res.json(200, "user delete successfuly")
    }else return("user not foung")
})
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
