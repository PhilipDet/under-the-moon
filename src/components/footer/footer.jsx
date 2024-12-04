import { FooterStyled } from "./footer.styled.js";

export const Footer = () => {
    return (
        <FooterStyled>
            <section className="container">
                <section id="subscribe">
                    <h3>Subscribe to newsletter</h3>
                    <input type="text" placeholder="Full name" />
                    <input type="email" placeholder="Email" />
                    <input type="button" value="Sign Up" />
                </section>
                <section id="links-container">
                    <section id="left">
                        <ul id="quick-links">
                            <p className="footer-header">Quick Links</p>
                            <li>
                                <a href="#">Hjem</a>
                            </li>
                            <li>
                                <a href="#">Om Os</a>
                            </li>
                            <li>
                                <a href="#">Prisliste</a>
                            </li>
                            <li>
                                <a href="#">Booking</a>
                            </li>
                            <li>
                                <a href="#">Newsletter</a>
                            </li>
                            <li>
                                <a href="#">Kontakt</a>
                            </li>
                        </ul>
                        <section id="socials">
                            <p className="footer-header">Follow Us</p>
                            <ul>
                                <li>
                                    <a href="#">IMG</a>
                                </li>
                                <li>
                                    <a href="#">IMG</a>
                                </li>
                                <li>
                                    <a href="#">IMG</a>
                                </li>
                            </ul>
                        </section>
                    </section>
                    <section id="find-us">
                        <p className="footer-header">Find Us</p>
                        <section id="items">
                            <ul>
                                <li>WhatsApp</li>
                                <li>+45 23 43 43 43</li>
                            </ul>
                            <ul>
                                <li>Telefonnummer</li>
                                <li>+45 58 84 84 84</li>
                            </ul>
                            <ul>
                                <li>Adresse</li>
                                <li>Supergatan 56,</li>
                                <li>Oslo, Norway</li>
                            </ul>
                        </section>
                    </section>
                </section>
            </section>
        </FooterStyled>
    );
};
