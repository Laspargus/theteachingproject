import React from 'react';
import FlipMove from 'react-flip-move';
import Step from './Step';
import Achievments from './Achievments'


function StepList({course, steps, removeStep, updateStep}) {
  return (
  	<div>
    <FlipMove typeName="ul">
      {steps.map((step, i)=> (
        <div>
          <Step
            step={step}
            key={step.id}
            removeStep={removeStep}
            course = {course}
            updateStep = {updateStep}
          />

        </div>
      ))}
    </FlipMove>
    </div>	
  );
}

export default StepList;