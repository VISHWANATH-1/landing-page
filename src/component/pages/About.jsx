import React from 'react'
import Image from './images.jpeg'
const About = () => {
  return (
    <div style={{height:'100vh'}}>
      <img  src={Image} alt="" />
      <p>
      Lithium-ion batteries contain metals such as cobalt, nickel, and manganese,<br/>
      which are toxic and can contaminate water supplies and ecosystems if they <br/>
      leach out of landfills. Additionally, fires in landfills or battery-recycling <br/>
      facilities have been attributed to inappropriate disposal of lithium-ion <br/>
      batteries.Lithium-ion batteries are harmful to the environment when not <br/>
      properly handled.When they are exposed to water supply systems and ecosystems<br/>
      in general, they end-up contaminating the water and destroying aquatic life.<br/>
      </p>
    </div>
  )
}

export default About