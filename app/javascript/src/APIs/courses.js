export const fetchCoursesCount = async () => {
const response = await fetch('/courses', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const courseCount = await response.json()
  return courseCount;
};