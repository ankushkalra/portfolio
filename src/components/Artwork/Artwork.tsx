import styles from "./Artwork.module.css";

export default function Artwork() {
  return (
    <div style={{ height: 450, width: 450, display: "flex" }}>
      <div className={styles["morphingObject"]} />
    </div>
  );
}
