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
  </div>
);

export default Index;
