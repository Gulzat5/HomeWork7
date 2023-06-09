import React, { useState } from "react";
import Button from "../UI/button/Button";
import styled from "styled-components";
import ConfirmDeleteModal from "../ConfirmDeleteModal";

const Card = (props) => {
  let { data } = props;

  const [isModalvisible, setModalVisible] = useState(false);

  const toggleModalHandler = () => {
    setModalVisible((prevState) => !prevState);
  };

  const confirmHandler = () => {
    setModalVisible(false);
    props.deleteMovieHandler(props.data.id);
  };

  return (
    <>
      {isModalvisible ? (
        <ConfirmDeleteModal
          onClose={toggleModalHandler}
          onConfirm={confirmHandler}
        />
      ) : null}
      <MovieList>
        <MovieElement>
          <MovieImageContainer>
            <MovieImage src={data.img} alt={data.title} />
          </MovieImageContainer>
          <MovieInfoContainer>
            <Movietitle>{data.title}</Movietitle>
            <MovieRating>{data.rating}/5</MovieRating>
            <Button color="red" onClick={toggleModalHandler}>
              Удалить
            </Button>
          </MovieInfoContainer>
        </MovieElement>
      </MovieList>
    </>
  );
};

export default Card;

const MovieList = styled.div`
  list-style: none;
  width: 50rem;
  max-width: 60%;
  margin: 1rem auto;
  padding: 0;
`;

const MovieElement = styled.li`
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  display: flex;
`;

const MovieImageContainer = styled.div`
  flex: 1;
  height: 200px;
`;

const MovieImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const MovieInfoContainer = styled.div`
  flex: 2;
  padding: 2rem;
`;

const Movietitle = styled.h2`
  margin: 0;
  color: #383838;
  margin-bottom: 1rem;
`;

const MovieRating = styled.p`
  font-size: 1.25rem;
  margin: 0;
  color: white;
  display: inline;
  background: orange;
  padding: 0.25rem 2rem;
  border-radius: 15px;
`;
