const addCsrf = object => {
  const token = document.querySelector('meta[name=csrf-token]').content;
  const key = document.querySelector('meta[name=csrf-param]').content;
  object[key] = token;
  return object;
};

export const addAttendance = async (id, email) => {
  const attendanceResponse = await fetch(`/courses/${id}/attendances`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
      },
      body: JSON.stringify(addCsrf({attendance: { email } })),
  });
  const attendance = await attendanceResponse.json();
  return attendance.attendance;
}

export const removeAttendance = async (course_id, id) => {
  const removeAttendanceResponse = await fetch(`/courses/${course_id}/attendances/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(addCsrf({})),
  });
  const attendance = await removeAttendanceResponse.json();
  return attendance.attendance;
};

export const fetchAttendances = async (id) => {
  const response = await fetch(`/courses/${id}/attendances`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const attendances = await response.json()
  return attendances.attendances;
};
