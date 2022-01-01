import PropTypes from "prop-types";
import Button from "./button";

const Header = ({ title, onShowAddTask, btn }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={btn.color} text={btn.text} onClick={onShowAddTask} />
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
