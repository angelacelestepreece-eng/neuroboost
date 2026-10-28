/* Full lesson plans, keyed by lesson id. Same shape as the Smoothie Recipe Multiplier plan:
   goal, facts, materials, prep, flow, steps [title, time, what to do, optional "say together"],
   sensory, adapt, check, optional safety, optional chart { title, intro, head, rows } ("" = blank to fill in). */
window.PLANS = window.PLANS || {};

Object.assign(window.PLANS, {
  // ================= MATH =================
  "multiplication-rap-video-party": {
    goal: "Your child learns one times-table family (like the 2s or 5s) by hearing it, seeing it and acting it out, so the facts stick through rhythm and movement.",
    facts: { "Prep": "About 5 min", "Group size": "1 child + 1 adult, or siblings" },
    materials: [
      "A device with internet and speakers or headphones",
      "A short times-table song video (search “2 times table song for kids” or similar). Preview it first",
      "Paper and crayons or markers",
      "A sticky note with the times-table family written on it (for example 2, 4, 6, 8…)",
      "Optional: a scarf or shaker for dancing"
    ],
    prep: [
      "Pick one times-table family only. Easier families to start with are the 2s, 5s and 10s.",
      "Watch the video yourself first. Check that the volume, flashing and pace feel okay for your child.",
      "Clear a small space to move in, away from furniture.",
      "Write the family on a sticky note and stick it next to the screen."
    ],
    flow: ["Listen", "Move", "Pause & act", "Draw", "Sing it back"],
    steps: [
      ["Preview the plan", "2 min", "Show the flow strip. Tell your child you'll watch the song twice and there will be pauses.", "First we listen, then we move, then we draw."],
      ["Listen once", "4 min", "Play the song all the way through. Your child can sit, rock or dance. Just listening is fine the first time."],
      ["Play and pause", "8 min", "Play again and pause after each fact. Your child acts it out: jump 2 times for 1 × 2, then 4 times for 2 × 2, and so on.", "Two times three is six!"],
      ["Draw a favorite fact", "6 min", "Your child picks one fact and draws it as groups, like 3 bags with 2 apples each."],
      ["Sing it back", "4 min", "Turn the video off and sing the family together, pointing to the sticky note. Let your child lead if they want."]
    ],
    sensory: [
      "Sound: use headphones or lower the volume. Some children prefer the song with no video.",
      "Movement: offer big moves (jumping) or small moves (tapping a table). Both count.",
      "If the video is overstimulating, play only the audio and use the sticky note as the visual.",
      "Stop after one family. Short and successful beats long and tiring."
    ],
    adapt: {
      "Make it easier": "Use the 2s or 10s only, and act out just the first five facts.",
      "Make it harder": "Pause before the answer and let your child say it first, or try a mixed-up order."
    },
    check: ["What is 3 × 2? Can you show me with jumps?", "Can you say the 2s up to 20?", "Draw 4 groups of 2. How many in all?"],
    safety: "Preview videos and turn off autoplay so the next video doesn't start on its own."
  },

  "pizza-slice-fractions": {
    goal: "Your child learns that a fraction is one equal part of a whole, and names halves, quarters and eighths by cutting, moving and eating real slices.",
    facts: { "Prep": "About 20 min", "Group size": "1 child + 1 adult, or siblings" },
    materials: [
      "A small pizza, or a large tortilla with sauce and cheese (or a plain tortilla)",
      "A pizza cutter or knife (adult only) and a cutting board",
      "Plates, napkins and a towel",
      "Fraction cards: ½, ¼, ⅛ written large, with a picture of each",
      "Optional: a paper circle to practice folding first"
    ],
    prep: [
      "Make or warm the pizza and let it cool so it's easy to handle.",
      "Write the fraction cards and lay them out in order.",
      "Fold a paper circle into halves, then quarters, then eighths, so you have a model to show.",
      "Check for food allergies and texture preferences. A plain tortilla works fine."
    ],
    flow: ["Whole", "Halves", "Quarters", "Eighths", "Eat & name"],
    steps: [
      ["Preview the plan", "2 min", "Show the flow strip and the uncut pizza. Explain that you'll cut it into equal parts, then eat it.", "First whole, then halves, then quarters, then eighths."],
      ["Talk about the whole", "3 min", "Point to the uncut pizza. This is one whole. Ask how you could share it fairly with one other person."],
      ["Cut into halves", "5 min", "Cut once through the middle. Your child moves the two pieces apart and puts the ½ card next to one.", "Two equal parts. Each part is one half."],
      ["Cut into quarters", "5 min", "Cut across the first line. Count the pieces together. Each one is a quarter (¼)."],
      ["Cut into eighths", "5 min", "Cut each quarter in half. Your child counts all 8 and matches the ⅛ card."],
      ["Move and eat", "10 min", "Your child moves slices around and names them: “two eighths make one quarter.” Each time someone eats a slice, say what fraction is left.", "I ate one eighth. Seven eighths are left!"],
      ["Wrap up", "3 min", "Look back at the cards and the paper circle. Ask which slice was the biggest: a half, a quarter or an eighth?"]
    ],
    sensory: [
      "Textures: greasy or saucy pizza can bother some kids. A plain tortilla or a paper model works too.",
      "Taste: eating is optional. Your child can move the slices with a fork and you eat them.",
      "Smell: let warm food cool so the smell is milder.",
      "Keep a towel close for quick cleanups."
    ],
    adapt: {
      "Make it easier": "Stop at halves and quarters, and use only the picture cards.",
      "Make it harder": "Ask questions like “What is 2/8 the same as?” or “If we eat 3/8, how much is left?”"
    },
    check: ["How many quarters make a whole pizza?", "Which is bigger, ½ or ⅛?", "If we cut the pizza into 8 slices and you ate 2, what fraction did you eat?"],
    safety: "Only adults use the knife or pizza cutter. Check for food allergies before starting."
  },

  "color-coded-times-table-poster": {
    goal: "Your child builds a multiplication grid and sees the patterns in each number family by giving each family its own color.",
    facts: { "Prep": "About 10 min", "Group size": "1 child, with an adult nearby" },
    materials: [
      "A large sheet of poster paper or a printed 10 × 10 grid",
      "Markers or crayons in 10 colors",
      "Color-coding stickers or dot stickers (optional)",
      "A ruler and pencil",
      "A finished example row to copy (optional)"
    ],
    prep: [
      "Draw or print a 10 × 10 grid with the numbers 1 to 10 across the top and down the side.",
      "Pick one color for each number family and make a small key in the corner.",
      "Fill in the 1s row together as an example.",
      "Decide how many rows to do today. Two or three is plenty."
    ],
    flow: ["Pick a color", "Skip count", "Fill the row", "Spot patterns", "Hang it up"],
    steps: [
      ["Preview the plan", "2 min", "Show the empty grid and the color key. Explain that you'll fill in a few rows today, not the whole thing.", "One row at a time, one color at a time."],
      ["Choose a family", "2 min", "Your child picks which family to start with. The 2s, 5s and 10s are good starters."],
      ["Skip count out loud", "5 min", "Count by that number together before writing anything: 2, 4, 6, 8…", "Two, four, six, eight, ten!"],
      ["Fill in the row", "10 min", "Your child writes each answer in that family's color. Say each fact as it's written, like “three times two is six.”"],
      ["Repeat for another family", "10 min", "Do one or two more rows. Your child can work on their own once they get the pattern."],
      ["Spot patterns", "5 min", "Look at the colors. Ask what they notice. For example, the 5s always end in 5 or 0, and the 2s are all even."],
      ["Hang it up", "2 min", "Tape the poster where your child can see it. Add more rows on later days."]
    ],
    sensory: [
      "This is a calm, low-sensory activity. Good for quieter days.",
      "Some kids find markers squeaky. Crayons or colored pencils are quieter.",
      "A finished example row helps if a blank grid feels like too much.",
      "Let your child stand or lie on the floor to work if sitting is hard."
    ],
    adapt: {
      "Make it easier": "Use a 5 × 5 grid, or have your child color in answers you've already written.",
      "Make it harder": "Fill in a whole row without skip counting first, or find the facts that appear twice (like 3 × 4 and 4 × 3)."
    },
    check: ["What color is the 5s family? What pattern do you see?", "Find 4 × 3 on the poster. Is 3 × 4 the same?", "What comes next: 3, 6, 9, ___?"]
  },

  "candy-bar-arrays": {
    goal: "Your child understands multiplication as rows and columns (an array) by breaking a candy bar into sections and counting them.",
    facts: { "Prep": "About 5 min", "Group size": "1 child + 1 adult, or siblings" },
    materials: [
      "A chocolate bar with a grid of squares, or a waffle (allergy-friendly option)",
      "A plate and napkins",
      "Paper and pencil",
      "Optional: grid paper or LEGO bricks for a non-food version"
    ],
    prep: [
      "Pick a bar with clear rows and columns, like 3 × 4 or 4 × 6 squares.",
      "Check for food allergies, and decide how much your child can eat.",
      "Draw a blank grid on paper the same size as the bar."
    ],
    flow: ["Look", "Count rows", "Multiply", "Break", "Eat one fact"],
    steps: [
      ["Preview the plan", "1 min", "Show the bar still in the wrapper. Explain that you'll count it before anyone eats.", "First we count, then we break, then we taste."],
      ["Count rows and columns", "4 min", "Unwrap the bar. Your child counts the rows, then the squares in one row."],
      ["Say the fact", "4 min", "Put it together as a multiplication fact and check by counting every square.", "Three rows of four is twelve. Three times four is twelve!"],
      ["Break off a smaller array", "8 min", "Break off one row or a smaller rectangle. Your child names the new fact, like 1 × 4 or 2 × 2. Draw it on the paper grid."],
      ["Build different arrays", "6 min", "Arrange the pieces into new rectangles. Does 2 × 6 make the same 12 as 3 × 4?"],
      ["Eat one fact", "2 min", "Your child chooses one small array to eat and says the fact first."]
    ],
    sensory: [
      "Melting chocolate on fingers can bother some kids. Chill the bar first or use a waffle.",
      "Use a fork or toothpick to move pieces if your child prefers not to touch them.",
      "Eating is optional. LEGO bricks or grid paper work just as well.",
      "Keep the amount of candy small and decided ahead of time to avoid surprises."
    ],
    adapt: {
      "Make it easier": "Count only rows and squares per row, and you say the fact while they count.",
      "Make it harder": "Ask how many ways you can make 12, or what fraction of the bar is left after eating one row."
    },
    check: ["How many rows does this bar have? How many in each row?", "What multiplication fact is a 2 by 5 rectangle?", "Show me 3 × 3 with the pieces."],
    safety: "Check for nut, dairy and other food allergies before using chocolate or waffles."
  },

  // ================= READING AND WRITING =================
  "sand-tray-letters": {
    goal: "Your child practices forming letters or spelling words by tracing them in a tray of salt or flour, using touch to help them remember the shapes.",
    facts: { "Prep": "About 10 min", "Group size": "1 child, with an adult nearby" },
    materials: [
      "A baking tray or shallow box with sides",
      "Salt, flour, sugar, sand or cornmeal (enough to cover the bottom)",
      "Letter or word cards to copy",
      "Optional: a paintbrush or chopstick for tracing",
      "A towel or tray liner for spills"
    ],
    prep: [
      "Pour a thin, even layer into the tray. About ½ inch is enough.",
      "Write 3 to 5 letters or short words on cards in large print.",
      "Set the tray on a towel at a comfortable height.",
      "Show how to shake the tray gently to erase."
    ],
    flow: ["Look", "Trace", "Say", "Shake", "Next card"],
    steps: [
      ["Preview the plan", "2 min", "Show the tray and the stack of cards. Explain that each card gets traced, said and erased.", "Look, trace, say, shake."],
      ["Explore the tray", "3 min", "Let your child touch the salt or flour and draw anything they like first. This helps them get used to the feel."],
      ["Trace the first card", "4 min", "Your child looks at the card and traces the letter in the tray. Say the letter's name and sound together.", "B says /b/ like ball!"],
      ["Shake to erase", "1 min", "Shake the tray gently to smooth it out. Your child can be the one who shakes."],
      ["Repeat with each card", "10 min", "Work through the rest of the cards. Try one with eyes closed for an extra challenge."],
      ["Show what you know", "5 min", "Without the card, you say a letter and your child writes it from memory."]
    ],
    sensory: [
      "Dry textures only if wet or sticky ones bother your child. Sand and salt feel different, so let them choose.",
      "A paintbrush or chopstick works if they don't want to touch the tray.",
      "Flour can make dust. Salt or sand is less messy.",
      "This can be very calming. It's fine if they spend extra time just drawing in the tray."
    ],
    adapt: {
      "Make it easier": "Trace over a letter you draw first, or focus on just 2 or 3 letters.",
      "Make it harder": "Spell short words, write their name, or write a word from a picture card."
    },
    check: ["Can you write the letter that says /m/?", "Write the first letter of your name with your eyes closed.", "What word did you just spell?"]
  },

  "sight-word-or-letter-stomp": {
    goal: "Your child quickly recognizes sight words or letters by finding them on the floor and jumping on them when called.",
    facts: { "Prep": "About 5 min", "Group size": "1 child + 1 adult, or siblings" },
    materials: [
      "8 to 12 paper plates or sheets of paper",
      "A thick marker",
      "Tape (to keep plates from sliding on smooth floors)",
      "A list of the sight words or letters you're practicing"
    ],
    prep: [
      "Write one word or letter on each plate in large print.",
      "Spread the plates on the floor about one big step apart. Tape them down on slippery floors.",
      "Clear away anything your child could trip on.",
      "Pick a few words your child already knows to mix in, so they get early wins."
    ],
    flow: ["Read together", "Call", "Stomp", "Read it back", "Cool down"],
    steps: [
      ["Preview the plan", "1 min", "Explain the game: you call a word, they stomp on it, then read it back.", "I call it, you stomp it, you say it!"],
      ["Read the plates together", "3 min", "Walk around and read each plate together before playing."],
      ["Call and stomp", "8 min", "Call a word. Your child jumps, stomps or hops to it, then reads it aloud. Mix in moves like tiptoe or crab walk.", "Find the word 'the'! Stomp!"],
      ["Switch roles", "4 min", "Your child calls a word and you stomp. This gives them practice reading it from across the room."],
      ["Cool down", "3 min", "Collect the plates together, reading each one as it's picked up. End with a slow stretch."]
    ],
    sensory: [
      "Stomping gives strong body feedback, which many kids find regulating.",
      "Stomping can be loud. Use socks, a rug or soft hops if noise is a concern.",
      "Calls can be quieter for kids who don't like loud voices. You can also hold up a matching card instead.",
      "Keep the game short and end before your child gets too wound up."
    ],
    adapt: {
      "Make it easier": "Use letters only, or just 4 to 5 plates.",
      "Make it harder": "Call a sentence and have them stomp each word in order, or call a rhyme (“stomp on a word that rhymes with ‘cat’”)."
    },
    check: ["Point to the word 'and'.", "Read the plate I'm holding up.", "Which word was hardest to find?"],
    safety: "Use non-slip surfaces or tape plates down. Clear the area of furniture corners."
  },

  "heavy-work-reading-nook": {
    goal: "Your child enjoys a picture book while feeling calm and settled, building listening comprehension and a positive feeling about reading.",
    facts: { "Prep": "About 5 min", "Group size": "1 child + 1 adult" },
    materials: [
      "A favorite picture book (or two to choose from)",
      "A weighted blanket, pile of cushions or beanbag chair",
      "Soft lighting (a lamp instead of overhead lights)",
      "Optional: a small fidget toy",
      "*A weighted blanket is the optional cost. Cushions and blankets you already have work too"
    ],
    prep: [
      "Set up a cozy corner with cushions, a beanbag or blankets.",
      "Choose 2 books and let your child pick one.",
      "Dim the lights or use a lamp, and limit background noise.",
      "If using a weighted blanket, choose one that fits your child's size (follow the maker's guidance)."
    ],
    flow: ["Get cozy", "Read", "Pause & wonder", "Talk", "Rest"],
    steps: [
      ["Preview the plan", "1 min", "Tell your child you'll get cozy, read one book and talk about it.", "Get cozy, then read, then talk."],
      ["Get cozy", "5 min", "Your child builds or settles into their nook. Let them choose how heavy or tight it feels."],
      ["Read aloud", "10 min", "Read slowly, pointing to the pictures. Your child can listen, look, or read parts they know."],
      ["Pause and wonder", "5 min", "Stop a few times to ask questions like “What do you think will happen?” or “How does she feel?”"],
      ["Talk about the story", "5 min", "After the book, your child tells you their favorite part, or draws it if talking is tiring."],
      ["Rest", "4 min", "Let your child stay in the nook as long as they like. This calm time is part of the lesson."]
    ],
    sensory: [
      "Deep pressure (weighted blanket, cushions) can help many kids feel calm and focused.",
      "Let your child decide how much pressure they want. Never hold a blanket on them.",
      "Keep lights soft and the room quiet.",
      "A fidget toy can help some kids listen better."
    ],
    adapt: {
      "Make it easier": "Choose a short, familiar book with few words.",
      "Make it harder": "Have your child read a page aloud, or retell the story in order: beginning, middle, end."
    },
    check: ["Who was the main character?", "What happened at the end?", "Why do you think the character felt that way?"],
    safety: "Weighted blankets should be easy for your child to remove on their own. Don't cover their face or use one with very young children."
  },

  "quiet-letter-scavenger-hunt": {
    goal: "Your child connects letters to their sounds by finding real objects around the house that start with the same letter.",
    facts: { "Prep": "About 10 min", "Group size": "1 child, or siblings" },
    materials: [
      "Index cards or small papers",
      "A marker",
      "A basket or bag to collect items",
      "Optional: sticky notes to tag items that can't be moved"
    ],
    prep: [
      "Write one letter (or short word) on each card. Start with letters that have lots of objects, like B, C, M, P and S.",
      "Walk around and make sure there are at least 3 things for each letter.",
      "Decide which rooms are part of the hunt.",
      "Put away anything fragile."
    ],
    flow: ["Get a card", "Hunt quietly", "Collect", "Share", "Put back"],
    steps: [
      ["Preview the plan", "2 min", "Show the cards, the basket and which rooms are okay to explore. Explain there's no timer.", "Find things that start with your letter. Take your time."],
      ["Practice the sound", "2 min", "Say the letter and its sound together, and think of one example.", "M says /m/ like moon."],
      ["Hunt quietly", "10 min", "Your child hunts on their own for objects that start with the letter. They can carry small items or put sticky notes on big ones."],
      ["Share the finds", "5 min", "Lay out the items. Your child says each one's name and listens for the first sound."],
      ["Next letter", "6 min", "Pick a new card and hunt again if your child wants to."],
      ["Put back", "3 min", "Return items together, naming each one again."]
    ],
    sensory: [
      "This is a quiet, calm hunt. No racing or timers.",
      "Your child can hunt alone or with you nearby, whichever feels better.",
      "Sticky notes let them 'tag' items without moving them.",
      "Keep the area tidy so the search isn't visually overwhelming."
    ],
    adapt: {
      "Make it easier": "Hunt in one room with 3 easy letters.",
      "Make it harder": "Use ending sounds, blends like 'st' or 'ch', or short words like 'red' (find something red)."
    },
    check: ["What did you find that starts with B?", "Does 'cup' start with /k/ or /m/?", "Can you think of one more word that starts with your letter?"]
  },

  "chalk-wall-writing": {
    goal: "Your child practices writing letters and words on a vertical surface or the ground, building arm and shoulder strength that supports handwriting.",
    facts: { "Prep": "About 5 min", "Group size": "1 child, with an adult nearby" },
    materials: [
      "Sidewalk chalk (outside) or large paper taped to a wall (inside)",
      "Crayons or markers if using paper",
      "Letter or word cards to copy",
      "A wet sponge or spray bottle to erase chalk"
    ],
    prep: [
      "Choose a spot: a fence, wall, driveway, or paper taped at your child's shoulder height.",
      "Write 3 to 5 letters or words on cards.",
      "Draw a big example letter first so your child can trace it."
    ],
    flow: ["Warm up", "Trace", "Write big", "Write a word", "Erase"],
    steps: [
      ["Preview the plan", "1 min", "Show the wall or ground and the cards. Explain you'll start big and get smaller.", "Warm up, trace, write, erase."],
      ["Warm up the arms", "3 min", "Draw big circles, zigzags and lines with the whole arm."],
      ["Trace big letters", "6 min", "Your child traces your large letters, saying the name and sound.", "Down, up, and around — that's a b!"],
      ["Write on your own", "10 min", "Your child copies each card in big letters, then smaller letters."],
      ["Write a word", "8 min", "Spell a short word together, like their name or 'cat'. Draw a picture next to it."],
      ["Erase", "2 min", "Sponge or spray away the chalk. Many kids love this part."]
    ],
    sensory: [
      "Writing on a wall gives strong feedback to the arms and shoulders.",
      "Chalk dust and the feel of chalk can bother some kids. Chubby chalk or a chalk holder helps.",
      "Outdoor noise and sun can be a lot. Pick a shady, quiet time.",
      "Movement breaks between letters are fine."
    ],
    adapt: {
      "Make it easier": "Trace only, or write just the first letter of their name.",
      "Make it harder": "Write a short sentence, or have them write words you say out loud."
    },
    check: ["Write the letter that makes the /s/ sound.", "Can you write your name?", "Read me the word you wrote."]
  },

  "texture-letter-cards": {
    goal: "Your child learns letter shapes by tracing letters made from different textures, using touch as well as sight.",
    facts: { "Prep": "About 30 min (cards can be reused)", "Group size": "1 child + 1 adult" },
    materials: [
      "Cardboard or cardstock",
      "Textures your child likes: sandpaper, felt, yarn, foil, corrugated cardboard",
      "Glue and scissors (adult cuts)",
      "Marker for outlining letters",
      "Optional: a blindfold or sleep mask"
    ],
    prep: [
      "Let your child feel the textures first and pick their favorites. Leave out anything unpleasant.",
      "Draw large letters on cardboard and cut them out, or draw them on cards.",
      "Glue a texture onto each letter and let it dry.",
      "Start with 4 to 6 letters, such as the letters in your child's name."
    ],
    flow: ["Feel", "Trace", "Say", "Guess", "Match"],
    steps: [
      ["Preview the plan", "2 min", "Show the cards. Explain you'll trace them, say them, then play a guessing game.", "Feel it, trace it, say it."],
      ["Feel the textures", "3 min", "Your child explores each card freely."],
      ["Trace and say", "8 min", "Your child traces each letter with two fingers in the correct direction while saying its name and sound.", "This is S. S says /s/."],
      ["Mystery letter", "8 min", "Your child closes their eyes (or wears a mask) and traces a card to guess the letter. Eyes open is fine too."],
      ["Match to objects", "6 min", "Find something in the room that starts with each letter and set it next to the card."],
      ["Choose a favorite", "3 min", "Your child picks a favorite card to keep out where they can see it."]
    ],
    sensory: [
      "Let your child pick the textures and leave out any they dislike.",
      "Closing eyes is optional. Some children don't like it.",
      "Rough textures like sandpaper give strong feedback. Soft ones like felt are gentler.",
      "Wash or wipe hands after if textures leave residue."
    ],
    adapt: {
      "Make it easier": "Use only 2 or 3 letters and keep eyes open.",
      "Make it harder": "Trace two letters in a row to make a word, or guess capital vs. lowercase."
    },
    check: ["Close your eyes. Which letter is this?", "What sound does this letter make?", "Trace the first letter of 'dog'."],
    safety: "Adults handle scissors and hot glue. Keep small pieces away from children who put things in their mouths."
  },

  "obstacle-course-reading": {
    goal: "Your child reads words or short sentences while moving through an obstacle course, linking reading practice with physical activity.",
    facts: { "Prep": "About 20 min", "Group size": "1 child + 1 adult, or siblings" },
    materials: [
      "Cushions, chairs, blankets, a tunnel or table to crawl under",
      "Masking tape for lines to balance on",
      "Cards with one word or short sentence each",
      "Tape to stick cards at each station"
    ],
    prep: [
      "Build 4 to 6 stations in a loop: crawl under, jump over, balance along tape, etc.",
      "Write one word or short sentence per station. Some cards can tell the move, like 'hop 3 times'.",
      "Tape a card at the start of each station.",
      "Walk the course yourself to check it's safe."
    ],
    flow: ["Walk through", "Read", "Move", "Next station", "Finish"],
    steps: [
      ["Preview the plan", "2 min", "Walk through the course together slowly, pointing to each station. Explain the order.", "Read the card, then do the move."],
      ["First run", "8 min", "Your child reads the first card, then moves to the next station. Help with tricky words."],
      ["Action cards", "8 min", "Add cards that tell the move, like 'crawl under' or 'jump 2 times'. Your child must read to know what to do."],
      ["Second run", "8 min", "Swap or shuffle the cards and run again. Your child can try it faster or more carefully."],
      ["Build your own", "8 min", "Your child moves a station or writes a new card for you to read and do."],
      ["Cool down", "3 min", "End with slow breathing or a calm stretch."]
    ],
    sensory: [
      "Movement can help kids focus on reading. Big moves give strong body feedback.",
      "Some kids get overexcited. Add a 'freeze and breathe' station to slow down.",
      "Keep the course short so it doesn't feel overwhelming.",
      "Soft cushions make falls safe and less scary."
    ],
    adapt: {
      "Make it easier": "Use single letters or picture-word cards at each station.",
      "Make it harder": "Use full sentences, or questions the child must answer before moving on."
    },
    check: ["Read the card at this station.", "What did the card tell you to do?", "Which word was the trickiest?"],
    safety: "Check stability of chairs and furniture. Keep the course away from sharp corners and stairs."
  }
});

Object.assign(window.PLANS, {
  // ================= GEOGRAPHY =================
  "backyard-compass-quest": {
    goal: "Your child learns the four directions (North, South, East, West) by using a compass or arrow cards to find hidden treasures.",
    facts: { "Prep": "About 20 min", "Group size": "1 child + 1 adult, or siblings" },
    materials: [
      "A simple compass, or 4 printed arrow cards labeled N, S, E, W",
      "5 to 8 small 'treasures' (toys, rocks, stickers in envelopes)",
      "Clue cards (for example 'Walk 5 steps North')",
      "A score sheet and pencil",
      "Optional: chalk or sticks to mark a starting spot"
    ],
    prep: [
      "Find North with the compass and place the N card on that side of the yard. Place S, E and W cards too.",
      "Hide the treasures and write a clue card for each one, using directions and steps.",
      "Mark a starting spot.",
      "Check the yard for hazards."
    ],
    flow: ["Learn N-S-E-W", "Read a clue", "Walk", "Find", "Score"],
    steps: [
      ["Preview the plan", "2 min", "Explain the game and that they can take a break or stop at any time.", "Read the clue, walk, find the treasure."],
      ["Learn the directions", "5 min", "Stand in the middle and point to each direction card. Practice turning to face each one.", "Never Eat Soggy Waffles: North, East, South, West!"],
      ["Practice with the compass", "5 min", "Show how the needle points North. Your child turns until the needle lines up."],
      ["First treasure", "8 min", "Read the first clue together. Your child faces the direction and counts their steps out loud."],
      ["Keep hunting", "15 min", "Your child reads clues and finds the rest, earning one point each on the score sheet."],
      ["Make a clue", "8 min", "Your child hides something and writes a direction clue for you to follow."],
      ["Wrap up", "3 min", "Count points and talk about which direction was hardest to remember."]
    ],
    sensory: [
      "Being outside can be a lot. Choose a quiet time and a familiar yard.",
      "Sun, wind or bugs can be distracting. Bring a hat or choose a shady area.",
      "Your child can stop at any time and still keep their points.",
      "Big steps and walking give helpful body feedback."
    ],
    adapt: {
      "Make it easier": "Use only 2 directions (North and South) and picture arrows instead of a compass.",
      "Make it harder": "Add Northeast, Northwest, etc., or have them draw a map of where the treasures were."
    },
    check: ["Which direction is opposite of North?", "Point to East.", "Write a clue that tells me how to walk from the tree to the door."],
    safety: "Keep the hunt within a safe, fenced or supervised area. Avoid hiding treasures near plants that could cause rashes."
  },

  "quiet-map-puzzle-time": {
    goal: "Your child learns the names and locations of states, countries or continents by putting together a map puzzle at their own pace.",
    facts: { "Prep": "About 5 min", "Group size": "1 child, with an adult nearby" },
    materials: [
      "A U.S. or world map puzzle, or a printed blank map cut into pieces",
      "A table or floor space",
      "A reference map (poster or printed)",
      "Optional: a soft lamp and a visual timer"
    ],
    prep: [
      "Choose a puzzle that fits your child's level. Continents are easier than states.",
      "Set up a calm corner with soft lighting and few distractions.",
      "Put the reference map where your child can see it.",
      "Decide if you'll use a timer. It's optional."
    ],
    flow: ["Look", "Sort", "Build", "Name", "Rest"],
    steps: [
      ["Preview the plan", "2 min", "Show the puzzle and reference map. Explain they can go at their own pace.", "Look, sort, build, then name the pieces."],
      ["Look at the map", "5 min", "Look at the reference map together. Point out big shapes like oceans and continents."],
      ["Sort the pieces", "5 min", "Your child sorts pieces by color, region or edge pieces."],
      ["Build the puzzle", "20 min", "Your child puts the puzzle together on their own. Offer help only if asked."],
      ["Name the pieces", "8 min", "Point to pieces and have your child name them, or say a name and they point to it."],
      ["Share a favorite", "3 min", "Your child picks a favorite state or country and says one thing about it."]
    ],
    sensory: [
      "This is a quiet, calm activity. Soft lighting helps.",
      "Some kids like the feel of puzzle pieces. Others prefer a magnetic or digital puzzle.",
      "Large pieces are easier to handle and see.",
      "It's fine to finish the puzzle over more than one day."
    ],
    adapt: {
      "Make it easier": "Use a continents puzzle or only part of the map.",
      "Make it harder": "Build without the reference map, or name capitals as pieces are placed."
    },
    check: ["Point to where we live.", "Which ocean is next to California?", "Name three states or countries you placed."]
  },

  "virtual-country-passport": {
    goal: "Your child explores a new country each session using Google Earth, learning where it is and one interesting thing about it.",
    facts: { "Prep": "About 10 min (once)", "Group size": "1 child, with an adult nearby" },
    materials: [
      "A computer or tablet with Google Earth (free)",
      "A printed passport template (folded paper booklet works too)",
      "Stickers or stamps",
      "Crayons or markers"
    ],
    prep: [
      "Make or print the passport booklet with one page per country.",
      "Pick 4 to 5 countries for the week, or let your child choose.",
      "Open Google Earth and turn the sound off or low.",
      "Try searching for one country first so you know how it works."
    ],
    flow: ["Pick a country", "Fly there", "Explore", "Stamp", "Draw"],
    steps: [
      ["Preview the plan", "2 min", "Show the passport and explain that today you'll 'visit' one country.", "Pick, fly, explore, stamp, draw."],
      ["Pick a country", "3 min", "Your child chooses from the list or spins the globe in Google Earth."],
      ["Fly there", "5 min", "Search for the country and watch Google Earth zoom in. Point out the continent and nearby oceans."],
      ["Explore", "12 min", "Look at landmarks, cities, mountains or coasts. Try Street View for a closer look."],
      ["Stamp the passport", "3 min", "Your child adds a sticker or stamp and writes the country's name."],
      ["Draw one thing", "8 min", "Your child draws one thing they saw, like a building, animal or landscape."]
    ],
    sensory: [
      "Keep sound off or low. Zooming can be dizzying, so slow it down or pause.",
      "Screen brightness can be lowered for comfort.",
      "Limit to one country per session so it doesn't feel like too much.",
      "Drawing afterward gives a calm, screen-free ending."
    ],
    adapt: {
      "Make it easier": "Visit only famous places (like the Eiffel Tower) and draw one picture.",
      "Make it harder": "Find the capital, the flag, and the country's neighbors, and write two facts."
    },
    check: ["Which continent is this country in?", "What did you see there?", "Is it near an ocean?"],
    safety: "Stay with your child while online and use Google Earth without signing in to other services."
  },

  "geography-beat-the-clock-cards": {
    goal: "Your child practices reading a map by answering simple clue cards, trying to beat their own best time.",
    facts: { "Prep": "About 20 min", "Group size": "1 child, with an adult nearby" },
    materials: [
      "A printed or poster map (world or U.S.)",
      "8 to 12 index cards with map clues (for example 'Find the biggest ocean')",
      "A timer or stopwatch",
      "A score sheet to record times"
    ],
    prep: [
      "Write clues that match your child's level: colors, shapes, oceans, continents or states.",
      "Test each clue on the map to make sure it works.",
      "Put the map on a table or wall at eye level.",
      "Explain that they're racing their own time, not another person."
    ],
    flow: ["Practice", "Start timer", "Find", "Stop", "Beat your time"],
    steps: [
      ["Preview the plan", "2 min", "Show the cards, map and timer. Explain the goal is to beat their own time.", "Practice first, then race your own time."],
      ["Practice round", "5 min", "Go through the cards slowly with no timer."],
      ["First timed round", "5 min", "Start the timer. Your child reads each card and points to the answer. Write down the time."],
      ["Second timed round", "5 min", "Shuffle and go again. Did they beat their time?"],
      ["Celebrate", "3 min", "Look at the score sheet together and celebrate improvement, even small."]
    ],
    sensory: [
      "Timers can cause stress for some kids. Use a quiet visual timer, or skip it.",
      "Focus on beating their own time, never on speed compared to someone else.",
      "The bright map helps visual learners. Use a simple map with clear colors.",
      "Stop after 2 or 3 rounds before frustration builds."
    ],
    adapt: {
      "Make it easier": "Use 4 to 5 cards with color and shape clues.",
      "Make it harder": "Use clues like 'Find the state north of Texas' or 'Find a country on the equator'."
    },
    check: ["Point to the Pacific Ocean.", "Which continent is the biggest?", "What was your best time?"]
  },

  "nature-habitat-walk": {
    goal: "Your child notices landforms and features like hills, streams and rocks, and connects what they see to how it would look on a map.",
    facts: { "Prep": "About 5 min", "Group size": "1 child + 1 adult, or family" },
    materials: [
      "Comfortable shoes and weather-appropriate clothes",
      "A clipboard with a simple checklist (hill, stream, rock, tree, path)",
      "A pencil or crayons",
      "Water and a snack",
      "Optional: a magnifying glass, a small bag for collecting"
    ],
    prep: [
      "Pick a quiet park, trail or neighborhood path.",
      "Make a checklist with pictures of things to look for.",
      "Check the weather and avoid busy times.",
      "Plan a halfway point to rest."
    ],
    flow: ["Walk", "Spot", "Check off", "Map it", "Share"],
    steps: [
      ["Preview the plan", "2 min", "Show the checklist and explain the route and where you'll rest.", "Walk, spot, check, then draw a map."],
      ["Start walking", "15 min", "Walk slowly. Your child looks for items on the checklist."],
      ["Spot and talk", "15 min", "When you find a hill, stream or rock, stop and talk about it. Is it high or low? Where does the water go?"],
      ["Rest and snack", "10 min", "Take a break at the halfway point. Look around and notice what's nearby."],
      ["Draw a map", "15 min", "At home or at the rest stop, your child draws a simple map of the walk, with symbols for the things they saw."],
      ["Share", "5 min", "Your child shows you their map and explains the symbols."]
    ],
    sensory: [
      "Skip on loud, hot or crowded days.",
      "Nature has many sounds and textures. Let your child choose what to touch.",
      "Slow pace helps kids notice more and feel less rushed.",
      "Bring ear protection or sunglasses if helpful."
    ],
    adapt: {
      "Make it easier": "Walk a short loop and look for 3 things only.",
      "Make it harder": "Draw a map with a key and a compass rose, or label landforms (valley, plateau, etc.)."
    },
    check: ["What is a hill? Did we see one?", "Where did the water in the stream go?", "Show me the rock on your map."],
    safety: "Stay on paths, watch for traffic and stay close to water. Bring water and sun protection."
  },

  "online-geography-game-with-headphones": {
    goal: "Your child practices finding countries, states or continents on a map using a short, focused online game.",
    facts: { "Prep": "About 5 min", "Group size": "1 child, with an adult nearby" },
    materials: [
      "A computer or tablet",
      "Headphones (or sound muted)",
      "A free map quiz site such as Seterra",
      "A visual timer set to 10 to 15 minutes"
    ],
    prep: [
      "Choose a quiz that fits your child's level (continents, oceans, U.S. states, etc.).",
      "Try the quiz yourself first so you know how it works.",
      "Turn off or mute the sound, or set up headphones.",
      "Set the timer so your child knows when it ends."
    ],
    flow: ["Pick a quiz", "Play", "Check score", "Play again", "Stop"],
    steps: [
      ["Preview the plan", "1 min", "Show the quiz and the timer. Explain that you'll stop when the timer ends.", "Play, check your score, play again."],
      ["First round", "4 min", "Your child plays one round of the quiz. Help with reading if needed."],
      ["Check the score", "2 min", "Look at the score and note which places were tricky."],
      ["Second round", "4 min", "Play again and try to improve."],
      ["Stop and talk", "2 min", "When the timer ends, close the game and talk about one place they learned."]
    ],
    sensory: [
      "Headphones or muted sound reduce noise and distractions.",
      "Keep sessions short (10 to 15 minutes) to avoid screen fatigue.",
      "Use a visual timer so the ending isn't a surprise.",
      "Some quizzes have timers or sounds. Turn these off if they cause stress."
    ],
    adapt: {
      "Make it easier": "Use the continents or oceans quiz.",
      "Make it harder": "Try states, capitals or countries by region."
    },
    check: ["Where is Africa?", "Which state was hardest to find?", "Did your score go up the second time?"],
    safety: "Stay nearby while your child is online, and close the browser when the timer ends."
  },

  // ================= HISTORY =================
  "ancient-egypt-spice-market": {
    goal: "Your child learns that ancient Egyptians traded for spices from faraway places, and uses smell to identify common spices.",
    facts: { "Prep": "About 15 min", "Group size": "1 child + 1 adult, or siblings" },
    materials: [
      "3 to 5 small jars or cups with lids",
      "Spices: cinnamon, cumin, cloves (and optional others like coriander or mint)",
      "Labels and picture cards of each spice",
      "A map showing Egypt and trade routes (optional)",
      "A cloth to make a 'market stall'"
    ],
    prep: [
      "Put a small amount of each spice in a jar. Cover the jars or number them.",
      "Make picture cards for each spice, with its name.",
      "Set up a 'market' table with the cloth.",
      "Check for allergies and smell sensitivities."
    ],
    flow: ["Story", "Sniff", "Guess", "Match", "Trade"],
    steps: [
      ["Preview the plan", "2 min", "Show the jars and the market. Explain you'll smell, guess and trade.", "Story, sniff, guess, trade!"],
      ["Tell the story", "4 min", "Explain that long ago, Egyptians traded goods like grain and gold for spices that came from far away. Show Egypt on a map."],
      ["Sniff and guess", "6 min", "Your child smells each jar from a distance first, then closer. They guess which spice it is."],
      ["Match the cards", "5 min", "Your child matches each jar to its picture card. Reveal the answers together."],
      ["Play market", "6 min", "Take turns being the seller and buyer. Trade 'gold' (coins or buttons) for spices.", "I'd like to trade two gold coins for cinnamon, please."],
      ["Wrap up", "2 min", "Your child names their favorite smell and why spices were so valuable."]
    ],
    sensory: [
      "Smells can be strong. Start with jars far away and let your child bring them closer.",
      "Your child can skip any smell they don't like.",
      "Air out the room afterward.",
      "Avoid touching spices to eyes or face."
    ],
    adapt: {
      "Make it easier": "Use only 2 spices and show the picture cards first.",
      "Make it harder": "Add more spices and ask where each one came from."
    },
    check: ["Why did Egyptians trade for spices?", "Which spice smells sweet?", "Where is Egypt on the map?"],
    safety: "Don't let your child breathe in spices directly or put them in their mouth. Check for allergies first."
  },

  "medieval-herb-garden-game": {
    goal: "Your child learns how people in medieval times used herbs for cooking and medicine, and matches smells to their uses.",
    facts: { "Prep": "About 20 min", "Group size": "1 child + 1 adult, or siblings" },
    materials: [
      "Small pots or bunches of herbs: mint, rosemary, thyme (lavender and sage optional)",
      "Labels for each herb",
      "'Job' cards: Cooking, Medicine, Fresh smell",
      "A score sheet and pencil"
    ],
    prep: [
      "Buy or pick fresh herbs and put them in pots or cups.",
      "Make job cards. Mint and thyme: cooking and settling an upset stomach. Rosemary: cooking and remembering. Lavender: fresh smell in clothes and floors.",
      "Set up a 'garden' on a table or outside.",
      "Check for allergies."
    ],
    flow: ["Story", "Smell", "Guess", "Match", "Score"],
    steps: [
      ["Preview the plan", "2 min", "Show the herbs and job cards. Explain you'll smell and match.", "Smell, guess, match, score!"],
      ["Tell the story", "5 min", "Long ago, people grew herbs in gardens near castles and monasteries. They used them to cook, to make medicine and to make rooms smell fresh."],
      ["Smell each herb", "8 min", "Your child gently rubs a leaf and smells it. Talk about what it reminds them of."],
      ["Match the jobs", "10 min", "Your child places each herb next to a job card. Earn a point for each match.", "Rosemary helps you remember!"],
      ["Mix it up", "8 min", "Hide the labels and play again, matching by smell only."],
      ["Wrap up", "4 min", "Count points and talk about which herbs people still use today."]
    ],
    sensory: [
      "Smells are strong when leaves are rubbed. Your child can smell from a distance.",
      "Some herbs feel fuzzy or prickly. Let them choose whether to touch.",
      "Outside, the smell is lighter and the space is calmer.",
      "Keep the game relaxed. Points are just for fun."
    ],
    adapt: {
      "Make it easier": "Use only 2 herbs and 2 job cards.",
      "Make it harder": "Add more herbs, or have your child write a 'recipe' using herbs."
    },
    check: ["What did medieval people use mint for?", "Which herb helped people remember?", "Name one herb we still cook with today."],
    safety: "Don't eat herbs unless you know they're safe. Wash hands after handling plants. Check for allergies."
  },

  "ancient-rome-bakery-video-and-worksheet": {
    goal: "Your child learns how bread was made and sold in ancient Rome, then bakes a simple loaf to connect history with a real experience.",
    facts: { "Prep": "About 20 min", "Group size": "1 child + 1 adult, or siblings" },
    materials: [
      "A device to watch a short video on Roman bread-making (search 'Roman bread for kids' and preview first)",
      "The worksheet below",
      "Simple bread ingredients: flour, water, salt, yeast (or a store-bought dough)",
      "A baking tray, oven and oven mitts (adult only)",
      "A knife to score the dough (adult only)"
    ],
    prep: [
      "Find and preview a short video (5 minutes or less) about Roman bread or bakeries.",
      "Print the worksheet.",
      "Mix the dough ahead of time or use store-bought dough.",
      "Preheat the oven when ready to bake."
    ],
    flow: ["Watch", "Worksheet", "Shape", "Bake", "Taste"],
    steps: [
      ["Preview the plan", "2 min", "Explain you'll watch, fill in the worksheet, then bake bread.", "Watch, write, shape, bake, taste."],
      ["Watch the video", "5 min", "Watch the video together. Pause to talk about what you see."],
      ["Fill in the worksheet", "8 min", "Your child fills in the worksheet, drawing or writing answers."],
      ["Shape the dough", "6 min", "Your child shapes the dough into a round loaf. Romans often scored their bread into 8 sections, like a pizza. You score it with a knife."],
      ["Bake", "20 min", "Adult puts the bread in the oven. While it bakes, talk about Roman bakers, who used big stone ovens and grain mills."],
      ["Taste", "4 min", "Let the bread cool, then taste it together. Talk about how it's the same or different from bread today."]
    ],
    chart: {
      title: "Roman bakery worksheet",
      intro: "Print this or copy it onto paper. Your child fills in the blanks with words or drawings.",
      head: ["Question", "Answer"],
      rows: [["What did Romans use to make bread?", ""], ["Where did Romans buy bread?", ""], ["What shape was Roman bread?", ""], ["How is Roman bread like our bread?", ""], ["Draw a Roman bakery", ""]]
    },
    sensory: [
      "Dough can feel sticky. Flour on hands or a spoon helps.",
      "Baking smells are strong but usually pleasant.",
      "Videos can be loud. Keep the volume low and use captions if possible.",
      "Your child can skip tasting if they want."
    ],
    adapt: {
      "Make it easier": "Skip the worksheet and just watch and bake. Use store-bought dough.",
      "Make it harder": "Write a few sentences about a Roman baker's day, or research what else Romans ate."
    },
    check: ["What did Romans bake their bread in?", "Why did Romans cut lines in the bread?", "What did you like about the bread we made?"],
    safety: "Only adults use the oven and knife. Check for wheat or gluten allergies."
  },

  "explorers-spice-route-game": {
    goal: "Your child learns how explorers and traders traveled to find spices, following routes on a map and collecting scented game pieces.",
    facts: { "Prep": "About 30 min", "Group size": "1 child + 1 adult, or siblings" },
    materials: [
      "A large hand-drawn or printed world map",
      "Small scented sachets or cotton balls with spices (pepper, cinnamon, cloves, nutmeg)",
      "Game pieces (toy boats or coins)",
      "Stop cards for each place on the route (for example Venice, Egypt, India, Spice Islands)",
      "A die (optional)"
    ],
    prep: [
      "Draw the route on the map: Europe, the Mediterranean, the Middle East, India and the Spice Islands.",
      "Make scented sachets for each spice and place them at the matching stop.",
      "Write a short fact card for each stop.",
      "Set up the map on the floor or a big table."
    ],
    flow: ["Story", "Set sail", "Stop", "Collect", "Return home"],
    steps: [
      ["Preview the plan", "3 min", "Show the map and explain that you'll be traders traveling for spices.", "Sail, stop, collect, sail home!"],
      ["Tell the story", "5 min", "Long ago, spices like pepper and cloves came from far away in Asia. People in Europe paid a lot for them, so traders and explorers made long trips to get them."],
      ["Set sail", "10 min", "Your child moves their boat from stop to stop, reading each fact card."],
      ["Collect spices", "15 min", "At each stop, your child smells and collects the matching sachet."],
      ["Return home", "10 min", "Sail back to Europe and 'sell' the spices. Talk about why it was so hard and took so long."],
      ["Wrap up", "5 min", "Your child names one stop and one spice they collected."]
    ],
    sensory: [
      "Sachets keep smells gentle. Your child can skip any smell.",
      "Moving around a big floor map is active. Add pauses if needed.",
      "Too many stops can be overwhelming. Start with 3 or 4.",
      "Strong spices like pepper can make kids sneeze. Smell from a distance."
    ],
    adapt: {
      "Make it easier": "Use 3 stops and focus on just finding and smelling.",
      "Make it harder": "Add explorers' names (like Vasco da Gama) and route dangers like storms or pirates."
    },
    check: ["Where did cloves come from?", "Why were spices so valuable?", "How did traders travel?"],
    safety: "Keep spices in sealed sachets. Don't inhale spices directly. Check for allergies."
  },

  "campfire-story-history": {
    goal: "Your child listens to a true story about an explorer or pioneer, building listening skills and interest in history.",
    facts: { "Prep": "About 5 min", "Group size": "1 child + 1 adult, or family" },
    materials: [
      "A cozy spot (blankets, pillows) or a safe outdoor fire with adult supervision",
      "A battery tea light or safe, unscented candle",
      "A short true story about an explorer or pioneer (from a children's book or your own notes)",
      "Optional: a wood or pine scent (a pine branch, cedar block or scented card)"
    ],
    prep: [
      "Choose a short, true story, such as Sacagawea, a pioneer family, or Lewis and Clark.",
      "Set up a cozy spot with soft lighting.",
      "Prepare the scent if using one.",
      "Practice telling the story so it flows."
    ],
    flow: ["Get cozy", "Light", "Listen", "Imagine", "Talk"],
    steps: [
      ["Preview the plan", "1 min", "Explain you'll get cozy and listen to a true story.", "Get cozy, listen, then talk."],
      ["Get cozy", "3 min", "Settle into the spot and turn on the tea light."],
      ["Add a smell", "2 min", "Pass around the pine or wood scent and talk about where it might come from."],
      ["Tell the story", "10 min", "Tell the story slowly, using a calm voice. Pause for your child to imagine the scene."],
      ["Imagine and ask", "6 min", "Ask questions like 'What would you have packed?' or 'How would you feel?'"],
      ["Talk", "5 min", "Your child retells part of the story or draws a picture."]
    ],
    sensory: [
      "Battery tea lights are safest and avoid smoke smells.",
      "Keep scents mild and optional.",
      "A calm voice and dim lighting help settle the body.",
      "Drawing can replace talking if your child prefers."
    ],
    adapt: {
      "Make it easier": "Use a picture book and keep the story short.",
      "Make it harder": "Compare two explorers, or have your child tell a story themselves."
    },
    check: ["Who was the story about?", "What was hard for them?", "What would you have done?"],
    safety: "Use battery candles indoors. If using a real fire or candle, an adult stays close the whole time."
  },

  "dinosaur-era-timeline-worksheet": {
    goal: "Your child learns the order of the three dinosaur eras (Triassic, Jurassic, Cretaceous) by filling in a picture timeline.",
    facts: { "Prep": "About 10 min", "Group size": "1 child, with an adult nearby" },
    materials: [
      "The timeline worksheet below (printed or drawn)",
      "Picture cards of dinosaurs from each era",
      "A word bank: Triassic, Jurassic, Cretaceous",
      "Glue, scissors and crayons"
    ],
    prep: [
      "Print or draw the timeline and cut out the picture cards.",
      "Sort the cards by era so you know the answers. Triassic: Coelophysis. Jurassic: Stegosaurus, Brachiosaurus. Cretaceous: T. rex, Triceratops.",
      "Write the word bank at the top of the worksheet."
    ],
    flow: ["Look", "Read", "Sort", "Glue", "Color"],
    steps: [
      ["Preview the plan", "2 min", "Show the worksheet and cards. Explain you'll put the eras in order.", "Look, sort, glue, color."],
      ["Talk about time", "5 min", "Dinosaurs lived a very long time ago, over three eras. Triassic was first, then Jurassic, then Cretaceous."],
      ["Fill in the eras", "6 min", "Your child writes the era names in order on the timeline, using the word bank."],
      ["Sort the dinosaurs", "8 min", "Your child sorts the dinosaur cards into the right era and glues them on."],
      ["Add the ending", "3 min", "At the end of the Cretaceous, a huge asteroid hit the Earth. Your child draws it."],
      ["Color and share", "6 min", "Your child colors the timeline and tells you about one dinosaur."]
    ],
    chart: {
      title: "Dinosaur timeline",
      intro: "Print this or copy it onto paper. Your child fills in each blank with the era name and a dinosaur.",
      head: ["Order", "Era", "Dinosaur", "Years ago"],
      rows: [["1st (oldest)", "", "", "About 250 million"], ["2nd", "", "", "About 200 million"], ["3rd (newest)", "", "", "About 145 million"]]
    },
    sensory: [
      "Calm, low-sensory worksheet. Good for quieter days.",
      "Pictures help visual learners and early readers.",
      "Cutting and gluing gives hands something to do.",
      "Break the work into two sessions if needed."
    ],
    adapt: {
      "Make it easier": "Glue pictures only, no writing.",
      "Make it harder": "Add more dinosaurs, or write one fact about each era."
    },
    check: ["Which era came first?", "When did T. rex live?", "What happened at the end of the Cretaceous?"]
  },

  "history-detective-mystery": {
    goal: "Your child uses clues to figure out who a famous historical person is, practicing reading, reasoning and note-taking.",
    facts: { "Prep": "About 30 min", "Group size": "1 child + 1 adult, or siblings" },
    materials: [
      "5 to 8 clue cards with short text and pictures",
      "The detective sheet below",
      "Envelopes to hide clues",
      "Optional: a magnifying glass and detective hat"
    ],
    prep: [
      "Choose a historical figure your child may know, such as Abraham Lincoln, Harriet Tubman or Amelia Earhart.",
      "Write clues from hard to easy. Start general ('This person lived over 100 years ago') and end specific ('This person flew planes').",
      "Hide clues in envelopes around the room.",
      "Print the detective sheet."
    ],
    flow: ["Briefing", "Find clues", "Record", "Guess", "Reveal"],
    steps: [
      ["Preview the plan", "2 min", "Explain your child is a detective. They'll find clues to discover a mystery person.", "Find, read, write, guess!"],
      ["Briefing", "5 min", "Give your child the detective sheet and explain how to record clues."],
      ["Find clues", "15 min", "Your child finds envelopes one at a time, reads the clue and records it on the sheet."],
      ["Think and guess", "10 min", "After each clue, your child can guess or wait. Talk about what the clues mean."],
      ["Reveal", "5 min", "Open the final envelope with a picture of the person. Was the guess right?"],
      ["Learn more", "15 min", "Read a short book or article about the person, or look at more pictures."]
    ],
    chart: {
      title: "Detective sheet",
      intro: "Print this or copy it onto paper. Your child writes or draws each clue and their guess.",
      head: ["Clue #", "What I learned", "My guess"],
      rows: [["1", "", ""], ["2", "", ""], ["3", "", ""], ["4", "", ""], ["5", "", ""]]
    },
    sensory: [
      "This is a calm, focused activity with movement between clues.",
      "Reading can be tiring. You can read clues aloud.",
      "A magnifying glass makes it fun and helps focus.",
      "Take breaks between clues if needed."
    ],
    adapt: {
      "Make it easier": "Use 3 to 4 clues with pictures, and pick a very familiar person.",
      "Make it harder": "Use more clues with less obvious facts, or have your child make a mystery for you."
    },
    check: ["Who was the mystery person?", "Which clue helped you most?", "What is one thing this person did?"]
  },

  "virtual-museum-wander": {
    goal: "Your child explores a virtual museum at their own pace, notices interesting objects and explains why one object matters.",
    facts: { "Prep": "About 5 min", "Group size": "1 child, with an adult nearby" },
    materials: [
      "A computer or tablet",
      "A free virtual museum tour (for example the Smithsonian National Museum of Natural History or the British Museum)",
      "Paper and crayons for drawing",
      "Optional: headphones"
    ],
    prep: [
      "Pick a museum tour and try it first so you know how to move around.",
      "Choose a room or exhibit to start in.",
      "Mute or lower any sound.",
      "Set out drawing supplies."
    ],
    flow: ["Enter", "Wander", "Pick a favorite", "Draw", "Tell"],
    steps: [
      ["Preview the plan", "2 min", "Explain you'll visit a museum on the computer and pick a favorite object.", "Wander, pick, draw, tell."],
      ["Enter the museum", "5 min", "Show how to move and zoom around the tour."],
      ["Wander", "15 min", "Your child explores at their own pace. Point out signs and labels."],
      ["Pick a favorite", "5 min", "Your child picks one object they like best. Read its label together."],
      ["Draw it", "10 min", "Your child draws the object."],
      ["Tell about it", "5 min", "Your child explains what the object is and why it mattered to people long ago."]
    ],
    sensory: [
      "Turn sound down or off to reduce distractions.",
      "Moving through 3D tours can be dizzying. Go slowly or use photo views.",
      "Let your child set the pace and choose where to go.",
      "Drawing afterward is calm and screen-free."
    ],
    adapt: {
      "Make it easier": "Look at 3 to 5 objects you pick ahead of time.",
      "Make it harder": "Compare two objects from different times, or write a museum label for their favorite."
    },
    check: ["What was your favorite object?", "How old do you think it is?", "Why was it important?"],
    safety: "Stay nearby while your child is online and stick to the museum website."
  },

  "historical-figure-trading-cards": {
    goal: "Your child learns about one historical person each session and makes a trading card, building a collection over time.",
    facts: { "Prep": "About 20 min (once)", "Group size": "1 child, with an adult nearby" },
    materials: [
      "The trading card template below (printed on cardstock)",
      "Kids' books or kid-friendly websites about historical people",
      "Crayons, markers and a pencil",
      "Optional: card sleeves or a small box to store cards"
    ],
    prep: [
      "Print several trading card templates.",
      "Choose a list of people, or let your child pick.",
      "Find a short book or article for each person.",
      "Set up a box or binder to collect the cards."
    ],
    flow: ["Pick a person", "Read", "Fill in", "Draw", "Collect"],
    steps: [
      ["Preview the plan", "2 min", "Show a blank card. Explain you'll learn about one person today.", "Pick, read, fill in, draw."],
      ["Pick a person", "3 min", "Your child chooses who to learn about."],
      ["Read about them", "8 min", "Read a short book or article together."],
      ["Fill in the card", "8 min", "Your child writes the person's name, when they lived and their 'superpower' (what they were great at)."],
      ["Draw a picture", "6 min", "Your child draws the person on the front of the card."],
      ["Add to the collection", "2 min", "Put the card in the box. Count how many they have so far."]
    ],
    chart: {
      title: "Trading card template",
      intro: "Print this on cardstock or copy it onto an index card. Your child fills in each blank.",
      head: ["Card part", "Fill in"],
      rows: [["Name", ""], ["When they lived", ""], ["Where they lived", ""], ["Superpower (what they were great at)", ""], ["Cool fact", ""]]
    },
    sensory: [
      "Calm, low-sensory activity. Good for quieter days.",
      "Short sessions make it easy to stop and start.",
      "Drawing gives a creative break from reading.",
      "Collecting cards gives a sense of progress."
    ],
    adapt: {
      "Make it easier": "Fill in only the name and draw a picture.",
      "Make it harder": "Add a 'challenge' stat, or compare two people's cards."
    },
    check: ["Who is on your card?", "What was their superpower?", "When did they live?"]
  },

  "interactive-timeline-game-online": {
    goal: "Your child practices putting historical events in order using a short drag-and-drop timeline game.",
    facts: { "Prep": "About 5 min", "Group size": "1 child, with an adult nearby" },
    materials: [
      "A computer or tablet",
      "A free history timeline or matching game website (preview first)",
      "A visual timer set to 15 minutes",
      "Optional: headphones"
    ],
    prep: [
      "Find a kid-friendly timeline or matching game and try it first.",
      "Let your child choose an era, like dinosaurs, ancient Egypt or the American Revolution.",
      "Mute sounds or set up headphones.",
      "Set the timer."
    ],
    flow: ["Pick an era", "Play", "Check", "Play again", "Stop"],
    steps: [
      ["Preview the plan", "1 min", "Show the game and the timer. Explain you'll stop when the timer ends.", "Pick, play, check, play again."],
      ["Pick an era", "2 min", "Your child chooses which era to play."],
      ["Play", "5 min", "Your child drags events into order. Help with reading if needed."],
      ["Check answers", "2 min", "Look at what was right and what was tricky."],
      ["Play again", "4 min", "Try again to improve."],
      ["Stop and share", "1 min", "When the timer ends, close the game and share one event they learned."]
    ],
    sensory: [
      "Short time limit prevents screen fatigue.",
      "Mute sounds if they're distracting.",
      "Visual timers make the end predictable.",
      "Drag-and-drop can be hard with a mouse. A tablet may be easier."
    ],
    adapt: {
      "Make it easier": "Use a game with pictures and few events.",
      "Make it harder": "Choose a game with dates and more events."
    },
    check: ["What happened first?", "Which event was hardest to place?", "Tell me one thing you learned."],
    safety: "Preview game sites for ads and pop-ups. Stay nearby while your child plays."
  },

  "five-minute-history-video-bites": {
    goal: "Your child learns a small piece of history each day from a short video, then checks understanding with a 3-question quiz.",
    facts: { "Prep": "About 10 min per video", "Group size": "1 child, or siblings" },
    materials: [
      "A device and a short kids' history video (5 minutes or less; preview first)",
      "A 3-question quiz you write for each video",
      "Stickers",
      "A sticker chart for the week"
    ],
    prep: [
      "Pick a mini-unit topic (for example ancient Egypt or the first flight) and find 3 to 5 short videos.",
      "Watch each video and write 3 simple questions.",
      "Make a sticker chart for the week.",
      "Set up the device with captions on."
    ],
    flow: ["Watch", "Quiz", "Sticker", "Talk"],
    steps: [
      ["Preview the plan", "1 min", "Explain: watch a short video, answer 3 questions, earn stickers.", "Watch, answer, sticker!"],
      ["Watch the video", "5 min", "Watch together. Your child can pause to ask questions."],
      ["Take the quiz", "4 min", "Ask 3 questions. Your child answers aloud or in writing."],
      ["Earn stickers", "2 min", "Add a sticker to the chart for each correct answer."],
      ["Talk", "3 min", "Talk about one surprising thing from the video."]
    ],
    sensory: [
      "Turn on captions and keep volume comfortable.",
      "Short videos are easier to focus on.",
      "Stickers give a clear, visual reward.",
      "It's fine to rewatch a video if needed."
    ],
    adapt: {
      "Make it easier": "Ask picture-choice questions.",
      "Make it harder": "Ask 'why' questions or have your child write their own quiz."
    },
    check: ["What was the video about?", "What is one new word you heard?", "Why was that event important?"],
    safety: "Preview videos and turn off autoplay."
  }
});

Object.assign(window.PLANS, {
  // ================= SCIENCE =================
  "bean-seed-window-garden": {
    goal: "Your child watches a bean seed sprout over a week and records each change, learning how seeds grow roots and shoots.",
    facts: { "Prep": "About 10 min (plus soaking overnight)", "Group size": "1 child, with an adult nearby" },
    materials: [
      "2 or 3 dried beans (lima or kidney beans work well)",
      "Paper towels",
      "A clear zip bag",
      "Tape",
      "The daily observation chart below",
      "Crayons or colored pencils"
    ],
    prep: [
      "Soak the beans in water overnight to soften them.",
      "Dampen a paper towel (not dripping) and fold it into the bag.",
      "Print the observation chart.",
      "Choose a sunny window your child can reach."
    ],
    flow: ["Plant", "Tape up", "Look daily", "Draw", "Compare"],
    steps: [
      ["Preview the plan", "2 min", "Explain that you'll plant beans today and check them each day for a week.", "Plant today, look every day."],
      ["Plant the beans", "5 min", "Your child places the beans on the damp paper towel inside the bag and zips it mostly closed."],
      ["Tape to the window", "2 min", "Tape the bag to the window where your child can see it."],
      ["Day 1 drawing", "5 min", "Your child draws what the bean looks like on the chart."],
      ["Daily check", "10 min/day", "Each day, look at the bean together and draw any changes. Add a few drops of water if the towel is dry.", "What changed today?"],
      ["Compare", "10 min", "At the end of the week, look at all the drawings in order. Talk about roots, shoots and leaves."]
    ],
    chart: {
      title: "Bean observation chart",
      intro: "Print this or copy it onto paper. Your child draws or writes what they see each day.",
      head: ["Day", "What I see (draw or write)", "Roots?", "Shoot?"],
      rows: [["1", "", "", ""], ["2", "", "", ""], ["3", "", "", ""], ["4", "", "", ""], ["5", "", "", ""], ["6", "", "", ""], ["7", "", "", ""]]
    },
    sensory: [
      "Calm, slow activity with a clear daily routine.",
      "The wet paper towel may feel unpleasant. Your child can use tweezers or a spoon.",
      "Daily checks are short and predictable.",
      "Seeing change over time is very satisfying for many kids."
    ],
    adapt: {
      "Make it easier": "Take a photo each day instead of drawing.",
      "Make it harder": "Measure the root and shoot each day and make a graph."
    },
    check: ["What came out of the bean first?", "What does a seed need to grow?", "How did the bean change from day 1 to day 7?"],
    safety: "Keep beans away from young children who may put them in their mouths. Raw beans shouldn't be eaten."
  },

  "baking-soda-volcano-eruption": {
    goal: "Your child sees a chemical reaction happen when baking soda and vinegar mix, and makes predictions about what will happen.",
    facts: { "Prep": "About 20 min", "Group size": "1 child + 1 adult, or siblings" },
    materials: [
      "A small plastic bottle or cup",
      "Play dough, sand or a cardboard cone to shape a volcano",
      "Baking soda (about 2 tablespoons)",
      "Vinegar (about ½ cup)",
      "A few drops of dish soap and food coloring (optional)",
      "A tray or outdoor space",
      "A timer"
    ],
    prep: [
      "Set up outside or on a tray with towels.",
      "Build the volcano around the bottle so the opening is at the top.",
      "Measure the baking soda and vinegar into separate cups.",
      "Talk about the noise and fizz ahead of time."
    ],
    flow: ["Build", "Predict", "Erupt", "Time", "Repeat"],
    steps: [
      ["Preview the plan", "2 min", "Explain the steps and that the volcano will fizz and bubble. Show where your child can stand.", "Build, guess, erupt, time it!"],
      ["Build the volcano", "8 min", "Your child shapes the volcano around the bottle."],
      ["Add baking soda", "2 min", "Your child spoons baking soda into the bottle with a drop of soap and food coloring."],
      ["Predict", "3 min", "Ask: What will happen when we add vinegar? How long will it bubble?"],
      ["Erupt and time", "5 min", "Count down from 3. Your child (or a sibling) pours in the vinegar. Start the timer and stop it when the bubbling stops."],
      ["Talk about it", "5 min", "Explain that baking soda and vinegar react to make a gas (carbon dioxide), and the gas makes the bubbles."],
      ["Try again", "8 min", "Change one thing, like more vinegar or less baking soda, and see if the eruption is bigger or longer."]
    ],
    sensory: [
      "The fizz and splash can surprise kids. Give a countdown and let them stand back.",
      "Vinegar has a strong smell. Outdoors helps.",
      "Your child can watch while someone else pours.",
      "Wear old clothes and keep wipes nearby."
    ],
    adapt: {
      "Make it easier": "Do one eruption and focus on watching.",
      "Make it harder": "Record different amounts and times in a chart, and find the biggest eruption."
    },
    check: ["What happened when vinegar was added?", "What made the bubbles?", "Did more vinegar make a bigger eruption?"],
    safety: "Wear eye protection or stand back. Don't drink the mixture. Wash hands after."
  },

  "sound-science-rubber-band-guitar": {
    goal: "Your child discovers that thicker or looser rubber bands make lower sounds, and thinner or tighter bands make higher sounds.",
    facts: { "Prep": "About 10 min", "Group size": "1 child + 1 adult, or siblings" },
    materials: [
      "A shoebox or small sturdy box without a lid",
      "4 to 6 rubber bands of different thicknesses",
      "2 pencils",
      "Optional: tape and markers to decorate"
    ],
    prep: [
      "Cut a hole in the box lid if using one, or use an open box.",
      "Gather rubber bands from thin to thick.",
      "Test that the bands fit snugly around the box.",
      "Lay pencils across the box to lift the bands (like a guitar bridge)."
    ],
    flow: ["Build", "Pluck", "Listen", "Compare", "Play"],
    steps: [
      ["Preview the plan", "2 min", "Show the box and rubber bands. Explain that you'll build a guitar and listen.", "Build, pluck, listen, play."],
      ["Build the guitar", "8 min", "Your child stretches rubber bands around the box from thinnest to thickest. Put the pencils underneath."],
      ["Pluck and listen", "6 min", "Your child plucks each band and listens. Which sounds high? Which sounds low?", "Thin band, high sound. Thick band, low sound."],
      ["Feel the vibration", "4 min", "Your child gently touches a band while it plays. Feel it shaking? That shaking makes sound."],
      ["Change the tightness", "8 min", "Stretch a band tighter by moving a pencil. Does the sound go higher?"],
      ["Play a song", "6 min", "Your child plays a simple pattern or makes up a song."]
    ],
    sensory: [
      "Sounds can be loud or twangy. Let your child pluck gently.",
      "Rubber bands can snap. Supervise and use bands that fit well.",
      "Feeling vibrations is a good hands-on way to understand sound.",
      "Take a quiet break if the sounds become too much."
    ],
    adapt: {
      "Make it easier": "Use only 2 bands (thin and thick) and compare.",
      "Make it harder": "Order bands from lowest to highest sound, or try to play a known song."
    },
    check: ["Which band made the highest sound?", "What do you feel when the band is plucked?", "How can you make a sound higher?"],
    safety: "Keep faces away from stretched rubber bands. Check for latex allergies."
  },

  "ice-melt-race": {
    goal: "Your child makes predictions and tests how heat, sun and salt change how fast ice melts.",
    facts: { "Prep": "Freeze ice ahead + 10 min", "Group size": "1 child + 1 adult, or siblings" },
    materials: [
      "4 or more ice cubes of the same size",
      "Small plates or cups",
      "Salt, warm water",
      "A sunny spot and a shady spot",
      "A timer",
      "The prediction chart below"
    ],
    prep: [
      "Freeze ice cubes the day before.",
      "Choose 4 spots: sun, shade, salt, warm water.",
      "Print the chart.",
      "Set out plates and labels."
    ],
    flow: ["Predict", "Place", "Time", "Check", "Compare"],
    steps: [
      ["Preview the plan", "2 min", "Explain you'll guess which ice melts first, then test it.", "Guess, place, time, check."],
      ["Predict", "5 min", "Your child writes or draws which ice cube they think will melt first and last."],
      ["Place the ice", "5 min", "Put one cube on each plate: sun, shade, sprinkled with salt, in warm water."],
      ["Start the timer", "2 min", "Start the timer for all cubes at once."],
      ["Check every 5 minutes", "20 min", "Look at each cube and note changes on the chart."],
      ["Compare", "6 min", "Which melted first? Was the prediction right? Talk about why warm water and salt melt ice faster."]
    ],
    chart: {
      title: "Ice melt chart",
      intro: "Print this or copy it onto paper. Your child fills in their guess, then the real time.",
      head: ["Spot", "My guess (1st, 2nd…)", "Time to melt"],
      rows: [["Sun", "", ""], ["Shade", "", ""], ["Salt", "", ""], ["Warm water", "", ""]]
    },
    sensory: [
      "Cold ice can be uncomfortable. Use spoons or tongs to move cubes.",
      "Waiting can be hard. Use a visual timer and check in short bursts.",
      "Calm activity with clear steps.",
      "Your child can draw while waiting."
    ],
    adapt: {
      "Make it easier": "Compare only two spots, like sun and shade.",
      "Make it harder": "Add more spots (sugar, sand), or graph the melting times."
    },
    check: ["Which ice melted first?", "Why did salt make ice melt faster?", "Was your guess right?"],
    safety: "Use warm, not hot, water. Supervise salt use around young kids."
  },

  "crystal-growing-station": {
    goal: "Your child grows salt or sugar crystals over several days and observes how they form and change.",
    facts: { "Prep": "About 15 min", "Group size": "1 child, with an adult nearby" },
    materials: [
      "Salt or sugar",
      "Hot water (adult pours)",
      "A clear jar or glass",
      "String and a pencil",
      "A magnifying glass",
      "The observation chart below"
    ],
    prep: [
      "Heat water (adult only). Stir in salt or sugar until no more will dissolve.",
      "Tie a string to a pencil and lay the pencil across the jar so the string hangs in the water.",
      "Place the jar where it won't be bumped.",
      "Print the observation chart."
    ],
    flow: ["Mix", "Hang", "Wait", "Look", "Record"],
    steps: [
      ["Preview the plan", "2 min", "Explain that crystals will grow slowly over several days.", "Mix, hang, wait, look every day."],
      ["Mix the solution", "8 min", "Adult pours hot water. Your child adds salt or sugar and stirs until no more dissolves."],
      ["Hang the string", "5 min", "Your child lowers the string into the jar and rests the pencil on top."],
      ["Wait", "Overnight", "Leave the jar alone so crystals can start forming."],
      ["Look each day", "10 min/day", "Your child looks with the magnifying glass and draws what they see.", "What shapes do you see today?"],
      ["Compare", "10 min", "After 4 to 7 days, look at all the drawings and talk about how the crystals grew."]
    ],
    chart: {
      title: "Crystal observation chart",
      intro: "Print this or copy it onto paper. Your child draws or writes what they see each day.",
      head: ["Day", "What I see", "Bigger, smaller or same?"],
      rows: [["1", "", ""], ["2", "", ""], ["3", "", ""], ["4", "", ""], ["5", "", ""]]
    },
    sensory: [
      "Calm, slow activity with a predictable daily check.",
      "The magnifying glass helps focus and is fun.",
      "Waiting can be hard. Daily checks keep interest up.",
      "Sugar crystals can be sticky. Salt is less messy."
    ],
    adapt: {
      "Make it easier": "Take photos each day instead of drawing.",
      "Make it harder": "Compare salt and sugar crystals side by side."
    },
    check: ["What shape are the crystals?", "Why did the crystals grow?", "How did they change over the days?"],
    safety: "Only adults handle hot water. Don't eat the crystals."
  },

  "sink-or-float-station": {
    goal: "Your child predicts and tests which objects sink or float, starting to understand why some things float.",
    facts: { "Prep": "About 10 min", "Group size": "1 child + 1 adult, or siblings" },
    materials: [
      "A tub or large bowl of water",
      "8 to 12 household objects (spoon, cork, coin, leaf, toy, crayon, apple, rock)",
      "A towel",
      "The sorting chart below",
      "Optional: two bowls labeled 'Sink' and 'Float'"
    ],
    prep: [
      "Fill the tub with water. Use warm water if cold bothers your child.",
      "Collect objects of different sizes and materials.",
      "Print the chart.",
      "Lay towels down."
    ],
    flow: ["Predict", "Drop", "Watch", "Sort", "Talk"],
    steps: [
      ["Preview the plan", "2 min", "Explain that you'll guess and test whether objects sink or float.", "Guess, drop, watch, sort!"],
      ["Predict", "6 min", "Your child looks at each object and guesses sink or float. Record on the chart."],
      ["Test", "12 min", "Your child drops each object in the water and watches."],
      ["Sort", "6 min", "Put sinkers in one pile and floaters in another. Compare to predictions."],
      ["Talk", "6 min", "Talk about what floaters have in common. Is it size? Weight? What they're made of?"],
      ["Bonus test", "6 min", "Try to make a sinker float (like putting a coin on a foil boat)."]
    ],
    chart: {
      title: "Sink or float chart",
      intro: "Print this or copy it onto paper. Your child writes their guess, then the real answer.",
      head: ["Object", "My guess", "What happened"],
      rows: [["Spoon", "", ""], ["Cork", "", ""], ["Coin", "", ""], ["Leaf", "", ""], ["Crayon", "", ""], ["Apple", "", ""]]
    },
    sensory: [
      "Warm water and a towel help if wet hands bother your child.",
      "Splashing can be fun or overwhelming. Set a 'gentle drop' rule if needed.",
      "Your child can use tongs instead of hands.",
      "Doing it outside is easier to clean up."
    ],
    adapt: {
      "Make it easier": "Test only 4 to 5 objects.",
      "Make it harder": "Weigh objects first, or build a boat that holds the most coins."
    },
    check: ["Which objects floated?", "Was your guess right for the apple?", "Why do you think the rock sank?"],
    safety: "Always supervise children near water. Avoid small objects with young kids."
  },

  "science-podcast-listening-lab": {
    goal: "Your child listens to a short kids' science podcast, builds or draws something inspired by it and shares one fact.",
    facts: { "Prep": "About 10 min", "Group size": "1 child + 1 adult, or siblings" },
    materials: [
      "A device to play a kids' science podcast (for example Brains On! or Wow in the World; preview first)",
      "Headphones or speakers",
      "Drawing supplies or building materials (LEGO, play dough, recyclables)",
      "Optional: a fidget toy for listening"
    ],
    prep: [
      "Pick a short episode or a 10 to 15 minute section about a topic your child likes.",
      "Listen to it yourself first.",
      "Set out drawing or building supplies.",
      "Set up a comfy listening spot."
    ],
    flow: ["Listen", "Wonder", "Make", "Share"],
    steps: [
      ["Preview the plan", "2 min", "Explain: listen to the podcast, then make something about it.", "Listen, think, make, share."],
      ["Listen", "12 min", "Your child listens. They can draw, fidget or move quietly while listening."],
      ["Wonder", "4 min", "Ask: What was the most interesting part? What questions do you have?"],
      ["Make something", "12 min", "Your child draws or builds something from the episode, like an animal, a planet or a machine."],
      ["Share", "4 min", "Your child shows what they made and tells one fact they learned."]
    ],
    sensory: [
      "Audio-only is great for kids who find videos overwhelming.",
      "Fidgets or drawing while listening can help focus.",
      "Headphones reduce background noise.",
      "Pause the episode for breaks if needed."
    ],
    adapt: {
      "Make it easier": "Listen to a shorter section and draw one thing.",
      "Make it harder": "Write three facts or a question to research next."
    },
    check: ["What was the episode about?", "Tell me one fact.", "What would you like to learn more about?"],
    safety: "Preview episodes and stay nearby while using a device."
  }
});
