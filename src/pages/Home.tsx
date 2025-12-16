import { NavLink } from "react-router";

export default function Home() {
  return (
    <div className="">
      <p>Hello! I'm Belgutei Byambadorj.</p>
      <div className="border-b border-stone-300 py-5">
        <div className="text-lg pb-2 font-semibold">About me</div>
        <div>
          I love programming, especially Competitive Programming, Web
          Development, Systems and Operatings Systems (OS). Also, I like to{" "}
          <NavLink to="/run" end>
            run
          </NavLink>
          .
        </div>
      </div>
      <div className="border-b border-stone-300 py-5">
        <div className="text-lg pb-2 font-semibold">University</div>
        <div>
          I study{" "}
          <NavLink
            to="uni"
            className="underline underline-offset-2 text-blue-700"
            end
          >
            Computer Science at UNSW
          </NavLink>
          . On campus, I'm involved in CPMSoc, CSESoc and RunSoc.
        </div>
      </div>
      <div className="border-b border-stone-300 py-5">
        <div className="text-lg pb-2 font-semibold">
          Competitive Programming
        </div>
        <div>
          I have been training competitive programming since I was 15.
          Currently, I am{" "}
          <NavLink
            to="https://codeforces.com/profile/B.Belgutei"
            className="underline underline-offset-2 text-blue-700"
            end
          >
            Candidate Master on Codeforces
          </NavLink>{" "}
          and solved over 2000 algorithms and data structure problems.
        </div>
      </div>
      <div className="border-b border-stone-300 py-5">
        <div className="text-lg pb-2 font-semibold">Achievements</div>
        <div>
          I'm a 2x IOI participant, 2x 3rd place in{" "}
          <NavLink
            to="https://unswcpmsoc.com/competitions/23t1-imc/"
            className="underline underline-offset-2 text-blue-700"
            end
          >
            IMC-Trading Coding Competition (Advanced Division)
          </NavLink>{" "}
          and a winner of{" "}
          <NavLink
            to="https://sppcontests.org/wisetech-global-challenge-results/"
            className="underline underline-offset-2 text-blue-700"
            end
          >
            WiseTech Global Challenge-2025
          </NavLink>
          .
        </div>
      </div>
    </div>
  );
}
