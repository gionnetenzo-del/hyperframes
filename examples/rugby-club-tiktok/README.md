# Mon club de rugby — Épisode 1 (TikTok 9:16)

Motion design vertical (1080×1920, 30 fps, 66,5 s) : Max crée son club de rugby avec sa communauté.
Rendu final : `renders/club-rugby-episode1.mp4`.

## Le film, scène par scène

| Temps | Scène | Ce qu'on voit |
| --- | --- | --- |
| 0 – 6,2 s | `hook` | « 0 JOUEUR / 0 BALLON / 0 TERRAIN » puis « JE CRÉE MON CLUB DE RUGBY », Max saute |
| 6,2 – 15,6 s | `max` | Présentation de Max (fondateur), bulle de rêve « MON CLUB », « TOUT SEUL ? IMPOSSIBLE », « J'AI BESOIN DE TOI » |
| 15,6 – 24,45 s | `rule1` | Règle n°1 : bouton S'ABONNER → membre du club → carte JOUEUR ou BÉNÉVOLE |
| 24,45 – 31,45 s | `rule2` | Règle n°2 : commentaires likés, tampons TITULAIRE, le XV de départ se remplit |
| 31,45 – 43,05 s | `rule3` | Règle n°3 : 1 like = 10 €, 1 abonné = 50 €, cagnotte qui grimpe à 60 000 € |
| 43,05 – 48,5 s | `build` | Maillots, ballons, poteaux → l'équipe arrive autour de Max |
| 48,5 – 57,5 s | `name` | Blason vide, le nom défile façon machine à sous → « ? ? ? », « ANNONCÉ DANS L'ÉPISODE 2 », propose ton nom en commentaire |
| 57,5 – 66,5 s | `cta` | ABONNE-TOI / LIKE / COMMENTE, « JOUEUR OU BÉNÉVOLE ? », « ON SE RETROUVE SUR LE TERRAIN » |

## Son

- Voix off française générée avec Fish Audio (voix « Voix Mâle Dynamique », modèle gratuit `s2.1-pro-free`), texte dans `voiceover/script.json`, mixée à −16 LUFS.
- Bruitages : bibliothèque intégrée HyperFrames (Pixabay), calés une image après l'action.
- **Pas de musique** : le catalogue musical demande une connexion HeyGen (`npx hyperframes auth login`, gratuite). Une fois connecté, ajoutez un `<audio id="music" … data-volume="0.14">` dans `index.html`.

## Modifier

- Les fichiers HTML (`index.html`, `compositions/*.html`) sont générés par `generate.py` (personnage Max, minutage calé sur `assets/audio/transcript.json`). Modifier `generate.py` puis `python3 generate.py` réécrit les HTML — les retouches faites à la main ou dans Studio seraient alors écrasées.
- Aperçu : `npx hyperframes@0.9.26 preview` · Contrôle : `npx hyperframes@0.9.26 check` · Rendu : `npx hyperframes@0.9.26 render -o renders/club-rugby-episode1.mp4`.
- Les commentaires affichés (@lucas_pilier, @ines.rugby…) sont des exemples fictifs : remplacez-les par de vrais commentaires dans les épisodes suivants (`COMMENTS` dans `generate.py`).
