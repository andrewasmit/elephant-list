import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewPost } from "../redux/postSlice";

function PostForm() {
  const imagesRef = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    user_id: null,
    zipcode: "",
  });

  function handleUpload(e) {
    e.preventDefault();
    const formData = new FormData();
    const formImages = e.target.image.files;
    formData.append("post[title]", newPost.title);
    formData.append("post[description]",newPost.description);
    formData.append("post[zipcode]", newPost.zipcode);
    formData.append("post[user_id]", parseInt(newPost.user_id));

    for (let i = 0; i < formImages.length; i++) {
      formData.append("post[images][]", formImages[i]);
    }
    postData(formData);
  }

  function postData(data) {
    fetch("/posts", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      // ADD A DISPATCH FOR POSTS TO ADD THIS RES TO THE COLLECTION*****
      .then(data => dispatch(addNewPost(data)))
      .catch((error) => console.log(error));
      setNewPost({
        title: "",
        description: "",
        user_id: user.id,
        zipcode: "",
      });
  }


  // Return JSX
  if (user) {
    return (
      <div>
        <h1>THIS THE PAGE WHERE YOU CAN MAKE A NEW POST</h1>
        <h4>Create New Post</h4>
        <form onSubmit={(e) => handleUpload(e)}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={(e) =>
                setNewPost({
                  title: e.target.value,
                  description: newPost.description,
                  zipcode: newPost.zipcode,
                  user_id: user.id
                })
              }
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={newPost.description}
              onChange={(e) =>
                setNewPost({
                  title: newPost.title,
                  description: e.target.value,
                  zipcode: newPost.zipcode,
                  user_id: user.id
                })
              }
            />
          </label>
          <label>
            Zipcode:
            <input
              type="text"
              name="zipcode"
              value={newPost.zipcode}
              onChange={(e) =>
                setNewPost({
                  title: newPost.title,
                  description: newPost.description,
                  zipcode: e.target.value,
                  user_id: user.id
                })
              }
            />
          </label>
          <input type="file" name="image" multiple ref={imagesRef} />
          <button type="submit">Upload Post</button>
        </form>
      </div>
    );
  } else
    return (
      <div>
        <h3>You must be logged in to make a post</h3>
        <button onClick={()=>navigate('/login')}>Don't have an account?</button>
      </div>
    );
}

export default PostForm;
