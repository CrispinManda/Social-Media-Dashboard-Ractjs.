
import './App.scss'
import Navbar from './layout/Navbar'
import Main from './layout/Main'
import Friends from './components/friends'


function App() {

  return (
<div className="social-media">
  <Navbar/>
  <Main/>
   <Friends />
      {/* <SideBar /> */}
</div>
  )
}

export default App
