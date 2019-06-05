import React from 'react';
import FlipMove from 'react-flip-move';
import Question from './Question';


function QuestionList({course, questions, removeQuestion, updateQuestion}) {
  return (
  	<div>
    <FlipMove typeName="ul">

      {questions.map(question => (
        <Question
          question={question}
          key={question.id}
          removeQuestion={removeQuestion}
          course = {course}
          updateQuestion = {updateQuestion}
        />
      ))}
    </FlipMove>
    </div>	
  );
}

export default QuestionList;