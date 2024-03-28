import axios from "axios";
const API = axios.create({ baseURL: `http://localhost:5500/` });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    const profile = JSON.parse(localStorage.getItem("Profile"));
    req.headers.Authorization = `Bearer ${profile.token}`;
  }
  return req;
});

export const login = (authData) => API.post("/user/login", authData);
export const updateChannel = (id, updatedData) =>
  API.patch(`/user/updateChannel/${id}`, updatedData);

export const uplaodVideo = (fileData, config) =>
  API.post("/video/uploadVideo", fileData, config);

export const getAllVideos = () => API.get("/video/getvideos");

export const viewVideo = (id) => API.patch(`/video/view/${id}`);

export const likeVideo = (id, Like) => API.patch(`/video/like/${id}`, { Like });

export const saveVideo = (VideoData) =>
  API.post("/video/watchlater", VideoData);

export const getWatchLater = () => API.get("/video/getallwatchlater");

export const userLiked = (likedData) => API.post("/video/userliked", likedData);

export const getAllLikes = (userId) =>
  API.get("/video/getalllikes", { params: { userId } });

export const history = (historyData) => API.post("/video/history", historyData);

export const gethistory = (userId) =>
  API.get("/video/gethistory", { params: { userId } });