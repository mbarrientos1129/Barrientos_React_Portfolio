import React from "react";
import "../App.css"
import stockPhoto from './Assets/stockPhoto.jpg';

function About() {
  return (
    <div className="App">
      <h2 className="aboutHeading">About Me</h2>

      <div className="aboutMeContainer">
        <div className="imageContainer">
          <img className="stockPhoto" src={stockPhoto} alt="default"></img>
        </div>
        <div className="aboutMeText">
          <p>My name is Michael Barrientos. I am an aspiring web developer.</p>

          <p>I've recently taken the dive into web development. I have had no coding experience before this but
            I have learned very quickly this far and picked up many nuggets of knowledge. I started this journey in 2021
            and I’m continuously improving my skills. I thoroughly enjoy working with JavaScript the most considering
            it has a plethora of libraries to use and so many other things can be done with it. React happens to be
            my prefered front end framework.
          </p>

          <p>Recently graduating from the UPenn LPS Coding Bootcamp, I have been on the hunt for knowledge and
            by break through into the tech industry. Everything from LeetCode to even creating new apps with
            other developers, anything to expand my knowledge and thought process to become an asset to
            a tech company. I look for constant feedback on my code to improve scalability, making sure it is readable,
            as well as having code snippets be as refactorable as possible.
          </p>

          <p>
            What excites me most about the tech industry, the industry is forever growing. New technologies
            are constantly being improved or created. It's a whole lot of learning that keeps other, I feel,
            from burning out. This industry is exciting, and I will bring value to any company given that I will
            learn quickly, accurately, and implement ideas through trial and error.
          </p>

          <p>
            Through my development journey, I have picked up other technologies. Like Python, Java, for new langauges and they have been an
            amazing tool to have. I have become more proficient with the logic behind websites, building a Tech News API with Java and
            refactoring a back-and of a News site with Python, SQLAlchemy for the database, and Flask as to render the front-end templates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
