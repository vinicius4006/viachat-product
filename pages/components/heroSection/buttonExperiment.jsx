import { Link as Li } from "react-scroll";

export const ButtonExperimente = () => {
  return (
    <Li
      activeClass="contato"
      to="contato"
      smooth={true}
      offset={50}
      duration={500}
    >
      <button className="bn632-hover bn18">Experimente Grátis</button>
    </Li>
  );
};
