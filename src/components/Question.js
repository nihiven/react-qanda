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
        <div>Q:</div>
        {question.text}
        <FaTimes css={redHoverOrFocus} onClick={onDelete} />
      </h3>
      <p>Asked By: {question.askedBy}</p>
    </div>
  );
};

export default Question;
