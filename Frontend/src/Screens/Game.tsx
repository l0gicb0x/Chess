import { ChessBoard } from "../components/ChessBoard"
import { Button } from "../components/Button"
import { useSocket } from "../hooks/useSocket";
import { useEffect, useState } from "react";


export const INIT_GAME = "INIT_GAME";
export const MOVE = "MOVE";
export const GAME_OVER = "GAME_OVER";


export const Game = () => {
    const socket = useSocket();
    const [board, setBoard] = useState();

    useEffect(() => {
        if(!socket) return;

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log(message);
            switch(message.type) {
                case INIT_GAME:
                    console.log("Game initialized");
                    break;
                case MOVE:
                    console.log("Move made");
                    break;
                case GAME_OVER:
                    console.log("Game over");
                    break;
            }

        }
    }, [socket]);

    if(!socket)  return <div className="text-white">Connecting to server...</div>

    return <div className=" justify-center flex">
        <div className="pt-8 max-w-Screen-lg w-full">
            <div className="grid grid-cols-6 gap-4 w-full ">
                <div className="col-span-4 bg-red-200 w-full">
                    <ChessBoard/>
                </div>
                <div className="col-span-2 bg-green-200 w-full">
                    <Button 
    onClick={() => {
        socket.send(JSON.stringify({
            type: INIT_GAME
        }))
    }}
>
    Play Online
</Button>
                </div>

            </div>
        </div>
    </div>
}