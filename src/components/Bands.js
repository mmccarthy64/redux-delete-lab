import React from "react";
import Band from "./Band";

const Bands = props => {

    const bands = props.bands.map( band => <Band deleteBand={props.deleteBand} key={band.id} name={band.name} /> )

    return (
    <div>
        {bands}
    </div>
    )
  }

  export default Bands