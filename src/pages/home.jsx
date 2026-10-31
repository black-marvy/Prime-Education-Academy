import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer"
import EntranceVideo from "../assets/image/SchEntrance.mp4";
import "../styles/Home.css";
import Button from "../props/Button";
import study from "../assets/image/stdt-study2.jpg"
import praying from "../assets/image/praying-stdt.jpg"
import blackphotos from "../assets/image/black-photos.jpg"
import question from "../assets/image/question-stdt.jpg"
import tennis from "../assets/image/tennis.jpg"
import breakfast from "../assets/image/breakfast-stdts.jpg"
import playing from "../assets/image/playing-stdt.jpg"
import  sunset from "../assets/image/sunset-stdt.jpg"
import bed from "../assets/image/bed-stand.jpg"
import smilling from "../assets/image/stdt-smilling.jpg"
import  prayin from  "../assets/image/praying.jpg"
import reading from "../assets/image/reading-child.jpg"
import lib from "../assets/image/lib-video.mp4"
import cooperate from "../assets/image/cooperate-uniform.jpg"
const Home = () => {
  return (
    
    <div className="screen">
       <Navbar />
      <section className="nav-header">
        <video autoPlay muted loop playsInline className = "video-bg">
          <source src={EntranceVideo} />
        </video>
      
        <div>
          <h4>
            Grow in Knowlege <br />
            Myth and understading <br />
          </h4>
          <h6>
            we are made to build our children <br />
            in learning and character
          </h6>

          <div className="nav-btn">
            <Button text = "Register" hover = "black" to= "/registration"  />
              <Button  text = "About Us" hover = "white" to ="/about"/>
          </div>
        </div>
      </section>

      <section className="hero-1">
        <div>
          <h3>
            A JOURNEY 
            OF <br /> FAITH AND 
            GROWTH
          </h3>
          <h5>
            Prime Education Academy is a Christian camp experience designed to
            draw young hearts closer to God. Through worship, friendships, and
            time in nature, campers discover faith,build confidence, and grow in
            compassion each day.
          </h5>
          <Button text = "JOURNEY" hover= "black" to = "/registration" />
        </div>
        <div>
          <img src= {study} alt="" />
        </div>
      </section>

      <section className="hero-2">
        <h3>
          FUN, FAITH, <br />
          AND EXPLORATION <br />
          IN HARMONY
        </h3>
        <div>
          <div>
            <img src={praying} alt="image" />
            <div>
              <h3>🚩 Morning Worship & Songs</h3>
              <h5>
                Start your day in peace and joy through meaningful Scripture.
              </h5>
            </div>
          </div>
          <div>
            <img src={blackphotos} />
            <div>
              <h3>🚩Growing Through Learning & Play</h3>
              <h5>
                Children develop knowledge and build friendships through guided
                learning.
              </h5>
            </div>
          </div>
          <div>
            <img src= {question} alt="image" />
            <div>
              <h3>🚩 Education, Play & Activity</h3>
              <h5>
                playing with teachers, and staying active in a fun and safe
                space.
              </h5>
            </div>
          </div>
          <div>
            <img src= {tennis} alt="image" />
            <div>
              <h3>🚩 Learn, Play & Exercises</h3>
              <h5>
                Students enjoy learning and staying active in a fun and safe
                space.
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-3">
        <Button text= "Activities" hover= "black" to = "/activities"/> <br />
        <h3>DAILY ACTIVITIES 📖</h3>
        <div>
          <div>
            <div>
              <img src= {breakfast} alt="" />
              <h4>
                MORNING: <br />
                <span className="span">
                  Campers begin the day with a warm breakfast, uplifting
                  worship, and meaningfulsmall-group devotions — creating
                  moments of faith, friendship, and inspirationthat set the tone
                  for the entire day.
                </span>
              </h4>
            </div>
          </div>
          <div className="hero-3-div">
            <div>
              <img src= {playing} alt="" />
              <h4>
                AFTERNOON: <br />
                <span className="span">
                  Instrument training sessions, music workshops, and fun group
                  practice help campers discover their musical talents while
                  building confidence and teamwork. From drums to keyboard and
                  guitar, every activity is designed to inspire creativity,
                  discipline, and joyful learning
                </span>
              </h4>
            </div>
          </div>
          <div className="hero-3-divs">
            <div>
              <img src={sunset} alt="" />
              <h4>
                EVENING: <br />
                <span className="span">
                  Campers begin the day with a warm breakfast, uplifting
                  worship, and meaningful small-group devotions — creating
                  moments of faith, friendship, and inspiration that set the
                  tone for the entire day.
                </span>
              </h4>
            </div>
          </div>
          <div className="hero-3-div">
            <div>
              <img src= {bed} alt="" />
              <h4>
                END OF DAY: <br />
                <span className="span">
                  Campers unwind in comfortable, supervised cabins where caring
                  leaders create a peaceful and secure atmosphere. It’s a time
                  to rest, recharge, and reflect after a fun-filled day of
                  learning, music, and friendship
                </span>
              </h4>
            </div>
          </div>
        </div>
        <Button text= "Register" hover = "black" to = "/registration" />
      </section>

      <section className="hero-4">
        <div>
          <p>
            YOUR CHILD WELL- <br />
            BEING MATTER TO US
          </p>

          <h4>EXPERIENCED MENTORS</h4>
          <h5>Caring leaders trained to guide and support every camper.</h5>
          <h3>WELLNESS & SAFETY CARE</h3>
          <h5>Dedicated health support with proper safety measures in place</h5>
          <h4>TAILORED AGE GROUPS</h4>
          <h5>Activities and groups designed for each age level and stage.</h5>
          <h3>FAMILY UPDATES & SUPPORT</h3>
          <h5>Regular communication to keep parents informed and connected.</h5>
        </div>
        <div className="hero-4-img">
          <img src= {smilling} alt="" />
          <div>
          <img src= {prayin} alt="" />
          <img src= {reading} alt=" " />
          </div>
        </div>
      </section>
      <section className="hero-5">
        <p>STORIES FROM CAMP</p>
        <div>
          <h3>
            Our son returned from camp inspired, happier, and spiritually
            stronger. The memories, friendships, and guidance he received
            continue to impact him every day.” <br />
            <br />
            <br />
            Sarah & Michael T., Parents
            <br />
            <br />
            MAY 2026
          </h3>
          <h3>
            “Camp gave our daughter an experience she’ll never forget. She came
            back more confident, joyful, and deeply encouraged in her walk with
            God.” <br />
            <br />
            <br />
            James & Mabel L., Parents <br />
            <br />
            MAY 2026
          </h3>
          <h3>
            “From the activities to the counselors, every part of the camp
            experience was thoughtful and inspiring. Our children came home with
            lasting memories, stronger values, and new friendships.” <br />
            <br />
            <br />
            David & Sarah M., Parents <br />
            <br />
            MAY 2026
          </h3>
        </div>
        <Button text= "Register"  hover = "black" to ="/registration"/>
      </section>

      <section className="hero-6">
        <h3>HELP SEND A CHILD TO SCHOOL</h3>
        <h5>
          Your support helps give every child the opportunity to experience
          hope, friendship, and spiritual growth at Camp Lightway — no matter
          their background. Each donation helps provide life-changing camp
          experiences for children and families who need it most.
        </h5>
        <Button text = "Donate" hover = "black" to = "/sponsorship"/>  <br />
        <img src= {cooperate} alt="" /> <br />
        <br />
      </section>

      <section className="hero-7">
        <video playsInline autoPlay muted loop className="video-bg">
          <source src= {lib} />
        </video>
        <div>
          <h2>
            START YOUR JOURNRY <br />
            WITH US TODAY ?
          </h2>
          <h5>We’re here to help you through the enrollment process.</h5>
          <Button text= "Register" hover = "black" />
        </div>
      </section>

    <Footer/>
    
    </div>
  );
};

export default Home;
