import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarsList from "../../components/CarsList/CarsList";
import { Loader } from "../../components/Loader/Loader";
import { StyledCatalogPage } from "./StyledCatalogPage";
import  LoadMoreBtn  from "../../components/LoadMoreBtn/LoadMoreBtn";

import {
  selectError,
  selectCars,
  selectIsLoading,
} from "../../redux/cars/cars.selectors";
import { fetchCars } from "../../redux/cars/cars.operations";
const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);


  
  useEffect(() => {
    // Выполните загрузку данных только если cars пуст или отсутствует
    if (!cars) {
      dispatch(fetchCars());
    }
  }, [cars, dispatch]);

  return (

    <StyledCatalogPage className="container">
    {isLoading && <Loader />}
    {error && <p>Error: {error}</p>}

    <CarsList cars={cars} />
    <LoadMoreBtn />
  </StyledCatalogPage>
  )
}

export default CatalogPage