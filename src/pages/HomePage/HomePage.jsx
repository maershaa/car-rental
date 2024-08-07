import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../components/Loader/Loader';
import { StyledHomePage } from './StyledHomePage';
import TitleLarge from '../../components/Titles/TitleLarge/TitleLarge';
import { selectError, selectIsLoading } from '../../redux/cars/cars.selectors';
import Logo from '../../components/Logo/Logo'


const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <StyledHomePage className="container">
      {/* {isLoading && <Loader />} */}
      {error && <p>Error: {error}</p>}
      <TitleLarge title="About Us"> </TitleLarge>
      <Logo /> <span>is your reliable partner in car
      rental services in Ukraine. We offer a wide range of services to meet any
      of our clients' needs.</span>
      <TitleLarge title="Our Services"> </TitleLarge>
      <p>
        Car Rental - We offer a variety of car models with flexible tariff
        systems, so that every client can find the optimal solution. Transfers -
        We provide comfortable and safe transfers from airports, train stations,
        and other points in Ukraine. Chauffeur Services - We provide
        professional drivers with excellent knowledge of the area for your
        convenience and safety.
      </p>
      <TitleLarge title="Our Advantages"> </TitleLarge>
      <strong>Wide Selection of Cars - </strong> With us, you will find cars of
      different classes and brands to meet your needs and preferences.
      <strong> Flexible Rental Conditions - </strong> We offer a flexible tariff
      system and rental conditions so that every client can find the optimal
      solution.
      <strong>Quality Service - </strong> Our team of professionals is always
      ready to provide you with high-quality service and support at every stage
      of your journey.


      <TitleLarge title="Feedback from our clients"> </TitleLarge>

      

      <TitleLarge title="Contact Us"> </TitleLarge>
      <p>
        Don't waste time - choose Drive Ease for
        a comfortable and safe trip across Ukraine! Contact us today to learn
        more about our services and book a car right now.
      </p>
    </StyledHomePage>
  );
};

export default HomePage;
