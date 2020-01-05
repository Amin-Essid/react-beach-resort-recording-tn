import React from 'react';
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context;
    if (loading){
        return <Loading />;
    }
        return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
                );
}

export default withRoomConsumer(RoomContainer)






// without using high order component


// import React from 'react'
// import RoomsFilter from "./RoomsFilter"
// import RoomsList from "./RoomsList"
// import {RoomConsumer} from "../Context";

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {value => {
//                 const {loading, sortedRooms, rooms} = value
//                 if (loading){
//                     return <loading />;
//                 }
//                 return (
//                     <div>
//                         Hello from rooms container
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms} />
//                     </div>
//                 );
//             }}
//         </RoomConsumer>

//     )
// }
