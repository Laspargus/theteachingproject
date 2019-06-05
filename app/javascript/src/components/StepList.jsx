import React from 'react';
import FlipMove from 'react-flip-move';
import Step from './Step';
import Achievements from './Achievements'

function StepList({course, steps, removeStep, updateStep}) {
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
          />
          <Achievements
            course={course}
             step={step}
             key={i}
          />
        </div>
      ))}
    </FlipMove>
    </div>	
  );
}

export default StepList;