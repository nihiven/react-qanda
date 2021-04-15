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
      answeredBy: '',
      answered: false,
    },
    {
      id: 1,
      text: 'Is there anybody in here?',
      askedBy: 'Samus',
      answeredBy: 'Domino',
      answered: true,
    },
  ]);

  // delete question
  const deleteQuestion = (id) => {
    console.log('delete', id);
    // filter does a foreach on every object in questions
    // and passes the object as question to the function
    // there is an implied return after =>
    setQuestions(questions.filter((question) => question.id !== id))
  }

  const toggleAnswered = (id) => {
    console.log('reminder', id);
  }

  return (
    <div className='container'>
      <Header />
      {questions.length > 0 ? (
        // if ? :
        <Questions questions={questions} onDelete={deleteQuestion} />
      ) : (
        'No Questions to Show'
      )}
      <p>
        <Button text='Add' color='#4477AA' />
      </p>
    </div>
  );
}

export default App;
