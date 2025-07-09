
const College = ({ data }) => {
  return (
    <div className="college">
        <h2>{data.collegeName}</h2>
        <p>Location: {data.location}</p>
        <p>Established: {data.established}</p>
        <p>Courses Offered:</p>
        <ul>
          {data.courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
        <p>Ranking: {data.ranking}</p>
        <p>Website: {data.website}</p>
        <p>Desvription: {data.description}</p>
        <ul>
            {data.students.map((student, index)=>{
                return (
                    <li key={index}>
                        <strong>{student.name}</strong> - {student.age} years old, enroll in {student.course} course and currently in {student.year} year.
                    </li>
                );
            })}
        </ul>
        
    </div>
  );
}

export default College;