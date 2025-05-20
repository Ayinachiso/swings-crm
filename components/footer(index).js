class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <footer id="site-footer" class="site-footer">
        <div class="container">
            <div class="space-90"></div>
            <div class="row">
                <div class="col-lg-6 mb-5 mb-lg-0">
                    <h3 class="text-light">Ready to Get Started? <br> Sign Up Now and Try Free</h3>
                </div>
                <div class="col-lg-6">
                    <form action="" method="post" id="form" class="mc4wp-form">
                        <div class="mc4wp-form-fields">
                            <div class="main-form">
                                <input id="email" type="email" name="email" placeholder="Enter Your Email" required>
                                <input type="submit" id="send" name="submit" value="Subscribe Now">
                                <div class="clear">
                                    <span class="error" id="err-email">Please enter your email</span>
                                </div>   
                                <span class="error" id="err-emailvld">Email is not a valid format</span>
                                <div class="error" id="err-form">There was a problem validating the form please check!</div>
                                <div class="error" id="err-timedout">The connection to the server timed out!</div>
                                <div class="error" id="err-state"></div>
                                <span id="ajaxsuccess"></span>    
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="space-50"></div>
            <hr class="f1">
            <div class="space-50"></div> 
            <div class="row">
                <div class="col-md-3 col-sm-6 mb-5 mb-md-0">
                    <div class="footer-widget">
                        <h5 class="footer-title">About Us</h5>
                        <ul>
                            <li><a href="html/contact.html">Contact</a></li>
                            <!-- <li><a href="html/services-3.html">Services</a></li> -->
                            <!-- <li><a href="html/sitemaps.html">Sitemaps</a></li> -->
                        </ul>
                    </div>
                </div>
                <!-- <div class="col-md-3 col-sm-6 mb-5 mb-md-0">
                    <div class="footer-widget">
                        <h5 class="footer-title">Support</h5>
                        <ul>
                            <li><a href="html/help-center.html">Help Center</a></li>
                            <li><a href="html/resource.html">Resources</a></li>
                            <li><a href="html/demo.html">Demo</a></li>
                            <li><a href="html/pricing.html">Pricing</a></li>
                            <li><a href="html/security.html">Security</a></li>
                        </ul>
                    </div>
                </div> -->
                <div class="col-md-3 col-sm-6 mb-5 mb-md-0">
                    <div class="footer-widget">
                        <h5 class="footer-title">Integrations</h5>
                        <ul>
                            <li><a href="#">3CX</a></li>
                            <li><a href="#">Microsoft Dynamics 365</a></li>
                            <li><a href="#">Whatsapp</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="footer-widget">
                        <h5 class="footer-title">Follow Us</h5>
                        <ul class="row social">
                            <li><a href="http://www.facebook.com/swingscrm"><i class="fab fa-facebook-f"></i></a></li>
                            <!-- <li><a href="#"><i class="fa-brands fa-x-twitter"></i></a></li> -->
                            <!-- <li><a href="#"><i class="fab fa-instagram"></i></a></li> -->
                            <!-- <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li> -->
                        </ul>
                    </div>
                </div>
            </div>
            <div class="space-90"></div>
            <div class="row align-items-center">
                <div class="col-xl-9 col-lg-8 col-md-7 col-sm-12">
                    <p class="copyright">Copyright © 2023 SwingsCRM.</p>
                    <p class="copyright">All Rights Reserved.</p>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-4 col-sm-12 align-self-start ft-menu">
                    <a class="mr-2" href="html/privacy-policy.html">Privacy Policy</a>
                    <a href="html/terms.html">Terms of Use</a>
                </div>
            </div>
            <div class="space-40"></div>
        </div>
    </footer>

        `;
    }
}

customElements.define('index-footer', Footer);