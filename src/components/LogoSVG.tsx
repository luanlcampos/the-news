type Props = {
  w: number;
  h: number;
};

const SvgComponent = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" {...props}>
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#006699" stopOpacity="1" />
        <stop offset="100%" stopColor="#00ccff" stopOpacity="1" />
      </linearGradient>
    </defs>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
    <text
      x="50%"
      y="70"
      fill="#fff"
      fontSize="60"
      fontWeight="bold"
      textAnchor="middle"
    >
      The News
    </text>
  </svg>
);

export default SvgComponent;
