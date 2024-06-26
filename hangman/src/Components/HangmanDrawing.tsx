const HEAD = (
  <div
    style={{
      position: "absolute",
      top: "50px",
      right: "-30px",
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid white",
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
      background: "white",
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
      borderBottomRightRadius: "5px",
      borderTopRightRadius: "5px",
      background: "white",
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
      borderBottomLeftRadius: "5px",
      borderTopLeftRadius: "5px",
      background: "white",
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
      borderBottomRightRadius: "5px",
      borderTopRightRadius: "5px",
      background: "white",
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
      borderBottomLeftRadius: "5px",
      borderTopLeftRadius: "5px",
      background: "white",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="drawing" style={{ position: "relative" }}>
      {/* render a body part after each incorrect letter */}
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          height: "50px",
          width: "10px",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          background: "white",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          marginLeft: "120px",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          background: "white",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          marginLeft: "120px",
          background: "white",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "250px",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          background: "white",
        }}
      />
    </div>
  );
}
