function UserDetails({user}) {
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>Country: {user.country}</p>
      <p>Mobile: {user.mobile}</p>
      <p>College: {user.college}</p>
    </div>
  );
    
}


// function UserDetails({user: { name, age, email, country, mobile, college }}) {
//   return (
//     <div>
//       <h2>User Details</h2>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//       <p>Email: {email}</p>
//       <p>Country: {country}</p>
//       <p>Mobile: {mobile}</p>
//       <p>College: {college}</p>
//     </div>
//   );
    
// }

export default UserDetails;