import { ChessBoard } from "../components/ChessBoard"
import { Button } from "../components/Button"
import { useSocket } from "../hooks/useSocket";
import { useEffect, useState } from "react";
import { Chess } from "chess.js";


export const INIT_GAME = "INIT_GAME";
export const MOVE = "MOVE";
export const GAME_OVER = "GAME_OVER";


export const Game = () => {
    const socket = useSocket();
    const [chess, setChess] = useState(new Chess());
    const [board, setBoard] = useState(chess.board());

    useEffect(() => {
        if(!socket) return;

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log(message);
            switch(message.type) {
                case INIT_GAME:

                    setChess(new Chess());
                    setBoard(chess.board());
                    console.log("Game initialized");
                    break;
                case MOVE:
                    const move = message.payload;
                    chess.move(move);
                    console.log("Move made");
                    setBoard(chess.board());
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
                    <ChessBoard board={board} />
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