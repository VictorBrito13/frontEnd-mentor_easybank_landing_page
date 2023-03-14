import "./AboutUs.css";
import { reasons } from "../../assets/helpers/reasons";
import { articles } from "../../assets/helpers/articles";

import RequestInviteBtn from "../btnRequestInvite/btn";
import Reason from "../Reasons/Reasons";
import Article from "../Article/Article";

export default function AboutUs() {
  return (
    <div className="aboutUs-component-container">
      <div className="aboutUs-container">
        <div className="intro-container">
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <RequestInviteBtn />
        </div>
        <div className="intro-images">
          <img src="./src/assets/images/image-mockups.png" />
        </div>
      </div>

      <div className="why-easybank">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. <br />
          Control your finances like never before
        </p>
        <div className="reasons-container">
          {reasons.map((reason, index) => (
            <Reason reason={reason} key={index} />
          ))}
        </div>
      </div>

      <div className="articles-section">
        <h2>Latest Articles</h2>
        <div className="articles-container">
          {
            articles.map((article, index) => <Article article={article} key={index} />)
          }
        </div>
      </div>
    </div>
  );
}
