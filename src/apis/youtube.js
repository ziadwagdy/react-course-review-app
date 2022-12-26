import axios from 'axios';

const KEY = "AIzaSyAt3mMvC9rkSh4ueb6giNjLRIBH3JdELIM";

export default axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
