import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github, linkedin, twitter} from "../assets"

const Footer = () => {
    const twitterIcon = <img src={twitter} alt="Twitter" className="max-w-[128px] max-h-[128px]"/>;
    const linkedinIcon = <img src={linkedin} alt="LinkedIn" className="max-w-[128px] max-h-[128px]"/>;
    const githubIcon = <img src={github} alt="GitHub" className="max-w-[128px] max-h-[128px]"/>;
  return (
    <>
      <motion.div variants={slideIn("up", "easeInOut")}>

        <div className="mt-6 flex flex-wrap gap-20 justify-center space-x-4">
            <a href="https://twitter.com/anuragparcha2" target="_blank" rel="noopener noreferrer">
            {twitterIcon}
            </a>
            <a href="https://linkedin.com/in/anuragparcha" target="_blank" rel="noopener noreferrer">
            {linkedinIcon}
            </a>
            <a href="https://github.com/an-u-rag" target="_blank" rel="noopener noreferrer">
            {githubIcon}
            </a>
        </div>

        <div className="mt-6 text-center">
            <p className={styles.text}>
            "A mote of dust suspended in a sunbeam" - Carl Sagan
            </p>
        </div>
      </motion.div>

    </>
  );
};

export default SectionWrapper(Footer, "");