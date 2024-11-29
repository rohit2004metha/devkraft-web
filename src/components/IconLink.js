import { FiExternalLink } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

const IconLink = (props) => {
  return (
    <a
      style={{
        textDecoration: "none",
        color: "var(--secondary)",
        paddingRight: "6px",
      }}
      href={props.to}
      target={props.external ? "_blank" : false}
      rel={props.external ? "noreferrer" : false}
    >
      {props.children}
      {/* <FiExternalLink style={{ marginLeft: ".2em" }} /> */}
      <FaExternalLinkAlt style={{ marginLeft: ".2em" }} />
    </a>
  );
};

export default IconLink;
