import { FunctionComponent } from "react";
import styles from "./FormFrame.module.css";

const FormFrame: FunctionComponent = () => {
  return (
    <div className={styles.formFrame}>
      <div className={styles.rectangle} />
      <h1 className={styles.signUpAnd}>
        Sign up and get exclusive special deals
      </h1>
      <div className={styles.categoriesHeader}>
        <div className={styles.dataCenterRobotAutomationG}>
          <div className={styles.dataCenterRoboticAutomation} />
          <div className={styles.dataCenterRoboticAutomation1} />
          <div className={styles.hostingText}>
            <div className={styles.rectangle1} />
            <div className={styles.signUp}>Sign Up</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormFrame;
