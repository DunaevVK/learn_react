import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostService from "../API/PostService";
import {useFetch} from "../hooks/useFetch";
import Loader from "../UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, postError] = useFetch(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isCommentLoading, commentError] = useFetch(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            <h1>Вы попали на страницу поста с ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>Комментарии</h1>
            {isCommentLoading
                ? <Loader/>
                : <div>
                    {comments.map(comment =>
                        <div style={{marginTop: 15}} key={comment.id}>
                            <h4>{comment.email}</h4>
                            <div>{comment.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>

    );
};

export default PostIdPage;