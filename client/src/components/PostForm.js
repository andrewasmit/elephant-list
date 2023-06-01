import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PostForm() {
  const imagesRef = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    user_id: user.id,
    zipcode: "",
  });

  function handleUpload(e) {
    e.preventDefault();
    const formData = new FormData();
    const formImages = e.target.image.files;
    formData.append("post[title]", "This is a Test Post");
    formData.append(
      "post[description]",
      "This is a  description of the Test Post"
    );
    formData.append("post[zipcode]", "90210");
    formData.append("post[user_id]", "1");

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
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  console.log(user);

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
