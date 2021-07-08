import { FlexColumn, InnerSection,SpinnerContainer } from "../../Global.Styles";
import {
  CardsContainer,
  HeroSection,
  InnerHeroSection,
  MoviesTitle,
} from "../HomeScreen/HomeScreen.Styles";
import {
  InfoText,
  MovieDetailsBox,
  MovieImage,
  MovieInfoBox,
  NavigatorContainer,
  NavigatorInnerContainer,
  NavigatorSpan,
  ProgressBar,
  ProgressBarContainer,
  ProgressBarPercentage,
} from "./MovieScreen.Styles";
import ActorCard from "../../Components/ActorCard/ActorCard";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMovieById } from "../../Redux/Movie/movieActions";

function MovieScreen(props) {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state)=>state);
  const movie = state.movieState.movie;
  const goBack = ()=>{
    history.goBack();
  } 
  useEffect(() => {
    dispatch(getMovieById(params.id))
  }
  ,[dispatch , params.id])
  return state?.movieState?.isLoading || movie.isLoading? (
    <SpinnerContainer/>
  ):(
    <FlexColumn>
      <NavigatorContainer>
        <NavigatorInnerContainer>
          <NavigatorSpan onClick={goBack}>Back</NavigatorSpan>
          <NavigatorSpan>/{movie.movie.title}</NavigatorSpan>
        </NavigatorInnerContainer>
      </NavigatorContainer>
      <HeroSection
        img={"https://image.tmdb.org/t/p/w500/"+ movie.movie.backdrop_path}
      >
        <InnerHeroSection>
          <MovieInfoBox>
            <MovieImage
              src={"https://image.tmdb.org/t/p/w500/"+ movie.movie.poster_path}
              alt={"movie name"}
            />
            <MovieDetailsBox>
              <InfoText margin={"0 0 25px"} fontSize={30} fontWeight={700}>
                {movie.movie.original_title}
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                Polt
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={500}>
                {movie.movie.overview}
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                IMDB RATING
              </InfoText>
              <ProgressBarContainer>
                <ProgressBar>
                  <ProgressBarPercentage width={82} />
                </ProgressBar>
                <InfoText margin={"0 20px"} fontSize={16} fontWeight={500}>
                  {movie.movie.vote_average}
                </InfoText>
              </ProgressBarContainer>{" "}
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                DIRECTOR
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={500}>
                Enrico Casarosa
              </InfoText>
            </MovieDetailsBox>
          </MovieInfoBox>
        </InnerHeroSection>
      </HeroSection>
      <InnerSection>
        <MoviesTitle>Actors</MoviesTitle>
        <CardsContainer>
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <ActorCard
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
        </CardsContainer>
      </InnerSection>
    </FlexColumn>
  );
}

export default MovieScreen;
