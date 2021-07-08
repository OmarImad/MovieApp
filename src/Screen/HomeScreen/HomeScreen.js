import { FlexColumn, InnerSection, SpinnerContainer } from "../../Global.Styles";
import {
  CardsContainer,
  Description,
  HeroSection,
  InnerHeroSection,
  LoadMore,
  MoviesTitle,
  Title,
} from "./HomeScreen.Styles";
import Card from "../../Components/Card/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../Redux/Movie/movieActions";
import { useState } from "react";

function HomeScreen(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state)
  const [page , setPage] = useState(1);

  useEffect(()=>{
    dispatch(getMovie(page));
  },[dispatch , page]) 
  const movies = state.movieState.Movies
  //   console.log(movies)
  return ( <FlexColumn>
      <HeroSection
        img={"http://image.tmdb.org/t/p/w1280/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg"}
      >
        <InnerHeroSection>
          <Title>Title</Title>
          <Description>
            This is just a film description to get from the api
          </Description>
        </InnerHeroSection>
      </HeroSection>
      <InnerSection>
        <MoviesTitle>Popular Movies</MoviesTitle>
        
        <CardsContainer>
        {state.movieState.Movies.map((movie, index) =>
            movie.map((el) => (
              <Card
                key={el.id}
                id={el.id}
                name={el.title}
                img={" https://image.tmdb.org/t/p/w500/" + el.poster_path}
              />
            ))
          )}  
        {/* {state.movieState.Movies.map((item)=>
        <Card
          key={item.id}
          id={item.id}
          name={item.title}
          img={"https://image.tmdb.org/t/p/w500"+item.poster_path} 
        />
        )} */}

{/* {state.movieState.Movies.map((item)=>
          {item.map(ele => 
            <Card
              key={ele.id}
              id={ele.id}
              name={ele.title}
              img={"https://image.tmdb.org/t/p/w500"+ele.poster_path} 
            />
          )}
        )} */}

      </CardsContainer>
       
          
        <LoadMore 
          isLoading={false}

        onClick = {()=>{
          setPage(page+1);
          // dispatch(getMovie(page))
        }}
        // isLoading={state?.movieState?.isLoading}
        >
          Load more...
        </LoadMore>
      </InnerSection>
    </FlexColumn>
  );
}

export default HomeScreen;
