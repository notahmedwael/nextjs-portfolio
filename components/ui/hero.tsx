import ShinyText from '@/components/reactbits/ShinyText'
import GradientText from '@/components/reactbits/GradientText'
import TiltedCard from '@/components/reactbits/TiltedCard'

export default function Hero(){
    return(
        <section className="w-[80%] mt-20 mx-auto min-h-screen flex flex-col lg:flex-row lg:justify-between">

            {/* Text Side */}
            <div className="flex flex-col justify">
                <h1 className="text-6xl font-black ">
                    Ahmed Wael
                </h1>

                <GradientText
                    colors={["#54ed12","#48ea63","#d7dfd8","#54ed12"]}
                    animationSpeed={8}
                    showBorder={false}
                    className="hover:cursor-auto mt-3 text-2xl"
                    >
                        Software Developer
                    </GradientText>


                <p className="mt-7 text-brand-light/75 max-w-lg">
                    <ShinyText
                    text="✨ I can help you build scalable software solutions, AI powered apps while being secure and efficient ✨"
                    speed={4}
                    delay={0}
                    color="#eeeeee"
                    shineColor="#05AB6B"
                    spread={120}
                    direction="left"
                    yoyo={false}
                    pauseOnHover={false}
                    disabled={false}
                    />
                    
                </p>
            </div>

            {/* Card Side */}
            <div>
                <TiltedCard
                imageSrc="/ahmed-wael.png"
                altText="Ahmed Wael - Software Developer"
                captionText="Ahmed Wael's Cool Card :p"
                containerHeight="400px"
                containerWidth="400px"
                imageHeight="400px"
                imageWidth="400px"
                rotateAmplitude={4}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent={false}
                overlayContent={
                    <p className="tilted-card-demo-text">
                    Ahmed Wael&apos;s Card
                    </p>
                }
                />
            </div>
        </section>
    )
}