import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <li className="ml-6 font-semibold">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};
Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
