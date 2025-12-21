import { NavLink } from "react-router";

export default function Home() {
  return (
    <div className="">
      <p className="ml-2 md:ml-0">Hello! I'm Belgutei Byambadorj.</p>
      <div className="home-section">
        <div className="text-lg pb-2 font-semibold">About me</div>
        <div>
          I love{" "}
          <NavLink to="https://github.com/belgutei-b" className="home-link" end>
            programming
          </NavLink>
          , especially Competitive Programming, Web Development, Systems and
          Operatings Systems (OS). Also, I like to{" "}
          <NavLink to="/run" className="home-link" end>
            run
          </NavLink>
          .
        </div>
      </div>
      <div className="home-section">
        <div className="text-lg pb-2 font-semibold">University</div>
        <div>
          I study{" "}
          <NavLink to="uni" className="home-link" end>
            Computer Science at UNSW
          </NavLink>
          . On campus, I'm involved in CPMSoc, CSESoc and RunSoc.
        </div>
      </div>
      <div className="home-section">
        <div className="text-lg pb-2 font-semibold">
          Competitive Programming
        </div>
        <div>
          I have been training competitive programming since I was 15.
          Currently, I am a{" "}
          <NavLink
            to="https://codeforces.com/profile/B.Belgutei"
            className="home-link"
            end
          >
            Candidate Master on Codeforces
          </NavLink>{" "}
          and solved over 2000 algorithms and data structure problems.
        </div>
      </div>
      <div className="home-section">
        <div className="text-lg pb-2 font-semibold">Achievements</div>
        <div>
          I'm a 2x IOI participant, 2x 3rd place in{" "}
          <NavLink
            to="https://unswcpmsoc.com/competitions/23t1-imc/"
            className="home-link"
            end
          >
            IMC-Trading Coding Competition (Advanced Division)
          </NavLink>{" "}
          and a winner of{" "}
          <NavLink
            to="https://sppcontests.org/wisetech-global-challenge-results/"
            className="home-link"
            end
          >
            WiseTech Global Challenge-2025
          </NavLink>
          .
        </div>
      </div>
      <div className="home-section">
        <div className="text-lg pb-2 font-semibold">Contact me</div>
        <div className="">
          <NavLink
            to="mailto:belgutei0323@gmail.com"
            className="home-link mr-3"
            target="_blank"
            end
          >
            Email
          </NavLink>
          ·
          <NavLink
            to="https://github.com/belgutei-b"
            className="home-link ml-3 mr-3"
            target="_blank"
            end
          >
            Github
          </NavLink>
          ·
          <NavLink
            className="home-link ml-3"
            to="https://www.linkedin.com/in/belgutei0323/"
            target="_blank"
            end
          >
            Linkedin
          </NavLink>
        </div>
      </div>
    </div>
  );
}
