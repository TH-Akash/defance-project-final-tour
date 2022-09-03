import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Posts from "../Posts/Posts";
import PostShare from "../PostShare/PostShare";
import "./PostSide.css";

const PostSide = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading: postLoading, error } = useSelector((state) => state.postReducer);
  const { allPosts, loading: allPostLoading } = useSelector((state) => state.allPostReducer);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  // useEffect(() => {

  //   axios.get(`http://localhost:5000/posts/${user._id}/timeline`).then((data) => {
  //     console.log(data.data, "post data");
  //   });
  // }, []);

  console.log(posts, "posts");
  return (
    <div className="PostSide">
      {id ? id === user?._id ? <PostShare /> : "" : <PostShare />}

      {allPosts && <Posts loading={allPostLoading} posts={allPosts} />}
    </div>
  );
};

export default PostSide;
