import tbm1 from "@/assets/tbm1.png"; // Assuming the new images are named accordingly
import tbm2 from "@/assets/tbm2.png";
import tbm3 from "@/assets/tbm3.png";
import tbm4 from "@/assets/tbm4.png";
import tbm5 from "@/assets/tbm5.png";
import tbm6 from "@/assets/tbm6.png";
import tbm7 from "@/assets/tbm7.png";
import tbm8 from "@/assets/tbm8.png";

const TeenbeenMedia = () => {
    return (
        <div className="container mx-auto p-8 rounded-lg">
            <h1 className="text-5xl font-normal text-gray-900 mb-8 text-center">Teenbeen Media Application Migration</h1>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Client Profile</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Teenbeen Media Inc. provides media services namely News, Films, and Events. Teenbeen Media Inc. wants to provide entertainment services to everyone.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Program Objective</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    Teenbeen Media Inc. wanted to create an application which should be available on web, Android phones/tabs, and iOS phones/tabs that will allow users to view local news and reporters to upload news videos and do live news streaming of any event.
                </p>
            </section>

            <section className="mb-12">
                <h2 className="text-4xl font-light text-gray-800 mb-6">TechCompiler Solution</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                    TechCompiler designed and developed an architecture for the Newsbeen App to develop it on web, Android, and iOS-based app. Newsbeen provides backward compatibility and it runs on any iOS version, any Android version, and on the web.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-4xl font-light text-gray-800 mb-6">Technology Used</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 text-gray-700 text-lg list-disc list-inside">
                    <li>Middleware - IIS 7, Xamarin</li>
                    <li>iOS - 11+</li>
                    <li>Android - 25+</li>
                    <li>Application Management - C#, XCode 9.2, Web Services</li>
                    <li>Client Applications - ASP.NET MVC, Team Foundation Server, .NET 4.5</li>
                </ul>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6">How It Works</h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    The Newsbeen App supports the following points for Users and Reporters:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4 text-lg">
                    <li>Reporters need to register themselves to upload videos or live streaming.</li>
                    <li>After a successful reference check by the back-end team, Reporters will get a welcome message to start uploading videos or live streaming.</li>
                    <li>Live streaming can be done only by authorized Reporters.</li>
                    <li>Live streaming will be denoted as yellow dots on the map and uploaded videos as red dots.</li>
                    <li>Reporters can upload 5-minute long videos only, but there is no time limitation for live streaming.</li>
                    <li>Uploaded videos will be checked and published by the back-end team.</li>
                    <li>Live streaming can be stopped anytime by the back-end team.</li>
                    <li>Users do not need to register themselves and can enjoy watching videos based on their location.</li>
                    <li>When a new video is uploaded or a live streaming starts, users will get notifications based on their location.</li>
                    <li>Users can search videos based on location or keywords.</li>
                    <li>Users can share videos on Facebook, Twitter, WhatsApp, or via Email.</li>
                </ul>
            </section>

            <section>
                <h2 className="text-4xl font-light text-gray-800 mb-6 mt-8">How it Looks</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">1. Application Dashboard</h3>
                        <img src={tbm1} alt="Application Dashboard" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">2. Application Menu</h3>
                        <img src={tbm2} alt="Application Menu" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">3. Application Registration Form</h3>
                        <img src={tbm3} alt="Application Registration Form" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">4. Application Login</h3>
                        <img src={tbm4} alt="Application Login" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">5. Application Upload Latest News</h3>
                        <img src={tbm5} alt="Application Upload Latest News" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">6. Application Latest News</h3>
                        <img src={tbm6} alt="Application Latest News" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">7. Live News Streaming</h3>
                        <img src={tbm7} alt="Live News Streaming" className="mt-4 rounded-md w-full" />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full">
                        <h3 className="font-light text-lg text-gray-800">8. Application Search News</h3>
                        <img src={tbm8} alt="Application Search News" className="mt-4 rounded-md w-full" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default TeenbeenMedia;
