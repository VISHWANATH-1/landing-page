import React from "react";

const Contact = () => {
  return (
    <div className="form-con">
      <p>
        As per studies, 98% of components in an electronic device are
        <br />
        recyclable. Metals extracted through mining require much difficulty
        <br />
        and recyclable. Metals extracted through mining require much <br />
        difficulty andeffort. Apart from mining, the cost to refine metals{" "}
        <br />
        and transform them to a usable form is also very high.Through the
        <br />
        extraction and reuse of metal from old electronic gadgets, the need
        <br />
        to manufacture and refine raw metals decreases. Wires and other
        <br />
        components of electronic devices made of aluminum and copper can <br />
        be reused multiple times. Reutilizing them in other electronic
        <br />
        devices means little to no material goes to waste. Hence, the need
        <br />
        to mine, extract and manufacture more metal reduces. Electronic
        <br />
        gadgets have many components made of glass. For example, the screen
        <br />
        of any PC, laptop, television, smartphone, or any other electronic{" "}
        <br />
        device is made up of high-quality glass. Manufacturing glass from <br />
        scratch requires a lot of energy. Manufacturers reuse glass from <br />
        old electronics so it does not go to waste. This also saves time
        <br />
        and money manufacturing new glass.
        <br />
      </p>
      <div className="submit-form">
        <input className="inp" type="text" placeholder="Enter Your Name" />
        <input className="inp" type="text" placeholder="Email" />
      </div>
      <button style={{ marginTop: "15px",width:'100px', marginLeft:'46%' }} className="btn">
        Submit
      </button>
    </div>
  );
};

export default Contact;
