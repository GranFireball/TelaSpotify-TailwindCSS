import './App.css';
import Aside from './Aside';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className='h-screen flex flex-col bg-zinc-800 text-zinc-50'>
      <div className='flex flex-1'>
        <Aside/>
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
