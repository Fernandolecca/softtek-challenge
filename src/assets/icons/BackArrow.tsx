type Props = {
  width?: number;
  height?: number;
};

export function BackArrow({ width = 20, height = 20 }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        transform="rotate(90 10 10)"
        stroke="#4F4FFF"
        stroke-width="2"
      />
      <path
        d="M7.55317 9.99995L10.8094 6.74683L11.6907 7.62808L9.32192 9.99995L11.6907 12.3718L10.8094 13.2531L7.55317 9.99995Z"
        fill="#4F4FFF"
      />
    </svg>
  );
}