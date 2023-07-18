import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>As a Full-Stack Developer, I possess a wide range of skills that enable me to work on both the frontend and backend aspects of web development . <br></br>Here's a summary of my skills as a Full-Stack Developer:-<br></br><br></br>
                        <b></b>Web Development Basic <br></br> <br></br>JavaScript<br></br><br></br> JavaScript DOM<br></br> <br></br> Advance JavaScript<br></br><br></br>HTTP, JSON , AJAX<br></br><br></br> MYSQL<br></br><br></br> Node.js<br></br> <br></br>React Frameworks ( React.js...) , Redux , Advance React . <br></br> <br></br> <br></br><b>NOTE*</b>:- I am currently learning Python at Developer Institute.<br></br><br></br><br></br>*For more Information click on the Linkedin Icon*  </p>
                        {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development Basic(html,css) </h5>
                            </div>

                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>JavaScriptA,Advance JavaScript</h5>
                            </div>

                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Logo Design</h5>
                            </div>

                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel> */}

                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
