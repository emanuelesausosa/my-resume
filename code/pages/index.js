import Head from "next/head";

const Index = () => (
  <div className="main-wrapper home-two">
    <Head>
      <title>Index page</title>
      <meta
        name="description"
        content="This is the description of the Index page"
      />
    </Head>
    <div className="home-banner">
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="banner-content">
              <div className="home-social">
                <ul className="list-inline">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-dribbble" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-behance" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-github-alt" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="banner-info">
                <h1> Hello, I'm</h1>
                <h2>Emanuel Sosa</h2>
                <h3>Software Developer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="menu-two" id="navigation">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <div className="navbar-brand logo">
            <a href="index.html">
              <img
                className="img-responsive"
                src="https://storage.googleapis.com/my-resume/images/logo.png"
                alt="Image"
              />
            </a>
          </div>
        </div>
        <div className="collapse navbar-collapse">
          <nav id="mainmenu">
            <ul className="nav navbar-nav">
              <li className=" scroll current">
                <a href="#home-banner">Home</a>
              </li>
              <li className="scroll">
                <a href="#about">About Me</a>
              </li>
              <li className="scroll">
                <a href="#skill">Skills</a>
              </li>
              <li className="scroll">
                <a href="#exprience">Experience</a>
              </li>
              <li className="scroll">
                <a href="#education">Education</a>
              </li>
              <li className="scroll">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="scroll">
                <a href="#contact">Contact</a>
              </li>
              <li className="scroll">
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <div id="about" className="about-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="section-title">
              <h1>Surzil Geek</h1>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="about-info">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="signature">
                <h1>Surzil Geek</h1>
              </div>
            </div>
            <address>
              <p>
                <span>Nick Name:</span> Endrue Surzil Geek
              </p>
              <p>
                <span>Email:</span> itsme@surzilgeek.com
              </p>
              <p>
                <span>Phone:</span> (123)-456-78910
              </p>
              <p>
                <span>Date of Birth:</span> Jan 13, 1982
              </p>
              <p>
                <span>Address:</span> 121 King Street, Melbourne Victoria, 1200
                USA
              </p>
            </address>
            <ul className="achievement">
              <li className="achievement-info">
                <span className="counter">35</span>
                <h4>Projects completed</h4>
              </li>
              <li className="achievement-info">
                <span className="counter counter1">19</span>
                <h4>Winning Awards</h4>
              </li>
              <li className="achievement-info">
                <span className="counter counter2">230</span>
                <h4>Happy Clients</h4>
              </li>
              <li className="achievement-info">
                <span className="counter counter3">19</span>
                <h4>Running Projects</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Index;
