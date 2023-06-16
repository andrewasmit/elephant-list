import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewPost } from "../../redux/postSlice";
import { addErrors, clearErrors } from "../../redux/errorSlice";
import { Typography } from "@mui/material";
import { Box, TextField, Button } from "@mui/material";

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
        handleNavigate("/donations");
      } else
        res.json().then((data) => {
          data.errors.map((err) => dispatch(addErrors(err)));
        });
    });
  }

  function handleNavigate(url) {
    dispatch(clearErrors());
    navigate(url);
  }

  function resetPost() {
    dispatch(clearErrors());
    setNewPost({
      title: "",
      description: "",
      user_id: user.id,
      zipcode: "",
    });
    handleNavigate("/donations");
  }

  const errorsToDisplay = errors.map((err, idx) => {
    return (
      <li key={idx} className="error-list-item">
        {err}
      </li>
    );
  });

  // Return JSX
  return (
    <div>
      <Typography variant="h3" className="new-post-header">
        Create a New Post
      </Typography>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleUpload(e)}
      >
        <TextField
          required
          id="outlined-required"
          label="Title"
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
        <br></br>
        <TextField
          required
          id="outlined-required"
          multiline
          rows={3}
          label="Description"
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
        <br></br>
        <TextField
          required
          id="outlined-required"
          label="Zipcode"
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
        <br></br>
        <input
          type="file"
          name="image"
          multiple
          ref={imagesRef}
          className="file-upload"
        />
        <br></br>
        <Button variant="contained" type="submit" sx={{ m: 2 }}>
          Create Post
        </Button>
        <br></br>
        <Button variant="text" onClick={resetPost}>
          Discard New Post
        </Button>
      </Box>

      {errorsToDisplay.length > 0 ? errorsToDisplay : null}
    </div>
  );
}

export default PostForm;
