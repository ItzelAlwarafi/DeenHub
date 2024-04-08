const db = require('../db')
const{ Dua } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main=  async ()=>{
    const duas = 


        [
            {
              "arabic_text": "رَبَّنَا لَا تُؤَاخِذْنَا بِمَا فَعَلَ السُّفَهَاءُ مِنَّا",
              "transliteration": "Rabbana la tu'akhidhna bima fa'ala al-sufaha'u minna",
              "translation": "Our Lord, do not impose blame upon us if we forget or make a mistake."
            },
            {
              "arabic_text": "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلْقَوْمِ الظَّالِمِينَ",
              "transliteration": "Rabbana la taj'alna fitnatan lill-qawmi al-thalimeen",
              "translation": "Our Lord, do not make us a trial for the wrongdoing people."
            },
            {
              "arabic_text": "رَبَّنَا وَأَجِرْنَا مِنَ الْقَوْمِ الْكَافِرِينَ",
              "transliteration": "Rabbana wa ajirna min al-qawmi al-kafireen",
              "translation": "Our Lord, save us from the disbelieving people."
            },
            {
              "arabic_text": "رَبَّنَا آمَنَّا بِمَا أَنزَلْتَ وَاتَّبَعْنَا الرَّسُولَ فَاكْتُبْنَا مَعَ الشَّاهِدِينَ",
              "transliteration": "Rabbana amanna bima anzalta wa at-taba'na al-rasoola fa-uktubna ma'a al-shahideen",
              "translation": "Our Lord, we have believed in what You revealed and have followed the messenger, so register us among the witnesses."
            },
            {
              "arabic_text": "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا ۖ إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ",
              "transliteration": "Rabbana la taj'alna fitnatan lilladhina kafaroo wa-ghfir lana Rabbana innaka anta al-'azeezu al-hakeem",
              "translation": "Our Lord, do not make us a trial for those who disbelieve and forgive us, our Lord. Indeed, You are the Exalted in Might, the Wise."
            },
            {
              "arabic_text": "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ",
              "transliteration": "Rabbana la tuzigh quloobana ba'da idh hadaytana wahab lana min ladunka rahmatan innaka anta al-wahhaab",
              "translation": "Our Lord, do not let our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower."
            },
            {
              "arabic_text": "رَبَّنَا إِنَّكَ جَامِعُ النَّاسِ لِيَوْمٍ لَّا رَيْبَ فِيهِ ۚ إِنَّ اللَّهَ لَا يُخْلِفُ الْمِيعَادَ",
              "transliteration": "Rabbana innaka jami'u al-nasi liyawmin la rayba feeh innallaaha la yukhliful mi'aad",
              "translation": "Our Lord, surely You will gather the people for a Day about which there is no doubt. Indeed, Allah does not fail in His promise."
            },
            {
              "arabic_text": "رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ",
              "transliteration": "Rabbana innana amanna faghfir lana dhunuubana wa qinna 'adhaba al-nar",
              "translation": "Our Lord, we have believed, so forgive us our sins and protect us from the punishment of the Fire."
            },
            {
              "arabic_text": "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ",
              "transliteration": "Rabbana la tuzigh quloobana ba'da idh hadaytana wahab lana min ladunka rahmatan innaka anta al-wahhaab",
              "translation": "Our Lord, do not let our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower."
            },
            {
              "arabic_text": "رَبَّنَا إِنَّكَ رَءُوفٌ رَّحِيمٌ",
              "transliteration": "Rabbana innaka ra'oofun raheem",
              "translation": "Our Lord, indeed You are Kind and Merciful."
            },
            {
              "arabic_text": "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
              "transliteration": "Rabbana ighfir li waliwalidayya walilmu'mineena yawma yaqoomu alhisab",
              "translation": "Our Lord, forgive me and my parents and the believers on the Day the account is established."
            },
            {
              "arabic_text": "رَبَّنَا إِنَّكَ رَءُوفٌ رَّحِيمٌ",
              "transliteration": "Rabbana innaka ra'oofun raheem",
              "translation": "Our Lord, indeed You are Kind and Merciful."
            },
            {
              "arabic_text": "رَبَّنَا لَا تَكِلْنَا إِلَىٰ أَنفُسِنَا طَرْفَةَ عَيْنٍ وَلَا أَقَلَّ مِن ذَٰلِكَ ۖ وَأَفْوِضْنَا إِلَىٰكَ وَأَنتَ خَيْرُ الْوَاكِلِينَ",
              "transliteration": "Rabbana la takilna ila anfusina tarfata 'aynin wa la aqalla min dhalika wa afwidna ilayka wa anta khayru al-wakileen",
              "translation": "Our Lord, do not entrust us to ourselves for even a blink of an eye, and do not allow us to have less reliance on You. And we commit ourselves to You, for You are the best of caretakers."
            },
            {
              "arabic_text": "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنتَ خَيْرُ الرَّاحِمِينَ",
              "transliteration": "Rabbana amanna faghfir lana warhamna wa anta khayru al-raheemeen",
              "translation": "Our Lord, we have believed, so forgive us and have mercy on us. And You are the best of the merciful."
            },
            {
              "arabic_text": "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا وَإِلَيْكَ الْمَصِيرُ",
              "transliteration": "Rabbana 'alayka tawakkalna wa ilayka anabna wa ilayka al-maseer",
              "translation": "Our Lord, upon You we have relied, and to You we have returned, and to You is the destination."
            },
            {
              "arabic_text": "رَبَّنَا لَا تَجْعَلْنَا مَفْتَنِينَ لِلَّذِينَ كَفَرُوا وَاغْفِرْ لَنَا رَبَّنَا ۖ إِنَّكَ أَنتَ الْعَزِيزُ الْحَكِيمُ",
              "transliteration": "Rabbana la taj'alna mafataneen lilladhina kafaroo wa-ghfir lana Rabbana innaka anta al-'azeezu al-hakeem",
              "translation": "Our Lord, do not make us a trial for those who disbelieve and forgive us, our Lord. Indeed, You are the Exalted in Might, the Wise."
            },
            {
              "arabic_text": "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنتَ خَيْرُ الرَّاحِمِينَ",
              "transliteration": "Rabbana amanna faghfir lana warhamna wa anta khayru al-raheemeen",
              "translation": "Our Lord, we have believed, so forgive us and have mercy on us. And You are the best of the merciful."
            },
            {
              "arabic_text": "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
              "transliteration": "Rabbana afrigh 'alayna sabran wa tawaffana muslimin",
              "translation": "Our Lord, pour upon us patience and let us die as Muslims."
            },
            {
              "arabic_text": "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
              "transliteration": "Rabbana ighfir lana dhunuubana wa israafanaa fi amrina wa thabbit aqdaamanaa wansurnaa 'alaa al-qawmi al-kaafireen",
              "translation": "Our Lord, forgive us our sins and the excessiveness in our affairs and plant firmly our feet and give us victory over the disbelieving people."
            }
          
          



]




await Dua.insertMany(duas)
 
console.log('Duas Seeded! ')
}

const run = async () => {

await main()

db.close()
}

run()

