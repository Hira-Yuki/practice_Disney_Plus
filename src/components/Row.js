import React, { useEffect, useState, useCallback, useRef } from "react";
import axios from "../api/axios";
import "./Row.css";
import MovieModal from "./MovieModal";

const Row = ({ title, id, fetchUrl }) => {

  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  // 스크롤 제어를 위한 useRef 사용
  const scrollContainerRef = useRef(null);

  const fetchMovieData = useCallback(async () => {
    try {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    } catch (error) {
      // 에러 처리를 위한 분기
      console.error("영화 데이터를 가져오는 중 오류 발생, themoviedb 관리자에게 문의하세요. :", error);
    }
  }, [fetchUrl]);

  const handleScroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
    }
  };

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const handleClick = (movie) => {
    setModalOpen(true)
    setMovieSelected(movie)
  }

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div className="slider__arrow-left">
          <span
            className="arrow"
            onClick={() => {
              handleScroll(-(window.innerWidth - 80));
            }}
          >
            {"<"}
          </span>
        </div>
        <div ref={scrollContainerRef} id={id} className="row__posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
              onClick={ () => handleClick(movie)}
            />
          ))}
        </div>
        <div className="slider__arrow-right">
          <span
            className="arrow"
            onClick={() => {
              handleScroll(window.innerWidth - 80);
            }}
          >
            {">"}
          </span>
        </div>
      </div>
      {modalOpen && 
      
      <MovieModal {...movieSelected} setModalOpen={setModalOpen}/>
      }
    </div>
  );
};

export default Row;
