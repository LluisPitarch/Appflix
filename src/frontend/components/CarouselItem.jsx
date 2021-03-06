import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  addToFavoriteUserMovies,
  deleteFromFavoriteUserMovies,
} from '../actions';
import '../assets/styles/components/CarouselItem.css';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {
  const {
    _id,
    id,
    cover,
    title,
    year,
    contentRating,
    duration,
    isList,
    slug,
    source,
  } = props;

  const handleSetFavorite = () => {
    props.addToFavoriteUserMovies({
      _id,
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
      isList,
      slug,
      source,
    });
  };
  const handleDeleteFavorite = () => {
    props.deleteFromFavoriteUserMovies({
      _id,
      id,
    });
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={playIcon}
              alt="Play Icon"
            />
          </Link>
          {!isList ? (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Reproducir"
              onClick={handleSetFavorite}
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={removeIcon}
              alt="Quitar de mi lista"
              onClick={handleDeleteFavorite}
            />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{`${year} | ${contentRating} | ${duration}`}</p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
  cover: PropTypes.string,
  deleteFromFavoriteUserMovies: PropTypes.func,
  addToFavoriteUserMovies: PropTypes.func,
};

const mapDispatchToProps = {
  addToFavoriteUserMovies,
  deleteFromFavoriteUserMovies,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
