import React, { useState, useEffect } from 'react';





const Home = ({ isAuth, signUpAction }) => {
  console.log('props home isAuth :', isAuth);
  const [message, setMessage] = useState("");
  const [usersList, setUsersList] = useState([])
  const [signUpForm, setSignUpForm] = useState(
    {
      email: "",
      password: ""
    })
  console.log('signUpForm :', signUpForm);

  useEffect(() => {
    fetch("/api/home")
      .then(res => res.text())
      .then(res => setMessage(res));
  }, []);


  useEffect(() => {
    // if (isAuth) {

    // }
    fetch("/api/users")
      .then(res => res.json())
      .then(res => setUsersList(res))
      .catch(err => console.log('err :', err))
  }, [isAuth])

  const handleSubmit = (e) => {
    e.preventDefault()
    signUpAction(signUpForm)
  }

  const handleChange = (e) => {
    e.preventDefault()
    const key = e.target.name
    const value = e.target.value
    setSignUpForm((prevState) => ({ ...prevState, [key]: value }))
  }


  return (
    <div>
      <h1>Home</h1>
      <p>{message}</p>

      <form onSubmit={handleSubmit}>
        <label>email</label><input type="text" onChange={handleChange} name="email" value={signUpForm.email}></input>
        <label>mot de passe</label><input type="password" name="password" onChange={handleChange} value={signUpForm.password}></input>
        <button>Submit</button>
      </form>
      <h1>Si t'es connecté tu verras les users lolilol !!!</h1>
      <ul>
        {usersList.map((el, index) => {
          return <li key={index}>{el.email}</li>
        })}
      </ul>
    </div>
  );
}

export default Home;