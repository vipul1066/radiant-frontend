import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  propWidth,
  propPadding,
  propHeight,
  propFlex,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  const rectangleStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
    };
  }, [propHeight, propFlex]);

  return (
    <div className={styles.rectangleWrapper} style={frameDivStyle}>
      <div className={styles.rectangle} style={rectangleStyle}>
        <div className={styles.frame} />
        <img
          className={styles.download1Icon}
          loading="eager"
          alt=""
          src="/download-2@2x.png"
        />
        <div className={styles.image}>
          <div className={styles.rectangle1} />
          <div className={styles.off}>
            <div className={styles.frame1} />
            <div className={styles.builder1}>Builder 1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
