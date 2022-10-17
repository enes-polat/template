import React from "react";
import StoryImg1 from '../images/story-img-1.jpg';
import StoryImg2 from '../images/story-img-2.jpg';

const Stories = ()=>{
    return (
        <section className="stories">
        {/* <div className="video-container">
          <video className="bg-video" autoplay muted loop>
            <source src="images/video.mp4" type="video/mp4" />
          </video>
        </div> */}
        <div className="stories-wrapper">
          <div className="story-bg">
            <div className="story">
              <img
                src={StoryImg1}
                alt="Customer image"
                className="story-image"
              />
              <div className="story-text">
                <h1 className="story-heading">
                  These were the best days of this year
                </h1>
                <p className="story-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto quas, repudiandae veritatis nam mollitia cumque
                  distinctio, quia aperiam aliquid at consequuntur libero
                  quisquam facilis laborum inventore repellat perspiciatis vel
                  fugiat molestias recusandae eum necessitatibus quo possimus
                  aspernatur? Nobis, architecto eaque.
                </p>
              </div>
            </div>
          </div>
          <div className="story-bg">
            <div className="story">
              <img
                src={StoryImg2}
                alt="Customer image"
                className="story-image"
              />
              <div className="story-text">
                <h1 className="story-heading">
                  I enjoyed this great tour
                </h1>
                <p className="story-paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto quas, repudiandae veritatis nam mollitia cumque
                  distinctio, quia aperiam aliquid at consequuntur libero
                  quisquam facilis laborum inventore repellat perspiciatis vel
                  fugiat molestias recusandae eum necessitatibus quo possimus
                  aspernatur? Nobis, architecto eaque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Stories;