import Head from "next/head";
import Lottie from "react-lottie";
import animationData from "../public/animation.json"; 
import animationData2 from "../public/animation2.json";

const LandingPage = () => {
    const log = () => {
        const path = "workwithus@NextProduction.dev";
        console.log(
            `\n%c ${path}`,
            "color:#0dd8d8; background:#0b1021; font-size:1rem; padding:0.15rem 0.25rem; margin: 0.5rem auto; font-family: Rockwell; border: 2px solid #0dd8d8; border-radius: 4px;font-weight: bold;"
        );
    };
    return (
        <div className="bg-gray-900 text-white">
            <Head>
                <title>NextProduction | Shaping Tomorrow</title>
                <meta
                    name="description"
                    content="Empowering businesses through cutting-edge technology. Join us in shaping tomorrow."
                />
            </Head>
            {/* Hero Section */}
            <section
                id="hero"
                className="hero h-screen flex items-center justify-center"
            >
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold my-4">
                        Welcome to NextProduction
                        {log()}
                    </h1>
                    <p className="mt-4 text-lg">
                        Shaping Tomorrow with Innovation
                    </p>
                    {/* Add Lottie animation */}
                    <div className="">
                        <Lottie
                            options={{
                                animationData: animationData,
                                loop: true,
                                autoplay: true,
                            }}
                            style={{ maxWidth: "60%", height: "auto" }}
                            />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        About NextProduction
                    </h2>
                    <p className="text-lg mb-6">
                        NextProduction is an open-source tech company dedicated
                        to pushing the boundaries of innovation. Were a team of
                        passionate developers, engineers, and technologists who
                        are committed to creating cutting-edge software
                        solutions, pioneering AI algorithms, crafting innovative
                        packages, and providing top-notch development services.
                    </p>
                </div>
            </section>

            {/* Our Innovations Section */}
            <section id="innovations" className="innovations py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Our Innovations</h2>
                    <p className="text-lg mb-6">
                        At NextProduction, we re constantly pushing the envelope
                        by introducing groundbreaking technologies and
                        solutions. Whether it s developing new software
                        products, pioneering AI algorithms, or creating
                        innovative packages, we re committed to driving progress
                        and empowering businesses.
                    </p>
                </div>
            </section>

            {/* Join us Section */}
            <section id="join-us" className="join-us py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Join us in Shaping Tomorrow
                    </h2>
                    <p className="text-lg mb-6">
                        Are you ready to be part of something extraordinary?
                        Join us at NextProduction and be at the forefront of
                        technological innovation. Together, let s build a future
                        where technology is limitless and possibilities are
                        endless.
                    </p>
                    <Lottie
                        options={{
                            animationData: animationData2,
                            loop: true,
                            autoplay: true,
                        }}
                        style={{ maxWidth: "100%", height: "auto" }}
                    />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                    <p className="text-lg mb-6">
                        Ready to take the next step? Reach out to us today!
                    </p>
                    <a
                        href="mailto:contact@nextproduction.dev"
                        className="text-lg underline hover:text-blue-300"
                    >
                        contact@nextproduction.dev
                    </a>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-800 py-4 text-center">
                <p>&copy; 2024 NextProduction.dev All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
