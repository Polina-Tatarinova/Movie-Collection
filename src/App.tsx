import FilmsService from './api/FilmsService'
import './App.css'

function App() {

  return (
    <div>
      {const service = FilmsService.getInstance()}
      {service.getFilms({ body })}
    </div>
  )
}

export default App
