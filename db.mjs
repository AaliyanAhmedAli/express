
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://aliyanchipa12:aaliyan234@cluster0.eycrirb.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp'
, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model('User', userSchema);

export default mongoose;