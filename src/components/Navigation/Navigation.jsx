import { Link } from "react-router-dom";
import { useState } from "react";
import { connect, useDispatch } from "react-redux";

import styles from './Navigation.module.css';

import { searchRecipe } from "../../redux/actions/actions.js"

import searchBtn from "../../utils/search-outline.svg"
import closeBtn from "../../utils/close-outline.svg";
import menuBtn from "../../utils/menu-outline.svg";

import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClickSearchBtn = () => {
    setIsOpen(true);
    setIsToggleOn(false);
    if (isOpen) {
      setIsOpen(false);
      navigate("/food");
      dispatch(searchRecipe(searchValue.trim()));
      setSearchValue("");
    };
  }

  const handleClickCloseBtn = () => {
    dispatch(searchRecipe(""));
    setIsOpen(false);
    setSearchValue("");
  }

  const handleClickHeader = () => {
    setIsToggleOn(!isToggleOn);
    setIsOpen(false);
  }
  const handleSearch = (e) => {
    if (e.key.toLowerCase() === 'enter') {
      setIsOpen(true);
      setIsToggleOn(false);
      if (isOpen) {
        dispatch(searchRecipe(searchValue.trim()));
        navigate("/food");
        setIsOpen(false);
        setSearchValue("");
      }
    }
  }

  //Redux
  const onSearchChange = ({ target }) => {
    setSearchValue(target.value);
  }
  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  }

  return (
    <header className={`${isToggleOn ? styles.open : ""} ${styles.header}`} onKeyDown={(e) => handleSearch(e)}>
      <a href="/" className={styles.logo} >HENRY FOOD</a>
      <div className={styles.group}>
        <ul className={styles.navigation}>
          <li><Link to="/food" onClick={handleClick}>Home</Link></li>
          <li><Link to="/food/make" onClick={handleClick}>Create</Link></li>
        </ul>
        <div className={styles.search}>
          <span className={styles.icon}>
            <img
              src={searchBtn}
              alt="SearchBtn"
              name="search-outline"
              className={`${styles.searchBtn} ${isOpen ? styles.active : ""}`}
              onClick={handleClickSearchBtn}
            />
            <img
              src={closeBtn}
              alt="CloseBtn"
              name="close-outline"
              className={`${styles.closeBtn}  ${isOpen ? styles.active : ""}`}
              onClick={handleClickCloseBtn}
            />
          </span>
        </div>
        <img
          src={menuBtn}
          alt="MenuBtn"
          className={`${styles.menuToggle}  ${isOpen ? styles.hide : ""}`}
          onClick={handleClickHeader}
        />
      </div>
      <div className={`${styles.searchBox}  ${isOpen ? styles.active : ""}`}>
        <input
          type="text"
          name="searchBox"
          placeholder="look for your recipe..."
          value={searchValue}
          onChange={onSearchChange}
        />
      </div>
    </header>
  );
}

export default connect()(Navigation)