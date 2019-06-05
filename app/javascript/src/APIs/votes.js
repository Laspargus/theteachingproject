const addCsrf = object => {
  const token = document.querySelector('meta[name=csrf-token]').content;
  const key = document.querySelector('meta[name=csrf-param]').content;
  object[key] = token;
  return object;
};

export const fetchVotes = async (course_id, question_id) => {
	const response = await fetch(`/courses/${course_id}/questions/${question_id}/votes`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const votes = await response.json()
  return votes.votes;
};

export const findVote = async (course_id, question_id) => {
	const response = await fetch(`/courses/${course_id}/questions/${question_id}/findvote`, {
		method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const vote = await response.json()
  return vote.vote;
};



export const addVote = async (course_id, question_id) => {
  const voteResponse = await fetch(`/courses/${course_id}/questions/${question_id}/votes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(addCsrf({})),
    });
  const vote = await voteResponse.json();
  return vote.vote;
};

export const removeVote = async (course_id, question_id, vote_id) => {
  const voteResponse = await fetch(`/courses/${course_id}/questions/${question_id}/votes/${vote_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(addCsrf({})),
  });
  const vote = await voteResponse.json();
  return vote.vote;
};