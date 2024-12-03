"use client"
import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GoHeartFill } from "react-icons/go";


interface Comment {
    id: string;
    name: string;
    text: string;
    liked: boolean;
    likeCount: number;
  }

const CommentsSection = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem("comments", JSON.stringify(comments));
    }
  }, [comments]);
  const handleAddComment = () => {
    if (newComment.trim() && userName.trim()) {
      const newCommentObj: Comment = {
        id: Date.now().toString(),
        name: userName.trim(),
        text: newComment.trim(),
        liked: false,
        likeCount: 0,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setUserName("");
    }
  };
  const handleDeleteComment = (id: string) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };
  const handleEditComment = (id: string, text: string) => {
    setEditingId(id);
    setEditText(text);
  };
  const handleSaveEdit = () => {
    if (editingId && editText.trim()) {
      setComments(
        comments.map((comment) =>
          comment.id === editingId ? { ...comment, text: editText } : comment
        )
      );
      setEditingId(null);
      setEditText("");
    }
  };
  const handleCancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };
  const handleToggleLike = (id: string) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              liked: !comment.liked,
              likeCount: comment.liked ? comment.likeCount - 1 : comment.likeCount + 1,
            }
          : comment
      )
    );
  };
  return (
    <>
      <section className="xl:py-5 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full flex-col justify-start items-start lg:gap-14 gap-7 inline-flex">
            <h2 className="w-full text-gray-900 xl:text-2xl text-[16px] font-bold font-inter leading-normal">
              Comments
            </h2>
            <div className="w-full flex-col justify-start items-start gap-5 flex">
              <input
                type="text"
                className="w-full px-5 border-b-[1px] border-gray-300 placeholder-gray-400 text-gray-900 xl:text-[13px] text-[12px] font-normal leading-7 outline-none "
                placeholder="Enter your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <textarea
                className="w-full px-5 border-b-[1px] border-gray-300 placeholder-gray-400 text-gray-900 xl:text-[13px] text-[12px] font-normal outline-none"
                placeholder="Write your thoughts here..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
              <button
                onClick={handleAddComment}
                className="xl:px-4 xl:py-1 px-3 py-[2px] bg-gray-600 hover:bg-gray-800 transition-all duration-700 ease-in-out rounded-md shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
              >
                <span className="xl:px-2 xl:py-px text-white xl:text-[13px] text-[11px]  font-semibold leading-relaxed">
                  Post your comment
                </span>
              </button>
            </div>
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="w-full pb-6 border-b border-gray-300 justify-start items-start gap-2.5 inline-flex"
                >
                  <div className="w-full flex-col justify-start items-start gap-3.5 inline-flex">
                    <div className="w-full justify-start items-start flex-col flex gap-1">
                      <div className="w-full justify-between items-start gap-1 inline-flex">
                        <h5 className="text-gray-900 xl:text-sm text-[14px] font-semibold leading-snug">
                          {comment.name}
                        </h5>
                        <span className="text-right text-gray-500 xl:text-xs text-[11px] font-normal leading-5">
                          Just now
                        </span>
                      </div>
                      {editingId === comment.id ? (
                        <>
                          <textarea
                            className="w-full border-b-[1px] text-[12px] border-gray-500 outline-none resize-none focus:outline-none text-gray-900"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                          ></textarea>
                          <div className="flex gap-2 mt-2">
                            <button
                              onClick={handleSaveEdit}
                              className="px-2 text-[12px] py-[2px] bg-green-500 text-white rounded-md"
                            >
                              Save
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="px-2 text-[12px] py-[2px] bg-gray-400 text-white rounded-md"
                            >
                              Cancel
                            </button>
                          </div>
                        </>
                      ) : (
                        <h5 className="text-gray-800 xl:text-sm text-[12px] font-normal leading-snug">
                          {comment.text}
                        </h5>
                      )}
                    </div>
                    <div className="justify-start items-start gap-5 inline-flex">
                      <button
                        onClick={() => handleEditComment(comment.id, comment.text)}
                        className="w-5 h-5 flex items-center justify-center group"
                      >
                        <FaEdit className="text-orange-500 group-hover:text-orange-700 transition-all duration-700 ease-in-out" />
                      </button>
                      <button
                        onClick={() => handleToggleLike(comment.id)}
                        className="w-7 h-7 flex items-center justify-center group mt-[-3px]"
                      >
                        <GoHeartFill
                        height={20} width={20}
                          className={`${
                            comment.liked ? "text-red-700" : "text-orange-500"
                          } group-hover:text-orange-500 transition-all duration-700 ease-in-out `}
                        />
                        <span className="text-xs text-gray-600 ml-1">{comment.likeCount}</span>
                      </button>
                      <button
                        onClick={() => handleDeleteComment(comment.id)}
                        className="w-5 h-5 flex items-center justify-center group"
                      >
                        <RiDeleteBin6Fill className="text-orange-500 group-hover:text-orange-700 transition-all duration-700 ease-in-out" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommentsSection;