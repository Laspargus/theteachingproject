export const fetchCourses = async () => {
	const response = await fetch('/courses', {
		headers: {
			"Content-Type": 'application/json',
			Accept: 'application/json'
		},
	});
	const courses = await response.json();
	return courses;
}