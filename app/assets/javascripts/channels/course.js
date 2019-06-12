window.App.course = window.App.cable.subscriptions.create(
  'CourseChannel',
  {
    received: data => {},
  }
);