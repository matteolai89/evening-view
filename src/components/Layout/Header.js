import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import underwater from "../../assets/underwater.jpg";
import { Link } from "react-scroll";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.logo} onClick={scrollToTop}>
          Evening View - Cocktail Bar
        </h1>
        <h2 className={classes.about} onClick={props.onShownAbout}>
          AboutUs
        </h2>
        <HeaderCartButton onClick={props.onShownCart} />
      </header>

      <div className={classes.poster}>
        <img alt="poster" className={classes.img} src={underwater}></img>
        <h2 className={classes.title}>
          <b>CHOOSE</b>
          <br></br>{" "}
          <em
            style={{
              fontSize: "70%",
              color: "#eb6db98b",
              marginLeft: "50px",
            }}
          >
            YOUR
          </em>{" "}
          <br></br>{" "}
          <b
            style={{ fontSize: "65%", color: "#ff5bbdd1", marginLeft: "10px" }}
          >
            FAVOURITE
          </b>
          <br></br>{" "}
          <Link activeClass="active" to="drinks" spy={true}>
            <b className={classes.cocktail}>COCKTAIL</b>
          </Link>
        </h2>
      </div>
    </Fragment>
  );
};

export default Header;
