import {useEffect, useState} from "react";


const ValueReturned = (props) => {
    const {JavascriptString} = props;

    return (
        <div>
            {/*<h3>Ad Name</h3>*/}
            {/*<p>creative value: <span>Creative</span></p>*/}
            {/*<br /><br />*/}
            {/*<h3>Tracking Code</h3>*/}
            {/*<p>creative value: <span>Creative</span></p>*/}

            <p>{JavascriptString}</p>

        </div>
    )
}

export default ValueReturned;