import Link from "next/link";
import styles from "./Developer.module.css";

function Developer() {
  return (
    <div className={styles.section}>
      <Link
        rel="noopener"
        target="_blank"
        href="https://www.linkedin.com/in/serhii-oberemchuk"
        className={styles.link}
      >
        Built by OBEREMCHUK
      </Link>
    </div>
  );
}

export default Developer;
