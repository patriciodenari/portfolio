const Contact = () => {
    return (
        <div id="contact-container">
            <div data-aos="fade-up" data-aos-duration="500"  id="contact">
                <h2>Contact</h2>
                <div id="social-links-container">
                    <div id="social-links">
                        <div id="item1">
                            <div className="image-container">
                                <img src="./img/linkedin.png" alt=""/>
                            </div>
                            <div className="text-container">
                                <a href="https://www.linkedin.com/in/patricio-denari/" target={"_blank"}>
                                    <p>patriciodenari</p>
                                    <img src="./img/new-tab.png" alt="open-tab"/>
                                </a>
                            </div>
                        </div>
                        <div id="item2">
                            <div className="image-container">
                                <img src="./img/github.png" alt=""/>
                            </div>
                            <div className="text-container">
                                <a href="https://github.com/patriciodenari" target='_blank'>
                                    <p>patriciodenari</p>
                                    <img src="./img/new-tab.png" alt="open-tab"/>
                                </a>
                            </div>
                        </div>
                        <div id="item3">
                            <div className="image-container">
                                <img src="./img/mail.png" alt=""/>
                            </div>
                            <div className="text-container">
                                <a href="https://mail.google.com/mail/u/0/?tab=rm0&ogbl#inbox?compose=GTvVlcSHwQfjrKQsSnRdJvFlRMkNfFzTDKgNtNlxpzKnppfRsDlPczGbTfLwhRmJxkcbKwDRTxklb" target='_blank'>
                                    <p>patriciodenari@gmail.com</p>
                                    <img src="./img/new-tab.png" alt="open-tab"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;