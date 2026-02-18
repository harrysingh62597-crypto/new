import { SlFlag } from 'react-icons/sl';
import { BiStore, BiLaptop, BiPencil } from 'react-icons/bi';
import testimonial1 from './assest/Images/testimonial-1.jpg';
import testimonial2 from './assest/Images/testimonial-2.jpg';
import testimonial3 from './assest/Images/testimonial-3.jpg';
import testimonial4 from './assest/Images/testimonial-4.jpg';
import client1 from './assest/Images/client-1.png';
import client2 from './assest/Images/client-2.png';
import client3 from './assest/Images/client-3.png';
import client4 from './assest/Images/client-4.png';
import client5 from './assest/Images/client-5.png';
import client6 from './assest/Images/client-6.png';
import client7 from './assest/Images/client-7.png'; 

const About = () => {
  return (
    <>
      <div id="page" className="page one-page-style">
        <div id='main' className='site-main'>
          <div className='pt-wrapper'>
            <div className='subpages'>

              <section className="pt-page" id="about-me">
                <div className="section-inner start-page-full-width">
                  <div className="start-page-full-width">
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="inner-content">
                          <div className="fill-block"></div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="inner-content">
                          <div className="hp-text-block">

                            <div className="owl-carousel text-rotation">
                              <div className="item">
                                <div className="sp-subtitle">Web Designer</div>
                              </div>
                              <div className="item">
                                <div className="sp-subtitle">Frontend-developer</div>
                              </div>
                            </div>

                            <h2 className="hp-main-title">Harwant Singh</h2>
                            <p>Hi, I'm Harwant Singh, a passionate tech enthusiast with a Bachelor's degree in Computer Applications from GNA University. I’m eager to step into the tech world, especially in web development and other technical domains where I can both contribute and grow.

                              During my academic journey, I completed internships in React.js and web development, which helped me build strong foundational skills and real-world experience. I’m always excited to explore new technologies, adapt quickly, and I truly believe in learning from my mistakes to improve constantly.

                              I’m a fast learner, detail-oriented, and I always strive for perfection in whatever I do. I’m looking for opportunities where I can work, learn, and grow on real-life platforms alongside experienced professionals.</p>
                            <div className="hp-buttons">
                              <a href="#" target="_blank" className="btn btn-primary">Download CV</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="section-inner custom-page-content">
                  <div className="page-content">

                    <div className="row">
                      <div className="col-xs-12 col-sm-12">
                        <div className="col-inner">
                          <div className="block-title">
                            <h3>What I Do</h3>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xs-12 col-sm-6">
                        <div className="col-inner">
                          <div className="info-list-w-icon">

                            <div className="info-block-w-icon">
                              <div className="ci-icon">
                                <i> <BiStore /> </i>
                              </div>
                              <div className="ci-text">
                                <h4>Business-Focused Web Solutions</h4>
                                <p>Understanding the unique needs of each business is key to building impactful websites.
                                  I focus on creating tailored web solutions that enhance user experience and drive results.
                                  My goal is to help businesses grow by turning their vision into a powerful online presence.</p>
                              </div>
                            </div>

                            <div className="info-block-w-icon">
                              <div className="ci-icon">
                                <i> <BiLaptop /> </i>
                              </div>
                              <div className="ci-text">
                                <h4>Web Design</h4>
                                <p>Skilled in crafting visually appealing and responsive designs using CSS, Tailwind CSS, and other modern styling tools.
                                  I focus on creating clean, user-friendly interfaces that blend aesthetics with functionality.
                                  From layouts to animations, I bring ideas to life with precision and creativity.</p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                      <div className="col-xs-12 col-sm-6">
                        <div className="col-inner">
                          <div className="info-list-w-icon">

                            <div className="info-block-w-icon">
                              <div className="ci-icon">
                                <i> <BiPencil /> </i>
                              </div>
                              <div className="ci-text">
                                <h4>Copywriter</h4>
                                <p>I have a creative eye for writing engaging and meaningful content that connects with audiences.
                                  Whether it's websites, blogs, or marketing text, I focus on clear messaging that reflects the brand.
                                  I aim to write with purpose—turning words into impact and helping businesses tell their story effectively.</p>
                              </div>
                            </div>

                            <div className="info-block-w-icon">
                              <div className="ci-icon">
                                <i> <SlFlag /> </i>
                              </div>
                              <div className="ci-text">
                                <h4>Management</h4>
                                <p>I have strong management skills and always approach tasks with perfection and purpose.
                                  I believe in learning from mistakes and continuously improving through experience.
                                  Every task I handle is organized and aligned with the specific needs of the business, ensuring effective outcomes.</p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xs-12 col-sm-12">
                        <div className="col-inner ts-25 bs-50">

                          <div className="block-title">
                            <h3>Education Journey<span></span></h3>
                          </div>

                          <div className="testimonials owl-carousel">

                            <div className="testimonial-item">


                              <div className="testimonial-content">
                                <div className="testimonial-text">
                                  <p>I completed my early education at Kendriya Vidyalaya, where I gained a strong academic base, developed important skills, and learned the values of discipline,growth.</p>
                                </div>
                              </div>



                              <div className="testimonial-credits">

                                <div className="testimonial-picture">
                                  <img src={testimonial2} alt="Gary Johnson" />
                                </div>

                                <div className="testimonial-author-info">
                                  <p className="testimonial-author">Kendriya Vidyalaya </p>
                                  <p className="testimonial-firm">Central Board of Secondary Education(india)</p>
                                </div>
                              </div>

                            </div>

                            <div className="testimonial-item">


                              <div className="testimonial-content">
                                <div className="testimonial-text">
                                  <p>Studied at St. Soldier Group of Institutions, where I completed my board education and strengthened my academic skills and career focus.</p>
                                </div>
                              </div>

                              <div className="testimonial-credits">

                                <div className="testimonial-picture">
                                  <img src={testimonial1} alt="Daniel Pringle" />
                                </div>

                                <div className="testimonial-author-info">
                                  <p className="testimonial-author">St. Soldier Group of Institutions</p>
                                  <p className="testimonial-firm">Central Board of Secondary Education(india)</p>
                                </div>
                              </div>

                            </div>



                            <div className="testimonial-item">

                              <div className="testimonial-content">
                                <div className="testimonial-text">
                                  <p>Studied at GNA University, where I completed my Bachelor of Computer Applications, building strong technical skills and a deep understanding of the IT field.</p>
                                </div>
                              </div>

                              <div className="testimonial-credits">

                                <div className="testimonial-picture">
                                  <img src={testimonial3} alt="Billy Adams" />
                                </div>

                                <div className="testimonial-author-info">
                                  <p className="testimonial-author">GNA University</p>
                                  <p className="testimonial-firm">University Grants Commission(India)</p>
                                </div>
                              </div>

                            </div>
                            <div className="testimonial-item">

                              <div className="testimonial-content">
                                <div className="testimonial-text">
                                  <p>Studied at Kaplan Business School, where I completed my Master's in Information Technology, expanding my expertise in web and mobile development.</p>
                                </div>
                              </div>

                              <div className="testimonial-credits">

                                <div className="testimonial-picture">
                                  <img src={testimonial4} alt="Billy Adams" />
                                </div>

                                <div className="testimonial-author-info">
                                  <p className="testimonial-author">Kaplan Business School</p>
                                  <p className="testimonial-firm">Kaplan Corporate Board (Australia)</p>
                                </div>
                              </div>

                            </div>
                          </div>

                        </div>
                      </div>
                    </div>


                    <div className="row">
                      <div className="col-xs-12 col-sm-12">
                        <div className="col-inner">

                          <div className="block-title">
                            <h3>Clients<span></span></h3>
                          </div>

                          <div className="clients owl-carousel">
                            <div className="client-block">
                              <a href="https://www.instagram.com/harry_.7._/" target="_blank" title="Logo">
                                <img src={client7} alt="Logo" />
                              </a>
                            </div>
                            <div className="client-block">
                              <a href="#" target="_blank" title="Logo">
                                <img src={client6} alt="Logo" />
                              </a>
                            </div>
                            <div className="client-block">
                              <a href="#" target="_blank" title="Logo">
                                <img src={client5} alt="Logo" />
                              </a>
                            </div>
                            <div className="client-block">
                              <a href="#" target="_blank" title="Logo">
                                <img src={client4} alt="Logo" />
                              </a>
                            </div>
                            <div className="client-block">
                              <a href="#" target="_blank" title="Logo">
                                <img src={client3} alt="Logo" />
                              </a>
                            </div>
                            <div className="client-block">
                              <a href="#" target="_blank" title="Logo">
                                <img src={client2} alt="Logo" />
                              </a>
                            </div>
                            <div className="client-block">
                              <a href="#" target="_blank" title="Logo">
                                <img src={client1} alt="Logo" />
                              </a>
                            </div>
                          </div>

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

export default About;
