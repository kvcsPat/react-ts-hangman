const HEAD = (
  <div
    style={{
      position: "absolute",
      top: "50px",
      right: "-30px",
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
    }}
  />
);

const BODY = (
  <div
    style={{
      position: "absolute",
      top: "120px",
      right: "0",
      width: "10px",
      height: "100px",
      background: "black",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      position: "absolute",
      top: "150px",
      right: "-100px",
      width: "100px",
      height: "10px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
      background: "black",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      position: "absolute",
      top: "150px",
      right: "10px",
      width: "100px",
      height: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
      background: "black",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      position: "absolute",
      top: "210px",
      right: "-90px",
      width: "100px",
      height: "10px",
      rotate: "60deg",
      transformOrigin: "left bottom",
      background: "black",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      position: "absolute",
      top: "210px",
      right: "0",
      width: "100px",
      height: "10px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
      background: "black",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          height: "50px",
          width: "10px",
          background: "black",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          marginLeft: "120px",
          background: "black",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          marginLeft: "120px",
          background: "black",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}
