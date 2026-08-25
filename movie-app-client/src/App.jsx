import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieItem from './components/movieItem/MovieItem.jsx';
const movies = [
  {
    id: 1,
    title: "El secreto de sus ojos",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCWi7ZvwW9-y4AJObTLDXe76xBiXsRZYBpS_8vUG81MP6HOeOp1U-lEJd0&s=10",
    rating: 8.2,
    duration: 129,
    summary:
      "Benjamín Espósito, un empleado judicial retirado, decide escribir una novela basada en un antiguo caso de homicidio que marcó su vida. Al volver sobre el caso, también deberá enfrentarse a recuerdos de amor, justicia y venganza.",
    available: true
  },
  {
    id: 2,
    title: "Relatos salvajes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHnHFgm5cD2GLIkwnplhJd9OmzzXss6u4egz9ulJibYjC8Zdwbm_mYdzv&s=10",
    rating: 8.1,
    duration: 122,
    summary:
      "Seis historias independientes exploran situaciones en las que personas comunes son llevadas al límite y terminan perdiendo el control, mezclando humor negro, drama, violencia y situaciones absurdas.",
    available: true
  },
  {
    id: 3,
    title: "Metegol",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_RfhTmhJOM6trSQ7MACPMYpuFbeFsRxABrIjMOusKwPtC1jkGTCntclC&s=10",
    rating: 6.4,
    duration: 106,
    summary:
      "Amadeo es un joven apasionado por el metegol que deberá enfrentarse a un antiguo rival convertido en una estrella del fútbol. Con la ayuda de los jugadores mágicamente cobrados de vida, intentará salvar su pueblo y recuperar a Laura.",
    available: false
  },
  {
    id: 4,
    title: "Un cuento chino",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpENfdiBT5xMO9y4UL4g3mn0N35PtTGpZm1iDJbbYwhJCnlJVkl-3btvp9&s=10",
    rating: 7.3,
    duration: 93,
    summary:
      "Roberto, un solitario dueño de una ferretería de Buenos Aires, encuentra a Jun, un joven chino que no habla español y busca a su tío. El inesperado encuentro cambia la vida de ambos.",
    available: true
  }
];

function App() {


  return (
    <div className="movie-app-bg py-5">
      <Container>
        <h1 className="text-light text-center">LAS PELIS DE LA 2TUP8</h1>
        <h3 className="text-light-emphasis text-center mb-5">Bienvenidos/as</h3>
        <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
          {movies.map((movie) =>
            <Col key={movie.id}>
              <MovieItem
                title={movie.title}
                image={movie.image}
                rating={movie.rating}
                duration={movie.duration}
                summary={movie.summary}
                available={movie.available}
              />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  )
}

export default App
