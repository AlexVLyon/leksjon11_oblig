import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    epost: {
        type: String,
        required: true
        },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

export default User;
