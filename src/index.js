const express = require("express");
require("./db/mongoose");
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(userRouter) //регистрация роута до запроов юзера
app.use(taskRouter) //регистрация до запросов заданий


app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
