import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const cricketers = [
      {name:"Mashrafee", place:"Norail", type:"Bowler"},
      {name:"Tamim Iqbal", place:"Chittagong", type:"Batsman"},
      {name:"Sakib Al Hasan", place:"Magura", type:"Alrounder"},
  ];
  
  const friends =['Nazmul', 'Aolat', 'Abukalam', 'sabbir', 'Mushfiq'];
  const heros = [
      {name:"Razzak", age:"70",},
      {name:"Josim", age:"60",},  
      {name:"Alomgir", age:"65",}
    ];

  const products =[
    {name:"SmartPhone", price:"10000"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Now i am learning react.js</p>

        <Userinfo></Userinfo>

        <Counter></Counter>

        <Cricketer info={cricketers[0]}></Cricketer>
        <Cricketer info={cricketers[1]}></Cricketer>
        <Cricketer info={cricketers[2]}></Cricketer>
       
        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
          {
            heros.map(hero => <li>{hero.name}</li>)
          }
        </ul>
      
        {
           products.map(details => <Product details={products[0]}></Product>)
        }
      </header>
    </div>
  );
};

function Userinfo(props){
  const [user,setUser] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  });  
  return(
      <div>
        <h3>Number of user: {user.length} </h3>
        <ul>
          {
            user.map(userDetail=> <li>{userDetail.username}</li>)
          }
        </ul>
      </div>
    );
  };

function Counter(){
  const [count,setCount] = useState(0);
  const increaseHandler = () => {
    const newCount = count + 1;
    setCount (newCount);
  };
  const decreaseHandler = () => setCount (count - 1);
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increaseHandler}>Increase</button>
      <button onClick={decreaseHandler}>Decrease</button>
    </div>
  );
};

function Cricketer(props){
  const cricketerStyle = {
      width:"480px",
      height:"260px",
      float:"left",
      border:"1px solid red",
      margin:"10px"
  };
return(
    <div style={cricketerStyle}>
        <h1>Name: {props.info.name}</h1>
        <h3>Birth place: {props.info.place}</h3>
        <h3>Player type: {props.info.type}</h3>
    </div>
  );
};


function Product(props){
  return(
      <div>
          <h2>Name: {props.details.name}</h2>
          <h3>Price: {props.details.price}</h3>
          <button>Bye Now</button>
      </div>
  );
};


export default App;
