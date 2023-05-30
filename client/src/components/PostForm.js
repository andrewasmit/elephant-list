import { useState, useRef } from "react";

function PostForm() {
  const imagesRef = useRef([]);

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
    // for (const pair of formData.entries()) {
    //   console.log(`${pair[0]}, ${pair[1]}`);
    // }
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

  return (
    <div>
      <form onSubmit={(e) => handleUpload(e)}>
        <input type="file" name="image" multiple ref={imagesRef} />
        <button type="submit">Upload Post</button>
      </form>
    </div>
  );
}

export default PostForm;
