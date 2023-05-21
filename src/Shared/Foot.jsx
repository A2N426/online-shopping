import { Footer } from "flowbite-react";
import { FaFacebook,FaInstagram,FaTwitter,FaGithub } from 'react-icons/fa';

const Foot = () => {
    return (
        <Footer className="border" bgDark={true}>
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 py-8 lg:px-14 px-8 md:grid-cols-4 bg-gray-400">
                    <div>
                        <img className="rounded-md w-14 mb-2" src="https://img.freepik.com/free-vector/gradient-t-logo-template_23-2149371037.jpg?size=626&ext=jpg&ga=GA1.2.24677610.1673838713&semt=ais" alt="" />
                        <Footer.LinkGroup className="text-black font-semibold" col={true}>
                            <Footer.Link href="#">
                                About
                            </Footer.Link>
                            <Footer.Link href="#">
                                Careers
                            </Footer.Link>
                            <Footer.Link href="#">
                                Brand Center
                            </Footer.Link>
                            <Footer.Link href="#">
                                Blog
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title  title="help center" />
                        <Footer.LinkGroup className="text-black font-semibold" col={true}>
                            <Footer.Link href="#">
                                Discord Server
                            </Footer.Link>
                            <Footer.Link href="#">
                                Twitter
                            </Footer.Link>
                            <Footer.Link href="#">
                                Facebook
                            </Footer.Link>
                            <Footer.Link href="#">
                                Contact Us
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="legal" />
                        <Footer.LinkGroup className="text-black font-semibold" col={true}>
                            <Footer.Link href="#">
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link href="#">
                                Licensing
                            </Footer.Link>
                            <Footer.Link href="#">
                                Terms & Conditions
                            </Footer.Link>
                            <Footer.Link href="#">
                                Agree with we
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="download" />
                        <Footer.LinkGroup className="text-black font-semibold" col={true}>
                            <Footer.Link href="#">
                                iOS
                            </Footer.Link>
                            <Footer.Link href="#">
                                Android
                            </Footer.Link>
                            <Footer.Link href="#">
                                Windows
                            </Footer.Link>
                            <Footer.Link href="#">
                                MacOS
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                </div>
                <div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        href="#"
                        by="Flowbite™"
                        year={2022}
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-gray-400 text-3xl lg:mr-5">
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaTwitter/>
                        <FaGithub/>
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default Foot;