import React from "react";
import { addToFavourite, removeFromFavourites } from "../action";

class Moviecard extends React.Component {
  handleFavouriteClick = () => {
    const { movie, store } = this.props;
    store.dispatch(addToFavourite(movie));
    console.log("movie card fav", store.getState());
  };
  handleUnfavouriteClick = () => {
    const { movie, store } = this.props;
    store.dispatch(removeFromFavourites(movie));
  };
  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnfavouriteClick}
              >
                Unfavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Moviecard;
