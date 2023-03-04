import PropTypes from "prop-types";
import Button from "./Button.js";



const Header = ({ title, onAdd, showAdd}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button 
        onClick={onAdd} 
        color={showAdd ? "red" : "green"} 
        text={showAdd ? "Close" : "Add"}>
      </Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
