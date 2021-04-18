/** @jsxImportSource @emotion/react */
import { FaTimes } from 'react-icons/fa';
import { css } from '@emotion/react';

const Question = ({ question, onDelete, onToggle }) => {
  const red = css({
    color: 'red',
  });
  const redHoverOrFocus = css({
    '&:hover,&:focus': red,
  });

  return (
    <div
      className={`question ${question.answered ? 'answered' : ''}`}
      onDoubleClick={() => onToggle(question.id)}
    >
      <h3>
        Q: {question.text}
        <FaTimes css={redHoverOrFocus} onClick={() => onDelete(question.id)} />
      </h3>
      <p>
        Asked By: <span className='asked-by'>{question.askedBy}</span>
      </p>
    </div>
  );
};

export default Question;
