import type { Project } from "../projects";

export function ProjectArtwork({ id }: Pick<Project, "id">) {
  if (id === "remember") {
    return (
      <div className="artwork artworkRemember" aria-hidden="true">
        <span className="rememberOrbit rememberOrbitOne" />
        <span className="rememberOrbit rememberOrbitTwo" />
        <span className="rememberMoon" />
        <span className="rememberInfinity">∞</span>
        <span className="artLabel">memento</span>
      </div>
    );
  }

  if (id === "desain") {
    return (
      <div className="artwork artworkDesain" aria-hidden="true">
        <span className="roomGrid" />
        <span className="roomWall roomWallLeft" />
        <span className="roomWall roomWallRight" />
        <span className="roomChair"><i /><b /></span>
        <span className="artLabel">işin mutfağı</span>
      </div>
    );
  }

  if (id === "audioroom") {
    return (
      <div className="artwork artworkAudio" aria-hidden="true">
        <span className="audioSun" />
        <span className="vinyl"><i /><b /></span>
        <span className="audioNeedle" />
        <span className="audioWave audioWaveOne" />
        <span className="audioWave audioWaveTwo" />
        <span className="artLabel">drop the needle</span>
      </div>
    );
  }

  if (id === "universe") {
    return (
      <div className="artwork artworkUniverse" aria-hidden="true">
        <span className="campusBuilding"><i /><i /><i /><i /></span>
        <span className="campusPerson campusPersonOne" />
        <span className="campusPerson campusPersonTwo" />
        <span className="campusPerson campusPersonThree" />
        <span className="universeStar">✦</span>
        <span className="artLabel">kampüs burada</span>
      </div>
    );
  }

  if (id === "sorita") {
    return (
      <div className="artwork artworkSorita" aria-hidden="true">
        <span className="mapRoad mapRoadOne" />
        <span className="mapRoad mapRoadTwo" />
        <span className="mapPin mapPinOne"><i /></span>
        <span className="mapPin mapPinTwo"><i /></span>
        <span className="mapPin mapPinThree"><i /></span>
        <span className="artLabel">bir yer keşfet</span>
      </div>
    );
  }

  return (
    <div className="artwork artworkWmatch" aria-hidden="true">
      <span className="filmFrame filmFrameOne"><i /></span>
      <span className="filmFrame filmFrameTwo"><i /></span>
      <span className="matchHeart">♥</span>
      <span className="matchSpark">✦</span>
      <span className="artLabel">watch · match</span>
    </div>
  );
}
