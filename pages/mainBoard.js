import React, { useEffect } from "react";
import { storage, db } from "../config/fire-config";
import { useRouter } from "next/router";
import { useAuth } from "../components/context/authUserContext";
import Post from "../components/Post";

const MainBoard = () => {
  const { authUser, loading } = useAuth();
  const router = useRouter();
  console.log(loading, authUser);
  // Listen for changes on loading and authUser, redirect if needed
  /*  useEffect(() => {
    if (!loading && authUser) router.push("/");
  }, [authUser, loading, router]); */

  useEffect(() => {
    if (authUser) {
      console.log("inside here");
      db.collection("posts").onSnapshot((doc) => {
        console.log(doc.data());
      });
    }
  }, [authUser]);
  
  console.log("mainboard rendered");
  return (
    <>
      <div>You are logged in</div>
      <div>This is a main board where you see all posts</div>
      <Post />
    </>
  );
};

export default MainBoard;
