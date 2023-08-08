// Importing the css for the info
import styles from "../../styles/tictaetoe/info.module.css";

const Info = () => {
	return (
		<div className={styles.Info}>
			<div className={styles.player}>Player 1: X</div>
			<div className={styles.player}>Player 2: O</div>
		</div>
	)
}

export default Info;
