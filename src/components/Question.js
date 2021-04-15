/** @jsxImportSource @emotion/react */
import { FaTimes } from 'react-icons/fa';
import { css } from '@emotion/react';

const Question = ({ question, onDelete }) => {

  const red = css({
    color: 'red',
  });
  const redHoverOrFocus = css({
    '&:hover,&:focus': red, 
  });


  return (
    <div className='question'>
      <h3>
        Q: {question.text}
        <FaTimes css={redHoverOrFocus} onClick={() => onDelete(question.id)} />
      </h3>
      <p className="asked-by">
        Asked By: <span className='asker'>{question.askedBy}</span>
      </p>
    </div>
  );
};

export default Question;
