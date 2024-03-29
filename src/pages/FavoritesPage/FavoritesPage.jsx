import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
// import Title from '../../components/Title/Title';
// import DrinkList from '../../components/DrinkList/DrinkList';
// import DrinkCard from '../../components/DrinkCard/DrinkCard';
// import { NotFoundCocktail } from '../../components/NotFoundDrink/NotFound';
import { Loader } from '../../components/Loader/Loader';
// import PaginationPanel from '../../components/Pagination/Pagination';
// import { StyledDivNotFound } from './FavoritesPage.styled';
import { 
  // selectFavoriteCocktails, 
  selectIsLoading, selectTotalFavorites } from '../../redux/cars/cars.selectors';
// import { deleteFromFavorites, fetchFavoriteCocktails } from '../../redux/cars/cars.operations';

const FavoritesPage = () => {
  const dispatch = useDispatch();

  // const cocktails = useSelector(selectFavoriteCocktails);
  const isLoading = useSelector(selectIsLoading);
  const totalFavorites = useSelector(selectTotalFavorites);

  // const [searchParams, setSearchParams] = useSearchParams();
  // const page = searchParams.get('page') || 1;
  // const [perPage, setPerPage] = useState(8);

  // useEffect(() => {
  //   dispatch(fetchFavoriteCocktails());
  // }, [dispatch]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const screenWidth = window.innerWidth;

  //     const newCocktailsPerPage = screenWidth >= 1200 ? 9 : 8;

  //     if (newCocktailsPerPage !== perPage) {
  //       setPerPage(newCocktailsPerPage);
  //     }
  //   };

  //   window.addEventListener('resize', handleResize);

  //   handleResize();

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [perPage, page]);

  // const totalPages = Math.ceil(totalFavorites / perPage);
  // const startIndex = (page - 1) * perPage;
  // const endIndex = Math.min(startIndex + perPage, totalFavorites);

  return (
    <main className="container">
      {isLoading === true && <Loader />}
     
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium vitae necessitatibus explicabo reprehenderit quod possimus. Quam, doloribus voluptatem error, mollitia, beatae voluptatibus recusandae eos ipsa nesciunt magnam delectus totam!</p>
      {/* {cocktails.length === 0 ? (
        <StyledDivNotFound>
          <NotFoundCocktail />
          <p>You haven`t added any favorite cocktails yet</p>
        </StyledDivNotFound>
      ) : (
        <>
          {totalFavorites !== null && (
            <DrinkList>
              {cocktails.slice(startIndex, endIndex).map((cocktail) => (
                <DrinkCard
                  name={cocktail.drink}
                  imgUrl={cocktail.drinkThumb}
                  description={cocktail.description}
                  alcoholic={cocktail.alcoholic}
                  id={cocktail._id}
                  key={cocktail._id}
                  handleDelete={deleteFromFavorites}
                />
              ))}
            </DrinkList>
          )}
          {totalPages > 1 && <PaginationPanel pageQuan={totalPages} />}
        </>
      )} */}
    </main>
  );
};

export default FavoritesPage;
