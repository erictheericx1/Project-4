export default function LandingPage(props) {
  return (
    <div>
      <section className="hero is-halfheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1 has-text-white">Welcome to Resilience!</h1>
            <p className="subtitle is-4 has-text-white">Don't just push past your limits, conquer them.</p>
            <a href="/exercises" className="button is-medium">Let's get to work!</a>
          </div>
        </div>
      </section>

      <section  id="features" className="section is-halfheight has-background-grey-lighter">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-one-third">
              <div className="content has-text-centered">
                <h2 className="title is-3 has-text-grey-darker">Besides the obvious physical health benefits:</h2>
                <div className="features">
                  <div className="feature">
                    <p>Reduced stress, anxiety and depression</p>
                  </div>
                  <div className="feature">
                    <i className="fa fa-plus"></i>
                    <p>Gives you a greater sense of purpose and meaning</p>
                  </div>
                  <div className="feature">
                    <i className="fa fa-plus"></i>
                    <p>Enhanced creativity and innovation</p>
                  </div>
                  <div className="feature">
                    <i className="fa fa-plus"></i>
                    <p>Increases self-esteem and self-confidence</p>
                  </div>
                  <div className="feature">
                    <i className="fa fa-plus"></i>
                    <p>Greater spiritual connection and self-awareness</p>
                  </div>
                  <div className="feature">
                    <i className="fa fa-plus"></i>
                    <p>Improved adaptability and <strong>RESILIENCE</strong> to life's challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="signup" className="section has-background-light">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-one-third">
              <div className="content has-text-centered">
                <h2 className="title is-3">Get Started</h2>
                <p>Join our newsletter today and get the VIP treatment!</p>
                <div className="field is-grouped is-grouped-centered">
                  <p className="control is-expanded">
                    <input className="input" type="email" placeholder="Email" required />
                  </p>
                  <p className="control">
                    <a href="#signup" className="button">Sign Up</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
