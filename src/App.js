import { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Questions from './components/Questions';

function App() {
  const [questions, setQuestions] = useState([
    {
      id: 0,
      text: 'What am I doing?',
      askedBy: 'JB',
    },
    {
      id: 1,
      text: 'Is there anybody in here?',
      askedBy: 'Samus',
    },
  ]);

  // delete question
  const deleteQuestion = (id) => {
    console.log('delete', id);
  };

  return (
    <div className='container'>
      <Header />
      <Questions questions={questions} onDelete={deleteQuestion} />
      <Button text='Add' color='#4477AA' />
    </div>
  );
}

export default App;
