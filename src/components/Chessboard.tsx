import React from "react";

import "./Chessboard.css";
import Square from "./Square";

const size: number = 8;
const letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',];

interface DefaultPieceState {
    x: number;
    y: number;
    image: string;
}

export default function Chessboard() {
    const defaultPieces: DefaultPieceState[] = [];

    for (let i = 0; i < 2; i++) {
        const pieceColor:string = i === 0 ? 'white' : 'black';
        const xAxis:number = i === 0 ? 7 : 0;
        const xPawnAxis:number = i === 0 ? 6 : 1;

        defaultPieces.push({ x: xAxis, y: 0, image: `assets/pieces/chess_rook_${pieceColor}.png`})
        defaultPieces.push({ x: xAxis, y: 1, image: `assets/pieces/chess_knight_${pieceColor}.png`})
        defaultPieces.push({ x: xAxis, y: 2, image: `assets/pieces/chess_bishop_${pieceColor}.png`})
        defaultPieces.push({ x: xAxis, y: 3, image: `assets/pieces/chess_queen_${pieceColor}.png`})
        defaultPieces.push({ x: xAxis, y: 4, image: `assets/pieces/chess_king_${pieceColor}.png`})
        defaultPieces.push({ x: xAxis, y: 5, image: `assets/pieces/chess_bishop_${pieceColor}.png`})
        defaultPieces.push({ x: xAxis, y: 6, image: `assets/pieces/chess_knight_${pieceColor}.png`})
        defaultPieces.push({ x: xAxis, y: 7, image: `assets/pieces/chess_rook_${pieceColor}.png`})

        for (let pawn = 0; pawn < 8; pawn++) {
            defaultPieces.push({ x: xPawnAxis, y: pawn, image: `assets/pieces/chess_pawn_${pieceColor}.png`})
        }
    }

    return (
        <div className="chessboard-wrapper">
            {/* Colonnes (lettres) en haut */}
            <div className="letters-row">
                <div className="empty-corner" />
                {letters.map((letter, index) => (
                    <div key={index} className="letter">
                        {letter}
                    </div>
                ))}
            </div>
            <div className="board-with-numbers">
                {/* Rangées (chiffres) à gauche */}
                {Array.from({ length: size }, (_, row) => (
                    <div key={row} className="row">
                        <div className="number">{size - row}</div>
                        {Array.from({ length: size }, (_, col) => {
                            const isDark = (row + col) % 2 === 1;

                            const piece = defaultPieces.find((piece) => {
                                return piece.x === row && piece.y === col;
                            })

                            return (
                                <Square
                                    key={`${row},${col}`}
                                    x={row}
                                    y={col}
                                    image={piece?.image}
                                    class={`square ${isDark ? 'black' : 'white'}`}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
            {/* Colonnes (lettres) en bas */}
            <div className="letters-row">
                <div className="empty-corner" />
                {letters.map((letter, index) => (
                    <div key={index} className="letter">
                        {letter}
                    </div>
                ))}
            </div>
        </div>
    );
}