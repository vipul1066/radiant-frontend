import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.rectangle} />
      <div className={styles.privacyPolicyLink} />
      <div className={styles.contactSection} />
      <div className={styles.contactSection1} />
      <div className={styles.contactSection2} />
      <div className={styles.uSFlagImage}>
        <div className={styles.termsOfServiceLink}>
          <div className={styles.categoriesFrame}>
            <div className={styles.categoriesText}>
              <div className={styles.webBuilderFrame}>
                <div className={styles.categories}>Categories</div>
                <div className={styles.unitedStatesLabel}>
                  <div className={styles.webBuilder}>Web Builder</div>
                </div>
                <div className={styles.hostingAreaParent}>
                  <div className={styles.hostingArea}>
                    <div className={styles.rectangle1} />
                    <div className={styles.hosting}>Hosting</div>
                  </div>
                  <div className={styles.dataCenter}>Data Center</div>
                  <div className={styles.roboticAutomation}>
                    Robotic-Automation
                  </div>
                </div>
              </div>
              <div className={styles.contactSection3}>
                <div className={styles.rectangleGroup}>
                  <div className={styles.rectangle2} />
                  <div className={styles.builderWeb} />
                  <div className={styles.contact}>Contact</div>
                </div>
                <div className={styles.contactParent}>
                  <div className={styles.contact1}>Contact</div>
                  <div className={styles.frameParent}>
                    <div className={styles.frameGroup}>
                      <div className={styles.frameWrapper}>
                        <div className={styles.rectangleContainer}>
                          <div className={styles.rectangle3} />
                          <div className={styles.termsAndConditions}>
                            <div className={styles.termsOfServiceLabel} />
                            <div className={styles.privacyPolicy}>
                              Privacy Policy
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.privacyPolicyCategories}>
                        <div className={styles.image} />
                        <div className={styles.unitedStates}>United States</div>
                      </div>
                      <img
                        className={styles.imageIcon}
                        alt=""
                        src="/image-20.svg"
                      />
                    </div>
                    <div className={styles.rectangleFrameGroup}>
                      <div className={styles.rectangleBackground} />
                      <div className={styles.termsTerminationLabel}>
                        <div className={styles.rectangleFrameContainer} />
                        <div className={styles.termsOfService}>
                          Terms Of Service
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.rectangle4} />
                  <div className={styles.rectangle5} />
                  <div className={styles.categories1}>Categories</div>
                </div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.rectangle6} />
                  <div className={styles.rectangle7} />
                  <div className={styles.about}>About</div>
                </div>
              </div>
            </div>
            <div className={styles.rectangle8} />
          </div>
          <div className={styles.imagePlaceholderParent}>
            <div className={styles.imagePlaceholder} />
            <div className={styles.contactFormFields} />
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.rectangle9} />
        <div className={styles.rectangle10} />
        <div className={styles.rectangle11} />
      </div>
    </div>
  );
};

export default FrameComponent;
