import DefaultHeader from './components/layouts/DefaultHeader'
import Routes from './routes/Routes'

import './styles/App.scss'

function App() {
  return (
    <div className="App">
      <DefaultHeader />

      <main>
        <Routes />
      </main>
    </div>
  )
}

export default App
