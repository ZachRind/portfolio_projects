/*
TEMPLATES TO USE
(philOn) [philosophers] on [philTopic] and [popCulRef]
(understanding) Understanding [philPhenom] through [philosophers] and [popCulRef]
(theIn) [verbTitle]: The [philPhenom] in [popCulRef] 
(illustrates) How [popCulRef] illustrates [philosophers]'s concept of [philTopics]
(oxfordComma) [popCulFig], [philosopher], and [popCulRef]: An/A [Noun (introduction, review, brief history, etc.)]
*/


let philosophers = ['Plato', 'Aristotle', 'Seneca', 'Cicero', 'Boethius', 'Descartes', 'Montaigne', 'Hobbes', 'Voltaire', 'Kant', 'Hume', 'de Tocqueville', 'Marx', 'Nietzsche', 'Freud', 'Husserl', 'Russel', 'Wittgenstein', 'Heidegger', 'Gramsci', 'Gadamer', 'Sartre', 'Adorno', 'Marcuse', 'Simone de Beauvoir', 'Aquinas', 'Camus', 'Foucault', 'Chomsky', 'Derrida', 'Žižek'];

let philTopics = ['Semiotics', 'Structuralism', 'Phenomenology', 'Rationalism', 'Utilitarianism', 'Hermeneutics', 'Idealism', 'Existentialism', 'Absurdism', 'Objectivism', 'Marxism', 'Skepticism', 'Relativism', 'Cosmology', 'Cynicism', 'Stoicism', 'Political Theory', 'Empiricism', 'Platonism', 'Mysticism', 'Pedagogy', 'Epistemology', 'Metaphysics', 'Humanism', 'Deontology', 'Transcendentalism', 'Hegemony'];

let popCulRef = ['Wiping Again on the Same Raid Boss', 'Getting Broken Up With Over Text', 'Using Too Many Emojis', 'Taking Selfies', 'Thinking Pineapple Belongs on Pizza', 'Basing Your Personality on Drinking Coffee', 'Taking Buzzfeed Quizzes', 'Feeling Guilty Any Time You Spend Not Working', `Daydreaming How Much You'd Help Your Friends if You Were Rich`, 'Taking Your Dog to the Vet While Ignoring Your Own Health Problems', 'Obtaining the Master Sword', 'Choosing Your Starter Pokemon', 'Getting Killed by an Eight-Year-Old in Fortnite', 'Defeating Bowser for the First Time', 'Punching Trees in Minecraft', 'Patiently Waiting While the Customer in Front of You in Line Attempts to Use Expired Coupons', 'Saying Something Awkward and Thinking About It All Day', 'Holding the Door Open for Someone Far Away and Forcing Them to Run Over', 'Saying Goodbye to Someone Then Walking in the Same Direction', 'Flunking a Job Interview, Getting Up, and Walking Directly into the Coat Closet'];

let philPhenom = ['Dialectical Materialism', 'Post-Colonial Theory', 'Hermeneutic Bodies of Knowledge', 'Semiotic Structures', 'Theories of Technology', 'The Evolution of Modern Metaphysics', 'Contemporary Tractatus', 'Pluralism in Ethics', 'Perception and Intentionality', 'Agency and Free Will', 'Epistemologies of Modernism', 'The Mind-Body Problem'];

let verbTitle = ['Rethinking Tradition', 'Deconstructing Modernity', 'Recentering Reason', 'Obsolete', 'Adamant', 'Boorish or Elegant?', 'No Longer Noxious', 'Reading Between the Lines', 'Questioning Relativism'];

let popCulFig = ['Britney Spears', 'Paul McCartney', 'Taylor Swift', 'Will Smith', 'Brad Pitt', `Dwayne 'The Rock' Johnson`, 'Rihanna', 'Ariana Grande', 'Justin Bieber', 'Tom Hanks', 'Shrek', 'Princess Zelda', 'Yoshi', 'Master Chief', 'Donkey Kong', 'Pikachu', 'Megaman', 'Samus Aran', 'Drake', 'Johnny Depp', 'Luke Skywalker', 'Obi Wan Kenobi', 'Samuel L. Jackson', 'Snoop Dogg', 'Kanye West', 'Lara Croft', 'Bowser', 'Geralt of Rivia', 'Ash Ketchum'];

let subtitle = ['A Brief History', 'An Introduction', 'A Short Literary Review', 'An Unofficial Biography', 'The Comprehensive Guide'];

let philosopher = philosophers[Math.floor(Math.random() * philosophers.length)];
let topic = philTopics[Math.floor(Math.random() * philTopics.length)];
let reference = popCulRef[Math.floor(Math.random() * popCulRef.length)];
let phenomenon = philPhenom[Math.floor(Math.random() * philPhenom.length)];
let title = verbTitle[Math.floor(Math.random() * verbTitle.length)];
let figure = popCulFig[Math.floor(Math.random() * popCulFig.length)];
let sub = subtitle[Math.floor(Math.random() * subtitle.length)];

const philOn = () => {return `${philosopher} on ${topic} and ${reference}`};
const understanding = () => {return `Understanding ${phenomenon} through ${philosopher} and ${reference}`};
const theIn = () => {return `${title}: The ${phenomenon} in ${reference}`}
const illustrates = () => {return `How ${reference} Illustrates ${philosopher}'s Concept of ${topic}`};
const oxfordComma = () => {return `${figure}, ${philosopher}, and ${reference}: ${sub}`};


let constructors = [philOn(), understanding(), theIn(), illustrates(), oxfordComma()];

const output = () => {
    let randomConstructor = constructors[Math.floor(Math.random() * constructors.length)];
    console.log(randomConstructor);
}

output();