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

const Home: React.FC = props => {
	const contentRef = useRef<HTMLIonContentElement>(null)!

	const src = 'http://192.168.0.189:8080/moana320x135.mp4'

	return (
		<IonPage>
			<IonContent fullscreen ref={contentRef}>
				<MediaPlayer {...{ src, phrases, contentRef }} />
			</IonContent>
		</IonPage>
	)
}

export default Home
