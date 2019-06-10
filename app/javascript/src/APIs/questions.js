const addCsrf = object => {
  const token = document.querySelector('meta[name=csrf-token]').content;
  const key = document.querySelector('meta[name=csrf-param]').content;
  object[key] = token;
  return object;
};

export const fetchQuestions = async (id) => {
	const response = await fetch(`/courses/${id}/questions`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const questions = await response.json()
  return questions;
};

export const addQuestion = async (id, content) => {
  const questionResponse = await fetch(`/courses/${id}/questions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(addCsrf({question: { content } })),
    });
  const question = await questionResponse.json();
  return question.question;
};

export const removeQuestion = async (id, num) => {
  const questionResponse = await fetch(`/courses/${id}/questions/${num}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(addCsrf({})),
  });
  const question = await questionResponse.json();
  return question.question;
};

export const updateQuestion = async ( id, num, content ) => {

  const questionResponse = await fetch(`/courses/${id}/questions/${num}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(addCsrf({ question: {content } })),
  });
  const questionJSON = await questionResponse.json();
  return questionJSON.question;
};