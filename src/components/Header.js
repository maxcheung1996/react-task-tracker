import PropTypes from "prop-types";
import Button from "./button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onShowAddTask, btn }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button color={btn.color} text={btn.text} onClick={onShowAddTask} />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// css in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
