/*import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}*/

import { Request, Response} from "express";
import {Experience} from "./model/experience";
import {experienceDAO} from './loginController';
const experienceController = async (req:Request,res:Response)=>{


    try {
            const result = await experienceDAO.getexperiences();

            result
                ? res.status(201).json(result)
                : res.status(500).send("Failed to create a new user.");

    } catch (error: any) {

        res.status(400).send(error.message);
    }
}

export default experienceController;
