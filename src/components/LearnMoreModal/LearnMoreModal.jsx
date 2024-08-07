import { StyledLearnMoreModal } from './StyledLearnMoreModal';

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/base/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const LearnMoreModal = ({
  open,
  handleClose,
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
  accessories,
}) => {
  return (
    <StyledLearnMoreModal>
      <BaseModal
        className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent className="modal-content">
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: -3,
              top: -3,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>

          <img src={img} alt={`${brand} ${model}`} className="custom-image" />
          <div className="carDetails">
            <p className="details">
              {brand} <span className="model">{model}</span>, {year}
            </p>

            <p className="cost">{cost}</p>

            <p className="additionalInfo">
              {/* {formatAddress(address)} */}| {rentalCompany} | {type} |{' '}
              {model} | {id} | {functionalities[0]}
            </p>

            <p id="modal-description">{description}</p>

            <p>Accessories and functionalities:</p>

            <p>
              {accessories} | {functionalities}
            </p>

            <p>Rental Conditions:</p>
          </div>

          <ul className="custom-list">
            <li className="list-item">
              <p className="item-label">
                Minimum age: <span className="item-value">25</span>
              </p>
            </li>
            <li className="list-item">
              <p className="item-label">Valid driver’s license</p>
            </li>
            <li className="list-item">
              <p className="item-label">Security deposit required</p>
            </li>
            <li className="list-item">
              <p className="item-label">
                Mileage: <span className="item-value">5,858</span>
              </p>
            </li>
            <li className="list-item">
              <p className="item-label">
                Price: <span className="item-value">40$</span>
              </p>
            </li>
          </ul>
        </ModalContent>
      </BaseModal>
    </StyledLearnMoreModal>
  );
};

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'base-Backdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const StyledBackdrop = styled(Backdrop)`
  /* z-index: -1; */
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled('div')(
  ({ theme }) => css`
    background-color: ${theme.palette.mode === 'dark' ? '#1C2025' : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? '#434D5B' : '#DAE2ED'};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    color: ${theme.palette.mode === 'dark' ? '#F3F6F9' : '#1C2025'};

    width: 400px;
    height: 600px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    border-radius: 8px;
    padding: 24px;
    top: 50%; /* Центрирование по вертикали */
    left: 50%; /* Центрирование по горизонтали */
    transform: translate(-50%, -50%); /* Смещение на половину ширины и высоты */

    & .modal-description {
      color: ${theme.palette.mode === 'dark' ? '#808080[400]' : '#808080[800]'};
    }
  `
);

export default LearnMoreModal;
