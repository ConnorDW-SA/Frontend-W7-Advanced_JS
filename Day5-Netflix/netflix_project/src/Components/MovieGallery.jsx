import { Component } from "react";
import { Carousel, Row } from "react-bootstrap";

export default class MovieGallery extends Component {
  state = {
    movies: [],
    isLoading: true,
    errMessage: ""
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=c8fc2154&s=${this.props.name}`
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ movies: data.Search, isLoading: false });
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div style={{ height: "40vh" }}>
        <Carousel fluid>
          {this.state.movies.map((movie) => (
            <Carousel.Item key={movie.Plot}>
              <img
                src={movie.Poster}
                alt="First slide"
                style={{ objectFit: "contain", height: "40vh" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}
