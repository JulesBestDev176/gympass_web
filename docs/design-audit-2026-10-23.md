# Diagnostic de la vitrine GymPass SN

Périmètre : page d’accueil de `gympass-site`, navigation, formulaire, galerie et aperçus de `gympass_sn`. Méthode : Impeccable 4.7.0, audit technique puis corrections de typographie, d’accessibilité et d’animation. Identité conservée : Urbanist pour la vitrine, Inter pour les aperçus, fond sombre et accent lime.

## Limite de vérification

Le navigateur automatisé est indisponible : inventaire vide, puis ouverture refusée avec `Browser is not available: iab`. Aucun rendu desktop/tablette/mobile, geste tactile, lecteur d’écran ou mesure de fluidité sur téléphone n’a pu être observé. Les constats ci-dessous reposent sur les sources, les métadonnées des polices et les calculs de contraste. Ce rapport ne certifie pas la conformité WCAG.

## Synthèse technique

Verdict : identité cohérente avec le produit, mais défauts mesurables dans les déclarations de polices, les textes secondaires, les cibles tactiles et le mouvement. Aucun blocage de parcours identifié par lecture du code.

| Dimension | Estimation après correction /4 | Évidence et limite |
|---|---:|---|
| Accessibilité | 3 | Contrastes corrigés, Escape sur le menu, réduction du mouvement adaptée ; parcours clavier non observé. |
| Performance | 3 | Avatars redimensionnés via Next Image, animations finies et suspendues hors écran ; LCP/INP/FPS non mesurés. |
| Couleurs et thème | 3 | Couleurs de base et textes regroupés en variables ; couleurs spécifiques des statuts conservées. |
| Responsive | 2 | Marges partagées, titres autorisant le retour à la ligne, contrôles de 44 px ; zoom et rendu réel à vérifier. |
| Intégrité | 3 | Identité conservée ; détecteur limité à trois avertissements sur Inter, justifiés ci-dessous. |
| **Total indicatif** | **14/20** | Évaluation des sources, pas une note de rendu ni une certification. |

## Problèmes et corrections

Neuf constats : aucun P0, deux P1, six P2, un P3.

| Priorité | Constat vérifié | Correction et emplacement |
|---|---|---|
| P1 | Textes `#707784` à 3,88:1 sur `#161a1f`, placeholders `#626a78` à 3,52:1 sur `#0d0f12`, sous le minimum de 4,5:1 pour du petit texte. | `globals.css` : texte secondaire/placeholder `#8a8f9e`, soit 5,41:1 et 5,94:1 sur ces fonds. Écran réduit à une image illustrative exclu de toute affirmation WCAG sur ses petits textes. |
| P1 | Règle globale désactivant toutes les transitions en mode réduit, y compris les retours d’état. | `globals.css` : suppression des mouvements spatiaux ; maintien de changements courts de couleur/opacité. Carrousel sans rotation automatique avec cette préférence. |
| P2 | Inter Medium, fichier statique sans axe variable, déclaré comme couvrant 500–800. Urbanist variable possède un axe 100–900 non déclaré explicitement. | `globals.css` et `layout.tsx` : Inter déclaré à 500, synthèse désactivée dans les aperçus ; Urbanist déclaré 100–900. |
| P2 | Points du carrousel larges de 24–26 px. | `globals.css` : boutons de 44 × 44 px, commandes sur deux rangées en mobile pour conserver la place. |
| P2 | Halos/orbites et scan animés en boucle sans pause liée à la visibilité. | `motion-lifecycle.tsx` : suivi de visibilité des régions et de l’onglet. Scan du hero unique de 800 ms ; démonstration scanner limitée à deux cycles ; boucles ambiantes supprimées. |
| P2 | Métadonnées de vitrine à 8–9 px dans certaines règles mobiles. | `globals.css` : informations du hero à 11–12 px, notes à 11 px, footer à 12 px. Tailles miniatures des aperçus conservées pour rester fidèles à Flutter. |
| P2 | Champs du formulaire en 13 px, susceptibles de provoquer un zoom automatique sur iOS. | `globals.css` : champs à 16 px, caret et focus cohérents avec la palette. Vérification iOS encore nécessaire. |
| P2 | Sprite PNG de portraits de 2 230 791 octets chargé comme fond pour de petits avatars. | `app-previews.tsx` : composant Next Image, tailles 64/160 px et chargement différé ; sprite original conservé, fond CSS supprimé. Réduction du transfert à mesurer sur serveur en fonctionnement. |
| P3 | Couleurs répétées et durées d’interaction sans valeurs partagées. | `globals.css` : variables pour fonds, texte, accent, bordures, courbe et durées. Espacement global conservé via les variables de gouttière et de section introduites précédemment. |

Le menu se ferme aussi avec Escape et restitue le focus au bouton ; le passage en desktop réinitialise son état. Le carrousel accepte un balayage horizontal via Pointer Events, conserve le défilement vertical et nettoie le geste à l’annulation/perte de capture. Ces chemins restent à exercer sur appareil.

## Animations retenues

- Un trait de lecture parcourt le téléphone du hero une seule fois, sans masquer le contenu.
- Le carrousel garde sa continuité spatiale et la différence de hauteur entre l’écran actif et ses voisins. Le marqueur actif utilise un changement d’échelle plutôt qu’une animation de largeur.
- Boutons : retour d’action de 140 ms ; menu, confirmation du formulaire et texte de FAQ : 220 ms.
- Pas d’apparition systématique de toutes les sections, de parallaxe ni de nouvelle dépendance d’animation.

## Détecteur et exceptions

Le détecteur Impeccable signale trois occurrences de `overused-font` liées à Inter. Exception intentionnelle : cette police est celle de l’application de référence et reste limitée aux aperçus. La vitrine utilise Urbanist. Modifier Inter contredirait la demande de fidélité à `gympass_sn`.

Points déjà solides : polices locales avec `font-display: swap`, focus visible, lien d’évitement, formulaire avec labels et champs requis, pause et navigation clavier du carrousel, respect initial de la préférence de mouvement, téléphone actif centré verticalement.

## Contrôle restant

À examiner visuellement à 320/375/768/1024/1440 px : débordement horizontal, hauteur réelle du hero, contenu des téléphones, retour à la ligne des titres, marges entre sections. Exercer le balayage, la fermeture du menu, le focus et le mode de mouvement réduit ; contrôler le zoom à 200 % et le chargement sur réseau mobile. Effectuer ensuite la passe `$impeccable polish` rendue possible par un navigateur disponible. Les corrections ont été effectuées ensemble dans le périmètre demandé ; aucune nouvelle approbation n’est nécessaire pour les conserver.

Références : [Impeccable](https://github.com/pbakaus/impeccable), [Next Image](https://nextjs.org/docs/app/api-reference/components/image).
