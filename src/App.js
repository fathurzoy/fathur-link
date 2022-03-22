import ParticlesBg from "particles-bg";
import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import TextLoop from "react-text-loop";
import Typist from "react-typist";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const config_cursor = {
    show: true,
    blink: true,
    element: "|",
    hideWhenDone: true,
  };

  return (
    <div className="bg-content">
      <div className={`card ${darkMode ? "dark" : ""}`}>
        <div
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        ></div>
        <div className="dark-mode"></div>
        <div className="card_body">
          <div className="profile text-center">
            <img
              src="/pp.png"
              alt=""
              style={{ width: "150px", height: "150px", borderRadius: "50%" }}
            />
            <div className="bg_content rd_12 p_8">
              <h1>Fathur Rahman Fauzan</h1>
              {/* <p className="mt-16">Seputar Programming</p>
              <Typist cursor={config_cursor}>
                Terima Jasa Pembuatan Website, Android Apps & IOS Apps
              </Typist> */}
            </div>
            <div className="bg_content rd_12 p_8 mt-16">
              Familiar with{" "}
              <TextLoop interval={800}>
                <span className="higthlight">Laravel</span>
                <span className="higthlight">Lumen</span>
                <span className="higthlight">Node JS</span>
                <span className="higthlight">Express JS</span>
                <span className="higthlight">React JS</span>
                <span className="higthlight">Next JS</span>
                <span className="higthlight">React Native</span>
                <span className="higthlight">Angular JS</span>
                <span className="higthlight">Flutter</span>
              </TextLoop>
            </div>
          </div>
          <div className="mt-16">
            <a
              href="https://portofolio-fathur.vercel.app/"
              className="btn_action bg_content"
              target="_blank"
            >
              <CgProfile />
              <span>Portofolio</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              href="https://www.linkedin.com/in/fathurzoy/"
              className="btn_action bg_content"
              target="_blank"
            >
              <FaLinkedin />
              <span>Linkedin</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              href="https://github.com/fathurzoy"
              className="btn_action bg_content"
              target="_blank"
            >
              <ImGithub />
              <span>Github</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              href="https://www.instagram.com/fathurzoy/"
              className="btn_action bg_content"
              target="_blank"
            >
              <BsInstagram />
              <span>Instagram</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              href="https://www.facebook.com/fathur.fauzan/"
              className="btn_action bg_content"
              target="_blank"
            >
              <ImFacebook2 />
              <span>Facebook</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              href="https://drive.google.com/file/d/1UGNCtftMHWP6KnpE24XzTf77CWcbEdWS/view?usp=sharing"
              className="btn_action bg_content"
              target="_blank"
            >
              <ImProfile />
              <span>CV</span>
            </a>
          </div>
        </div>
      </div>
      <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
