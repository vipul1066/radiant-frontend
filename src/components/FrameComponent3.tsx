import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.rectangle} />
      <div className={styles.frameParent}>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangle1} />
          <div className={styles.rectangle2} />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangle3} />
            <div className={styles.rectangle4} />
            <div className={styles.rectangle5} />
          </div>
          <div className={styles.image} />
        </div>
        <div className={styles.webBuilderTextNodeParent}>
          <div className={styles.webBuilderTextNode} />
          <div className={styles.computerModernRectangle}>
            <div className={styles.rectangle6} />
            <img className={styles.imageIcon} alt="" src="/image.svg" />
          </div>
        </div>
        <div className={styles.downloadButtonFrameParent}>
          <div className={styles.downloadButtonFrame}>
            <div className={styles.contactFrame} />
            <div className={styles.categoriesFrame}>
              <div className={styles.frameImageLink} />
              <div className={styles.rectangleLinkFrame}>
                <div className={styles.frameCallToAction} />
                <div className={styles.frameCallToAction1} />
                <div className={styles.categories}>Categories</div>
              </div>
              <div className={styles.dataCenterRoboticAutomation}>
                <div className={styles.rectangle7} />
                <div className={styles.signUpTextNode}>
                  <div className={styles.signUpButtonFrame} />
                  <div className={styles.websiteBuilders}>Website Builders</div>
                </div>
              </div>
              <div className={styles.dataCenterRoboticAutomation1}>
                <div className={styles.rectangle8} />
                <div className={styles.frameDiv}>
                  <div className={styles.rectangle9} />
                  <div className={styles.todaysDeals}>Today's deals</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWixSupport}>
            <div className={styles.textDealView}>
              <div className={styles.imageDownload} />
              <div className={styles.imageDownload1} />
              <div className={styles.imageDownload2} />
              <div className={styles.imageDownload3} />
            </div>
            <div className={styles.image1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
