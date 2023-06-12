import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addErrors, clearErrors } from '../../redux/errorSlice';
import { createReview } from '../../redux/userSlice';

function ReviewForm(props) {
    const dispatch = useDispatch();
    const { user } = useSelector(state=>state.user);
    const { errors } = useSelector(state=>state.errors);
    const [body, setBody] = useState("");
    const [rating, setRating] = useState("**Choose Rating**");

    const errorsToDisplay = errors.map((err, idx)=>{
        return <li key={idx} className="error-list-item">{err}</li>
      })

    function handleSubmitReview(e){
        e.preventDefault();
        dispatch(clearErrors())
        const review = {
            body: body,
            rating: rating,
            user_id: user.id,
            reviewed_id: props.reviewed_id,
            donation_id: props.donation_id
        };

        console.log("Before Fetch: ", review);

        // Fetch to create new review
        fetch('/reviews',{
            method: "POST",
            body: JSON.stringify(review),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then(res=>{
            if(res.ok){
                res.json()
                .then(data=>dispatch(createReview(data)))
                clearReview();
            } else
            res.json().then(data=>{
                data.errors.map(err=> dispatch(addErrors(err)))
              })
        })        
    }

    function clearReview(){
        setBody("");
        setRating("**Choose Rating**")
        props.setWriteReview(false)
        dispatch(clearErrors())
    }

  return (
    <div>
        <h3>Write a review for this user</h3>
        <form onSubmit={handleSubmitReview}>
            <label>
                Review: 
                <input type="text" value={body} onChange={e=>setBody(e.target.value)}/>
            </label>
            <select value ={"**Choose Rating**"} onChange={e=>setRating(e.target.value)}>
                <option value={null} disabled>**Choose Rating**</option>
                <option value={1}>1 - ⭐</option>
                <option value={2}>2 - ⭐⭐</option>
                <option value={3}>3 - ⭐⭐⭐</option>
                <option value={4}>4 - ⭐⭐⭐⭐</option>
                <option value={5}>5 - ⭐⭐⭐⭐⭐</option>
            </select>
            <input type="submit" />
        </form>
        {errorsToDisplay}
        <button onClick={()=>clearReview()}>Discard Review</button>
    </div>
  )
}

export default ReviewForm