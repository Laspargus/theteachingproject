import React from 'react';
import FlipMove from 'react-flip-move';
import Question from './Question';
import Votes from './Votes';



function QuestionList({course, questions, removeQuestion, updateQuestion, currentStudent, currentTeacher}) {
  return (
  	<div>
      <FlipMove typeName="ul">
        {questions.map((question, i) => (
         <div key={i}>
        
          <Question
            question={question}
            key={"question_" + question.id}
            removeQuestion={removeQuestion}
            course = {course}
            updateQuestion = {updateQuestion}
            currentStudent = { currentStudent }
          />   
          <Votes
          course = {course}
          question={question}
          key={"vote_" + i}
          updateQuestion = {updateQuestion}
          currentStudent={ currentStudent }
          currentTeacher={ currentTeacher }
           />
          
          </div>
        ))
      }
      </FlipMove>
    </div>	
  );
}

export default QuestionList;