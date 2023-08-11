import mongoose from 'mongoose';

let isConnected = false; // check the connection status

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('Mongo DB URL not found')

    if(isConnected) return console.log('Already Connected to Mongo DB');

    try {
        await mongoose.connect(process.env.MONGODB_URL)
        isConnected: true;

        console.log('Connected to MongoDB')
    } catch (error) {
        console.log(error);
    }
}
