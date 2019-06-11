import React from 'react';

function ErrorList({ errors }) {
  return (
		 <div>
		     {errors.map((err, i) => (
		     	<div key={i} className="alert alert-info" role="alert">
		       	{err}
		       </div>
		     ))}
		 </div>
  );
}


export default ErrorList;