import Head from "next/head";
import About from "../components/about";
import Skills from "../components/skills";
import Experience from "../components/experience";

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

    <About />
    <Skills />
    <Experience />
  </div>
);

export default Index;
