import { useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";
 

function PostForm() {
  const imagesRef = useRef([]);
  const dispatch = useDispatch();

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
    fetch('/posts',{
        method: "POST",
        body: data
    }).then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error));
  }

  function handleLogout(){
    fetch('logout',{
      method: 'DELETE'
    }).then(dispatch(logout()))
  }

  return (
    <div>
      <h1>THIS THE PAGE WHERE YOU CAN MAKE A NEW POST</h1>
      <form onSubmit={ e => handleUpload(e)}>
        <input type="file" name="image" multiple ref={imagesRef} />
        <button type="submit">Upload Post</button>
      </form>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
}

export default PostForm;
