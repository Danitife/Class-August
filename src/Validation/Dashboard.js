import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { fetchStart, fetchFailed, fetchSuccess } from '../Redux/PostSlice'
import { useDispatch, useSelector } from 'react-redux'

const Dashboard = () => {
    const [username, setusername] = useState("")
    const [title, settitle] = useState("")
    const [content, setcontent] = useState("")
    const dispatch = useDispatch()
    
    const {post, fetchErr, fetchingPost} = useSelector((state)=> state.PostBlog)
    useEffect(() => {
      let user = JSON.parse(localStorage.getItem("AppToken"))
      setusername(`${user.f_name} ${user.l_name}`)
        
    }, [])
    useEffect(()=>{
        dispatch(fetchStart())
        axios.get("http://localhost:1234/posts")
         .then((res)=>{
             console.log(res.data);
             dispatch(fetchSuccess(res.data))
         }).catch((err)=>{
             dispatch(fetchFailed(err))
             console.log(err);
         })
    },[])

    // const fetchPost = ()=>
    //     dispatch(fetchStart())
    //     axios.get("http://localhost:1234/posts")
    //     .then((res)=>{
    //         console.log(res.data);
    //         dispatch(fetchSuccess(res.data))
    //     }).catch((err)=>{
    //         dispatch(fetchFailed(err))
    //         console.log(err);
    //     })
    const addPost = (e)=>{
        e.preventDefault();
        let data = {
            author: username,
            title: title,
            content: content
        }
        axios.post("http://localhost:1234/posts", data)
        .then((res)=>{
            console.log(res.data);
            alert("Post created")
        }).catch((err)=>{
            console.log(err);
            alert("Something went wrong")
        })
    }

  return (
    <>
        <h1>Welcome to your Dashboard {username}</h1>
        <form action="">
            <h4>What are you telling us today??</h4>
            <input onChange={(e)=>settitle(e.target.value)} type="text" placeholder='title' /><br /><br />
            <textarea onChange={(e)=>setcontent(e.target.value)} placeholder='Content'></textarea><br /><br />
            <button onClick={addPost}>Add Post</button>
        </form>
        {fetchingPost && "Loading...."}
        {fetchErr && <h1>{fetchErr}</h1>}
        {post && post.map((el, i)=>(
                <div key={i}>
                    {el.content}
                </div>
            ))
        }
    </>
  )
}

export default Dashboard