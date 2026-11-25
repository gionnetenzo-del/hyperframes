# Comment construire un château fort au Moyen Âge ?

Documentaire historique animé en 3D (~10 min 30, 1920×1080, 24 i/s, français), rendu avec HyperFrames.

## Contenu

- `index.html` — composition racine : monde 3D, 11 calques de scène, sous-titres, voix off (44 segments), lit musical et 105 bruitages.
- `compositions/world.html` — le monde 3D (Three.js) piloté par la timeline, plus 71 étiquettes ancrées sur des points 3D.
- `compositions/s1.html` … `s11.html` — titres de chapitre, cartes « Problème / Solution », schémas, appel à l'action, écran de fin.
- `compositions/captions.html` — sous-titres français calés mot à mot sur la voix.
- `assets/` — voix off (ElevenLabs, voix « Justin Doré – Documentary Narrator »), musiques et bruitages (ElevenLabs), police Cinzel, bundle 3D.

## Variable

`channelName` (nom de la chaîne affiché à la fin) : modifiable dans Studio ou avec
`npx hyperframes render --variables '{"channelName":"Ma chaîne"}'`.

## Reconstruire

```bash
cd build && bun install            # three.js pour le bundle
python3 build/tts.py               # voix off + alignements (ElevenLabs)
python3 build/layout.py            # timeline globale + repères mot à mot (assets/cues.js)
bash build/music.sh                # musiques ; puis python3 build/music_bed.py (mixage avec ducking)
bash build/bundle.sh               # monde 3D -> assets/world.bundle.js
python3 build/gen.py               # génère index.html + compositions/
npx hyperframes check
npx hyperframes render . --workers 3
```

`build/src/` contient le monde 3D : terrain et forêt (`terrain.js`), château paramétrique
qui se construit étape par étape (`castle.js`), personnages et machines animés (`people.js`),
maquettes en coupe (`dioramas.js`), état du chantier / caméra / lumière synchronisés sur la
narration (`director.js`) et scène principale (`main.js`).
