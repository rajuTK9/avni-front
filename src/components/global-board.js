import React from "react";
import UserBoard from "./userboard";

function GlobalBoard() {
    return (
        <>
            <UserBoard rank="1" image="../../assets/images/user1.png" name="Ashley" username="ersdfvr" level="24" location="GERMANY" leaves="12442" />
            <UserBoard rank="1" image="../../assets/images/user1.png" name="Ashley" username="ersdfvr" level="24" location="GERMANY" leaves="12442" />
            <UserBoard rank="1" image="../../assets/images/user1.png" name="Ashley" username="ersdfvr" level="24" location="GERMANY" leaves="12442" />
            <UserBoard rank="1" image="../../assets/images/user1.png" name="Ashley" username="ersdfvr" level="24" location="GERMANY" leaves="12442" />
            <UserBoard rank="1000" image="../../assets/images/user1.png" name="Ashley" username="ersdfvr" level="24000" location="GERMANY" leaves="1209442" />
            <div className="you-board">
                <UserBoard rank="2342" image="../../assets/images/user1.png" name="Shutkone" username="ersdfvr" level="24000" location="GERMANY" leaves="1209442" />
            </div>
        </>
    )
}

export default GlobalBoard;