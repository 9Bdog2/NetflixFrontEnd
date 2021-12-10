import React from "react";
import env from "react-dotenv";

class MyRow extends React.Component {
  state = {
    movies: [],
  };

  fetchMovie = async () => {
    try {
      const response = await fetch(
         process.env.REACT_APP_BASE_URL +
          "media"
      );
      
      const data = await response.json();
      if (response.ok) {
        console.log(`initial data`, data);
        this.setState({
          movies: data,
        });
        console.log(`here is your data `, this.state.movies);
      } else {
        console.log(`something went wrong`);
      }
    } catch (e) {
      console.error(`ooops an error occured while fetching`, e);
    }
  };

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    return (
      <>
        {this.state.movies.map((movie) => (
          <div className="colxx ml-1">
            <div key={movie.imdbID} className="card ">
              <a href="hfh">
                <img src={movie.Poster} className="movie" alt="..." />
              </a>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default MyRow;
