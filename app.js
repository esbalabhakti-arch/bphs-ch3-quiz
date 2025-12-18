// ======================
// 1) PASTE YOUR QUIZ HERE
// ======================
// Replace this sample with Claude's JSON array.
// Must be: [{id, verses:[...], type, question, options:[...], correctIndex, explanation}, ...]
const QUIZ = [
[
  {
    "id": "Q001",
    "verses": [1],
    "type": "Vocabulary",
    "question": "In Verse 1, what does the compound word \"ग्रहावतरणम्\" (grahāvatarṇam) mean?",
    "options": [
      "The movement of planets",
      "The descent/incarnation of planets",
      "The worship of planets",
      "The conjunction of planets"
    ],
    "correctIndex": 1,
    "explanation": "The compound breaks down as ग्रह-अवतरणम् (graha-avataraṇam), where अवतरणम् means \"descent\" or \"incarnation.\" This verse is the disciple's request to hear about how the planets descended or manifested, along with their qualities (गुण-स्वरूप-आद्यम्)."
  },
  {
    "id": "Q002",
    "verses": [2],
    "type": "Verse Meaning",
    "question": "What is the primary teaching of Verse 2?",
    "options": [
      "The planets cause good and bad karma",
      "The sage will explain the arrangement of luminous bodies seen in the sky",
      "Only certain planets are visible to the naked eye",
      "The planets control human destiny through their movements"
    ],
    "correctIndex": 1,
    "explanation": "Verse 2 is Parāśara's response, stating \"शृणु विप्र प्रवक्ष्यामि\" (Listen, O Brāhmaṇa, I shall explain) the परस्थितिम् (arrangement/configuration) of the भ-ग्रहाणाम् (planets) that appear as ज्योतिर्बिम्बानि (luminous bodies) in आकाशे (the sky). This sets up the systematic teaching that follows."
  },
  {
    "id": "Q003",
    "verses": [3, 4],
    "type": "Multi-Verse Conceptual",
    "question": "Based on Verses 3 and 4, what is the fundamental distinction between nakṣatras and grahas?",
    "options": [
      "Nakṣatras are brighter than grahas",
      "Nakṣatras have fixed positions while grahas continually move",
      "Nakṣatras are benefic while grahas are malefic",
      "Nakṣatras are visible only at night while grahas are visible always"
    ],
    "correctIndex": 1,
    "explanation": "Verse 3 explicitly states that nakṣatras are स्थिर-स्थानानि (sthira-sthānāni - fixed positions), while Verse 4 teaches that grahas are गच्छन्तः (gacchanataḥ - moving) and गृह्णन्ति सततम् (gṛhṇanti satatam - continually seize/occupy positions). This movable vs. fixed distinction is foundational to Jyotiṣa."
  },
  {
    "id": "Q004",
    "verses": [4],
    "type": "Vocabulary",
    "question": "In Verse 4, what do the terms \"नगाश्व्यंशाः\" and \"अश्विन्यादिसमाह्वयाः\" refer to?",
    "options": [
      "The nine planets in order",
      "The twelve zodiac signs",
      "The 27 nakṣatras beginning with Aśvinī",
      "The seven visible planets"
    ],
    "correctIndex": 2,
    "explanation": "The compound नगा-अश्वि-अंशाः literally means \"27 parts\" (नग = 8, अश्वि = 3, forming 27 in numerical symbolism), and अश्विनी-आदि-समाह्वयाः explicitly states \"named Aśvinī and so on.\" These refer to the 27 nakṣatras that divide the zodiac, with Aśvinī being the first."
  },
  {
    "id": "Q005",
    "verses": [5],
    "type": "Verse Meaning",
    "question": "According to Verse 5, how many equal divisions make up the zodiac signs (rāśis)?",
    "options": [
      "9 equal parts called navagraha",
      "27 equal parts called nakṣatras",
      "12 equal parts called Aries (Meṣa) and so on",
      "7 equal parts corresponding to visible planets"
    ],
    "correctIndex": 2,
    "explanation": "Verse 5 teaches तद्द्वादश-विभागाः तु तुल्याः (tad-dvādaśa-vibhāgāḥ tu tulyāḥ - its division into twelve equal parts), which are मेष-आदि-सञ्ज्ञकाः (called Aries etc.) and known as राशयः (rāśis/signs). The verse also clarifies that the ग्रहाः (planets) are named अर्क-आदि-सञ्ज्ञकाः (Sun etc.)."
  },
  {
    "id": "Q006",
    "verses": [6],
    "type": "Conceptual",
    "question": "What does Verse 6 teach about the significance of the lagna (ascendant)?",
    "options": [
      "The lagna determines only physical appearance",
      "The lagna is less important than the Moon sign",
      "The rising sign governs the native, and results are judged from planetary unions and separations with it",
      "The lagna changes every two hours and has no fixed meaning"
    ],
    "correctIndex": 2,
    "explanation": "Verse 6 states that राशीनाम् उदयः लग्नम् तद्वशात् एव जन्मिनाम् (the rising sign is the ascendant and governs beings), and फलम् चिन्त्यम् शुभाशुभम् ग्रह-योग-वियोगाभ्याम् (good or bad results are judged from conjunction and separation of planets). This establishes the lagna as the foundational reference point in chart interpretation."
  },
  {
    "id": "Q007",
    "verses": [10],
    "type": "Vocabulary",
    "question": "In Verse 10, list the nine grahas in their prescribed order according to Parāśara.",
    "options": [
      "Sun, Mercury, Venus, Moon, Mars, Jupiter, Saturn, Rāhu, Ketu",
      "Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rāhu, Ketu",
      "Moon, Sun, Mars, Mercury, Jupiter, Venus, Saturn, Rāhu, Ketu",
      "Sun, Moon, Mercury, Mars, Jupiter, Venus, Saturn, Rāhu, Ketu"
    ],
    "correctIndex": 1,
    "explanation": "Verse 10 explicitly lists: रविः चन्द्रः मङ्गलः च बुधः, गुरः शुक्रः शनी राहः केतुः च एते यथाक्रमम् - Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rāhu and Ketu in that order. This sequence is important and appears throughout classical texts."
  },
  {
    "id": "Q008",
    "verses": [11],
    "type": "Multi-Verse Conceptual",
    "question": "According to Verse 11, which planets are classified as malefics (krūra)?",
    "options": [
      "Only Saturn and Mars",
      "Sun, Saturn, Mars, waning Moon, Rāhu and Ketu",
      "All planets except Jupiter",
      "Saturn, Mars, and Rāhu only"
    ],
    "correctIndex": 1,
    "explanation": "Verse 11 clearly states: अर्कः शनि-भू-पुत्राः क्षीण-इन्दुः राह-केतवः क्रूराः (Sun, Saturn, Mars, waning Moon, Rāhu and Ketu are malefics). It also notes that Mercury becomes malefic when क्रूर-युतः (joined with malefics), while शेष-ग्रहाः सौम्याः (the remaining planets are benefic)."
  },
  {
    "id": "Q009",
    "verses": [12],
    "type": "Vocabulary",
    "question": "In Verse 12, what does the term \"वाणीप्रदायकः\" (vāṇī-pradāyakaḥ) signify about Mercury (Budha)?",
    "options": [
      "Giver of wealth",
      "Giver of speech/eloquence",
      "Giver of knowledge",
      "Giver of courage"
    ],
    "correctIndex": 1,
    "explanation": "The compound वाणी-प्रदायकः breaks down as वाणी (speech/eloquence) + प्रदायकः (giver). Verse 12 establishes Mercury's role as the planet governing communication and articulate expression, which aligns with Mercury's significations throughout Jyotiṣa."
  },
  {
    "id": "Q010",
    "verses": [12, 13],
    "type": "Multi-Verse Conceptual",
    "question": "Based on Verses 12 and 13, match the following planetary significations correctly:",
    "options": [
      "Sun = mind, Moon = soul, Mars = knowledge, Jupiter = courage",
      "Sun = soul, Moon = mind, Mars = courage, Jupiter = knowledge",
      "Sun = courage, Moon = soul, Mars = mind, Jupiter = speech",
      "Sun = knowledge, Moon = courage, Mars = soul, Jupiter = mind"
    ],
    "correctIndex": 1,
    "explanation": "Verse 12: सर्वात्मा (Sun = soul of all), मनः (Moon = mind), सत्त्वम् कुजः (Mars = courage/strength). Verse 13: देवेज्यः ज्ञान-सुख-दः (Jupiter = giver of knowledge and happiness). Notice how Parāśara systematically assigns each planet a core psychological/spiritual signification."
  },
  {
    "id": "Q011",
    "verses": [13],
    "type": "Vocabulary",
    "question": "In Verse 13, Saturn is called \"छायासूनुः\" (Chāyā-sūnuḥ). What does this epithet mean?",
    "options": [
      "Son of shadow/Chāyā (Saturn's mother)",
      "Planet of darkness",
      "Slow-moving one",
      "Lord of misery"
    ],
    "correctIndex": 0,
    "explanation": "छाया-सूनुः literally means \"son of Chāyā.\" In Vedic mythology, Chāyā was the shadow-form of Saṅjñā (Sun's wife), and Saturn was born to her. This verse also identifies Saturn as दुःख-दः (giver of sorrow), establishing his difficult nature."
  },
  {
    "id": "Q012",
    "verses": [14, 15],
    "type": "Multi-Verse Conceptual",
    "question": "According to Verses 14 and 15, what is the complete political hierarchy of the planets?",
    "options": [
      "Sun = king, Moon = queen, Mars = commander, Mercury = prince, Jupiter & Venus = ministers, Saturn = servant, Rāhu & Ketu = army",
      "Sun & Moon = kings, Mars = commander, Mercury = prince, Jupiter & Venus = ministers, Saturn = servant, Rāhu & Ketu = army",
      "Sun = emperor, Moon = king, Jupiter = minister, all others = servants",
      "All planets are equal in political status"
    ],
    "correctIndex": 1,
    "explanation": "Verse 14: रवि-चन्द्रौ तु राजानौ (Sun and Moon are kings), धर-आत्मजः नेता (Mars is the commander), बुधः राज-कुमारः (Mercury is prince), गुर-भार्गवौ सचिवौ (Jupiter and Venus are ministers). Verse 15: रवि-पुत्रः प्रेष्यकः (Saturn is servant), स्वर्भानु-पुच्छकौ सेना (Rāhu & Ketu are the army)."
  },
  {
    "id": "Q013",
    "verses": [16],
    "type": "Verse Meaning",
    "question": "How does Verse 16 describe the physical complexions of the Sun, Moon, Mars, and Mercury?",
    "options": [
      "All are described as fair-bodied",
      "Sun is reddish-tawny, Moon is fair, Mars is red, Mercury is greenish",
      "Sun is golden, Moon is silver, Mars is copper, Mercury is mixed",
      "All are described as dark-complexioned"
    ],
    "correctIndex": 1,
    "explanation": "Verse 16 provides specific color descriptions: रक्त-श्यामः दिवाधीशः (Sun is reddish-dark), गौर-गात्रः निशाकरः (Moon is fair-bodied), कुजः रक्तः (Mars is reddish), दूर्वा-श्यामः बुधः (Mercury is grass-green). These color associations are used in murti (deity form) visualization and gemstone recommendations."
  },
  {
    "id": "Q014",
    "verses": [17],
    "type": "Vocabulary",
    "question": "In Verse 17, how is Venus's complexion described?",
    "options": [
      "गौर-गात्रः (fair-limbed) like Jupiter",
      "श्यावः (dark-complexioned)",
      "रक्तः (reddish) like Mars",
      "कृष्ण-देहः (black-bodied) like Saturn"
    ],
    "correctIndex": 1,
    "explanation": "Verse 17 states: शुक्रः श्यावः तथैव च (Venus is dark-complexioned likewise). This is distinct from Jupiter who is गौर-गात्रः (fair-limbed) and Saturn who is कृष्ण-देहः (black-bodied). The verse systematically contrasts Jupiter, Venus, and Saturn's appearances."
  },
  {
    "id": "Q015",
    "verses": [16, 17, 29],
    "type": "Multi-Verse Conceptual",
    "question": "Trace Saturn's physical description across Verses 16, 17, and 29. Which characteristics are consistently emphasized?",
    "options": [
      "Saturn is fair, short, and pleasant in appearance",
      "Saturn is black-bodied, lean, tall, with rough features and tawny eyes",
      "Saturn is similar to Jupiter in all physical aspects",
      "Saturn is described as having no fixed physical form"
    ],
    "correctIndex": 1,
    "explanation": "Verse 17: कृष्ण-देहः रवेः पुत्रः (black-bodied, son of Sun). Verse 29 elaborates: कृश-दीर्घ-तनुः (lean and tall), पिङ्ग-दृष्टि (tawny-eyed), दूल-दन्तः (large-teethed), अलसः (lazy), पङ्गुः (lame/slow), खर-रोम-केशः (rough hair). Notice how Parāśara builds a complete, consistent portrait of Saturn's difficult nature through physical characteristics."
  },
  {
    "id": "Q016",
    "verses": [18],
    "type": "Verse Meaning",
    "question": "What is the primary teaching of Verse 18 regarding planetary deities?",
    "options": [
      "Each planet has multiple deities from different religions",
      "Presiding deities of planets from Sun onwards include Agni, Varuṇa, Skanda, Viṣṇu, Brahmā, Indra and others",
      "Only the Sun has a presiding deity",
      "The deities are unimportant in Jyotiṣa practice"
    ],
    "correctIndex": 1,
    "explanation": "Verse 18 states: वह्नि-अम्बु-शिखि-जा विष्णु-विध-ओजः शचिका (forms of Agni, Varuṇa, Skanda's son, Viṣṇu, Brahmā, Indra, and Śacī's lord) as देवाः ज्ञेयाः क्रमेण (deities to be known in order) for सूर्यादीनाम् खगानाम् (planets beginning with Sun). Each graha has a presiding devata who channels its energy."
  },
  {
    "id": "Q017",
    "verses": [19],
    "type": "Classification",
    "question": "According to Verse 19, classify the planets by gender correctly:",
    "options": [
      "Masculine: Sun, Mars, Jupiter, Saturn; Feminine: Moon, Venus; Neuter: Mercury, Rāhu, Ketu",
      "Masculine: Sun, Mars, Jupiter; Feminine: Moon, Venus; Neuter: Mercury, Saturn",
      "All planets are masculine except Moon which is feminine",
      "Gender classification is not mentioned in this chapter"
    ],
    "correctIndex": 1,
    "explanation": "Verse 19 explicitly states: क्लीवौ द्वौ सौम्य-सौरी (Mercury and Saturn are neuter), युवती इन्दु-भृगू (Moon and Venus are feminine), नराः शेषाः (the rest are male) - specifically भानुः भौमः गुरः (Sun, Mars, Jupiter). This gender classification affects planetary aspects and combinations."
  },
  {
    "id": "Q018",
    "verses": [20],
    "type": "Classification",
    "question": "Verse 20 assigns elements (tattvas) to planets starting from Mars. What is the correct sequence?",
    "options": [
      "Mars=water, Mercury=fire, Jupiter=earth, Venus=air, Saturn=ether",
      "Mars=fire, Mercury=earth, Jupiter=ether, Venus=water, Saturn=air",
      "Mars=earth, Mercury=fire, Jupiter=water, Venus=ether, Saturn=air",
      "Mars=fire, Mercury=air, Jupiter=earth, Venus=water, Saturn=ether"
    ],
    "correctIndex": 1,
    "explanation": "Verse 20 states: अग्नि-भूमि-नभः-तोय-वायवः क्रमतः (fire, earth, ether, water, air respectively) for भौम-आदीनाम् ग्रहाणाम् (Mars and the rest). So: Mars=fire (अग्नि), Mercury=earth (भूमि), Jupiter=ether (नभः), Venus=water (तोय), Saturn=air (वायु). This elemental association is crucial for understanding planetary temperaments."
  },
  {
    "id": "Q019",
    "verses": [21],
    "type": "Classification",
    "question": "According to Verse 21, which planets are of Brāhmaṇa varṇa?",
    "options": [
      "Sun and Moon",
      "Jupiter and Venus",
      "Mars and Mercury",
      "All benefic planets"
    ],
    "correctIndex": 1,
    "explanation": "Verse 21 clearly states: गुर-शुक्रौ विप्र-वर्णौ (Jupiter and Venus are of Brāhmaṇa caste). The verse continues: कुज-अर्कौ क्षत्रियौ (Mars and Sun are Kṣatriyas), शशि-सौम्यौ वैश्य-वर्णौ (Moon and Mercury are Vaiśyas), शनिः शूद्रः (Saturn is Śūdra). This varṇa classification influences dhana, career, and social status indications."
  },
  {
    "id": "Q020",
    "verses": [22],
    "type": "Multi-Verse Conceptual",
    "question": "Verse 22 assigns guṇas (qualities) to planets. Match them correctly:",
    "options": [
      "Sattva: Jupiter, Sun, Moon; Rajas: Mercury, Venus; Tamas: Saturn, Rāhu",
      "Sattva: All benefics; Rajas: All malefics; Tamas: None",
      "Sattva: Jupiter only; Rajas: Sun, Moon, Mercury, Venus; Tamas: Mars, Saturn, Rāhu",
      "All planets have all three guṇas equally"
    ],
    "correctIndex": 0,
    "explanation": "Verse 22 states: जीव-सूर्य-इन्द्रवः सत्त्वम् (Jupiter, Sun, Moon possess sattva), बुध-शुक्रौ रजस् तथा (Mercury and Venus possess rajas), सूर्य-पुत्र-भरा-पुत्रौ तमः-प्रकृतिकौ (Saturn and Rāhu are of tamasic nature). This tripartite classification is fundamental to understanding planetary effects on consciousness and behavior."
  },
  {
    "id": "Q021",
    "verses": [23],
    "type": "Vocabulary",
    "question": "In Verse 23, the Sun is described as \"मधु-पिङ्गल-दृक्\" (madhu-piṅgala-dṛk). What does this mean?",
    "options": [
      "Sweet and kind-eyed",
      "Honey-tawny eyed",
      "Golden-rayed",
      "Fierce-gazed"
    ],
    "correctIndex": 1,
    "explanation": "मधु-पिङ्गल-दृक् breaks down as मधु (honey) + पिङ्गल (tawny/yellowish-brown) + दृक् (eye). This describes the Sun's eye color as honey-tawny. Verse 23 also describes the Sun as चतुरस्रः (square-bodied), शुचि (pure), पित्त-प्रकृतिकः (bilious), धीमान् (intelligent), and अल्प-केश (scant-haired)."
  },
  {
    "id": "Q022",
    "verses": [24],
    "type": "Verse Meaning",
    "question": "How does Verse 24 characterize the Moon's nature and temperament?",
    "options": [
      "Aggressive, hot-tempered, and dry",
      "Round-bodied, windy and phlegmatic, wise, sweet-spoken, yet fickle and passion-stricken",
      "Square-bodied, bilious, and stern",
      "Lean, tall, and melancholic"
    ],
    "correctIndex": 1,
    "explanation": "Verse 24 describes: वृत्त-तनुः (round-bodied), बह-वात-कफः (much wind and phlegm), प्राज्ञः (wise), शुभ-दृक् (auspicious glance), मधु-वाक्यः (sweet-speech), yet चञ्चलः (fickle) and मदन-आतुरः (overcome by love/passion). Notice how Parāśara balances the Moon's benefic and changeable qualities, reflecting its waxing-waning nature."
  },
  {
    "id": "Q023",
    "verses": [25],
    "type": "Vocabulary",
    "question": "In Verse 25, Mars is described as \"कृशमध्यतनुः\" (kṛśa-madhya-tanuḥ). What does this term indicate?",
    "options": [
      "Large-bodied and stout",
      "Round in the middle",
      "Thin-waisted",
      "Short and compact"
    ],
    "correctIndex": 2,
    "explanation": "कृश-मध्य-तनुः breaks down as कृश (thin/slender) + मध्य (middle/waist) + तनुः (body), meaning \"thin-waisted\" or \"slender in the waist.\" Verse 25 paints Mars as क्रूरः (harsh), रक्त-ईक्षणः (red-eyed), चपलः (restless), उदार-मूर्तिकः (well-formed), पित्त-प्रकृतिकः (bilious), and क्रोधी (irascible) - a complete portrait of martial energy."
  },
  {
    "id": "Q024",
    "verses": [26],
    "type": "Verse Meaning",
    "question": "What unique qualities does Verse 26 attribute to Mercury?",
    "options": [
      "Mercury is slow-witted and serious",
      "Mercury has excellent figure, articulate speech, enjoys jokes and stories, with mixed constitution of bile, phlegm and wind",
      "Mercury is purely phlegmatic with no other qualities",
      "Mercury is identical to Jupiter in all respects"
    ],
    "correctIndex": 1,
    "explanation": "Verse 26 describes Mercury as वपुः-श्रेष्ठः (excellent figure), स्पष्ट-वाक् (well-articulated speech), इतिहास्य-रतिः (fond of jest and stories), पित्तवान् कफवान् (bilious and phlegmatic), and मारुत-प्रकृतिः तथा (also airy in nature). This tridoṣic nature reflects Mercury's adaptability and versatility."
  },
  {
    "id": "Q025",
    "verses": [27],
    "type": "Vocabulary",
    "question": "Verse 27 describes Jupiter as \"सर्वशास्त्रविशारदः\" (sarva-śāstra-viśāradaḥ). What does this epithet signify?",
    "options": [
      "Expert in warfare",
      "Expert in all scriptures/sciences",
      "Expert in astrology only",
      "Expert in rituals"
    ],
    "correctIndex": 1,
    "explanation": "सर्व-शास्त्र-विशारदः literally means \"expert in all scriptures/sciences\" (सर्व=all, शास्त्र=scripture/science, विशारदः=expert/skilled). This establishes Jupiter's role as the guru, the teacher of wisdom. Verse 27 also describes Jupiter as बृहत्-गात्रः (large-bodied), पिङ्गल मूर्धज-ईक्षणे (tawny in hair and eyes), and कफ-प्रकृतिकः (phlegmatic)."
  },
  {
    "id": "Q026",
    "verses": [28],
    "type": "Verse Meaning",
    "question": "How does Verse 28 portray Venus's characteristics?",
    "options": [
      "Austere, serious, and disciplined",
      "Happy, charming form, beautiful-eyed, skilled in poetry, phlegmatic with airy nature, curly-haired",
      "Identical to Mercury in all respects",
      "Harsh and aggressive like Mars"
    ],
    "correctIndex": 1,
    "explanation": "Verse 28 describes: सुखी (happy), कान्त-वपुः (charming form), श्रेष्ठः (excellent), सुलोचनः (beautiful-eyed), काव्य-कर्ता (composer of poetry), कफ-अधिक्यः (abundant phlegm), अनिल-आत्मा (also airy), वक्र-मूर्धजः (curly hair). Notice how Venus embodies aesthetic refinement and artistic sensibility."
  },
  {
    "id": "Q027",
    "verses": [29, 13, 48],
    "type": "Multi-Verse Integrative",
    "question": "Why is Saturn consistently associated with difficulty, old age, and longevity across Verses 13, 29, and 48?",
    "options": [
      "These are arbitrary associations with no deeper meaning",
      "Saturn's slow movement, dark appearance, harsh features, and nature as \"giver of sorrow\" create a coherent symbolism of age, delay, and endurance",
      "Saturn is always benefic and brings only good results",
      "Only Verse 48 mentions Saturn's connection to longevity"
    ],
    "correctIndex": 1,
    "explanation": "Notice Parāśara's consistent pattern: Verse 13 calls Saturn दुःख-दः (giver of sorrow). Verse 29 describes physical slowness: अलसः (lazy), पङ्गुः (lame/slow), कृश-दीर्घ-तनुः (lean and tall like an aged person). Verse 48 explicitly states: मन्दः वृद्धः अस्ति (Saturn is old), आयुः-वृद्धि-प्रदायकः (giver of longevity). Saturn's astronomical slowness (longest orbit) mirrors its astrological significations of time, endurance, and aging."
  },
  {
    "id": "Q028",
    "verses": [30],
    "type": "Verse Meaning",
    "question": "How are Rāhu and Ketu described in Verse 30?",
    "options": [
      "As benefic and gentle planets",
      "Rāhu has smoky appearance, dark body, haunts wastes, is fearsome yet intelligent; Ketu is similar",
      "As identical to Saturn in all respects",
      "As visible planets like the others"
    ],
    "correctIndex": 1,
    "explanation": "Verse 30: धूम्र-आकारः (smoky appearance), नील-तनुः (dark-bodied), वन-चः (dwelling in wastes), भयङ्करः (terrifying), वात-प्रकृतिकः (windy nature), धीमान् (intelligent) describes Rāhu, and then states: तत्-समः शिखी (Ketu is similar). These shadow planets carry ominous yet powerful significations."
  },
  {
    "id": "Q029",
    "verses": [31],
    "type": "Classification",
    "question": "According to Verse 31, which body parts are ruled by the Sun and other planets respectively?",
    "options": [
      "Sun=skin, Moon=bones, Mars=blood, Mercury=marrow",
      "Sun=bones, Moon=blood, Mars=marrow, Mercury=skin, Jupiter=fat, Venus=semen, Saturn=sinews",
      "All planets rule all body parts equally",
      "Only the Sun rules body parts; other planets do not"
    ],
    "correctIndex": 1,
    "explanation": "Verse 31 explicitly states the sequence: अस्थि रक्तः तथा मज्जा त्वक् वसा वीर्यम् एव च स्नायुः (bones, blood, marrow, skin, fat, semen, and sinews) एषाम् अधीशाः च क्रमात् सूर्यादयः (are ruled respectively by Sun and the others). This creates the mapping: Sun=bones, Moon=blood, Mars=marrow, Mercury=skin, Jupiter=fat, Venus=semen, Saturn=sinews. This is fundamental to medical astrology."
  },
  {
    "id": "Q030",
    "verses": [32],
    "type": "Verse Meaning",
    "question": "What domains do the planets rule according to Verse 32?",
    "options": [
      "Only celestial phenomena",
      "Temple waters, fires, sports/pleasures, treasuries, beds, seats and such things",
      "Only religious matters",
      "Agricultural activities"
    ],
    "correctIndex": 1,
    "explanation": "Verse 32 states: देवालय-जलम् वह्नि-क्रीडा-आदीनाम् तथा एव च कोश-शय्य-उत्कराणाम् तु (temple waters, fires, sports etc., likewise treasury, bed and seat) नाथाः सूर्यादयः क्रमात् (lords are Sun and others in order). This shows how planetary rulerships extend to all aspects of life, not just abstract principles."
  },
  {
    "id": "Q031",
    "verses": [33],
    "type": "Classification",
    "question": "Verse 33 assigns time periods to planets. What are these periods?",
    "options": [
      "Solstices, nakṣatras, weekdays, seasons, months, fortnights, and years",
      "Only days and nights",
      "Only months and years",
      "Hours, minutes, and seconds"
    ],
    "correctIndex": 0,
    "explanation": "Verse 33 clearly states: अयन-नक्षत्र-वार-ऋतु-मास-पक्ष-समाः (solstices, nakṣatras, weekdays, seasons, months, fortnights, and years) सूर्यादीनाम् क्रमात् ज्ञेयाः (are to be known respectively of Sun etc.) निर्विशङ्कम् (without doubt). This temporal rulership system is crucial for muhūrta (electional astrology) and daśā systems."
  },
  {
    "id": "Q032",
    "verses": [34],
    "type": "Classification",
    "question": "According to Verse 34, what are the tastes (rasas) associated with planets starting from the Sun?",
    "options": [
      "All planets have sweet taste",
      "Pungent, salty, bitter, mixed, sweet, sour, astringent",
      "Only sour and sweet are mentioned",
      "Tastes are not assigned to planets"
    ],
    "correctIndex": 1,
    "explanation": "Verse 34 states: कटु-क्षार-तिक्त-मिश्र-मधुर-आम्ल-कषाय काः क्रमेण सर्वे विज्ञेयाः सूर्यादीनाम् रसाः इति (pungent, salty, bitter, mixed, sweet, sour, and astringent respectively are to be known as tastes of Sun etc.). So: Sun=pungent, Moon=salty, Mars=bitter, Mercury=mixed, Jupiter=sweet, Venus=sour, Saturn=astringent. This affects dietary recommendations and herbal remedies."
  },
  {
    "id": "Q033",
    "verses": [35],
    "type": "Classification",
    "question": "Verse 35 assigns directional strength to planets. Match them correctly:",
    "options": [
      "East: Mercury & Jupiter; South: Sun & Mars; West: Saturn; North: Venus & Moon",
      "East: Sun & Moon; South: Mars & Saturn; West: Jupiter & Venus; North: Mercury",
      "All planets are equally strong in all directions",
      "Direction has no effect on planetary strength"
    ],
    "correctIndex": 0,
    "explanation": "Verse 35 explicitly states: बुध-ईज्यौ बलिनौ पूर्वे (Mercury and Jupiter powerful in east), रवि-भौमौ च दक्षिणे (Sun and Mars in south), पश्चिमे सूर्य-पुत्रः च (in west Saturn), सित-चन्द्रौ तथा उत्तरे (Venus and Moon likewise in north). This directional strength (dig-bala) is one of the six sources of planetary strength (ṣaḍ-bala)."
  },
  {
    "id": "Q034",
    "verses": [36],
    "type": "Verse Meaning",
    "question": "What does Verse 36 teach about temporal strength of planets?",
    "options": [
      "All planets are always equally strong",
      "Moon, Mars, Saturn are strong at night; Sun is always strong in daytime; others are strong in day",
      "Only nocturnal planets exist",
      "Time of day has no effect on planetary strength"
    ],
    "correctIndex": 1,
    "explanation": "Verse 36 states: निशायाम् बलिनः चन्द्र-कुज-सौराः भवन्ति हि (at night Moon, Mars and Saturn are indeed powerful), सर्वदा र्कः बली ज्ञेयः दिने (the Sun is always known as strong in the day), शेषाः (others) दिवि (in daytime). This day/night distinction (pakṣa-bala) affects the strength of planetary yogas."
  },
  {
    "id": "Q035",
    "verses": [37],
    "type": "Multi-Verse Conceptual",
    "question": "Verse 37 discusses fortnight and solstice strength. Explain the pattern:",
    "options": [
      "All planets are equally strong in all fortnights and solstices",
      "Malefics strong in dark fortnight and southern solstice; benefics strong in bright fortnight and northern solstice",
      "Only the Moon is affected by fortnights",
      "Solstices have no effect on planetary strength"
    ],
    "correctIndex": 1,
    "explanation": "Verse 37: कृष्णे च बलिनः क्रूराः (in dark half malefics are strong), सौम्याः वीर्य-युताः सिते (benefics are strong in bright half), सौम्य-आयने सौम्य-खेटः बली (during northern course benefic planets are powerful), याम्य-आयने अपरः (during southern course malefics). Notice the elegant symmetry: darkness/south=malefic strength, brightness/north=benefic strength."
  },
  {
    "id": "Q036",
    "verses": [38],
    "type": "Vocabulary",
    "question": "In Verse 38, what does \"वृद्धितो वीर्यवत्तरः\" (vṛddhito vīryavattaraḥ) mean regarding planetary strength?",
    "options": [
      "Strength decreases with time",
      "Strength increases according to the period ruled",
      "Strength remains constant",
      "Strength is unrelated to time periods"
    ],
    "correctIndex": 1,
    "explanation": "वृद्धितः (by increase/growth) वीर्य-वत्तरः (more powerful) means planetary strength grows according to the time period they rule. Verse 38 states: वर्ष-मास-अह-होराणाम् पतयः बलिनः (lords of year, month, day and hour are strong) - Saturn, Venus, Jupiter, Mercury, Moon. So Saturn is strongest in year-rulership, Venus in month, Jupiter in day, etc."
  },
  {
    "id": "Q037",
    "verses": [39],
    "type": "Verse Meaning",
    "question": "What types of beings do the Sun, Saturn, Moon, and Mars produce according to Verse 39?",
    "options": [
      "All planets produce identical beings",
      "Sun produces stout but ill-fated; Saturn gives wretched forms; Moon bestows soft/milky bodies; Mars makes harsh ones",
      "Only benefics produce living beings",
      "Planets do not influence physical forms"
    ],
    "correctIndex": 1,
    "explanation": "Verse 39: सूर्ये जनयति स्थूलान् दुर्भगान् (by Sun are produced stout, unfortunate beings), सूर्य-पुत्रकः (Saturn [produces wretched]), क्षीर-उपेतान् तथा चन्द्रः (Moon [produces] endowed with milk/fair, gentle), कटुक-आद्यान् धर-सुतः (Mars [produces] harsh etc.). This verse shows how planets influence physical constitution and fortune of beings."
  },
  {
    "id": "Q038",
    "verses": [40],
    "type": "Classification",
    "question": "According to Verse 40, which planets rule which types of trees?",
    "options": [
      "Venus=flowering; Jupiter & Mercury=fruit-bearing and fruitless; Saturn=sapless",
      "All planets rule all trees equally",
      "Only Jupiter rules trees",
      "Trees are not assigned to planets"
    ],
    "correctIndex": 0,
    "explanation": "Verse 40 clearly states: पुष्प-वृक्षम् भृगोः पुत्रः (Venus [rules] flowering trees), गुर-ज्ञौ सफल-आफलौ (Jupiter and Mercury [rule] fruit-bearing and fruitless), नीरसान् सूर्य-पुत्रः च (Saturn [rules] sapless). This botanical classification is used in vāstu, garden planning, and selection of wood for sacred purposes."
  },
  {
    "id": "Q039",
    "verses": [41],
    "type": "Vocabulary",
    "question": "Verse 41 describes Rāhu as \"चाण्डालजातिः\" (cāṇḍāla-jātiḥ). What does this indicate?",
    "options": [
      "Rāhu is of royal caste",
      "Rāhu is of Brāhmaṇa caste",
      "Rāhu is of outcaste/lowest class",
      "Rāhu has no caste assignment"
    ],
    "correctIndex": 2,
    "explanation": "चाण्डाल-जातिः means \"of caṇḍāla caste\" - the outcaste class in traditional varṇa system. Verse 41 also states केतुः जाति-अन्तरः तथा (Ketu is of another low tribe). The verse further assigns वल्मीकः स्थानम् (ant-hill as abode) for शिखि-स्वर्भानु-मन्दानाम् (Ketu, Rāhu and Saturn). This reflects these planets' association with marginalized or hidden realms."
  },
  {
    "id": "Q040",
    "verses": [42],
    "type": "Verse Meaning",
    "question": "What objects and materials are associated with Rāhu and Ketu in Verse 42?",
    "options": [
      "Gold and silver",
      "Lead for Rāhu; blue gem for Ketu; variegated/holed blanket for Ketu",
      "Only precious gems are mentioned",
      "No materials are assigned"
    ],
    "correctIndex": 1,
    "explanation": "Verse 42: चित्र-कन्था फनी-इन्द्रस्य केतुः छिद्र-युतः (Ketu's cloth is variegated blanket of serpent-king, full of holes), सीसम् रहोः (lead of Rāhu), नील-मणिः केतोः ज्ञेयः (blue stone is that of Ketu). These material associations are used for remedial gems (ratnāni) and yantras."
  },
  {
    "id": "Q041",
    "verses": [43, 44],
    "type": "Multi-Verse Classification",
    "question": "Based on Verses 43 and 44, match the planets with their garment colors correctly:",
    "options": [
      "Jupiter=yellow, Venus=silk, Sun=red, Moon=white, Mercury=dark, Mars=red, Saturn=variegated",
      "All planets wear white garments",
      "Only the Sun has a colored garment",
      "Garments are not assigned to planets"
    ],
    "correctIndex": 0,
    "explanation": "Verse 43: गुरोः पीत-अम्बरम् (Jupiter's yellow garment), भृगोः क्षौमम् (Venus's silk), रक्त-क्षौमम् भास्करस्य (Sun's red silk), इन्दोः क्षौमम् सितम् (Moon's white cloth). Verse 44: बुधस्य कृष्ण-क्षौम् (Mercury's dark garment), रक्त-वस्त्रम् कुजस्य (Mars's red cloth), वस्त्रम् चित्रम् शनेः (Saturn's variegated dress). These colors align with planetary complexions and are used in deity worship."
  },
  {
    "id": "Q042",
    "verses": [45, 46],
    "type": "Multi-Verse Classification",
    "question": "According to Verses 45 and 46, assign the six seasons (ṛtus) to the appropriate planets:",
    "options": [
      "Venus=spring, Mars & Sun=summer, Moon=rainy, autumn=benefics, Jupiter=hemanta, Saturn=śiśira",
      "All seasons belong to Sun",
      "Each planet rules one month, not seasons",
      "Seasons are not assigned to planets"
    ],
    "correctIndex": 0,
    "explanation": "Verse 45: भृगोः ऋतुः वसन्तः (Venus rules spring), कुज-भान्वोः ग्रीष्मकः (Mars and Sun rule summer), चन्द्रस्य वर्षा (Moon rules rainy), शरत् च एव तथा (autumn also) विदः (of benefics). Verse 46: हेमन्तः अपि गुरोः ज्ञेयः (hemanta/early winter of Jupiter), शनेः तु शिशिरः (and of Saturn late winter), अष्टौ मासाः च स्वर्भानोः (eight months of Rāhu), केतोः मास-त्रयम् (three months of Ketu). This seasonal rulership is crucial for prāśna and muhūrta."
  },
  {
    "id": "Q043",
    "verses": [47],
    "type": "Conceptual",
    "question": "What distinction does Verse 47 make between types of planets?",
    "options": [
      "All planets are identical in nature",
      "Rāhu, Mars, Saturn, Moon are mineral-type; Sun and Venus are root-planets; others are living/organic",
      "Only benefics are living planets",
      "No such classification exists"
    ],
    "correctIndex": 1,
    "explanation": "Verse 47 categorizes: राह-अर-पङ्गु-चन्द्रः च विज्ञेयाः धातु-खेचराः (Rāhu, Mars, Saturn and Moon are to be known as mineral-type planets), मूल-ग्रहौ सूर्य-शुक्रौ (Sun and Venus are root/basic planets), अपरा जीव-सञ्ज्ञकाः (others are termed organic/living). This classification relates to their essential nature and effects."
  },
  {
    "id": "Q044",
    "verses": [48],
    "type": "Verse Meaning",
    "question": "What special quality does Verse 48 attribute to Saturn?",
    "options": [
      "Saturn gives wealth and prosperity",
      "Saturn is old/aged among planets and bestows longevity, granting many natural years",
      "Saturn is young and gives short life",
      "Saturn has no special qualities"
    ],
    "correctIndex": 1,
    "explanation": "Verse 48 concludes the chapter by stating: ग्रहेषु मन्दः वृद्धः अस्ति (among planets Saturn is old/aged), आयुः-वृद्धि-प्रदायकः (giver of longevity), नैसर्गिके बह-समान् ददाति (in natural years many years he bestows). This verse synthesizes Saturn's essential nature: as the slowest, oldest planet, he paradoxically grants long life despite his difficult significations."
  },
  {
    "id": "Q045",
    "verses": [1, 2, 7, 9],
    "type": "Multi-Verse Integrative",
    "question": "Trace the conversational structure of the chapter opening (Verses 1, 2, 7, 9). What is Parāśara's pedagogical approach?",
    "options": [
      "He gives information without being asked",
      "He responds to a request, acknowledges what general texts teach, and promises to explain according to this specific treatise, starting with planetary classes, forms and qualities",
      "He refuses to teach and sends the student elsewhere",
      "He only discusses nakṣatras, not planets"
    ],
    "correctIndex": 1,
    "explanation": "Verse 1: Student requests explanation of ग्रह-अवतरणम् (planetary incarnations) and गुण-स्वरूप-आद्यम् (qualities, nature etc.). Verse 2: Parāśara says शृणु विप्र प्रवक्ष्यामि (Listen, O Brāhmaṇa, I shall explain). Verse 7: He notes नक्षत्र-वृन्दानाम् सञ्ञाः ज्ञेयाः सामान्य-शास्त्रतः (names of nakṣatra groups are known from general texts), but एतच्छास्त्र-अनुसारेण राशि-खेट-फलम् ब्रुवे (following this scripture, I state results of signs and planets). Verse 9: अथ अथौ वक्ष्ये खेटानाम् जाति-रूप-गुणान् (now first I speak about planets' class, form and qualities). This shows systematic, student-centered teaching."
  },
  {
    "id": "Q046",
    "verses": [8],
    "type": "Conceptual",
    "question": "What important principle does Verse 8 establish about astronomical accuracy?",
    "options": [
      "Computational positions are always correct",
      "Only when observed and computed positions agree should longitude be taken as exact; only then are direction and time accurate",
      "Observation is unnecessary; calculations alone suffice",
      "Planets have no measurable positions"
    ],
    "correctIndex": 1,
    "explanation": "Verse 8 states: यस्मिन् काले यतः खेटाः यान्ति दृक्-गणित-एकताम् (when planets attain equality of observational and computed positions), ततः एव स्फुटाः कार्याः (then only exact [positions] should be taken), दिक्-कालौ च स्फुटौ विदा (and know that direction and time are [then] accurate). This verse emphasizes the importance of empirical verification in Jyotiṣa, not blind reliance on calculation."
  },
  {
    "id": "Q047",
    "verses": [12, 13, 23, 24, 25, 26, 27, 28],
    "type": "Multi-Verse Integrative",
    "question": "Analyze the pattern in Verses 12, 13, 23-28. How does Parāśara structure the description of planets?",
    "options": [
      "Random characteristics without pattern",
      "First psychological/spiritual significations (12-13), then detailed physical descriptions with temperament (23-28)",
      "Only physical descriptions are given",
      "All planets are described identically"
    ],
    "correctIndex": 1,
    "explanation": "Notice the elegant two-tier structure: Verses 12-13 give essential nature (Sun=soul/intelligence, Moon=mind/fickle, Mars=courage, Mercury=speech, Jupiter=knowledge/happiness, Venus=vitality, Saturn=sorrow). Then Verses 23-28 provide detailed physical portraits with constitution: Sun (23): honey-tawny eyes, square body, bilious, intelligent. Moon (24): round, windy-phlegmatic, sweet-speech, fickle. Mars (25): red-eyed, bilious, thin-waisted, irascible. Mercury (26): excellent figure, witty, tri-doṣic. Jupiter (27): large-bodied, phlegmatic, scholarly. Venus (28): charming, poetic, phlegmatic-airy. This progression from essence to manifestation is masterful pedagogy."
  },
  {
    "id": "Q048",
    "verses": [11, 22, 37],
    "type": "Multi-Verse Synthesis",
    "question": "How do the classifications in Verses 11 (malefic/benefic), 22 (guṇa), and 37 (temporal strength) interconnect?",
    "options": [
      "They are unrelated classifications",
      "Malefics are tamasic and strong in darkness/southern solstice; benefics are sattvic/rajasic and strong in brightness/northern solstice - showing coherent cosmic order",
      "All planets are equally strong always",
      "Only one classification system exists"
    ],
    "correctIndex": 1,
    "explanation": "Observe the profound interconnection: Verse 11: Sun, Saturn, Mars, waning Moon, Rāhu, Ketu = क्रूराः (malefics). Verse 22: Saturn, Rāhu = तमः-प्रकृतिकौ (tamasic); Jupiter, Sun, Moon = सत्त्वम् (sattvic); Mercury, Venus = रजस् (rajasic). Verse 37: कृष्णे च बलिनः क्रूराः (malefics strong in dark fortnight), सौम्याः...सिते (benefics in bright), याम्य-आयने अपरः (malefics in southern solstice), सौम्य-आयने सौम्य-खेटः (benefics in northern). The pattern: darkness/tamas/malefic vs. light/sattva-rajas/benefic forms a consistent philosophical framework."
  },
  {
    "id": "Q049",
    "verses": [14, 15, 21],
    "type": "Multi-Verse Synthesis",
    "question": "Connect the political hierarchy (Verses 14-15) with the varṇa classification (Verse 21). Is there alignment?",
    "options": [
      "No relationship exists between these classifications",
      "Yes: Sun & Moon (kings) are Kṣatriya; Jupiter & Venus (ministers) are Brāhmaṇa; Mercury (prince) is Vaiśya; Saturn (servant) is Śūdra - reflecting traditional social order",
      "All planets are Brāhmaṇas",
      "Political and social classifications contradict each other"
    ],
    "correctIndex": 1,
    "explanation": "Notice the elegant correspondence: Verses 14-15: Sun & Moon = राजानौ (kings), Jupiter & Venus = सचिवौ (ministers), Mercury = राज-कुमारः (prince), Mars = नेता (commander), Saturn = प्रेष्यकः (servant). Verse 21: Sun & Mars = क्षत्रियौ (Kṣatriyas - warrior/ruler class), Jupiter & Venus = विप्र-वर्णौ (Brāhmaṇas - priestly/advisory class), Moon & Mercury = वैश्य-वर्णौ (Vaiśyas - merchant/administrative class), Saturn = शूद्रः (Śūdra - service class). The political roles mirror the traditional varṇa duties, showing Parāśara's systematic worldview."
  },
  {
    "id": "Q050",
    "verses": [19, 20, 21, 22],
    "type": "Multi-Verse Classification Master",
    "question": "Create a complete classification matrix for Mars based on Verses 19-22: What is Mars's gender, element, varṇa, and guṇa?",
    "options": [
      "Masculine, fire, Kṣatriya, sattva",
      "Masculine, fire, Kṣatriya, tamas",
      "Neuter, earth, Śūdra, rajas",
      "Feminine, water, Brāhmaṇa, sattva"
    ],
    "correctIndex": 1,
    "explanation": "Carefully extract from each verse: Verse 19: नराः शेषाः...भानुः भौमः गुरः (the rest [including Mars/भौमः] are male/masculine). Verse 20: भौम-आदीनाम्...अग्नि-भूमि... (of Mars and others...fire, earth...) - Mars = fire element. Verse 21: कुज-अर्कौ क्षत्रियौ (Mars [कुज] and Sun are Kṣatriyas). Verse 22: Though not explicitly stated for Mars individually, by elimination (Jupiter/Sun/Moon=sattva; Mercury/Venus=rajas), Mars falls into the tamasic category with malefics. This demonstrates the need to synthesize across verses for complete understanding."
  },
  {
    "id": "Q051",
    "verses": [31, 32, 33, 34, 35],
    "type": "Multi-Verse Integrative",
    "question": "Verses 31-35 assign various domains to planets. What is Parāśara's underlying teaching principle?",
    "options": [
      "Planets rule only celestial matters",
      "Planetary rulership extends comprehensively to body parts, sacred spaces, time periods, tastes, and directions - showing the microcosm-macrocosm correspondence",
      "Only spiritual matters are assigned to planets",
      "These assignments are arbitrary with no philosophical basis"
    ],
    "correctIndex": 1,
    "explanation": "Observe the comprehensive mapping: Verse 31: body parts (bones through sinews). Verse 32: temple waters, fires, pleasures, treasuries, beds, seats. Verse 33: solstices, nakṣatras, weekdays, seasons, months, fortnights, years. Verse 34: six tastes. Verse 35: four directions. This systematic assignment reveals the Vedic principle that planets are not merely celestial bodies but organizing principles (devatās) that structure reality at every level - from the physical body (śarīra) to cosmic time (kāla) to sensory experience (indriya). Everything is graha-influenced."
  },
  {
    "id": "Q052",
    "verses": [6],
    "type": "Vocabulary",
    "question": "In Verse 6, what do the terms \"ग्रहयोगवियोगाभ्याम्\" (graha-yoga-viyogābhyām) specifically mean?",
    "options": [
      "Meditation and separation from worldly life",
      "Conjunction and separation of planets",
      "Yoga practice and renunciation",
      "Union with God and detachment"
    ],
    "correctIndex": 1,
    "explanation": "ग्रह-योग-वियोगाभ्याम् is an instrumental dual compound: ग्रह (planet) + योग (conjunction/union) + वियोग (separation/disjunction) + आभ्याम् (by both/from both). The verse states फलम् चिन्त्यम् शुभाशुभम् ग्रह-योग-वियोगाभ्याम् (good or evil results are to be judged from conjunction and separation of planets). This establishes a fundamental principle: planetary combinations (yogas) and their breaking apart determine life results."
  },
  {
    "id": "Q053",
    "verses": [3, 4, 5, 7],
    "type": "Multi-Verse Structural",
    "question": "Verses 3-5 establish a hierarchical classification. What is the complete structure from largest to smallest division?",
    "options": [
      "Only nakṣatras exist",
      "Zodiac → 27 nakṣatras (fixed) + 12 rāśis (equal divisions) → 9 grahas (moving)",
      "Only the 12 rāśis matter",
      "Random celestial arrangement with no structure"
    ],
    "correctIndex": 1,
    "explanation": "Follow the logical progression: Verse 3: तेषु नक्षत्र-सञ्ज्ञानि ग्रह-सञ्ज्ञानि कानि-चित् (among them some called nakṣatras, some called planets), ताني नक्षत्र-नामानि स्थिर-स्थानानि (those called nakṣatras have fixed positions). Verse 4: गच्छन्तः भानि गृह्णन्ति सततम् ये तु ते ग्रहाः (those luminous bodies that continually move are planets), भ-चक्रस्य नगा-अश्वि-अंशाः अश्विनी-आदि-समाह्वयाः (zodiac's 27 parts named Aśvinī etc.). Verse 5: तद्-द्वादश-विभागाः तु तुल्याः मेष-आदि-सञ्ज्ञकाः (its division into 12 equal parts called Aries etc.). This three-tiered cosmology (27 nakṣatras, 12 rāśis, 9 grahas) is the foundational architecture of Jyotiṣa."
  }
  // ... add the rest
];

// ======================
// 2) APP STATE
// ======================
let shuffleOn = false;

let round = "round1"; // "round1" or "retry"
let orderRound1 = [];
let orderRetry = [];

let idx = 0; // index within current order array
let currentOrder = [];

const missedOnFirstTry = new Set();      // question indices (original QUIZ index)
const firstAttemptMade = new Set();      // question indices where user has clicked at least once (in Round 1)

let lockedCorrect = false;               // prevents new selection after correct until Next

// ======================
// 3) DOM
// ======================
const screenStart = document.getElementById("screenStart");
const screenQuiz = document.getElementById("screenQuiz");
const screenDone = document.getElementById("screenDone");

const btnStart = document.getElementById("btnStart");
const btnShuffle = document.getElementById("btnShuffle");
const btnNext = document.getElementById("btnNext");
const btnReset = document.getElementById("btnReset");
const btnAgain = document.getElementById("btnAgain");

const modePill = document.getElementById("modePill");

const progressBar = document.getElementById("progressBar");
const qCounter = document.getElementById("qCounter");
const verseMeta = document.getElementById("verseMeta");
const typeMeta = document.getElementById("typeMeta");

const qText = document.getElementById("qText");
const optionsEl = document.getElementById("options");

const feedback = document.getElementById("feedback");

const explainBox = document.getElementById("explainBox");
const explainText = document.getElementById("explainText");

const doneTitle = document.getElementById("doneTitle");
const doneText = document.getElementById("doneText");
const statTotal = document.getElementById("statTotal");
const statMissed = document.getElementById("statMissed");

// ======================
// 4) HELPERS
// ======================
function deepCopy(arr) { return JSON.parse(JSON.stringify(arr)); }

function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildOrder() {
  const base = Array.from({ length: QUIZ.length }, (_, i) => i);
  return shuffleOn ? shuffleArray(base) : base;
}

function setModePill() {
  modePill.textContent = (round === "round1") ? "Round 1" : "Retry Round";
}

function show(el) { el.classList.remove("hidden"); }
function hide(el) { el.classList.add("hidden"); }

function resetUIForNewQuestion() {
  lockedCorrect = false;
  btnNext.disabled = true;
  feedback.className = "feedback";
  feedback.textContent = "Pick the best answer. You must be correct to advance.";
  explainBox.classList.add("hidden");
  explainText.textContent = "";
  optionsEl.innerHTML = "";
}

function renderQuestion() {
  setModePill();
  resetUIForNewQuestion();

  const qIndex = currentOrder[idx];
  const q = QUIZ[qIndex];

  const total = currentOrder.length;
  qCounter.textContent = `Question ${idx + 1} / ${total}`;
  verseMeta.textContent = `Verses: ${q.verses.join(", ")}`;
  typeMeta.textContent = q.type;

  const progress = total <= 1 ? 100 : Math.round((idx / (total - 1)) * 100);
  progressBar.style.width = `${progress}%`;

  qText.textContent = q.question;

  q.options.forEach((optText, optIdx) => {
    const btn = document.createElement("button");
    btn.className = "opt";
    btn.type = "button";
    btn.textContent = `${String.fromCharCode(65 + optIdx)}) ${optText}`;
    btn.addEventListener("click", () => onPickAnswer(qIndex, optIdx, btn));
    optionsEl.appendChild(btn);
  });
}

function setFeedback(kind, text) {
  feedback.className = `feedback ${kind}`;
  feedback.textContent = text;
}

function revealExplanation(q) {
  explainText.textContent = q.explanation || "";
  explainBox.classList.remove("hidden");
  explainBox.open = true;
}

// ======================
// 5) LOGIC
// ======================
function onPickAnswer(qIndex, pickedIdx, pickedBtn) {
  if (lockedCorrect) return;

  const q = QUIZ[qIndex];
  const isCorrect = (pickedIdx === q.correctIndex);

  // Round 1 tracking: if wrong on first attempt, mark it
  if (round === "round1") {
    if (!firstAttemptMade.has(qIndex)) {
      firstAttemptMade.add(qIndex);
      if (!isCorrect) missedOnFirstTry.add(qIndex);
    }
  }

  // mark buttons
  const all = Array.from(optionsEl.querySelectorAll(".opt"));
  all.forEach(b => b.classList.remove("wrong", "correct"));

  if (isCorrect) {
    pickedBtn.classList.add("correct");
    setFeedback("good", "✅ Correct! Read the explanation, then tap Next.");
    revealExplanation(q);
    btnNext.disabled = false;
    lockedCorrect = true;
  } else {
    pickedBtn.classList.add("wrong");

    // subtle hint: show verse refs again (not the answer)
    const hint = `Hint: Re-check verse(s) ${q.verses.join(", ")}. Look for the key phrase that matches the option. Try again.`;
    setFeedback("bad", `❌ Not yet. ${hint}`);
    // do NOT enable Next
  }
}

function startRound1() {
  round = "round1";
  idx = 0;
  orderRound1 = buildOrder();
  currentOrder = orderRound1;

  hide(screenStart);
  hide(screenDone);
  show(screenQuiz);

  renderQuestion();
}

function startRetryRound() {
  round = "retry";
  idx = 0;
  orderRetry = Array.from(missedOnFirstTry.values());

  // If shuffle is on, shuffle retry order too
  if (shuffleOn) shuffleArray(orderRetry);

  currentOrder = orderRetry;

  hide(screenStart);
  hide(screenDone);
  show(screenQuiz);

  renderQuestion();
}

function finishQuiz() {
  hide(screenQuiz);
  show(screenDone);

  const total = QUIZ.length;
  const missed = missedOnFirstTry.size;

  statTotal.textContent = String(total);
  statMissed.textContent = String(missed);

  if (missed > 0 && round === "round1") {
    doneTitle.textContent = "Round 1 Complete!";
    doneText.textContent =
      `You missed ${missed} question(s) on the first try. Next, you’ll do a Retry Round with only those questions until all are correct.`;
    // Auto-start retry after a short pause? Keep manual:
    setTimeout(() => {
      startRetryRound();
    }, 600);
  } else {
    doneTitle.textContent = "All Done — Mastery Achieved ✅";
    doneText.textContent =
      missed === 0
        ? "Outstanding — you got everything correct on the first attempt."
        : "Great work — you corrected every missed question in the retry round.";
  }
}

function onNext() {
  if (!lockedCorrect) return;

  idx += 1;
  if (idx >= currentOrder.length) {
    // End of current round
    if (round === "round1") {
      if (missedOnFirstTry.size > 0) {
        // We show done screen briefly but we auto-jump to retry round; already handled in finishQuiz()
        finishQuiz();
      } else {
        // Perfect round: finish fully
        round = "retry"; // no retry needed, but mark done message
        hide(screenQuiz);
        show(screenDone);
        doneTitle.textContent = "All Done — Mastery Achieved ✅";
        doneText.textContent = "Perfect run — no missed questions in Round 1.";
        statTotal.textContent = String(QUIZ.length);
        statMissed.textContent = "0";
      }
    } else {
      // retry round completed
      hide(screenQuiz);
      show(screenDone);
      doneTitle.textContent = "All Done — Mastery Achieved ✅";
      doneText.textContent = "You completed the retry round. Well done!";
      statTotal.textContent = String(QUIZ.length);
      statMissed.textContent = String(missedOnFirstTry.size);
    }
    return;
  }

  renderQuestion();
}

function hardReset() {
  // reset state
  round = "round1";
  orderRound1 = [];
  orderRetry = [];
  currentOrder = [];
  idx = 0;
  missedOnFirstTry.clear();
  firstAttemptMade.clear();
  lockedCorrect = false;

  // back to start
  hide(screenQuiz);
  hide(screenDone);
  show(screenStart);

  modePill.textContent = "Round 1";
}

function updateShuffleButton() {
  btnShuffle.textContent = `Shuffle: ${shuffleOn ? "On" : "Off"}`;
}

// ======================
// 6) EVENTS
// ======================
btnStart.addEventListener("click", () => {
  if (!Array.isArray(QUIZ) || QUIZ.length < 1) {
    alert("QUIZ data is empty. Paste your JSON quiz into app.js first.");
    return;
  }
  startRound1();
});

btnShuffle.addEventListener("click", () => {
  shuffleOn = !shuffleOn;
  updateShuffleButton();
});

btnNext.addEventListener("click", onNext);

btnReset.addEventListener("click", () => {
  if (confirm("Restart the entire quiz?")) hardReset();
});

btnAgain.addEventListener("click", () => {
  hardReset();
});

// init
updateShuffleButton();
statTotal.textContent = String(QUIZ.length);
statMissed.textContent = "0";
