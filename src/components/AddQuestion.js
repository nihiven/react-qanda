import { useState } from 'react';

const AddQuestion = ({ onAdd, user }) => {
  const [text, setText] = useState('');
  const [askedBy, setAskedBy] = useState(user);

  const onSubmit = (e) => {
    e.preventDefault(); // stops from submitting to a page
    if (!text) {
      alert('Please enter a question.');
      return;
    }
    onAdd({ text, askedBy });
    setText('');
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>
          Question from <span className='site-user'>{askedBy}</span>:
        </label>
        <input
          type='text'
          placeholder='What do you want to ask about?'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <input
        type='submit'
        value='Ask Question'
        className='btn btn-block'
        style={{ backgroundColor: 'green' }}
      />
    </form>
  );
};

export default AddQuestion;
