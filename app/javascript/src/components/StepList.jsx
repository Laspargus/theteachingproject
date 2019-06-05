import React from 'react';
import FlipMove from 'react-flip-move';
import Step from './Step';
import Achievements from './Achievements'

function StepList({course, steps, removeStep, updateStep, currentStudent, currentTeacher }) {
  return (
  	<div>
    <FlipMove typeName="ul">
      {steps.map((step, i)=> (
        <div key={i}>
          <Step
            step={step}
            key={step.id}
            removeStep={removeStep}
            course = {course}
            updateStep = {updateStep}
            currentStudent={ currentStudent }
            currentTeacher={ currentTeacher }
          />
          <Achievements
            course={course}
            step={step}
            key={i}
            currentStudent={ currentStudent }
            currentTeacher={ currentTeacher }
          />
        </div>
      ))}
    </FlipMove>
    </div>
  );
}

export default StepList;