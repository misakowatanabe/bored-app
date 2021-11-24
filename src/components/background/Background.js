import error from "../../img/error.jpg";
import Fade from "@material-ui/core/Fade";

export default function Background({ backgroundPic, checked, responseData }) {
  if (backgroundPic !== "") {
    return (
      <div>
        <Fade in={checked}>
          <div
            className="backgroundImage"
            key={responseData.key}
            style={
              !responseData.activity
                ? {
                    backgroundImage: `url(${error})`,
                  }
                : {
                    backgroundImage: `url(${backgroundPic})`,
                  }
            }
          ></div>
        </Fade>
      </div>
    );
  } else {
    return null;
  }
}
