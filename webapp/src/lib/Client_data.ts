import twentycfox from "../assets/front/20thcfox-square.png";
import artquest from "../assets/front/artquest-square.png";
import generationz from "../assets/front/generationz-square.png";
import kiwiyo from "../assets/front/kiwiyo-square.png";
import lotto from "../assets/front/lotto-square.png";
import otukapua from "../assets/front/otukapua-square.png";
import tangaroa from "../assets/front/tangaroa-square.png";
import windsong from "../assets/front/windsong-square.png";

import twentycfox_hero from "../assets/hero/20thcfox.png";
import artquest_hero from "../assets/hero/artquest.png";
import generationz_hero from "../assets/hero/generationz.png";
import kiwiyo_hero from "../assets/hero/kiwiyo.png";
import lotto_hero from "../assets/hero/lotto.png";
import otukapua_hero from "../assets/hero/otukapua.png";
import tangaroa_hero from "../assets/hero/tangaroa.png";
import windsong_hero from "../assets/hero/windsong.png";

export default class client_data {
    title: string[] = [];
    description: string[] = [];
    youtube_link: string[] = [];
    main_text: string[] = [];
    hero_picture: any[] = [];
    front_picture: any[] = [];

    constructor() {
        this.title.push("20th Century Fox – engaging games for brand promotion");
        this.hero_picture.push(twentycfox_hero);
        this.front_picture.push(twentycfox);
        this.description.push("20th Century Fox used the Imersia Technologies to promote movies during the school holidays in malls, cinema complexes and other locations. We were involved in Epic, Turbo, Walking with dinosaurs, and Rio2 – movies for children that suited this form of promotion.");
        this.youtube_link.push("https://www.youtube.com/embed/BPveUZSAOgo");
        this.main_text.push(`<b>Problem:</b> During the school holidays, attracting children to ‘your’ movies is always a challenge for movie houses. Standard promotions such as posters and advertisements just aren’t enough in the cut-throat world of children’s movies.
                <br/><br/><b>Solution: </b>We created Augmented Reality treasure hunts and Virtual Reality games (using Oculus Rift) incorporated with physical displays creating truly Mixed Reality Experiences. The Imersia Cloud managed the gameplay experience and analytics across the country at each location. In addition, other stakeholders were involved with their own companion promotions; Columbus Coffee, Westfield malls, Event Cinemas and Hoyts Cinemas. Columbus Coffee for example had their own game which could only be played at the cafes.
                <br/><br/><b>Results: </b>These became ‘destinations’ for parents seeking to amuse their kids for over hour during the holidays. For some of the promotions (eg Epic and Rio2), the queues were substantial and caused issues for the mall staff, requiring the malls to be kept open longer. For Columbus Coffee, the ‘pester factor’ meant that parents chose that café over others so their child could play the game.
                Children (and hence their parents) were engaged with the games and therefore with the movie brand for half an hour to an hour at a time.
                The analytics showed a marked surge in ticket sales for the malls that had the promotions compared to the malls that did not. In some cases, this was up to a staggering 200% increase.
            `);

        this.title.push("Auckland Art week – Artquest – an arts events with real and virtual art");
        this.hero_picture.push(artquest_hero);
        this.front_picture.push(artquest);
        this.description.push("Artweek in Auckland is a chance for lesser known artists, galleries and artworks to be promoted and enjoyed by the wider public.");
        this.youtube_link.push("https://www.youtube.com/embed/E0obDSQxAMQ");
        this.main_text.push(`<b>Problem:</b> As for a previous project to support the Auckland 175th Anniversary, it is always a challenge to provide accurate and up-to-date information to the public in an engaging manner.
                <br/><br/><b>Solution: </b>Through a combination of geospatial intelligence and Augmented Reality, we informed the public about the artworks around a part of town in a novel and fun way. Further, a competition encouraged people to see as many artworks as possible with little characters popping out of the ground at key locations and trail to follow with prizes to win.
                <br/><br/><b>Results: </b>Our analytics show that about 450 people experienced the App over the week for an event that reaches three to four thousand people. Anecdotal feedback suggest it was a fun and useful app, and should have been extended to all the art week.
            `);

        this.title.push("The Generation of Z – the introduction of ‘Virtuandise’");
        this.hero_picture.push(generationz_hero);
        this.front_picture.push(generationz);
        this.description.push("The Generation of Z is an interactive stage show where the audience is part of the action. It centres around a present where ‘the deadly Z virus is transforming the global population into a rabid horde of the infected. With societal structure collapsing, humanity is faced with a desperate battle for survival.’. The show started in the alternative Q basement theatre in Auckland, moved to post-earthquake, semi-demolished Christchurch (a perfect location), to the Edinburgh Fringe Festival (the perfect audiences), London Westend, and is soon opening at other locations around the world.");
        this.youtube_link.push("https://www.youtube.com/embed/FznS6WJB_7k");
        this.main_text.push(`<b>Problem:</b> Promotion of the show needed to be engaging and high-tech to match the pseudo- high-tech-gone-grunge of the show. Further, some aspects of the show require digital ‘puzzles’ to be solved using mobile devices.
                <br/><br/><b>Solution: </b>Posters in the underground in London and around England were activated with videos to give clues about the Z-virus epidemic, thus engaging the audience before the show. After the show, the favourite was the AR T-shirt which showed gruesome effects when viewed through a mobile device. 
                <br/><br/><b>Results: </b>The show was hugely successful, and the audience participation in the Augmented aspects of the experiences gave a noticeable added benefit. This was the first time we promoted ‘Virtuandise’ – a unique product from Imersia – to great success.
            `);

        this.title.push("KiwiYo – an Advergame to increase brand loyalty");
        this.hero_picture.push(kiwiyo_hero);
        this.front_picture.push(kiwiyo);
        this.description.push("KiwiYo is a frozen yoghurt franchise in New Zealand creating a following for its brand through unique customer experiences beyond ‘just’ the yoghurt. They pioneered the concept of the ‘yobooth’; an in-store camera linked directly to facebook as a way to increase customer engagement, social media presence and brand uniqueness.");
        this.youtube_link.push("");
        this.main_text.push(`<b>Problem:</b> After KiwiYo, competing frozen yoghurt stores proliferated in New Zealand. KiwiYo needed to keep ahead of the others and grow brand loyalty in order to maintain sales.
                <br/><br/><b>Solution: </b>We proposed a mobile digital strategy centred around an ‘Advergame’ which is fun to play but based entirely on the brand. For KiwiYo, we used their ‘bubble’ theme with 150 unique levels, Augmented Reality, special level-up bubbles and ‘nasty’ bubbles with amusing detrimental effects, and the ability to become a local high-scorer.
For brand loyalty, players were associated with their local store and could go there at special occasions to gain additional features in the game as well as becoming the store’s highest scorer.
The Imersia cloud manages the gameplay at the stores as well as each player’s geo-spatial score and game data. Further, some rather unique capabilities are possible, such as making the game not work if played at a competing brand’s store. The game was created from scratch using Imersia cloud and AR technologies.
                <br/><br/><b>Results: </b>After the release of the game, there was a surge of usage with some days showing several hundred unique game events across the country. This levelled out with an average daily usage of up to a hundred in-game events for a few months. The latest analytics (below) show a steady interest in the game, whilst anecdotal comments suggest that people enjoy the game and find it addictive.
            `);

        this.title.push("Lucky Fortune 3D Scratchie mobile AR with analytics");
        this.hero_picture.push(lotto_hero);
        this.front_picture.push(lotto);
        this.description.push("The lotteries commission of New Zealand produces Scratchie cards of various designs where a simple ‘game’ is played by scratching off the surface of the card. The player can win prizes up to $10,000. Lotto was keen to bring Augmented Reality into the player experience so that people could use their mobile phones to play a simple AR game instead of scratching the card.");
        this.youtube_link.push("https://www.youtube.com/embed/seP7f_ZYqAw");
        this.main_text.push(`<b>Problem:</b> The game had to be compelling and fun, whilst adhering to the general spirit of the scratchie card. Further, it had to work well on a range of devices, not just the newest ones, it had to integrate with their systems to determine whether a specific ticket was a winning one or not, and it was important to gather analytics about how people were playing the game.
                <br/><br/><b>Solution: </b>Together with Solnet, a key System Integrator in New Zealand, we used a combination of off-the-shelf AR development tools with the Imersia cloud technologies to produce a hybrid app with a compelling gameplay. Significant time and effort was spent on the design phase exploring different possible game styles before any programming was embarked on, and the testing phase across multiple devices, both iOS and Android.
                <br/><br/><b>Results: </b>The exact statistics for this project are property of Lotto NZ. In summary, however, immediately, from the initial soft-launch, many people across New Zealand played the game. Of these, approximately a third played the game more than once. When the advertising campaign started, these numbers more than doubled. The number of tickets sold was significantly more than the previous volume of the same type of ticket the year before.
            `);

        this.title.push("AUT and NIWA – reaching children to teach them about the environment");
        this.hero_picture.push(otukapua_hero);
        this.front_picture.push(otukapua);
        this.description.push("Auckland University of Technology (AUT) and The National Institute of Water and Atmospherics (NIWA) were collaborating on a project to combine art and science to teach children about the effects of pollution on the sensitive environment of the local forests.");
        this.youtube_link.push("https://www.youtube.com/embed/xr0iCCqvw5g");
        this.main_text.push(`<b>Problem:</b> Reaching children about important concepts is sometimes difficult. AUT and NIWA had come together to explore how art can educate about science, but needed a compelling technology to help convey the message. They were daunted by the scale of the technology challenge in bringing live sensors into an AR experience across multiple devices.
                <br/><br/><b>Solution: </b>The project group reached out to Imersia to use the live AR features of the Imersia Reality platform to enable sensors at NIWA to drive AR experiences at the art gallery where an exhibition was to take place. The Imersia platform significantly simplified and shortened the development time frame whilst producing results they had only dreamed of.
                <br/><br/><b>Results: </b>The live exhibition was a resounding success, with over five hundred school children in classes taking part in the exhibition during its month-long period. Subsequently, the resources have been made available to schools to download, which has been taken up by over a dozen schools around Auckland.
            `);
    }
}