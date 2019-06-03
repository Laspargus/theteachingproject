const addCsrf = object => {
  const token = document.querySelector('meta[name=csrf-token]').content;
  const key = document.querySelector('meta[name=csrf-param]').content;
  object[key] = token;
  return object;
};

export const fetchSteps = async (id) => {
const response = await fetch(`/courses/${id}/steps`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const steps = await response.json()
  return steps;
};

export const addStep = async (id, title, description) => {
    const stepResponse = await fetch(`/courses/${id}/steps`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(addCsrf({step: { id, title, description } })),
    });
    console.log(id);
    const step = await stepResponse.json();
    return step.step;
};



export const removeStep = async (id, num) => {

console.log(id, num)
  const stepResponse = await fetch(`/courses/${id}/steps/${num}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(addCsrf({})),
  });
  const step = await stepResponse.json();
  console.log('mon step', step)
  return step.step;
};



export const updateStep = async ( id, num, title, description ) => {
	console.log('mon cours a fetcher', id, 'mon étape à fetcher', num)
  const stepResponse = await fetch(`/courses/${id}/steps/${num}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(addCsrf({ step: {id, num, title, description } })),
  });
  const stepJSON = await stepResponse.json();

  return stepJSON.step;
};