import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight, BiCoffee } from "react-icons/bi";  // Import the coffee icon
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import BuyMeACoffee from "../BuyMeACoffee/BuyMeACoffee";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const headerShadow = useHeaderShadow();

  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        className={`bg-primary paddings ${css.wrapper}`}
        viewport={{ once: true, amount: 0.25 }}
        style={{ boxShadow: headerShadow }}
      >
        <div className={`innerWidth ${css.container}`}>
          <div className={css.name}>
            Kamal Nath
          </div>
          <ul
            className={`flexCenter ${css.menu}`}
            ref={menuRef}
            style={getMenuStyles(menuOpened)}
          >
            <li><a href="#portfolio">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className={`flexCenter ${css.phone}`}>
              <BiPhoneCall size={"40px"} />
            </li>
          </ul>
          <button className={css.buyMeCoffee} onClick={openModal}>
            <BiCoffee className={css.coffeeIcon} />
            <span className={css.coffeeText}>Buy Me a Coffee</span>
          </button>
          <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </motion.div>
      {modalOpen && <BuyMeACoffee closeModal={closeModal} />}
    </>
  );
};

export default Header;
