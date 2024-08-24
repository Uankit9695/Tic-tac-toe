import { useState } from "react";
import Card from "../card/Card";
import './Grid.css'
import isWinner from "../../helpers/checkWinner";
function Grid({numberofCard}){
    const [borad, setBoard]= useState(Array(numberofCard).fill(""));
    const [trurn,setTurn]=useState(true);
    const [winner , setWinner]=useState(null);

    function play(index){
        if(trurn ==true){
            borad[index]="o";
        }
        else{
            borad[index]="x";
        }
        const win = isWinner(borad, trurn ? "o" : "x");
        if(win){
            setWinner(win);
        }
        setBoard([...borad]);
        setTurn(!trurn);

    }
    function reset(){
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberofCard).fill(""))
    }
    return(
        <div className="gird-wrapper">
            {
                winner &&(
                    <>
                    <h1 className="turn-highlight">Winner is {winner}</h1>
                    <button className="reset" onClick={reset}>Reser Game</button>
                    </>
                )
            }
             <h1 className="turn-highlight">current turn:{(trurn)?'o':'x'}</h1>
             <div className="grid">
                 {borad.map((el , idx) => <Card gameEnd={winner ? true : false} key ={idx} onPlay={play} player={el} index={idx}/>)}
             </div>
        </div>

    );

}
export default Grid;