import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./index.css";
import AllRoutes from "./Components/AllRoutes";
import LeftDrawer from "./Components/LeftDrawer";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllVideos, getAllWatchLater } from "../src/actions/getAllVideos";
import { getAllLikes } from "./actions/video";

export function App() {
  const [isLeftBarVisible, setIsLeftBarVisible] = useState(true);

  const toggleLeftBar = () => {
    setIsLeftBarVisible(!isLeftBarVisible);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVideos());
    dispatch(getAllWatchLater());
    console.log("getall watch later was called in the app");
  }, [dispatch]);

  return (
    <Router>
      <Navbar toggleLeftBar={toggleLeftBar} />
      <LeftDrawer isVisible={isLeftBarVisible} />
      <AllRoutes />
    </Router>
  );
}