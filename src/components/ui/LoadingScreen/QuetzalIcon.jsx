import React from 'react';
import { motion } from 'framer-motion';
import quetzalSvg from '../../../assets/vectorFiles/Quetzal3.svg';

const QuetzalIcon = ({ size = 180, className }) => {
  return (
    <motion.img
      src={quetzalSvg}
      alt="Quetzal"
      style={{
        width: `${size}px`,
        height: 'auto',
        filter: 'brightness(0) drop-shadow(1px 1px 0 var(--accent-citron)) drop-shadow(-1px -1px 0 var(--accent-citron)) drop-shadow(1px -1px 0 var(--accent-citron)) drop-shadow(-1px 1px 0 var(--accent-citron)) drop-shadow(0 0 15px var(--accent-citron))',
        transformOrigin: 'center center'
      }}
      className={className}
    />
  );
};

export default QuetzalIcon;
