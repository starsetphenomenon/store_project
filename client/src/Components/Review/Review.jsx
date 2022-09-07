import './Review.scss';
import { React, useEffect, useState, useContext } from 'react';
import { DataContext } from '../../App';
import PopUp from '../PopUp/PopUp';

export default function Review({ data: revDB, currentItemID }) {

    const { data, setData } = useContext(DataContext);

    const [reviews, setReviews] = useState([]);

    const [newReview, setNewReview] = useState({});

    useEffect(() => {
        setReviews(revDB);
    }, [revDB])

    const reviewInput = (e) => {
        setPopUp(false)
        let date = new Date();
        setNewReview({
            ...newReview,
            [e.target.name]: e.target.value,
            date: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`,
            time: `${date.getHours()}:${date.getMinutes()}`,
            rating: rating
        });
    }

    const [popUp, setPopUp] = useState(false);

    const addNewReview = () => {
        setPopUp(false)
        if (!newReview.name || !newReview.message) {
            setPopUp(true)
            return
        }
        let newData = data.filter(item => +item.id !== +currentItemID);
        let item = data.find(item => +item.id === +currentItemID);
        item.reviews = [
            ...reviews,
            newReview
        ];
        newData = [
            ...newData,
            item,
        ]
        setData(newData); // new data with reviews ~~~~~~~~~~~~~~
        fetch('http://localhost:3001/updateItem', { // sending new data to server ~~~~~~~~~~~~~~~
            method: 'POST',
            body: JSON.stringify(newData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(db => {
                setData(db)
            });
    }

    // RATING ~~~~~~~~~~~~~~~~

    const [rating, setRating] = useState(1);
    const [ratingHover, setRatingHover] = useState(undefined);
    const stars = Array(5).fill(0);

    const handleRating = value => {
        setRating(value)
        setNewReview({
            ...newReview,
            rating: value
        })
    }

    const handleRatingOnOver = newHoverValue => {
        setRatingHover(newHoverValue)
    };

    const handleRatingOnLeave = () => {
        setRatingHover(undefined)
    }

    const handleClassOnRating = (review) => {
        if (review.rating > 4) {
            return 'item best'
        }
        if (review.rating < 2) {
            return 'item worst'
        }
        return 'item'
    }

    // RATING ~~~~~~~~~~~~~~~~

    return (
        <div className="reviews">
            <div className="title">Отзывы о товаре:</div>
            <div className="items">
                {reviews?.map((review, ind) => {
                    return (
                        <div key={ind} className={handleClassOnRating(review)}>
                            <div className="info">
                                <div className="name">{review.name}</div>
                                <div className="date">
                                    <div className="rates">
                                        {Array(review.rating).fill(0).map((_, i) => {
                                            return (<div key={i}>&#9733;</div>)
                                        })}
                                    </div>
                                    <span>{review.date}</span>
                                    <span>{review.time}</span>
                                </div>
                            </div>
                            <div className="msg">{review.message}</div>
                        </div>
                    )
                })}
            </div>
            <div className="add">
                <PopUp popUp={popUp} setPopUp={setPopUp}>Заполните все поля!</PopUp>
                <h3>Добавить отзыв</h3>
                <div className="revName">
                    <label htmlFor="name">Имя</label>
                    <input onChange={reviewInput} spellCheck="false" name="name" type="text" />
                </div>
                <div className="revMsg">
                    <label htmlFor="message">Отзыв</label>
                    <textarea onChange={reviewInput} spellCheck="false" name="message" id="" rows="5"></textarea>
                </div>
                <div className="rating">
                    <label htmlFor="message">Оценка: </label>
                    <div className="stars">
                        {stars.map((_, ind) => {
                            return (
                                <div key={ind} className={(ratingHover || rating) > ind ? 'star yellow' : 'star'}
                                    onClick={() => handleRating(ind + 1)}
                                    onMouseOver={() => handleRatingOnOver(ind + 1)}
                                    onMouseLeave={handleRatingOnLeave}>&#9733;</div>
                            )
                        })}
                    </div>
                </div>
                <button onClick={addNewReview} type="button">Отправить</button>
            </div>
        </div>
    )
}
