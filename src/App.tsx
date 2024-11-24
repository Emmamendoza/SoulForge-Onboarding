import { NavbarComponent } from "./components/NavbarComponent"
import Home from "./layout/Home"

function App() {

  const navbarPages = [
      { text: 'Docs', onClick: (id:string) => console.log('Clicking: ', id), id: 'Docs'}, 
      { text: 'Contact', onClick: (id:string) => console.log('Clicking: ', id), id: 'Contact'}, 
      { text: 'About us', onClick: (id:string) => console.log('Clicking: ', id), id: 'About us'}
  ]

  return (
      <>
        <NavbarComponent pages={navbarPages} />
        <Home />
      </>
  )
}

export default App
