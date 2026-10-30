import React from "react";
import Navbar from "../component/navbar";
import Button from "../props/Button";
import "../styles/activities.css";
import { FaCheck } from "react-icons/fa6";
import baby from "../assets/image/bqby.mp4";
import Footer from "../component/Footer";
import excellence from "../assets/image/excellence.png";
import worship from "../assets/image/worship.png";
import race from "../assets/image/race-stdt.jpg";
import drawing from "../assets/image/drawing.jpg";
import speaking from "../assets/image/speaking.jpg";
const Activities = () => {
  return (
    <div>
      <div className="activities-navbar">
        <Navbar />
        <h2> DISCOVER. LEARN. GROW.</h2>
        <h4>
          Every day brings new opportunities to learn, explore, and become your
          best.
        </h4>
      </div>

      <div className="activities-hero-1">
        <h3>
          ACADEMIC EXCELLENCE
          <h4>
            academic programs are designed to help every student develop strong
            knowledge, critical thinking, and a lifelong love for learning. We
            create an engaging classroom environment where students are
            encouraged to ask questions, explore ideas, and achieve their full
            potential. 
            </h4>
            <span>
              Activities: (Interactive Classroom Learning, Science Experiments,
              Mathematics Club, Reading & Library Sessions)
            </span>
        </h3>
        <img src={excellence} alt="" />
        <img src={race} alt="" />
        <h3>
          SPORTS & PHYSICAL EDUCATION
          <h4>
            We believe a healthy body supports a healthy mind. Our sports and
            physical education activities help students build confidence,
            teamwork, discipline, and good sportsmanship while staying active
            and fit. 
           
          </h4>
           <span>
              Activities: (Football, Basketball, Athletics, Table Tennis)
            </span>
        </h3>
        <h3>
          CREATIVE ARTS & TALENTS
          <h4>
            Students are encouraged to discover and develop their unique talents
            through creative and practical activities. These programs promote
            imagination, self-expression, confidence, and innovation. 
           
          </h4>
           <span>
              Activities: (Art & Painting, Music & Choir, Drama & Theatre, Dance
              & Cultural Performances)
            </span>
        </h3>
        <img src={drawing} alt="" />
        <img src={speaking} alt="" />
        <h3>
          LEADERSHIP & CHARACTER DEVELOPMENT
          <h4>
            At Prime Education Center, we nurture students to become
            responsible, and confident leaders. Through leadership
            opportunities and character-building programs, students learn
            integrity and service.
           
          </h4>
           <span>
              Activities: (Student Leadership Council, Public Speaking, Debate
              Club, Community Service Projects)
            </span>
        </h3>
        <h3>
          FAITH & VALUES
          <h4>
            As a Christian school, we are committed to helping students grow
            spiritually while building strong moral values. Through worship,
            prayer, and biblical teaching, students learn to live with faith,
            love, honesty, and compassion. <br />
            <span>
              Activities: (Morning Assembly Devotion, Bible Study, Chapel
              Services, Scripture Memorization)
            </span>
          </h4>
        </h3>
        <img src={worship} alt="" />{" "}
      </div>
      <div className="activities-hero-2" >
        <h2>YOUR CHILD'S SAFETY <br /> IS OUR PRIORITY</h2>
        <div>
          <h2>
             <FaCheck size={24} color="black" />
            EXPERIENCE TEACHERS
            <h3>
             
              Our qualified teachers are passionate about helping every student
              learn, grow, and succeed.
            </h3>
          </h2>
          <h2>
             <FaCheck size={24} color="black" />
            HEALTH & FIRST AID
            <h3>
              Students have access to prompt first-aid care and a safe, healthy
              school environment.
            </h3>
          </h2>
          <h2>
            <FaCheck size={24} color="black" />
            SMALL CLASS SIZES
            <h3>
              Smaller classrooms allow teachers to give every child the
              attention they deserve.
            </h3>
          </h2>
          <h2>
             <FaCheck size={24} color="black" />
            SECURE CAMPUS
            <h3>
              Our school provides a safe and well-supervised
              environment every day
            </h3>
          </h2>
          <h2>
             <FaCheck size={24} color="black" />
            BALANCED NUTRITION
            <h3>
              Healthy meals and snacks help students stay energized and ready to
              learn.
            </h3>
          </h2>
          <h2>
             <FaCheck size={24} color="black" />
            POSITIVE CULTURE
            <h3>
              We foster kindness, respect, and strong moral
              values in every student.
            </h3>
          </h2>
        </div>
      </div>
      <div className="activities-hero-4">
        <video playsInline autoPlay muted loop className="activities-video-bg">
          <source src={baby} />
        </video>
        <h2>READY TO JOIN  <br/> PRIME EDUCATION CENTER?</h2>
        <h3>
          Take the first step toward a brighter future. <br />Our admissions team is
          here to guide you through every stage 
        </h3>
        <Button text="Register" hover="black" />
      </div>
      <Footer />
    </div>
  );
};

export default Activities;
