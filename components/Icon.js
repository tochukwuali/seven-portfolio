import { IconContext } from "react-icons";
import { FiChevronRight } from "react-icons/fi";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export const ChevronRightIcon = () => {
  return (
    <IconContext
      value={{
        size: "1.3em",
        style: { verticalAlign: "middle", marginLeft: "9px" },
      }}
    >
      <FiChevronRight />
    </IconContext>
  );
};

export const GithubIcon = () => {
  return (
    <IconContext.Provider
      value={{
        size: "1.3em",
        style: { verticalAlign: "middle" },
      }}
    >
      <FaGithub />
    </IconContext.Provider>
  );
};

export const TwitterIcon = () => {
  return (
    <IconContext.Provider
      value={{
        size: "1.3em",
        style: { verticalAlign: "middle" },
      }}
    >
      <FaTwitter />
    </IconContext.Provider>
  );
};

export const LinkedinIcon = () => {
  return (
    <IconContext.Provider
      value={{
        size: "1.3em",
        style: { verticalAlign: "middle" },
      }}
    >
      <FaLinkedin />
    </IconContext.Provider>
  );
};
