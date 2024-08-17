import React from "react";
import { data } from "../restApi.json";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
          At GOFOOD, our team is the heart of everything we do. From our skilled chefs in the kitchen to our friendly staff on the floor, everyone is dedicated to making your dining experience exceptional. Our chefs bring creativity and passion to every dish, using their expertise to craft flavors that delight the senses. Meanwhile, our welcoming staff ensures that you feel at home from the moment you walk through our doors. Together, we strive to provide not just a meal, but a memorable experience for every guest.


          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
