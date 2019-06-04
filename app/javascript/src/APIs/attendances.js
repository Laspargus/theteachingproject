// const addCsrf = object => {
//   const token = document.querySelector('meta[name=csrf-token]').content;
//   const key = document.querySelector('meta[name=csrf-param]').content;
//   object[key] = token;
//   return object;
// };

export const fetchAttendances = async (course_id) => {
const response = await fetch(`/courses/${course_id}/attendances`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const attendances = await response.json()
  return attendances;
};

