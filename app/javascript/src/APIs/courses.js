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


export const showCourse = async (id) => {
const response = await fetch(`/courses/${id}`, {
	  method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  const course = await response.json()
  return course;
};

export const addCourse = async (title, description) => {
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

export const removeCourse = async id => {
  const courseResponse = await fetch(`/courses/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(addCsrf({})),
  });
  const course = await courseResponse.json();
  return course.course;
};


export const updateCourse = async ( id, title, description ) => {
  const courseResponse = await fetch(`/courses/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(addCsrf({ course: { title, description } })),
  });
  const courseJSON = await courseResponse.json();
  return courseJSON.course;
};