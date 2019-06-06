const addCsrf = object => {
  const token = document.querySelector('meta[name=csrf-token]').content;
  const key = document.querySelector('meta[name=csrf-param]').content;
  object[key] = token;
  return object;
};

export const fetchAchievements = async (course_id, step_id) => {
const response = await fetch(`/courses/${course_id}/steps/${step_id}/achievements`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const achievements = await response.json()
  return achievements;
};

export const addAchievement = async (course_id, step_id, student_id) => {
  const achievementResponse = await fetch(`/courses/${course_id}/steps/${step_id}/achievements`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
      },
      body: JSON.stringify(addCsrf({ student_id, step_id })),
  });
  const achievement = await achievementResponse.json();
  return achievement;
};

export const removeAchievement = async (course_id, step_id, student_id, achievement_id) => {
  const achievementResponse = await fetch(`/courses/${course_id}/steps/${step_id}/achievements/${achievement_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(addCsrf({})),
  });
  const achievement = await achievementResponse.json();
  return achievement.achievement;
};
