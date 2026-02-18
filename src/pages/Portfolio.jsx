import { FaFileAlt, FaImage, FaVideo, FaVolumeUp } from 'react-icons/fa';
import portfolio1 from './assest/Images/1.jpg';
import portfolio2 from './assest/Images/2.jpg';
import portfolio3 from './assest/Images/3.jpg';
import portfolio4 from './assest/Images/4.jpg';
import portfolio5 from './assest/Images/5.jpg';
import portfolio6 from './assest/Images/6.jpg';
const Portfolio = () => {
  return (
    <>
      <div id="page" className="page one-page-style">
        <div id='main' className='site-main'>
          <div className='pt-wrapper'>
            <div className='subpages'>

              <section className="pt-page" id="portfolio">
                <div className="section-inner custom-page-content">
                  <div className="section-title-block second-style">
                    <h2 className="section-title">Portfolio</h2>
                    <h5 className="section-description">My Works</h5>
                  </div>

                  <div className="section-content">
                    <div className="row">
                      <div className="col-xs-12 col-sm-12">

                        <div className="portfolio-content">

                          <ul className="portfolio-filters">
                            <li className="active">
                              <a className="filter btn btn-sm btn-link" data-group="category_all">All</a>
                            </li>
                            <li>
                              <a className="filter btn btn-sm btn-link" data-group="category_media">Media</a>
                            </li>
                            <li>
                              <a className="filter btn btn-sm btn-link" data-group="category_mockups">Mockups</a>
                            </li>
                            <li>
                              <a className="filter btn btn-sm btn-link" data-group="category_soundcloud">SoundCloud</a>
                            </li>
                            <li>
                              <a className="filter btn btn-sm btn-link" data-group="category_vimeo-videos">Vimeo Videos</a>
                            </li>
                            <li>
                              <a className="filter btn btn-sm btn-link" data-group="category_youtube-videos">YouTube Videos</a>
                            </li>
                          </ul>


                          <div className="portfolio-grid three-columns">

                            <figure className="item lbaudio" data-groups='["category_all", "category_soundcloud"]'>
                              <div className="portfolio-item-img">
                                <img src={portfolio1} alt="SoundCloud Audio" title="" />
                                <a href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&#038;color=%23ff5500&#038;auto_play=false&#038;hide_related=false&#038;show_comments=true&#038;show_user=true&#038;show_reposts=false&#038;show_teaser=true&#038;visual=true" className="lightbox mfp-iframe" title="SoundCloud Audio"></a>
                              </div>

                              <i> <FaVolumeUp /> </i>
                              <h4 className="name">SoundCloud Audio</h4>
                              <span className="category">SoundCloud</span>
                            </figure>

                            <figure className="item standard" data-groups='["category_all", "category_media"]'>
                              <div className="portfolio-item-img">
                                <img src={portfolio2} alt="Media Project 2" title="" />
                                <a href="portfolio-1.html" className="ajax-page-load"></a>
                              </div>

                              <i> <FaFileAlt /> </i>
                              <h4 className="name">Media Project 2</h4>
                              <span className="category">Media</span>
                            </figure>

                            <figure className="item lbvideo" data-groups='["category_all", "category_vimeo-videos"]'>
                              <div className="portfolio-item-img">
                                <img src={portfolio3} alt="Vimeo Video 1" title="" />
                                <a href="https://player.vimeo.com/video/158284739" className="lightbox mfp-iframe" title="Vimeo Video 1"></a>
                              </div>

                              <i> <FaVideo /> </i>
                              <h4 className="name">Vimeo Video 1</h4>
                              <span className="category">Vimeo Videos</span>
                            </figure>

                            <figure className="item standard" data-groups='["category_all", "category_media"]'>
                              <div className="portfolio-item-img">
                                <img src={portfolio4} alt="Media Project 1" title="" />
                                <a href="portfolio-1.html" className="ajax-page-load"></a>
                              </div>

                              <i> <FaFileAlt /> </i>
                              <h4 className="name">Media Project 1</h4>
                              <span className="category">Media</span>
                            </figure>

                            <figure className="item lbimage" data-groups='["category_all", "category_mockups"]'>
                              <div className="portfolio-item-img">
                                <img src={portfolio5} alt="Mockup Design 1" title="" />
                                <a className="lightbox" title="Mockup Design 1" href="images/portfolio/5.jpg"></a>
                              </div>

                              <i> <FaImage /> </i>
                              <h4 className="name">Mockup Design 1</h4>
                              <span className="category">Mockups</span>
                            </figure>

                            <figure className="item lbvideo" data-groups='["category_all", "category_youtube-videos"]'>
                              <div className="portfolio-item-img">
                                <img src={portfolio6} alt="YouTube Video 1" title="" />
                                <a href="https://www.youtube.com/embed/bg0gv2YpIok" className="lightbox mfp-iframe" title="YouTube Video 1"></a>
                              </div>

                              <i> <FaVideo /> </i>
                              <h4 className="name">YouTube Video 1</h4>
                              <span className="category">YouTube Videos</span>
                            </figure>
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

export default Portfolio;

