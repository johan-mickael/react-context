import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = (Component, classNames) => function HOC() {
    return (
        <motion.div
            whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: .7 }}
            className={`${classNames} app__flex`}
        >
            <Component />
        </motion.div>
    );
};

export default MotionWrap;