import Header from './components/header/header';
import SideBar from './components/side-bar/side-bar';
import FormProfile from './components/form-person/form-person';
import './App.css'

function App() {
  return (
    <>
    <Header/>
    <main className='wrapper'>
      <SideBar />
      <FormProfile />

    </main>
    </>
  
    
  
  )
}

export default App
