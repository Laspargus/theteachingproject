export const fetchCurrentStudent = async () => {
  const studentsResponse = await fetch('/students', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const studentsJSON = await studentsResponse.json();
  return studentsJSON.student;
};