

export default function LandingPage(props) {
  return (
    <div>
      <section className="hero is-halfheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">Welcome to Resilience!</h1>
            <p className="subtitle is-4">Don't just push past your limits, conquer them.</p>
            <a href="/exercises" className="button is-primary is-large">Let's get to work!</a>
          </div>
        </div>
      </section>

      <section  id="features" className="section has-background-primary-light is-halfheight">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-one-third">
              <div className="content has-text-centered">
                <h2 className="title is-3">Besides the obvious physical health benefits:</h2>
                <div className="features">
                  <div className="feature">
                    <i className="fas fa-check-circle"></i>
                    <p>Reduced stress, anxiety and depression</p>
                  </div>
                  <div className="feature">
                    <i className="fas fa-check-circle"></i>
                    <p>Gives you a greater sense of purpose and meaning</p>
                  </div>
                  <div className="feature">
                    <i className="fas fa-check-circle"></i>
                    <p>Enhanced creativity and innovation</p>
                  </div>
                  <div className="feature">
                    <i className="fas fa-check-circle"></i>
                    <p>Increases self-esteem and self-confidence</p>
                  </div>
                  <div className="feature">
                    <i className="fas fa-check-circle"></i>
                    <p>Greater spiritual connection and self-awareness</p>
                  </div>
                  <div className="feature">
                    <i className="fas fa-check-circle"></i>
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
                    <a href="#signup" className="button is-primary">Sign Up</a>
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
