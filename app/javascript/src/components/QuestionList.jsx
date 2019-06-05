import React from 'react';
import FlipMove from 'react-flip-move';
import Question from './Question';
import Votes from './Votes';


function QuestionList({course, questions, removeQuestion, updateQuestion, currentStudent}) {
  return (
  	<div>
      <FlipMove typeName="ul">

        {questions.map((question, i) => (
         <div key={i}>
          <Question
            question={question}
            key={question.id}
            removeQuestion={removeQuestion}
            course = {course}
            updateQuestion = {updateQuestion}
          />    
          <Votes
          course = {course}
          question={question}
          key={i}
          updateQuestion = {updateQuestion}
          currentStudent={ currentStudent }
           />
          </div>
        ))}
      </FlipMove>
    </div>	
  );
}

export default QuestionList;