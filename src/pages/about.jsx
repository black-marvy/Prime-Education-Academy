import React from "react";
import Navbar from "../component/navbar";
import "../styles/about.css";
import Button from "../props/Button";
import { FaHeart } from "react-icons/fa";
import Footer from "../component/footer";
import cooperate from  "../assets/image/cooperate-uniform.jpg"
import about from "../assets/image/about-us.jpg"
import reading from "../assets/image/reading-child.jpg"
import tennis from "../assets/image/tennis.jpg"
import praying from "../assets/image/praying.jpg"
import graySuit from "../assets/image/gray suit.png"
import conference from "../assets/image/conference.mp4"
import Marve from "../assets/image/marve.png"
const About = () => {
  return (
    <div className="about-screen">
       <Navbar />
      <div className="about-navbar">
        <h3>
          ABOUT PRIME EDUCATION
          <h5>Nurturing Knowledge, Character, and Confidence.</h5>
        </h3>
      </div>
      <div className="about-hero-1">
        <div>
          <h2>OUR COMMITMENT TO EDUCATION</h2>
          <h4>
            What began as a vision to provide quality education and inspire
            young minds has grown into a respected institution dedicated to
            academic excellence and character development. Prime Education was
            founded on the belief that every student deserves access to a
            supportive learning environment where knowledge, creativity, and
            confidence can flourish. Over the years, Prime Education has
            remained committed to nurturing future leaders through innovative
            teaching methods, dedicated educators, and a culture of continuous
            growth. Our classrooms are designed to encourage curiosity, critical
            thinking, and a passion for lifelong learning, helping students
            reach their full potential both academically and personally. Today,
            Prime Education stands as a trusted center of learning, welcoming
            students from diverse backgrounds and equipping them with the
            skills, values, and knowledge needed to succeed in an ever-changing
            world. Through excellence, integrity, and a commitment to student
            success, we continue to shape bright futures and make a lasting
            impact on the communities we serve.
          </h4>
        </div>
        <div>
          <img src = {cooperate} alt="" />
          <div>
            <img src= {about} alt="" />
            <img src= {reading} alt="" />
            <img src= {tennis} alt="" />
          </div>
        </div>
      </div>

      <div className="about-hero-2">
        <div>
        <h2>Building Bright Minds <br/>for the Future</h2>
        <h4>We believe that true education nurtures both the mind and the heart. By combining academic excellence with biblical values, we help children develop wisdom, compassion, integrity, and a strong relationship with God. Our goal is to inspire every student to live with purpose, serve others with love, and shine as a light in the world.</h4>
        <div className="about-hero-2-btn">
        <Button text="Register" hover="white" to = "/registration" />
        <Button text="Donate" hover="black" to = "/sponsorship" />
        </div>
        </div>
        <div>
         <img src= {praying} alt="" />
         </div>
      </div>

      <div className="about-hero-3">
        <h2>WHAT WE BELIEVE ON</h2>
        <h4>
          At Prime Education School, we believe every child can learn, grow, and
          succeed. We are committed to excellence, discipline, integrity, and
          creativity, providing quality education that prepares students for a
          bright and successful future.
        </h4>
        <div className="about-hero-3-card">
          <h2>
            {" "}
            <FaHeart /> ACADEMIC EXCELLENCE
            <h3>
              {" "}
              High-quality education designed to develop knowledge, critical
              thinking, and a passion for lifelong learning.
            </h3>
          </h2>
          <h2>
            {" "}
            <FaHeart /> STUDENT WELL-BEING
            <h3>
              A safe, supportive, and nurturing environment where every student
              is valued, respected, and encouraged to succeed.
            </h3>
          </h2>
          <h2>
            {" "}
            <FaHeart /> LEADERSHIP & CHARACTER
            <h3>
              Programs that foster confidence, responsibility, teamwork, and the
              values needed to become future leaders.
            </h3>
          </h2>
        </div>
      </div>

      <div className="about-hero-4">
        <h2>MEET THE FOUNDER</h2>
        <h4>
          The dedicated professional who make Prime Education a safe,
          inspiring, and nurturing environment where every student can learn,
          grow, and succeed.
        </h4>
        <div>
        <img src= {Marve} alt="" />
         <h3>Black_Marvy Tech</h3>
        </div>
        </div>

        <div className="about-hero-7">
        <video playsInline autoPlay muted loop className="about-video-bg">
          <source src= {conference} />
        </video>
        <div>
          <h2>
            START YOUR JOURNRY <br />
            WITH US TODAY ?
          </h2>
          <h5>We’re here to help you through the enrollment process.</h5>
          <Button text="Register" hover="white" to = "/registration" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
