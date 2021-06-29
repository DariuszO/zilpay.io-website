import React from 'react';

import { Colors } from '@/config/colors';

type Prop = {
  width: number | string;
  height: number | string;
  color: Colors;
};

export const TwitterIcon: React.FC<Prop> = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 33"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.9466 0C8.08022 0 0.892578 7.18764 0.892578 16.0541C0.892578 24.9205 8.08022 32.1081 16.9466 32.1081C25.813 32.1081 33.0007 24.9205 33.0007 16.0541C33.0007 7.18764 25.813 0 16.9466 0ZM17.7119 12.992L17.6698 12.2977C17.5437 10.4979 18.651 8.85408 20.4031 8.21638C21.0478 7.98965 22.1411 7.96131 22.856 8.1597C23.1363 8.24473 23.6689 8.52815 24.0474 8.78323L24.7342 9.25087L25.4911 9.00996C25.9116 8.88243 26.4723 8.66986 26.7246 8.52815C26.9628 8.40061 27.1731 8.32975 27.1731 8.37227C27.1731 8.61318 26.6545 9.4351 26.22 9.88857C25.6313 10.5263 25.7995 10.583 26.9909 10.1578C27.7057 9.91691 27.7197 9.91691 27.5796 10.1862C27.4955 10.3279 27.061 10.8239 26.5984 11.2773C25.8135 12.0567 25.7714 12.1418 25.7714 12.7936C25.7714 13.7998 25.2949 15.8971 24.8183 17.045C23.9353 19.199 22.043 21.4238 20.1508 22.5434C17.4876 24.1163 13.9414 24.5131 10.9559 23.592C9.96071 23.2802 8.25069 22.4867 8.25069 22.345C8.25069 22.3024 8.7693 22.2458 9.40005 22.2316C10.7176 22.2032 12.0352 21.8348 13.1565 21.1829L13.9134 20.7295L13.0444 20.4319C11.8109 20.0067 10.7036 19.0289 10.4233 18.1078C10.3392 17.8102 10.3672 17.796 11.1521 17.796L11.9651 17.7819L11.2783 17.4559C10.4653 17.045 9.72243 16.3506 9.358 15.642C9.09168 15.1319 8.75528 13.8423 8.8534 13.7431C8.88143 13.7006 9.17578 13.7856 9.51218 13.899C10.4793 14.2533 10.6055 14.1682 10.0448 13.5731C8.99357 12.4961 8.67118 10.8947 9.17578 9.37841L9.41406 8.6982L10.3392 9.61932C12.2314 11.4757 14.46 12.5811 17.0111 12.907L17.7119 12.992Z"
        fill={color}
      />
    </svg>
  );
};
