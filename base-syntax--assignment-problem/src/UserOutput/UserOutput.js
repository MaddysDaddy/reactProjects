import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <h4>Username: { props.userName }</h4>
            <p>Lorem ipsum dolor amet retro tacos coloring book stumptown chambray raw denim tilde deep v 3 wolf moon tbh synth. Health goth locavore cardigan flexitarian offal.</p>
            <p>Cronut biodiesel gastropub, next level cred stumptown marfa umami portland tilde etsy chia humblebrag intelligentsia. Cliche tilde banh mi echo park post-ironic drinking vinegar.</p>
        </div>
    )
}

export default userOutput;