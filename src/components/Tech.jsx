import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import {animate, motion} from "framer-motion"

import { FaReact, FaJava } from "react-icons/fa"; // React, Java
import { SiKotlin, SiFlutter, SiC, SiFirebase, SiAssemblyscript } from "react-icons/si"; // Kotlin, Flutter, C, Firebase, Assembleur



const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})


const Tech = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration:1.5}}
             className="my-20 text-center text-4xl">
                Technologies
            </motion.h2>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconVariants(2.5)}
                initial = "initial"
                animate= "animate"
                className="rounded-2xl border-neutral-800 p-4">
                    <SiKotlin className="text-7xl text-orange-400"/>
                </motion.div>
    
                <motion.div variants={iconVariants(1)}
                initial = "initial"
                animate= "animate" className="rounded-2xl border-neutral-800 p-4">
                    <SiFlutter className="text-7xl text-blue-500"/>
                </motion.div>
    
                <motion.div variants={iconVariants(8)}
                initial = "initial"
                animate= "animate" className="rounded-2xl border-neutral-800 p-4">
                    <FaJava className="text-7xl"/>
                </motion.div>
    
                < motion.div variants={iconVariants(4)}
                initial = "initial"
                animate= "animate" className="rounded-2xl border-neutral-800 p-4">
                    <FaReact className="text-7xl text-blue-700"/>
                </motion.div>
    
                <motion.div variants={iconVariants(7)}
                initial = "initial"
                animate= "animate" className="rounded-2xl border-neutral-800 p-4">
                    <SiC className="text-7xl text-green-500"/>
                </motion.div>
    
                <motion.div variants={iconVariants(2)}
                initial = "initial"
                animate= "animate" className="rounded-2xl border-neutral-800 p-4">
                    <SiFirebase className="text-7xl text-sky-700"/>
                </motion.div>
    
                <motion.div variants={iconVariants(7)}
                initial = "initial"
                animate= "animate" className="rounded-2xl border-neutral-800 p-4">
                    <SiAssemblyscript className="text-7xl "/>
                </motion.div>
            </motion.div>
        </div>
      )
}

export default Tech