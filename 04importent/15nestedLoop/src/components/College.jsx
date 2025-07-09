
let style = {
    backgroundColor: "lightblue",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "10px",
    fontFamily: "Arial, sans-serif",
}


const College = ({ data }) => {
  return (
    <div className="college" style={style}>
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