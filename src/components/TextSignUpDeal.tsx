import { FunctionComponent } from "react";
import styles from "./TextSignUpDeal.module.css";

const TextSignUpDeal: FunctionComponent = () => {
  return (
    <div className={styles.textSignUpDeal}>
      <div className={styles.rectangle} />
      <div className={styles.rectangleSignUpForm}>
        <div className={styles.frameDataCenter}>
          <div className={styles.imageUnitedStates} />

        </div>
      </div>
      <div className={styles.rectanglePrivacyPolicy}>
        <div className={styles.textTermsOfService} />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChildren}>
            <div className={styles.imageFrame} />
            <div className={styles.textContainer}>
              <div className={styles.rectangle1} />
              <div className={styles.signupButton}>
                <div className={styles.frame} />
                <div className={styles.categoriesFrame}>
                  <div className={styles.webBuilderLabel} />
                  <div className={styles.lastUpdated}>Last Updated</div>
                  <div className={styles.contactFrame}>
                    <div className={styles.privacyPolicyLink} />
                    <div className={styles.rectangleFrame}>-</div>
                  </div>
                </div>
                <div className={styles.rectangle2}>
                  <div className={styles.textFrame} />
                  <div className={styles.february222020}>February 22, 2020</div>
                </div>
              </div>
            </div>
            <div className={styles.frameFrame}>
              <div className={styles.rectangleRectangle}>
                <div className={styles.categoriesCategories} />
                <div className={styles.categoriesCategories1} />
              </div>
              <img className={styles.imageIcon1} alt="" src="/image-2.svg" />
              <div className={styles.image}>
                <div className={styles.contactForm} />
                <div className={styles.advertisingDisclosure}>
                  Advertising Disclosure
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageFrame1}>
            <div className={styles.frameGroup}>
              <div className={styles.textFrame1} />
              <div className={styles.textFrame2} />
            </div>
            

          </div>
        </div>
        <div className={styles.textTermsOfService1} />
        <div className={styles.textTermsOfService2} />
      </div>
    </div>
  );
};

export default TextSignUpDeal;
