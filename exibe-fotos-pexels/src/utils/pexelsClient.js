import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
        Authorization: 'D9mcMRoGCNRdi0FTEgxCP906baAejGALXUHTijv7JS3mrTtZMcIjPKOK'
    }
})


