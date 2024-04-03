import Card2 from "../components/Card2";
import "./Project3.css";
import Datas from "./data";
import star from "/star.png";

export default function Project3() {
  const position = Datas.map((data) => {
    return <Card2 key={data.id} rateimg={star} {...data} />;
  });
  return (
    <>
      <div className="container3">
        <div className="nav3">
          <div className="logo">
            <img src="/ABNB_BIG.png" alt="" />
          </div>
        </div>
        <div className="contain">
          <div className="hero">
            <div className="imgcon">
              <img src="/airbnb.png" alt="" />
            </div>
            <h1>Online Experiences</h1>
            <p>
              Join unique interactive activities led by
              <br />
              one-of-a-kind-hosts-all without leaving <br /> home.
            </p>
          </div>
          <div className="maincon">{position}</div>
        </div>
      </div>
    </>
  );
}
