import React, { useEffect, useState } from 'react';
import { IoStar } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import { addFeedbackToLocalStorage, getFeedbacksFromLocalStorage } from '../services/localStorage';
import Button from './Button';
import Input from './Input';
import Rating from './Rating';

import styles from '../styles/components/Feedback.module.scss';

const feedbackTemplate = {
  id: '',
  name: '',
  email: '',
  message: '',
};

function Feedback() {
  const { id } = useParams();

  const [feedbackList, setFeedbackList] = useState([]);
  const [feedback, setFeedback] = useState({ ...feedbackTemplate, id });

  const onInputChange = ({ target: { value, name } }) => {
    setFeedback({ ...feedback, [name]: value });
  };

  const onSubmitFeedback = () => {
    addFeedbackToLocalStorage(feedback);
    setFeedbackList((prev) => [...prev, feedback]);
    setFeedback({ ...feedbackTemplate, id });
  };

  useEffect(() => {
    const feedbacks = getFeedbacksFromLocalStorage();
    setFeedbackList(feedbacks.filter((f) => f.id === id));
  }, []);

  return (
    <section className={styles.feedback}>
      <h2 className={styles.title}>Avalie este produto</h2>

      <div className={styles.rating_form}>
        <div>
          <Input
            placeholder="Nome"
            name="name"
            value={feedback.name}
            onChange={(e) => onInputChange(e)}
          />
          <Input
            placeholder="Email"
            name="email"
            value={feedback.email}
            onChange={(e) => onInputChange(e)}
          />

          <Rating onInputChange={onInputChange} />
        </div>
        <textarea
          name="message"
          value={feedback.message}
          onChange={(e) => onInputChange(e)}
        />

        <Button
          placeholder="Enviar Feedback"
          onClick={onSubmitFeedback}
        />
      </div>

      {
        feedbackList.map((feedbackItem) => (
          <div
            key={feedbackItem.name}
            className={styles.feedback_given}
          >
            <p className={styles.username}>{feedbackItem.name}</p>
            <p className={styles.email}>{feedbackItem.email}</p>
            <p className={styles.rating}>
              {feedbackItem.rating}
              <IoStar />
            </p>
            <p className={styles.message}>{feedbackItem.message}</p>
          </div>
        ))
      }
    </section>
  );
}

export default Feedback;
