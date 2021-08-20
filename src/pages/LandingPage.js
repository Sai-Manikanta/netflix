import styles from './../css/landing.module.css';

function LandingPage() {
    return (
        <>
            <div className={styles.backdrop}></div>

            <div className={styles.contentContainer}>
                <header className={styles.header}>
                    <img 
                        src="./images/netflix-logo.png" 
                        alt="logo" 
                        className={styles.logo}
                    />

                    <div>
                        <div className={styles.langSelectContainer}>
                            <select className={styles.langSelect} name="cars" id="cars">
                                <option value="volvo">English</option>
                                <option value="saab">Hindhi</option>
                            </select>
                            <span className={styles.customSelectArrow}></span>
                        </div>
                        <button className={styles.signInBtn}>
                            Sign In
                        </button>
                    </div>
                </header>
            </div>
        </>
    )
}

export default LandingPage
