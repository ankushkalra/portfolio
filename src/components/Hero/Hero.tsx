import Artwork from "../Artwork/Artwork";
import Introduction from "../Introduction/Introduction";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Artwork />
      <Introduction />
    </section>
  );
}
