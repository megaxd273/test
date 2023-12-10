import React from 'react';
import ContentLoader from 'react-content-loader';
import './TruckItem.css';

const TruckSkeleton = (props) => (
  <ContentLoader
    className="truck"
    speed={2}
    width={616}
    height={223}
    viewBox="0 0 616 223"
    backgroundColor="#fff"
    foregroundColor="#403f3d"
    {...props}
  >
    <rect x="10" y="10" rx="0" ry="0" width="276" height="200" />
    <rect x="310" y="10" rx="5" ry="5" width="276" height="23" />
    <rect x="310" y="45" rx="5" ry="5" width="276" height="121" />
    <rect x="310" y="184" rx="0" ry="0" width="114" height="23" />
    <rect x="480" y="185" rx="0" ry="0" width="100" height="23" />
  </ContentLoader>
);
export default TruckSkeleton;
