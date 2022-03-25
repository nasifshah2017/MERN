import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find()
    console.log(postsMessages);
    res.status(200).json(postsMessages);
  } catch(error){
    res.status(404).json({message: error.message})
  }
}

export const createPost = async (req, res) => {
  const body = req.body;
  const newPost = new PostMessage(body);
  try {
    await newPost.save()
    res.status(201).json(newPost);
  } catch(error){
    res.status(409).json({message: error.message})
  }
}

export const updatePost = async (request, response) => {
  const { id: _id } = request.params;
  const post = request.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) return response.status(404).send("No post with that ID");

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});

  response.json(updatePost);
}

export const deletePost = async(request, response) => {

  const { id } = request.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return response.status(404).send("No post with that ID");

  await PostMessage.findByIdAndRemove(id);

  response.json({message: "post deleted successfully"});

}

export const likePost = async (request, response) => {

  const { id } = request.params;

  if(!request.userId) return request.json({message: "Unauthenticated"});

  if(!mongoose.Types.ObjectId.isValid(id)) return response.status(404).send("No post with that ID");

  const post = await PostMessage.findById(id);

  const index = post.likes.findIndex((id) => id === String(request.userId));

  if(index === -1){

    post.likes.push(request.userId) // user likes

  } else {

    post.likes = post.likes.filter(id => id !== String(request.userId));  // user dislikes
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true});

  response.json(updatedPost);

}
