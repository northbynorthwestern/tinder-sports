let profileList = document.querySelectorAll(".profile-picture");
let currentProfile = 0;
let resultList = [];
let calculatedResult = 5;
let readytoSwipe = true;
resultString = "";
const resultText = [{
    name: "2019-2020 Women’s Basketball",
    blurb: `<p>You like chasing things you can never have, and love people that could run circles around you. For that reason, the most recent iteration of Northwestern’s Women’s basketball is just for you.</p>
    <p>Running out to an amazing 26-4 record in the regular season, the ’Cats dominated their competition, winning a regular season Big Ten title and almost guaranteeing a hosting gig in the NCAA tournament. Unfortunately, the tourney was canceled due to the COVID-19 pandemic, and the ’Cats missed out on thrilling Evanston with their postseason exploits.</p>
    <p class="last-graf-results">Given you like things out of your league, this sounds like a good match for you.</p>
    `
},
{
    name: "2018 Football",
    blurb: `<p>You’re not looking for something serious, but you like a date who has a solid vibe to them. You’re just trying to have some fun.
    </p>
    <p>As a result, we recommend the 2018 football squad, who somehow found their way into the Big Ten Championship game after losing games to Akron and Duke early. But with thrilling wins against Wisconsin, Iowa and Utah in the Holiday Bowl, it’s almost impossible to resist the fun that came from watching this squad.
    </p>
    <p class="last-graf-results">This is something that everyone can vibe with.
    </p>
    `
},
{
    name: "1996 Rose Bowl Run",
    blurb: `<p>You’re not here to mess around, you’re here to find a winner and enjoy every last moment you can.
    </p>
    <p>The ‘95 Wildcats are one of the most legendary campaigns in college football, going on a 10-1 record to win the Big Ten and a No. 3 ranking in the AP Poll. With highlight wins over legendary programs like Notre Dame, Michigan and Penn State, the ’Cats took the hearts of Evanston and the country with their scruffy play. Coach Gary Barnett and junior linebacker Pat Fitzgerald were among the highlights for the team, culminating in a trip to Pasadena to square off against USC.
    </p>
    <p>Unfortunately, there was no storybook ending for the ’Cats, as they were without Fitzgerald after he broke his leg against Iowa. They narrowly lost to USC 41-32, but made a statement: the losing days were over.
    </p>
    <p class="last-graf-results">I mean, it doesn’t get more ambitious than that. </p>
    `
},
{
    name: "2017 Basketball",
    blurb: `<p>You like partying hard and not living up to your full potential? If so, you should check out the 2017 basketball team.
    </p>
    <p>Basketball and Northwestern don’t exactly mix; it took 68 years for Northwestern to make it to the NCAA tournament for the first time, one of the longest droughts in the history of college sports. But when they made it there, it was truly a sight to behold, as campus exploded in fits of passion and excitement as they watched their team fight out a tough season in the Big Ten and two tumbling games in Salt Lake City.
    </p>
    <p>Unfortunately, despite returning a massive amount of their core, their coach and a new arena to boot, the ’Cats have not yet been able to return to their winning ways, leaving many experts to wonder: what happened to that excitement?
    </p>
    <p class="last-graf-results">But hey, you can always get a free shirt out of their games.
    </p>
    `
},
{
    name: "Laking the Posts and the Losing Streak",
    blurb: `<p>Let’s get something out of the way: we don’t condone violence and we don’t condone toxic relationships.
    </p>
    <p>But from 1979-1982, Northwestern had a pretty rough relationship with their football team, as the ’Cats would lose 34 straight games, and only saw one victory over four years. When the team lost their record-breaking 29th straight, the students broke, storming the field and chanting “we’re the worst!” as they tore down the goalposts.

    </p>
    <p>A season later, when the ’Cats finally won a game against Northern Illinois, the same scene happened, but with a cooler ending: the fans picked up the posts, carried them the whopping 1.3 miles back to campus, and tossed them into the lake. The headlines? ’Cats win, fans go berserk, posts go surfing.

    </p>
    <p class="last-graf-results">Granted, it looks like a ton of fun at the time, but you’d have to go through four years of heartbreak just to have one moment of ecstasy. Not high on the list, to be honest.

    </p>
    `
},
{
    name: "1949 Rose Bowl",
    blurb: `<p>You’re a little on the quirky side of things, but you like to have fun with your dating life.
    </p>
    <p>With that in mind, why not take a look at one of, if not the, greatest moments in Northwestern sports history: the 1949 Rose Bowl. Coming second in the Big Nine (as the Big Ten was called after UChicago left in 1945 and until Michigan State joined later that year) with a 7-2 record, the ’Cats were ranked 7th in the AP Poll, with its only losses coming from No. 4 ranked Michigan and No. 2 ranked Notre Dame. 


    </p>
    <p>While Michigan won the conference, Northwestern got the ticket to Pasadena due to ongoing rules that Michigan could not participate in the Rose Bowl twice. Led by Silver Football-winning fullback Art Murakowski, the ’Cats eked out a narrow 20-14 win over the undefeated California Bears to cement their place in Big Ten lore: “one-time Rose Bowl Champs.”


    </p>
    <p class="last-graf-results">4. 9. Go Cats.
    </p>
    `
},
{
    name: "Women’s Lacrosse, 2005-2012",
    blurb: `<p>You wanna talk about success? This is a team that has won 87.5% of Northwestern’s National Championships. Need I go on?
    </p>
    <p>Northwestern’s women’s lacrosse is truly in a league of their own; as of this listicle’s writing, they are still the only team outside of the Eastern Time Zone to win the national title. And they did it 7 times in 8 years, coming up just short in 2010. Beyond the titles, the team continues to be successful, participating in the Final Four just last year.
    </p>
    <p>They’ve also made national splashes off the court, rolling up to the White House in sandals and flip flops in an absolute powermove. They would later sell the sandals for a local charity.
    </p>
    <p class="last-graf-results">This team, too good for everyone else in the Big Ten, is simply out of everyone’s league. But you’re getting closer to their perfection every day! Keep trying!
    </p>
    `
},
{
    name: "1941 Fencing Team",
    blurb: `<p>Wow, were you… were you even trying? 
    </p>
    <p>I mean, if you want a cool sports fact, Northwestern won the very first national fencing championship on March 29, 1941. Fencing was a relatively new sport for the NCAA, and only just got approval to hold a national championship in December of 1940. It was a very small affair, as only four events were held: epee, sabre, foil and team three-weapon.
    </p>
    <p>Northwestern won the tourney on the back of Edward McNamara, who won the foil event, and the team’s three weapon performance in the final, beating 19 schools to win the first ever NCAA Championship. Critics noted, however, their performance was undermined by the fact that a lot of elite fencing institutions were in Princeton, competing in the Intercollegiate Fencing Association Championships, known as the “official” championship then.
    </p>
    <p class="last-graf-results">But hey! Northwestern won a National Championship!
    </p>
    `
},
{
    name: "1959 Northwestern vs Oklahoma University Game",
    blurb: `<p>Sometimes good things can come from less-than-ideal situations. 
 
    </p>
    <p>Way back in 1952, the Northwestern football team opened their season with a matchup against OU. Initially expected to lose, the ‘Cats trounced their opponents 45-13. Maybe it was luck, maybe it was the bad case of food poisoning affecting more than 20 Oklahoma players, sending some to the hospital to have their stomachs pumped. We may never know who poisoned the team – most suspect the mob or gamblers – because hospital files and food samples  conveniently went missing. 
    </p>
    <p>Still, some optimists believe Oklahoma’s program had weakened and the team would have lost regardless of the poisoning. After all, Northwestern comfortably beat Oklahoma the next year. 
    </p>
    <p class="last-graf-results">We’re not saying you’re going to poison your romantic adversaries, but you do know how to make the best of a given situation.
    </p>
    `
}
];
const resultCalculator = () =>{
    resultString = resultList.toString();
    switch(resultString){
        case "a,b,c,d": 
        calculatedResult = 6;
        break;
        case "a": 
        calculatedResult = 5;
        break;
        case "a,b": 
        calculatedResult = 1;
        break;
        case "e": 
        calculatedResult = 3;
        break;
        case "f": calculatedResult = 0; break;
        case "b": calculatedResult = 1; break;
        case "": calculatedResult = 7; break;
        case "d": calculatedResult = 4; break;
        case "c": calculatedResult = 2; break;
        case "a,b,c,d,e,f": calculatedResult = 7; break;
        case "c,d": calculatedResult = 5; break;
        case "a,b,c,d,f": calculatedResult = 0; break;
        case "d,e": calculatedResult = 8; break;
        case "b,c,d": calculatedResult = 8; break;
        case "a,e": calculatedResult = 3; break;
        case "e,f": calculatedResult = 4; break;
        case "d,e": calculatedResult = 4; break;
        case "d,e,f": calculatedResult = 4; break;
        case "a,b,c": calculatedResult = 6; break;
        case "b,c": calculatedResult = 8; break;
        case "b,e": calculatedResult = 3; break;
    }

    }

let setResult = () =>{
    document.querySelector(".results-name").innerHTML = resultText[calculatedResult].name;
    document.querySelector(".results-container").innerHTML = resultText[calculatedResult].blurb;
}
let leftSwipe = () => {
    document.querySelector(".profile-active").classList.add("left-swiped");
    readytoSwipe = false;
    if(currentProfile == (profileList.length - 1) ){
        resultCalculator();
        setResult();
    }
    else{
    setTimeout(function(){
    profileList[currentProfile].classList.remove("profile-active");
    currentProfile += 1;
    profileList[currentProfile].classList.toggle("profile-next")
    profileList[currentProfile].classList.toggle("profile-active");
    if(currentProfile != (profileList.length - 1)){
    profileList[currentProfile + 1].classList.toggle("profile-next")
    }
    readytoSwipe = true;
    }, 300)
}
}
let rightSwipe = () => {
    document.querySelector(".profile-active").classList.add("right-swiped");
    resultList.push(document.querySelector(".profile-active").dataset.result);
    readytoSwipe = false;
    if(currentProfile == (profileList.length - 1)){
        resultCalculator();
        setResult();
    }
    else{
    setTimeout(function(){
    profileList[currentProfile].classList.remove("profile-active");
    currentProfile += 1;
    profileList[currentProfile].classList.toggle("profile-next")
    profileList[currentProfile].classList.toggle("profile-active");
    if(currentProfile != (profileList.length - 1)){
    profileList[currentProfile + 1].classList.toggle("profile-next")
    }
    readytoSwipe = true;
    }, 300)
}
}
document.getElementById("reject-button").onclick = function(){if(readytoSwipe){    
    leftSwipe();}
}
document.getElementById("accept-button").onclick = function(){if(readytoSwipe){    
    rightSwipe();}}
document.querySelector(".picture-container").onclick = function(){document.querySelector(".picture-container").classList.toggle("bio-active");}