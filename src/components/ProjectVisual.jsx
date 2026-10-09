const dialogue = [
  ["a", "Did you finish the report?"],
  ["b", "Almost. Sending it tonight."],
  ["a", "Perfect, thank you!"],
];

function PipelineArt() {
  const words = [12, 8, 15, 6, 11, 9, 14, 7, 10, 13];
  return (
    <div className="art art-pipeline" role="img" aria-label="Illustration of an editing timeline with transcript, caption, b-roll and cut tracks and a moving playhead">
      <div className="pipeline-frame">
        <span className="pipeline-caption">So the hook lands in the first three seconds</span>
      </div>
      <div className="pipeline-tracks">
        <div className="pipeline-row">
          <b>Transcript</b>
          <div>
            {words.map((w, i) => (
              <i key={i} style={{ flexGrow: w }} />
            ))}
          </div>
        </div>
        <div className="pipeline-row">
          <b>Captions</b>
          <div className="is-teal">
            {words.slice(0, 6).map((w, i) => (
              <i key={i} style={{ flexGrow: w + 4 }} />
            ))}
          </div>
        </div>
        <div className="pipeline-row">
          <b>B-roll</b>
          <div className="is-sparse">
            <i style={{ flexGrow: 5 }} />
            <span style={{ flexGrow: 3 }} />
            <i style={{ flexGrow: 7 }} />
            <span style={{ flexGrow: 4 }} />
            <i style={{ flexGrow: 4 }} />
          </div>
        </div>
        <div className="pipeline-row">
          <b>Cuts</b>
          <div className="is-sparse is-cuts">
            <span style={{ flexGrow: 9 }} />
            <i style={{ flexGrow: 1 }} />
            <span style={{ flexGrow: 14 }} />
            <i style={{ flexGrow: 1 }} />
            <span style={{ flexGrow: 8 }} />
          </div>
        </div>
        <span className="art-playhead" />
      </div>
    </div>
  );
}

function StoryArt() {
  return (
    <div className="art art-story" role="img" aria-label="Illustration of a script turning into an animated conversation scene">
      <div className="story-script">
        {dialogue.map(([who, line], i) => (
          <p key={i} className={`line-${who}`}>
            <b>{who === "a" ? "Mia" : "Ken"}</b>
            {line}
          </p>
        ))}
      </div>
      <div className="story-scene">
        <span className="char char-a" />
        <span className="char char-b" />
        {dialogue.map(([who, line], i) => (
          <span key={i} className={`bubble bubble-${who} bubble-${i}`}>
            {line}
          </span>
        ))}
        <span className="story-chip">Rendering MP4</span>
      </div>
    </div>
  );
}

function ReelArt() {
  return (
    <div className="art art-reel" role="img" aria-label="Illustration of the fishing game from above: a line, a bobber with ripples, a fish shadow and a reel dial">
      <span className="ripple r1" />
      <span className="ripple r2" />
      <span className="ripple r3" />
      <span className="bobber" />
      <svg className="line" viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false">
        <path d="M14 92 Q 40 70 58 42" />
      </svg>
      <span className="fish" />
      <span className="hud hud-coins">120 coins</span>
      <span className="hud hud-xp">Level 3</span>
      <div className="dial">
        <span className="dial-handle" />
      </div>
    </div>
  );
}

function VideoSiteArt() {
  return (
    <div className="art art-site" role="img" aria-label="Illustration of the video editing portfolio: a large name, then three video frames for a serious short, voice-over b-roll and gaming content">
      <p className="site-bar">
        <b>Shannon</b>
        <span>Work · About · Contact</span>
      </p>
      <p className="site-title">
        Video
        <br />
        Editor
      </p>
      <div className="site-frames">
        {[
          ["Serious short", "tall"],
          ["Voice-over b-roll", ""],
          ["Gaming content", ""],
        ].map(([label, shape], i) => (
          <figure key={label} className={`frame ${shape}`} style={{ "--i": i }}>
            <span className="frame-play" />
            <i className="frame-scrub" />
            <figcaption>{label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function RentalArt() {
  const steps = [
    ["List", ["Pixel 8", "Galaxy S23", "iPhone 13"]],
    ["Browse", ["Pixel 8", "Galaxy S23", "iPhone 13"]],
    ["Book", ["Pixel 8", "Dates", "Confirm"]],
  ];
  return (
    <div className="art art-rental" role="img" aria-label="Illustration of three phone screens: list a device, browse phones, book a rental">
      {steps.map(([title, rows], i) => (
        <div key={title} className="phone" style={{ "--i": i }}>
          <span className="phone-notch" />
          <p className="phone-title">{title}</p>
          {rows.map((row, j) => (
            <span key={row} className={`phone-row ${j === 0 ? "is-picked" : ""}`}>
              <i />
              {row}
            </span>
          ))}
          <span className="phone-cta">{i === 2 ? "Book now" : i === 1 ? "View" : "Add"}</span>
        </div>
      ))}
    </div>
  );
}

function CloudArt() {
  return (
    <div className="art art-cloud" role="img" aria-label="Illustration of a terminal connected over SSH to an Ubuntu server, next to Google Cloud and Oracle Cloud status chips">
      <div className="term">
        <p className="term-bar">
          <i />
          <i />
          <i />
          ubuntu: ssh
        </p>
        <p className="t1">$ ssh ubuntu@oracle-vm</p>
        <p className="t2">ubuntu@vm:~$ systemctl status minecraft</p>
        <p className="t3">
          <span className="dot" /> minecraft.service: active (running)
        </p>
        <p className="t4">
          ubuntu@vm:~$ <span className="cursor" />
        </p>
      </div>
      <div className="cloud-chips">
        <span>
          <span className="dot" /> Google Cloud <small>Websites</small>
        </span>
        <span>
          <span className="dot" /> Oracle Cloud <small>Ubuntu VM</small>
        </span>
      </div>
    </div>
  );
}

function PortfolioArt() {
  return (
    <div className="art art-self" role="img" aria-label="Illustration of this portfolio's hero: the name above a timeline with a moving playhead">
      <p className="self-name">
        Shannon Keanu
        <br />
        A. Yase
      </p>
      <div className="self-timeline">
        <span className="self-clip c1" />
        <span className="self-clip c2" />
        <span className="self-clip c3" />
        <span className="art-playhead" />
      </div>
    </div>
  );
}

const art = {
  ai: PipelineArt,
  story: StoryArt,
  reel: ReelArt,
  video: VideoSiteArt,
  rental: RentalArt,
  cloud: CloudArt,
  portfolio: PortfolioArt,
};

export default function ProjectVisual({ project }) {
  if (project.image)
    return (
      <img
        className="viewer-image"
        src={project.image}
        alt={project.alt}
        width={project.id === "galaxy" ? 1919 : 1562}
        height={project.id === "galaxy" ? 1079 : 1562}
        loading="lazy"
        decoding="async"
        draggable="false"
      />
    );
  const Art = art[project.id];
  return <Art />;
}
