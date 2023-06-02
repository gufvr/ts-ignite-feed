import styles from "./Avatar.module.css";
import PropTypes from "prop-types";

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool,
};
