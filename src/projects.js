
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
                    <a href="https://chess.amanshah2711.me" className="float-end"><MdOutlineOpenInNew /></a>
                    <a href="https://github.com/amanshah2711/chess-react" className="float-end me-2"> <BsGithub/> </a>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="" class="card-img-top" alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Crossword Leaderboard</h5>
                    <p class="card-text">Built for friends to race in the NYT crossword! Frontend designed using React and backend uses Flask. Data is managed in a PostgreSQL database. </p>
                </div>
                <div class="card-footer">
                    <a href="https://xwleaderboard.amanshah2711.me" className="float-end"><MdOutlineOpenInNew /></a>
                    <a href="https://github.com/amanshah2711/xw-leaderboard" className="float-end me-2"> <BsGithub/> </a>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}