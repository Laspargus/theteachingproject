export const fetchCurrentTeacher = async () => {
  const studentsResponse = await fetch('/teachers', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const teachersJSON = await teachersResponse.json();
  return teachersJSON.teacher;
};