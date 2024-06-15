/* eslint-disable react/prop-types */
import styles from "./modal.module.scss";
import { NavLink } from "react-router-dom";
import { IoMdCloseCircle } from "react-icons/io";
import { useContext } from "react";
import { globalContext } from "../../App";

const Modal = () => {

  const { setIsModalVisible, movieDetails } = useContext(globalContext);

  const { title, overview, backdrop_path, id } = movieDetails;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalWindow}>
        <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
        <div className={styles.modalInfo}>
          <h2>{title}</h2>
          <p className={styles.overview}>{overview}</p>
        </div>
        <div className={styles.closeButtonContainer}>
          <IoMdCloseCircle
            className={styles.iconClose}
            onClick={() => setIsModalVisible(false)}
          />
        </div>
        <NavLink to={`catalogo/${id}`}>Vai al film</NavLink>
      </div>
    </div>
  );
};

export default Modal;
