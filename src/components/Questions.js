import Question from './Question';

const Questions = ({ questions, onDelete, onToggle }) => {
  return (
    <>
      {questions.map((question) => (
        <Question
          key={question.id}
          question={question}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Questions;
