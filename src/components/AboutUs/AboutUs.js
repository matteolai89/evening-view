import bar from "../../assets/about_us_bar.jpg";
import profile from "../../assets/about_us_profile.jpg";
import Modal from "../UI/Modal";
import classes from "./AboutUs.module.css";

const AboutUs = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.container}>
        <div className={classes.info}>
          <h2 className={classes.title}>THE COCKTAIL BAR</h2>
          <img className={classes.image} src={bar} alt="bar"></img>
          <p className={classes.paragraph}>
            London has been the cocktail capital of the world for the past
            decade. Most new trends popped up and grew there, like the craft gin
            renaissance, the non alcoholic spirits, the extravagant and
            complicated garnishes, zero waste bars to name a few. So we are
            proud that looking back at our own roots we invented Evening View,
            that became one of the most important bar of London. Evening View
            represent what craft liqueurs can offer for the future of cocktail
            evolution: pure unique flavours served with history and heritage and
            topped up with innovation and simplicity. Located secretively
            beneath London’s iconic Smithfield Market, its décor and menus draw
            on the explorative spirit of a bygone era in order to send you on a
            voyage around the Old and New Worlds.
          </p>

          <h2 className={classes.title}>OUR STORY</h2>
          <img className={classes.image} src={profile} alt="story"></img>
          <p className={classes.paragraph}>
            Jon and Lindsay had not planned on entering the drinks industry
            together. It was only after they were married that Jon was hired at
            one of the city’s first craft cocktail bars, Holland House (now
            closed), which led to a burgeoning career for him as a booze
            consultant. Lindsay, who at the time worked as physical therapy
            rehab facility and a non-profit, doubled on the side as Jon’s
            partner in cocktail crime, working events alongside him and learning
            the trade by osmosis. She was happy to treat drinks as a side
            project until, as she puts it, “people kept calling.” As Lindsay
            recalls, “It got to a point where we had to decide if we were going
            to do it full-time. I said a prayer and decided this is what I was
            going to do.” Together, the couple formed Evening View.
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default AboutUs;
