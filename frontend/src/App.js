const App = () => {
  return (
    <div className='container'>
      <h2>Registration Form</h2>
      <form className='form-control'>
        <input type='text' name='name' placeholder='Name'></input>
        <input type='email' name='email' placeholder='Email'></input>
        <button type="submit" className='btn'>SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
