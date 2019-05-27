const addCsrf = object => {
  const token = document.querySelector('meta[name=csrf-token]').content;
  const key = document.querySelector('meta[name=csrf-param]').content;
  object[key] = token;
  return object;
};

export const fetchCourses = async () => {
  const response = await fetch("/courses", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });
  const courses = await response.json();
  return courses;
};

export const addCourse = async (title, description) => {
  const response = await fetch("/courses", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    method: "POST",
    body: JSON.stringify(addCsrf({course: {title, description}})),
  });
  const course = await response.json();
  return course.course;
};
