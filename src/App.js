import logo from './logo.svg';
import './App.css';
import ButtonComp from './components/ButtonComp';

function App() {
  const dan = {
    textDecoration: "underline",
    color: "blue"
  }
  return (
    // VIRTUAL DOM
    //
    <>
      <h1 style={dan}>Welcome to React Class</h1>
      <h1 className='jj bg-slate-950'>Lorem ipsum dolor sit amet.</h1>
      <h1 className='text-green-400'>Test Tailwind</h1>
      <h1 className='bg-red-500 ml-10'></h1>
      <h1></h1>
      <div className='sm:flex block justify-center'>
        <div className='w-24 h-24 m-auto sm:m-0 md:w-52 bg-orange-600 hover:bg-blue-400 transition-ease-in'></div>
        <div className='w-24 h-24 m-auto mt-10 sm:m-0 bg-orange-300'></div>
        <ButtonComp />
      </div>
    </>
  );
}

export default App;
