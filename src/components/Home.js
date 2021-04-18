import { useState, useEffect } from 'react';

import Header from './Header';
import Questions from './Questions';
import AddQuestion from './AddQuestion';
import Footer from './Footer';

const Home = ({ siteUser }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [questions, setQuestions] = useState([]);

  // useEffects
  // runs after every RENDER (this is when the DOM is ready)
  // the anon function passed to useEffect IS the effect
  useEffect(() => {
    // you have to make this a function so you can give it async property?
    const getQuestions = async () => {
      const questionsFromServer = await fetchQuestions();
      setQuestions(questionsFromServer);
    };

    getQuestions();
  }, []); // you can pass vars/props in the array (2nd arg) and it will only
  // fire if the value changes since the last useEffect call

  const fetchQuestions = async () => {
    const result = await fetch('http://localhost:5000/questions');
    const data = await result.json();
    return data;
  };

  const fetchQuestion = async (id) => {
    const result = await fetch(`http://localhost:5000/questions/${id}`);
    const data = await result.json();
    return data;
  };

  const addQuestion = async (question) => {
    // console.log(question);

    const response = await fetch('http://localhost:5000/questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(question),
    });

    const data = await response.json(); // data is the new task
    // console.log(data);
    setQuestions([...questions, data]);
  };

  // delete question
  const deleteQuestion = async (id) => {
    // console.log('delete', id);

    await fetch(`http://localhost:5000/questions/${id}`, { method: 'DELETE' });

    // filter does a foreach on every object in questions
    // and passes the object as question to the function
    // there is an implied return after =>
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const toggleAnswered = async (id) => {
    // console.log('toggle answered', id);
    const questionToToggle = await fetchQuestion(id);
    const questionUpdated = {
      ...questionToToggle,
      answered: !questionToToggle.answered,
    };

    // console.log('toggle answered original data', questionToToggle);
    // console.log('toggle answered updated data', questionUpdated);

    // still fine
    setQuestions(
      questions.map((question) =>
        question.id === id
          ? { ...question, answered: !question.answered }
          : question
      )
    );

    const response = await setQuestion(questionUpdated);
    // console.log(response);
    return response.answered === questionUpdated.answered ? true : false;
  };

  const setQuestion = async (question) => {
    // console.log('set question data', question);
    const response = await fetch(
      `http://localhost:5000/questions/${question.id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(question),
      }
    );

    const data = await response.json();
    // console.log('set question return data', data);
    return data;
  };

  return (
    <div>
      <Header
        onAdd={() => setShowAddForm(!showAddForm)}
        showAddForm={showAddForm}
      />
      {showAddForm && <AddQuestion onAdd={addQuestion} user={siteUser} />}
      {questions.length > 0 ? (
        <Questions
          questions={questions}
          onDelete={deleteQuestion}
          onToggle={toggleAnswered}
        />
      ) : (
        'No Questions to Show'
      )}
      <Footer />
    </div>
  );
};

export default Home;
