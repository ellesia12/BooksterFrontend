import React from "react";
import { Box } from "@material-ui/core";
import Introduction from "../components/Introduction";
import HowItWorks from "../components/HowItWorks";

const HomePage = () => {
    return(
        <div>
            <Introduction />
            <HowItWorks />
        </div>

    )
}

export default HomePage;