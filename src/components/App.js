import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import Moviecard from "./Moviecard";
import { addMovies, setShowFavourites } from "../action";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
  }
  isFavourite = (movie) => {
    const { favourites } = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if (index !== -1) return true;
    return false;
  };
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };
  render() {
    const { list, favourites, showFavourites } = this.props.store.getState();
    const display = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {display.map((movie, index) => {
              return (
                <Moviecard
                  movie={movie}
                  key={`movies-${index}`}
                  store={this.props.store}
                  isFavourite={this.isFavourite(movie)}
                />
              );
            })}
          </div>
          {display.length === 0 ? (
            <div className="no-movies">No movies here</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
