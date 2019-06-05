import React from 'react';
import FlipMove from 'react-flip-move';
import Step from './Step';


function StepList({course, steps, removeStep, updateStep}) {
  return (
  	<div>
    <FlipMove typeName="ul">

      {steps.map(step => (
        <Step
          step={step}
          key={step.id}
          removeStep={removeStep}
          course = {course}
          updateStep = {updateStep}
        />
      ))}
    </FlipMove>
    </div>
  );
}

export default StepList;