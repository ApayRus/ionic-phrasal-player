import {
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar
} from '@ionic/react'
import { useEffect, useRef } from 'react'
import MediaPlayer from '../components/MediaPlayer'
import './Home.css'

const phrases = [
	{ id: '000', start: 0, end: 0, text: '' },
	{
		id: '001',
		start: 55.14,
		end: 56.683,
		text: 'GRAMMA: In the beginning...'
	},
	{
		id: '002',
		start: 56.85,
		end: 59.686,
		text: 'there was only ocean...'
	},
	{
		id: '003',
		start: 59.853,
		end: 63.815,
		text: 'until the mother island emerged.'
	},
	{
		id: '004',
		start: 63.982,
		end: 65.81700000000001,
		text: 'Te Fiti.'
	},
	{
		id: '005',
		start: 66.443,
		end: 70.196,
		text: 'Her heart held the greatest power ever known.'
	},
	{
		id: '006',
		start: 70.363,
		end: 73.324,
		text: 'It could create life itself.'
	},
	{
		id: '007',
		start: 73.491,
		end: 77.70400000000001,
		text: 'And Te Fiti shared it with the world.'
	},
	{
		id: '008',
		start: 80.16499999999999,
		end: 81.374,
		text: 'But in time...'
	},
	{
		id: '009',
		start: 81.541,
		end: 84.544,
		text: "some began to seek Te Fiti's heart."
	},
	{
		id: '010',
		start: 84.711,
		end: 86.838,
		text: 'They believed if they could possess it...'
	},
	{
		id: '011',
		start: 87.005,
		end: 90.633,
		text: 'the great power of creation would be theirs.'
	},
	{ id: '012', start: 90.8, end: 93.178, text: 'And one day...' },
	{
		id: '013',
		start: 93.72,
		end: 96.306,
		text: 'the most daring of them all...'
	},
	{
		id: '014',
		start: 96.473,
		end: 100.852,
		text: 'voyaged across the vast ocean to take it.'
	},
	{
		id: '015',
		start: 102.14500000000001,
		end: 107.025,
		text: 'He was a demigod of the wind and sea.'
	},
	{
		id: '016',
		start: 108.485,
		end: 110.069,
		text: 'He was a warrior.'
	},
	{ id: '017', start: 111.196, end: 112.572, text: 'A trickster.' },
	{
		id: '018',
		start: 115.033,
		end: 117.243,
		text: 'A shapeshifter who could change form...'
	},
	{
		id: '019',
		start: 118.286,
		end: 121.039,
		text: 'with the power of his magical fish hook.'
	},
	{ id: '020', start: 122.874, end: 124.375, text: 'And his name...' },
	{ id: '021', start: 125.21, end: 127.42, text: 'was Maui.' },
	{ id: '022', start: 132.217, end: 133.218, text: '(CHUCKLES)' },
	{ id: '023', start: 133.76, end: 134.969, text: '(RUMBLING)' },
	{
		id: '024',
		start: 136.888,
		end: 141.392,
		text: 'But without her heart, Te Fiti began to crumble...'
	},
	{
		id: '025',
		start: 141.559,
		end: 144.312,
		text: 'giving birth to a terrible darkness.'
	},
	{
		id: '026',
		start: 162.747,
		end: 164.374,
		text: 'Maui tried to escape...'
	},
	{
		id: '027',
		start: 164.916,
		end: 167.91899999999998,
		text: 'but was confronted by another who sought the heart.'
	},
	{ id: '028', start: 170.755, end: 172.423, text: 'Te Kā!' },
	{
		id: '029',
		start: 172.59,
		end: 175.59300000000002,
		text: 'A demon of earth and fire.'
	},
	{
		id: '030',
		start: 183.226,
		end: 186.104,
		text: 'Maui was struck from the sky...'
	},
	{
		id: '031',
		start: 187.355,
		end: 189.691,
		text: 'never to be seen again.'
	},
	{
		id: '032',
		start: 190.275,
		end: 194.946,
		text: 'And his magical fish hook and the heart of Te Fiti...'
	},
	{
		id: '033',
		start: 195.113,
		end: 197.907,
		text: 'were lost to the sea.'
	},
	{
		id: '034',
		start: 198.61599999999999,
		end: 200.243,
		text: 'Where, even now...'
	},
	{
		id: '035',
		start: 200.41,
		end: 202.37,
		text: '1,000 years later...'
	},
	{
		id: '036',
		start: 202.537,
		end: 205.123,
		text: 'Te Kā and the demons of the deep...'
	},
	{
		id: '037',
		start: 205.29,
		end: 207.292,
		text: 'still hunt for the heart.'
	},
	{
		id: '038',
		start: 207.709,
		end: 211.796,
		text: 'Hiding in a darkness that will continue to spread...'
	},
	{
		id: '039',
		start: 211.963,
		end: 214.257,
		text: 'chasing away our fish...'
	},
	{
		id: '040',
		start: 214.424,
		end: 217.635,
		text: 'draining the life from island after island...'
	},
	{
		id: '041',
		start: 217.802,
		end: 221.055,
		text: 'until every one of us is devoured...'
	},
	{
		id: '042',
		start: 221.222,
		end: 223.892,
		text: 'by the bloodthirsty jaws...'
	},
	{
		id: '043',
		start: 224.058,
		end: 226.811,
		text: 'of inescapable death!'
	},
	{
		id: '044',
		start: 228.47899999999998,
		end: 229.814,
		text: '(WAILING)'
	},
	{ id: '045', start: 232.066, end: 233.651, text: 'But one day...' },
	{
		id: '046',
		start: 233.81799999999998,
		end: 235.82,
		text: 'the heart will be found...'
	},
	{
		id: '047',
		start: 235.987,
		end: 239.073,
		text: 'by someone who will journey beyond our reef...'
	},
	{ id: '048', start: 239.24, end: 240.575, text: 'find Maui...' },
	{
		id: '049',
		start: 240.783,
		end: 242.827,
		text: 'deliver him across the great ocean...'
	},
	{
		id: '050',
		start: 242.994,
		end: 245.163,
		text: "to restore Te Fiti's heart..."
	},
	{ id: '051', start: 245.33, end: 246.998, text: 'and save us all.' },
	{
		id: '052',
		start: 247.957,
		end: 249.709,
		text: "Whoa, whoa, whoa! Thank you, Mother. That's enough."
	},
	{ id: '053', start: 249.792, end: 250.752, text: 'Papa.' },
	{
		id: '054',
		start: 250.835,
		end: 252.67,
		text: 'No one goes outside the reef.'
	},
	{
		id: '055',
		start: 252.837,
		end: 255.924,
		text: 'We are safe here. There is no darkness.'
	},
	{
		id: '056',
		start: 256.09,
		end: 257.842,
		text: 'There are no monsters.'
	},
	{ id: '057', start: 260.803, end: 261.804, text: 'Monsters!' },
	{
		id: '058',
		start: 261.971,
		end: 264.015,
		text: "-- There's no monsters, no monsters...\n-it's the darkness!"
	},
	{
		id: '059',
		start: 264.515,
		end: 268.186,
		text: 'No, there is nothing beyond our reef, but storms and rough seas.'
	},
	{
		id: '060',
		start: 268.353,
		end: 269.479,
		text: "I'm gonna throw up."
	},
	{
		id: '061',
		start: 269.646,
		end: 271.814,
		text: 'TUI: As long as we stay on our very safe island...'
	},
	{
		id: '062',
		start: 272.523,
		end: 273.81600000000003,
		text: "...we'll be fine."
	},
	{
		id: '063',
		start: 273.983,
		end: 275.443,
		text: 'GRAMMA: The legends are true.'
	},
	{
		id: '064',
		start: 275.61,
		end: 277.195,
		text: 'Someone will have to go.'
	},
	{
		id: '065',
		start: 277.403,
		end: 279.53,
		text: 'TUI: Mother, Motunui is paradise.'
	},
	{
		id: '066',
		start: 279.781,
		end: 282.367,
		text: 'Who would want to go anywhere else?'
	},
	{
		id: '067',
		start: 295.88,
		end: 297.548,
		text: '(BIRDS SCREECHING)'
	},
	{ id: '068', start: 318.695, end: 320.738, text: 'Shoo,shoo!' },
	{ id: '069', start: 333.835, end: 334.836, text: '(EXCLAIMING)' },
	{
		id: '070',
		start: 339.007,
		end: 340.55,
		text: '(ETHEREAL WHISPERING)'
	},
	{ id: '071', start: 346.472, end: 347.557, text: '(GIGGLING)' },
	{ id: '072', start: 403.946, end: 405.49, text: '(GIGGLING)' },
	{ id: '073', start: 421.422, end: 422.715, text: 'TUI: Moana!' },
	{
		id: '074',
		start: 437.98,
		end: 440.858,
		text: 'There you are, Moana.\nWhat are you doing? You scared me.'
	},
	{
		id: '075',
		start: 441.025,
		end: 442.652,
		text: "What? I wanna's go back."
	},
	{
		id: '076',
		start: 442.819,
		end: 445.404,
		text: "I know, I know. But you don't go out there."
	},
	{ id: '077', start: 446.322, end: 447.532, text: "It's dangerous." },
	{ id: '078', start: 449.283, end: 451.536, text: 'Moana, come on.' },
	{
		id: '079',
		start: 451.702,
		end: 453.704,
		text: "Let's go back to the village."
	},
	{
		id: '080',
		start: 455.498,
		end: 457.75,
		text: 'You are the next great chief\nof our people.'
	},
	{
		id: '081',
		start: 457.91700000000003,
		end: 460.92,
		text: 'And you will do wondrous things,\nmy little minnow.'
	},
	{
		id: '082',
		start: 461.504,
		end: 465.466,
		text: "Oh, yes. But first, you must learn\nwhere you're meant to be."
	},
	{ id: '083', start: 477.562, end: 479.313, text: 'Moana' },
	{
		id: '084',
		start: 479.48,
		end: 481.858,
		text: 'Make way, make way'
	},
	{
		id: '085',
		start: 482.024,
		end: 483.901,
		text: "Moana, it's time you knew"
	},
	{
		id: '086',
		start: 484.068,
		end: 487.822,
		text: 'The village of Motunui is all you need'
	},
	{
		id: '087',
		start: 487.989,
		end: 490.074,
		text: 'The dancers are practicing'
	},
	{
		id: '088',
		start: 490.283,
		end: 492.577,
		text: 'They dance to an ancient song'
	},
	{
		id: '089',
		start: 492.743,
		end: 495.58,
		text: "Who needs a new song This old one's all we need"
	},
	{
		id: '090',
		start: 495.746,
		end: 497.665,
		text: 'This tradition is our mission'
	},
	{
		id: '091',
		start: 497.79,
		end: 500.418,
		text: "And Moana, there's so much to do"
	},
	{
		id: '092',
		start: 500.585,
		end: 501.961,
		text: "Don't trip on the taro root"
	},
	{
		id: '093',
		start: 502.128,
		end: 504.255,
		text: "That's all you need"
	},
	{
		id: '094',
		start: 504.422,
		end: 506.382,
		text: 'We share everything we make'
	},
	{
		id: '095',
		start: 506.549,
		end: 508.426,
		text: 'We joke and we weave our baskets'
	},
	{
		id: '096',
		start: 508.593,
		end: 510.887,
		text: 'The fishermen come back from the sea'
	},
	{ id: '097', start: 511.053, end: 512.555, text: 'I wanna see' },
	{ id: '098', start: 512.722, end: 514.473, text: "Don't walk away" },
	{
		id: '099',
		start: 514.64,
		end: 516.559,
		text: 'Moana, stay on the ground now'
	},
	{
		id: '100',
		start: 516.726,
		end: 518.603,
		text: 'Our people will need a chief'
	},
	{
		id: '101',
		start: 518.769,
		end: 520.688,
		text: '-- And there you are\n-- There you are'
	},
	{
		id: '102',
		start: 520.855,
		end: 522.732,
		text: 'There comes a day'
	},
	{
		id: '103',
		start: 522.899,
		end: 526.611,
		text: "When you're gonna look around\nAnd realize happiness is"
	},
	{ id: '104', start: 526.777, end: 528.613, text: 'Where you are' },
	{
		id: '105',
		start: 528.863,
		end: 530.364,
		text: 'Consider the coconut'
	},
	{
		id: '106',
		start: 530.573,
		end: 532.742,
		text: '-- The what\n-- Consider its tree'
	},
	{
		id: '107',
		start: 532.909,
		end: 536.287,
		text: "We use each part of the coconut\nIt's all we need"
	},
	{
		id: '108',
		start: 536.954,
		end: 538.915,
		text: 'We make our nets from the fibers'
	},
	{
		id: '109',
		start: 539.081,
		end: 540.917,
		text: 'The water is sweet inside'
	},
	{
		id: '110',
		start: 541.083,
		end: 545.213,
		text: 'We use the leaves to build fires\nWe cook up the meat inside'
	},
	{
		id: '111',
		start: 545.379,
		end: 547.131,
		text: 'Consider the coconuts'
	},
	{
		id: '112',
		start: 547.298,
		end: 549.05,
		text: 'The trunks and the leaves'
	},
	{
		id: '113',
		start: 549.217,
		end: 551.719,
		text: 'The island gives us what we need'
	},
	{
		id: '114',
		start: 551.886,
		end: 553.638,
		text: 'And no one leaves'
	},
	{
		id: '115',
		start: 553.804,
		end: 555.264,
		text: "That's right, we stay"
	},
	{
		id: '116',
		start: 555.431,
		end: 557.058,
		text: "We're safe and we're well-provided"
	},
	{
		id: '117',
		start: 557.225,
		end: 559.143,
		text: 'And when we look to the future'
	},
	{ id: '118', start: 559.31, end: 560.811, text: 'There you are' },
	{ id: '119', start: 561.437, end: 563.648, text: "You'll be okay" },
	{
		id: '120',
		start: 563.814,
		end: 565.608,
		text: "In time you'll learn just as I did"
	},
	{
		id: '121',
		start: 565.775,
		end: 569.487,
		text: 'You must find happiness\nright where you are'
	},
	{
		id: '122',
		start: 575.785,
		end: 579.997,
		text: 'I like to dance with the water\nThe undertow and the waves'
	},
	{
		id: '123',
		start: 580.164,
		end: 584.168,
		text: 'The water is mischievous\nHa! I like how it misbehaves'
	},
	{
		id: '124',
		start: 584.335,
		end: 588.256,
		text: "The village may think I'm crazy\nOr say that I drift too far"
	},
	{
		id: '125',
		start: 588.422,
		end: 592.927,
		text: 'But once you know what you like\nWell, there you are'
	},
	{
		id: '126',
		start: 594.845,
		end: 598.975,
		text: "You are your father's daughter\nStubbornness and pride"
	},
	{
		id: '127',
		start: 599.141,
		end: 603.437,
		text: 'Mind what he says but remember\nYou may hear a voice inside'
	},
	{
		id: '128',
		start: 603.604,
		end: 607.775,
		text: 'And if the voice starts to whisper\nTo follow the farthest star'
	},
	{
		id: '129',
		start: 607.942,
		end: 611.445,
		text: 'Moana, that voice inside\nis who you are'
	},
	{
		id: '130',
		start: 614.573,
		end: 616.534,
		text: '-- Uh-huh.\n-- Dad!'
	},
	{
		id: '131',
		start: 616.701,
		end: 620.162,
		text: "I was only looking at the boats.\nI wasn't gonna get on 'em."
	},
	{ id: '132', start: 622.748, end: 623.791, text: '(SIGHS)' },
	{
		id: '133',
		start: 623.874,
		end: 627.461,
		text: "Come on.\nThere's something I need to show you."
	},
	{
		id: '134',
		start: 629.338,
		end: 633.05,
		text: "I've wanted to bring you here from\nthe moment you opened your eyes."
	},
	{
		id: '135',
		start: 633.467,
		end: 635.72,
		text: 'This is a sacred place.'
	},
	{
		id: '136',
		start: 635.886,
		end: 637.888,
		text: 'A place of chiefs.'
	},
	{
		id: '137',
		start: 638.055,
		end: 639.557,
		text: 'There will come a time...'
	},
	{
		id: '138',
		start: 639.724,
		end: 644.687,
		text: 'when you will stand on this peak\nand place a stone on this mountain.'
	},
	{
		id: '139',
		start: 644.854,
		end: 647.398,
		text: 'Like I did. Like my father did.'
	},
	{
		id: '140',
		start: 647.565,
		end: 651.569,
		text: 'And his father, and every chief\nthat has ever been.'
	},
	{
		id: '141',
		start: 652.153,
		end: 653.738,
		text: 'And on that day...'
	},
	{
		id: '142',
		start: 653.904,
		end: 656.157,
		text: 'when you add your stone...'
	},
	{
		id: '143',
		start: 656.324,
		end: 659.869,
		text: 'you will raise this whole island higher.'
	},
	{
		id: '144',
		start: 660.202,
		end: 662.83,
		text: 'You are the future of our people, Moana.'
	},
	{
		id: '145',
		start: 662.997,
		end: 665.541,
		text: 'And they are not out there.'
	},
	{
		id: '146',
		start: 665.708,
		end: 668.586,
		text: 'They are right here.'
	},
	{
		id: '147',
		start: 668.753,
		end: 671.922,
		text: "It's time to be who they need you to be."
	},
	{
		id: '148',
		start: 673.299,
		end: 675.509,
		text: '-- We make our nets from the fibers\n-- We weave our nets from the fibers'
	},
	{
		id: '149',
		start: 675.593,
		end: 677.678,
		text: '-- The water is sweet inside\n-- A real tasty treat inside'
	},
	{
		id: '150',
		start: 677.803,
		end: 680.014,
		text: '-- We use the leaves to build fires\n-- We sing these songs in our choirs'
	},
	{
		id: '151',
		start: 680.097,
		end: 681.932,
		text: '-- To cook up the meat inside\n-- We have mouths to feed inside'
	},
	{
		id: '152',
		start: 682.099,
		end: 683.934,
		text: "-- The village believes in us\n-- That's right"
	},
	{
		id: '153',
		start: 684.101,
		end: 685.603,
		text: 'The village believes'
	},
	{
		id: '154',
		start: 685.77,
		end: 687.938,
		text: 'The island gives us what we need'
	},
	{
		id: '155',
		start: 688.105,
		end: 690.107,
		text: 'And no one leaves'
	},
	{
		id: '156',
		start: 690.274,
		end: 691.609,
		text: "So here I'll stay"
	},
	{
		id: '157',
		start: 691.942,
		end: 695.613,
		text: 'My home, my people beside me\nAnd when I think of tomorrow'
	},
	{ id: '158', start: 695.78, end: 697.823, text: 'There we are' },
	{ id: '159', start: 698.24, end: 699.784, text: "I'll lead the way" },
	{
		id: '160',
		start: 700.117,
		end: 701.952,
		text: "I'll have my people to guide me"
	},
	{
		id: '161',
		start: 702.119,
		end: 703.746,
		text: "We'll build our future together"
	},
	{ id: '162', start: 703.913, end: 705.956, text: 'Where we are' },
	{
		id: '163',
		start: 706.29,
		end: 707.833,
		text: "'Cause every path leads ya back to"
	},
	{ id: '164', start: 708.25, end: 709.46, text: 'Where you are' },
	{
		id: '165',
		start: 710.044,
		end: 711.921,
		text: 'You can find happiness right'
	},
	{
		id: '166',
		start: 712.338,
		end: 713.9639999999999,
		text: 'Where you are'
	},
	{ id: '167', start: 714.298, end: 717.134, text: 'Where you are' },
	{
		id: '168',
		start: 720.93,
		end: 724.475,
		text: 'And every storm, this roof leaks,\nno matter how many fronds I add.'
	},
	{ id: '169', start: 724.642, end: 725.643, text: 'MOANA: Fixed!' },
	{ id: '170', start: 725.81, end: 726.936, text: 'Not the fronds.' },
	{
		id: '171',
		start: 729.271,
		end: 731.232,
		text: '-- Wind shifted the post.'
	},
	{
		id: '172',
		start: 731.69,
		end: 734.36,
		text: "-- Mmm! That's good pork!\n-- (PUA GRUNTING)"
	},
	{
		id: '173',
		start: 736.654,
		end: 738.489,
		text: "Oh! I didn't mean... I wasn't..."
	},
	{
		id: '174',
		start: 738.656,
		end: 742.66,
		text: "(CLEARS THROAT) What?\nThey're calling me, so I gotta... Bye!"
	},
	{
		id: '175',
		start: 743.953,
		end: 745.329,
		text: 'VILLAGER: Ow! Ow! Ow!'
	},
	{
		id: '176',
		start: 745.413,
		end: 746.664,
		text: "You're doing great."
	},
	{ id: '177', start: 746.831, end: 748.249, text: 'Is it done yet?' },
	{
		id: '178',
		start: 748.374,
		end: 750.084,
		text: '(CONTINUES SCREAMING)'
	},
	{ id: '179', start: 750.167, end: 751.752, text: 'So close.' },
	{
		id: '180',
		start: 753.17,
		end: 754.922,
		text: '(DRUM BEATS PLAYING)'
	},
	{
		id: '181',
		start: 766.225,
		end: 769.562,
		text: "I'm curious about that chicken\neating the rock."
	},
	{
		id: '182',
		start: 769.687,
		end: 774.65,
		text: 'He seems to lack the basic intelligence\nrequired for pretty much everything.'
	},
	{
		id: '183',
		start: 774.817,
		end: 777.736,
		text: 'Should we maybe just cook him?'
	},
	{
		id: '184',
		start: 778.863,
		end: 782.116,
		text: 'Sometimes our strengths lie\nbeneath the surface.'
	},
	{
		id: '185',
		start: 783.659,
		end: 785.995,
		text: 'Far beneath in some cases.'
	},
	{
		id: '186',
		start: 786.162,
		end: 788.372,
		text: "But I'm sure there's more to Heihei"
	},
	{
		id: '187',
		start: 788.456,
		end: 789.623,
		text: '-- than meets the eye.\n-- (HEIHEi CAWING)'
	},
	{
		id: '188',
		start: 796.672,
		end: 797.756,
		text: "It's the harvest."
	},
	{
		id: '189',
		start: 798.132,
		end: 801.302,
		text: 'This morning,\nI was husking the coconuts and...'
	},
	{ id: '190', start: 808.1, end: 809.101, text: 'Well...' },
	{
		id: '191',
		start: 809.226,
		end: 814.148,
		text: 'we should clear the diseased trees\nand we will start a new grove.'
	},
	{ id: '192', start: 814.231, end: 815.232, text: 'There.' },
	{ id: '193', start: 817.776, end: 819.028, text: 'Thanks, Moana.' },
	{
		id: '194',
		start: 819.195,
		end: 821.197,
		text: "She's doing great."
	},
	{ id: '195', start: 825.284, end: 826.577, text: 'This suits you.' },
	{
		id: '196',
		start: 826.744,
		end: 827.745,
		text: 'FISHERMAN: Chief?'
	},
	{
		id: '197',
		start: 828.412,
		end: 830.581,
		text: "(PANTING)\nThere's something you need to see."
	},
	{
		id: '198',
		start: 830.956,
		end: 832.583,
		text: 'Our traps in the east lagoon...'
	},
	{
		id: '199',
		start: 833,
		end: 834.919,
		text: "they're pulling up less and less fish."
	},
	{
		id: '200',
		start: 835.419,
		end: 837.755,
		text: "Then we'll rotate the fishing grounds."
	},
	{
		id: '201',
		start: 838.13,
		end: 840.09,
		text: "Uh, we have. There's no fish."
	},
	{
		id: '202',
		start: 840.299,
		end: 843.427,
		text: "Oh. Then we'll fish\nthe far side of the island."
	},
	{ id: '203', start: 843.594, end: 844.637, text: 'We tried.' },
	{
		id: '204',
		start: 844.887,
		end: 846.096,
		text: 'The windward side.'
	},
	{
		id: '205',
		start: 846.555,
		end: 848.766,
		text: 'And the leeward side, the shallows,\nthe channel.'
	},
	{
		id: '206',
		start: 849.141,
		end: 850.601,
		text: "We've tried the whole lagoon."
	},
	{
		id: '207',
		start: 851.06,
		end: 853.103,
		text: "They're just gone."
	},
	{
		id: '208',
		start: 853.604,
		end: 855.397,
		text: 'TUI:\nHave you tried using a different bait?'
	},
	{
		id: '209',
		start: 855.564,
		end: 856.941,
		text: "FISHERMAN: I don't think it's the bait."
	},
	{ id: '210', start: 857.316, end: 858.609, text: "There's no fish." },
	{
		id: '211',
		start: 858.943,
		end: 860.486,
		text: "It seems like\nit's getting worse and worse."
	},
	{
		id: '212',
		start: 860.611,
		end: 863.614,
		text: 'TUI: Of course, I understand\nyou have reason for concern.'
	},
	{
		id: '213',
		start: 864.532,
		end: 865.824,
		text: "I will talk to the council.\nI'm sure we..."
	},
	{
		id: '214',
		start: 865.991,
		end: 868.827,
		text: 'What if we fish beyond the reef?'
	},
	{
		id: '215',
		start: 870.287,
		end: 872.122,
		text: 'No one goes beyond the reef.'
	},
	{
		id: '216',
		start: 872.289,
		end: 874.75,
		text: 'I know. But if there are no fish\nin the lagoon...'
	},
	{
		id: '217',
		start: 875.125,
		end: 876.835,
		text: "-- Moana.\n-- And there's a whole ocean."
	},
	{
		id: '218',
		start: 877.211,
		end: 878.629,
		text: 'We have one rule.'
	},
	{
		id: '219',
		start: 878.963,
		end: 879.9639999999999,
		text: 'An old rule, when there were fish.'
	},
	{
		id: '220',
		start: 880.381,
		end: 882.091,
		text: '-- A rule that keeps us safe...\n-- But Dad, I...'
	},
	{
		id: '221',
		start: 882.216,
		end: 886.178,
		text: '...instead of endangering our people\nso you can run right back to the water.'
	},
	{ id: '222', start: 888.639, end: 889.64, text: '(EXHALES)' },
	{ id: '223', start: 890.391, end: 891.642, text: '(HUFFING)' },
	{
		id: '224',
		start: 892.851,
		end: 895.354,
		text: "Every time I think you're past this..."
	},
	{
		id: '225',
		start: 898.023,
		end: 900.276,
		text: 'No one goes beyond the reef!'
	},
	{
		id: '226',
		start: 906.907,
		end: 909.994,
		text: "Well, it's not like you said it\nin front of your dad."
	},
	{
		id: '227',
		start: 910.661,
		end: 912.162,
		text: 'Standing on a boat.'
	},
	{
		id: '228',
		start: 912.913,
		end: 917.167,
		text: "I didn't say go beyond the reef,\nbecause I want to be on the ocean."
	},
	{
		id: '229',
		start: 917.334,
		end: 919.336,
		text: 'But you still do.'
	},
	{ id: '230', start: 919.67, end: 920.671, text: '(MOANA SIGHS)' },
	{
		id: '231',
		start: 920.754,
		end: 923.215,
		text: "-- He's hard on you because...\n-- Because he doesn't get me."
	},
	{
		id: '232',
		start: 923.382,
		end: 925.968,
		text: 'Because he was you.'
	},
	{
		id: '233',
		start: 926.76,
		end: 928.637,
		text: 'Drawn to the ocean.'
	},
	{
		id: '234',
		start: 928.804,
		end: 930.18,
		text: 'Down by the shore.'
	},
	{
		id: '235',
		start: 931.265,
		end: 932.975,
		text: 'He took a canoe, Moana.'
	},
	{
		id: '236',
		start: 933.35,
		end: 934.602,
		text: 'He crossed the reef...'
	},
	{
		id: '237',
		start: 935.561,
		end: 937.855,
		text: 'and found an unforgiving sea.'
	},
	{
		id: '238',
		start: 938.314,
		end: 940.065,
		text: 'Waves like mountains.'
	},
	{
		id: '239',
		start: 941.108,
		end: 944.361,
		text: 'His best friend begged\nto be on that boat.'
	},
	{
		id: '240',
		start: 944.862,
		end: 947.114,
		text: "Your dad couldn't save him."
	},
	{
		id: '241',
		start: 949.241,
		end: 952.5360000000001,
		text: "He's hoping he can save you."
	},
	{ id: '242', start: 953.871, end: 955.372, text: 'Sometimes...' },
	{
		id: '243',
		start: 955.539,
		end: 959.46,
		text: 'who we wish we were,\nwhat we wish we could do...'
	},
	{
		id: '244',
		start: 961.128,
		end: 963.255,
		text: "it's just not meant to be."
	},
	{
		id: '245',
		start: 977.144,
		end: 981.398,
		text: "I've been staring at the edge of the water"
	},
	{
		id: '246',
		start: 981.565,
		end: 984.735,
		text: 'Long as I can remember'
	},
	{
		id: '247',
		start: 985.069,
		end: 987.821,
		text: 'Never really knowing why'
	},
	{
		id: '248',
		start: 989.239,
		end: 993.577,
		text: 'I wish I could be the perfect daughter'
	},
	{
		id: '249',
		start: 993.744,
		end: 996.58,
		text: 'But I come back to the water'
	},
	{
		id: '250',
		start: 996.747,
		end: 998.957,
		text: 'No matter how hard I try'
	},
	{
		id: '251',
		start: 1000.751,
		end: 1004.004,
		text: 'Every turn I take\nEvery trail I track'
	},
	{
		id: '252',
		start: 1004.505,
		end: 1007.049,
		text: 'Every path I make\nEvery road leads back'
	},
	{
		id: '253',
		start: 1007.424,
		end: 1009.76,
		text: 'To the place I know\nWhere I cannot go'
	},
	{
		id: '254',
		start: 1009.927,
		end: 1012.346,
		text: 'Where I long to be'
	},
	{
		id: '255',
		start: 1012.513,
		end: 1015.015,
		text: 'See the line where the sky meets the sea'
	},
	{ id: '256', start: 1015.391, end: 1017.434, text: 'It calls me' },
	{
		id: '257',
		start: 1017.601,
		end: 1020.437,
		text: 'And no one knows'
	},
	{ id: '258', start: 1020.938, end: 1023.44, text: 'How far it goes' },
	{
		id: '259',
		start: 1023.941,
		end: 1028.737,
		text: 'If the wind in my sail on the sea\nStays behind me'
	},
	{
		id: '260',
		start: 1028.821,
		end: 1032.449,
		text: "One day I'll know"
	},
	{
		id: '261',
		start: 1032.616,
		end: 1036.829,
		text: "If I go, there's just no telling\nhow far I'll go"
	},
	{
		id: '262',
		start: 1037.162,
		end: 1040.04,
		text: 'I know everybody on this island'
	},
	{
		id: '263',
		start: 1040.374,
		end: 1042.793,
		text: 'Seems so happy on this island'
	},
	{
		id: '264',
		start: 1042.96,
		end: 1045.504,
		text: 'Everything is by design'
	},
	{ id: '265', start: 1046.213, end: 1047.256, text: '(SQUEALS)' },
	{
		id: '266',
		start: 1047.506,
		end: 1051.009,
		text: 'I know everybody on this island'
	},
	{
		id: '267',
		start: 1051.385,
		end: 1054.221,
		text: 'Has a role on this island'
	},
	{
		id: '268',
		start: 1054.596,
		end: 1056.974,
		text: 'So maybe I can roll with mine'
	},
	{
		id: '269',
		start: 1058.308,
		end: 1061.186,
		text: 'I can lead with pride\nI can make us strong'
	},
	{
		id: '270',
		start: 1061.52,
		end: 1063.897,
		text: "I'll be satisfied\nIf I play along"
	},
	{
		id: '271',
		start: 1064.064,
		end: 1067.317,
		text: 'But the voice inside\nSings a different song'
	},
	{
		id: '272',
		start: 1067.693,
		end: 1069.361,
		text: 'What is wrong with me'
	},
	{
		id: '273',
		start: 1072.531,
		end: 1075.117,
		text: 'See the light as it shines on the sea'
	},
	{ id: '274', start: 1075.284, end: 1077.995, text: "It's blinding" },
	{
		id: '275',
		start: 1078.328,
		end: 1080.205,
		text: 'But no one knows'
	},
	{
		id: '276',
		start: 1080.622,
		end: 1083.834,
		text: 'How deep it goes'
	},
	{
		id: '277',
		start: 1084.001,
		end: 1086.086,
		text: "And it seems like it's calling out to me"
	},
	{
		id: '278',
		start: 1086.462,
		end: 1089.047,
		text: 'So come find me'
	},
	{
		id: '279',
		start: 1089.423,
		end: 1091.759,
		text: 'And let me know'
	},
	{
		id: '280',
		start: 1092.468,
		end: 1095.387,
		text: "What's beyond that line\nWill I cross that line"
	},
	{
		id: '281',
		start: 1095.763,
		end: 1097.598,
		text: 'The line where the sky meets the sea'
	},
	{ id: '282', start: 1097.973, end: 1100.517, text: 'It calls me' },
	{
		id: '283',
		start: 1100.684,
		end: 1103.312,
		text: 'And no one knows'
	},
	{
		id: '284',
		start: 1103.479,
		end: 1106.815,
		text: 'How far it goes'
	},
	{
		id: '285',
		start: 1107.149,
		end: 1111.695,
		text: 'If the wind in my sail on the sea\nstays behind me'
	},
	{
		id: '286',
		start: 1111.862,
		end: 1114.531,
		text: "One day I'll know"
	},
	{
		id: '287',
		start: 1114.698,
		end: 1119.995,
		text: "How far I'll go"
	},
	{ id: '288', start: 1122.706, end: 1123.707, text: 'Whoa.' },
	{
		id: '289',
		start: 1127.753,
		end: 1128.879,
		text: "We're okay, Pua."
	},
	{ id: '290', start: 1129.379, end: 1130.589, text: 'I can do this.' },
	{ id: '291', start: 1130.923, end: 1131.924, text: '(EXHALES)' },
	{
		id: '292',
		start: 1132.216,
		end: 1134.885,
		text: "There's more fish beyond the reef."
	},
	{
		id: '293',
		start: 1136.595,
		end: 1138.806,
		text: "There's more beyond the reef."
	},
	{
		id: '294',
		start: 1142.768,
		end: 1144.144,
		text: '(PUA SQUEALING)'
	},
	{ id: '295', start: 1147.189, end: 1148.69, text: 'Not so bad.' },
	{ id: '296', start: 1150.734, end: 1152.236, text: '(GASPS)' },
	{
		id: '297',
		start: 1156.365,
		end: 1158.45,
		text: '-- (PUA SQUEALING FRANTICALLY)\n-- Pua!'
	},
	{ id: '298', start: 1168.043, end: 1169.044, text: '(COUGHING)' },
	{ id: '299', start: 1192.276, end: 1193.569, text: '(GASPING)' },
	{ id: '300', start: 1198.24, end: 1199.241, text: '(PUA SQUEALING)' },
	{ id: '301', start: 1207.124, end: 1208.125, text: '(WINCES)' },
	{
		id: '302',
		start: 1209.96,
		end: 1212.796,
		text: 'Whatever just happened...'
	},
	{
		id: '303',
		start: 1212.963,
		end: 1214.298,
		text: 'blame it on the pig.'
	},
	{ id: '304', start: 1214.631, end: 1215.674, text: 'Gramma.' },
	{
		id: '305',
		start: 1220.47,
		end: 1222.139,
		text: 'Are you gonna tell Dad?'
	},
	{
		id: '306',
		start: 1222.472,
		end: 1225.726,
		text: "I'm his mom.\nI don't have to tell him anything."
	},
	{ id: '307', start: 1229.438, end: 1230.731, text: 'He was right.' },
	{
		id: '308',
		start: 1231.481,
		end: 1233.483,
		text: 'About going out there.'
	},
	{
		id: '309',
		start: 1235.903,
		end: 1238.989,
		text: "It's time to put my stone on the mountain."
	},
	{
		id: '310',
		start: 1241.158,
		end: 1244.161,
		text: 'Okay. Well, then, head on back.'
	},
	{
		id: '311',
		start: 1244.995,
		end: 1246.663,
		text: 'Put that stone up there.'
	},
	{
		id: '312',
		start: 1251.501,
		end: 1253.295,
		text: "Why aren't you trying\nto talk me out of it?"
	},
	{
		id: '313',
		start: 1253.754,
		end: 1256.131,
		text: "You said that's what you wanted."
	},
	{ id: '314', start: 1257.09, end: 1258.091, text: 'It is.' },
	{
		id: '315',
		start: 1258.175,
		end: 1259.509,
		text: '(GRAMMA HUMMING)'
	},
	{
		id: '316',
		start: 1261.845,
		end: 1263.847,
		text: 'GRAMMA: When I die...'
	},
	{
		id: '317',
		start: 1264.306,
		end: 1267.517,
		text: "I'm going to come back as one of these."
	},
	{
		id: '318',
		start: 1267.935,
		end: 1270.812,
		text: 'Or I chose the wrong tattoo.'
	},
	{
		id: '319',
		start: 1270.979,
		end: 1272.648,
		text: 'Why are you acting weird?'
	},
	{
		id: '320',
		start: 1273.023,
		end: 1276.318,
		text: "I'm the village crazy lady.\nThat's my job."
	},
	{
		id: '321',
		start: 1276.985,
		end: 1280.656,
		text: "If there's something you want to tell me,\njust tell me!"
	},
	{
		id: '322',
		start: 1281.823,
		end: 1283.659,
		text: 'Is there something you wanna tell me?'
	},
	{
		id: '323',
		start: 1284.117,
		end: 1287.037,
		text: 'Is there something you want to hear?'
	},
	{
		id: '324',
		start: 1291.875,
		end: 1294.878,
		text: "You've been told\nall our people's stories..."
	},
	{ id: '325', start: 1295.712, end: 1297.381, text: 'but one.' },
	{
		id: '326',
		start: 1298.34,
		end: 1299.841,
		text: 'What is this place?'
	},
	{
		id: '327',
		start: 1300.3,
		end: 1304.471,
		text: 'Do you really think\nour ancestors stayed within the reef?'
	},
	{ id: '328', start: 1309.059, end: 1310.06, text: '(GASPS)' },
	{ id: '329', start: 1313.397, end: 1315.399, text: 'Ooh!' },
	{
		id: '330',
		start: 1316.149,
		end: 1317.818,
		text: "MOANA: What's in there?"
	},
	{
		id: '331',
		start: 1317.985,
		end: 1322.489,
		text: 'The answer to the question\nyou keep asking yourself.'
	},
	{
		id: '332',
		start: 1322.99,
		end: 1325.659,
		text: 'Who are you meant to be?'
	},
	{ id: '333', start: 1328.912, end: 1330.664, text: 'Go inside...' },
	{
		id: '334',
		start: 1330.831,
		end: 1332.416,
		text: 'bang the drum...'
	},
	{ id: '335', start: 1332.916, end: 1334.876, text: 'and find out.' },
	{ id: '336', start: 1360.736, end: 1361.737, text: '(GASPS)' },
	{ id: '337', start: 1364.156, end: 1365.157, text: 'Whoa.' },
	{ id: '338', start: 1371.038, end: 1372.039, text: 'Oh.' },
	{ id: '339', start: 1403.57, end: 1404.988, text: 'Bang the drum.' },
	{
		id: '340',
		start: 1412.829,
		end: 1414.164,
		text: '(DRUM BEAT ECHOING)'
	},
	{ id: '341', start: 1421.296, end: 1422.297, text: '(GASPS)' },
	{ id: '342', start: 1430.514, end: 1431.515, text: '(YELPS)' },
	{
		id: '343',
		start: 1432.516,
		end: 1434.81,
		text: '(ETHEREAL VOICES ECHOING)'
	},
	{
		id: '344',
		start: 1457.707,
		end: 1459.376,
		text: '(SINGING IN FOREIGN LANGUAGE)'
	},
	{
		id: '345',
		start: 1496.746,
		end: 1499.624,
		text: 'We read the wind and the sky'
	},
	{
		id: '346',
		start: 1500,
		end: 1501.626,
		text: 'When the sun is high'
	},
	{
		id: '347',
		start: 1501.793,
		end: 1504.588,
		text: 'We sail the length of the seas'
	},
	{
		id: '348',
		start: 1505.13,
		end: 1506.423,
		text: 'On the ocean breeze'
	},
	{
		id: '349',
		start: 1506.923,
		end: 1509.134,
		text: 'At night we name every star'
	},
	{
		id: '350',
		start: 1509.467,
		end: 1511.428,
		text: 'We know where we are'
	},
	{
		id: '351',
		start: 1511.845,
		end: 1515.807,
		text: 'We know who we are\nWho we are'
	},
	{
		id: '352',
		start: 1518.81,
		end: 1520.77,
		text: 'We set a course to find'
	},
	{
		id: '353',
		start: 1521.188,
		end: 1525.483,
		text: 'A brand new island everywhere we roam'
	},
	{
		id: '354',
		start: 1528.361,
		end: 1530.238,
		text: 'We keep our island in our mind'
	},
	{
		id: '355',
		start: 1530.947,
		end: 1533.408,
		text: "And when it's time to find home"
	},
	{
		id: '356',
		start: 1533.575,
		end: 1535.452,
		text: 'We know the way'
	},
	{
		id: '357',
		start: 1537.12,
		end: 1540.457,
		text: 'We are explorers reading every sign'
	},
	{
		id: '358',
		start: 1540.832,
		end: 1545.629,
		text: 'We tell the stories of our elders\nIn a never-ending chain'
	},
	{
		id: '359',
		start: 1552.969,
		end: 1555.847,
		text: 'We know the way'
	},
	{
		id: '360',
		start: 1561.645,
		end: 1563.438,
		text: 'We were voyagers.'
	},
	{
		id: '361',
		start: 1564.481,
		end: 1565.69,
		text: 'We were voyagers!'
	},
	{
		id: '362',
		start: 1566.149,
		end: 1569.736,
		text: 'We were voyagers! We were voyagers!'
	},
	{
		id: '363',
		start: 1569.903,
		end: 1571.655,
		text: 'We were voyagers!'
	},
	{ id: '364', start: 1573.156, end: 1574.616, text: "Why'd we stop?" },
	{ id: '365', start: 1575.7, end: 1576.785, text: 'Maui.' },
	{
		id: '366',
		start: 1577.41,
		end: 1580.997,
		text: 'When he stole from the mother island,\ndarkness fell.'
	},
	{ id: '367', start: 1581.706, end: 1583.5, text: 'Te Kā awoke.' },
	{
		id: '368',
		start: 1584.167,
		end: 1587.42,
		text: 'Monsters lurked\nand boats stopped coming back.'
	},
	{
		id: '369',
		start: 1588.171,
		end: 1591.841,
		text: 'To protect our people,\nthe ancient chiefs forbid voyaging...'
	},
	{
		id: '370',
		start: 1591.925,
		end: 1595.845,
		text: 'and now we have forgotten who we are.'
	},
	{
		id: '371',
		start: 1596.096,
		end: 1599.933,
		text: 'And the darkness\nhas continued to spread...'
	},
	{
		id: '372',
		start: 1600.433,
		end: 1602.185,
		text: 'chasing away our fish...'
	},
	{
		id: '373',
		start: 1602.56,
		end: 1604.104,
		text: 'draining the life...'
	},
	{
		id: '374',
		start: 1604.521,
		end: 1607.899,
		text: 'from island after island.'
	},
	{ id: '375', start: 1611.278, end: 1613.113, text: 'Our island.' },
	{
		id: '376',
		start: 1613.738,
		end: 1615.573,
		text: 'But, one day...'
	},
	{
		id: '377',
		start: 1615.74,
		end: 1619.828,
		text: 'someone will journey beyond our reef,\nfind Maui...'
	},
	{
		id: '378',
		start: 1619.995,
		end: 1622.914,
		text: 'deliver him across the great ocean...'
	},
	{
		id: '379',
		start: 1623.832,
		end: 1627.46,
		text: 'to restore the heart of Te Fiti.'
	},
	{
		id: '380',
		start: 1629.129,
		end: 1632.215,
		text: 'I was there that day.'
	},
	{
		id: '381',
		start: 1632.382,
		end: 1635.218,
		text: 'The ocean chose you.'
	},
	{
		id: '382',
		start: 1643.977,
		end: 1646.104,
		text: 'I thought it was a dream.'
	},
	{ id: '383', start: 1650.4, end: 1651.401, text: '(YELPS)' },
	{ id: '384', start: 1652.152, end: 1653.778, text: 'Nope!' },
	{
		id: '385',
		start: 1654.696,
		end: 1658.45,
		text: 'Our ancestors believed Maui lies there...'
	},
	{
		id: '386',
		start: 1658.616,
		end: 1660.368,
		text: 'at the bottom of his hook.'
	},
	{
		id: '387',
		start: 1660.827,
		end: 1663.621,
		text: 'Follow it, and you will find him.'
	},
	{
		id: '388',
		start: 1663.788,
		end: 1667.25,
		text: 'But why would it choose me?'
	},
	{
		id: '389',
		start: 1667.417,
		end: 1670.462,
		text: "I don't even know how to make it past the reef."
	},
	{
		id: '390',
		start: 1671.296,
		end: 1673.256,
		text: 'But I know who does!'
	},
	{ id: '391', start: 1675.759, end: 1676.76, text: '(SIGHS)' },
	{
		id: '392',
		start: 1681.556,
		end: 1682.557,
		text: 'VILLAGER 1: The crops are turning black.'
	},
	{
		id: '393',
		start: 1683.516,
		end: 1684.517,
		text: 'VILLAGER 2: What about the fish?'
	},
	{
		id: '394',
		start: 1684.768,
		end: 1686.353,
		text: 'VILLAGER 3: This is happening all over the island.'
	},
	{
		id: '395',
		start: 1686.436,
		end: 1687.979,
		text: '-- Please, please settle down.\n-- What are you going to do?'
	},
	{
		id: '396',
		start: 1688.063,
		end: 1689.814,
		text: 'We will dig new fields.\nWe will find a way to...'
	},
	{
		id: '397',
		start: 1689.898,
		end: 1692.4,
		text: 'We can stop the darkness!\nSave our island!'
	},
	{
		id: '398',
		start: 1692.776,
		end: 1694.11,
		text: "There's a cavern of boats."
	},
	{ id: '399', start: 1694.486, end: 1695.82, text: 'Huge canoes.' },
	{
		id: '400',
		start: 1695.987,
		end: 1699.574,
		text: 'We can take them, find Maui,\nmake him restore the heart.'
	},
	{
		id: '401',
		start: 1700.033,
		end: 1703.203,
		text: 'We were voyagers.\nWe can voyage again!'
	},
	{
		id: '402',
		start: 1706.289,
		end: 1708.041,
		text: 'You told me to help our people.'
	},
	{
		id: '403',
		start: 1708.208,
		end: 1710.46,
		text: 'This is how we help our people.'
	},
	{ id: '404', start: 1710.794, end: 1711.878, text: 'Dad?' },
	{
		id: '405',
		start: 1711.961,
		end: 1712.962,
		text: 'What are you doing?'
	},
	{
		id: '406',
		start: 1713.338,
		end: 1715.632,
		text: "I should've burned those boats a long time ago!"
	},
	{ id: '407', start: 1715.799, end: 1716.841, text: "No! Don't!" },
	{
		id: '408',
		start: 1717.008,
		end: 1719.552,
		text: 'We have to find Maui.\nWe have to restore the heart!'
	},
	{
		id: '409',
		start: 1719.969,
		end: 1721.054,
		text: 'There is no heart!'
	},
	{
		id: '410',
		start: 1721.137,
		end: 1722.889,
		text: 'This is just a rock!'
	},
	{ id: '411', start: 1722.972, end: 1723.973, text: 'No!' },
	{ id: '412', start: 1735.443, end: 1736.82, text: '(HORN BLOWING)' },
	{
		id: '413',
		start: 1737.404,
		end: 1739.489,
		text: "Chief! It's your mother!"
	},
	{ id: '414', start: 1749.958, end: 1751.167, text: 'Mother...' },
	{
		id: '415',
		start: 1767.267,
		end: 1768.81,
		text: 'TUI: What can be done?'
	},
	{
		id: '416',
		start: 1769.436,
		end: 1771.688,
		text: '(VILLAGERS TALKING INDISTINCTLY)'
	},
	{ id: '417', start: 1774.941, end: 1776.109, text: '(WEAKLY) Go.' },
	{ id: '418', start: 1776.526, end: 1777.986, text: 'Gramma.' },
	{ id: '419', start: 1780.6970000000001, end: 1781.739, text: 'Go.' },
	{
		id: '420',
		start: 1782.198,
		end: 1784.701,
		text: "Not now. I can't."
	},
	{ id: '421', start: 1785.118, end: 1786.202, text: 'You must!' },
	{
		id: '422',
		start: 1786.619,
		end: 1789.747,
		text: 'The ocean chose you.'
	},
	{
		id: '423',
		start: 1790.165,
		end: 1791.416,
		text: 'Follow the fish hook.'
	},
	{ id: '424', start: 1791.583, end: 1792.584, text: 'Gramma...' },
	{
		id: '425',
		start: 1792.75,
		end: 1794.836,
		text: 'And when you find Maui...'
	},
	{
		id: '426',
		start: 1795.295,
		end: 1798.84,
		text: 'you grab him by the ear. You say...'
	},
	{
		id: '427',
		start: 1799.257,
		end: 1802.26,
		text: 'I am Moana of Motunui.'
	},
	{
		id: '428',
		start: 1802.719,
		end: 1804.846,
		text: 'You will board my boat...'
	},
	{
		id: '429',
		start: 1805.305,
		end: 1807.39,
		text: 'sail across the sea...'
	},
	{
		id: '430',
		start: 1807.557,
		end: 1811.561,
		text: 'and restore the heart of Te Fiti.'
	},
	{
		id: '431',
		start: 1813.438,
		end: 1815.732,
		text: "(VOICE BREAKING) I can't leave you."
	},
	{
		id: '432',
		start: 1816.191,
		end: 1821.404,
		text: "There is nowhere you could go\nthat I won't be with you."
	},
	{ id: '433', start: 1834.375, end: 1835.752, text: 'Go!' },
	{
		id: '434',
		start: 1847.639,
		end: 1850.391,
		text: "There's a line where the sky meets the sea"
	},
	{
		id: '435',
		start: 1850.767,
		end: 1852.393,
		text: 'And it calls me'
	},
	{
		id: '436',
		start: 1853.144,
		end: 1855.48,
		text: 'But no one knows'
	},
	{
		id: '437',
		start: 1855.647,
		end: 1859.317,
		text: 'How far it goes'
	},
	{
		id: '438',
		start: 1859.776,
		end: 1864.447,
		text: 'All that time wondering where I need\nto be is behind me'
	},
	{ id: '439', start: 1864.864, end: 1867.575, text: "I'm on my own" },
	{
		id: '440',
		start: 1868.201,
		end: 1870.62,
		text: 'To worlds unknown'
	},
	{
		id: '441',
		start: 1870.995,
		end: 1873.831,
		text: 'Every turn I take\nEvery trail I track'
	},
	{
		id: '442',
		start: 1874.165,
		end: 1875.708,
		text: 'Is a choice I make'
	},
	{
		id: '443',
		start: 1875.792,
		end: 1878.461,
		text: "Now I can't turn back\nfrom the great unknown"
	},
	{
		id: '444',
		start: 1878.836,
		end: 1882.048,
		text: 'Where I go alone\nWhere I long to be'
	},
	{
		id: '445',
		start: 1891.599,
		end: 1893.81,
		text: 'See her light up the night in the sea'
	},
	{ id: '446', start: 1894.185, end: 1896.646, text: 'She calls me' },
	{ id: '447', start: 1897.021, end: 1899.44, text: 'And yes, I know' },
	{ id: '448', start: 1899.816, end: 1902.068, text: 'That I can go' },
	{
		id: '449',
		start: 1903.736,
		end: 1907.24,
		text: "There's a moon in the sky\nAnd the wind is behind me"
	},
	{ id: '450', start: 1908.7, end: 1910.785, text: "Soon I'll know" },
	{
		id: '451',
		start: 1911.202,
		end: 1913.413,
		text: "How far I'll go"
	},
	{
		id: '452',
		start: 1933.224,
		end: 1937.729,
		text: 'I am Moana of Motunui.\nYou will board my boat...'
	},
	{
		id: '453',
		start: 1938.229,
		end: 1942.275,
		text: 'sail across the sea\nand restore the heart of Te Fiti.'
	},
	{
		id: '454',
		start: 1942.442,
		end: 1943.985,
		text: '-- (GRUNTING) I am Moana...\n-- (THUDDING)'
	},
	{
		id: '455',
		start: 1945.445,
		end: 1946.487,
		text: '-- of Motu...\n-- (THUDDING CONTINUES)'
	},
	{ id: '456', start: 1948.114, end: 1949.24, text: '...nui.' },
	{
		id: '457',
		start: 1950.867,
		end: 1951.868,
		text: '(THUDDING CONTINUES)'
	},
	{ id: '458', start: 1960.877, end: 1961.878, text: 'Heihei?' },
	{
		id: '459',
		start: 1974.057,
		end: 1976.809,
		text: '(CAWING LOUDLY)'
	},
	{ id: '460', start: 1976.893, end: 1978.436, text: '(CAWING STOPS)' },
	{ id: '461', start: 1979.729, end: 1980.73, text: '(CAWING LOUDLY)' },
	{ id: '462', start: 1980.855, end: 1981.856, text: '(CAWING STOPS)' },
	{
		id: '463',
		start: 1981.981,
		end: 1983.066,
		text: '(CAWS AND STOPS AGAIN)'
	},
	{
		id: '464',
		start: 1984.567,
		end: 1987.445,
		text: "It's okay. You're all right."
	},
	{ id: '465', start: 1988.071, end: 1989.238, text: 'See?' },
	{
		id: '466',
		start: 1989.656,
		end: 1992.45,
		text: 'There we go. Nice water.'
	},
	{
		id: '467',
		start: 1992.617,
		end: 1995.119,
		text: 'The ocean is a friend of mine.'
	},
	{ id: '468', start: 1997.33, end: 1998.456, text: 'Heihei?' },
	{ id: '469', start: 1999.749, end: 2000.75, text: 'Heihei!' },
	{ id: '470', start: 2003.711, end: 2004.712, text: '(GASPS)' },
	{ id: '471', start: 2015.848, end: 2016.849, text: 'Stay.' },
	{
		id: '472',
		start: 2022.855,
		end: 2025.692,
		text: 'Okay. Next stop, Maui.'
	},
	{
		id: '473',
		start: 2033.783,
		end: 2036.369,
		text: 'I am Moana of Motunui.'
	},
	{
		id: '474',
		start: 2036.786,
		end: 2039.664,
		text: 'You will board my boat...'
	},
	{
		id: '475',
		start: 2040.54,
		end: 2043.668,
		text: 'sail... across the sea...'
	},
	{
		id: '476',
		start: 2043.835,
		end: 2045.962,
		text: 'and restore the heart of Te Fiti.'
	},
	{
		id: '477',
		start: 2047.964,
		end: 2051.134,
		text: '(MUMBLING) I am Moana of Motu...'
	},
	{ id: '478', start: 2052.218, end: 2053.511, text: 'Board my boat!' },
	{ id: '479', start: 2056.472, end: 2057.557, text: 'Oh, no.' },
	{
		id: '480',
		start: 2058.808,
		end: 2059.976,
		text: '(GROANING IN FRUSTRATION)'
	},
	{ id: '481', start: 2063.855, end: 2065.565, text: 'No, no, no!' },
	{ id: '482', start: 2077.869, end: 2078.995, text: 'Ocean...' },
	{
		id: '483',
		start: 2079.37,
		end: 2082.081,
		text: 'can I get a little help?'
	},
	{ id: '484', start: 2085.543, end: 2086.669, text: 'No, no.' },
	{ id: '485', start: 2088.171, end: 2089.172, text: 'Please.' },
	{ id: '486', start: 2089.464, end: 2090.465, text: 'Come on!' },
	{ id: '487', start: 2101.893, end: 2103.269, text: 'Help me!' },
	{ id: '488', start: 2103.77, end: 2104.771, text: 'Please!' },
	{ id: '489', start: 2110.818, end: 2111.819, text: '(SCREAMS)' },
	{ id: '490', start: 2125.082, end: 2126.083, text: '(CLUCKING)' },
	{
		id: '491',
		start: 2130.004,
		end: 2131.005,
		text: '(CAWS IN ALARM)'
	},
	{ id: '492', start: 2142.558, end: 2143.559, text: 'Whew!' },
	{ id: '493', start: 2148.731, end: 2149.774, text: 'Um...' },
	{ id: '494', start: 2149.899, end: 2150.983, text: 'What?' },
	{ id: '495', start: 2151.4, end: 2152.944, text: 'I said help me!' },
	{
		id: '496',
		start: 2153.11,
		end: 2155.279,
		text: 'And wrecking my boat?'
	},
	{ id: '497', start: 2155.738, end: 2157.448, text: 'Not helping!' },
	{
		id: '498',
		start: 2159.116,
		end: 2162.036,
		text: 'Fish pee in you all day!'
	},
	{ id: '499', start: 2162.203, end: 2163.329, text: 'So...' },
	{
		id: '500',
		start: 2164.247,
		end: 2165.248,
		text: '(HEIHEI CLUCKING)'
	},
	{ id: '501', start: 2177.343, end: 2178.344, text: 'Maui?' },
	{ id: '502', start: 2185.601, end: 2186.853, text: 'Maui!' },
	{
		id: '503',
		start: 2190.147,
		end: 2192.608,
		text: 'Maui, demigod of the wind and sea...'
	},
	{
		id: '504',
		start: 2192.775,
		end: 2194.485,
		text: 'I am Moana of Motunui.'
	},
	{
		id: '505',
		start: 2194.652,
		end: 2196.195,
		text: 'You will board my boat.'
	},
	{
		id: '506',
		start: 2196.362,
		end: 2198.281,
		text: 'No. You will board my boat.'
	},
	{
		id: '507',
		start: 2198.447,
		end: 2201.2,
		text: 'Yeah. I am Moana of Motunui.'
	},
	{
		id: '508',
		start: 2201.617,
		end: 2204.12,
		text: 'You will board my...'
	},
	{ id: '509', start: 2204.287, end: 2206.372, text: 'Boat! A boat!' },
	{
		id: '510',
		start: 2206.455,
		end: 2209.208,
		text: 'The gods have given me a...'
	},
	{ id: '511', start: 2209.292, end: 2210.293, text: '(SCREAMING)' },
	{
		id: '512',
		start: 2219.093,
		end: 2220.094,
		text: '(MOANA CLEARS THROAT)'
	},
	{
		id: '513',
		start: 2223.556,
		end: 2225.141,
		text: 'Maui, shapeshifter...'
	},
	{
		id: '514',
		start: 2225.641,
		end: 2227.435,
		text: 'demigod of the wind and sea...'
	},
	{
		id: '515',
		start: 2227.852,
		end: 2229.604,
		text: '-- I am Moana of...\n-- Hero of men.'
	},
	{ id: '516', start: 2229.687, end: 2231.188, text: 'What?' },
	{
		id: '517',
		start: 2231.272,
		end: 2233.816,
		text: "It's actually, Maui, shapeshifter,\ndemigod of the wind and sea..."
	},
	{ id: '518', start: 2233.983, end: 2235.151, text: 'hero of men.' },
	{
		id: '519',
		start: 2235.318,
		end: 2238.237,
		text: 'I interrupted.\nFrom the top. Hero of men. Go.'
	},
	{ id: '520', start: 2240.197, end: 2241.198, text: 'I am...' },
	{
		id: '521',
		start: 2241.365,
		end: 2242.533,
		text: 'Sorry, sorry, sorry.'
	},
	{
		id: '522',
		start: 2242.909,
		end: 2244.994,
		text: 'And women. Men and women.'
	},
	{ id: '523', start: 2245.161, end: 2246.162, text: 'Both. All.' },
	{
		id: '524',
		start: 2246.412,
		end: 2247.914,
		text: 'Not a guy, girl thing.'
	},
	{
		id: '525',
		start: 2248.08,
		end: 2249.832,
		text: 'You know, Maui is a hero to all.'
	},
	{
		id: '526',
		start: 2249.999,
		end: 2251.167,
		text: "You're doing great.\n(CLICKS TONGUE)"
	},
	{
		id: '527',
		start: 2251.5,
		end: 2253.044,
		text: "What? No! I'm here to..."
	},
	{ id: '528', start: 2253.21, end: 2254.587, text: 'Of course.' },
	{ id: '529', start: 2254.754, end: 2255.922, text: 'Yes, yes, yes.' },
	{
		id: '530',
		start: 2256.422,
		end: 2258.883,
		text: 'Maui always has time for his fans.'
	},
	{
		id: '531',
		start: 2260.176,
		end: 2261.427,
		text: 'When you use a bird to write with...'
	},
	{
		id: '532',
		start: 2262.845,
		end: 2264.347,
		text: "it's called tweeting."
	},
	{
		id: '533',
		start: 2268.1,
		end: 2270.853,
		text: '(CHUCKLES) I know, not every day\nyou get a chance to meet your hero.'
	},
	{
		id: '534',
		start: 2272.063,
		end: 2273.856,
		text: 'You are not my hero.'
	},
	{
		id: '535',
		start: 2274.023,
		end: 2276.567,
		text: "And I'm not here\nso you can sign my oar!"
	},
	{
		id: '536',
		start: 2276.734,
		end: 2279.362,
		text: "I'm here 'cause\nyou stole the heart of Te Fiti!"
	},
	{
		id: '537',
		start: 2279.528,
		end: 2281.572,
		text: 'And you will board my boat...'
	},
	{
		id: '538',
		start: 2281.739,
		end: 2284.909,
		text: 'and sail across the sea and put it back!'
	},
	{ id: '539', start: 2284.992, end: 2286.118, text: 'Um...' },
	{
		id: '540',
		start: 2286.202,
		end: 2288.955,
		text: "Yeah, it almost sounded\nlike you don't like me..."
	},
	{
		id: '541',
		start: 2289.121,
		end: 2291.04,
		text: 'which is impossible because...'
	},
	{
		id: '542',
		start: 2291.207,
		end: 2293,
		text: 'I got stuck here for 1,000 years...'
	},
	{
		id: '543',
		start: 2293.167,
		end: 2295.419,
		text: 'trying to get the heart\nas a gift for you mortals.'
	},
	{
		id: '544',
		start: 2295.586,
		end: 2298.881,
		text: 'So you could have the power\nto create life itself.'
	},
	{
		id: '545',
		start: 2299.048,
		end: 2302.426,
		text: 'Yeah. So, what I believe\nyou were trying to say...'
	},
	{
		id: '546',
		start: 2302.593,
		end: 2303.594,
		text: 'is "thank you."'
	},
	{
		id: '547',
		start: 2303.761,
		end: 2305.221,
		text: '-- "Thank you?"\n-- You\'re welcome.'
	},
	{
		id: '548',
		start: 2305.388,
		end: 2306.389,
		text: 'What? No, no, no!'
	},
	{
		id: '549',
		start: 2306.555,
		end: 2307.89,
		text: "I didn't... I wasn't..."
	},
	{
		id: '550',
		start: 2308.057,
		end: 2309.1,
		text: 'Why would I ever say that?'
	},
	{ id: '551', start: 2309.266, end: 2310.476, text: 'Okay, okay.' },
	{
		id: '552',
		start: 2311.06,
		end: 2314.438,
		text: "I see what's happening Yeah"
	},
	{
		id: '553',
		start: 2314.605,
		end: 2317.566,
		text: "You're face to face with greatness and it's strange"
	},
	{
		id: '554',
		start: 2317.733,
		end: 2319.318,
		text: "You don't even know how you feel"
	},
	{ id: '555', start: 2319.61, end: 2321.112, text: "It's adorable" },
	{
		id: '556',
		start: 2321.404,
		end: 2324.156,
		text: "Well it's nice to see that humans never change"
	},
	{
		id: '557',
		start: 2324.323,
		end: 2327.576,
		text: "Open your eyes Let's begin"
	},
	{
		id: '558',
		start: 2327.743,
		end: 2328.786,
		text: "Yes, it's really me"
	},
	{
		id: '559',
		start: 2328.953,
		end: 2330.913,
		text: "It's Maui Breathe it in"
	},
	{
		id: '560',
		start: 2331.122,
		end: 2332.748,
		text: "I know it's a lot"
	},
	{
		id: '561',
		start: 2332.915,
		end: 2334.834,
		text: 'The hair The bod'
	},
	{
		id: '562',
		start: 2335.418,
		end: 2337.753,
		text: "When you're staring at a demigod"
	},
	{
		id: '563',
		start: 2338.421,
		end: 2340.589,
		text: 'What can I say except'
	},
	{ id: '564', start: 2340.756, end: 2341.757, text: "You're welcome" },
	{
		id: '565',
		start: 2342.591,
		end: 2345.261,
		text: 'For the tides, the sun, the sky'
	},
	{
		id: '566',
		start: 2345.678,
		end: 2347.763,
		text: "Hey, it's okay, it's okay"
	},
	{ id: '567', start: 2347.93, end: 2349.598, text: "You're welcome" },
	{
		id: '568',
		start: 2349.765,
		end: 2352.643,
		text: "I'm just an ordinary demiguy Hey!"
	},
	{
		id: '569',
		start: 2352.81,
		end: 2355.938,
		text: 'What has two thumbs and pulled up the sky'
	},
	{
		id: '570',
		start: 2356.105,
		end: 2357.94,
		text: 'When you were waddling yay high?'
	},
	{ id: '571', start: 2358.107, end: 2359.233, text: 'This guy' },
	{
		id: '572',
		start: 2359.4,
		end: 2363.738,
		text: 'When the nights got cold\nWho stole you fire from down below?'
	},
	{
		id: '573',
		start: 2364.238,
		end: 2366.115,
		text: "You're looking at him yo"
	},
	{
		id: '574',
		start: 2366.282,
		end: 2369.952,
		text: 'Oh also I lassoed the sun'
	},
	{ id: '575', start: 2370.411, end: 2371.412, text: "You're welcome" },
	{
		id: '576',
		start: 2371.62,
		end: 2373.956,
		text: 'To stretch your days and bring you fun'
	},
	{
		id: '577',
		start: 2374.123,
		end: 2376.917,
		text: 'Also I harnessed the breeze'
	},
	{ id: '578', start: 2377.334, end: 2378.335, text: "You're welcome" },
	{
		id: '579',
		start: 2378.502,
		end: 2380.796,
		text: 'To fill your sails and shake your trees'
	},
	{
		id: '580',
		start: 2381.255,
		end: 2384.925,
		text: "So what can I say except\nYou're welcome"
	},
	{
		id: '581',
		start: 2385.092,
		end: 2387.553,
		text: 'For the islands I pulled from the sea'
	},
	{
		id: '582',
		start: 2388.137,
		end: 2390.347,
		text: "There's no need to pray\nIt's okay"
	},
	{ id: '583', start: 2390.514, end: 2391.849, text: "You're welcome" },
	{
		id: '584',
		start: 2391.974,
		end: 2395.811,
		text: "Ha, I guess it's just my way of being me"
	},
	{ id: '585', start: 2395.978, end: 2396.979, text: "You're welcome" },
	{ id: '586', start: 2397.646, end: 2399.273, text: "You're welcome" },
	{
		id: '587',
		start: 2399.815,
		end: 2400.983,
		text: 'Well come to think of it'
	},
	{
		id: '588',
		start: 2401.65,
		end: 2403.235,
		text: 'Kid, honestly I could go on and on'
	},
	{
		id: '589',
		start: 2403.652,
		end: 2405.071,
		text: 'I could explain every natural phenomenon'
	},
	{
		id: '590',
		start: 2405.488,
		end: 2408.491,
		text: 'The tide, the grass, the ground\nOh that was Maui just messing around'
	},
	{
		id: '591',
		start: 2408.949,
		end: 2410.493,
		text: 'I killed an eel\nI buried its guts'
	},
	{
		id: '592',
		start: 2410.659,
		end: 2411.994,
		text: 'Sprouted a tree\nNow you got coconuts'
	},
	{
		id: '593',
		start: 2412.495,
		end: 2413.954,
		text: "What's the lesson?\nWhat is the take away?"
	},
	{
		id: '594',
		start: 2414.205,
		end: 2415.706,
		text: "Don't mess with Maui\nwhen he's on a breakaway"
	},
	{
		id: '595',
		start: 2416.165,
		end: 2419.043,
		text: 'And the tapestry here on my skin\nIs a map of the victories I win'
	},
	{
		id: '596',
		start: 2419.502,
		end: 2421.003,
		text: "Look where I've been\nI make everything happen"
	},
	{
		id: '597',
		start: 2421.378,
		end: 2423.464,
		text: "Look at that\nMean Mini-Maui just tickety tappin'"
	},
	{ id: '598', start: 2423.631, end: 2425.174, text: 'Ha ha Ha ha' },
	{ id: '599', start: 2425.341, end: 2427.218, text: 'Ha ha\nHey' },
	{
		id: '600',
		start: 2427.384,
		end: 2430.346,
		text: "Well anyway let me say\nYou're welcome"
	},
	{ id: '601', start: 2430.513, end: 2431.68, text: "You're welcome" },
	{
		id: '602',
		start: 2431.847,
		end: 2434.475,
		text: 'For the wonderful world you know'
	},
	{
		id: '603',
		start: 2434.642,
		end: 2437.52,
		text: "Hey, it's okay, it's okay\nYou're welcome"
	},
	{ id: '604', start: 2437.686, end: 2438.729, text: "You're welcome" },
	{
		id: '605',
		start: 2439.063,
		end: 2441.524,
		text: 'Well come to think of it\nI gotta go'
	},
	{
		id: '606',
		start: 2441.69,
		end: 2444.568,
		text: "Hey it's your day to say\nYou're welcome"
	},
	{ id: '607', start: 2444.735, end: 2445.861, text: "You're welcome" },
	{
		id: '608',
		start: 2446.028,
		end: 2448.531,
		text: "'Cause I'm gonna need that boat"
	},
	{
		id: '609',
		start: 2448.948,
		end: 2451.784,
		text: "I'm sailing away away\nYou're welcome"
	},
	{ id: '610', start: 2451.867, end: 2452.91, text: "You're welcome" },
	{
		id: '611',
		start: 2453.244,
		end: 2455.329,
		text: "'Cause Maui can do everything but float"
	},
	{
		id: '612',
		start: 2455.496,
		end: 2457.373,
		text: "-- You're welcome\n-- You're welcome"
	},
	{
		id: '613',
		start: 2457.54,
		end: 2459.708,
		text: "-- You're welcome\n-- You're welcome"
	},
	{ id: '614', start: 2459.875, end: 2460.876, text: 'Huh?' },
	{ id: '615', start: 2461.21, end: 2462.211, text: 'And thank you!' },
	{ id: '616', start: 2463.129, end: 2464.13, text: 'Hey!' },
	{
		id: '617',
		start: 2464.421,
		end: 2467.716,
		text: 'Let me out! You lying, slimy son of a...'
	},
	{ id: '618', start: 2468.05, end: 2469.468, text: '(HUMMING)' },
	{ id: '619', start: 2469.552, end: 2471.387, text: "You're welcome" },
	{
		id: '620',
		start: 2473.222,
		end: 2474.515,
		text: "You're so welcome."
	},
	{
		id: '621',
		start: 2480.104,
		end: 2482.356,
		text: "No. I'm not going to Te Fiti\nwith some kid."
	},
	{
		id: '622',
		start: 2482.439,
		end: 2483.44,
		text: "I'm going to get my hook."
	},
	{
		id: '623',
		start: 2483.899,
		end: 2485.734,
		text: "You have yours and\nI'm not Maui without mine."
	},
	{
		id: '624',
		start: 2487.903,
		end: 2489.113,
		text: 'Okay, talk to the back.'
	},
	{ id: '625', start: 2494.91, end: 2496.078, text: 'Boat snack.' },
	{ id: '626', start: 2497.288, end: 2498.289, text: '(SCREAMING)' },
	{
		id: '627',
		start: 2522.062,
		end: 2525.733,
		text: 'Good riddance,\nyou filthy pile of pebbles.'
	},
	{
		id: '628',
		start: 2526.233,
		end: 2528.569,
		text: "Oh, no, no, no.\nDon't look at me like that."
	},
	{
		id: '629',
		start: 2528.736,
		end: 2531.28,
		text: "It's a beautiful cave.\nShe's gonna love it."
	},
	{
		id: '630',
		start: 2531.864,
		end: 2535.034,
		text: "And I'm going to love you in ma belly."
	},
	{
		id: '631',
		start: 2535.576,
		end: 2537.62,
		text: "Now, let's fatten you up, drumstick."
	},
	{
		id: '632',
		start: 2560.809,
		end: 2563.145,
		text: 'I could watch that all day.'
	},
	{
		id: '633',
		start: 2563.27,
		end: 2564.98,
		text: 'Okay. Enjoy the island.'
	},
	{ id: '634', start: 2565.314, end: 2566.482, text: 'Maui, out.' },
	{ id: '635', start: 2566.649, end: 2568.067, text: 'No! Stop!' },
	{
		id: '636',
		start: 2568.234,
		end: 2570.152,
		text: 'Hey! You have to put back the heart!'
	},
	{ id: '637', start: 2585.709, end: 2586.752, text: '(CLUCKS)' },
	{
		id: '638',
		start: 2586.835,
		end: 2588.42,
		text: 'Did not see that coming.'
	},
	{
		id: '639',
		start: 2590.506,
		end: 2593.592,
		text: 'I am Moana of Motunui.'
	},
	{
		id: '640',
		start: 2593.759,
		end: 2595.094,
		text: 'This is my canoe...'
	},
	{
		id: '641',
		start: 2595.261,
		end: 2596.845,
		text: 'and you will journey to...'
	},
	{
		id: '642',
		start: 2600.099,
		end: 2601.725,
		text: 'All right, get over it. We gotta move.'
	},
	{
		id: '643',
		start: 2603.852,
		end: 2604.937,
		text: "And she's back."
	},
	{
		id: '644',
		start: 2605.271,
		end: 2607.648,
		text: 'I am Moana of Motunui...'
	},
	{
		id: '645',
		start: 2612.695,
		end: 2613.988,
		text: 'it was Moana, right?'
	},
	{ id: '646', start: 2614.071, end: 2615.197, text: 'Yes.' },
	{
		id: '647',
		start: 2615.656,
		end: 2617.866,
		text: 'And you will restore the heart!'
	},
	{
		id: '648',
		start: 2629.211,
		end: 2630.379,
		text: "All right. I'm out."
	},
	{ id: '649', start: 2635.676, end: 2636.885, text: 'Oh, come on!' },
	{
		id: '650',
		start: 2637.97,
		end: 2639.555,
		text: 'What is your problem?'
	},
	{
		id: '651',
		start: 2641.307,
		end: 2643.058,
		text: 'Are you afraid of it?'
	},
	{ id: '652', start: 2643.35, end: 2644.727, text: 'No! No.' },
	{
		id: '653',
		start: 2644.81,
		end: 2646.27,
		text: "(CHUCKLES NERVOUSLY)\nI'm not afraid."
	},
	{
		id: '654',
		start: 2650.065,
		end: 2652.234,
		text: "Stay out of it\nor you're sleeping in my armpit."
	},
	{ id: '655', start: 2652.401, end: 2653.402, text: 'You, stop it.' },
	{
		id: '656',
		start: 2653.569,
		end: 2656.238,
		text: 'That is not a heart. it is a curse.'
	},
	{
		id: '657',
		start: 2656.405,
		end: 2658.532,
		text: 'The second I took it, I got blasted outta the sky...'
	},
	{
		id: '658',
		start: 2658.699,
		end: 2659.867,
		text: 'and I lost my hook.'
	},
	{
		id: '659',
		start: 2660.034,
		end: 2661.201,
		text: 'Get it away from me.'
	},
	{ id: '660', start: 2661.66, end: 2663.037, text: 'Get this away?' },
	{
		id: '661',
		start: 2663.37,
		end: 2665.164,
		text: "Hey, hey, hey! I'm a demigod, okay?"
	},
	{
		id: '662',
		start: 2665.331,
		end: 2666.999,
		text: 'Stop that. I will smite you!'
	},
	{
		id: '663',
		start: 2667.166,
		end: 2668.834,
		text: 'You wanna get smote?'
	},
	{ id: '664', start: 2669.001, end: 2670.002, text: 'Smotten?' },
	{
		id: '665',
		start: 2671.211,
		end: 2673.672,
		text: "Listen, that thing doesn't give you\npower to create life..."
	},
	{
		id: '666',
		start: 2673.839,
		end: 2675.549,
		text: "it's a homing beacon of death."
	},
	{
		id: '667',
		start: 2675.716,
		end: 2678.01,
		text: "If you don't put it away,\nbad things are gonna come for it."
	},
	{
		id: '668',
		start: 2678.427,
		end: 2680.179,
		text: 'Come for this? The heart?'
	},
	{
		id: '669',
		start: 2680.429,
		end: 2681.388,
		text: 'You mean this heart right here?'
	},
	{
		id: '670',
		start: 2681.472,
		end: 2682.473,
		text: "Don't, you can't\nraise your voice like that!"
	},
	{
		id: '671',
		start: 2682.598,
		end: 2684.058,
		text: '-- Come and get it!\n-- (MAUI SHUSHING)'
	},
	{
		id: '672',
		start: 2684.224,
		end: 2685.434,
		text: 'You are gonna get us killed!'
	},
	{
		id: '673',
		start: 2685.934,
		end: 2689.104,
		text: "No, I'm gonna get us to Te Fiti,\nso you can put it back."
	},
	{ id: '674', start: 2689.271, end: 2690.272, text: 'Thank you.' },
	{
		id: '675',
		start: 2690.439,
		end: 2691.607,
		text: "You're welcome."
	},
	{ id: '676', start: 2696.528, end: 2697.613, text: 'Kakamora.' },
	{ id: '677', start: 2697.78, end: 2699.031, text: 'Kaka-what?' },
	{
		id: '678',
		start: 2699.198,
		end: 2700.616,
		text: 'Murdering little pirates.'
	},
	{
		id: '679',
		start: 2701.575,
		end: 2704.203,
		text: "Wonder what they're here for."
	},
	{
		id: '680',
		start: 2708.707,
		end: 2710.918,
		text: "They're kinda cute."
	},
	{ id: '681', start: 2728.685, end: 2729.686, text: 'Ocean!' },
	{
		id: '682',
		start: 2729.853,
		end: 2731.647,
		text: 'Do something! Help us!'
	},
	{
		id: '683',
		start: 2731.98,
		end: 2734.233,
		text: "The ocean doesn't help you,\nyou help yourself!"
	},
	{
		id: '684',
		start: 2734.4,
		end: 2735.901,
		text: 'Tighten the halyard. Bind the stays!'
	},
	{
		id: '685',
		start: 2737.778,
		end: 2739.071,
		text: "You can't sail?"
	},
	{ id: '686', start: 2739.321, end: 2740.614, text: 'I, uh...' },
	{
		id: '687',
		start: 2740.697,
		end: 2742.324,
		text: 'I am self-taught.'
	},
	{
		id: '688',
		start: 2753.71,
		end: 2755.838,
		text: "Can't you shapeshift or something?"
	},
	{
		id: '689',
		start: 2756.004,
		end: 2757.047,
		text: 'Do you see my hook?'
	},
	{
		id: '690',
		start: 2757.214,
		end: 2758.799,
		text: 'No magic hook, no magic powers!'
	},
	{
		id: '691',
		start: 2784.533,
		end: 2786.577,
		text: 'Their boat is turning into more boats!'
	},
	{ id: '692', start: 2789.58, end: 2790.706, text: '(HORN BLOWING)' },
	{
		id: '693',
		start: 2806.18,
		end: 2808.682,
		text: 'Yep, I just did that.'
	},
	{ id: '694', start: 2814.354, end: 2815.522, text: 'MOANA: No, no!' },
	{ id: '695', start: 2816.857, end: 2818.609, text: 'Heihei!' },
	{ id: '696', start: 2831.83, end: 2833.04, text: 'Maui!' },
	{
		id: '697',
		start: 2833.207,
		end: 2834.208,
		text: 'They took the heart!'
	},
	{
		id: '698',
		start: 2836.668,
		end: 2837.753,
		text: "That's a chicken."
	},
	{
		id: '699',
		start: 2837.92,
		end: 2839.922,
		text: 'The heart is in the...\n(FRUSTRATED GRUNTING)'
	},
	{
		id: '700',
		start: 2840.005,
		end: 2841.006,
		text: 'We have to get him back!'
	},
	{ id: '701', start: 2846.553, end: 2847.554, text: 'Maui!' },
	{ id: '702', start: 2848.514, end: 2850.14, text: 'Cheeeehoooo!' },
	{
		id: '703',
		start: 2862.194,
		end: 2863.862,
		text: 'There! Right there!'
	},
	{ id: '704', start: 2864.029, end: 2865.03, text: "You're turning?" },
	{
		id: '705',
		start: 2865.197,
		end: 2866.323,
		text: 'What are you doing?'
	},
	{ id: '706', start: 2866.49, end: 2867.616, text: 'Escaping!' },
	{ id: '707', start: 2867.908, end: 2868.951, text: 'The heart!' },
	{
		id: '708',
		start: 2869.284,
		end: 2870.911,
		text: "Forget it! You'll never get it back!"
	},
	{
		id: '709',
		start: 2871.078,
		end: 2873.08,
		text: 'Besides, you got a better one.'
	},
	{ id: '710', start: 2873.163, end: 2874.164, text: 'Hey!' },
	{
		id: '711',
		start: 2874.248,
		end: 2875.249,
		text: 'What am I gonna steer with?'
	},
	{
		id: '712',
		start: 2876.542,
		end: 2878.126,
		text: "They're just gonna kill ya!"
	},
	{ id: '713', start: 2882.464, end: 2883.549, text: 'Coconuts.' },
	{ id: '714', start: 2926.425, end: 2927.634, text: 'Got it!' },
	{ id: '715', start: 2931.388, end: 2932.389, text: 'Hey!' },
	{ id: '716', start: 2948.405, end: 2949.406, text: 'MOANA: Yeah!' },
	{ id: '717', start: 2950.49, end: 2951.491, text: 'We did it!' },
	{
		id: '718',
		start: 2953.035,
		end: 2954.995,
		text: 'Congratulations on not being dead, girlie.'
	},
	{
		id: '719',
		start: 2955.287,
		end: 2956.538,
		text: 'You surprise me.'
	},
	{
		id: '720',
		start: 2956.955,
		end: 2958.915,
		text: "But I'm still not taking that thing back."
	},
	{
		id: '721',
		start: 2960.584,
		end: 2963.462,
		text: 'You wanna get to Te Fiti you gotta\ngo through a whole ocean of bad.'
	},
	{
		id: '722',
		start: 2963.754,
		end: 2964.963,
		text: 'Not to mention Te Kā.'
	},
	{ id: '723', start: 2966.506, end: 2967.883, text: 'Lava monster?' },
	{
		id: '724',
		start: 2968.342,
		end: 2970.052,
		text: 'Ever defeat a lava monster?'
	},
	{ id: '725', start: 2970.719, end: 2972.929, text: 'No. Have you?' },
	{
		id: '726',
		start: 2980.437,
		end: 2983.649,
		text: "I'm not going on a suicide mission\nwith some mortal."
	},
	{
		id: '727',
		start: 2984.399,
		end: 2987.027,
		text: "You can't restore the heart without me..."
	},
	{
		id: '728',
		start: 2987.194,
		end: 2988.945,
		text: 'and me says no.'
	},
	{
		id: '729',
		start: 2989.78,
		end: 2991.406,
		text: "I'm getting my hook."
	},
	{
		id: '730',
		start: 2992.407,
		end: 2993.408,
		text: 'End of discussion.'
	},
	{
		id: '731',
		start: 3000.332,
		end: 3002.417,
		text: "You'd be a hero."
	},
	{
		id: '732',
		start: 3004.711,
		end: 3006.797,
		text: "That's what you're all about, right?"
	},
	{
		id: '733',
		start: 3006.963,
		end: 3009.8,
		text: 'Little girl, I am a hero.'
	},
	{
		id: '734',
		start: 3009.966,
		end: 3011.426,
		text: 'Maybe you were.'
	},
	{ id: '735', start: 3011.593, end: 3012.719, text: 'But now...' },
	{
		id: '736',
		start: 3012.886,
		end: 3015.806,
		text: "now you're just the guy\nwho stole the heart of Te Fiti."
	},
	{
		id: '737',
		start: 3015.972,
		end: 3018.266,
		text: 'The guy who cursed the world.'
	},
	{
		id: '738',
		start: 3019.685,
		end: 3021.019,
		text: "You're no one's hero."
	},
	{
		id: '739',
		start: 3021.103,
		end: 3022.354,
		text: '(SCOFFS) No one?'
	},
	{ id: '740', start: 3032.03, end: 3033.031, text: 'But...' },
	{ id: '741', start: 3033.657, end: 3035.2, text: 'put this back...' },
	{
		id: '742',
		start: 3035.367,
		end: 3037.119,
		text: 'save the world...'
	},
	{
		id: '743',
		start: 3037.369,
		end: 3039.287,
		text: "you'd be everyone's hero."
	},
	{ id: '744', start: 3044, end: 3047.129, text: 'Maui! Maui! Maui!' },
	{
		id: '745',
		start: 3047.796,
		end: 3049.464,
		text: "You're so amazing!"
	},
	{
		id: '746',
		start: 3050.048,
		end: 3052.759,
		text: "We'd never make it without my hook.\nNot past Te Kā."
	},
	{
		id: '747',
		start: 3052.926,
		end: 3054.01,
		text: 'Then we get your hook.'
	},
	{
		id: '748',
		start: 3054.344,
		end: 3057.889,
		text: 'We get your hook, take out Te Kā,\nrestore the heart.'
	},
	{
		id: '749',
		start: 3058.056,
		end: 3060.684,
		text: "Unless you don't wanna be..."
	},
	{
		id: '750',
		start: 3060.851,
		end: 3063.979,
		text: 'Maui, demigod of the wind and sea.'
	},
	{ id: '751', start: 3064.146, end: 3065.647, text: 'Hero to...' },
	{ id: '752', start: 3066.064, end: 3067.232, text: 'all.' },
	{
		id: '753',
		start: 3070.902,
		end: 3072.487,
		text: 'First, we get my hook.'
	},
	{
		id: '754',
		start: 3072.863,
		end: 3074.239,
		text: 'Then save the world.'
	},
	{ id: '755', start: 3074.322, end: 3075.323, text: 'Deal?' },
	{ id: '756', start: 3075.449, end: 3076.45, text: 'Deal.' },
	{ id: '757', start: 3080.829, end: 3081.872, text: 'Worth a shot.' },
	{
		id: '758',
		start: 3083.039,
		end: 3084.708,
		text: 'Okay, we go east.'
	},
	{
		id: '759',
		start: 3085.876,
		end: 3087.043,
		text: 'To the lair of Tamatoa.'
	},
	{
		id: '760',
		start: 3089.087,
		end: 3092.674,
		text: "If anyone has my hook,\nit's that beady-eyed bottom-feeder."
	},
	{
		id: '761',
		start: 3105.187,
		end: 3106.563,
		text: 'Teach me to sail.'
	},
	{
		id: '762',
		start: 3108.94,
		end: 3112.235,
		text: 'My job is to deliver Maui\nacross the great ocean.'
	},
	{ id: '763', start: 3112.402, end: 3113.403, text: 'I should...' },
	{
		id: '764',
		start: 3114.78,
		end: 3116.698,
		text: 'I should be sailing.'
	},
	{
		id: '765',
		start: 3117.032,
		end: 3118.867,
		text: "It's called wayfinding, princess."
	},
	{
		id: '766',
		start: 3119.534,
		end: 3121.411,
		text: "And it's not just sails and knots..."
	},
	{
		id: '767',
		start: 3121.745,
		end: 3124.206,
		text: "it's seeing where you're going in your mind."
	},
	{
		id: '768',
		start: 3124.539,
		end: 3126.416,
		text: 'Knowing where you are...'
	},
	{
		id: '769',
		start: 3126.75,
		end: 3128.168,
		text: "by knowing where you've been."
	},
	{
		id: '770',
		start: 3128.335,
		end: 3130.67,
		text: "Okay, first, I'm not a princess."
	},
	{
		id: '771',
		start: 3131.213,
		end: 3132.297,
		text: 'I am the daughter of the chief.'
	},
	{
		id: '772',
		start: 3132.464,
		end: 3133.632,
		text: '-- Same difference.\n-- No.'
	},
	{
		id: '773',
		start: 3133.799,
		end: 3136.426,
		text: 'If you wear a dress,\nand you have an animal sidekick...'
	},
	{
		id: '774',
		start: 3136.593,
		end: 3137.719,
		text: "you're a princess."
	},
	{
		id: '775',
		start: 3138.011,
		end: 3139.095,
		text: 'You are not a wayfinder.'
	},
	{
		id: '776',
		start: 3139.554,
		end: 3142.682,
		text: 'You will never be a wayfinder,\nyou will never be a...'
	},
	{
		id: '777',
		start: 3148.021,
		end: 3150.315,
		text: 'Really? Blow dart in my butt cheek?'
	},
	{
		id: '778',
		start: 3155.695,
		end: 3158.323,
		text: 'You are a bad person.'
	},
	{
		id: '779',
		start: 3158.698,
		end: 3160.242,
		text: 'If you can talk, you can teach.'
	},
	{ id: '780', start: 3160.408, end: 3161.409, text: 'Wayfinding.' },
	{
		id: '781',
		start: 3162.661,
		end: 3164.412,
		text: 'Lesson one. Hit it.'
	},
	{ id: '782', start: 3165.789, end: 3166.79, text: '(GROANS)' },
	{ id: '783', start: 3167.04, end: 3168.25, text: 'Pull the sheet.' },
	{ id: '784', start: 3169, end: 3170.627, text: 'Not the sheet.' },
	{ id: '785', start: 3170.794, end: 3171.795, text: 'No.' },
	{ id: '786', start: 3171.878, end: 3172.879, text: 'Nope.' },
	{ id: '787', start: 3173.046, end: 3175.006, text: 'Nope. No.' },
	{
		id: '788',
		start: 3176.049,
		end: 3177.759,
		text: 'Tried that one already.'
	},
	{
		id: '789',
		start: 3181.137,
		end: 3184.933,
		text: "You're measuring the stars,\nnot giving the sky a high-five."
	},
	{
		id: '790',
		start: 3186.309,
		end: 3189.187,
		text: "If the current's warm,\nyou're going the right way."
	},
	{ id: '791', start: 3191.106, end: 3192.607, text: "It's cold." },
	{
		id: '792',
		start: 3192.774,
		end: 3195.402,
		text: "Wait, it's getting warmer. (GASPS)"
	},
	{
		id: '793',
		start: 3195.569,
		end: 3199.531,
		text: 'Aah! That is disgusting!\nWhat is wrong with you?'
	},
	{
		id: '794',
		start: 3199.614,
		end: 3200.615,
		text: '(MAUI CHUCKLES)'
	},
	{ id: '795', start: 3207.497, end: 3208.498, text: '(GROANS)' },
	{ id: '796', start: 3216.172, end: 3217.465, text: "We're here?" },
	{
		id: '797',
		start: 3218.3,
		end: 3220.677,
		text: 'See, told you I could do it!'
	},
	{ id: '798', start: 3229.06, end: 3230.395, text: 'Motunui?' },
	{ id: '799', start: 3231.605, end: 3233.189, text: "I'm home?" },
	{
		id: '800',
		start: 3236.818,
		end: 3238.528,
		text: '-- TUI: Moana!\n-- Dad?'
	},
	{ id: '801', start: 3239.321, end: 3240.989, text: 'SINA: Moana!' },
	{ id: '802', start: 3241.239, end: 3242.324, text: 'Mom?' },
	{ id: '803', start: 3243.7, end: 3244.868, text: 'Help!' },
	{ id: '804', start: 3246.745, end: 3247.746, text: 'No!' },
	{ id: '805', start: 3248.288, end: 3249.414, text: 'Moana!' },
	{ id: '806', start: 3249.831, end: 3250.832, text: '(GASPS)' },
	{
		id: '807',
		start: 3252.25,
		end: 3254.002,
		text: 'MAUI: Enjoy your beauty rest?'
	},
	{
		id: '808',
		start: 3254.294,
		end: 3256.838,
		text: 'You know,\na real wayfinder never sleeps...'
	},
	{
		id: '809',
		start: 3257.005,
		end: 3259.633,
		text: 'so they actually get\nwhere they need to go.'
	},
	{
		id: '810',
		start: 3260.3,
		end: 3261.676,
		text: 'Muscle up, buttercup.'
	},
	{ id: '811', start: 3262.302, end: 3263.803, text: "We're here." },
	{
		id: '812',
		start: 3265.305,
		end: 3267.474,
		text: "You're sure this guy's gonna have your hook?"
	},
	{
		id: '813',
		start: 3267.933,
		end: 3269.893,
		text: "Tamatoa? Oh, he'll have it."
	},
	{
		id: '814',
		start: 3270.31,
		end: 3274.064,
		text: "He's a scavenger. Collects stuff.\nThinks it makes him look cool."
	},
	{ id: '815', start: 3274.147, end: 3275.148, text: 'Ah!' },
	{
		id: '816',
		start: 3275.941,
		end: 3277.776,
		text: 'And for Tamatoa, trust me...'
	},
	{
		id: '817',
		start: 3277.943,
		end: 3280.487,
		text: 'my hook is the coolest collectible.'
	},
	{
		id: '818',
		start: 3280.862,
		end: 3282.572,
		text: 'And he lives up there?'
	},
	{ id: '819', start: 3285.575, end: 3286.576, text: 'No,no,no.' },
	{
		id: '820',
		start: 3286.743,
		end: 3288.161,
		text: "That's just the entrance..."
	},
	{ id: '821', start: 3288.328, end: 3290.538, text: 'to Lalotai.' },
	{
		id: '822',
		start: 3290.872,
		end: 3291.957,
		text: '(GASPS) Lalotai?'
	},
	{
		id: '823',
		start: 3292.123,
		end: 3293.875,
		text: 'Realm of monsters?'
	},
	{
		id: '824',
		start: 3294.501,
		end: 3296.419,
		text: "We're going to the realm of monsters?"
	},
	{ id: '825', start: 3296.836, end: 3299.047, text: 'We? No. Me.' },
	{
		id: '826',
		start: 3299.506,
		end: 3302.634,
		text: 'You are gonna stay here\nwith the other chicken. (CLUCKING)'
	},
	{
		id: '827',
		start: 3304.427,
		end: 3306.137,
		text: "That's what I'm talking about. Gimme some."
	},
	{
		id: '828',
		start: 3307.472,
		end: 3309.683,
		text: 'Come on. That was a good one.\nHow do you not get it?'
	},
	{
		id: '829',
		start: 3309.849,
		end: 3312.06,
		text: "I called her a chicken,\nthere's a chicken on the boat."
	},
	{
		id: '830',
		start: 3312.352,
		end: 3313.895,
		text: "I know she's human,\nbut that's not the..."
	},
	{
		id: '831',
		start: 3314.062,
		end: 3315.605,
		text: 'You know what? Forget it. Forget it!'
	},
	{
		id: '832',
		start: 3315.772,
		end: 3317.232,
		text: "I'm not explaining it to you."
	},
	{
		id: '833',
		start: 3317.399,
		end: 3319.025,
		text: "Cause then it's not funny."
	},
	{ id: '834', start: 3321.403, end: 3322.57, text: '(GRUNTING)' },
	{
		id: '835',
		start: 3327.617,
		end: 3328.702,
		text: '(MOANA GRUNTING)'
	},
	{ id: '836', start: 3330.245, end: 3331.246, text: '(GROANS)' },
	{
		id: '837',
		start: 3332.789,
		end: 3334.874,
		text: 'So, daughter of the chief...'
	},
	{
		id: '838',
		start: 3335.041,
		end: 3336.501,
		text: 'I thought you stayed in the village.'
	},
	{
		id: '839',
		start: 3336.668,
		end: 3338.378,
		text: 'You know, kissing babies and things.'
	},
	{
		id: '840',
		start: 3339.379,
		end: 3341.297,
		text: "Hey, I'm just trying to understand..."
	},
	{
		id: '841',
		start: 3341.464,
		end: 3343.883,
		text: 'why your people decided to send...'
	},
	{
		id: '842',
		start: 3344.05,
		end: 3346.136,
		text: 'How do I phrase this? You.'
	},
	{
		id: '843',
		start: 3346.302,
		end: 3349.556,
		text: "My people didn't send me."
	},
	{ id: '844', start: 3349.723, end: 3350.89, text: 'The ocean did.' },
	{ id: '845', start: 3351.057, end: 3352.267, text: 'The ocean?' },
	{ id: '846', start: 3352.434, end: 3353.435, text: 'Makes sense.' },
	{
		id: '847',
		start: 3353.518,
		end: 3355.186,
		text: "You're what, eight? Can't sail."
	},
	{
		id: '848',
		start: 3355.353,
		end: 3356.563,
		text: 'Obvious choice.'
	},
	{
		id: '849',
		start: 3356.73,
		end: 3360.108,
		text: 'It chose me for a reason.'
	},
	{
		id: '850',
		start: 3360.275,
		end: 3361.86,
		text: "If the ocean's so smart..."
	},
	{
		id: '851',
		start: 3362.027,
		end: 3365.113,
		text: "why didn't it just take the heart\nback to Te Fiti itself?"
	},
	{
		id: '852',
		start: 3365.28,
		end: 3367.032,
		text: 'Or bring me my hook?'
	},
	{
		id: '853',
		start: 3367.198,
		end: 3369.451,
		text: "The ocean's straight up kooky-dooks."
	},
	{
		id: '854',
		start: 3370.577,
		end: 3372.328,
		text: "But I'm sure it's not wrong about you."
	},
	{
		id: '855',
		start: 3373.121,
		end: 3375.415,
		text: "You're the Chosen One!"
	},
	{
		id: '856',
		start: 3391.014,
		end: 3394.392,
		text: 'The ocean chose you for a reason.'
	},
	{
		id: '857',
		start: 3394.559,
		end: 3397.145,
		text: "If you start singing,\nI'm gonna throw up."
	},
	{
		id: '858',
		start: 3397.896,
		end: 3399.981,
		text: 'So, not seeing an entrance.'
	},
	{
		id: '859',
		start: 3400.44,
		end: 3402.317,
		text: 'Yes, because it only appears...'
	},
	{
		id: '860',
		start: 3402.484,
		end: 3404.319,
		text: 'after a human sacrifice.'
	},
	{
		id: '861',
		start: 3406.362,
		end: 3407.697,
		text: 'Kidding. (LAUGHS)'
	},
	{ id: '862', start: 3407.864, end: 3409.115, text: 'So serious.' },
	{ id: '863', start: 3412.202, end: 3413.203, text: '(COUGHING)' },
	{
		id: '864',
		start: 3418.833,
		end: 3420.126,
		text: '(SHOUTING IN FOREIGN LANGUAGE)'
	},
	{ id: '865', start: 3432.847, end: 3433.848, text: "Don't worry..." },
	{
		id: '866',
		start: 3434.099,
		end: 3436.184,
		text: "it's a lot farther down than it looks."
	},
	{ id: '867', start: 3436.351, end: 3437.352, text: 'Cheeeehoooo!' },
	{
		id: '868',
		start: 3442.69,
		end: 3445.568,
		text: 'I am still falling!'
	},
	{
		id: '869',
		start: 3445.944,
		end: 3446.945,
		text: '(WATER SPLASHES)'
	},
	{
		id: '870',
		start: 3447.695,
		end: 3448.863,
		text: 'You can do this.'
	},
	{ id: '871', start: 3449.572, end: 3450.698, text: 'Go!' },
	{
		id: '872',
		start: 3471.678,
		end: 3474.43,
		text: 'And he sticks the landing.'
	},
	{ id: '873', start: 3474.722, end: 3475.723, text: 'Huh?' },
	{
		id: '874',
		start: 3476.891,
		end: 3479.102,
		text: "What? Dum-dum, she's not even here."
	},
	{
		id: '875',
		start: 3479.269,
		end: 3481.604,
		text: "No mortal's gonna jump\ninto the realm of..."
	},
	{ id: '876', start: 3481.771, end: 3482.814, text: 'Huh?' },
	{
		id: '877',
		start: 3487.068,
		end: 3488.987,
		text: "Well, she's dead."
	},
	{
		id: '878',
		start: 3489.821,
		end: 3491.656,
		text: "Okay, let's get my hook."
	},
	{
		id: '879',
		start: 3502.584,
		end: 3503.918,
		text: 'Ew! Ew, ew, ew, ew.'
	},
	{ id: '880', start: 3505.92, end: 3506.921, text: '(PANTING)' },
	{ id: '881', start: 3508.256, end: 3509.257, text: '(SCREECHING)' },
	{
		id: '882',
		start: 3521.936,
		end: 3524.105,
		text: '(CREATURE GROWLING)'
	},
	{
		id: '883',
		start: 3552.717,
		end: 3554.802,
		text: "Maui's fishhook!"
	},
	{ id: '884', start: 3554.969, end: 3556.346, text: 'Yeah! (GROANS)' },
	{ id: '885', start: 3556.679, end: 3558.223, text: '(GASPS) Sorry!' },
	{
		id: '886',
		start: 3558.389,
		end: 3559.39,
		text: 'I thought you were a monster...'
	},
	{
		id: '887',
		start: 3559.557,
		end: 3560.808,
		text: 'But I found your hook.'
	},
	{
		id: '888',
		start: 3560.975,
		end: 3563.102,
		text: "And, you're right, this Tamatoa guy\nreally likes his treasure."
	},
	{ id: '889', start: 3563.269, end: 3564.27, text: 'Stay.' },
	{
		id: '890',
		start: 3564.437,
		end: 3566.648,
		text: "What? No. I'm the one who found..."
	},
	{
		id: '891',
		start: 3566.856,
		end: 3568.316,
		text: 'Listen. For a thousand years...'
	},
	{
		id: '892',
		start: 3568.483,
		end: 3570.693,
		text: "I've only been thinking of\nkeeping this hair silky..."
	},
	{
		id: '893',
		start: 3570.86,
		end: 3571.903,
		text: 'getting my hook...'
	},
	{
		id: '894',
		start: 3572.07,
		end: 3573.655,
		text: 'and being awesome again.'
	},
	{
		id: '895',
		start: 3573.821,
		end: 3576.199,
		text: "And it's not getting screwed up\nby a mortal..."
	},
	{
		id: '896',
		start: 3576.366,
		end: 3580.078,
		text: 'who has no business\ninside of a monster cave, except...'
	},
	{ id: '897', start: 3581.746, end: 3583.331, text: 'Except...' },
	{ id: '898', start: 3583.498, end: 3584.707, text: 'maybe as bait.' },
	{ id: '899', start: 3584.874, end: 3586.084, text: 'Huh?' },
	{ id: '900', start: 3586.668, end: 3587.835, text: 'Wow!' },
	{
		id: '901',
		start: 3588.002,
		end: 3590.046,
		text: 'The shiny, glittery cave.'
	},
	{
		id: '902',
		start: 3590.213,
		end: 3591.547,
		text: 'And just like me...'
	},
	{
		id: '903',
		start: 3591.714,
		end: 3594.342,
		text: 'it is covered in sparkly treasure.'
	},
	{
		id: '904',
		start: 3594.509,
		end: 3596.386,
		text: 'Sparkle, sparkle, sparkle.'
	},
	{
		id: '905',
		start: 3596.552,
		end: 3598.012,
		text: "You're not selling it!"
	},
	{
		id: '906',
		start: 3598.179,
		end: 3600.098,
		text: "This is stupid!\nI'm just gonna walk up and get it!"
	},
	{
		id: '907',
		start: 3600.265,
		end: 3602.725,
		text: 'You go up there, he will kill you.\nJust stick to the plan.'
	},
	{
		id: '908',
		start: 3604.936,
		end: 3607.23,
		text: 'Oh, when he shows up, keep him distracted.'
	},
	{
		id: '909',
		start: 3607.397,
		end: 3608.898,
		text: 'Make him talk about himself.'
	},
	{
		id: '910',
		start: 3609.065,
		end: 3611.192,
		text: 'He loves bragging about\nhow great he is.'
	},
	{
		id: '911',
		start: 3611.359,
		end: 3612.86,
		text: 'You two must get along swell.'
	},
	{
		id: '912',
		start: 3613.278,
		end: 3615.029,
		text: 'No, not since I ripped off his leg.'
	},
	{
		id: '913',
		start: 3615.697,
		end: 3617.365,
		text: 'You ripped off his...'
	},
	{ id: '914', start: 3617.532, end: 3618.533, text: 'Maui?' },
	{ id: '915', start: 3626.708, end: 3628.126, text: '(LAUGHING)' },
	{
		id: '916',
		start: 3628.209,
		end: 3629.544,
		text: 'What have we here?'
	},
	{
		id: '917',
		start: 3630.461,
		end: 3634.257,
		text: "It's a sparkly, shiny... Wait a minute."
	},
	{ id: '918', start: 3634.465, end: 3635.466, text: '(YELPS)' },
	{
		id: '919',
		start: 3635.633,
		end: 3637.552,
		text: "Ugh! It's a human!"
	},
	{
		id: '920',
		start: 3637.719,
		end: 3641.389,
		text: 'What are you doing down here, in the realm of the...'
	},
	{
		id: '921',
		start: 3641.556,
		end: 3642.974,
		text: 'Just pick an eye, babe.'
	},
	{
		id: '922',
		start: 3643.141,
		end: 3644.767,
		text: "I can't concentrate\non what I'm saying if you keep..."
	},
	{
		id: '923',
		start: 3645.31,
		end: 3647.228,
		text: 'Yeah, pick one, pick one!'
	},
	{
		id: '924',
		start: 3647.729,
		end: 3649.731,
		text: "You're a funny-looking little thing, aren't you?"
	},
	{
		id: '925',
		start: 3649.897,
		end: 3651.316,
		text: "Don't! That's my gramma's!"
	},
	{
		id: '926',
		start: 3651.482,
		end: 3652.567,
		text: "That's my gramma's!"
	},
	{
		id: '927',
		start: 3652.734,
		end: 3653.818,
		text: 'I ate my gramma!'
	},
	{
		id: '928',
		start: 3653.985,
		end: 3656.446,
		text: 'And it took a week,\ncause she was absolutely humongous.'
	},
	{
		id: '929',
		start: 3656.612,
		end: 3658.239,
		text: 'Why are you here?'
	},
	{
		id: '930',
		start: 3659.449,
		end: 3660.908,
		text: "Cause you're amazing!"
	},
	{
		id: '931',
		start: 3661.075,
		end: 3666.414,
		text: 'And we mortals have heard of the tale\nof the crab who became a legend!'
	},
	{
		id: '932',
		start: 3666.581,
		end: 3669.125,
		text: 'And I just had to know...'
	},
	{
		id: '933',
		start: 3669.292,
		end: 3671.836,
		text: 'how you became so...'
	},
	{ id: '934', start: 3672.17, end: 3674.464, text: 'crabulous?' },
	{
		id: '935',
		start: 3675.256,
		end: 3679.093,
		text: 'Are you just trying to get me\nto talk about myself?'
	},
	{
		id: '936',
		start: 3680.428,
		end: 3682.138,
		text: 'Because if you are...'
	},
	{
		id: '937',
		start: 3682.305,
		end: 3684.349,
		text: 'I will gladly do so.'
	},
	{ id: '938', start: 3684.432, end: 3685.433, text: 'Huh?' },
	{ id: '939', start: 3685.516, end: 3686.934, text: 'In song form!' },
	{
		id: '940',
		start: 3689.27,
		end: 3692.774,
		text: "Well, Tamatoa hasn't always been this glam"
	},
	{
		id: '941',
		start: 3692.94,
		end: 3695.276,
		text: 'I was a drab little crab once'
	},
	{
		id: '942',
		start: 3696.652,
		end: 3699.364,
		text: 'Now I know I can be happy as a clam'
	},
	{
		id: '943',
		start: 3699.53,
		end: 3701.783,
		text: "Because I'm beautiful, baby"
	},
	{
		id: '944',
		start: 3702.95,
		end: 3704.118,
		text: 'And did your granny say'
	},
	{
		id: '945',
		start: 3704.285,
		end: 3705.995,
		text: 'Listen to your heart'
	},
	{
		id: '946',
		start: 3706.162,
		end: 3708.956,
		text: 'Be who you are on the inside'
	},
	{
		id: '947',
		start: 3709.123,
		end: 3712.46,
		text: 'I need three words\nTo tear her argument apart'
	},
	{
		id: '948',
		start: 3712.627,
		end: 3713.961,
		text: 'Your granny lied'
	},
	{
		id: '949',
		start: 3714.128,
		end: 3715.838,
		text: "I'd rather be shiny"
	},
	{
		id: '950',
		start: 3716.005,
		end: 3718.883,
		text: 'Like a treasure\nFrom a sunken pirate wreck'
	},
	{
		id: '951',
		start: 3719.05,
		end: 3722.512,
		text: 'Scrub the deck\nAnd make it look shiny'
	},
	{
		id: '952',
		start: 3722.678,
		end: 3725.515,
		text: "I will sparkle like a\nWealthy woman's neck"
	},
	{
		id: '953',
		start: 3726.015,
		end: 3728.226,
		text: "Just a sec\nDon't ya know"
	},
	{
		id: '954',
		start: 3728.393,
		end: 3732.23,
		text: 'Fish are dumb, dumb, dumb\nThey chase anything that glitters'
	},
	{
		id: '955',
		start: 3732.647,
		end: 3733.8559999999998,
		text: 'Beginners'
	},
	{
		id: '956',
		start: 3734.148,
		end: 3736.484,
		text: 'Oh, and here they come, come, come'
	},
	{
		id: '957',
		start: 3736.651,
		end: 3738.694,
		text: 'To the brightest thing that glitters'
	},
	{
		id: '958',
		start: 3738.861,
		end: 3739.862,
		text: 'Mm, fish dinners'
	},
	{
		id: '959',
		start: 3740.029,
		end: 3742.407,
		text: 'I just love free food'
	},
	{
		id: '960',
		start: 3742.99,
		end: 3745.868,
		text: 'And you look like seafood'
	},
	{
		id: '961',
		start: 3747.245,
		end: 3749.08,
		text: 'MAUI: Hey, crab cake!'
	},
	{ id: '962', start: 3753, end: 3754.377, text: "I'm back." },
	{ id: '963', start: 3755.67, end: 3757.922, text: "It's Maui Time!" },
	{ id: '964', start: 3758.214, end: 3759.215, text: '(GASPS)' },
	{
		id: '965',
		start: 3760.675,
		end: 3761.843,
		text: 'What do you say, little buddy?'
	},
	{
		id: '966',
		start: 3762.844,
		end: 3764.554,
		text: 'Giant hawk? Coming up!'
	},
	{ id: '967', start: 3764.72, end: 3766.097, text: 'Cheeeehoooo!' },
	{ id: '968', start: 3769.016, end: 3772.103, text: 'Cheeeehoooo!' },
	{
		id: '969',
		start: 3776.566,
		end: 3778.401,
		text: 'Well, well, well.'
	},
	{
		id: '970',
		start: 3778.568,
		end: 3780.862,
		text: "Little Maui's having\ntrouble with his look"
	},
	{
		id: '971',
		start: 3781.737,
		end: 3783.823,
		text: 'Ya little semi-demi-mini-god'
	},
	{
		id: '972',
		start: 3784.365,
		end: 3786.617,
		text: 'Ouch What a terrible performance'
	},
	{
		id: '973',
		start: 3786.784,
		end: 3788.202,
		text: 'Get the hook\nGet it?'
	},
	{
		id: '974',
		start: 3788.369,
		end: 3791.08,
		text: "You don't swing it\nLike you used to, man"
	},
	{
		id: '975',
		start: 3791.747,
		end: 3794.709,
		text: 'Yet I have to give you\nCredit for my start'
	},
	{
		id: '976',
		start: 3794.876,
		end: 3797.837,
		text: 'And your tattoos on the outside'
	},
	{
		id: '977',
		start: 3798.212,
		end: 3801.34,
		text: 'For just like you\nI made myself a work of art'
	},
	{
		id: '978',
		start: 3801.591,
		end: 3803.551,
		text: "I 'll never hide\nI can't"
	},
	{ id: '979', start: 3803.718, end: 3804.76, text: "I'm too shiny" },
	{
		id: '980',
		start: 3804.927,
		end: 3807.889,
		text: 'Watch me dazzle\nLike a diamond in the rough'
	},
	{
		id: '981',
		start: 3808.055,
		end: 3811.392,
		text: 'Strut my stuff\nMy stuff is so shiny'
	},
	{
		id: '982',
		start: 3811.601,
		end: 3814.061,
		text: "Send your armies\nBut they'll never be enough"
	},
	{
		id: '983',
		start: 3814.395,
		end: 3816.898,
		text: "My shell's too tough\nMaui, man"
	},
	{
		id: '984',
		start: 3818.065,
		end: 3820.443,
		text: "You can try, try, try\nBut you can't expect a demigod"
	},
	{
		id: '985',
		start: 3821.277,
		end: 3823.446,
		text: 'To beat a decapod\nLook it up'
	},
	{
		id: '986',
		start: 3823.779,
		end: 3825.406,
		text: 'You Will die, die, die'
	},
	{
		id: '987',
		start: 3825.74,
		end: 3827.408,
		text: "Now it's time for me to take apart"
	},
	{
		id: '988',
		start: 3828.117,
		end: 3829.911,
		text: "Your achin' heart"
	},
	{
		id: '989',
		start: 3830.244,
		end: 3834.665,
		text: 'Far from the ones who abandoned you'
	},
	{
		id: '990',
		start: 3835.374,
		end: 3839.504,
		text: 'Chasing the love of these humans'
	},
	{
		id: '991',
		start: 3839.587,
		end: 3842.632,
		text: 'Who made you feel wanted'
	},
	{
		id: '992',
		start: 3842.965,
		end: 3845.426,
		text: 'You tried to be tough'
	},
	{
		id: '993',
		start: 3845.593,
		end: 3849.639,
		text: "But your armor's just not hard enough"
	},
	{
		id: '994',
		start: 3850.389,
		end: 3853.601,
		text: "Maui\nNow it's time to kick your heinie"
	},
	{
		id: '995',
		start: 3854.435,
		end: 3857.396,
		text: 'Ever seen someone so shiny'
	},
	{
		id: '996',
		start: 3857.772,
		end: 3860.691,
		text: "Soak it in\nCause it's the last you'll ever see"
	},
	{
		id: '997',
		start: 3861.025,
		end: 3862.443,
		text: "C'est la vie\nMon ami"
	},
	{ id: '998', start: 3862.652, end: 3864.111, text: "I'm so shiny" },
	{
		id: '999',
		start: 3864.445,
		end: 3867.073,
		text: 'Now I eat you so\nprepare your final plea'
	},
	{ id: '1000', start: 3867.281, end: 3868.366, text: 'Just for me' },
	{
		id: '1001',
		start: 3869.784,
		end: 3872.119,
		text: "You'll never be quite as shiny"
	},
	{
		id: '1002',
		start: 3872.62,
		end: 3876.457,
		text: 'You wish you were nice and shiny'
	},
	{
		id: '1003',
		start: 3879.168,
		end: 3880.3360000000002,
		text: '-- MOANA: Hey!\n-- Huh?'
	},
	{
		id: '1004',
		start: 3881.045,
		end: 3882.797,
		text: 'I got something shiny for ya!'
	},
	{
		id: '1005',
		start: 3884.966,
		end: 3887.301,
		text: 'The heart of Te Fiti.'
	},
	{
		id: '1006',
		start: 3887.468,
		end: 3889.804,
		text: "You can't run from me!"
	},
	{
		id: '1007',
		start: 3890.096,
		end: 3891.973,
		text: 'Oh, you can. You keep surprising me.'
	},
	{
		id: '1008',
		start: 3894.392,
		end: 3896.686,
		text: "There's only so far you can get on those two little legs."
	},
	{ id: '1009', start: 3897.52, end: 3898.521, text: '(YELLS)' },
	{
		id: '1010',
		start: 3899.9809999999998,
		end: 3901.607,
		text: '(LAUGHING)'
	},
	{
		id: '1011',
		start: 3901.816,
		end: 3903.442,
		text: 'The power of creation...'
	},
	{
		id: '1012',
		start: 3903.776,
		end: 3905.2780000000002,
		text: 'for a crustacean.'
	},
	{
		id: '1013',
		start: 3905.4030000000002,
		end: 3906.904,
		text: 'Where is it? Where is it?'
	},
	{ id: '1014', start: 3907.572, end: 3909.156, text: 'We gotta go!' },
	{
		id: '1015',
		start: 3909.824,
		end: 3910.825,
		text: 'What about the heart?'
	},
	{
		id: '1016',
		start: 3910.992,
		end: 3913.494,
		text: "He can have it. I've got a better one."
	},
	{
		id: '1017',
		start: 3914.829,
		end: 3916.163,
		text: 'Yes, I have the...'
	},
	{ id: '1018', start: 3916.33, end: 3917.331, text: 'Wait a minute.' },
	{
		id: '1019',
		start: 3917.748,
		end: 3920.334,
		text: "I see, she's taken a barnacle\nand she's covered it in..."
	},
	{
		id: '1020',
		start: 3920.501,
		end: 3923.671,
		text: 'bioluminescent algae as a diversion.'
	},
	{
		id: '1021',
		start: 3926.007,
		end: 3927.049,
		text: 'Come back here!'
	},
	{ id: '1022', start: 3931.512, end: 3933.848, text: 'Cheeeehoooo!' },
	{ id: '1023', start: 3934.64, end: 3935.975, text: 'Hey!' },
	{
		id: '1024',
		start: 3936.058,
		end: 3937.685,
		text: 'Did you like the song?'
	},
	{ id: '1025', start: 3943.774, end: 3944.775, text: '(THUDDING)' },
	{ id: '1026', start: 3945.192, end: 3946.569, text: "We're alive!" },
	{ id: '1027', start: 3946.736, end: 3947.737, text: "We're alive!" },
	{ id: '1028', start: 3949.697, end: 3950.698, text: 'Listen...' },
	{
		id: '1029',
		start: 3950.865,
		end: 3952.783,
		text: 'I appreciate what you did down there.'
	},
	{ id: '1030', start: 3952.95, end: 3954.118, text: 'Mm-hmm.' },
	{
		id: '1031',
		start: 3954.201,
		end: 3955.244,
		text: '-- Took guts.\n-- Mm-hmm.'
	},
	{
		id: '1032',
		start: 3955.411,
		end: 3956.579,
		text: '-- But...\n-- Mm-hmm.'
	},
	{ id: '1033', start: 3956.746, end: 3957.747, text: "I'm sorry." },
	{
		id: '1034',
		start: 3957.913,
		end: 3960.958,
		text: "I'm trying to be sincere for once,\nand it feels like you're distracted."
	},
	{
		id: '1035',
		start: 3961.125,
		end: 3963.044,
		text: 'No, no. No way!'
	},
	{
		id: '1036',
		start: 3963.21,
		end: 3965.463,
		text: "Really? Because you're looking at me\nlike I have a..."
	},
	{ id: '1037', start: 3965.546, end: 3966.547, text: '(GASPS)' },
	{ id: '1038', start: 3968.424, end: 3969.55, text: 'shark head.' },
	{
		id: '1039',
		start: 3969.717,
		end: 3972.887,
		text: 'What? Do you have a shark head?'
	},
	{
		id: '1040',
		start: 3973.0950000000003,
		end: 3974.764,
		text: 'Look, the point is...'
	},
	{
		id: '1041',
		start: 3974.889,
		end: 3977.808,
		text: 'for a little girl, child, thing,\nwhatever...'
	},
	{
		id: '1042',
		start: 3977.975,
		end: 3980.5190000000002,
		text: 'who had no business\nbeing down there...'
	},
	{
		id: '1043',
		start: 3980.895,
		end: 3982.438,
		text: 'you did me a solid.'
	},
	{
		id: '1044',
		start: 3982.563,
		end: 3984.69,
		text: 'But you also almost died.'
	},
	{
		id: '1045',
		start: 3985.316,
		end: 3986.901,
		text: "And I couldn't even beat that dumb crab."
	},
	{
		id: '1046',
		start: 3986.984,
		end: 3989.236,
		text: 'So, chances of beating Te Kā?'
	},
	{
		id: '1047',
		start: 3989.4030000000002,
		end: 3990.571,
		text: 'Bupkis.'
	},
	{
		id: '1048',
		start: 3990.738,
		end: 3993.991,
		text: "We're never making it to Te Fiti.\nThis mission is cursed."
	},
	{
		id: '1049',
		start: 3994.367,
		end: 3995.409,
		text: "It's not cursed."
	},
	{ id: '1050', start: 3996.118, end: 3997.119, text: 'Shark head.' },
	{
		id: '1051',
		start: 3997.286,
		end: 3999.997,
		text: 'It is not cursed.'
	},
	{
		id: '1052',
		start: 4005.8360000000002,
		end: 4006.837,
		text: '(GROANS)'
	},
	{ id: '1053', start: 4014.178, end: 4015.179, text: 'Cursed.' },
	{
		id: '1054',
		start: 4019.266,
		end: 4021.435,
		text: 'What can I say except'
	},
	{
		id: '1055',
		start: 4021.602,
		end: 4023.437,
		text: "We're dead soon"
	},
	{
		id: '1056',
		start: 4023.646,
		end: 4025.1059999999998,
		text: "We're dead soon"
	},
	{
		id: '1057',
		start: 4026.148,
		end: 4028.067,
		text: 'Can you at least try?'
	},
	{ id: '1058', start: 4030.611, end: 4032.446, text: 'Giant hawk.' },
	{
		id: '1059',
		start: 4035.282,
		end: 4037.41,
		text: "Hey, it's okay, it's okay\nWe're dead soon"
	},
	{
		id: '1060',
		start: 4038.285,
		end: 4040.204,
		text: "All right, break time's over."
	},
	{ id: '1061', start: 4040.371, end: 4041.372, text: 'Get up.' },
	{
		id: '1062',
		start: 4041.5389999999998,
		end: 4043.874,
		text: 'Why? Are you gonna give me a speech?'
	},
	{
		id: '1063',
		start: 4044.041,
		end: 4047.795,
		text: 'Tell me I can beat Te Kā\ncause I\'m "Maui?"'
	},
	{
		id: '1064',
		start: 4049.547,
		end: 4050.631,
		text: 'Take a hike, Tiny.'
	},
	{
		id: '1065',
		start: 4056.637,
		end: 4059.14,
		text: 'How do you get your tattoos?'
	},
	{
		id: '1066',
		start: 4059.473,
		end: 4061.767,
		text: 'They show up. When I earn them.'
	},
	{
		id: '1067',
		start: 4062.727,
		end: 4065.563,
		text: "How'd you earn that one?\nWhat's that for?"
	},
	{
		id: '1068',
		start: 4065.73,
		end: 4069.024,
		text: "That's man's discovery of Nunya."
	},
	{ id: '1069', start: 4069.191, end: 4070.317, text: "What's Nunya?" },
	{
		id: '1070',
		start: 4070.484,
		end: 4071.819,
		text: 'Nunya business.'
	},
	{
		id: '1071',
		start: 4073.32,
		end: 4074.7799999999997,
		text: "I'll just keep asking."
	},
	{
		id: '1072',
		start: 4077.032,
		end: 4078.033,
		text: "What's it for?"
	},
	{
		id: '1073',
		start: 4078.743,
		end: 4080.828,
		text: 'You need to stop doing that.'
	},
	{
		id: '1074',
		start: 4085.416,
		end: 4087.209,
		text: '-- Back off.\n-- Just tell me what it is.'
	},
	{
		id: '1075',
		start: 4087.376,
		end: 4088.8360000000002,
		text: 'I said back off.'
	},
	{
		id: '1076',
		start: 4089.003,
		end: 4090.671,
		text: "Is it why your hook's not working?"
	},
	{
		id: '1077',
		start: 4106.687,
		end: 4109.44,
		text: "You don't wanna talk, don't talk."
	},
	{
		id: '1078',
		start: 4109.857,
		end: 4111.859,
		text: 'You wanna throw me off the boat...'
	},
	{
		id: '1079',
		start: 4112.234,
		end: 4113.9439999999995,
		text: 'throw me off.'
	},
	{
		id: '1080',
		start: 4114.111,
		end: 4117.448,
		text: "You wanna tell me\nI don't know what I'm doing..."
	},
	{
		id: '1081',
		start: 4117.948,
		end: 4119.575,
		text: "I know I don't."
	},
	{
		id: '1082',
		start: 4120.534,
		end: 4123.704,
		text: 'I have no idea why the ocean chose me.'
	},
	{ id: '1083', start: 4123.871, end: 4125.581, text: "You're right." },
	{
		id: '1084',
		start: 4126.207,
		end: 4130.211,
		text: 'But my island is dying...'
	},
	{ id: '1085', start: 4131.045, end: 4134.048, text: 'so I am here.' },
	{
		id: '1086',
		start: 4134.715,
		end: 4137.092,
		text: "It's just me and you."
	},
	{
		id: '1087',
		start: 4137.259,
		end: 4139.929,
		text: 'And I want to help...'
	},
	{
		id: '1088',
		start: 4140.095,
		end: 4144.391,
		text: "but I can't if you don't let me."
	},
	{ id: '1089', start: 4148.687, end: 4149.688, text: '(SIGHS)' },
	{
		id: '1090',
		start: 4149.772,
		end: 4152.316,
		text: "MAUI: I wasn't born a demigod."
	},
	{
		id: '1091',
		start: 4152.983,
		end: 4155.11,
		text: 'I had human parents.'
	},
	{
		id: '1092',
		start: 4157.488,
		end: 4161.45,
		text: 'They took one look and decided...'
	},
	{
		id: '1093',
		start: 4161.617,
		end: 4164.0779999999995,
		text: 'they did not want me.'
	},
	{
		id: '1094',
		start: 4164.411,
		end: 4166.539,
		text: 'They threw me into the sea...'
	},
	{
		id: '1095',
		start: 4166.997,
		end: 4170.125,
		text: 'like I was nothing.'
	},
	{
		id: '1096',
		start: 4171.669,
		end: 4175.13,
		text: 'Somehow, I was found by the gods.'
	},
	{
		id: '1097',
		start: 4175.2970000000005,
		end: 4176.924,
		text: 'They gave me the hook.'
	},
	{
		id: '1098',
		start: 4177.591,
		end: 4178.759,
		text: 'They made me...'
	},
	{ id: '1099', start: 4179.593, end: 4180.594, text: 'Maui.' },
	{
		id: '1100',
		start: 4181.971,
		end: 4184.64,
		text: 'And back to the humans I went.'
	},
	{
		id: '1101',
		start: 4185.099,
		end: 4188.978,
		text: 'I gave them islands, fire, coconuts.'
	},
	{
		id: '1102',
		start: 4189.979,
		end: 4192.273,
		text: 'Anything they could ever want.'
	},
	{
		id: '1103',
		start: 4192.982,
		end: 4195.276,
		text: 'You took the heart for them.'
	},
	{
		id: '1104',
		start: 4195.985,
		end: 4198.863,
		text: 'You did everything for them.'
	},
	{
		id: '1105',
		start: 4199.697,
		end: 4201.532,
		text: "So they'd love you."
	},
	{
		id: '1106',
		start: 4202.116,
		end: 4205.286,
		text: 'It was never enough.'
	},
	{
		id: '1107',
		start: 4213.377,
		end: 4216.714,
		text: 'Maybe the gods found you for a reason.'
	},
	{
		id: '1108',
		start: 4216.881,
		end: 4220.05,
		text: 'Maybe the ocean brought you to them...'
	},
	{
		id: '1109',
		start: 4220.217,
		end: 4224.305,
		text: 'because it saw someone\nwho was worthy of being saved.'
	},
	{
		id: '1110',
		start: 4225.5560000000005,
		end: 4229.143,
		text: "But the gods aren't the ones who make you Maui."
	},
	{ id: '1111', start: 4229.852, end: 4231.061, text: 'You are.' },
	{ id: '1112', start: 4240.529, end: 4242.364, text: 'Okay, okay.' },
	{
		id: '1113',
		start: 4243.324,
		end: 4245.826,
		text: 'I love you, too, buddy.'
	},
	{ id: '1114', start: 4295.668, end: 4296.877, text: 'Cheeeehoooo!' },
	{
		id: '1115',
		start: 4311.809,
		end: 4312.8099999999995,
		text: 'Yeah!'
	},
	{
		id: '1116',
		start: 4337.001,
		end: 4339.628,
		text: 'Next stop, Te Fiti.'
	},
	{ id: '1117', start: 4386.467, end: 4387.468, text: 'What?' },
	{
		id: '1118',
		start: 4387.634,
		end: 4389.136,
		text: 'I figured it out.'
	},
	{
		id: '1119',
		start: 4390.471,
		end: 4394.183,
		text: 'You know, the ocean used to love\nwhen I pulled up islands...'
	},
	{
		id: '1120',
		start: 4394.349,
		end: 4398.145,
		text: "cause your ancestors\nwould sail her seas and find 'em."
	},
	{
		id: '1121',
		start: 4398.812,
		end: 4401.774,
		text: 'All those new lands, new villages.'
	},
	{
		id: '1122',
		start: 4402.149,
		end: 4404.61,
		text: "It was the water that connected 'em all."
	},
	{
		id: '1123',
		start: 4404.985,
		end: 4406.653,
		text: 'And if I were the ocean...'
	},
	{
		id: '1124',
		start: 4406.82,
		end: 4410.908,
		text: "I think I'd be looking for\na curly-haired non-princess..."
	},
	{
		id: '1125',
		start: 4411.658,
		end: 4413.494,
		text: 'to start that again.'
	},
	{
		id: '1126',
		start: 4413.66,
		end: 4418.04,
		text: "That is literally the nicest thing\nyou've ever said to me."
	},
	{
		id: '1127',
		start: 4419.083,
		end: 4421.21,
		text: 'Probably should have saved it\nfor Te Fiti.'
	},
	{ id: '1128', start: 4422.836, end: 4423.921, text: 'I did.' },
	{
		id: '1129',
		start: 4426.757,
		end: 4428.926,
		text: 'Moana of Motunui...'
	},
	{
		id: '1130',
		start: 4429.259,
		end: 4434.723,
		text: 'I believe you have officially\ndelivered Maui across the great sea.'
	},
	{
		id: '1131',
		start: 4435.849,
		end: 4438.352,
		text: 'Moana! Moana! Moana!'
	},
	{
		id: '1132',
		start: 4438.811,
		end: 4440.604,
		text: "You're so amazing!"
	},
	{ id: '1133', start: 4442.397, end: 4443.398, text: "It's time." },
	{
		id: '1134',
		start: 4461.708,
		end: 4463.252,
		text: 'Go save the world.'
	},
	{ id: '1135', start: 4464.753, end: 4466.38, text: 'Cheeeehoooo!' },
	{ id: '1136', start: 4482.563, end: 4483.564, text: '(GASPS)' },
	{
		id: '1137',
		start: 4483.814,
		end: 4484.8150000000005,
		text: '(ROARING)'
	},
	{ id: '1138', start: 4485.649, end: 4486.65, text: '(GROANS)' },
	{
		id: '1139',
		start: 4486.984,
		end: 4488.6939999999995,
		text: 'Maui!'
	},
	{
		id: '1140',
		start: 4522.644,
		end: 4523.896,
		text: 'What are you doing?'
	},
	{
		id: '1141',
		start: 4524.146,
		end: 4525.814,
		text: 'Finding you a better way in!'
	},
	{
		id: '1142',
		start: 4527.482,
		end: 4529.193,
		text: "-- We won't make it!\n-- Yes, we will!"
	},
	{
		id: '1143',
		start: 4529.359,
		end: 4530.485,
		text: '-- Turn around!\n-- No!'
	},
	{ id: '1144', start: 4530.652, end: 4531.778, text: 'Moana, stop!' },
	{ id: '1145', start: 4531.945, end: 4532.946, text: 'No!' },
	{
		id: '1146',
		start: 4536.533,
		end: 4537.534,
		text: '(BOTH SCREAMING)'
	},
	{ id: '1147', start: 4560.891, end: 4562.643, text: 'Are you okay?' },
	{ id: '1148', start: 4564.186, end: 4565.187, text: 'Maui?' },
	{
		id: '1149',
		start: 4573.028,
		end: 4574.947,
		text: 'I told you to turn back.'
	},
	{
		id: '1150',
		start: 4577.241,
		end: 4578.992,
		text: 'I thought we could make it.'
	},
	{ id: '1151', start: 4579.326, end: 4580.41, text: 'We?' },
	{
		id: '1152',
		start: 4581.87,
		end: 4583.956,
		text: 'I thought I could make it.'
	},
	{
		id: '1153',
		start: 4585.832,
		end: 4587.042,
		text: 'We can fix it.'
	},
	{
		id: '1154',
		start: 4587.209,
		end: 4589.336,
		text: 'It was made by the gods.'
	},
	{
		id: '1155',
		start: 4589.503,
		end: 4591.255,
		text: "You can't fix it!"
	},
	{
		id: '1156',
		start: 4591.546,
		end: 4593.757,
		text: "Next time we'll be more careful."
	},
	{
		id: '1157',
		start: 4594.049,
		end: 4596.093,
		text: 'Te Kā was stuck on the barrier islands.'
	},
	{
		id: '1158',
		start: 4596.26,
		end: 4598.679,
		text: "It's lava, it can't go in the water."
	},
	{
		id: '1159',
		start: 4598.845,
		end: 4600.847,
		text: 'We can find a way around.'
	},
	{
		id: '1160',
		start: 4601.014,
		end: 4602.849,
		text: "I'm not going back."
	},
	{
		id: '1161',
		start: 4604.017,
		end: 4605.5599999999995,
		text: 'We still have to restore the heart.'
	},
	{
		id: '1162',
		start: 4605.852,
		end: 4607.229,
		text: 'My hook is cracked.'
	},
	{
		id: '1163',
		start: 4607.396,
		end: 4609.064,
		text: "One more hit, and it's over."
	},
	{
		id: '1164',
		start: 4609.439,
		end: 4611.316,
		text: 'Maui, you have to restore the heart.'
	},
	{
		id: '1165',
		start: 4611.65,
		end: 4613.36,
		text: 'Without my hook, I am nothing.'
	},
	{
		id: '1166',
		start: 4613.527,
		end: 4614.695,
		text: "That's not true!"
	},
	{
		id: '1167',
		start: 4614.861,
		end: 4617.364,
		text: 'Without my hook, I am nothing!'
	},
	{ id: '1168', start: 4617.572, end: 4618.573, text: '(SHUDDERING)' },
	{
		id: '1169',
		start: 4626.915,
		end: 4628.166,
		text: 'We are only here...'
	},
	{
		id: '1170',
		start: 4628.5419999999995,
		end: 4631.461,
		text: 'because you stole the heart in the first place.'
	},
	{
		id: '1171',
		start: 4632.754,
		end: 4635.382,
		text: "No, we're here because\nthe ocean told you you're special..."
	},
	{
		id: '1172',
		start: 4635.549,
		end: 4637.342000000001,
		text: 'and you believed it.'
	},
	{
		id: '1173',
		start: 4638.593,
		end: 4641.096,
		text: 'I am Moana of Motunui.'
	},
	{
		id: '1174',
		start: 4641.263,
		end: 4643.473,
		text: '-- You will board my boat...\n-- Goodbye, Moana.'
	},
	{
		id: '1175',
		start: 4643.64,
		end: 4644.808,
		text: '...sail across the sea...'
	},
	{
		id: '1176',
		start: 4644.975,
		end: 4646.059,
		text: "I'm not killing myself..."
	},
	{
		id: '1177',
		start: 4646.226000000001,
		end: 4647.477,
		text: "so you can prove you're something you're not!"
	},
	{
		id: '1178',
		start: 4647.644,
		end: 4648.895,
		text: '...and restore the heart of Te Fiti!'
	},
	{
		id: '1179',
		start: 4649.604,
		end: 4651.982,
		text: 'The ocean chose me!'
	},
	{
		id: '1180',
		start: 4652.941,
		end: 4654.651,
		text: 'It chose wrong.'
	},
	{ id: '1181', start: 4664.369, end: 4665.454, text: 'Maui!' },
	{
		id: '1182',
		start: 4680.427,
		end: 4682.929,
		text: 'Why did you bring me here?'
	},
	{
		id: '1183',
		start: 4687.768,
		end: 4689.77,
		text: "I'm not the right person."
	},
	{
		id: '1184',
		start: 4692.606,
		end: 4695.442,
		text: 'You have to choose someone else.'
	},
	{
		id: '1185',
		start: 4697.778,
		end: 4700.322,
		text: 'Choose someone else.'
	},
	{
		id: '1186',
		start: 4701.114,
		end: 4702.4490000000005,
		text: 'Please.'
	},
	{
		id: '1187',
		start: 4719.466,
		end: 4720.467000000001,
		text: '(SOBBING)'
	},
	{ id: '1188', start: 4721.5509999999995, end: 4722.803, text: 'No.' },
	{
		id: '1189',
		start: 4738.693,
		end: 4740.987,
		text: "GRAMMA: You're a long ways\npast the reef."
	},
	{ id: '1190', start: 4742.364, end: 4743.365, text: 'Gramma?' },
	{
		id: '1191',
		start: 4745.367,
		end: 4748.37,
		text: 'Guess I chose the right tattoo.'
	},
	{ id: '1192', start: 4748.829, end: 4749.83, text: 'Gramma!' },
	{
		id: '1193',
		start: 4755.46,
		end: 4757.546,
		text: 'I tried, Gramma.'
	},
	{
		id: '1194',
		start: 4759.464,
		end: 4761.174,
		text: "I couldn't do it."
	},
	{
		id: '1195',
		start: 4761.925,
		end: 4764.428,
		text: "It's not your fault."
	},
	{
		id: '1196',
		start: 4764.594,
		end: 4768.348,
		text: 'I never should have put so much\non your shoulders.'
	},
	{
		id: '1197',
		start: 4769.182,
		end: 4771.184,
		text: 'If you are ready to go home...'
	},
	{
		id: '1198',
		start: 4772.686,
		end: 4774.688,
		text: 'I will be with you.'
	},
	{
		id: '1199',
		start: 4791.246,
		end: 4792.873,
		text: 'Why do you hesitate?'
	},
	{ id: '1200', start: 4794.291, end: 4795.959, text: "I don't know." },
	{
		id: '1201',
		start: 4799.546,
		end: 4801.882,
		text: 'I know a girl from an island'
	},
	{
		id: '1202',
		start: 4802.924,
		end: 4805.594,
		text: 'She stands apart from the crowd'
	},
	{
		id: '1203',
		start: 4806.052,
		end: 4809.055,
		text: 'She loves the sea and her people'
	},
	{
		id: '1204',
		start: 4809.5560000000005,
		end: 4811.725,
		text: 'She makes her whole family proud'
	},
	{
		id: '1205',
		start: 4812.893,
		end: 4815.604,
		text: 'Sometimes the world\nseems against you'
	},
	{
		id: '1206',
		start: 4816.313,
		end: 4819.107,
		text: 'The journey may leave a scar'
	},
	{
		id: '1207',
		start: 4819.273999999999,
		end: 4822.068,
		text: 'But scars can heal and reveal just'
	},
	{ id: '1208', start: 4822.235, end: 4824.821, text: 'Where you are' },
	{
		id: '1209',
		start: 4825.78,
		end: 4828.742,
		text: 'The people you love will change you'
	},
	{
		id: '1210',
		start: 4829.117,
		end: 4831.995,
		text: 'The things you have\nlearned will guide you'
	},
	{
		id: '1211',
		start: 4832.245,
		end: 4835.582,
		text: 'And nothing on earth can silence'
	},
	{
		id: '1212',
		start: 4835.749,
		end: 4838.752,
		text: 'The quiet voice still inside you'
	},
	{
		id: '1213',
		start: 4839.252,
		end: 4842.4220000000005,
		text: 'And when that voice starts to whisper'
	},
	{
		id: '1214',
		start: 4842.589,
		end: 4845.258,
		text: "Moana, you've come so far"
	},
	{ id: '1215', start: 4846.009, end: 4847.761, text: 'Moana, listen' },
	{
		id: '1216',
		start: 4847.928,
		end: 4852.599,
		text: 'Do you know who you are?'
	},
	{
		id: '1217',
		start: 4854.851000000001,
		end: 4856.269,
		text: 'Who am I?'
	},
	{
		id: '1218',
		start: 4858.313,
		end: 4861.775,
		text: 'I am a girl who loves my island'
	},
	{
		id: '1219',
		start: 4862.15,
		end: 4865.737,
		text: 'And the girl who loves the sea'
	},
	{
		id: '1220',
		start: 4866.112,
		end: 4869.1990000000005,
		text: 'It calls me'
	},
	{
		id: '1221',
		start: 4871.284,
		end: 4874.162,
		text: 'I am the daughter of the village chief'
	},
	{
		id: '1222',
		start: 4874.704,
		end: 4877.582,
		text: 'We are descended from voyagers'
	},
	{
		id: '1223',
		start: 4877.999,
		end: 4880.335,
		text: 'Who found their way across the world'
	},
	{ id: '1224', start: 4880.794, end: 4882.754, text: 'They call me' },
	{
		id: '1225',
		start: 4884.464,
		end: 4886.967000000001,
		text: "I've delivered us to where we are"
	},
	{
		id: '1226',
		start: 4887.634,
		end: 4890.303,
		text: 'I have journeyed farther'
	},
	{
		id: '1227',
		start: 4890.804,
		end: 4893.1810000000005,
		text: "I am everything I've learned and more"
	},
	{
		id: '1228',
		start: 4893.557,
		end: 4895.35,
		text: 'Still it calls me'
	},
	{
		id: '1229',
		start: 4897.519,
		end: 4899.813,
		text: "And the call isn't out there at all"
	},
	{
		id: '1230',
		start: 4899.98,
		end: 4902.773999999999,
		text: "It's inside me"
	},
	{
		id: '1231',
		start: 4903.191,
		end: 4905.151,
		text: "It's like the tide"
	},
	{
		id: '1232',
		start: 4905.318,
		end: 4909.573,
		text: 'Always falling and rising'
	},
	{
		id: '1233',
		start: 4910.031,
		end: 4912.492,
		text: 'I will carry you here in my heart'
	},
	{ id: '1234', start: 4912.659, end: 4915.704, text: 'You remind me' },
	{
		id: '1235',
		start: 4915.87,
		end: 4918.832,
		text: 'That come what may'
	},
	{
		id: '1236',
		start: 4918.999,
		end: 4922.002,
		text: 'I know the way'
	},
	{ id: '1237', start: 4922.168, end: 4926.756, text: 'I am Moana' },
	{ id: '1238', start: 4956.87, end: 4957.871, text: '(GRUNTS)' },
	{
		id: '1239',
		start: 4961.207,
		end: 4963.418,
		text: 'I am Moana of Motunui.'
	},
	{
		id: '1240',
		start: 4964.878,
		end: 4965.879,
		text: 'Aboard my boat...'
	},
	{
		id: '1241',
		start: 4966.2119999999995,
		end: 4968.381,
		text: 'I will sail across the sea...'
	},
	{
		id: '1242',
		start: 4968.757,
		end: 4971.718,
		text: 'and restore the heart of Te Fiti.'
	},
	{
		id: '1243',
		start: 5007.921,
		end: 5009.923,
		text: "Te Kā can't follow us into the water."
	},
	{
		id: '1244',
		start: 5010.757,
		end: 5012.258,
		text: 'We make it past the barrier islands...'
	},
	{
		id: '1245',
		start: 5013.093,
		end: 5014.26,
		text: 'we make it to Te Fiti.'
	},
	{
		id: '1246',
		start: 5014.844,
		end: 5016.096,
		text: 'None of which you understand...'
	},
	{
		id: '1247',
		start: 5016.846,
		end: 5018.264,
		text: '-- because you are a chicken.\n-- (CLUCKING)'
	},
	{ id: '1248', start: 5025.23, end: 5026.231, text: '(ROARING)' },
	{ id: '1249', start: 5075.363, end: 5077.157, text: '(GRUNTING)' },
	{ id: '1250', start: 5080.91, end: 5081.911, text: '(YELPS)' },
	{ id: '1251', start: 5084.873, end: 5085.874, text: 'No!' },
	{
		id: '1252',
		start: 5087.1669999999995,
		end: 5089.586,
		text: 'Heihei! No, no, no!'
	},
	{ id: '1253', start: 5091.171, end: 5092.338, text: 'Nice work!' },
	{ id: '1254', start: 5101.723, end: 5102.849, text: 'Te Fiti.' },
	{
		id: '1255',
		start: 5114.9439999999995,
		end: 5115.945,
		text: '(COUGHING)'
	},
	{ id: '1256', start: 5120.2, end: 5121.201, text: '(GRUNTING)' },
	{
		id: '1257',
		start: 5125.079,
		end: 5126.08,
		text: '(EAGLE SCREECHING)'
	},
	{
		id: '1258',
		start: 5128.2080000000005,
		end: 5129.209,
		text: 'Maui!'
	},
	{ id: '1259', start: 5133.88, end: 5134.923, text: 'You came back.' },
	{ id: '1260', start: 5135.298, end: 5136.299, text: '(CHUCKLES)' },
	{ id: '1261', start: 5138.76, end: 5140.053, text: 'But your hook.' },
	{
		id: '1262',
		start: 5140.22,
		end: 5141.721,
		text: 'One more hit and...'
	},
	{
		id: '1263',
		start: 5142.597,
		end: 5144.057,
		text: "Te Kā's gotta catch me first."
	},
	{
		id: '1264',
		start: 5144.516,
		end: 5145.517,
		text: '(TE KĀ ROARING)'
	},
	{
		id: '1265',
		start: 5147.227,
		end: 5148.269,
		text: 'I got your back, Chosen One.'
	},
	{
		id: '1266',
		start: 5149.729,
		end: 5150.73,
		text: 'Go save the world.'
	},
	{
		id: '1267',
		start: 5150.814,
		end: 5151.8150000000005,
		text: 'Maui.'
	},
	{
		id: '1268',
		start: 5152.6900000000005,
		end: 5153.733,
		text: 'Thank you.'
	},
	{
		id: '1269',
		start: 5154.692,
		end: 5155.985,
		text: "You're welcome."
	},
	{
		id: '1270',
		start: 5156.6939999999995,
		end: 5158.279,
		text: 'Cheeeehoooo!'
	},
	{ id: '1271', start: 5162.992, end: 5163.993, text: '(SCREAMING)' },
	{
		id: '1272',
		start: 5177.048,
		end: 5178.174,
		text: 'Hot-hot-hot, hot-hot-hot!'
	},
	{ id: '1273', start: 5189.644, end: 5191.104, text: 'Hey, Te Kā!' },
	{ id: '1274', start: 5191.855, end: 5192.856, text: 'Shark head!' },
	{
		id: '1275',
		start: 5194.4400000000005,
		end: 5195.525,
		text: 'Cheeeehoooo!'
	},
	{ id: '1276', start: 5198.945, end: 5199.946, text: '(GROANS)' },
	{
		id: '1277',
		start: 5205.952,
		end: 5206.9529999999995,
		text: 'Moana!'
	},
	{
		id: '1278',
		start: 5217.2970000000005,
		end: 5219.173,
		text: 'Get the heart to the spiral!'
	},
	{ id: '1279', start: 5257.003, end: 5259.13, text: 'Te Fiti...' },
	{
		id: '1280',
		start: 5259.2970000000005,
		end: 5260.715,
		text: "it's gone."
	},
	{ id: '1281', start: 5273.353, end: 5275.021, text: 'MAUI: Te Kā!' },
	{
		id: '1282',
		start: 5276.814,
		end: 5278.775,
		text: '(SHOUTING IN FOREIGN LANGUAGE)'
	},
	{
		id: '1283',
		start: 5310.974,
		end: 5312.1,
		text: 'Let her come to me.'
	},
	{
		id: '1284',
		start: 5326.364,
		end: 5328.0740000000005,
		text: '(ROARING)'
	},
	{
		id: '1285',
		start: 5335.581,
		end: 5339.085,
		text: 'I have crossed the horizon to find you'
	},
	{
		id: '1286',
		start: 5346.342000000001,
		end: 5348.72,
		text: 'I know your name'
	},
	{
		id: '1287',
		start: 5352.515,
		end: 5356.352,
		text: 'They have stolen the\nheart from inside you'
	},
	{
		id: '1288',
		start: 5361.107,
		end: 5364.193,
		text: 'But this does not define you'
	},
	{
		id: '1289',
		start: 5367.78,
		end: 5371.784,
		text: 'This is not who you are'
	},
	{
		id: '1290',
		start: 5373.4529999999995,
		end: 5378.7080000000005,
		text: 'You know who you are'
	},
	{
		id: '1291',
		start: 5385.548,
		end: 5388.217000000001,
		text: 'Who you truly are.'
	},
	{
		id: '1292',
		start: 5411.3240000000005,
		end: 5412.407999999999,
		text: 'Te Fiti!'
	},
	{
		id: '1293',
		start: 5450.279,
		end: 5451.28,
		text: '(HEIHEI SCREECHING)'
	},
	{
		id: '1294',
		start: 5452.99,
		end: 5454.367,
		text: 'The chicken lives.'
	},
	{
		id: '1295',
		start: 5456.202,
		end: 5458.204,
		text: "I'm sorry about your hook."
	},
	{
		id: '1296',
		start: 5458.704,
		end: 5461.707,
		text: 'Well, hook, no hook...'
	},
	{
		id: '1297',
		start: 5462.2080000000005,
		end: 5463.793,
		text: "I'm Maui."
	},
	{
		id: '1298',
		start: 5482.186,
		end: 5484.48,
		text: '(GASPS) Te Fiti!'
	},
	{
		id: '1299',
		start: 5484.564,
		end: 5485.5650000000005,
		text: '(LAUGHING SHEEPISHLY)'
	},
	{
		id: '1300',
		start: 5485.648,
		end: 5487.483,
		text: 'Hey, I mean, how you been?'
	},
	{
		id: '1301',
		start: 5489.735,
		end: 5490.736,
		text: '(CLEARS THROAT)'
	},
	{
		id: '1302',
		start: 5490.82,
		end: 5493.239,
		text: 'Look, what I did was...'
	},
	{
		id: '1303',
		start: 5493.406,
		end: 5494.8240000000005,
		text: 'wrong.'
	},
	{
		id: '1304',
		start: 5494.991,
		end: 5497.034,
		text: 'I have no excuse.'
	},
	{ id: '1305', start: 5497.66, end: 5498.744, text: "I'm sorry." },
	{ id: '1306', start: 5504.5, end: 5505.543, text: '(GASPS)' },
	{
		id: '1307',
		start: 5507.753,
		end: 5511.257,
		text: "You know, it'd be rude to refuse\na gift from a goddess."
	},
	{ id: '1308', start: 5512.383, end: 5514.26, text: 'Cheeeehoooo!' },
	{ id: '1309', start: 5516.095, end: 5517.096, text: 'Thank you.' },
	{
		id: '1310',
		start: 5517.221,
		end: 5519.765,
		text: 'Your kind gesture is\ndeeply appreciated.'
	},
	{ id: '1311', start: 5519.932, end: 5520.933, text: 'Cheeeehoooo.' },
	{
		id: '1312',
		start: 5569.648999999999,
		end: 5571.067,
		text: 'Gonna miss you, drumstick.'
	},
	{
		id: '1313',
		start: 5571.234,
		end: 5572.318,
		text: 'You could come with us, you know.'
	},
	{
		id: '1314',
		start: 5573.236,
		end: 5576.822,
		text: 'My people are going to need\na master wayfinder.'
	},
	{
		id: '1315',
		start: 5578.3240000000005,
		end: 5580.159,
		text: 'They already have one.'
	},
	{
		id: '1316',
		start: 5598.636,
		end: 5599.762,
		text: 'See you out there, Maui.'
	},
	{
		id: '1317',
		start: 5600.68,
		end: 5602.974,
		text: 'See you out there, Moana.'
	},
	{ id: '1318', start: 5603.641, end: 5604.85, text: 'Cheeeehoooo!' },
	{ id: '1319', start: 5656.193, end: 5657.862, text: 'Mom! Dad!' },
	{ id: '1320', start: 5658.029, end: 5659.196, text: 'Moana!' },
	{
		id: '1321',
		start: 5667.204,
		end: 5671.751,
		text: 'I may have gone\na little ways past the reef.'
	},
	{
		id: '1322',
		start: 5673.085,
		end: 5674.7119999999995,
		text: 'It suits you.'
	},
	{
		id: '1323',
		start: 5674.879,
		end: 5675.921,
		text: "MALE VILLAGER: She's back!"
	},
	{
		id: '1324',
		start: 5676.088,
		end: 5677.089,
		text: '-- FEMALE VILLAGER: Moana!\n-- (PUA SQUEALING)'
	},
	{
		id: '1325',
		start: 5677.255999999999,
		end: 5678.257,
		text: 'MOANA: Pua!'
	},
	{ id: '1326', start: 5680.259, end: 5681.26, text: 'Moana!' },
	{
		id: '1327',
		start: 5683.512000000001,
		end: 5684.847,
		text: 'Welcome home!'
	},
	{
		id: '1328',
		start: 5697.401,
		end: 5698.903,
		text: '(VILLAGERS CHEERING)'
	},
	{
		id: '1329',
		start: 5734.772,
		end: 5736.941,
		text: 'We set a course to find'
	},
	{
		id: '1330',
		start: 5737.108,
		end: 5741.362,
		text: 'A brand new island\neverywhere we roam'
	},
	{
		id: '1331',
		start: 5743.656,
		end: 5746.032999999999,
		text: 'We keep our island in our mind'
	},
	{
		id: '1332',
		start: 5746.575,
		end: 5750.7880000000005,
		text: "And when it's time to find home\nWe know the way"
	},
	{
		id: '1333',
		start: 5752.498,
		end: 5755.501,
		text: 'We are explorers reading every sign'
	},
	{
		id: '1334',
		start: 5756.127,
		end: 5760.339,
		text: 'We tell the stories of our elders\nIn a never-ending chain'
	},
	{
		id: '1335',
		start: 5767.93,
		end: 5772.601000000001,
		text: 'We know the way'
	},
	{
		id: '1336',
		start: 5780.776,
		end: 5782.82,
		text: '(MUSIC PLAYING)'
	},
	{
		id: '1337',
		start: 6367.529,
		end: 6368.905000000001,
		text: 'Shiny'
	},
	{ id: '1338', start: 6369.448, end: 6371.95, text: "I'm so shiny" },
	{
		id: '1339',
		start: 6372.576,
		end: 6374.369000000001,
		text: "Didn't help me though, did it?"
	},
	{
		id: '1340',
		start: 6374.536,
		end: 6376.496,
		text: 'Still upside down here.'
	},
	{
		id: '1341',
		start: 6376.6630000000005,
		end: 6378.915,
		text: 'Just need a little push.'
	},
	{
		id: '1342',
		start: 6379.4580000000005,
		end: 6380.459,
		text: '(GROANS)'
	},
	{
		id: '1343',
		start: 6381.084,
		end: 6382.085,
		text: 'Can we be real?'
	},
	{
		id: '1344',
		start: 6382.252,
		end: 6385.63,
		text: 'If my name was Sebastian\nand I had a cool Jamaican accent...'
	},
	{
		id: '1345',
		start: 6385.7970000000005,
		end: 6387.007,
		text: "you'd totally help me."
	},
	{
		id: '1346',
		start: 6387.174,
		end: 6388.8,
		text: 'You would. You know you would.'
	}
]

const phrasesTr = [
	{ id: '000', start: 0, end: 0, text: '' },
	{ id: '001', start: 55.46, end: 57.045, text: 'В начале' },
	{
		id: '002',
		start: 57.212,
		end: 60.048,
		text: 'был только океан...'
	},
	{
		id: '003',
		start: 60.215,
		end: 64.136,
		text: 'Пока не появилась мать островов.'
	},
	{
		id: '004',
		start: 64.30199999999999,
		end: 66.096,
		text: 'Те Фити.'
	},
	{
		id: '005',
		start: 66.763,
		end: 70.559,
		text: 'В её сердце была самая великая сила на свете.'
	},
	{
		id: '006',
		start: 70.725,
		end: 73.687,
		text: 'Оно могло дарить жизнь.'
	},
	{
		id: '007',
		start: 73.854,
		end: 77.941,
		text: 'И Те Фити поделилась этой силой с миром.'
	},
	{ id: '008', start: 80.527, end: 81.736, text: 'Но со временем' },
	{
		id: '009',
		start: 81.90299999999999,
		end: 84.906,
		text: 'некоторые стали искать сердце Те Фити.'
	},
	{
		id: '010',
		start: 85.07300000000001,
		end: 87.15899999999999,
		text: 'Они верили, что если у них будет её сердце,'
	},
	{
		id: '011',
		start: 87.367,
		end: 90.95400000000001,
		text: 'то им будет подвластна великая сила творения.'
	},
	{
		id: '012',
		start: 91.121,
		end: 93.53999999999999,
		text: 'И однажды'
	},
	{
		id: '013',
		start: 94.124,
		end: 96.626,
		text: 'самый смелый из них'
	},
	{
		id: '014',
		start: 96.793,
		end: 101.173,
		text: 'пересёк океан, чтобы забрать её сердце.'
	},
	{
		id: '015',
		start: 102.46600000000001,
		end: 107.345,
		text: 'Это был полубог ветров и морей.'
	},
	{ id: '016', start: 107.971, end: 109.556, text: 'Это был воин.' },
	{
		id: '017',
		start: 111.18299999999999,
		end: 112.601,
		text: 'И проказник.'
	},
	{
		id: '018',
		start: 115.02000000000001,
		end: 117.27199999999999,
		text: 'Он менял обличья'
	},
	{
		id: '019',
		start: 117.731,
		end: 121.026,
		text: 'с помощью волшебного рыболовного крюка.'
	},
	{ id: '020', start: 122.903, end: 124.112, text: 'А звали его' },
	{ id: '021', start: 125.238, end: 127.199, text: 'Мауи.' },
	{ id: '022', start: 132.217, end: 133.218, text: '(CHUCKLES)' },
	{ id: '023', start: 133.76, end: 134.969, text: '(RUMBLING)' },
	{
		id: '024',
		start: 136.917,
		end: 141.379,
		text: 'Но лишённая сердца Те Фити начала разрушаться.'
	},
	{
		id: '025',
		start: 141.546,
		end: 144.174,
		text: 'Она породила страшную тьму.'
	},
	{
		id: '026',
		start: 162.901,
		end: 164.361,
		text: 'Мауи пытался убежать,'
	},
	{
		id: '027',
		start: 165.07,
		end: 168.115,
		text: 'но он столкнулся с другой охотницей за сердцем.'
	},
	{ id: '028', start: 170.742, end: 172.41, text: 'Это была Те Ка!' },
	{
		id: '029',
		start: 172.577,
		end: 175.413,
		text: 'Демон земли и огня.'
	},
	{
		id: '030',
		start: 183.213,
		end: 186.091,
		text: 'Удар молнии поразил Мауи, он упал с неба,'
	},
	{
		id: '031',
		start: 187.38400000000001,
		end: 189.719,
		text: 'и больше его никто не видел.'
	},
	{
		id: '032',
		start: 190.303,
		end: 194.933,
		text: 'Его волшебный крюк и сердце Те Фити'
	},
	{
		id: '033',
		start: 195.1,
		end: 197.894,
		text: 'затерялись где-то в море.'
	},
	{ id: '034', start: 198.603, end: 200.23, text: 'Где даже сейчас,' },
	{
		id: '035',
		start: 200.397,
		end: 202.399,
		text: '1 000 лет спустя,'
	},
	{
		id: '036',
		start: 202.566,
		end: 205.11,
		text: 'Те Ка и демоны морских глубин'
	},
	{
		id: '037',
		start: 205.277,
		end: 207.279,
		text: 'всё ещё ищут сердце.'
	},
	{
		id: '038',
		start: 207.737,
		end: 211.65800000000002,
		text: 'Они прячутся во тьме, которая будет расти.'
	},
	{
		id: '039',
		start: 211.992,
		end: 214.244,
		text: 'Она прогонит нашу рыбу'
	},
	{
		id: '040',
		start: 214.411,
		end: 217.414,
		text: 'и иссушит жизнь на островах,'
	},
	{
		id: '041',
		start: 217.789,
		end: 221.084,
		text: 'пока всех нас не поглотит'
	},
	{
		id: '042',
		start: 221.251,
		end: 223.92000000000002,
		text: 'кровожадная'
	},
	{
		id: '043',
		start: 224.087,
		end: 226.673,
		text: 'и неизбежная смерть!'
	},
	{
		id: '044',
		start: 228.47899999999998,
		end: 229.814,
		text: '(WAILING)'
	},
	{ id: '045', start: 232.22, end: 233.68, text: 'Но однажды' },
	{
		id: '046',
		start: 233.847,
		end: 235.68200000000002,
		text: 'сердце будет найдено'
	},
	{
		id: '047',
		start: 236.016,
		end: 239.102,
		text: 'тем, кто выйдет за риф,'
	},
	{ id: '048', start: 239.269, end: 240.604, text: 'найдёт Мауи,' },
	{
		id: '049',
		start: 240.77,
		end: 242.856,
		text: 'перевезёт его через великий океан,'
	},
	{
		id: '050',
		start: 243.023,
		end: 245.15,
		text: 'чтобы вернуть на место сердце Те Фити'
	},
	{
		id: '051',
		start: 245.525,
		end: 247.194,
		text: 'и спасти всех нас.'
	},
	{
		id: '052',
		start: 247.944,
		end: 249.613,
		text: 'Спасибо, мама. Хватит.'
	},
	{ id: '053', start: 249.738, end: 250.739, text: 'Папа.' },
	{
		id: '054',
		start: 250.864,
		end: 252.699,
		text: 'Никому нельзя выходить за риф.'
	},
	{
		id: '055',
		start: 252.86599999999999,
		end: 255.952,
		text: 'Здесь безопасно. Нет никакой тьмы.'
	},
	{ id: '056', start: 256.119, end: 257.871, text: 'Никаких демонов.' },
	{
		id: '057',
		start: 260.791,
		end: 261.79200000000003,
		text: 'Демоны!'
	},
	{
		id: '058',
		start: 261.95799999999997,
		end: 264.002,
		text: '-- Никаких демонов, никаких...\n-- Наступает тьма!'
	},
	{
		id: '059',
		start: 264.503,
		end: 268.173,
		text: 'За нашим рифом ничего нет, кроме штормов и бурных морей.'
	},
	{
		id: '060',
		start: 268.34,
		end: 269.466,
		text: 'Меня сейчас вырвет.'
	},
	{
		id: '061',
		start: 269.633,
		end: 271.802,
		text: 'Пока мы сидим на нашем безопасном острове,'
	},
	{
		id: '062',
		start: 272.511,
		end: 273.804,
		text: 'всё будет хорошо.'
	},
	{ id: '063', start: 273.97, end: 275.472, text: 'Легенды не лгут.' },
	{
		id: '064',
		start: 275.639,
		end: 277.224,
		text: 'Кому-то придётся отправиться за риф.'
	},
	{
		id: '065',
		start: 277.557,
		end: 279.43399999999997,
		text: 'Мама, Мотунуи - это рай.'
	},
	{
		id: '066',
		start: 279.81,
		end: 282.354,
		text: 'Кто захочет уплыть отсюда?'
	},
	{
		id: '067',
		start: 295.88,
		end: 297.548,
		text: '(BIRDS SCREECHING)'
	},
	{ id: '068', start: 318.682, end: 320.767, text: 'Кыш, кыш!' },
	{ id: '069', start: 333.835, end: 334.836, text: '(EXCLAIMING)' },
	{
		id: '070',
		start: 339.007,
		end: 340.55,
		text: '(ETHEREAL WHISPERING)'
	},
	{ id: '071', start: 346.472, end: 347.557, text: '(GIGGLING)' },
	{ id: '072', start: 403.946, end: 405.49, text: '(GIGGLING)' },
	{ id: '073', start: 421.451, end: 422.744, text: 'Моана!' },
	{
		id: '074',
		start: 438.093,
		end: 440.679,
		text: 'Вот ты где, Моана.\nЧто ты делаешь? Ты меня напугала.'
	},
	{
		id: '075',
		start: 441.012,
		end: 442.639,
		text: 'А что? Я хочу назад.'
	},
	{
		id: '076',
		start: 442.806,
		end: 445.433,
		text: 'Знаю, знаю. Но туда нельзя.'
	},
	{ id: '077', start: 446.309, end: 447.31, text: 'Это опасно.' },
	{ id: '078', start: 449.312, end: 451.523, text: 'Моана, пойдём.' },
	{
		id: '079',
		start: 451.69,
		end: 453.608,
		text: 'Пойдём обратно в деревню.'
	},
	{
		id: '080',
		start: 455.485,
		end: 457.779,
		text: 'Ты будешь следующим великим вождём\nнашего народа.'
	},
	{
		id: '081',
		start: 457.946,
		end: 460.949,
		text: 'И ты совершишь великие дела,\nмоя рыбка.'
	},
	{
		id: '082',
		start: 461.575,
		end: 465.203,
		text: 'Да. Но сначала ты должна понять,\nгде ты хочешь быть.'
	},
	{ id: '083', start: 477.549, end: 479.342, text: 'Моана' },
	{ id: '084', start: 479.509, end: 481.845, text: 'Вперёд, смелей!' },
	{
		id: '085',
		start: 482.012,
		end: 483.889,
		text: 'Моана, пора тебе узнать'
	},
	{
		id: '086',
		start: 484.055,
		end: 487.851,
		text: 'Деревня Мотунуи это всё, что тебе нужно'
	},
	{
		id: '087',
		start: 488.01800000000003,
		end: 489.936,
		text: 'Танцоры тренируются'
	},
	{
		id: '088',
		start: 490.312,
		end: 492.522,
		text: 'Они танцуют под древнюю песню'
	},
	{
		id: '089',
		start: 492.856,
		end: 495.525,
		text: 'Кому нужна новая песня, когда нам подходит старая'
	},
	{
		id: '090',
		start: 495.901,
		end: 497.527,
		text: 'Эта традиция - наша миссия'
	},
	{
		id: '091',
		start: 497.819,
		end: 500.405,
		text: 'И, Моана, тут столько всего надо делать'
	},
	{
		id: '092',
		start: 500.697,
		end: 501.907,
		text: 'Не споткнись о корень таро'
	},
	{
		id: '093',
		start: 502.157,
		end: 504.242,
		text: 'Вот всё, что тебе нужно'
	},
	{
		id: '094',
		start: 504.534,
		end: 506.369,
		text: 'Мы делим всё, что делаем'
	},
	{
		id: '095',
		start: 506.536,
		end: 508.413,
		text: 'Мы шутим и плетём наши корзины'
	},
	{
		id: '096',
		start: 508.789,
		end: 510.707,
		text: 'Рыбаки возвращаются с моря'
	},
	{ id: '097', start: 511.041, end: 512.542, text: 'Я хочу увидеть' },
	{
		id: '098',
		start: 512.7090000000001,
		end: 514.503,
		text: 'Стой, не спеши'
	},
	{
		id: '099',
		start: 514.836,
		end: 516.338,
		text: 'Моана, оставляйся на суше'
	},
	{
		id: '100',
		start: 516.755,
		end: 518.423,
		text: 'И нам будет нужен вождь'
	},
	{
		id: '101',
		start: 518.757,
		end: 520.509,
		text: '-- Такой, как ты\n-- Такой, как ты'
	},
	{ id: '102', start: 520.884, end: 522.719, text: 'Наступит день' },
	{
		id: '103',
		start: 522.886,
		end: 526.598,
		text: 'Когда ты посмотришь вокруг\nи поймешь, что счастье там'
	},
	{ id: '104', start: 526.765, end: 528.391, text: 'где ты' },
	{
		id: '105',
		start: 528.892,
		end: 530.393,
		text: 'К примеру, возьмём кокос!'
	},
	{
		id: '106',
		start: 530.573,
		end: 532.742,
		text: '-- Что\n-- Рассмотрим его дерево'
	},
	{
		id: '107',
		start: 532.896,
		end: 536.066,
		text: 'И мы используем всё\nЧто нам кокос даёт'
	},
	{
		id: '108',
		start: 536.942,
		end: 538.902,
		text: 'Мы сеть плетём из волокон'
	},
	{ id: '109', start: 539.152, end: 540.779, text: 'И молоко мы пьём' },
	{
		id: '110',
		start: 541.112,
		end: 545.158,
		text: 'Листву поджечь можем ловко\nИ мясо в ней печём'
	},
	{
		id: '111',
		start: 545.408,
		end: 547.16,
		text: 'Кокос - это дар богов!'
	},
	{ id: '112', start: 547.327, end: 548.912, text: 'Еда и вода!' },
	{
		id: '113',
		start: 549.246,
		end: 551.748,
		text: 'Прокормит остров нас всегда!'
	},
	{ id: '114', start: 551.915, end: 553.667, text: 'Уплыть нельзя' },
	{ id: '115', start: 553.834, end: 555.293, text: 'Нам место здесь' },
	{
		id: '116',
		start: 555.46,
		end: 557.087,
		text: 'Где сыто и безопасно'
	},
	{
		id: '117',
		start: 557.254,
		end: 559.172,
		text: 'Как вождь должна любить'
	},
	{
		id: '118',
		start: 559.3389999999999,
		end: 560.841,
		text: 'Народ ты свой'
	},
	{ id: '119', start: 561.466, end: 563.677, text: 'И остров весь' },
	{
		id: '120',
		start: 563.844,
		end: 565.637,
		text: 'Однажды тебе станет ясно'
	},
	{
		id: '121',
		start: 565.804,
		end: 569.558,
		text: 'Что счастье только там\nгде дом родной'
	},
	{
		id: '122',
		start: 575.814,
		end: 580.026,
		text: 'Люблю я танцы с водою\nИ поболтать с волной'
	},
	{
		id: '123',
		start: 580.193,
		end: 584.197,
		text: 'Люблю её шалости, ха!\nМы с морем крови одной'
	},
	{
		id: '124',
		start: 584.364,
		end: 588.285,
		text: 'Считают меня чудачкой\nМол, тронулась головой'
	},
	{
		id: '125',
		start: 588.452,
		end: 592.956,
		text: 'Но главное счастье, внучка, -\nВ мире быть с собой'
	},
	{
		id: '126',
		start: 594.9159999999999,
		end: 599.004,
		text: 'Ты на отца похожа\nУпряма и горда'
	},
	{
		id: '127',
		start: 599.171,
		end: 603.467,
		text: 'Слушай его, только всё же\nОстанься себе верна'
	},
	{
		id: '128',
		start: 603.633,
		end: 607.804,
		text: 'И если душа стремится\nДо новой достать звезды'
	},
	{
		id: '129',
		start: 607.971,
		end: 611.558,
		text: 'Моана, спроси у сердца\nКто же ты'
	},
	{ id: '130', start: 615.479, end: 616.563, text: 'Аха!\nПапа!' },
	{
		id: '131',
		start: 616.771,
		end: 620.192,
		text: 'Я только смотрела на лодки.\nЯ не собиралась на них залезать.'
	},
	{ id: '132', start: 622.748, end: 623.791, text: '(SIGHS)' },
	{
		id: '133',
		start: 623.945,
		end: 627.491,
		text: 'Пойдём со мной.\nЯ хочу тебе кое-что показать.'
	},
	{
		id: '134',
		start: 629.367,
		end: 632.829,
		text: 'Я хотел привести тебя сюда\nс твоего рождения.'
	},
	{
		id: '135',
		start: 633.497,
		end: 635.499,
		text: 'Это священное место.'
	},
	{
		id: '136',
		start: 635.9159999999999,
		end: 637.7090000000001,
		text: 'Место для вождей.'
	},
	{
		id: '137',
		start: 638.0840000000001,
		end: 639.628,
		text: 'Настанет день,'
	},
	{
		id: '138',
		start: 639.795,
		end: 644.716,
		text: 'когда ты придёшь сюда\nи положишь камень на эту гору.'
	},
	{
		id: '139',
		start: 644.883,
		end: 647.427,
		text: 'Как я. Как мой отец.'
	},
	{
		id: '140',
		start: 647.594,
		end: 651.348,
		text: 'И его отец, и все вожди,\nкоторые были у племени.'
	},
	{ id: '141', start: 652.182, end: 653.767, text: 'И в тот день,' },
	{
		id: '142',
		start: 653.934,
		end: 656.186,
		text: 'когда ты положишь свой камень,'
	},
	{
		id: '143',
		start: 656.353,
		end: 659.689,
		text: 'весь этот остров станет ближе к небу.'
	},
	{
		id: '144',
		start: 660.232,
		end: 662.859,
		text: 'Ты будущее нашего народа, Моана.'
	},
	{
		id: '145',
		start: 663.026,
		end: 665.57,
		text: 'Твой народ не там.'
	},
	{ id: '146', start: 665.737, end: 668.49, text: 'Он здесь.' },
	{
		id: '147',
		start: 668.782,
		end: 671.952,
		text: 'Тебе пора стать такой, каким должен быть вождь.'
	},
	{
		id: '148',
		start: 674.037,
		end: 675.539,
		text: '-- Мы сеть плетём из волокон\n-- Мы сеть плетём из волокон'
	},
	{
		id: '149',
		start: 675.622,
		end: 677.707,
		text: '-- И молоко мы пьём\n-- И молоко мы пьём'
	},
	{
		id: '150',
		start: 677.874,
		end: 679.96,
		text: '-- Листву поджечь можем ловко\n-- Поём молитвы мы хором'
	},
	{
		id: '151',
		start: 680.127,
		end: 682.003,
		text: '-- И мясо в ней печём\n-- Чтоб сытым был наш дом'
	},
	{
		id: '152',
		start: 682.17,
		end: 684.005,
		text: '-- Народ свято верит в нас!\n-- О да!'
	},
	{ id: '153', start: 684.172, end: 685.674, text: 'Тут наша земля' },
	{
		id: '154',
		start: 685.841,
		end: 687.968,
		text: 'Прокормит остров нас всегда'
	},
	{ id: '155', start: 688.135, end: 690.178, text: 'Уплыть нельзя' },
	{ id: '156', start: 690.345, end: 691.68, text: 'Что ж, решено' },
	{
		id: '157',
		start: 691.847,
		end: 695.642,
		text: 'Останусь там, где народ мой\nЧтоб дальше жил беззаботно'
	},
	{ id: '158', start: 695.809, end: 697.936, text: 'Дом родной' },
	{ id: '159', start: 698.103, end: 699.813, text: 'Знаю одно' },
	{
		id: '160',
		start: 699.98,
		end: 702.023,
		text: 'Я буду сильной и доброй'
	},
	{
		id: '161',
		start: 702.19,
		end: 703.775,
		text: 'И станет чашею полной'
	},
	{ id: '162', start: 703.942, end: 705.986, text: 'Дом родной' },
	{
		id: '163',
		start: 706.153,
		end: 707.946,
		text: 'Ведь все дороги ведут'
	},
	{ id: '164', start: 708.113, end: 709.698, text: 'В дом родной' },
	{
		id: '165',
		start: 710.073,
		end: 711.992,
		text: 'И счастье может дать лишь'
	},
	{ id: '166', start: 712.367, end: 713.952, text: 'Дом родной' },
	{
		id: '167',
		start: 714.1610000000001,
		end: 716.079,
		text: 'Дом родной'
	},
	{
		id: '168',
		start: 720.959,
		end: 724.504,
		text: 'Как только дождь, у меня течёт\nкрыша, сколько веток ни добавляй.'
	},
	{ id: '169', start: 724.671, end: 725.672, text: 'Готово!' },
	{
		id: '170',
		start: 725.839,
		end: 726.965,
		text: 'Дело было не в ветках.'
	},
	{
		id: '171',
		start: 729.301,
		end: 730.677,
		text: 'Ветер сдвинул с места столб.'
	},
	{
		id: '172',
		start: 732.179,
		end: 733.93,
		text: 'Вкусная свинина!\n-- (PUA GRUNTING)'
	},
	{
		id: '173',
		start: 736.725,
		end: 738.56,
		text: 'То есть я не... Я не то хотела...'
	},
	{
		id: '174',
		start: 738.727,
		end: 742.898,
		text: 'Что?\nМеня зовут, мне пора... До свидания!'
	},
	{
		id: '175',
		start: 743.953,
		end: 745.329,
		text: 'VILLAGER: Ow! Ow! Ow!'
	},
	{ id: '176', start: 745.442, end: 746.693, text: 'Ты молодец.' },
	{ id: '177', start: 746.86, end: 748.278, text: 'Долго ещё?' },
	{
		id: '178',
		start: 748.374,
		end: 750.084,
		text: '(CONTINUES SCREAMING)'
	},
	{ id: '179', start: 750.238, end: 751.782, text: 'Почто готово.' },
	{
		id: '180',
		start: 753.17,
		end: 754.922,
		text: '(DRUM BEATS PLAYING)'
	},
	{
		id: '181',
		start: 766.254,
		end: 769.174,
		text: 'Странно, что этот петух\nклюёт камень.'
	},
	{
		id: '182',
		start: 769.633,
		end: 774.679,
		text: 'Кажется, у него совсем нет ума,\nа ведь без ума никуда.'
	},
	{
		id: '183',
		start: 774.846,
		end: 778.016,
		text: 'Может, лучше его сварить?'
	},
	{
		id: '184',
		start: 778.934,
		end: 782.145,
		text: 'Иногда наши достоинства\nспрятаны глубоко.'
	},
	{
		id: '185',
		start: 783.688,
		end: 786.024,
		text: 'В некоторых случаях очень глубоко.'
	},
	{
		id: '186',
		start: 786.162,
		end: 788.372,
		text: 'Но я уверена, что Хейхей на так прост,'
	},
	{
		id: '187',
		start: 788.456,
		end: 789.623,
		text: '-- как кажется.\n-- (HEIHEi CAWING)'
	},
	{ id: '188', start: 796.535, end: 797.869, text: 'Наш урожай.' },
	{
		id: '189',
		start: 798.0360000000001,
		end: 801.54,
		text: 'Сегодня утром\nя чистила кокосы, и...'
	},
	{ id: '190', start: 807.963, end: 808.9639999999999, text: 'Ну...' },
	{
		id: '191',
		start: 809.131,
		end: 814.094,
		text: 'Надо срубить больные деревья\nи посадить новую рощу.'
	},
	{ id: '192', start: 814.427, end: 815.428, text: 'Вон там.' },
	{ id: '193', start: 817.639, end: 819.057, text: 'Спасибо, Моана.' },
	{ id: '194', start: 819.224, end: 821.226, text: 'Она молодец.' },
	{
		id: '195',
		start: 825.188,
		end: 826.606,
		text: 'Ты хорошо справляешься.'
	},
	{ id: '196', start: 826.773, end: 827.774, text: 'Вождь?' },
	{
		id: '197',
		start: 828.942,
		end: 830.777,
		text: '(PANTING)\nВы должны кое на что посмотреть.'
	},
	{
		id: '198',
		start: 830.944,
		end: 832.696,
		text: 'Наши ловушки в восточной лагуне...'
	},
	{
		id: '199',
		start: 832.863,
		end: 835.198,
		text: 'В них попадается всё меньше и меньше рыбы.'
	},
	{
		id: '200',
		start: 835.365,
		end: 837.868,
		text: 'Тогда мы сменим место ловли.'
	},
	{
		id: '201',
		start: 838.034,
		end: 840.162,
		text: 'Мы так и сделали. Рыбы нет.'
	},
	{
		id: '202',
		start: 840.37,
		end: 843.498,
		text: 'Тогда будем ловить рыбу\nна дальнем конце острова.'
	},
	{ id: '203', start: 843.665, end: 844.708, text: 'Мы пытались.' },
	{
		id: '204',
		start: 844.875,
		end: 846.209,
		text: 'С наветренной стороны.'
	},
	{
		id: '205',
		start: 846.46,
		end: 848.712,
		text: 'А также с подветренной стороны,\nна мелководье и в проливе.'
	},
	{
		id: '206',
		start: 849.087,
		end: 850.63,
		text: 'Пробовали ловить везде в лагуне.'
	},
	{
		id: '207',
		start: 851.006,
		end: 853.133,
		text: 'Рыба просто пропала.'
	},
	{
		id: '208',
		start: 853.675,
		end: 855.343,
		text: 'TUI:\nА вы не пробовали ловить на другую наживку?'
	},
	{
		id: '209',
		start: 855.51,
		end: 857.053,
		text: 'Думаю, дело не в наживке.'
	},
	{ id: '210', start: 857.22, end: 858.68, text: 'Рыбы просто нет.' },
	{
		id: '211',
		start: 858.847,
		end: 860.098,
		text: 'Похоже,\nдела идут всё хуже и хуже.'
	},
	{
		id: '212',
		start: 860.265,
		end: 862.559,
		text: 'TUI: Конечно, я понимаю,\nу вас есть причины для беспокойства.'
	},
	{
		id: '213',
		start: 864.519,
		end: 865.854,
		text: 'Я соберу совет.\nУверен, что мы...'
	},
	{
		id: '214',
		start: 866.062,
		end: 868.899,
		text: 'А что, если мы будем рыбачить за рифом?'
	},
	{
		id: '215',
		start: 870.358,
		end: 872.152,
		text: 'Никому нельзя выходить за риф.'
	},
	{
		id: '216',
		start: 872.319,
		end: 874.821,
		text: 'Я знаю.\nНо если в лагуне не осталось рыбы...'
	},
	{
		id: '217',
		start: 874.988,
		end: 877.032,
		text: '-- Моана.\n-- А вокруг нас целый океан.'
	},
	{
		id: '218',
		start: 877.199,
		end: 878.617,
		text: 'У нас есть только одно правило.'
	},
	{
		id: '219',
		start: 878.909,
		end: 880.035,
		text: 'Оно устарело, когда не осталось рыбы.'
	},
	{
		id: '220',
		start: 880.368,
		end: 882.078,
		text: '-- Оно оберегает нас...\n-- Но, папа, я...'
	},
	{
		id: '221',
		start: 882.216,
		end: 886.178,
		text: '...а ты хочешь подвергнуть племя\nопасности, чтобы выйти в океан.'
	},
	{ id: '222', start: 888.639, end: 889.64, text: '(EXHALES)' },
	{ id: '223', start: 890.391, end: 891.642, text: '(HUFFING)' },
	{
		id: '224',
		start: 892.923,
		end: 895.634,
		text: 'Каждый раз, когда я думаю, что у тебя это прошло...'
	},
	{
		id: '225',
		start: 898.094,
		end: 900.514,
		text: 'Никому нельзя выходить за риф!'
	},
	{
		id: '226',
		start: 906.937,
		end: 910.065,
		text: 'Ну, ты ведь сказала это\nотцу прямо в лицо.'
	},
	{ id: '227', start: 910.732, end: 912.234, text: 'Стоя на лодке.' },
	{
		id: '228',
		start: 912.776,
		end: 917.239,
		text: 'Я не сказала, что надо выйти за риф,\nтак как меня тянет в океан.'
	},
	{ id: '229', start: 917.405, end: 919.407, text: 'Но ведь это так.' },
	{ id: '230', start: 919.67, end: 920.671, text: '(MOANA SIGHS)' },
	{
		id: '231',
		start: 920.784,
		end: 923.2860000000001,
		text: '-- Он строг с тобой, потому что...\n-- Он меня не понимает.'
	},
	{
		id: '232',
		start: 923.453,
		end: 925.997,
		text: 'Потому что он был таким же.'
	},
	{
		id: '233',
		start: 926.79,
		end: 928.083,
		text: 'Его тоже тянуло в океан.'
	},
	{
		id: '234',
		start: 928.667,
		end: 930.252,
		text: 'Он вышел на берег'
	},
	{
		id: '235',
		start: 931.128,
		end: 933.13,
		text: 'и взял каноэ, Моана.'
	},
	{ id: '236', start: 933.296, end: 934.798, text: 'Он вышел за риф' },
	{
		id: '237',
		start: 935.423,
		end: 938.051,
		text: 'и увидел бушующее море.'
	},
	{
		id: '238',
		start: 938.218,
		end: 940.137,
		text: 'Волны были выше гор.'
	},
	{
		id: '239',
		start: 941.138,
		end: 944.432,
		text: 'Его лучший друг упросил\nтвоего отца взять его с собой.'
	},
	{
		id: '240',
		start: 944.891,
		end: 947.144,
		text: 'И твой отец не смог его спасти.'
	},
	{
		id: '241',
		start: 949.312,
		end: 952.566,
		text: 'Он надеется, что не придётся спасать тебя.'
	},
	{ id: '242', start: 953.942, end: 955.443, text: 'Иногда' },
	{
		id: '243',
		start: 955.61,
		end: 959.489,
		text: 'нам хочется кем-то стать,\nчего-то достичь,'
	},
	{
		id: '244',
		start: 961.158,
		end: 963.326,
		text: 'но этому просто не суждено сбыться.'
	},
	{
		id: '245',
		start: 977.174,
		end: 981.303,
		text: 'Снова слышу этот шёпот прибоя'
	},
	{
		id: '246',
		start: 981.47,
		end: 984.806,
		text: 'Кто я, где моё сердце?'
	},
	{
		id: '247',
		start: 984.973,
		end: 987.851,
		text: 'Знает лишь одна вода'
	},
	{
		id: '248',
		start: 989.311,
		end: 993.607,
		text: 'Сто раз обещала им не спорить'
	},
	{
		id: '249',
		start: 993.773,
		end: 995.358,
		text: 'Но влечёт вновь меня море'
	},
	{
		id: '250',
		start: 996.526,
		end: 999.154,
		text: 'Как будто я его волна'
	},
	{
		id: '251',
		start: 1000.822,
		end: 1004.034,
		text: 'Каждый новый шаг\nКаждый поворот'
	},
	{
		id: '252',
		start: 1004.201,
		end: 1007.12,
		text: 'Каждый след и знак\nВновь меня ведёт'
	},
	{
		id: '253',
		start: 1007.287,
		end: 1009.79,
		text: 'В мир больших ветров\nИ бездонных вод'
	},
	{ id: '254', start: 1009.956, end: 1012.375, text: 'Я хочу уплыть' },
	{
		id: '255',
		start: 1012.542,
		end: 1015.045,
		text: 'А в глазах каждый день океан'
	},
	{ id: '256', start: 1015.212, end: 1017.506, text: 'Бескрайний' },
	{ id: '257', start: 1017.672, end: 1020.55, text: 'Меня зовёт' },
	{ id: '258', start: 1020.717, end: 1023.512, text: 'За горизонт' },
	{
		id: '259',
		start: 1024.012,
		end: 1028.809,
		text: 'Вот бы парус поднять\nВ путь отправиться дальний'
	},
	{
		id: '260',
		start: 1028.975,
		end: 1032.479,
		text: 'Он свет прольёт'
	},
	{
		id: '261',
		start: 1032.646,
		end: 1036.9,
		text: 'На всё то\nЧто там меня так долго ждёт'
	},
	{
		id: '262',
		start: 1037.067,
		end: 1040.07,
		text: 'Течёт жизнь на острове беспечно'
	},
	{
		id: '263',
		start: 1040.237,
		end: 1042.823,
		text: 'Вечно людям доставляя радости'
	},
	{ id: '264', start: 1042.989, end: 1045.408, text: 'День ото дня' },
	{ id: '265', start: 1046.213, end: 1047.256, text: '(SQUEALS)' },
	{
		id: '266',
		start: 1047.369,
		end: 1051.081,
		text: 'Знает каждый, в чем его доля'
	},
	{
		id: '267',
		start: 1051.248,
		end: 1054.251,
		text: 'Все играют свои роли'
	},
	{
		id: '268',
		start: 1054.417,
		end: 1057.045,
		text: 'И, может, мне пойдёт моя'
	},
	{
		id: '269',
		start: 1058.38,
		end: 1061.258,
		text: 'Стану я вождём\nПоведу народ'
	},
	{
		id: '270',
		start: 1061.424,
		end: 1063.927,
		text: 'Будем процветать\nМы из года в год'
	},
	{
		id: '271',
		start: 1064.094,
		end: 1067.347,
		text: 'Только сердце мне\nНе про то поёт'
	},
	{
		id: '272',
		start: 1067.514,
		end: 1069.391,
		text: 'Что не так со мной?'
	},
	{
		id: '273',
		start: 1072.602,
		end: 1075.147,
		text: 'Вижу солнечный путь на волнах'
	},
	{ id: '274', start: 1075.313, end: 1078.024, text: 'Хрустальных' },
	{ id: '275', start: 1078.191, end: 1080.443, text: 'Он за собой' },
	{ id: '276', start: 1080.61, end: 1082.696, text: 'Меня ведёт' },
	{
		id: '277',
		start: 1084.03,
		end: 1086.158,
		text: 'И я знаю Что он хочет мне открыть'
	},
	{ id: '278', start: 1086.324, end: 1089.119, text: 'Свои тайны' },
	{ id: '279', start: 1089.286, end: 1091.955, text: 'Ну так вперёд' },
	{
		id: '280',
		start: 1092.497,
		end: 1095.584,
		text: 'Сделай первый шаг\nПобори свой страх'
	},
	{
		id: '281',
		start: 1095.75,
		end: 1097.794,
		text: 'А в глазах каждый день океан'
	},
	{ id: '282', start: 1097.961, end: 1100.589, text: 'Бескрайний' },
	{ id: '283', start: 1100.755, end: 1103.341, text: 'Меня зовёт' },
	{ id: '284', start: 1103.508, end: 1106.845, text: 'За горизонт' },
	{
		id: '285',
		start: 1107.012,
		end: 1111.725,
		text: 'Вот бы парус поднять\nВ путь отправиться дальний'
	},
	{
		id: '286',
		start: 1111.892,
		end: 1114.603,
		text: 'Он свет прольёт'
	},
	{ id: '287', start: 1114.769, end: 1120.025, text: 'Что меня ждёт?' },
	{ id: '288', start: 1122.736, end: 1123.737, text: 'Ой.' },
	{
		id: '289',
		start: 1127.824,
		end: 1128.992,
		text: 'Всё в порядке, Пуа.'
	},
	{
		id: '290',
		start: 1129.326,
		end: 1130.66,
		text: 'У меня получится.'
	},
	{ id: '291', start: 1130.923, end: 1131.924, text: '(EXHALES)' },
	{
		id: '292',
		start: 1132.287,
		end: 1134.956,
		text: 'За рифом есть рыба.'
	},
	{
		id: '293',
		start: 1136.666,
		end: 1138.835,
		text: 'И много чего другого.'
	},
	{
		id: '294',
		start: 1142.768,
		end: 1144.144,
		text: '(PUA SQUEALING)'
	},
	{
		id: '295',
		start: 1147.219,
		end: 1148.804,
		text: 'Не так и страшно.'
	},
	{ id: '296', start: 1150.734, end: 1152.236, text: '(GASPS)' },
	{
		id: '297',
		start: 1157.562,
		end: 1158.563,
		text: '-- (PUA SQUEALING FRANTICALLY)\nПуа!'
	},
	{ id: '298', start: 1168.043, end: 1169.044, text: '(COUGHING)' },
	{ id: '299', start: 1192.276, end: 1193.569, text: '(GASPING)' },
	{ id: '300', start: 1198.24, end: 1199.241, text: '(PUA SQUEALING)' },
	{ id: '301', start: 1207.124, end: 1208.125, text: '(WINCES)' },
	{
		id: '302',
		start: 1210.031,
		end: 1212.826,
		text: 'Что бы здесь ни произошло,'
	},
	{
		id: '303',
		start: 1212.993,
		end: 1214.453,
		text: 'Свали всё на поросёнка.'
	},
	{ id: '304', start: 1214.619, end: 1215.745, text: 'Бабуля.' },
	{
		id: '305',
		start: 1220.542,
		end: 1222.21,
		text: 'Ты всё скажешь папе?'
	},
	{
		id: '306',
		start: 1222.377,
		end: 1225.922,
		text: 'Я его мама.\nЯ не обязана ему ничего говорить.'
	},
	{ id: '307', start: 1229.468, end: 1230.76, text: 'Он был прав.' },
	{
		id: '308',
		start: 1231.553,
		end: 1233.555,
		text: 'Насчёт того, что не надо заплывать за риф.'
	},
	{
		id: '309',
		start: 1235.932,
		end: 1239.311,
		text: 'Пора положить мой камень на гору.'
	},
	{
		id: '310',
		start: 1241.188,
		end: 1244.441,
		text: 'Ладно. Тогда иди в деревню.'
	},
	{
		id: '311',
		start: 1245.066,
		end: 1246.943,
		text: 'И положи свой камень.'
	},
	{
		id: '312',
		start: 1251.573,
		end: 1253.283,
		text: 'Почему ты не пытаешься\nменя отговорить?'
	},
	{
		id: '313',
		start: 1253.784,
		end: 1256.119,
		text: 'Ты сказала, что это то, чего ты хочешь.'
	},
	{ id: '314', start: 1257.12, end: 1258.121, text: 'Да.' },
	{
		id: '315',
		start: 1258.175,
		end: 1259.509,
		text: '(GRAMMA HUMMING)'
	},
	{ id: '316', start: 1261.917, end: 1264.002, text: 'Когда я умру,' },
	{
		id: '317',
		start: 1264.169,
		end: 1267.798,
		text: 'я вернусь на землю в виде ската.'
	},
	{
		id: '318',
		start: 1267.964,
		end: 1270.842,
		text: 'Или я плохо выбрала татуировку.'
	},
	{
		id: '319',
		start: 1271.009,
		end: 1272.719,
		text: 'Почему ты так странно себя ведёшь?'
	},
	{
		id: '320',
		start: 1273.053,
		end: 1276.264,
		text: 'Я деревенская сумасшедшая.\nМне так положено.'
	},
	{
		id: '321',
		start: 1277.015,
		end: 1280.685,
		text: 'Если ты хочешь мне что-то сказать,\nто просто скажи!'
	},
	{
		id: '322',
		start: 1281.853,
		end: 1283.897,
		text: 'Ты хочешь мне что-то сказать?'
	},
	{
		id: '323',
		start: 1284.064,
		end: 1287.317,
		text: 'А ты хочешь это услышать?'
	},
	{
		id: '324',
		start: 1291.947,
		end: 1295.117,
		text: 'Тебе рассказали все сказки\nнашего народа,'
	},
	{ id: '325', start: 1295.742, end: 1297.41, text: 'кроме одной.' },
	{
		id: '326',
		start: 1298.37,
		end: 1299.955,
		text: 'Что это за место?'
	},
	{
		id: '327',
		start: 1300.247,
		end: 1304.501,
		text: 'Ты думаешь, наши предки\nи правда не выходили за риф?'
	},
	{ id: '328', start: 1309.059, end: 1310.06, text: '(GASPS)' },
	{ id: '329', start: 1313.397, end: 1315.399, text: 'Ooh!' },
	{ id: '330', start: 1316.012, end: 1317.848, text: 'Что там?' },
	{
		id: '331',
		start: 1318.014,
		end: 1322.769,
		text: 'Ответ на вопрос,\nкоторый ты всё время себе задаёшь.'
	},
	{
		id: '332',
		start: 1322.936,
		end: 1325.897,
		text: 'Кем тебе суждено быть?'
	},
	{ id: '333', start: 1328.942, end: 1330.694, text: 'Зайди туда,' },
	{
		id: '334',
		start: 1330.861,
		end: 1332.696,
		text: 'ударь в барабан -'
	},
	{ id: '335', start: 1332.863, end: 1334.906, text: 'и узнаешь.' },
	{ id: '336', start: 1360.736, end: 1361.737, text: '(GASPS)' },
	{ id: '337', start: 1364.227, end: 1365.228, text: 'Ого.' },
	{ id: '338', start: 1371.067, end: 1372.068, text: 'Ох.' },
	{ id: '339', start: 1403.6, end: 1405.018, text: 'Ударь в барабан.' },
	{
		id: '340',
		start: 1412.829,
		end: 1414.164,
		text: '(DRUM BEAT ECHOING)'
	},
	{ id: '341', start: 1421.296, end: 1422.297, text: '(GASPS)' },
	{ id: '342', start: 1430.514, end: 1431.515, text: '(YELPS)' },
	{
		id: '343',
		start: 1432.516,
		end: 1434.81,
		text: '(ETHEREAL VOICES ECHOING)'
	},
	{
		id: '344',
		start: 1457.707,
		end: 1459.376,
		text: '(SINGING IN FOREIGN LANGUAGE)'
	},
	{
		id: '345',
		start: 1496.568,
		end: 1499.696,
		text: 'На курс мы ляжем легко'
	},
	{ id: '346', start: 1499.863, end: 1501.698, text: 'Солнце высоко' },
	{
		id: '347',
		start: 1501.865,
		end: 1504.659,
		text: 'Поможет ветер найти'
	},
	{ id: '348', start: 1504.826, end: 1506.495, text: 'Новые пути' },
	{
		id: '349',
		start: 1506.661,
		end: 1509.372,
		text: 'И ночью знаем, где мы'
	},
	{
		id: '350',
		start: 1509.539,
		end: 1511.666,
		text: 'По свету звезды'
	},
	{
		id: '351',
		start: 1511.875,
		end: 1516.087,
		text: 'Мы дети воды\nЯ и ты'
	},
	{
		id: '352',
		start: 1518.882,
		end: 1521.009,
		text: 'Уходим к берегам'
	},
	{
		id: '353',
		start: 1521.176,
		end: 1525.514,
		text: 'Которых не знавал никто другой'
	},
	{
		id: '354',
		start: 1528.225,
		end: 1530.227,
		text: 'Наш остров очень дорог нам'
	},
	{
		id: '355',
		start: 1531.019,
		end: 1533.438,
		text: 'Всегда вернуться сможем'
	},
	{
		id: '356',
		start: 1533.605,
		end: 1535.482,
		text: 'Мы в дом родной'
	},
	{
		id: '357',
		start: 1537.192,
		end: 1540.403,
		text: 'Мы новых открыватели земель'
	},
	{
		id: '358',
		start: 1540.904,
		end: 1545.659,
		text: 'Мы чтим заветы\nСвоих предков-покорителей морей'
	},
	{ id: '359', start: 1553.041, end: 1555.877, text: 'Вперёд смелей' },
	{
		id: '360',
		start: 1561.716,
		end: 1563.468,
		text: 'Мы были мореплавателями.'
	},
	{
		id: '361',
		start: 1564.553,
		end: 1565.929,
		text: 'Мы были мореплавателями!'
	},
	{
		id: '362',
		start: 1566.096,
		end: 1569.766,
		text: 'Мы были мореплавателями! Мы были мореплавателями!'
	},
	{
		id: '363',
		start: 1569.933,
		end: 1571.726,
		text: 'Мы были мореплавателями!'
	},
	{
		id: '364',
		start: 1573.228,
		end: 1574.646,
		text: 'А почему мы перестали?'
	},
	{ id: '365', start: 1575.772, end: 1577.065, text: 'Мауи.' },
	{
		id: '366',
		start: 1577.44,
		end: 1580.652,
		text: 'Когда он украл сердце\nматери островов,'
	},
	{
		id: '367',
		start: 1581.778,
		end: 1583.613,
		text: 'проснулась Те Ка.'
	},
	{
		id: '368',
		start: 1584.072,
		end: 1587.409,
		text: 'Из глубин вышли чудовища,\nлодки перестали возвращаться.'
	},
	{
		id: '369',
		start: 1588.076,
		end: 1590.829,
		text: 'Чтобы защитить наш народ,\nвожди запретили выходить в море,'
	},
	{
		id: '370',
		start: 1591.788,
		end: 1595.917,
		text: 'и теперь мы забыли, кто мы такие.'
	},
	{
		id: '371',
		start: 1596.126,
		end: 1600.005,
		text: 'А тьма\nпродолжала распространятсья расти,'
	},
	{
		id: '372',
		start: 1600.338,
		end: 1602.007,
		text: 'прогоняя нашу рыбу,'
	},
	{ id: '373', start: 1602.591, end: 1604.009, text: 'иссушая жизнь' },
	{
		id: '374',
		start: 1604.509,
		end: 1607.971,
		text: 'от острова к острову.'
	},
	{ id: '375', start: 1611.308, end: 1613.143, text: 'Наш остров.' },
	{ id: '376', start: 1613.643, end: 1615.645, text: 'Но однажды' },
	{
		id: '377',
		start: 1615.812,
		end: 1619.858,
		text: 'кто-нибудь выйдет за риф,\nнайдёт Мауи,'
	},
	{
		id: '378',
		start: 1620.025,
		end: 1622.819,
		text: 'перевезёт его через великий океан'
	},
	{
		id: '379',
		start: 1623.862,
		end: 1627.365,
		text: 'и вернёт сердце Те Фити.'
	},
	{
		id: '380',
		start: 1629.159,
		end: 1632.287,
		text: 'Я была рядом в тот день.'
	},
	{
		id: '381',
		start: 1632.454,
		end: 1635.165,
		text: 'Океан выбрал тебя.'
	},
	{
		id: '382',
		start: 1643.84,
		end: 1646.343,
		text: 'Я думала, это был сон.'
	},
	{ id: '383', start: 1650.4, end: 1651.401, text: '(YELPS)' },
	{ id: '384', start: 1652.182, end: 1653.85, text: 'Нет!' },
	{
		id: '385',
		start: 1654.559,
		end: 1658.522,
		text: 'Наши предки верили, что Мауи там,'
	},
	{
		id: '386',
		start: 1658.688,
		end: 1660.315,
		text: 'под своим крюком.'
	},
	{
		id: '387',
		start: 1660.816,
		end: 1663.693,
		text: 'Плыви на крюк, и ты найдёшь его.'
	},
	{
		id: '388',
		start: 1663.86,
		end: 1667.3220000000001,
		text: 'Но почему он выбрал меня?'
	},
	{
		id: '389',
		start: 1667.489,
		end: 1670.534,
		text: 'Я даже не могу выйти за риф.'
	},
	{
		id: '390',
		start: 1671.368,
		end: 1672.494,
		text: 'Но я знаю, кто может!'
	},
	{ id: '391', start: 1675.759, end: 1676.76, text: '(SIGHS)' },
	{
		id: '392',
		start: 1681.556,
		end: 1682.557,
		text: '-- Урожай чернеет.'
	},
	{
		id: '393',
		start: 1683.004,
		end: 1684.422,
		text: '-- А как же рыба?'
	},
	{
		id: '394',
		start: 1684.714,
		end: 1685.841,
		text: 'По всему острову.'
	},
	{
		id: '395',
		start: 1686.007,
		end: 1687.759,
		text: '-- Пожалуйста, успокойтесь.\n-- Что вы сделаете?'
	},
	{
		id: '396',
		start: 1687.843,
		end: 1690.053,
		text: 'Мы выкопаем новые поля.\nМы найдём способ...'
	},
	{
		id: '397',
		start: 1690.512,
		end: 1692.43,
		text: 'Мы можем остановить тьму!\nСпасти наш остров!'
	},
	{
		id: '398',
		start: 1692.764,
		end: 1694.141,
		text: 'На острове есть пещера с лодками.'
	},
	{
		id: '399',
		start: 1694.391,
		end: 1695.892,
		text: 'С огромными каноэ.'
	},
	{
		id: '400',
		start: 1696.059,
		end: 1699.855,
		text: 'Мы можем взять их, найти Мауи\nи заставить его вернуть сердце.'
	},
	{
		id: '401',
		start: 1700.021,
		end: 1703.191,
		text: 'Мы были мореплавателями.\nМы можем снова выйти в море!'
	},
	{
		id: '402',
		start: 1706.361,
		end: 1708.071,
		text: 'Ты сказал, что надо помогать нашему народу.'
	},
	{
		id: '403',
		start: 1708.238,
		end: 1710.532,
		text: 'Так мы ему поможем.'
	},
	{ id: '404', start: 1711.074, end: 1712.075, text: 'Папа?' },
	{
		id: '405',
		start: 1712.242,
		end: 1713.243,
		text: 'Что ты делаешь?'
	},
	{
		id: '406',
		start: 1713.41,
		end: 1715.704,
		text: 'Надо было давно сжечь эти лодки!'
	},
	{ id: '407', start: 1715.871, end: 1716.913, text: 'Нет! Не надо!' },
	{
		id: '408',
		start: 1717.08,
		end: 1719.541,
		text: 'Мы должны найти Мауи!\nМы должны вернуть сердце!'
	},
	{
		id: '409',
		start: 1719.916,
		end: 1720.959,
		text: 'Нет никакого сердца!'
	},
	{
		id: '410',
		start: 1721.209,
		end: 1723.086,
		text: 'Это просто камень!'
	},
	{ id: '411', start: 1723.253, end: 1724.254, text: 'Нет!' },
	{ id: '412', start: 1735.443, end: 1736.82, text: '(HORN BLOWING)' },
	{
		id: '413',
		start: 1737.267,
		end: 1739.478,
		text: 'Вождь! Ваша матушка!'
	},
	{ id: '414', start: 1749.988, end: 1751.239, text: 'Мама...' },
	{ id: '415', start: 1767.297, end: 1768.84, text: 'Что делать?' },
	{
		id: '416',
		start: 1769.436,
		end: 1771.688,
		text: '(VILLAGERS TALKING INDISTINCTLY)'
	},
	{ id: '417', start: 1774.971, end: 1776.306, text: 'Отправляйся.' },
	{ id: '418', start: 1776.473, end: 1778.016, text: 'Бабуля.' },
	{ id: '419', start: 1780.811, end: 1781.812, text: 'Отправляйся.' },
	{
		id: '420',
		start: 1782.187,
		end: 1784.648,
		text: 'Не сейчас. Я не могу.'
	},
	{ id: '421', start: 1785.148, end: 1786.191, text: 'Ты должна!' },
	{
		id: '422',
		start: 1786.65,
		end: 1789.778,
		text: 'Океан выбрал тебя.'
	},
	{
		id: '423',
		start: 1790.153,
		end: 1791.488,
		text: 'Плыви на рыболовный крюк.'
	},
	{ id: '424', start: 1791.655, end: 1792.656, text: 'Бабуля...' },
	{
		id: '425',
		start: 1792.823,
		end: 1794.783,
		text: 'А когда найдёшь Мауи,'
	},
	{
		id: '426',
		start: 1795.283,
		end: 1799.037,
		text: 'хватай его за ухо и скажи ему:'
	},
	{
		id: '427',
		start: 1799.204,
		end: 1802.29,
		text: '«Я Моана с острова Мотунуи.'
	},
	{
		id: '428',
		start: 1802.666,
		end: 1804.835,
		text: 'Ты сядешь в мою лодку,'
	},
	{
		id: '429',
		start: 1805.293,
		end: 1807.462,
		text: 'пересечёшь океан'
	},
	{
		id: '430',
		start: 1807.629,
		end: 1811.591,
		text: 'и вернёшь сердце Те Фити».'
	},
	{
		id: '431',
		start: 1813.51,
		end: 1815.679,
		text: 'Я не могу покинуть тебя.'
	},
	{
		id: '432',
		start: 1816.179,
		end: 1821.476,
		text: 'Где бы ты ни оказалась,\nя всегда буду рядом.'
	},
	{ id: '433', start: 1834.406, end: 1835.824, text: 'Иди!' },
	{
		id: '434',
		start: 1847.502,
		end: 1850.422,
		text: 'А в глазах каждый день океан'
	},
	{ id: '435', start: 1850.672, end: 1852.34, text: 'Бескрайний' },
	{ id: '436', start: 1852.757, end: 1855.552, text: 'Меня зовёт' },
	{ id: '437', start: 1855.719, end: 1859.431, text: 'За горизонт' },
	{
		id: '438',
		start: 1859.598,
		end: 1864.561,
		text: 'И сомнений нет больше никаких\nИ я странник'
	},
	{ id: '439', start: 1864.728, end: 1867.606, text: 'Я ухожу' },
	{ id: '440', start: 1868.064, end: 1870.65, text: 'Я так дышу' },
	{
		id: '441',
		start: 1871.067,
		end: 1873.904,
		text: 'Каждый новый шаг\nКаждый дерзкий взгляд'
	},
	{ id: '442', start: 1874.07, end: 1875.113, text: 'Это выбор мой' },
	{
		id: '443',
		start: 1875.28,
		end: 1878.575,
		text: 'Нет пути назад\nВ мир, где я одна'
	},
	{
		id: '444',
		start: 1878.742,
		end: 1881.912,
		text: 'И не видно дна\nЯ хочу уплыть'
	},
	{
		id: '445',
		start: 1891.63,
		end: 1894.09,
		text: 'Её свет в этой тьме'
	},
	{
		id: '446',
		start: 1894.257,
		end: 1896.76,
		text: 'Это знак мне тайный'
	},
	{ id: '447', start: 1896.927, end: 1899.638, text: 'Меня меж вод' },
	{ id: '448', start: 1899.805, end: 1902.39, text: 'Он проведёт' },
	{
		id: '449',
		start: 1903.6,
		end: 1907.27,
		text: 'Я пойду по луне\nДует ветер отчаянный'
	},
	{ id: '450', start: 1908.563, end: 1910.816, text: 'Он мне шепнёт' },
	{ id: '451', start: 1911.149, end: 1913.443, text: 'Что меня ждёт!' },
	{
		id: '452',
		start: 1933.296,
		end: 1937.968,
		text: 'Я Моана с острова Мотунуи.\nТы сядешь в мою лодку,'
	},
	{
		id: '453',
		start: 1938.135,
		end: 1942.305,
		text: 'пересечёшь море\nи вернёшь сердце Те Фити.'
	},
	{
		id: '454',
		start: 1942.472,
		end: 1944.015,
		text: '-- (GRUNTING) Я Моана\n-- (THUDDING)'
	},
	{
		id: '455',
		start: 1945.475,
		end: 1946.476,
		text: 'с острова Моту...\n-- (THUDDING CONTINUES)'
	},
	{ id: '456', start: 1948.145, end: 1949.312, text: '...нуи.' },
	{
		id: '457',
		start: 1950.867,
		end: 1951.868,
		text: '(THUDDING CONTINUES)'
	},
	{ id: '458', start: 1960.991, end: 1962.117, text: 'Хейхей?' },
	{
		id: '459',
		start: 1974.057,
		end: 1976.809,
		text: '(CAWING LOUDLY)'
	},
	{ id: '460', start: 1976.893, end: 1978.436, text: '(CAWING STOPS)' },
	{ id: '461', start: 1979.729, end: 1980.73, text: '(CAWING LOUDLY)' },
	{ id: '462', start: 1980.855, end: 1981.856, text: '(CAWING STOPS)' },
	{
		id: '463',
		start: 1981.981,
		end: 1983.066,
		text: '(CAWS AND STOPS AGAIN)'
	},
	{
		id: '464',
		start: 1984.639,
		end: 1986.558,
		text: 'Ничего. Всё в порядке.'
	},
	{ id: '465', start: 1988.143, end: 1989.269, text: 'Видишь?' },
	{
		id: '466',
		start: 1989.686,
		end: 1992.522,
		text: 'Вот так. Хорошая водичка.'
	},
	{
		id: '467',
		start: 1992.689,
		end: 1995.192,
		text: 'Океан - мой друг.'
	},
	{ id: '468', start: 1997.36, end: 1998.528, text: 'Хейхей?' },
	{ id: '469', start: 1999.821, end: 2000.822, text: 'Хейхей!' },
	{ id: '470', start: 2003.711, end: 2004.712, text: '(GASPS)' },
	{ id: '471', start: 2015.879, end: 2016.88, text: 'Сиди здесь.' },
	{
		id: '472',
		start: 2022.886,
		end: 2025.889,
		text: 'Ладно. Плывём к Мауи.'
	},
	{
		id: '473',
		start: 2033.73,
		end: 2036.566,
		text: 'Я Моана с острова Мотунуи.'
	},
	{
		id: '474',
		start: 2036.733,
		end: 2039.736,
		text: 'Ты сядешь в мою лодку,'
	},
	{ id: '475', start: 2040.57, end: 2043.74, text: 'пересечёшь океан' },
	{
		id: '476',
		start: 2043.907,
		end: 2046.243,
		text: 'и вернёшь сердце Те Фити.'
	},
	{
		id: '477',
		start: 2047.869,
		end: 2051.206,
		text: 'Я Моана с острова Моту...'
	},
	{
		id: '478',
		start: 2052.249,
		end: 2053.583,
		text: 'Садись в мою лодку!'
	},
	{ id: '479', start: 2056.419, end: 2057.587, text: 'Ой.' },
	{
		id: '480',
		start: 2058.808,
		end: 2059.976,
		text: '(GROANING IN FRUSTRATION)'
	},
	{ id: '481', start: 2063.76, end: 2064.803, text: 'Нет, нет, нет!' },
	{ id: '482', start: 2077.941, end: 2079.025, text: 'Океан,' },
	{
		id: '483',
		start: 2079.442,
		end: 2082.112,
		text: 'ты не мог бы мне помочь?'
	},
	{ id: '484', start: 2085.449, end: 2086.741, text: 'Нет, нет.' },
	{ id: '485', start: 2088.076, end: 2089.286, text: 'Пожалуйста.' },
	{ id: '486', start: 2089.453, end: 2090.454, text: 'Ну же!' },
	{ id: '487', start: 2101.798, end: 2103.3, text: 'Помоги мне!' },
	{ id: '488', start: 2103.633, end: 2104.634, text: 'Пожалуйста!' },
	{ id: '489', start: 2110.818, end: 2111.819, text: '(SCREAMS)' },
	{ id: '490', start: 2125.082, end: 2126.083, text: '(CLUCKING)' },
	{
		id: '491',
		start: 2130.004,
		end: 2131.005,
		text: '(CAWS IN ALARM)'
	},
	{ id: '492', start: 2142.558, end: 2143.559, text: 'Whew!' },
	{ id: '493', start: 2148.731, end: 2149.774, text: 'Um...' },
	{ id: '494', start: 2149.971, end: 2151.306, text: 'Что?' },
	{
		id: '495',
		start: 2151.473,
		end: 2153.016,
		text: 'Я сказала, помоги мне!'
	},
	{
		id: '496',
		start: 2153.183,
		end: 2155.519,
		text: 'А ты разбил мою лодку?'
	},
	{ id: '497', start: 2155.685, end: 2157.521, text: 'Это не помощь!' },
	{
		id: '498',
		start: 2159.189,
		end: 2162.067,
		text: 'В тебя рыбы целый день писают!'
	},
	{ id: '499', start: 2162.234, end: 2163.36, text: 'Значит...' },
	{
		id: '500',
		start: 2164.247,
		end: 2165.248,
		text: '(HEIHEI CLUCKING)'
	},
	{ id: '501', start: 2177.374, end: 2178.375, text: 'Мауи?' },
	{ id: '502', start: 2185.549, end: 2186.55, text: 'Мауи!' },
	{
		id: '503',
		start: 2190.22,
		end: 2192.639,
		text: 'Мауи, полубог ветров и морей...'
	},
	{
		id: '504',
		start: 2192.806,
		end: 2194.558,
		text: 'Я Моана с острова Мотунуи.'
	},
	{
		id: '505',
		start: 2194.724,
		end: 2196.226,
		text: 'Ты сядешь в мою лодку.'
	},
	{
		id: '506',
		start: 2196.393,
		end: 2198.353,
		text: 'Нет. Ты сядешь в мою лодку.'
	},
	{
		id: '507',
		start: 2198.52,
		end: 2201.189,
		text: 'Да. Я Моана с острова Мотунуи.'
	},
	{
		id: '508',
		start: 2201.565,
		end: 2204.192,
		text: 'Ты сядешь в мою...'
	},
	{ id: '509', start: 2204.359, end: 2206.319, text: 'Лодка! Лодка!' },
	{
		id: '510',
		start: 2206.528,
		end: 2209.03,
		text: 'Боги послали мне...'
	},
	{ id: '511', start: 2209.292, end: 2210.293, text: '(SCREAMING)' },
	{
		id: '512',
		start: 2219.093,
		end: 2220.094,
		text: '(MOANA CLEARS THROAT)'
	},
	{
		id: '513',
		start: 2223.587,
		end: 2225.505,
		text: 'Мауи, многоликий,'
	},
	{
		id: '514',
		start: 2225.672,
		end: 2227.674,
		text: 'полубог ветров и морей,'
	},
	{
		id: '515',
		start: 2227.841,
		end: 2229.759,
		text: '-- я Моана с острова...\n-- Герой мужей.'
	},
	{ id: '516', start: 2229.843, end: 2230.844, text: 'Что?' },
	{
		id: '517',
		start: 2230.927,
		end: 2233.847,
		text: 'Надо так: Мауи, многоликий,\nполубог ветров и морей,'
	},
	{ id: '518', start: 2234.014, end: 2235.223, text: 'герой мужей.' },
	{
		id: '519',
		start: 2235.39,
		end: 2238.56,
		text: 'Я тебя перебил.\nНачни сначала. Герой мужей. Давай.'
	},
	{ id: '520', start: 2240.27, end: 2241.271, text: 'Я...' },
	{
		id: '521',
		start: 2241.438,
		end: 2242.731,
		text: 'Извини, извини.'
	},
	{
		id: '522',
		start: 2242.898,
		end: 2245.025,
		text: 'И женщин. Мужей и женщин.'
	},
	{
		id: '523',
		start: 2245.192,
		end: 2246.193,
		text: 'И тех, и других. Всех.'
	},
	{
		id: '524',
		start: 2246.443,
		end: 2247.944,
		text: 'Я помогаю и мужчинам, и женщинам.'
	},
	{
		id: '525',
		start: 2248.111,
		end: 2249.905,
		text: 'Понимаешь, Мауи - герой для всех.'
	},
	{
		id: '526',
		start: 2250.071,
		end: 2251.239,
		text: 'У тебя хорошо получается.\n(CLICKS TONGUE)'
	},
	{
		id: '527',
		start: 2251.531,
		end: 2252.824,
		text: 'Что? Нет, я здесь затем, чтобы...'
	},
	{ id: '528', start: 2253.241, end: 2254.367, text: 'Конечно.' },
	{ id: '529', start: 2254.785, end: 2255.952, text: 'Да, да, да.' },
	{
		id: '530',
		start: 2256.453,
		end: 2258.622,
		text: 'У Мауи всегда есть время для поклонников.'
	},
	{
		id: '531',
		start: 2260.248,
		end: 2261.458,
		text: 'Когда пишешь птицей,'
	},
	{
		id: '532',
		start: 2262.876,
		end: 2264.377,
		text: 'это называется твит.'
	},
	{
		id: '533',
		start: 2268.131,
		end: 2270.884,
		text: 'Знаю, не каждый день\nвстречаешь своего героя.'
	},
	{
		id: '534',
		start: 2272.135,
		end: 2273.929,
		text: 'Для меня ты не герой.'
	},
	{
		id: '535',
		start: 2274.095,
		end: 2276.64,
		text: 'Мне не нужен твой автограф\nна моём весле!'
	},
	{
		id: '536',
		start: 2276.807,
		end: 2279.142,
		text: 'Я здесь, потому что ты\nукрал сердце Те Фити!'
	},
	{
		id: '537',
		start: 2279.601,
		end: 2281.645,
		text: 'И ты сядешь в мою лодку,'
	},
	{
		id: '538',
		start: 2281.812,
		end: 2284.981,
		text: 'пересечёшь море и вернёшь его!'
	},
	{ id: '539', start: 2284.992, end: 2286.118, text: 'Um...' },
	{
		id: '540',
		start: 2286.274,
		end: 2288.985,
		text: 'Можно даже подумать,\nчто я тебе не нравлюсь,'
	},
	{
		id: '541',
		start: 2289.152,
		end: 2291.071,
		text: 'но это невозможно, потому что...'
	},
	{
		id: '542',
		start: 2291.238,
		end: 2293.031,
		text: 'Я здесь застрял на 1000 лет,'
	},
	{
		id: '543',
		start: 2293.198,
		end: 2295.492,
		text: 'так как пытался добыть сердце\nв подарок вам, смертным.'
	},
	{
		id: '544',
		start: 2295.659,
		end: 2298.578,
		text: 'Чтобы вы могли\nсами создавать жизнь.'
	},
	{
		id: '545',
		start: 2299.121,
		end: 2302.499,
		text: 'Да. Так что, мне кажется,\nты хотела сказать'
	},
	{ id: '546', start: 2302.666, end: 2303.667, text: '«спасибо».' },
	{
		id: '547',
		start: 2303.834,
		end: 2305.127,
		text: '-- «Спасибо»?\n-- Не за что.'
	},
	{
		id: '548',
		start: 2305.418,
		end: 2306.461,
		text: 'Что? Нет, нет, нет!'
	},
	{
		id: '549',
		start: 2306.628,
		end: 2307.712,
		text: 'Я не... Я вовсе не...'
	},
	{
		id: '550',
		start: 2308.088,
		end: 2309.089,
		text: 'Зачем мне это говорить?'
	},
	{ id: '551', start: 2309.339, end: 2310.507, text: 'Ладно, ладно.' },
	{
		id: '552',
		start: 2311.091,
		end: 2314.261,
		text: 'Я вижу, ты обомлела'
	},
	{
		id: '553',
		start: 2314.678,
		end: 2317.597,
		text: 'Великих не встречают каждый день'
	},
	{
		id: '554',
		start: 2317.764,
		end: 2319.057,
		text: 'Запуталась в чувствах своих'
	},
	{ id: '555', start: 2319.683, end: 2321.184, text: 'Как это мило' },
	{
		id: '556',
		start: 2321.476,
		end: 2323.937,
		text: 'Ох, люди, чего ждать ещё от них?'
	},
	{
		id: '557',
		start: 2324.354,
		end: 2327.232,
		text: 'Открой глаза и прозрей'
	},
	{
		id: '558',
		start: 2327.816,
		end: 2328.817,
		text: 'Да, перед тобой'
	},
	{
		id: '559',
		start: 2329.025,
		end: 2330.652,
		text: 'Сам Мауи - царь морей'
	},
	{
		id: '560',
		start: 2331.194,
		end: 2332.779,
		text: 'Скажи, я неплох'
	},
	{
		id: '561',
		start: 2332.946,
		end: 2334.531,
		text: 'Сложён как бог!'
	},
	{
		id: '562',
		start: 2335.449,
		end: 2337.492,
		text: 'Сделал то, чего никто не смог'
	},
	{
		id: '563',
		start: 2338.493,
		end: 2340.662,
		text: 'Мне люди должны сказать'
	},
	{ id: '564', start: 2340.829, end: 2341.83, text: '«Спасибо»' },
	{
		id: '565',
		start: 2342.664,
		end: 2345.208,
		text: 'За песок и солнца свет'
	},
	{
		id: '566',
		start: 2345.709,
		end: 2347.544,
		text: 'Что водится рыба'
	},
	{ id: '567', start: 2347.961, end: 2349.671, text: 'В море синем' },
	{
		id: '568',
		start: 2349.838,
		end: 2352.382,
		text: 'Наверное, я не знаю слова «нет».'
	},
	{
		id: '569',
		start: 2352.883,
		end: 2355.719,
		text: 'Знаешь, кто небом землю укрыл?'
	},
	{
		id: '570',
		start: 2356.136,
		end: 2357.971,
		text: 'Зажёг на небе звёзды?'
	},
	{ id: '571', start: 2358.138, end: 2359.264, text: 'Я это был!' },
	{
		id: '572',
		start: 2359.431,
		end: 2363.852,
		text: 'Кто украл огонь из пещер\nГде веками рыскал демон злой?'
	},
	{
		id: '573',
		start: 2364.269,
		end: 2366.146,
		text: 'Я и никто другой!'
	},
	{
		id: '574',
		start: 2366.313,
		end: 2369.9,
		text: 'О! За то, что солнце поймал'
	},
	{ id: '575', start: 2370.442, end: 2371.443, text: 'Спасибо!' },
	{
		id: '576',
		start: 2371.693,
		end: 2373.987,
		text: 'Чтоб тёплым раем мир ваш стал!'
	},
	{
		id: '577',
		start: 2374.154,
		end: 2376.865,
		text: 'И что есть ветер у вас'
	},
	{ id: '578', start: 2377.407, end: 2378.408, text: 'Спасибо!' },
	{
		id: '579',
		start: 2378.575,
		end: 2380.827,
		text: 'Чтоб в парус дул и пальмы тряс!'
	},
	{
		id: '580',
		start: 2381.286,
		end: 2384.956,
		text: 'Мне люди\nДолжны сказать «спасибо»'
	},
	{
		id: '581',
		start: 2385.123,
		end: 2387.584,
		text: 'Что вам землю из моря достал'
	},
	{
		id: '582',
		start: 2388.21,
		end: 2390.42,
		text: 'Я просто хотел\nСделать всё красиво'
	},
	{ id: '583', start: 2390.587, end: 2391.922, text: 'Спасибо!' },
	{
		id: '584',
		start: 2392.047,
		end: 2395.842,
		text: 'Героем стать хотел, и я им стал!'
	},
	{ id: '585', start: 2396.009, end: 2397.01, text: 'Спасибо!' },
	{ id: '586', start: 2397.719, end: 2399.221, text: 'Спасибо!' },
	{
		id: '587',
		start: 2399.846,
		end: 2400.931,
		text: 'Нет, ну а как вы хотели?'
	},
	{
		id: '588',
		start: 2401.723,
		end: 2403.433,
		text: 'Что ж, деточка, как было сказано'
	},
	{
		id: '589',
		start: 2403.6,
		end: 2405.018,
		text: 'Я полубог, и вы всем мне обязаны'
	},
	{
		id: '590',
		start: 2405.602,
		end: 2408.355,
		text: 'Прилив, трава, острова -\nДело рук Мауи, такие дела'
	},
	{
		id: '591',
		start: 2408.98,
		end: 2410.565,
		text: 'Сцапал угря\nВ ил закопал'
	},
	{
		id: '592',
		start: 2410.732,
		end: 2412.067,
		text: 'Выросла пальма -\nКокос вам упал!'
	},
	{
		id: '593',
		start: 2412.567,
		end: 2413.944,
		text: 'Так что, детка\nДелайте выводы'
	},
	{
		id: '594',
		start: 2414.277,
		end: 2415.779,
		text: 'Не связывайтесь с Мауи,\nкогда он в отрыве'
	},
	{
		id: '595',
		start: 2416.238,
		end: 2419.116,
		text: 'Вся история на моей коже\nЗдесь победы и подвиги тоже!'
	},
	{
		id: '596',
		start: 2419.533,
		end: 2420.909,
		text: 'Глянь, где я был\nКаждый шаг мой записан'
	},
	{
		id: '597',
		start: 2421.451,
		end: 2423.286,
		text: 'Видишь, малыш мини-Мауи\nПорхает как птица!'
	},
	{
		id: '598',
		start: 2423.453,
		end: 2424.955,
		text: 'Ха, ха, ха, ха, ха!'
	},
	{ id: '599', start: 2425.413, end: 2427.29, text: 'Ха, ха!\nХэй!' },
	{
		id: '600',
		start: 2427.457,
		end: 2430.418,
		text: 'В общем\nПора бы сказать «спасибо»!'
	},
	{ id: '601', start: 2430.585, end: 2431.711, text: 'Спасибо!' },
	{
		id: '602',
		start: 2431.878,
		end: 2434.506,
		text: 'За мир, что был создан мной!'
	},
	{
		id: '603',
		start: 2434.673,
		end: 2437.551,
		text: 'Прекрасны дары все его\nСпасибо!'
	},
	{ id: '604', start: 2437.717, end: 2438.969, text: 'Спасибо!' },
	{
		id: '605',
		start: 2439.136,
		end: 2441.596,
		text: 'Хорошенько подумай об этом\nа мне надо идти'
	},
	{
		id: '606',
		start: 2441.763,
		end: 2444.641,
		text: 'Да, и тебе я скажу\n«спасибо»!'
	},
	{ id: '607', start: 2444.808, end: 2445.934, text: 'Спасибо!' },
	{
		id: '608',
		start: 2446.101,
		end: 2448.52,
		text: 'Твой парус ласкает взор!'
	},
	{
		id: '609',
		start: 2448.895,
		end: 2451.773,
		text: 'Под ним по волнам я пойду красиво!\nспасибо!'
	},
	{ id: '610', start: 2451.94, end: 2452.941, text: 'Спасибо!' },
	{
		id: '611',
		start: 2453.316,
		end: 2455.318,
		text: 'Ведь плаваю я хуже, чем топор'
	},
	{
		id: '612',
		start: 2455.402,
		end: 2457.32,
		text: '-- Спасибо!\n-- Спасибо!'
	},
	{
		id: '613',
		start: 2457.612,
		end: 2459.781,
		text: '-- Спасибо!\n-- Спасибо!'
	},
	{ id: '614', start: 2459.948, end: 2460.949, text: 'Что?' },
	{
		id: '615',
		start: 2461.283,
		end: 2462.284,
		text: 'И спасибо тебе!'
	},
	{ id: '616', start: 2463.118, end: 2464.119, text: 'Эй!' },
	{
		id: '617',
		start: 2464.494,
		end: 2467.706,
		text: 'Выпусти меня! Ты лживый, скользкий сын...'
	},
	{ id: '618', start: 2468.05, end: 2469.468, text: '(HUMMING)' },
	{ id: '619', start: 2469.583, end: 2471.418, text: 'Спасибо' },
	{
		id: '620',
		start: 2473.253,
		end: 2474.421,
		text: 'Всегда пожалуйста.'
	},
	{
		id: '621',
		start: 2480.051,
		end: 2482.554,
		text: 'Нет. Я не пойду к Те Фити\nс какой-то девчонкой.'
	},
	{
		id: '622',
		start: 2482.637,
		end: 2483.638,
		text: 'Я верну свой крюк.'
	},
	{
		id: '623',
		start: 2483.93,
		end: 2485.849,
		text: 'У тебя есть крюк.\nЯ не Мауи без крюка.'
	},
	{
		id: '624',
		start: 2487.934,
		end: 2489.019,
		text: 'Я повернусь к тебе спиной.'
	},
	{
		id: '625',
		start: 2494.941,
		end: 2496.151,
		text: 'А это мне на закуску.'
	},
	{ id: '626', start: 2497.288, end: 2498.289, text: '(SCREAMING)' },
	{
		id: '627',
		start: 2522.093,
		end: 2525.764,
		text: 'Хорошее избавление\nот этой груды грязных камней.'
	},
	{
		id: '628',
		start: 2526.264,
		end: 2528.6,
		text: 'Нет, нет, нет.\nНе смотри на меня так.'
	},
	{
		id: '629',
		start: 2528.767,
		end: 2531.311,
		text: 'Это очень красивая пещера.\nОна полюбит её.'
	},
	{
		id: '630',
		start: 2531.895,
		end: 2535.106,
		text: 'А я полюблю тебя в своём животе.'
	},
	{
		id: '631',
		start: 2535.607,
		end: 2537.692,
		text: 'Давай тебя подкормим, петушок.'
	},
	{
		id: '632',
		start: 2560.799,
		end: 2563.135,
		text: 'Я готов смотреть на это целый день.'
	},
	{
		id: '633',
		start: 2563.301,
		end: 2565.178,
		text: 'Ладно. Наслаждайся островом.'
	},
	{ id: '634', start: 2565.345, end: 2566.555, text: 'Конец связи.' },
	{ id: '635', start: 2566.721, end: 2567.931, text: 'Нет! Стой!' },
	{
		id: '636',
		start: 2568.265,
		end: 2571.226,
		text: 'Эй! Ты должен вернуть сердце!'
	},
	{ id: '637', start: 2585.709, end: 2586.752, text: '(CLUCKS)' },
	{
		id: '638',
		start: 2586.867,
		end: 2588.452,
		text: 'А вот этого я не ожидал.'
	},
	{
		id: '639',
		start: 2590.579,
		end: 2593.623,
		text: 'Я Моана с острова Мотунуи.'
	},
	{ id: '640', start: 2593.79, end: 2594.833, text: 'Это моё каноэ,' },
	{
		id: '641',
		start: 2595.292,
		end: 2596.877,
		text: 'и ты пересечёшь океан...'
	},
	{
		id: '642',
		start: 2600.13,
		end: 2601.673,
		text: 'Ладно, хватит уже. Нам пора в путь.'
	},
	{ id: '643', start: 2603.925, end: 2605.135, text: 'Опять она.' },
	{
		id: '644',
		start: 2605.302,
		end: 2607.679,
		text: 'Я Моана с острова Мотунуи...'
	},
	{
		id: '645',
		start: 2612.726,
		end: 2614.436,
		text: 'Так ты Моана, да?'
	},
	{ id: '646', start: 2614.478, end: 2615.479, text: 'Да.' },
	{
		id: '647',
		start: 2615.604,
		end: 2617.814,
		text: 'И ты вернёшь сердце на место!'
	},
	{
		id: '648',
		start: 2629.284,
		end: 2630.285,
		text: 'Ладно. Я пошёл.'
	},
	{
		id: '649',
		start: 2635.707,
		end: 2636.958,
		text: 'Да что ж такое?'
	},
	{ id: '650', start: 2637.834, end: 2639.461, text: 'В чём дело?' },
	{
		id: '651',
		start: 2641.338,
		end: 2642.881,
		text: 'Ты боишься его?'
	},
	{ id: '652', start: 2643.381, end: 2644.8, text: 'Нет! Нет.' },
	{
		id: '653',
		start: 2645.342,
		end: 2646.343,
		text: '(CHUCKLES NERVOUSLY)\nЯ не боюсь.'
	},
	{
		id: '654',
		start: 2650.138,
		end: 2652.307,
		text: 'А ты не лезь,\nне то будешь спать у меня под мышкой.'
	},
	{ id: '655', start: 2652.474, end: 2653.475, text: 'Прекрати.' },
	{
		id: '656',
		start: 2653.642,
		end: 2656.269,
		text: 'Это не сердце. Это проклятие.'
	},
	{
		id: '657',
		start: 2656.436,
		end: 2658.563,
		text: 'Как только я его взял, я упал с неба'
	},
	{
		id: '658',
		start: 2658.73,
		end: 2659.898,
		text: 'и потерял мой крюк.'
	},
	{
		id: '659',
		start: 2660.065,
		end: 2661.191,
		text: 'Убери его от меня.'
	},
	{
		id: '660',
		start: 2661.691,
		end: 2663.068,
		text: 'Вот это убрать?'
	},
	{
		id: '661',
		start: 2663.401,
		end: 2665.195,
		text: 'Эй, эй! Я полубог, ясно?'
	},
	{
		id: '662',
		start: 2665.362,
		end: 2667.03,
		text: 'Прекрати это. Я тебя сражу!'
	},
	{
		id: '663',
		start: 2667.197,
		end: 2668.865,
		text: 'Хочешь быть сражённой?'
	},
	{ id: '664', start: 2669.032, end: 2670.033, text: 'Сразившейся?' },
	{
		id: '665',
		start: 2671.243,
		end: 2673.703,
		text: 'Слушай, эта штука не помогает тебе\nдарить жизнь.'
	},
	{
		id: '666',
		start: 2673.87,
		end: 2675.58,
		text: 'Она притягивает к себе смерть.'
	},
	{
		id: '667',
		start: 2675.747,
		end: 2677.999,
		text: 'Если ты её не уберёшь,\nона притянет что-то плохое.'
	},
	{
		id: '668',
		start: 2678.5,
		end: 2680.21,
		text: 'Что притянет? Сердце?'
	},
	{
		id: '669',
		start: 2680.377,
		end: 2681.378,
		text: 'То есть вот это сердце?'
	},
	{
		id: '670',
		start: 2681.503,
		end: 2682.504,
		text: 'Не надо, нельзя,\nне повышай голос!'
	},
	{
		id: '671',
		start: 2682.671,
		end: 2683.88,
		text: 'Иди и достань его!\n-- (MAUI SHUSHING)'
	},
	{
		id: '672',
		start: 2684.256,
		end: 2685.549,
		text: 'Из-за тебя нас убьют!'
	},
	{
		id: '673',
		start: 2685.966,
		end: 2689.136,
		text: 'Нет, я приведу нас к Те Фити,\nи ты вернёшь сердце.'
	},
	{ id: '674', start: 2689.302, end: 2690.303, text: 'Спасибо.' },
	{ id: '675', start: 2690.47, end: 2691.638, text: 'Не за что.' },
	{ id: '676', start: 2696.56, end: 2697.686, text: 'Какаморы.' },
	{ id: '677', start: 2697.853, end: 2699.062, text: 'Кака-кто?' },
	{
		id: '678',
		start: 2699.229,
		end: 2700.605,
		text: 'Кровожадные маленькие пираты.'
	},
	{
		id: '679',
		start: 2701.606,
		end: 2704.234,
		text: 'Интересно, что им нужно.'
	},
	{
		id: '680',
		start: 2708.738,
		end: 2711.324,
		text: 'Они довольно милые.'
	},
	{ id: '681', start: 2728.758, end: 2729.759, text: 'Океан!' },
	{
		id: '682',
		start: 2729.926,
		end: 2731.553,
		text: 'Сделай что-нибудь! Помоги нам!'
	},
	{
		id: '683',
		start: 2732.012,
		end: 2734.264,
		text: 'Океан не поможет,\nмы должны сами помочь себе!'
	},
	{
		id: '684',
		start: 2734.431,
		end: 2735.891,
		text: 'Подтяни фал. Свяжи штаги!'
	},
	{
		id: '685',
		start: 2737.809,
		end: 2738.894,
		text: 'Ты не знаешь снасти?'
	},
	{ id: '686', start: 2739.321, end: 2740.614, text: 'Я...' },
	{ id: '687', start: 2740.77, end: 2742.23, text: 'Я самоучка.' },
	{
		id: '688',
		start: 2753.784,
		end: 2755.869,
		text: 'А ты не можешь поменять обличье?'
	},
	{
		id: '689',
		start: 2756.036,
		end: 2757.037,
		text: 'Ты видишь мой крюк?'
	},
	{
		id: '690',
		start: 2757.287,
		end: 2758.789,
		text: 'Нет крюка - нет и волшебной силы!'
	},
	{
		id: '691',
		start: 2784.564,
		end: 2786.608,
		text: 'Одна лодка превратилась в много лодок!'
	},
	{ id: '692', start: 2789.58, end: 2790.706, text: '(HORN BLOWING)' },
	{
		id: '693',
		start: 2806.211,
		end: 2808.713,
		text: 'Да, я это сделала.'
	},
	{ id: '694', start: 2814.386, end: 2815.554, text: 'Нет, нет!' },
	{ id: '695', start: 2816.888, end: 2817.889, text: 'Хейхей!' },
	{ id: '696', start: 2831.862, end: 2832.946, text: 'Мауи!' },
	{
		id: '697',
		start: 2833.238,
		end: 2834.239,
		text: 'Они забрали сердце!'
	},
	{
		id: '698',
		start: 2836.7,
		end: 2837.701,
		text: 'Они забрали петуха.'
	},
	{
		id: '699',
		start: 2837.951,
		end: 2839.077,
		text: 'Сердце в...\n(FRUSTRATED GRUNTING)'
	},
	{
		id: '700',
		start: 2840.036,
		end: 2841.079,
		text: 'Надо вернуть его!'
	},
	{ id: '701', start: 2846.46, end: 2847.461, text: 'Мауи!' },
	{ id: '702', start: 2848.545, end: 2850.255, text: 'И-и-и-и-у-у-у!' },
	{
		id: '703',
		start: 2862.225,
		end: 2863.894,
		text: 'Вот он! Вот он!'
	},
	{
		id: '704',
		start: 2864.06,
		end: 2865.061,
		text: 'Ты поворачиваешь?'
	},
	{
		id: '705',
		start: 2865.228,
		end: 2866.271,
		text: 'Что ты делаешь?'
	},
	{ id: '706', start: 2866.563, end: 2867.606, text: 'Спасаюсь!' },
	{ id: '707', start: 2868.106, end: 2869.107, text: 'Сердце!' },
	{
		id: '708',
		start: 2869.316,
		end: 2870.901,
		text: 'Забудь о нём! Его уже не вернуть!'
	},
	{
		id: '709',
		start: 2871.109,
		end: 2872.903,
		text: 'К тому же у тебя есть сердце получше.'
	},
	{ id: '710', start: 2872.986, end: 2873.987, text: 'Эй!' },
	{
		id: '711',
		start: 2874.279,
		end: 2875.363,
		text: 'А чем я буду рулить?'
	},
	{
		id: '712',
		start: 2876.573,
		end: 2878.074,
		text: 'Они просто убьют тебя!'
	},
	{ id: '713', start: 2882.496, end: 2883.58, text: 'Кокосы.' },
	{ id: '714', start: 2926.456, end: 2927.666, text: 'Вот оно!' },
	{ id: '715', start: 2931.837, end: 2932.838, text: 'Эй!' },
	{ id: '716', start: 2948.478, end: 2949.479, text: 'Да!' },
	{ id: '717', start: 2950.48, end: 2951.481, text: 'Мы сделали это!' },
	{
		id: '718',
		start: 2953.066,
		end: 2954.818,
		text: 'Поздравляю, что осталась жива.'
	},
	{
		id: '719',
		start: 2955.318,
		end: 2956.611,
		text: 'Ты меня удивляешь.'
	},
	{
		id: '720',
		start: 2956.987,
		end: 2959.072,
		text: 'Но я всё равно не верну эту штуку на место.'
	},
	{
		id: '721',
		start: 2960.657,
		end: 2963.452,
		text: 'Чтобы добраться до Те Фити,\nнадо проплыть океан бед.'
	},
	{
		id: '722',
		start: 2963.91,
		end: 2964.911,
		text: 'Не говоря уже о Те Ка.'
	},
	{
		id: '723',
		start: 2966.538,
		end: 2967.873,
		text: 'Она Демон Лавы.'
	},
	{
		id: '724',
		start: 2968.373,
		end: 2970,
		text: 'Ты когда-нибудь побеждала Демона Лавы?'
	},
	{ id: '725', start: 2970.75, end: 2972.836, text: 'Нет. А ты?' },
	{
		id: '726',
		start: 2980.51,
		end: 2983.722,
		text: 'Я не пойду на верную гибель\nс простой смертной.'
	},
	{
		id: '727',
		start: 2984.264,
		end: 2986.892,
		text: 'Ты не можешь вернуть сердце без меня,'
	},
	{
		id: '728',
		start: 2987.225,
		end: 2989.019,
		text: 'а я не согласен.'
	},
	{
		id: '729',
		start: 2989.853,
		end: 2991.313,
		text: 'Мне нужен мой крюк.'
	},
	{ id: '730', start: 2992.439, end: 2993.482, text: 'И всё тут.' },
	{
		id: '731',
		start: 3000.363,
		end: 3002.449,
		text: 'Ты бы стал героем.'
	},
	{
		id: '732',
		start: 3004.743,
		end: 3006.87,
		text: 'Ты же этого хочешь больше всего, да?'
	},
	{
		id: '733',
		start: 3007.037,
		end: 3009.873,
		text: 'Малышка, я и так герой.'
	},
	{
		id: '734',
		start: 3010.04,
		end: 3011.458,
		text: 'Может, ты и был героем.'
	},
	{ id: '735', start: 3011.625, end: 3012.751, text: 'Но сейчас...' },
	{
		id: '736',
		start: 3012.918,
		end: 3015.879,
		text: 'Сейчас ты тот,\nкто украл сердце Те Фити.'
	},
	{
		id: '737',
		start: 3016.046,
		end: 3018.298,
		text: 'Тот, кто навлёк несчастье на весь мир.'
	},
	{
		id: '738',
		start: 3019.716,
		end: 3020.967,
		text: 'Ни для кого ты не герой.'
	},
	{ id: '739', start: 3021.551, end: 3022.552, text: 'Ни для кого?' },
	{ id: '740', start: 3032.312, end: 3033.355, text: 'Но' },
	{
		id: '741',
		start: 3033.73,
		end: 3035.065,
		text: 'если ты вернёшь его'
	},
	{ id: '742', start: 3035.398, end: 3037.108, text: 'и спасёшь мир,' },
	{
		id: '743',
		start: 3037.4,
		end: 3039.236,
		text: 'ты станешь героем для всех.'
	},
	{
		id: '744',
		start: 3044.074,
		end: 3047.16,
		text: 'Мауи! Мауи! Мауи!'
	},
	{
		id: '745',
		start: 3047.828,
		end: 3049.412,
		text: 'Ты великолепен!'
	},
	{
		id: '746',
		start: 3050.08,
		end: 3052.791,
		text: 'Без крюка нам туда не доплыть.\nНе одолеть Те Ка.'
	},
	{
		id: '747',
		start: 3052.958,
		end: 3054.084,
		text: 'Тогда найдём твой крюк.'
	},
	{
		id: '748',
		start: 3054.417,
		end: 3057.921,
		text: 'Найдём крюк, победим Те Ка,\nвернём сердце.'
	},
	{
		id: '749',
		start: 3058.088,
		end: 3060.757,
		text: 'Но, может, ты не хочешь быть'
	},
	{
		id: '750',
		start: 3060.924,
		end: 3064.01,
		text: 'Мауи, полубогом ветров и морей?'
	},
	{ id: '751', start: 3064.177, end: 3065.512, text: 'Героем' },
	{ id: '752', start: 3066.096, end: 3067.264, text: 'для всех.' },
	{
		id: '753',
		start: 3070.934,
		end: 3072.394,
		text: 'Сначала мы найдём мой крюк.'
	},
	{
		id: '754',
		start: 3072.936,
		end: 3074.271,
		text: 'Потом спасём мир.'
	},
	{ id: '755', start: 3074.437, end: 3075.438, text: 'Договорились?' },
	{ id: '756', start: 3075.48, end: 3076.481, text: 'Договорились.' },
	{
		id: '757',
		start: 3081.069,
		end: 3082.07,
		text: 'Попробовать всё же стоило.'
	},
	{
		id: '758',
		start: 3083.029,
		end: 3084.698,
		text: 'Так, поплывём на восток.'
	},
	{
		id: '759',
		start: 3085.866,
		end: 3086.992,
		text: 'В логово Таматоа.'
	},
	{
		id: '760',
		start: 3089.077,
		end: 3092.664,
		text: 'Наверняка мой крюк\nу этого пучеглазого скопидома.'
	},
	{
		id: '761',
		start: 3105.135,
		end: 3106.553,
		text: 'Научи меня управлять лодкой.'
	},
	{
		id: '762',
		start: 3108.93,
		end: 3112.225,
		text: 'Моя задача - переправить Мауи\nчерез великий океан.'
	},
	{ id: '763', start: 3112.392, end: 3113.393, text: 'Я должна...' },
	{
		id: '764',
		start: 3114.811,
		end: 3116.646,
		text: 'Я должна управлять лодкой.'
	},
	{
		id: '765',
		start: 3117.022,
		end: 3118.648,
		text: 'Это называется мореплавание, принцесса.'
	},
	{
		id: '766',
		start: 3119.524,
		end: 3121.443,
		text: 'Главное здесь - не только паруса и узлы,'
	},
	{
		id: '767',
		start: 3121.776,
		end: 3124.154,
		text: 'главное - видеть свой путь в голове.'
	},
	{
		id: '768',
		start: 3124.529,
		end: 3126.49,
		text: 'Знать, где ты сейчас,'
	},
	{
		id: '769',
		start: 3126.782,
		end: 3128.158,
		text: 'потому что знаешь, где была раньше.'
	},
	{
		id: '770',
		start: 3128.325,
		end: 3130.66,
		text: 'Ну, во-первых, я не принцесса.'
	},
	{ id: '771', start: 3131.203, end: 3132.329, text: 'Я дочь вождя.' },
	{
		id: '772',
		start: 3132.496,
		end: 3133.663,
		text: '-- Без разницы.\n-- Нет.'
	},
	{
		id: '773',
		start: 3133.83,
		end: 3136.458,
		text: 'Если на тебе платье\nи ты дружишь с птичкой,'
	},
	{
		id: '774',
		start: 3136.625,
		end: 3137.667,
		text: 'то ты принцесса.'
	},
	{
		id: '775',
		start: 3138.001,
		end: 3139.127,
		text: 'Ты не мореплаватель.'
	},
	{
		id: '776',
		start: 3139.544,
		end: 3142.172,
		text: 'Ты никогда не станешь\nмореплавателем, никогда...'
	},
	{
		id: '777',
		start: 3148.011,
		end: 3150.18,
		text: 'Не может быть! Дротиком прямо в попу?'
	},
	{ id: '778', start: 3155.685, end: 3158.355, text: 'Ты нехорошая.' },
	{
		id: '779',
		start: 3158.688,
		end: 3160.232,
		text: 'Раз можешь говорить, можешь и учить меня.'
	},
	{ id: '780', start: 3160.398, end: 3161.399, text: 'Мореплавание.' },
	{
		id: '781',
		start: 3162.692,
		end: 3164.277,
		text: 'Урок первый. Давай.'
	},
	{ id: '782', start: 3165.789, end: 3166.79, text: '(GROANS)' },
	{ id: '783', start: 3167.03, end: 3168.198, text: 'Натяни шкот.' },
	{ id: '784', start: 3168.949, end: 3170.534, text: 'Это не шкот.' },
	{ id: '785', start: 3170.617, end: 3171.618, text: 'Нет.' },
	{ id: '786', start: 3171.701, end: 3172.702, text: 'Нет.' },
	{ id: '787', start: 3173.036, end: 3174.955, text: 'Нет. Нет.' },
	{ id: '788', start: 3176.039, end: 3177.624, text: 'Этот уже был.' },
	{
		id: '789',
		start: 3181.169,
		end: 3184.923,
		text: 'Меряй расстояние между звёздами,\nа не хлопай ладонью по небу.'
	},
	{
		id: '790',
		start: 3186.341,
		end: 3189.219,
		text: 'Если течение тёплое,\nты на правильном пути.'
	},
	{ id: '791', start: 3191.096, end: 3192.597, text: 'Оно холодное.' },
	{
		id: '792',
		start: 3192.764,
		end: 3194.766,
		text: 'Погоди, оно теплеет.'
	},
	{
		id: '793',
		start: 3196.434,
		end: 3199.563,
		text: 'Какая гадость!\nДа что с тобой такое?'
	},
	{
		id: '794',
		start: 3199.614,
		end: 3200.615,
		text: '(MAUI CHUCKLES)'
	},
	{ id: '795', start: 3207.497, end: 3208.498, text: '(GROANS)' },
	{ id: '796', start: 3216.204, end: 3217.456, text: 'Мы на месте?' },
	{
		id: '797',
		start: 3218.29,
		end: 3220.584,
		text: 'Видишь, я же говорила, что смогу!'
	},
	{ id: '798', start: 3229.092, end: 3230.427, text: 'Мотунуи?' },
	{ id: '799', start: 3231.595, end: 3233.221, text: 'Я дома?' },
	{
		id: '800',
		start: 3236.808,
		end: 3238.768,
		text: '-- Моана!\n-- Папа!'
	},
	{ id: '801', start: 3239.311, end: 3241.104, text: 'Моана!' },
	{ id: '802', start: 3241.271, end: 3242.564, text: 'Мама?' },
	{ id: '803', start: 3243.732, end: 3244.9, text: 'Спаси нас!' },
	{ id: '804', start: 3246.776, end: 3247.777, text: 'Нет!' },
	{ id: '805', start: 3248.278, end: 3249.279, text: 'Моана!' },
	{ id: '806', start: 3249.831, end: 3250.832, text: '(GASPS)' },
	{
		id: '807',
		start: 3252.282,
		end: 3253.992,
		text: 'Хорошо спалось?'
	},
	{
		id: '808',
		start: 3254.284,
		end: 3256.828,
		text: 'Знаешь, настоящий мореплаватель\nникогда не спит,'
	},
	{
		id: '809',
		start: 3256.995,
		end: 3259.623,
		text: 'чтобы он мог попасть,\nкуда ему нужно.'
	},
	{
		id: '810',
		start: 3260.29,
		end: 3261.583,
		text: 'Приготовься, неженка.'
	},
	{ id: '811', start: 3262.292, end: 3263.794, text: 'Мы приплыли.' },
	{
		id: '812',
		start: 3265.295,
		end: 3267.798,
		text: 'Ты уверен, что твой крюк у него?'
	},
	{
		id: '813',
		start: 3267.964,
		end: 3270.133,
		text: 'У Таматоа? Конечно, у него.'
	},
	{
		id: '814',
		start: 3270.3,
		end: 3274.095,
		text: 'Он барахольщик. Собирает барахло.\nДумает, это делает его крутым.'
	},
	{ id: '815', start: 3274.147, end: 3275.148, text: 'Ah!' },
	{
		id: '816',
		start: 3275.972,
		end: 3277.808,
		text: 'И поверь мне, для Таматоа'
	},
	{
		id: '817',
		start: 3277.974,
		end: 3280.477,
		text: 'мой крюк - вершина его коллекции.'
	},
	{
		id: '818',
		start: 3280.852,
		end: 3282.604,
		text: 'И он живёт наверху?'
	},
	{ id: '819', start: 3285.607, end: 3286.608, text: 'Нет, нет, нет.' },
	{
		id: '820',
		start: 3286.775,
		end: 3288.151,
		text: 'Это просто вход'
	},
	{ id: '821', start: 3288.318, end: 3290.529, text: 'в Лалотай.' },
	{ id: '822', start: 3290.862, end: 3291.863, text: 'Лалотай?' },
	{
		id: '823',
		start: 3292.155,
		end: 3293.865,
		text: 'Царство монстров?'
	},
	{
		id: '824',
		start: 3294.491,
		end: 3296.409,
		text: 'Мы идём в царство монстров?'
	},
	{ id: '825', start: 3296.827, end: 3299.079, text: 'Мы? Нет. Я.' },
	{
		id: '826',
		start: 3299.496,
		end: 3301.998,
		text: 'Ты останешься в лодке\nс другой курицей.'
	},
	{
		id: '827',
		start: 3304.334,
		end: 3305.961,
		text: 'Об этом я и говорю. Классно, да?'
	},
	{
		id: '828',
		start: 3307.504,
		end: 3309.673,
		text: 'Перестань. Это удачная шутка.\nКак ты не понимаешь?'
	},
	{
		id: '829',
		start: 3309.84,
		end: 3312.05,
		text: 'Я назвал её курицей,\nи в лодке тоже есть курица.'
	},
	{
		id: '830',
		start: 3312.342,
		end: 3313.885,
		text: 'Я знаю, что она человек,\nно дело не в...'
	},
	{
		id: '831',
		start: 3314.052,
		end: 3315.637,
		text: 'Знаешь что? Неважно. Неважно!'
	},
	{
		id: '832',
		start: 3315.804,
		end: 3317.222,
		text: 'Не буду ничего тебе объяснять.'
	},
	{
		id: '833',
		start: 3317.389,
		end: 3319.015,
		text: 'Потому что тогда уже не смешно.'
	},
	{ id: '834', start: 3321.403, end: 3322.57, text: '(GRUNTING)' },
	{
		id: '835',
		start: 3327.617,
		end: 3328.702,
		text: '(MOANA GRUNTING)'
	},
	{ id: '836', start: 3330.245, end: 3331.246, text: '(GROANS)' },
	{
		id: '837',
		start: 3332.821,
		end: 3334.865,
		text: 'Послушай, дочь вождя,'
	},
	{
		id: '838',
		start: 3335.031,
		end: 3336.533,
		text: 'я думал, твоё место в деревне.'
	},
	{
		id: '839',
		start: 3336.7,
		end: 3338.243,
		text: 'Ты целуешь младенцев и всё такое.'
	},
	{
		id: '840',
		start: 3339.369,
		end: 3341.329,
		text: 'Я просто пытаюсь понять,'
	},
	{
		id: '841',
		start: 3341.496,
		end: 3343.874,
		text: 'почему твой народ решил послать...'
	},
	{
		id: '842',
		start: 3344.04,
		end: 3345.959,
		text: 'Как бы это сказать? Тебя.'
	},
	{
		id: '843',
		start: 3346.334,
		end: 3349.546,
		text: 'Мой народ меня не посылал.'
	},
	{
		id: '844',
		start: 3349.713,
		end: 3350.881,
		text: 'Меня послал океан.'
	},
	{ id: '845', start: 3351.047, end: 3352.257, text: 'Океан?' },
	{ id: '846', start: 3352.382, end: 3353.383, text: 'Логично.' },
	{
		id: '847',
		start: 3353.55,
		end: 3355.218,
		text: 'Тебе лет восемь. Не умеешь управлять лодкой.'
	},
	{
		id: '848',
		start: 3355.385,
		end: 3356.386,
		text: 'Выбор очевиден.'
	},
	{
		id: '849',
		start: 3356.72,
		end: 3360.098,
		text: 'Он выбрал меня не просто так.'
	},
	{
		id: '850',
		start: 3360.265,
		end: 3361.892,
		text: 'Если океан такой умный,'
	},
	{
		id: '851',
		start: 3362.058,
		end: 3365.103,
		text: 'почему он сам не вернул\nсердце Те Фити?'
	},
	{
		id: '852',
		start: 3365.27,
		end: 3366.771,
		text: 'И не принёс мне мой крюк?'
	},
	{
		id: '853',
		start: 3367.23,
		end: 3369.483,
		text: 'Океан совершенно чокнутый.'
	},
	{
		id: '854',
		start: 3370.567,
		end: 3372.235,
		text: 'Но, конечно, в тебе он не ошибся.'
	},
	{ id: '855', start: 3372.903, end: 3375.405, text: 'Ты избранная!' },
	{
		id: '856',
		start: 3391.046,
		end: 3394.424,
		text: 'Океан выбрал тебя не просто так.'
	},
	{
		id: '857',
		start: 3394.591,
		end: 3397.01,
		text: 'Если ты сейчас запоёшь,\nменя вырвет.'
	},
	{
		id: '858',
		start: 3397.928,
		end: 3399.971,
		text: 'Я не вижу никакого входа.'
	},
	{
		id: '859',
		start: 3400.43,
		end: 3402.307,
		text: 'Да, потому что он появляется'
	},
	{
		id: '860',
		start: 3402.474,
		end: 3404.309,
		text: 'только после человеческой жертвы.'
	},
	{ id: '861', start: 3406.394, end: 3407.729, text: 'Я шучу.' },
	{
		id: '862',
		start: 3407.896,
		end: 3409.105,
		text: 'Ты такая серьёзная.'
	},
	{ id: '863', start: 3412.202, end: 3413.203, text: '(COUGHING)' },
	{
		id: '864',
		start: 3418.833,
		end: 3420.126,
		text: '(SHOUTING IN FOREIGN LANGUAGE)'
	},
	{ id: '865', start: 3432.796, end: 3433.797, text: 'Не волнуйся,' },
	{
		id: '866',
		start: 3434.131,
		end: 3436.133,
		text: 'падать гораздо дальше, чем кажется.'
	},
	{ id: '867', start: 3436.55, end: 3437.551, text: 'И-и-и-и-у-у-у!' },
	{ id: '868', start: 3442.722, end: 3445.6, text: 'Я всё ещё падаю!' },
	{
		id: '869',
		start: 3445.944,
		end: 3446.945,
		text: '(WATER SPLASHES)'
	},
	{ id: '870', start: 3447.727, end: 3449.271, text: 'Ты сможешь.' },
	{ id: '871', start: 3449.771, end: 3450.772, text: 'Давай!' },
	{
		id: '872',
		start: 3471.668,
		end: 3474.463,
		text: 'Какое чистое приземление!'
	},
	{ id: '873', start: 3474.722, end: 3475.723, text: 'Что?' },
	{
		id: '874',
		start: 3476.923,
		end: 3479.134,
		text: 'Что? Балбес, её тут вообще нет.'
	},
	{
		id: '875',
		start: 3479.301,
		end: 3481.636,
		text: 'Никто из смертных\nне прыгнет в царство...'
	},
	{ id: '876', start: 3481.803, end: 3482.846, text: 'Что?' },
	{ id: '877', start: 3487.1, end: 3489.019, text: 'Ну, ей конец.' },
	{
		id: '878',
		start: 3489.853,
		end: 3491.688,
		text: 'Ладно, давай заберём мой крюк.'
	},
	{
		id: '879',
		start: 3502.584,
		end: 3503.918,
		text: 'Ew! Ew, ew, ew, ew.'
	},
	{ id: '880', start: 3505.92, end: 3506.921, text: '(PANTING)' },
	{ id: '881', start: 3508.256, end: 3509.257, text: '(SCREECHING)' },
	{
		id: '882',
		start: 3521.936,
		end: 3524.105,
		text: '(CREATURE GROWLING)'
	},
	{ id: '883', start: 3552.749, end: 3554.835, text: 'Крюк Мауи!' },
	{ id: '884', start: 3555.001, end: 3556.002, text: 'Да!' },
	{ id: '885', start: 3557.254, end: 3558.255, text: 'Извини!' },
	{
		id: '886',
		start: 3558.421,
		end: 3559.422,
		text: 'Я думала, что ты монстр...'
	},
	{
		id: '887',
		start: 3559.589,
		end: 3560.841,
		text: 'Но я нашла твой крюк.'
	},
	{
		id: '888',
		start: 3561.007,
		end: 3563.093,
		text: 'Ты прав, этот Таматоа\nочень любит сокровища.'
	},
	{ id: '889', start: 3563.26, end: 3564.261, text: 'Сиди здесь.' },
	{
		id: '890',
		start: 3564.427,
		end: 3566.68,
		text: 'Что? Нет. Это же я нашла твой...'
	},
	{
		id: '891',
		start: 3566.888,
		end: 3568.348,
		text: 'Послушай. Тысячу лет'
	},
	{
		id: '892',
		start: 3568.515,
		end: 3570.725,
		text: 'я думал только о том,\nкак сохранить блеск волос,'
	},
	{
		id: '893',
		start: 3570.892,
		end: 3571.935,
		text: 'забрать мой крюк'
	},
	{
		id: '894',
		start: 3572.102,
		end: 3573.687,
		text: 'и снова стать крутым.'
	},
	{
		id: '895',
		start: 3573.854,
		end: 3576.231,
		text: 'И я не дам всё испортить\nпростой смертной,'
	},
	{
		id: '896',
		start: 3576.398,
		end: 3580.277,
		text: 'которой вообще не место\nв пещере монстров, разве что...'
	},
	{ id: '897', start: 3581.778, end: 3583.363, text: 'Разве что' },
	{
		id: '898',
		start: 3583.53,
		end: 3584.573,
		text: 'она послужит приманкой.'
	},
	{ id: '899', start: 3584.906, end: 3585.907, text: 'Что?' },
	{ id: '900', start: 3586.7, end: 3587.868, text: 'Ничего себе.' },
	{
		id: '901',
		start: 3588.034,
		end: 3590.078,
		text: 'Сверкающая, блестящая пещера.'
	},
	{ id: '902', start: 3590.245, end: 3591.58, text: 'Прямо как я...' },
	{
		id: '903',
		start: 3591.746,
		end: 3594.249,
		text: 'В ней полно сверкающих сокровищ.'
	},
	{
		id: '904',
		start: 3594.541,
		end: 3596.418,
		text: 'Они сверкают и искрятся.'
	},
	{
		id: '905',
		start: 3596.585,
		end: 3597.836,
		text: 'Ты неубедительна!'
	},
	{
		id: '906',
		start: 3598.211,
		end: 3600.13,
		text: 'Это глупо!\nЯ просто подойду и заберу крюк!'
	},
	{
		id: '907',
		start: 3600.297,
		end: 3602.757,
		text: 'Пойди туда - и он тебя убьёт.\nДействуй согласно плану.'
	},
	{
		id: '908',
		start: 3604.968,
		end: 3607.262,
		text: 'Когда он появится, отвлекай его.'
	},
	{
		id: '909',
		start: 3607.429,
		end: 3608.93,
		text: 'Пусть он поговорит о себе.'
	},
	{
		id: '910',
		start: 3609.097,
		end: 3611.224,
		text: 'Он любит похвастаться,\nрассказать, какой он крутой.'
	},
	{
		id: '911',
		start: 3611.391,
		end: 3612.851,
		text: 'Наверное, вы большие друзья.'
	},
	{
		id: '912',
		start: 3613.31,
		end: 3614.811,
		text: 'Нет, я ведь оторвал ему ногу.'
	},
	{
		id: '913',
		start: 3615.687,
		end: 3617.105,
		text: 'Ты оторвал ему...'
	},
	{ id: '914', start: 3617.522, end: 3618.523, text: 'Мауи?' },
	{ id: '915', start: 3626.708, end: 3628.126, text: '(LAUGHING)' },
	{
		id: '916',
		start: 3628.241,
		end: 3629.367,
		text: 'Это ещё что такое?'
	},
	{
		id: '917',
		start: 3630.494,
		end: 3634.039,
		text: 'Блестящая, сверкающая... Погодите.'
	},
	{ id: '918', start: 3634.465, end: 3635.466, text: '(YELPS)' },
	{ id: '919', start: 3636.5, end: 3637.584, text: 'Это человек!' },
	{
		id: '920',
		start: 3637.751,
		end: 3641.254,
		text: 'Что ты делаешь здесь, в царстве...'
	},
	{
		id: '921',
		start: 3641.588,
		end: 3643.006,
		text: 'Выбери один глаз, малышка.'
	},
	{
		id: '922',
		start: 3643.173,
		end: 3644.8,
		text: 'Мне не сосредоточиться\nна разговоре, если ты...'
	},
	{
		id: '923',
		start: 3645.342,
		end: 3646.885,
		text: 'Да, выбери один глаз, один!'
	},
	{ id: '924', start: 3647.719, end: 3649.763, text: 'А ты смешная.' },
	{
		id: '925',
		start: 3649.93,
		end: 3651.348,
		text: 'Не надо! Это вещь моей бабули!'
	},
	{
		id: '926',
		start: 3651.515,
		end: 3652.557,
		text: '«Это вещь моей бабули!»'
	},
	{
		id: '927',
		start: 3652.724,
		end: 3653.85,
		text: 'Я съел мою бабулю!'
	},
	{
		id: '928',
		start: 3654.017,
		end: 3656.478,
		text: 'На это ушла целая неделя,\nона была просто огромная.'
	},
	{
		id: '929',
		start: 3656.645,
		end: 3658.021,
		text: 'Зачем ты сюда пришла?'
	},
	{
		id: '930',
		start: 3659.481,
		end: 3660.899,
		text: 'Потому что ты великолепен!'
	},
	{
		id: '931',
		start: 3661.066,
		end: 3666.446,
		text: 'А мы, смертные, слышали историю\nпро краба, который стал легендой!'
	},
	{
		id: '932',
		start: 3666.613,
		end: 3668.865,
		text: 'И я просто должна была узнать,'
	},
	{
		id: '933',
		start: 3669.324,
		end: 3671.618,
		text: 'как ты стал таким'
	},
	{ id: '934', start: 3672.202, end: 3674.496, text: 'крабалденным?' },
	{
		id: '935',
		start: 3675.288,
		end: 3679.084,
		text: 'Ты хочешь,\nчтобы я поговорил о себе?'
	},
	{
		id: '936',
		start: 3680.418,
		end: 3682.17,
		text: 'Потому что если так,'
	},
	{
		id: '937',
		start: 3682.337,
		end: 3684.381,
		text: 'то я с радостью это сделаю.'
	},
	{ id: '938', start: 3684.422, end: 3685.423, text: 'Что?' },
	{ id: '939', start: 3685.549, end: 3686.967, text: 'Я спою о себе!' },
	{
		id: '940',
		start: 3689.302,
		end: 3692.764,
		text: 'Ну, Таматоа не всегда жил как король'
	},
	{
		id: '941',
		start: 3692.931,
		end: 3695.267,
		text: 'Был обычным мелким крабом'
	},
	{
		id: '942',
		start: 3696.685,
		end: 3699.104,
		text: 'Но сегодня мне завидовать изволь'
	},
	{
		id: '943',
		start: 3699.563,
		end: 3701.565,
		text: 'Ведь я само совершенство!'
	},
	{ id: '944', start: 3702.941, end: 3704.151, text: 'Велела бабушка' },
	{
		id: '945',
		start: 3704.317,
		end: 3706.027,
		text: 'Сердцу доверять'
	},
	{
		id: '946',
		start: 3706.194,
		end: 3708.989,
		text: 'Быть собой не стесняться!'
	},
	{
		id: '947',
		start: 3709.156,
		end: 3712.451,
		text: 'Но её логику могу\nя разорвать'
	},
	{ id: '948', start: 3712.617, end: 3713.869, text: 'Всё это бред' },
	{
		id: '949',
		start: 3714.161,
		end: 3715.871,
		text: 'Ведь можно жить в блеске'
	},
	{
		id: '950',
		start: 3716.037,
		end: 3718.915,
		text: 'Как сокровище\nиз затонувшего пиратского корабля'
	},
	{
		id: '951',
		start: 3719.082,
		end: 3722.544,
		text: 'очистить палубу\nи сделать её блестящей'
	},
	{
		id: '952',
		start: 3722.711,
		end: 3725.547,
		text: 'Драгоценности\nС любого можно снять'
	},
	{
		id: '953',
		start: 3726.047,
		end: 3728.258,
		text: 'Так сказать\nИ потом'
	},
	{
		id: '954',
		start: 3728.425,
		end: 3732.262,
		text: 'У рыб нет мозгов\nОни падки на блестяшки'
	},
	{ id: '955', start: 3732.637, end: 3733.889, text: 'Дурашки' },
	{
		id: '956',
		start: 3734.181,
		end: 3736.516,
		text: 'О, вот он мой улов'
	},
	{
		id: '957',
		start: 3736.683,
		end: 3738.727,
		text: 'Ведь я такой очаровашка'
	},
	{
		id: '958',
		start: 3738.8940000000002,
		end: 3739.895,
		text: 'М-м, вкусняшка!'
	},
	{
		id: '959',
		start: 3740.061,
		end: 3742.439,
		text: 'Ты мой морской фрукт'
	},
	{
		id: '960',
		start: 3742.9809999999998,
		end: 3745.901,
		text: 'Мой морепродукт'
	},
	{
		id: '961',
		start: 3747.277,
		end: 3749.112,
		text: 'Эй, крабовая котлета!'
	},
	{ id: '962', start: 3752.991, end: 3754.409, text: 'Я вернулся.' },
	{
		id: '963',
		start: 3755.66,
		end: 3757.954,
		text: 'Час Мауи пробил!'
	},
	{ id: '964', start: 3758.214, end: 3759.215, text: '(GASPS)' },
	{
		id: '965',
		start: 3760.582,
		end: 3762,
		text: 'Что скажешь, приятель?'
	},
	{
		id: '966',
		start: 3762.834,
		end: 3764.5860000000002,
		text: 'Гигантский ястреб? Сейчас!'
	},
	{ id: '967', start: 3764.753, end: 3766.129, text: 'И-и-и-и-у-у-у!' },
	{ id: '968', start: 3769.049, end: 3772.135, text: 'И-и-и-и-у-у-у!' },
	{ id: '969', start: 3776.598, end: 3778.433, text: 'Так, так, так.' },
	{
		id: '970',
		start: 3778.6,
		end: 3780.8940000000002,
		text: 'Малыш Мауи\nСтал беспомощен, как жук'
	},
	{
		id: '971',
		start: 3781.77,
		end: 3783.772,
		text: 'Наш полоумный хилый полубог!'
	},
	{
		id: '972',
		start: 3784.397,
		end: 3786.65,
		text: 'Ай! И совсем уж не работает'
	},
	{
		id: '973',
		start: 3786.817,
		end: 3788.193,
		text: 'Твой крюк!\nЯсно?'
	},
	{
		id: '974',
		start: 3788.36,
		end: 3790.821,
		text: 'Ты не раскачиваешь его\nкак раньше, мужик.'
	},
	{
		id: '975',
		start: 3791.78,
		end: 3794.741,
		text: 'Но, конечно же, ты все ещё красив!'
	},
	{
		id: '976',
		start: 3794.908,
		end: 3797.828,
		text: 'В татуировках и мышцах!'
	},
	{
		id: '977',
		start: 3798.245,
		end: 3801.2889999999998,
		text: 'И я такой же, бесподобен и учтив'
	},
	{ id: '978', start: 3801.623, end: 3803.416, text: 'Я просто принц' },
	{
		id: '979',
		start: 3803.708,
		end: 3804.793,
		text: 'Ведь я живу в блеске'
	},
	{
		id: '980',
		start: 3804.96,
		end: 3807.879,
		text: 'И сверкаю\nКак безумный изумруд'
	},
	{
		id: '981',
		start: 3808.046,
		end: 3811.424,
		text: 'Там и тут\nЯ плут, и я в блеске!'
	},
	{
		id: '982',
		start: 3811.633,
		end: 3814.219,
		text: 'Ваши хитрости меня не проведут!'
	},
	{
		id: '983',
		start: 3814.386,
		end: 3816.93,
		text: 'Я слишком крут!\nМауи, брат'
	},
	{
		id: '984',
		start: 3817.889,
		end: 3820.6,
		text: 'Ты дерзай, дерзай\nТолько ты всего лишь полубог'
	},
	{
		id: '985',
		start: 3821.309,
		end: 3823.478,
		text: 'Твой прозвенел звонок, малышок!'
	},
	{ id: '986', start: 3823.812, end: 3825.355, text: 'Утекай, тикай' },
	{
		id: '987',
		start: 3825.772,
		end: 3827.482,
		text: 'Наконец тебя настиг злой рок'
	},
	{ id: '988', start: 3828.15, end: 3829.943, text: 'Вот это шок' },
	{
		id: '989',
		start: 3830.11,
		end: 3834.739,
		text: 'Ведь я не тот Кто швырнул тебя'
	},
	{
		id: '990',
		start: 3834.948,
		end: 3839.453,
		text: 'В море И сам на себя'
	},
	{
		id: '991',
		start: 3839.619,
		end: 3842.831,
		text: 'Ты наслал это горе'
	},
	{
		id: '992',
		start: 3842.998,
		end: 3845.459,
		text: 'Хвастун и нахал'
	},
	{
		id: '993',
		start: 3845.625,
		end: 3849.754,
		text: 'Только силу всю ты растерял!'
	},
	{
		id: '994',
		start: 3850.213,
		end: 3853.633,
		text: 'Дерзкий!\nНо давно уже не резкий!'
	},
	{
		id: '995',
		start: 3854.259,
		end: 3857.387,
		text: 'Ну а я, как прежде, в блеске!'
	},
	{
		id: '996',
		start: 3857.804,
		end: 3860.724,
		text: 'Ты судьбу свою\nС покорностью прими'
	},
	{
		id: '997',
		start: 3860.891,
		end: 3862.517,
		text: 'Се ля ви,\nмон ами'
	},
	{ id: '998', start: 3862.684, end: 3864.102, text: 'А я в блеске!' },
	{
		id: '999',
		start: 3864.2690000000002,
		end: 3867.147,
		text: 'На меня последний раз\nТы посмотри'
	},
	{ id: '1000', start: 3867.314, end: 3868.523, text: 'И умри' },
	{
		id: '1001',
		start: 3869.691,
		end: 3872.068,
		text: 'Мой аргумент самый веский!'
	},
	{
		id: '1002',
		start: 3872.652,
		end: 3876.239,
		text: 'Не жить тебе, мальчик, в блеске!'
	},
	{
		id: '1003',
		start: 3879.201,
		end: 3880.368,
		text: '-- Эй!\n-- Что?'
	},
	{
		id: '1004',
		start: 3881.077,
		end: 3882.746,
		text: 'А у меня есть кое-что блестящее!'
	},
	{
		id: '1005',
		start: 3884.998,
		end: 3887.292,
		text: 'Сердце Те Фити.'
	},
	{
		id: '1006',
		start: 3887.459,
		end: 3889.795,
		text: 'Ты от меня не убежишь!'
	},
	{
		id: '1007',
		start: 3889.9610000000002,
		end: 3891.963,
		text: 'Убежала.Ты продолжаешь меня удивлять.'
	},
	{
		id: '1008',
		start: 3894.424,
		end: 3896.718,
		text: 'На двух ножках далёко не уйдёшь.'
	},
	{ id: '1009', start: 3897.52, end: 3898.521, text: '(YELLS)' },
	{
		id: '1010',
		start: 3899.9809999999998,
		end: 3901.607,
		text: '(LAUGHING)'
	},
	{
		id: '1011',
		start: 3901.681,
		end: 3903.558,
		text: 'Власть сотворения...'
	},
	{
		id: '1012',
		start: 3903.725,
		end: 3905.227,
		text: 'для ракообразного.'
	},
	{
		id: '1013',
		start: 3905.435,
		end: 3906.812,
		text: 'Где оно? Где оно?'
	},
	{ id: '1014', start: 3907.604, end: 3909.147, text: 'Нам пора!' },
	{
		id: '1015',
		start: 3909.815,
		end: 3910.816,
		text: 'А как же сердце?'
	},
	{
		id: '1016',
		start: 3910.982,
		end: 3913.36,
		text: 'Пусть останется у него. У меня есть получше.'
	},
	{ id: '1017', start: 3914.861, end: 3916.154, text: 'Да, у меня...' },
	{ id: '1018', start: 3916.321, end: 3917.322, text: 'Погодите-ка.' },
	{
		id: '1019',
		start: 3917.781,
		end: 3920.367,
		text: 'Понятно, она взяла ракушку\nи покрыла её'
	},
	{
		id: '1020',
		start: 3920.534,
		end: 3923.662,
		text: 'биолюминисцентными водорослями, чтобы отвлечь меня.'
	},
	{
		id: '1021',
		start: 3926.1639999999998,
		end: 3927.207,
		text: 'А ну вернитесь!'
	},
	{ id: '1022', start: 3931.503, end: 3933.88, text: 'И-и-и-и-у-у-у!' },
	{ id: '1023', start: 3934.589, end: 3935.924, text: 'Эй!' },
	{
		id: '1024',
		start: 3936.091,
		end: 3937.968,
		text: 'Тебе понравилась песня?'
	},
	{ id: '1025', start: 3943.774, end: 3944.775, text: '(THUDDING)' },
	{ id: '1026', start: 3945.225, end: 3946.601, text: 'Мы уцелели!' },
	{
		id: '1027',
		start: 3946.768,
		end: 3947.7690000000002,
		text: 'Мы уцелели!'
	},
	{ id: '1028', start: 3949.729, end: 3950.73, text: 'Послушай...' },
	{
		id: '1029',
		start: 3950.897,
		end: 3952.816,
		text: 'Я благодарен за то, что ты сделала.'
	},
	{ id: '1030', start: 3953.15, end: 3954.151, text: 'Да.' },
	{
		id: '1031',
		start: 3954.192,
		end: 3955.277,
		text: '-- Это было смело.\n-- Да.'
	},
	{
		id: '1032',
		start: 3955.443,
		end: 3956.611,
		text: '-- Но...\n-- Да-да.'
	},
	{
		id: '1033',
		start: 3956.7780000000002,
		end: 3957.779,
		text: 'Извини.'
	},
	{
		id: '1034',
		start: 3957.946,
		end: 3960.991,
		text: 'Я впервые в жизни говорю искренне,\nа ты будто и не слушаешь.'
	},
	{
		id: '1035',
		start: 3961.158,
		end: 3963.076,
		text: 'Нет, нет. Что ты?'
	},
	{
		id: '1036',
		start: 3963.243,
		end: 3965.495,
		text: 'Правда? Ты на меня смотришь,\nбудто у меня...'
	},
	{ id: '1037', start: 3965.546, end: 3966.547, text: '(GASPS)' },
	{
		id: '1038',
		start: 3968.457,
		end: 3969.583,
		text: 'Акулья голова.'
	},
	{
		id: '1039',
		start: 3969.749,
		end: 3972.878,
		text: 'Что? У тебя акулья голова?'
	},
	{
		id: '1040',
		start: 3973.044,
		end: 3974.754,
		text: 'Короче, дело вот в чём...'
	},
	{
		id: '1041',
		start: 3974.921,
		end: 3977.841,
		text: 'Для маленькой девочки, ребёнка,\nкак тебя ни назови...'
	},
	{
		id: '1042',
		start: 3978.008,
		end: 3980.469,
		text: 'Которой вообще было не место\nтам внизу...'
	},
	{
		id: '1043',
		start: 3980.844,
		end: 3982.429,
		text: 'ты мне удружила.'
	},
	{
		id: '1044',
		start: 3982.596,
		end: 3984.681,
		text: 'Но ты чуть не погибла.'
	},
	{
		id: '1045',
		start: 3985.223,
		end: 3986.85,
		text: 'А я даже не смог победить глупого краба.'
	},
	{
		id: '1046',
		start: 3987.017,
		end: 3989.2690000000002,
		text: 'Наши шансы победить Те Ка...'
	},
	{
		id: '1047',
		start: 3989.436,
		end: 3990.562,
		text: 'Просто нулевые.'
	},
	{
		id: '1048',
		start: 3990.729,
		end: 3994.024,
		text: 'Нам не добраться до Те Фити.\nБезнадёжное это дело.'
	},
	{
		id: '1049',
		start: 3994.191,
		end: 3995.525,
		text: 'Нет, не безнадёжное.'
	},
	{ id: '1050', start: 3996.109, end: 3997.11, text: 'Акулья голова.' },
	{
		id: '1051',
		start: 3997.319,
		end: 4000.0299999999997,
		text: 'Не безнадёжное.'
	},
	{
		id: '1052',
		start: 4005.8360000000002,
		end: 4006.837,
		text: '(GROANS)'
	},
	{
		id: '1053',
		start: 4014.2110000000002,
		end: 4015.212,
		text: 'Безнадёжное.'
	},
	{
		id: '1054',
		start: 4019.299,
		end: 4021.426,
		text: 'В общем, пора сказать'
	},
	{
		id: '1055',
		start: 4021.593,
		end: 4023.4700000000003,
		text: 'Скоро мы умрём'
	},
	{
		id: '1056',
		start: 4023.678,
		end: 4025.2219999999998,
		text: 'Мы скоро умрём'
	},
	{
		id: '1057',
		start: 4026.181,
		end: 4028.016,
		text: 'Можешь хотя бы попытаться?'
	},
	{
		id: '1058',
		start: 4030.6440000000002,
		end: 4032.521,
		text: 'Гигантский ястреб.'
	},
	{
		id: '1059',
		start: 4035.315,
		end: 4038.151,
		text: 'Всё нормально, всё ок,\nскоро мы умрём'
	},
	{
		id: '1060',
		start: 4038.318,
		end: 4040.237,
		text: 'Ладно, перерыв закончился.'
	},
	{
		id: '1061',
		start: 4040.4030000000002,
		end: 4041.404,
		text: 'Вставай.'
	},
	{
		id: '1062',
		start: 4041.571,
		end: 4043.907,
		text: 'А что? Ты скажешь речь?'
	},
	{
		id: '1063',
		start: 4044.074,
		end: 4047.786,
		text: 'Уверишь меня, что я могу победить Те Ка,\nпотому что я Мауи?'
	},
	{
		id: '1064',
		start: 4049.579,
		end: 4050.58,
		text: 'Иди гуляй, мелкий.'
	},
	{
		id: '1065',
		start: 4056.628,
		end: 4059.089,
		text: 'Откуда берутся твои татуировки?'
	},
	{
		id: '1066',
		start: 4059.506,
		end: 4061.758,
		text: 'Они просто появляются. Когда я их зарабатываю.'
	},
	{
		id: '1067',
		start: 4062.759,
		end: 4065.5950000000003,
		text: 'А как ты заработал вот эту?\nО чём она напоминает?'
	},
	{
		id: '1068',
		start: 4065.762,
		end: 4068.974,
		text: 'Это когда люди открыли Несуйси.'
	},
	{
		id: '1069',
		start: 4069.224,
		end: 4070.267,
		text: 'А что это за Несуйси?'
	},
	{
		id: '1070',
		start: 4070.475,
		end: 4071.81,
		text: 'Несуйси не в своё дело.'
	},
	{
		id: '1071',
		start: 4073.353,
		end: 4074.646,
		text: 'Я ведь так и буду спрашивать.'
	},
	{ id: '1072', start: 4077.065, end: 4078.066, text: 'А эта за что?' },
	{
		id: '1073',
		start: 4078.775,
		end: 4080.819,
		text: 'Прекрати это делать.'
	},
	{
		id: '1074',
		start: 4085.449,
		end: 4087.033,
		text: '-- Отойди.\n-- Просто скажи, что это такое.'
	},
	{
		id: '1075',
		start: 4087.409,
		end: 4088.827,
		text: 'Я сказал, отойди.'
	},
	{
		id: '1076',
		start: 4088.994,
		end: 4090.745,
		text: 'Поэтому твой крюк не работает?'
	},
	{
		id: '1077',
		start: 4106.72,
		end: 4109.473,
		text: 'Не хочешь разговаривать - не надо.'
	},
	{
		id: '1078',
		start: 4109.89,
		end: 4111.975,
		text: 'Хочешь бросать меня в море -'
	},
	{ id: '1079', start: 4112.267, end: 4113.977, text: 'бросай.' },
	{
		id: '1080',
		start: 4114.144,
		end: 4117.481,
		text: 'Хочешь сказать мне,\nчто я не знаю, что делаю...'
	},
	{
		id: '1081',
		start: 4117.981,
		end: 4119.608,
		text: 'Я и сама это знаю.'
	},
	{
		id: '1082',
		start: 4120.525,
		end: 4123.737,
		text: 'Я понятия не имею, почему океан выбрал меня.'
	},
	{ id: '1083', start: 4123.904, end: 4125.614, text: 'Ты прав.' },
	{
		id: '1084',
		start: 4126.239,
		end: 4130.202,
		text: 'Но мой остров умирает,'
	},
	{
		id: '1085',
		start: 4130.702,
		end: 4134.08,
		text: 'и поэтому я здесь.'
	},
	{
		id: '1086',
		start: 4134.706,
		end: 4137.125,
		text: 'Здесь только ты и я.'
	},
	{
		id: '1087',
		start: 4137.292,
		end: 4139.961,
		text: 'И я хочу помочь тебе,'
	},
	{
		id: '1088',
		start: 4140.128,
		end: 4144.299,
		text: 'но я не могу этого сделать, если ты мне не даёшь.'
	},
	{ id: '1089', start: 4148.687, end: 4149.688, text: '(SIGHS)' },
	{
		id: '1090',
		start: 4149.805,
		end: 4152.265,
		text: 'Я не родился полубогом.'
	},
	{
		id: '1091',
		start: 4153.016,
		end: 4155.101,
		text: 'Мои родители были людьми.'
	},
	{
		id: '1092',
		start: 4157.521,
		end: 4161.483,
		text: 'Они посмотрели на меня и решили,'
	},
	{
		id: '1093',
		start: 4161.65,
		end: 4163.985,
		text: 'что я им не нужен.'
	},
	{
		id: '1094',
		start: 4164.4439999999995,
		end: 4166.655,
		text: 'Они выбросили меня в море,'
	},
	{
		id: '1095',
		start: 4167.03,
		end: 4170.117,
		text: 'как какой-то мусор.'
	},
	{
		id: '1096',
		start: 4171.701,
		end: 4175.1630000000005,
		text: 'Меня нашли боги.'
	},
	{
		id: '1097',
		start: 4175.33,
		end: 4177.207,
		text: 'Они дали мне крюк.'
	},
	{ id: '1098', start: 4177.624, end: 4179, text: 'Они сделали меня' },
	{ id: '1099', start: 4179.626, end: 4180.627, text: 'Мауи.' },
	{
		id: '1100',
		start: 4182.003,
		end: 4184.714,
		text: 'И я вернулся к людям.'
	},
	{
		id: '1101',
		start: 4185.09,
		end: 4189.01,
		text: 'Я дал им острова, огонь, кокосы.'
	},
	{
		id: '1102',
		start: 4190.011,
		end: 4192.222,
		text: 'Всё, что им было нужно.'
	},
	{
		id: '1103',
		start: 4193.014,
		end: 4195.308,
		text: 'Ты украл сердце для них.'
	},
	{
		id: '1104',
		start: 4196.017,
		end: 4198.895,
		text: 'Ты всё делал для них.'
	},
	{
		id: '1105',
		start: 4199.729,
		end: 4201.481,
		text: 'Чтобы они любили тебя.'
	},
	{
		id: '1106',
		start: 4202.107,
		end: 4205.11,
		text: 'Но им всё было мало.'
	},
	{
		id: '1107',
		start: 4213.41,
		end: 4216.746,
		text: 'Может, боги нашли тебя не просто так.'
	},
	{
		id: '1108',
		start: 4216.9130000000005,
		end: 4220.083,
		text: 'Может, океан принёс тебя к ним,'
	},
	{
		id: '1109',
		start: 4220.25,
		end: 4224.296,
		text: 'потому что он понял,\nчто ты достоин спасения.'
	},
	{
		id: '1110',
		start: 4225.589,
		end: 4229.176,
		text: 'Но не боги сделали тебя Мауи.'
	},
	{ id: '1111', start: 4229.885, end: 4231.094, text: 'А ты сам.' },
	{ id: '1112', start: 4240.562, end: 4242.397, text: 'Ладно, ладно.' },
	{
		id: '1113',
		start: 4243.356,
		end: 4245.942,
		text: 'Я тебя тоже люблю, приятель.'
	},
	{
		id: '1114',
		start: 4295.492,
		end: 4296.952,
		text: 'И-и-и-и-у-у-у!'
	},
	{ id: '1115', start: 4311.842, end: 4312.843, text: 'Ура!' },
	{
		id: '1116',
		start: 4337.033,
		end: 4339.661,
		text: 'Следующая остановка Те Фити.'
	},
	{ id: '1117', start: 4386.458, end: 4387.459, text: 'Что?' },
	{ id: '1118', start: 4387.626, end: 4389.169, text: 'Я всё понял.' },
	{
		id: '1119',
		start: 4390.4619999999995,
		end: 4394.216,
		text: 'Океану нравилось,\nкогда я поднимал из глубин острова,'
	},
	{
		id: '1120',
		start: 4394.382,
		end: 4398.136,
		text: 'потому что ваши предки\nплавали по морям и находили их.'
	},
	{
		id: '1121',
		start: 4398.678,
		end: 4401.64,
		text: 'Новые земли, новые деревни.'
	},
	{
		id: '1122',
		start: 4402.14,
		end: 4404.559,
		text: 'Они все были соединены водой.'
	},
	{
		id: '1123',
		start: 4404.976,
		end: 4406.645,
		text: 'И на месте океана,'
	},
	{
		id: '1124',
		start: 4406.812,
		end: 4410.816,
		text: 'наверное, я бы тоже\nстал искать кудрявую непринцессу,'
	},
	{
		id: '1125',
		start: 4411.65,
		end: 4413.485,
		text: 'чтобы это всё началось снова.'
	},
	{
		id: '1126',
		start: 4413.652,
		end: 4418.073,
		text: 'Это самое приятное,\nчто ты мне сказал.'
	},
	{
		id: '1127',
		start: 4419.116,
		end: 4421.451,
		text: 'Может, стоило приберечь это\nдля Те Фити.'
	},
	{
		id: '1128',
		start: 4422.8279999999995,
		end: 4423.954,
		text: 'Я так и сделал.'
	},
	{
		id: '1129',
		start: 4426.79,
		end: 4428.959,
		text: 'Моана с острова Мотунуи,'
	},
	{
		id: '1130',
		start: 4429.126,
		end: 4434.798,
		text: 'заявляю официально:\nты перевезла Мауи через море.'
	},
	{
		id: '1131',
		start: 4435.757,
		end: 4438.301,
		text: 'Моана! Моана! Моана!'
	},
	{
		id: '1132',
		start: 4438.76,
		end: 4440.595,
		text: 'Ты великолепна!'
	},
	{ id: '1133', start: 4442.43, end: 4443.473, text: 'Пора.' },
	{ id: '1134', start: 4461.741, end: 4463.201, text: 'Спаси мир.' },
	{
		id: '1135',
		start: 4464.8279999999995,
		end: 4466.455,
		text: 'И-и-и-и-у-у-у!'
	},
	{ id: '1136', start: 4482.563, end: 4483.564, text: '(GASPS)' },
	{
		id: '1137',
		start: 4483.814,
		end: 4484.8150000000005,
		text: '(ROARING)'
	},
	{ id: '1138', start: 4485.649, end: 4486.65, text: '(GROANS)' },
	{ id: '1139', start: 4486.85, end: 4487.851, text: 'Мауи!' },
	{
		id: '1140',
		start: 4522.677,
		end: 4523.804,
		text: 'Что ты делаешь?'
	},
	{
		id: '1141',
		start: 4524.179,
		end: 4525.847,
		text: 'Ищу, как нам лучше зайти!'
	},
	{
		id: '1142',
		start: 4527.516,
		end: 4529.226,
		text: '-- У нас не получится!\n-- Получится!'
	},
	{
		id: '1143',
		start: 4529.392,
		end: 4530.519,
		text: '-- Поверни лодку!\n-- Нет!'
	},
	{
		id: '1144',
		start: 4530.6849999999995,
		end: 4531.77,
		text: 'Моана, остановись!'
	},
	{ id: '1145', start: 4531.937, end: 4532.938, text: 'Нет!' },
	{
		id: '1146',
		start: 4536.533,
		end: 4537.534,
		text: '(BOTH SCREAMING)'
	},
	{ id: '1147', start: 4560.924, end: 4562.634, text: 'Ты в порядке?' },
	{ id: '1148', start: 4564.219, end: 4565.22, text: 'Мауи?' },
	{
		id: '1149',
		start: 4573.061,
		end: 4574.855,
		text: 'Я же сказал: поверни лодку.'
	},
	{
		id: '1150',
		start: 4577.274,
		end: 4578.817,
		text: 'Я думала, у нас получится.'
	},
	{ id: '1151', start: 4579.317, end: 4580.36, text: 'У нас?' },
	{
		id: '1152',
		start: 4581.903,
		end: 4583.905,
		text: 'Я думала, у меня получится.'
	},
	{
		id: '1153',
		start: 4585.824,
		end: 4587.075,
		text: 'Мы можем его починить.'
	},
	{
		id: '1154',
		start: 4587.242,
		end: 4589.327,
		text: 'Его сделали боги.'
	},
	{
		id: '1155',
		start: 4589.494,
		end: 4591.204,
		text: 'Его нельзя починить!'
	},
	{
		id: '1156',
		start: 4591.58,
		end: 4593.498,
		text: 'В следующий раз мы будем осторожнее.'
	},
	{
		id: '1157',
		start: 4594.082,
		end: 4596.126,
		text: 'Те Ка не может уйти с барьерных островов.'
	},
	{
		id: '1158',
		start: 4596.293,
		end: 4598.7119999999995,
		text: 'Она сделана из лавы и боится воды.'
	},
	{
		id: '1159',
		start: 4598.879,
		end: 4600.881,
		text: 'Мы можем обогнуть острова.'
	},
	{
		id: '1160',
		start: 4601.0470000000005,
		end: 4602.841,
		text: 'Я туда больше не вернусь.'
	},
	{
		id: '1161',
		start: 4603.925,
		end: 4605.469,
		text: 'Нам нужно вернуть сердце.'
	},
	{
		id: '1162',
		start: 4605.886,
		end: 4607.262,
		text: 'Мой крюк треснул.'
	},
	{
		id: '1163',
		start: 4607.429,
		end: 4609.014,
		text: 'Ещё один удар - и ему конец.'
	},
	{
		id: '1164',
		start: 4609.264,
		end: 4611.308,
		text: 'Мауи, ты должен вернуть сердце.'
	},
	{
		id: '1165',
		start: 4611.516,
		end: 4613.351,
		text: 'Без моего крюка я ничто.'
	},
	{
		id: '1166',
		start: 4613.5599999999995,
		end: 4614.686,
		text: 'Это неправда!'
	},
	{
		id: '1167',
		start: 4614.853,
		end: 4617.314,
		text: 'Без моего крюка я ничто!'
	},
	{ id: '1168', start: 4617.572, end: 4618.573, text: '(SHUDDERING)' },
	{
		id: '1169',
		start: 4626.948,
		end: 4628.116,
		text: 'Мы здесь только потому,'
	},
	{
		id: '1170',
		start: 4628.532999999999,
		end: 4631.411,
		text: 'что ты украл сердце!'
	},
	{
		id: '1171',
		start: 4632.7880000000005,
		end: 4635.415,
		text: 'Нет, потому что океан сказал тебе,\nчто ты особенная,'
	},
	{
		id: '1172',
		start: 4635.582,
		end: 4637.209,
		text: 'а ты ему поверила.'
	},
	{
		id: '1173',
		start: 4638.627,
		end: 4641.129,
		text: 'Я Моана с острова Мотунуи.'
	},
	{
		id: '1174',
		start: 4641.296,
		end: 4643.507,
		text: '-- Ты сядешь в мою лодку...\n-- До свидания, Моана.'
	},
	{
		id: '1175',
		start: 4643.673,
		end: 4644.674,
		text: '...пересечёшь море...'
	},
	{
		id: '1176',
		start: 4645.008,
		end: 4646.0509999999995,
		text: 'Я не пойду на смерть,'
	},
	{
		id: '1177',
		start: 4646.218,
		end: 4647.511,
		text: 'чтобы ты убедилась, что не права!'
	},
	{
		id: '1178',
		start: 4647.677,
		end: 4648.97,
		text: '...и вернёшь сердце Те Фити!'
	},
	{
		id: '1179',
		start: 4649.638,
		end: 4651.807,
		text: 'Океан выбрал меня!'
	},
	{ id: '1180', start: 4652.974, end: 4654.684, text: 'И ошибся.' },
	{
		id: '1181',
		start: 4664.1939999999995,
		end: 4665.487,
		text: 'Мауи!'
	},
	{
		id: '1182',
		start: 4680.418,
		end: 4682.921,
		text: 'Зачем ты принёс меня сюда?'
	},
	{
		id: '1183',
		start: 4687.8009999999995,
		end: 4689.719,
		text: 'Я не гожусь для этого.'
	},
	{
		id: '1184',
		start: 4692.43,
		end: 4695.433,
		text: 'Ты должен выбрать кого-то другого.'
	},
	{
		id: '1185',
		start: 4697.811,
		end: 4700.355,
		text: 'Выбери кого-то другого.'
	},
	{
		id: '1186',
		start: 4701.106,
		end: 4702.398999999999,
		text: 'Пожалуйста.'
	},
	{
		id: '1187',
		start: 4719.466,
		end: 4720.467000000001,
		text: '(SOBBING)'
	},
	{ id: '1188', start: 4721.585, end: 4722.836, text: 'Нет.' },
	{
		id: '1189',
		start: 4738.727,
		end: 4741.021,
		text: 'Бабушка: Ты далеко\nза рифом.'
	},
	{ id: '1190', start: 4742.397, end: 4743.398, text: 'Бабуля?' },
	{
		id: '1191',
		start: 4745.4,
		end: 4748.32,
		text: 'Видимо, я выбрала правильную татуировку.'
	},
	{ id: '1192', start: 4748.945, end: 4749.988, text: 'Бабуля!' },
	{
		id: '1193',
		start: 4755.452,
		end: 4757.579,
		text: 'Я старалась, бабуля.'
	},
	{
		id: '1194',
		start: 4759.456,
		end: 4761.124,
		text: 'У меня не получилось.'
	},
	{
		id: '1195',
		start: 4761.9580000000005,
		end: 4764.461,
		text: 'Ты не виновата.'
	},
	{
		id: '1196',
		start: 4764.628,
		end: 4768.34,
		text: 'Мне не стоило взваливать\nна тебя такую тяжёлую ношу.'
	},
	{
		id: '1197',
		start: 4769.174,
		end: 4771.134,
		text: 'Если ты готова плыть домой,'
	},
	{ id: '1198', start: 4772.719, end: 4774.679, text: 'я буду рядом.' },
	{
		id: '1199',
		start: 4791.279,
		end: 4792.906,
		text: 'Что тебя останавливает?'
	},
	{
		id: '1200',
		start: 4794.3240000000005,
		end: 4795.992,
		text: 'Я не знаю.'
	},
	{
		id: '1201',
		start: 4799.579,
		end: 4801.832,
		text: 'Я знаю одну девчушку'
	},
	{
		id: '1202',
		start: 4802.9580000000005,
		end: 4805.627,
		text: 'Всего добилась сама'
	},
	{
		id: '1203',
		start: 4806.044,
		end: 4808.9220000000005,
		text: 'Она любит море и волны'
	},
	{
		id: '1204',
		start: 4809.548,
		end: 4811.716,
		text: 'И острову предана'
	},
	{
		id: '1205',
		start: 4812.884,
		end: 4815.428,
		text: 'Бывают на небе тучи'
	},
	{
		id: '1206',
		start: 4816.346,
		end: 4819.141,
		text: 'И дыбом встаёт земля'
	},
	{
		id: '1207',
		start: 4819.307,
		end: 4822.0599999999995,
		text: 'Но нас невзгоды научат'
	},
	{
		id: '1208',
		start: 4822.227,
		end: 4824.855,
		text: 'Звёзды не терять'
	},
	{
		id: '1209',
		start: 4825.814,
		end: 4828.733,
		text: 'Любить тебя люди будут'
	},
	{
		id: '1210',
		start: 4829.151,
		end: 4832.028,
		text: 'И звёзды тебя не забудут'
	},
	{
		id: '1211',
		start: 4832.237,
		end: 4835.5740000000005,
		text: 'Ты в вечность открыла дверцу'
	},
	{
		id: '1212',
		start: 4835.74,
		end: 4839.119,
		text: 'Доверившись зову сердца'
	},
	{
		id: '1213',
		start: 4839.286,
		end: 4842.414,
		text: 'И когда голос шепчет'
	},
	{
		id: '1214',
		start: 4842.581,
		end: 4845.25,
		text: '«Моана, мы на пороге мечты»'
	},
	{
		id: '1215',
		start: 4846.0419999999995,
		end: 4847.752,
		text: 'Моана, пора'
	},
	{
		id: '1216',
		start: 4847.919,
		end: 4852.632,
		text: 'Осознать, кто же ты'
	},
	{ id: '1217', start: 4854.885, end: 4856.303, text: 'Кто я?' },
	{
		id: '1218',
		start: 4858.346,
		end: 4861.808,
		text: 'Я та, кто влюблена в свой остров'
	},
	{
		id: '1219',
		start: 4862.184,
		end: 4865.645,
		text: 'И в бескрайний океан'
	},
	{
		id: '1220',
		start: 4866.146,
		end: 4869.023999999999,
		text: 'Он зовёт меня'
	},
	{
		id: '1221',
		start: 4871.318,
		end: 4874.029,
		text: 'И я наследница и дочь вождя'
	},
	{
		id: '1222',
		start: 4874.738,
		end: 4877.5740000000005,
		text: 'И мы потомки мореплавателей'
	},
	{
		id: '1223',
		start: 4878.032999999999,
		end: 4880.41,
		text: 'Что переплыли все моря'
	},
	{
		id: '1224',
		start: 4880.827,
		end: 4882.7880000000005,
		text: 'Они зовут меня'
	},
	{
		id: '1225',
		start: 4884.498,
		end: 4887.125,
		text: 'Я смогла найти свой путь сюда!'
	},
	{
		id: '1226',
		start: 4887.6669999999995,
		end: 4890.295,
		text: 'Шла дорогой долгой'
	},
	{
		id: '1227',
		start: 4890.796,
		end: 4893.423,
		text: 'Всё равно меня зовёт вода'
	},
	{
		id: '1228',
		start: 4893.59,
		end: 4895.592000000001,
		text: 'Это долг мой!'
	},
	{
		id: '1229',
		start: 4897.552,
		end: 4899.805,
		text: 'Этот зов, он со мною всегда'
	},
	{ id: '1230', start: 4899.971, end: 4902.766, text: 'Не смолкает' },
	{
		id: '1231',
		start: 4903.225,
		end: 4905.1849999999995,
		text: 'Он как отлив'
	},
	{
		id: '1232',
		start: 4905.352,
		end: 4909.689,
		text: 'В море увлекает'
	},
	{
		id: '1233',
		start: 4910.0650000000005,
		end: 4912.484,
		text: 'И ты в сердце моём будешь жить'
	},
	{ id: '1234', start: 4912.651, end: 4915.737, text: 'Оно знает' },
	{
		id: '1235',
		start: 4915.904,
		end: 4918.8240000000005,
		text: 'С тобой смогла'
	},
	{ id: '1236', start: 4918.99, end: 4921.993, text: 'Понять, кто я!' },
	{ id: '1237', start: 4922.16, end: 4926.79, text: 'Да, я Моана!' },
	{ id: '1238', start: 4956.87, end: 4957.871, text: '(GRUNTS)' },
	{
		id: '1239',
		start: 4961.241,
		end: 4963.41,
		text: 'Я Моана с острова Мотунуи.'
	},
	{ id: '1240', start: 4965.036, end: 4966.037, text: 'В моей лодке' },
	{
		id: '1241',
		start: 4966.204,
		end: 4968.331,
		text: 'я пересеку море'
	},
	{
		id: '1242',
		start: 4968.79,
		end: 4971.668,
		text: 'и верну сердце Те Фити.'
	},
	{
		id: '1243',
		start: 5007.954,
		end: 5010.04,
		text: 'Те Ка не может пойти за нами в воду.'
	},
	{
		id: '1244',
		start: 5010.791,
		end: 5012.125,
		text: 'Если мы пройдём барьерные острова,'
	},
	{
		id: '1245',
		start: 5013.126,
		end: 5014.336,
		text: 'то попадём на Те Фити.'
	},
	{
		id: '1246',
		start: 5014.878,
		end: 5016.0869999999995,
		text: 'Ты ничего этого не понимаешь,'
	},
	{
		id: '1247',
		start: 5016.88,
		end: 5018.381,
		text: 'потому что ты петух.\n-- (CLUCKING)'
	},
	{ id: '1248', start: 5025.23, end: 5026.231, text: '(ROARING)' },
	{ id: '1249', start: 5075.363, end: 5077.157, text: '(GRUNTING)' },
	{ id: '1250', start: 5080.91, end: 5081.911, text: '(YELPS)' },
	{ id: '1251', start: 5084.906, end: 5085.907, text: 'Нет!' },
	{
		id: '1252',
		start: 5087.159,
		end: 5089.619,
		text: 'Хейхей! Нет, нет, нет!'
	},
	{ id: '1253', start: 5091.204, end: 5092.289, text: 'Молодец!' },
	{ id: '1254', start: 5101.756, end: 5103.175, text: 'Те Фити.' },
	{
		id: '1255',
		start: 5114.9439999999995,
		end: 5115.945,
		text: '(COUGHING)'
	},
	{ id: '1256', start: 5120.2, end: 5121.201, text: '(GRUNTING)' },
	{
		id: '1257',
		start: 5125.079,
		end: 5126.08,
		text: '(EAGLE SCREECHING)'
	},
	{ id: '1258', start: 5128.366, end: 5129.409, text: 'Мауи!' },
	{ id: '1259', start: 5133.914, end: 5135.248, text: 'Ты вернулся.' },
	{ id: '1260', start: 5135.298, end: 5136.299, text: '(CHUCKLES)' },
	{ id: '1261', start: 5138.794, end: 5140.086, text: 'Но твой крюк.' },
	{
		id: '1262',
		start: 5140.253,
		end: 5141.838,
		text: 'Ещё один удар, и...'
	},
	{
		id: '1263',
		start: 5142.631,
		end: 5144.132,
		text: 'Пусть Те Ка сначала меня поймает.'
	},
	{
		id: '1264',
		start: 5144.516,
		end: 5145.517,
		text: '(TE KĀ ROARING)'
	},
	{
		id: '1265',
		start: 5147.26,
		end: 5149.304,
		text: 'Я тебя прикрою, избранная.'
	},
	{ id: '1266', start: 5149.763, end: 5150.889, text: 'Спасай мир.' },
	{ id: '1267', start: 5150.972, end: 5152.015, text: 'Мауи.' },
	{ id: '1268', start: 5152.682, end: 5153.725, text: 'Спасибо.' },
	{ id: '1269', start: 5154.684, end: 5155.977, text: 'Не за что.' },
	{
		id: '1270',
		start: 5156.686,
		end: 5158.313,
		text: 'И-и-и-и-у-у-у!'
	},
	{ id: '1271', start: 5162.992, end: 5163.993, text: '(SCREAMING)' },
	{
		id: '1272',
		start: 5177.04,
		end: 5178.2080000000005,
		text: 'Горячо, горячо, горячо!'
	},
	{ id: '1273', start: 5189.678, end: 5191.138, text: 'Эй, Те Ка!' },
	{
		id: '1274',
		start: 5192.055,
		end: 5193.098,
		text: 'Акулья голова!'
	},
	{
		id: '1275',
		start: 5194.432,
		end: 5195.517,
		text: 'И-и-и-и-у-у-у!'
	},
	{ id: '1276', start: 5198.945, end: 5199.946, text: '(GROANS)' },
	{
		id: '1277',
		start: 5205.9439999999995,
		end: 5207.07,
		text: 'Моана!'
	},
	{
		id: '1278',
		start: 5217.289,
		end: 5219.249,
		text: 'Отнеси сердце к спирали!'
	},
	{ id: '1279', start: 5257.037, end: 5259.122, text: 'Те Фити...' },
	{ id: '1280', start: 5259.289, end: 5260.749, text: 'Исчезла.' },
	{ id: '1281', start: 5273.345, end: 5275.055, text: 'Те Ка!' },
	{
		id: '1282',
		start: 5276.814,
		end: 5278.775,
		text: '(SHOUTING IN FOREIGN LANGUAGE)'
	},
	{
		id: '1283',
		start: 5311.007,
		end: 5312.5509999999995,
		text: 'Пусть она подойдёт ко мне.'
	},
	{
		id: '1284',
		start: 5326.364,
		end: 5328.0740000000005,
		text: '(ROARING)'
	},
	{
		id: '1285',
		start: 5335.5740000000005,
		end: 5339.077,
		text: 'Не гадала, что так вот тебя найду'
	},
	{
		id: '1286',
		start: 5346.376,
		end: 5349.0869999999995,
		text: 'Я вижу тебя'
	},
	{
		id: '1287',
		start: 5352.549,
		end: 5356.386,
		text: 'Твоё сердце украли, навлекли беду'
	},
	{
		id: '1288',
		start: 5361.141,
		end: 5364.227,
		text: 'Винить тебя не буду'
	},
	{
		id: '1289',
		start: 5367.772,
		end: 5371.651,
		text: 'Просто нужно остыть'
	},
	{
		id: '1290',
		start: 5373.487,
		end: 5378.617,
		text: 'Так решай, кто же ты'
	},
	{
		id: '1291',
		start: 5385.582,
		end: 5388.251,
		text: 'Кто ты на самом деле.'
	},
	{ id: '1292', start: 5411.441, end: 5412.818, text: 'Те Фити!' },
	{
		id: '1293',
		start: 5450.279,
		end: 5451.28,
		text: '(HEIHEI SCREECHING)'
	},
	{ id: '1294', start: 5452.983, end: 5454.359, text: 'Петух выжил!' },
	{
		id: '1295',
		start: 5456.236,
		end: 5458.238,
		text: 'Мне жаль, что твой крюк пропал.'
	},
	{
		id: '1296',
		start: 5458.738,
		end: 5461.741,
		text: 'Ну, с крюком или без крюка'
	},
	{ id: '1297', start: 5462.242, end: 5463.827, text: 'я Мауи.' },
	{ id: '1298', start: 5482.721, end: 5484.514, text: 'Те Фити!' },
	{
		id: '1299',
		start: 5484.564,
		end: 5485.5650000000005,
		text: '(LAUGHING SHEEPISHLY)'
	},
	{
		id: '1300',
		start: 5485.682,
		end: 5487.559,
		text: 'Привет, как дела?'
	},
	{
		id: '1301',
		start: 5489.735,
		end: 5490.736,
		text: '(CLEARS THROAT)'
	},
	{
		id: '1302',
		start: 5490.854,
		end: 5493.231,
		text: 'Слушай, то, что я сделал...'
	},
	{
		id: '1303',
		start: 5493.398,
		end: 5494.858,
		text: 'Это было нехорошо.'
	},
	{
		id: '1304',
		start: 5495.025,
		end: 5497.027,
		text: 'У меня нет оправданий.'
	},
	{
		id: '1305',
		start: 5497.6939999999995,
		end: 5498.695,
		text: 'Прости меня.'
	},
	{ id: '1306', start: 5504.5, end: 5505.543, text: '(GASPS)' },
	{
		id: '1307',
		start: 5507.746,
		end: 5511.374,
		text: 'Знаешь, невежливо отказываться\nот дара богини.'
	},
	{
		id: '1308',
		start: 5512.375,
		end: 5514.294,
		text: 'И-и-и-и-у-у-у!'
	},
	{
		id: '1309',
		start: 5516.0869999999995,
		end: 5517.13,
		text: 'Спасибо.'
	},
	{
		id: '1310',
		start: 5517.214,
		end: 5519.758,
		text: 'Я потрясён твоей добротой.'
	},
	{
		id: '1311',
		start: 5519.925,
		end: 5520.9259999999995,
		text: 'И-и-и-и-у-у-у!'
	},
	{
		id: '1312',
		start: 5569.641,
		end: 5571.101000000001,
		text: 'Буду скучать по тебе, петушок.'
	},
	{
		id: '1313',
		start: 5571.268,
		end: 5572.269,
		text: 'Ты можешь поплыть с нами.'
	},
	{
		id: '1314',
		start: 5573.27,
		end: 5576.606,
		text: 'Моему народу понадобится\nискусный мореплаватель.'
	},
	{
		id: '1315',
		start: 5578.316,
		end: 5580.235,
		text: 'У твоего народа он уже есть.'
	},
	{
		id: '1316',
		start: 5598.628,
		end: 5599.796,
		text: 'До встречи, Мауи.'
	},
	{
		id: '1317',
		start: 5600.714,
		end: 5602.966,
		text: 'До встречи, Моана.'
	},
	{
		id: '1318',
		start: 5603.633,
		end: 5604.885,
		text: 'И-и-и-и-у-у-у!'
	},
	{
		id: '1319',
		start: 5656.186,
		end: 5657.853999999999,
		text: 'Мама! Папа!'
	},
	{
		id: '1320',
		start: 5658.021000000001,
		end: 5659.189,
		text: 'Моана!'
	},
	{
		id: '1321',
		start: 5667.197,
		end: 5671.785,
		text: 'Я немного заплыла за риф.'
	},
	{
		id: '1322',
		start: 5673.0779999999995,
		end: 5674.704,
		text: 'Ты молодец.'
	},
	{
		id: '1323',
		start: 5674.871,
		end: 5675.914000000001,
		text: 'Она вернулась!'
	},
	{ id: '1324', start: 5676.081, end: 5677.082, text: 'Моана!' },
	{ id: '1325', start: 5677.249, end: 5678.25, text: 'Пуа!' },
	{
		id: '1326',
		start: 5680.71,
		end: 5681.710999999999,
		text: 'Моана!'
	},
	{
		id: '1327',
		start: 5683.5470000000005,
		end: 5684.880999999999,
		text: 'Добро пожаловать домой!'
	},
	{
		id: '1328',
		start: 5697.401,
		end: 5698.903,
		text: '(VILLAGERS CHEERING)'
	},
	{
		id: '1329',
		start: 5734.764,
		end: 5736.933,
		text: 'Уходим к берегам'
	},
	{
		id: '1330',
		start: 5737.1,
		end: 5741.146000000001,
		text: 'Которых не знавал никто другой'
	},
	{
		id: '1331',
		start: 5743.6900000000005,
		end: 5745.942,
		text: 'Наш остров очень дорог нам'
	},
	{
		id: '1332',
		start: 5746.610000000001,
		end: 5750.781,
		text: 'Всегда вернуться сможем\nМы в дом родной'
	},
	{
		id: '1333',
		start: 5752.532,
		end: 5755.452,
		text: 'Мы новых открыватели земель'
	},
	{
		id: '1334',
		start: 5756.119000000001,
		end: 5760.624,
		text: 'Мы чтим заветы своих предков\nПокорителей морей'
	},
	{
		id: '1335',
		start: 5767.880999999999,
		end: 5772.552,
		text: 'Вперёд, смелей!'
	},
	{
		id: '1336',
		start: 5780.776,
		end: 5782.82,
		text: '(MUSIC PLAYING)'
	},
	{
		id: '1337',
		start: 6367.564,
		end: 6368.898999999999,
		text: 'В блеске!'
	},
	{
		id: '1338',
		start: 6369.483,
		end: 6371.985000000001,
		text: 'Я живу в блеске!'
	},
	{
		id: '1339',
		start: 6372.5689999999995,
		end: 6374.404,
		text: 'А толку никакого, да?'
	},
	{
		id: '1340',
		start: 6374.571,
		end: 6376.531,
		text: 'Так и лежу вверх ногами.'
	},
	{
		id: '1341',
		start: 6376.698,
		end: 6378.909,
		text: 'Меня просто надо немного подтолкнуть.'
	},
	{
		id: '1342',
		start: 6379.4580000000005,
		end: 6380.459,
		text: '(GROANS)'
	},
	{
		id: '1343',
		start: 6381.077,
		end: 6382.0779999999995,
		text: 'А если по-честному?'
	},
	{
		id: '1344',
		start: 6382.245,
		end: 6385.665,
		text: 'Если бы меня звали Себастьяном\nи у меня был бы ямайский акцент,'
	},
	{
		id: '1345',
		start: 6385.791,
		end: 6387.0419999999995,
		text: 'вы бы, несомненно, мне помогли.'
	},
	{
		id: '1346',
		start: 6387.209,
		end: 6388.752,
		text: 'Точно бы помогли. Вы же знаете, что это так.'
	}
]

const Home: React.FC = props => {
	const contentRef = useRef<HTMLIonContentElement>(null)!

	const src = 'http://192.168.0.189:8080/moana320x135.mp4'

	return (
		<IonPage>
			<IonContent fullscreen ref={contentRef}>
				<MediaPlayer {...{ src, phrases, phrasesTr, contentRef }} />
			</IonContent>
		</IonPage>
	)
}

export default Home
