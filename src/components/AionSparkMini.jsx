import React from "react";

export default function AionSparkMini({ className = "" }) {
  return (
    <svg
      width="36"
      height="28"
      viewBox="0 0 36 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip_spark_mini)">
        <rect width="35.6547" height="27.0976" rx="9.95269" fill="white" />
        <g filter="url(#f0_mini)">
          <circle cx="26.3585" cy="23.8427" r="14.4369" fill="#F5EA1F" />
        </g>
        <g filter="url(#f1_mini)">
          <circle cx="24.171" cy="0" r="7.98403" fill="#0D9AE9" />
        </g>
        <g filter="url(#f2_mini)">
          <circle cx="2.8436" cy="10.9371" r="14.4369" fill="#7BC53C" />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.8273 11.5554C21.8682 10.6046 23.8688 5.3158 24.0669 2.9388C24.6612 6.4052 26.741 12.4467 35.6547 12.4467V14.2295C26.741 14.2295 24.6612 19.9738 24.0669 23.4403C23.8688 21.0633 21.8682 16.0716 17.8273 15.1208C13.7865 14.17 4.2588 13.9323 0 13.9323V12.7439C4.2588 12.7439 13.7865 12.5062 17.8273 11.5554Z"
          fill="#131313"
        />
      </g>
      <defs>
        <filter id="f0_mini" x="-5" y="-7.5" width="62.7" height="62.7" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="8.45979" />
        </filter>
        <filter id="f1_mini" x="-0.7" y="-24.9" width="49.8" height="49.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="8.45979" />
        </filter>
        <filter id="f2_mini" x="-28.5" y="-20.4" width="62.7" height="62.7" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="8.45979" />
        </filter>
        <clipPath id="clip_spark_mini">
          <rect width="35.6547" height="27.0976" rx="9.95269" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}