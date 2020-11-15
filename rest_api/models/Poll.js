import mongoose from 'mongoose';

const PollSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
        },
    ja: {
        type: String,
        default: "ja"
    },
    nei: {
        type: String,
        default: "nei"
    },
    
    jaVotes: [String]
    ,

    neiVotes: [String]
    ,
    date: {
        type: Date,
        default: Date.now
    }
});

const Poll = mongoose.model('Poll', PollSchema);

export default Poll;
