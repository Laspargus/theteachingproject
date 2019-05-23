
const addCsrf = object => {
  const token = document.querySelector('meta[name=csrf-token]').content;
  const key = document.querySelector('meta[name=csrf-param]').content;
  object[key] = token;
  return object;
};

export const fetchCourses = async () => {
const response = await fetch('/courses', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const courses = await response.json()
  return courses;
};


export const addCourse = async ({title, description}) => {

    const courseResponse = await fetch('/courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(addCsrf({course: { title, description } })),
    });
    const course = await courseResponse.json();
    return course.course;
}
