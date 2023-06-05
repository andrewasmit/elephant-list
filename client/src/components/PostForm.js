import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewPost } from "../redux/postSlice";
import { addErrors, clearErrors } from "../redux/errorSlice";

function PostForm() {
  const imagesRef = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { errors } = useSelector((state) => state.errors);
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
    formData.append("post[description]", newPost.description);
    formData.append("post[zipcode]", newPost.zipcode);
    formData.append("post[user_id]", parseInt(newPost.user_id));

    for (let i = 0; i < formImages.length; i++) {
      formData.append("post[images][]", formImages[i]);
    }
    postData(formData);
    dispatch(clearErrors());
  }

  function postData(data) {
    fetch("/posts", {
      method: "POST",
      body: data,
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => dispatch(addNewPost(data)));
        setNewPost({
          title: "",
          description: "",
          user_id: user.id,
          zipcode: "",
        });
      } else
      res.json().then(data=>{
        data.errors.map(err=> dispatch(addErrors(err)))
      })
    });
  }
  function handleNavigate(url){
    dispatch(clearErrors())
    navigate(url)
  }

  const errorsToDisplay = errors.map((err, idx)=>{
    return <li key={idx} className="error-list-item">{err}</li>
  })


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
                  user_id: user.id,
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
                  user_id: user.id,
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
                  user_id: user.id,
                })
              }
            />
          </label>
          <input type="file" name="image" multiple ref={imagesRef} />
          <button type="submit">Upload Post</button>
        </form>
        { errorsToDisplay.length > 0 ? errorsToDisplay : null}
      </div>
    );
  } else
    return (
      <div>
        <h3>You must be logged in to make a post</h3>
        <button onClick={() => handleNavigate("/login")}>
          Don't have an account?
        </button>
      </div>
    );
}

export default PostForm;
