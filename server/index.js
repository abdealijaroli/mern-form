const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const { validateUserSchema } = require('./schema/joiSchemaValidation');
const User = require('./schema/mongoSchema')

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// DB connection
const dbConnect = async () => {
   try {
      await mongoose.connect(process.env.DB_URL, {
         useNewUrlParser: true,
         useUnifiedTopology: true
      }
      );
      console.log("DB connected")
   } catch (error) {
      console.log("DB connectivity error:", error);
      throw new Error(error);
   }
}
dbConnect();

// Routes
app.post('/register', (req, res) => {
   validateUserSchema(req.body);
   const { name, email } = req.body;

   User.findOne({ email: email }, (err, user) => {
      if (user) {
         res.send({ message: "User already registered." })
      } else {
         const user = new User({
            name,
            email
         })
         user.save(err => {
            if (err) {
               res.send(err);
            } else {
               res.send({ message: "Successfully registered!" });
            }
         });
      }
   });



});

app.get('/', (req, res) => {
   res.send("MERN Form");
});


// Server listen
app.listen(process.env.PORT || 9002, () => {
   console.log("Server listening on 9002")
});