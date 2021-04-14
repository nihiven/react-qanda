import Question from './Question'

const Questions = ({questions, onDelete}) => {
  return (
    <>
      {questions.map((question) => (
        <Question key={question.id} question={question} onDelete={onDelete} />
      ))}
    </>
  );
}



export default Questions
