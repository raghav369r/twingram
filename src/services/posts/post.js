import axios from "axios";
import { Feed_URL, Post_URL } from "../../utils/endPoints";

export const addPost = async (data) => {
    try{
        const res=await axios.post(Post_URL,{...data});
        return res.data;
    }catch(ex){
        return {error:ex};
    }
};

export const getFeed=async (data)=>{
    try{
        const res=await axios.get(Feed_URL);
        return res.data;
    }catch(ex){
        console.log(ex);
        return ex;
    }
}