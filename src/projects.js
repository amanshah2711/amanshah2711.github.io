
import {BsGithub} from "react-icons/bs";
import { MdOutlineOpenInNew } from "react-icons/md";
export default function Projects () {
    return (
        <div class="container justify-content-md-center">
            <div class="row row-cols-2 row-cols-md-4 g-4 justify-content-md-center">
            <div class="col">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Chess</h5>
                    <p class="card-text">Chess was implemented using Python for the backend logic and Flask to create a webserver connecting to the GUI.</p>
                </div>
                <div class="card-footer">
                <a href="https://chess.amanshah2711.me" class="float-end"><MdOutlineOpenInNew /></a>
                <a href="https://github.com/amanshah2711/chess-react" class="float-end"> <BsGithub/> </a>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Tic-Tac-Toe</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div class="card-footer">
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="" class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Crossword Leaderboard</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}