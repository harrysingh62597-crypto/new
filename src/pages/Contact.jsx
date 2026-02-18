import { BsTelephone } from 'react-icons/bs';
import { BiMap, BiEnvelope } from 'react-icons/bi';
import { GrCheckmark } from 'react-icons/gr';
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const fullMessage = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const encodedSubject = encodeURIComponent(subject);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Harrysingh62597@gmail.com&su=${encodedSubject}&body=${encodedMessage}`;

    window.open(gmailUrl, '_blank');
  };
  return (
    <>
      <div id="page" className="page one-page-style">
        <div id='main' className='site-main'>
          <div className='pt-wrapper'>
            <div className='subpages'>
              <section className="pt-page" id="contact">
                <div className="section-inner custom-page-content">
                  <div className="section-title-block second-style">
                    <h2 className="section-title">Contact</h2>
                    <h5 className="section-description">Get in Touch</h5>
                  </div>

                  <div className="section-content">
                    <div className="row">
                      <div className="col-xs-12 col-sm-3">
                        <div className="col-inner bs-30">
                          <div className="lm-info-block gray-default">
                            <i> <BsTelephone /> </i>
                            <h4>+61 431 322 332</h4>
                            <span className="lm-info-block-value"></span>
                            <span className="lm-info-block-text"></span>
                          </div>
                        </div>
                      </div>

                      <div className="col-xs-12 col-sm-3">
                        <div className="col-inner bs-30">
                          <div className="lm-info-block gray-default">
                            <i> <BiMap /> </i>
                            <h4>Western Austraila</h4>
                            <span className="lm-info-block-value"></span>
                            <span className="lm-info-block-text"></span>
                          </div>
                        </div>
                      </div>

                      <div className="col-xs-12 col-sm-3">
                        <div className="col-inner bs-30">
                          <div className="lm-info-block gray-default">
                            <i> <BiEnvelope /> </i>
                            <h4><a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d1b0bdb4a991b4a9b0bca1bdb4ffb2bebc">Harrysingh62597@gmail.com</a></h4>
                            <span className="lm-info-block-value"></span>
                            <span className="lm-info-block-text"></span>
                          </div>
                        </div>
                      </div>

                      <div className="col-xs-12 col-sm-3">
                        <div className="col-inner bs-30">
                          <div className="lm-info-block gray-default">
                            <i> <GrCheckmark /> </i>
                            <h4>Available for Work</h4>
                            <span className="lm-info-block-value"></span>
                            <span className="lm-info-block-text"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className=" col-xs-12 col-sm-8 offset-sm-1 offset-sm-2">
                        <div className="col-inner ts-20">
                          <div className="block-title">
                            <h3>How Can I Help You?</h3>
                          </div>

                          <form id="contact_form" className="contact-form" onSubmit={handleSubmit}>

                            <div className="messages"></div>

                            <div className="controls two-columns">
                              <div className="fields clearfix">
                                <div className="left-column">
                                  <div className="form-group form-group-with-icon">
                                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Full Name" required="required" data-error="Name is required." />
                                    <div className="form-control-border"></div>
                                    <div className="help-block with-errors"></div>
                                  </div>

                                  <div className="form-group form-group-with-icon">
                                    <input id="form_email" type="email" name="email" className="form-control" placeholder="Email Address" required="required" data-error="Valid email is required." />
                                    <div className="form-control-border"></div>
                                    <div className="help-block with-errors"></div>
                                  </div>

                                  <div className="form-group form-group-with-icon">
                                    <input id="form_subject" type="text" name="subject" className="form-control" placeholder="Subject" required="required" data-error="Subject is required." />
                                    <div className="form-control-border"></div>
                                    <div className="help-block with-errors"></div>
                                  </div>
                                </div>
                                <div className="right-column">
                                  <div className="form-group form-group-with-icon">
                                    <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows="7" required="required" data-error="Please, leave me a message."></textarea>
                                    <div className="form-control-border"></div>
                                    <div className="help-block with-errors"></div>
                                  </div>
                                </div>
                              </div>

                              <div className="g-recaptcha" data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI">
                                <div>
                                  <div>
                                    <iframe title="reCAPTCHA"
                                      src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI&amp;co=aHR0cHM6Ly9sbXBpeGVscy5jb206NDQz&amp;hl=en&amp;v=pCoGBhjs9s8EhFOHJFe8cqis&amp;size=normal&amp;cb=u899yrkzptar"
                                      width="304" height="78" role="presentation" name="a-hzzgaqhmwqyf" frameBorder="0" scrolling="no"
                                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                                  </div>
                                </div>
                              </div>

                              <input type="submit" className="button btn-send" value="Send message" />
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
