function Hello() {
  let myName = "Prakash";
  let fullname = () => {
    return "Prakash Gupta";
  };
  return (
    <h3>
      {" "}
      Hello, this is the future speaking, I am your frient {myName} and full
      name is {fullname()}
    </h3>
  );
}

export default Hello;
