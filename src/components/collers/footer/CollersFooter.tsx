import YoutubeIcon from "../../../assets/collers-assets/icons/youtube.png";
import LinkedInIcon from "../../../assets/collers-assets/icons/linkedin.png";
import InstagramIcon from "../../../assets/collers-assets/icons/instagram.png";
import TwitterIcon from "../../../assets/collers-assets/icons/twitter.png";
import FacebookIcon from "../../../assets/collers-assets/icons/facebook.png";

function CollersFooter() {
    return (
        <footer className="footer bg-case-dark-blue p-10 text-white flex flex-col items-center">
            <div className="grid grid-cols-4 gap-8 w-full max-w-screen-lg">
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title text-white">Product</h6>
                    <a className="link link-hover text-white">Pricing</a>
                    <a className="link link-hover text-white">Overview</a>
                    <a className="link link-hover text-white">Browse</a>
                    <a className="link link-hover text-white">Accessibility</a>
                    <a className="link link-hover text-white">Five</a>
                </nav>
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title text-white">Solutions</h6>
                    <a className="link link-hover text-white">Brainstorming</a>
                    <a className="link link-hover text-white">Ideation</a>
                    <a className="link link-hover text-white">Wireframing</a>
                    <a className="link link-hover text-white">Research</a>
                    <a className="link link-hover text-white">Design</a>
                </nav>
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title text-white">Support</h6>
                    <a className="link link-hover text-white">Contact Us</a>
                    <a className="link link-hover text-white">Developers</a>
                    <a className="link link-hover text-white">Documentation</a>
                    <a className="link link-hover text-white">Integrations</a>
                    <a className="link link-hover text-white">Reports</a>
                </nav>
                <form className="flex flex-col gap-4 items-start">
                    <h6 className="footer-title text-white">Get the App</h6>
                    <h6 className="footer-title text-white">Follow Us</h6>
                    <div className="flex gap-4">
                        <img
                            src={FacebookIcon}
                            alt="Facebook"
                            className="w-8 h-8 cursor-pointer"
                        />
                        <img
                            src={TwitterIcon}
                            alt="Twitter"
                            className="w-8 h-8 cursor-pointer"
                        />
                        <img
                            src={InstagramIcon}
                            alt="Instagram"
                            className="w-8 h-8 cursor-pointer"
                        />
                        <img
                            src={LinkedInIcon}
                            alt="LinkedIn"
                            className="w-8 h-8 cursor-pointer"
                        />
                        <img
                            src={YoutubeIcon}
                            alt="YouTube"
                            className="w-8 h-8 cursor-pointer"
                        />
                    </div>
                </form>
            </div>

            <div className="border-t border-white w-full max-w-screen-lg mt-8"></div>
            <div className="flex justify-between w-full max-w-screen-lg mt-4 text-sm">
                <span className="text-white">Collers @ 2024. All rights reserved.</span>
                <span className="text-white">Terms Privacy Contact EN</span>
            </div>
        </footer>
    );
}

export default CollersFooter;
