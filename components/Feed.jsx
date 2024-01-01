"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
      {data.map((post) => (
        <PromptCard
        key={post._id}
        post={post}
        handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <section className="feed font-inter">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username..."
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
          required
        />
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
