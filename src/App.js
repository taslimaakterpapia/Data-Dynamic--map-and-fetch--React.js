import { useEffect, useState } from 'react';
import './App.css';

// data daynamic seystem number 1**************

// function App() {
//   return (
//     <div className="App">
//       <Products name="papia" price="2000"></Products>
//       <Products name="sapia" price="4000"></Products>
//     </div>
//   );
// }

// function Products(props) {
//   return (
//     <div>
//       <p>Name:{props.name}</p>
//       <p>Price:{props.price}</p>
//     </div>
//   )
// }










// data daynamic  ( map )   seystem number 2 **************

// function App() {
//   const products = [
//     { name: 'laptopoo', price: 153000 },
//   ]

//   return (

//     <div className="App">
//       {
//         products.map(product => <Products name={product.name} price={product.price} ></Products>)
//       }
//     </div>
//   );
// }


// function Products(props) {
//   return (
//     <div>
//       <p>Name:{props.name}</p>
//       <p>Price:{props.price}</p>
//     </div>
//   )
// }







// data daynamic ( fetch ) seystem number 3 **************

function App (){
  return(
    <div>
      <SeeUser></SeeUser>
    </div>
  )
}

function SeeUser(){
  const [users, setUsers] = useState([]);

  useEffect (()=> {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=> res.json())
  .then(data => setUsers(data))
  }, [])

  return(
    <div>
      <p>{users.length}</p>       
     {
      users.map(user =><User name={user.name} email={user.email}></User>)
     }
    </div>
  )
}

function User(props) {
  return (
    <div>
      <p>Name:{props.name}</p>
      <p>Email:{props.email}</p>
    </div>
  )
}

export default App;
