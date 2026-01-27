import ShinyText from '@/components/reactbits/ShinyText'
import GradientText from '@/components/reactbits/GradientText'
import RotatingText from '@/components/reactbits/RotatingText'
import TiltedCard from '@/components/reactbits/TiltedCard'
import Link from "next/link";

export default function Hero() {
    return (
        
        <section className="w-[90%] md:w-[80%] mt-10 md:mt-20 mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12">

            {/* Text Side */}
            <div className="flex flex-col justify-between w-full lg:w-1/2 text-center lg:text-left items-center lg:items-start">
                <div>
                    <h1 className="text-5xl md:text-6xl font-black">
                        Ahmed Wael
                    </h1>

                <GradientText
                    colors={["#54ed12","#48ea63","#d7dfd8","#54ed12"]}
                    animationSpeed={8}
                    showBorder={false}
                    className="hover:cursor-auto mt-3 text-2xl"
                    >
                        <RotatingText
                        texts={['Software Developer', 'Football Enthusiast', 'Esports Enjoyer', 'Book Reader', 'Gym Buddy']}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-brand-accent text-brand-light/90 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                        />
                </GradientText>

                    <p className="mt-8 md:mt-10 text-brand-light/75 max-w-lg text-balance">
                        <ShinyText
                            text="✨ I can help you build scalable software solutions, AI powered apps while being secure and efficient ✨"
                            speed={4}
                            color="#eeeeee"
                            shineColor="#05AB6B"
                            disabled={false}
                        />
                    </p>
                </div>

                {/* Buttons - Stack on tiny screens, row on small+ */}
                <div className='mt-10 text-brand-light flex flex-col sm:flex-row gap-5 md:gap-10 w-full sm:w-auto'>
                    <Link href='#projects' className="w-full sm:w-auto">
                        <button
                            type="button"
                            className="w-full sm:w-auto p-3 md:p-2 bg-brand-light rounded-md text-brand-dark font-medium hover:bg-brand-accent hover:text-brand-light transition duration-300 cursor-pointer"
                        >
                            Previous Work
                        </button>
                    </Link>

                    <a href="/resume.pdf" download="Ahmed-Wael-Resume.pdf" className="w-full sm:w-auto">
                        <button
                            type="button"
                            className="w-full sm:w-auto p-3 md:p-2 border-2 border-brand-accent rounded-md text-brand-light font-medium hover:bg-brand-accent transition duration-300 cursor-pointer"
                        >
                            Download CV
                        </button>
                    </a>
                </div>
            </div>

            {/* Card Side */}
            <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                <TiltedCard
                    imageSrc="/ahmed-wael.png"
                    altText="Ahmed Wael - Software Developer"
                    captionText="Ahmed Wael's Cool Card :p"
                    containerHeight="min(400px, 80vw)"
                    containerWidth="min(400px, 80vw)"
                    imageHeight="min(400px, 80vw)"
                    imageWidth="min(400px, 80vw)"
                    rotateAmplitude={4}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip
                    displayOverlayContent={false}
                />
            </div>
        </section>
    )
}