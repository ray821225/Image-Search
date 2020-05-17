import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID gzgDMo6Gpg4q8dPNQLue6fHN4Lr6sZ2gECrA1epLBK0",
  },
});
