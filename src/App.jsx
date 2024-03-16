
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import './index.css'

function App() {

  return (
    <>
      <Header></Header>
      <main className='max-w-6xl mt-4 mx-auto'>
          <Recipes></Recipes>
      </main>
    </>
  )
}

export default App
