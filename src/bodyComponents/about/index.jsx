import React, {Component} from "react";
import { InfoWrapper, Text, Head } from "./style";

class About extends Component {
    render() {
        return (
            <InfoWrapper>
                <Head>Hello!</Head>
                <br/>
                <Text>                    
                    We, students of Fanshawe College, tech enthusiasts, are currently studying Web Development.    
                    We are a two-people team, started teach ourselves React, Redux, MongoDB, NodeJS... from scratch 2 months ago, that is how Tripinterest comes up.
                </Text>
                <br/>    
                <Head>New Features Coming Soon...</Head>
            </InfoWrapper>
        );
    }
}

export default About;