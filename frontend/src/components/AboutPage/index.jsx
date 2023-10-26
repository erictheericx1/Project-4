import React from 'react';
import 'bulma/css/bulma.css';

function About() {
  return (
    <div>
      <section className="hero is-halfheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1">About Us</h1>
            <p className="subtitle is-4">
              Hello and welcome to our fitness app designed for people with physical limitations.
            </p>
          </div>
        </div>
      </section>

      <section className="section has-background-light">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <div className="content has-text-black">
                <p>
                  We are a team of health and fitness enthusiasts who are passionate about helping others achieve their fitness goals. Our app is designed specifically for people with physical limitations, so you can exercise safely and comfortably in the comfort of your own home.
                </p>
                <p>
                  We have carefully curated a variety of exercises and routines that are designed to help you improve your strength, flexibility, and balance, all while working within your physical limitations. Our goal is to help you achieve your fitness goals and improve your overall health and well-being.
                </p>
                <p>
                  <strong>Disclaimer:</strong>
                </p>
                <p>
                  Please note that while our fitness app is designed for people with physical limitations, it is important to consult with your doctor or healthcare provider before starting any new exercise program. Our exercises are designed to be safe and effective, but every individual has unique needs and limitations.
                </p>
                <p>
                  If at any point during your workout you experience pain, discomfort, or feel unwell, please stop immediately and consult with your doctor or healthcare provider. Our app is not a substitute for medical advice or treatment, and we cannot be held responsible for any injury or damage that may result from using our app.
                </p>
                <p>
                  By using our fitness app, you acknowledge that you have read and agree to our disclaimer and understand the potential risks associated with exercise. Always consult with a qualified healthcare professional before starting any new exercise program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
