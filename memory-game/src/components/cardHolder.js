import React, { Component } from "react";
import MemoryCard from "./memoryCard";
import "./cardHolder.css";
import BillyImage from "../assets/images/Billy_STMG.jpg"; //"https://images2.minutemediacdn.com/image/upload/c_crop,h_1076,w_1916,x_133,y_0/f_auto,q_auto,w_1100/v1553289783/shape/mentalfloss/577785-netflix.jpg"
import BobImage from "../assets/images/Bob_STMG.jpg"; //"https://media1.popsugar-assets.com/files/thumbor/-C2xy7eesrnZTCz7Qppnas6YZgg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/10/31/845/n/1922283/af4abe9e59f8cc637ace57.04537866_edit_img_image_17268548_1509477153/i/Reactions-Bob-Stranger-Things-Season-2.jpg"
import DustinImage from "../assets/images/Dustin_STMG.jpg"; //"https://thefederalist.com/wp-content/uploads/2016/08/dustin.jpg"
import ElevenImage from "../assets/images/Eleven_STMG.jpg"; //"https://i.kinja-img.com/gawker-media/image/upload/s--sYb9O5vT--/c_scale,f_auto,fl_progressive,q_80,w_800/zdmdbibfppxbfqbmtc0p.png"
import HopperImage from "../assets/images/Hopper_STMG.jpg"; //"https://costumewall.com/wp-content/uploads/2016/10/jim-hopper.jpg"
import LucasImage from "../assets/images/Lucas_STMG.jpg"; //"https://imgix.bustle.com/uploads/image/2019/7/13/568e1730-eca0-49d1-8db1-91ee0bff3f4e-nerd-league-lucas.jpg"
import MaxImage from "../assets/images/Max_STMG.jpg"; //"https://www.thewrap.com/wp-content/uploads/2017/10/stranger-things-max-sadie-sink.jpg"
import MikeImage from "../assets/images/mike_STMG.jpg"; //"https://ewedit.files.wordpress.com/2017/10/st21.jpg"
import MurrayImage from "../assets/images/Murray_STMG.jpg"; //"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtANRx_senA2SMnoJtSqQbfsLHYZ8jXufo-tgYPGh757INjj245Q"
import NancyImage from "../assets/images/Nancy_STMG.jpeg"; //"https://assets.popbuzz.com/2017/45/nancy-stranger-things--1509979319-view-1.jpeg"
import SteveImage from "../assets/images/Steve_STMG.jpg"; //"https://vignette.wikia.nocookie.net/p__/images/a/a3/Steve-1.jpg/revision/latest?cb=20180207154629&path-prefix=protagonist"
import WillImage from "../assets/images/Will_STMG.jpg"; //"https://nypdecider.files.wordpress.com/2019/07/stranger-things-3-will-wise.jpg?quality=90"

class CardHolder extends Component {
  state = {
    images: [],
    points: 0
  };

  componentDidMount() {
    const images = [
      { src: BillyImage, clicked: false, id: "1" },
      { src: BobImage, clicked: false, id: "2" },
      { src: DustinImage, clicked: false, id: "3" },
      { src: ElevenImage, clicked: false, id: "4" },
      { src: HopperImage, clicked: false, id: "5" },
      { src: LucasImage, clicked: false, id: "6" },
      { src: MaxImage, clicked: false, id: "7" },
      { src: MikeImage, clicked: false, id: "8" },
      { src: MurrayImage, clicked: false, id: "9" },
      { src: NancyImage, clicked: false, id: "10" },
      { src: SteveImage, clicked: false, id: "11" },
      { src: WillImage, clicked: false, id: "12" }
    ];
    this.setState({ images: images });
  }
  // when a card is clicked run this function to check if it's been clicked before
  checkIfClicked = e => {
    console.log(e.target.getAttribute("clicked"));
    let clicked = e.target.getAttribute("clicked");
    let points = this.state.points;
    let newArray = [];
    newArray = this.shuffleArray(this.state.images);
    if (clicked === "false") {
      points++;
      e.target.setAttribute("clicked", "true");
      this.setState({
        points: points,
        images: newArray
      });
    } else {
      this.setState({
        points: 0,
        images: newArray
      });
    }
  };
  // after a card click and the click check has happened, run this to move the images around
  shuffleArray = array => {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  render() {
    return (
      <div>
        <h4>
          Click all the Stranger Things characters without clicking one twice!
        </h4>
        <h3>Score: {this.state.points.toString()} | Best Possible: 12</h3>
        {/*add margin bottom */}
        <div className="container">
          {this.state.images.map(image => (
            <MemoryCard
              imageUrl={image.src}
              clicked={image.clicked}
              checkIfClicked={this.checkIfClicked}
              key={image.id}
              id={image.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CardHolder;
