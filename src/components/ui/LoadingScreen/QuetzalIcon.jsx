import React from 'react';
import { motion } from 'framer-motion';
import quetzalSvg from '../../../assets/vectorFiles/Quetzal3-cropped.svg';

const QuetzalIcon = ({ size = 70, className }) => {
  return (
    <motion.img
      src={quetzalSvg}
      alt="Quetzal"
      style={{
        width: `${size}px`,
        height: 'auto',
        filter: 'drop-shadow(1px 1px 0 var(--accent-citron)) drop-shadow(-1px -1px 0 var(--accent-citron)) drop-shadow(1px -1px 0 var(--accent-citron)) drop-shadow(-1px 1px 0 var(--accent-citron)) drop-shadow(0 0 15px var(--accent-citron))',
        transformOrigin: 'center center',
        willChange: 'filter, transform',
        WebkitTransform: 'translate3d(0, 0, 0)'
      }}
      className={className}
    />
  );
};

export default QuetzalIcon;
