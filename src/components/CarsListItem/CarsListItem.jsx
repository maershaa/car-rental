import React, {useState} from "react";
import { StyledCarsListItem } from "./StyledCarsListItem";
import LearnMoreBtn from '../LearnMoreBtn/LearnMoreBtn'
import LearnMoreModal from '../LearnMoreModal/LearnMoreModal'


// Функция форматирования адреса
const formatAddress = (address) => {
  if (address) {
    const addressParts = address.split(", ");
    const [city, country] = addressParts.slice(-2);
    return `${city} | ${country}`;
  }
  return null;
};

const CarsListItem = ({
  id,
  img,
  brand,
  model,
  year,
  cost,
  functionalities,
  rentalCompany,
  address,
  type,
  description,
  accessories
}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <StyledCarsListItem>
      <img src={img} alt={`${brand} ${model}`} className="custom-image" />

      <div className="carDetails">
        <p className="details">
          {brand}{" "}
           <span className="model">{model},{" "}</span> 
           {year}
        </p>
        <p className="cost">{cost}</p>
      </div>

      <p className="additionalInfo">
        {formatAddress(address)} | {rentalCompany} | {type} | {model} | {id} |{" "}
        {functionalities[0]}
      </p>

      <LearnMoreBtn handleOpen={handleOpen}  />

<LearnMoreModal 
open={open} 
handleClose={handleClose}
id={id}
img={img}
brand={brand}
model={model}
year={year}
cost={cost}
functionalities={functionalities}
rentalCompany={rentalCompany}
address={address}
type={type}


description={description}
accessories={accessories}


/>

    </StyledCarsListItem>
  );
};

export default CarsListItem;
