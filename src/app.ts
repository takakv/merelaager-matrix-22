import express, {Request, Response} from "express";
import {create} from "express-handlebars";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

import {team1, team2} from "./passwords";

const app = express();

const hbs = create({
  extname: "hbs",
  defaultLayout: "teams",
  layoutsDir: path.join(__dirname, "..", "/views/layouts/"),
  partialsDir: path.join(__dirname, "..", "/views/partials/"),
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", (req: Request, res: Response) => {
  res.render("index", {
    title: "Ööhäire 2022",
    body_class: "landing",
    layout: "landing"
  });
});

// Backstory alpha
app.get("/bs/1", (req: Request, res: Response) => {
  res.render("bst1", {
    title: "Backstory 1",
    body_class: "landing",
    layout: "landing"
  })
});

// Backstory beta
app.get("/bs/2", (req: Request, res: Response) => {
  res.render("bst2", {
    title: "Backstory 2",
    body_class: "landing",
    layout: "landing"
  })
});

// Backstory gamma
app.get("/bs/3", (req: Request, res: Response) => {
  res.render("bst3", {
    title: "Backstory 3",
    body_class: "landing",
    layout: "landing",
  })
});

// cp1-1
app.get("/t1/1", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Esimene vihje",
    password: team1[0],
    placeholder: team2[0],
    team_id: 1,
    className: "cp1-1",
    clue: "Projektiraames püstitati katsealale antenn, mis edastas infot peakontorisse. Tänaseks päevaks on sellest säilinud vaid betoonpost.",
    btn_id: 1,
  })
});

// cp1-2
app.get("/t1/2", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Teine vihje",
    password: team1[1],
    placeholder: team2[1],
    className: "cp1-2",
    clue: "Keset põldu on turvatsoon, kus ei ole miine. Tänapäeval kasvab seal selle märgistamiseks puu, mis on teistest kõrgem. Seda puud on võimalik silmata hommikujooksu ringil.",
    team_id: 1,
    btn_id: 2,
  })
});

// cp1-3
app.get("/t1/3", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Kolmas vihje",
    password: team1[2],
    placeholder: team2[2],
    team_id: 1,
    className: "cp1-3",
    clue: "Et välismaailmast anomaaliasse saadetisi edastada, tekitati pakipostipunkt. Tänaseks päevaks on sellest alles vaid mälestus.",
    btn_id: 3,
  })
});

// cp1-4
app.get("/t1/4", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Neljas vihje",
    password: team1[3],
    placeholder: team2[3],
    team_id: 1,
    className: "cp1-4",
    clue: "Hoomikujooksu ringil, et anomaaliat vältida, meeldib lastele joosta lühemat teed (lõigata). Lõikepunkti tähistab puu.",
    btn_id: 4,
  })
});

// cp1-5
app.get("/t1/5", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Viies vihje",
    password: team1[4],
    placeholder: team2[4],
    team_id: 1,
    className: "cp1-5",
    clue: "Laste järelevalve teostamiseks lisati laagri kommandosse veok, mis kindlustas merepealse järelvalve.",
    btn_id: 5,
  })
});

// cp2-1
app.get("/t2/1", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Esimene vihje",
    password: team2[0],
    placeholder: team1[0],
    team_id: 2,
    className: "cp2-1",
    clue: "Neli jaama väljumispunkti aitasid ja aitavad lastel end anomaaliast kergendada. Jaama tähistab kaks sümbolit, mis on kõigile tänaseks ajju sööbinud.",
    btn_id: 1,
  })
});

// cp2-2
app.get("/t2/2", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Teine vihje",
    password: team2[1],
    placeholder: team1[1],
    team_id: 2,
    className: "cp2-2",
    clue: "Kaugjuhtimine on võimalik just selle vahendiga. Vanasti tüüriti sellega suurlaeva, siis kui see veel merel seilas.",
    btn_id: 2,
  })
});

// cp2-3
app.get("/t2/3", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Kolmas vihje",
    password: team2[2],
    placeholder: team1[2],
    team_id: 2,
    className: "cp2-3",
    clue: "Laagrisse saabudes tervitab külastajaid valvur, keda küll selles vahetuses ei ole. Säilinud on aga selle karvase valvuri puhkekoht.",
    btn_id: 3,
  })
});

// cp2-4
app.get("/t2/4", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Neljas vihje",
    password: team2[3],
    placeholder: team1[3],
    team_id: 2,
    className: "cp2-4",
    clue: "Laagrialal on padrik, mis tagab lastele rohelisuse. Tüdrukud käivad seal tugeva anomaalia tõttu harva, ent poisid käivad seal sagedamini.",
    btn_id: 4,
  })
});

// cp2-5
app.get("/t2/5", (req: Request, res: Response) => {
  res.render("clue_gen.hbs", {
    title: "Viies vihje",
    password: team2[4],
    placeholder: team1[4],
    team_id: 2,
    className: "cp2-5",
    clue: "Laste tervise monitoorimiseks lisati laste elamsikohta skanneeria, mis edastab hommikuti ja õhtuti andmeid laste tervise kohta.",
    btn_id: 5,
  })
});

// cp1-final
app.get("/t1/final", (req: Request, res: Response) => {
  res.render("final.hbs", {
    title: "Lõpp-parool 1",
    team_id: 1,
    body_class: "landing",
    layout: "final",
    password: "k0te",
    half: "1/2",
  })
});

// cp2-final
app.get("/t2/final", (req: Request, res: Response) => {
  res.render("final.hbs", {
    title: "Lõpp-parool 2",
    team_id: 2,
    body_class: "landing",
    layout: "final",
    password: "rm4nn",
    half: "2/2",
  })
});

// Map
app.get("/final", (req: Request, res: Response) => {
  res.render("finalmap.hbs", {
    title: "",
    layout: "landing",
    body_class: "landing",
  })
});

export const runApp = () => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`App listening on port ${port}`));
}