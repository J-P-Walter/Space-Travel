import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./main.css";
import PlanetCard from "./planetcard";

export default function Intro() {
  const [show, setShow] = React.useState(true);

  function handleClick() {
    setShow(false);
  }
  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    exit: {
      height: 0,

      transition: {
        duration: 4,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const moonButton = {
    exit: {
      y: -700,
      scale: 0.5,
      transition: {
        duration: 2,
        ease: [0.03, 0.81, 0.22, 1],
      },
    },
  };

  const rocket_bg = {
    exit: {
      height: 0,
      transition: {
        duration: 3,
        ease: [0.25, 0.8, 0.67, 1],
      },
    },
  };
  const rocket = {
    exit: {
      y: -700,
      transition: {
        duration: 3,
        ease: [0.03, 0.81, 1, 0.5],
      },
    },
  };
  return (
    <div>
      <AnimatePresence>
        {show && (
          <motion.div>
            <motion.div
              className="travel__cover"
              initial="initial"
              exit="exit"
              variants={blackBox}
            >
              <motion.div
                className="travel__cover-enter"
                onClick={handleClick}
                exit="exit"
                variants={moonButton}
              >
                <motion.img
                  className="travel__cover-enter-img"
                  key={"moon.png"}
                  src={"moon.png"}
                />
                <motion.div className="travel__cover-enter-text">
                  Book
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="travel__cover-rocket"
              exit="exit"
              variants={rocket_bg}
            >
              <motion.img
                className="travel__cover-rocket-img"
                key={"rocket.png"}
                src={"rocket.png"}
                exit="exit"
                variants={rocket}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="travel__bg">
        <div className="travel__planet-cards">
          <PlanetCard
            name="Mercury"
            img="mercury.png"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit mauris tortor, cursus imperdiet libero rutrum sed. Cras semper est vitae tortor dignissim, ac fringilla."
            className="column"
          />
          <PlanetCard
            name="Venus"
            img="venus.png"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit mauris tortor, cursus imperdiet libero rutrum sed. Cras semper est vitae tortor dignissim, ac fringilla."
            className="column"
          />
          <PlanetCard
            name="Mars"
            img="mars.png"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit mauris tortor, cursus imperdiet libero rutrum sed. Cras semper est vitae tortor dignissim, ac fringilla."
            className="column"
          />
          <PlanetCard
            name="Jupiter"
            img="jupiter.png"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit mauris tortor, cursus imperdiet libero rutrum sed. Cras semper est vitae tortor dignissim, ac fringilla."
            className="column"
          />
          <PlanetCard
            name="Saturn"
            img="saturn.png"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit mauris tortor, cursus imperdiet libero rutrum sed. Cras semper est vitae tortor dignissim, ac fringilla."
            className="column"
          />
          <PlanetCard
            name="Uranus"
            img="uranus.png"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit mauris tortor, cursus imperdiet libero rutrum sed. Cras semper est vitae tortor dignissim, ac fringilla."
            className="column"
          />
          <PlanetCard
            name="Neptune"
            img="neptune.png"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit mauris tortor, cursus imperdiet libero rutrum sed. Cras semper est vitae tortor dignissim, ac fringilla."
            className="column"
          />
          <PlanetCard
            name="Pluto"
            img="pluto.png"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit mauris tortor, cursus imperdiet libero rutrum sed. Cras semper est vitae tortor dignissim, ac fringilla."
            className="column"
          />
        </div>
      </div>
    </div>
  );
}
