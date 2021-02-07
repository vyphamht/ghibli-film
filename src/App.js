import "./App.css";
import Films from "./components/Films/Films";
import Species from "./components/Species/Species";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Nav, Card } from "react-bootstrap";
import HayaoMiyazaki from "./assets/HayaoMiyazaki.jpg";

export default function App() {
  return (
    <Router>
      <div>
        <Nav
          variant="tabs"
          className="justify-content-center"
          style={{ background: "white", padding: "2rem" }}
        >
          <NavLink
            exact
            to="/"
            activeStyle={{
              fontWeight: "bold",
              borderBottom: "solid 2px #5a6268",
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/film"
            activeStyle={{
              fontWeight: "bold",
              borderBottom: "solid 2px #5a6268",
            }}
          >
            Films
          </NavLink>
          <NavLink
            to="/species"
            activeStyle={{
              fontWeight: "bold",
              borderBottom: "solid 2px #5a6268",
            }}
          >
            Species
          </NavLink>
        </Nav>

        <Switch>
          <Route path="/film">
            <Films />
          </Route>
          <Route path="/species">
            <Species />
          </Route>
          <Route path="/">
            <div>
              <h2>
                This app shows list of most well-known Ghibli films of all times
                and hope you enjoy it.
              </h2>
              <div className="general_info">
                <Card
                  style={{
                    width: "26rem",
                    padding: "2rem",
                    borderRadius: "none",
                    border: "none",
                  }}
                >
                  <h3>Studio Ghibli</h3>
                  <p>
                    Studio Ghibli Inc. (Japanese: 株式会社スタジオジブリ,
                    Hepburn: Kabushiki-gaisha Sutajio Jiburi) is a Japanese
                    animation film studio headquartered in Koganei, Tokyo. The
                    studio is best known for its animated feature films, and has
                    also produced several short films, television commercials,
                    and one television film. The studio's mascot and most
                    recognizable symbol is the character, Totoro, a giant
                    cat-like spirit from the studio's 1988 film My Neighbor
                    Totoro. Studio Ghibli's highest grossing films include
                    Spirited Away (2001), Ponyo (2008), and Howl's Moving Castle
                    (2004). The studio was founded on June 15, 1985 by directors
                    Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki,
                    after the success of Topcraft's anime film Nausicaä of the
                    Valley of the Wind (1984). Studio Ghibli has also
                    collaborated with video game studios on the visual
                    development of several video games.
                  </p>
                  <i>Source: Wikipedia</i>
                </Card>

                <Card
                  className="HayaoMiyazaki"
                  style={{
                    width: "26rem",
                    borderRadius: "none",
                    border: "none",
                  }}
                >
                  <img src={HayaoMiyazaki} style={{ maxHeight: "700px" }} />
                  <i style={{ paddingBottom: "2rem" }}>
                    Portrait of <strong>Hayao Miyazaki</strong>
                  </i>
                </Card>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
