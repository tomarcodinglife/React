import Users from './components/Users.jsx'


function MyApp() {

  const namePrint = (name) =>{
    console.log(name);
    alert(name);
  }

  return (
    <>
      <h1>Pass Function Component as props</h1>
      <Users myFun={namePrint} name="Sujit Tomar"/>
    </>
  )
}

export default MyApp
