// const addCsrf = object => {
//   const token = document.querySelector('meta[name=csrf-token]').content;
//   const key = document.querySelector('meta[name=csrf-param]').content;
//   object[key] = token;
//   return object;
// };

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
