'use client'

import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';

const ROTATION_RANGE = 16
const HALF_ROTATION_RANGE = 16 / 2;


const TiltCard = ({ imageSrc1, imageSrc2, classNames, leftImage, rightImage, isHovering }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: 'preserve-3d',
                transform,
            }}
            className={classNames}
        >
            {leftImage && (
                <>
                    <Image
                        src={imageSrc2}
                        alt="Tilt Image 2"
                    //     className='absolute w-full rotate-12 transition-transform duration-1000 transform group-hover:translate-y-3.5
                    // left-24 top-10'
                        className={`absolute w-full rotate-12 transition-transform duration-1000 transform ${
                            isHovering ? 'translate-y-3.5' : ''
                        } left-24 top-10`}
                    />
                    <Image src={imageSrc1}
                           alt="Tilt Image 1"
                           // className ='relative w-full rotate-12'
                           className={`relative max-w-full rotate-12 transition-transform duration-1000 transform ${
                               isHovering ? 'translate-x-1' : ''}`}

                    />
                </>
            )}
            {rightImage && (
                <>
                    <Image
                        src={imageSrc2}
                        alt="Tilt Image 2"
                        // className='absolute w-full rotate-12 transition-transform duration-1000 transform group-hover:translate-y-3.5'
                        className={`absolute w-full rotate-12 transition-transform duration-1000 transform ${
                            isHovering ? 'translate-y-3.5' : ''
                        }`}
                    />
                    <Image src={imageSrc1}
                           alt="Tilt Image 1"
                           // className ='relative w-full rotate-12 left-20 top-28'
                           className={`relative max-w-full rotate-12 transition-transform duration-1000 transform ${
                               isHovering ? 'translate-x-1' : ''} left-20 top-28`}

                    />
                </>
            )}

        </motion.div>
    );
};

export default TiltCard;