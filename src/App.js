import { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Questions from './components/Questions';
import AddQuestion from './components/AddQuestion';

function App() {
  const siteUser = 'nihiven';

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
      answered: false,
    },
  ]);

  const addQuestion = (question) => {
    console.log(question);
  };

  // delete question
  const deleteQuestion = (id) => {
    console.log('delete', id);
    // filter does a foreach on every object in questions
    // and passes the object as question to the function
    // there is an implied return after =>
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const toggleAnswered = (id) => {
    console.log('reminder', id);
    setQuestions(
      questions.map((question) =>
        question.id === id
          ? { ...question, answered: !question.answered }
          : question
      )
    );
    // filter for id and toggle when id matches?
  };

  return (
    <div className='container'>
      <Header />
      <AddQuestion onAdd={addQuestion} user={siteUser} />
      {questions.length > 0 ? (
        <Questions
          questions={questions}
          onDelete={deleteQuestion}
          onToggle={toggleAnswered}
        />
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
