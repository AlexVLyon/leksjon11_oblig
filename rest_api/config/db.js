import mongoose from 'mongoose';

//KOBLER TIL DB PÅ NETT atlas

const connectDatabase = async () => {
  let dbCon;
  try {
    dbCon = await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log(error.message);
  }

  console.log(`Connected to mongodb ${dbCon.connection.host}`);
};

export default connectDatabase;
