import React, { Component } from 'react';
import BeerItem from '../../Components/BeerItem'
import Filter from '../../Components/Filter'
import '../../Assets/css/common.css'
import './Dashboard.css'


class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    "id": "tmEthz",
                    "name": "\"Admiral\" Stache Test testing test tester",
                    "description": "Milwaukee Brewing Co’s take on a classic European style. Baltic Porters are the stronger lager fermented cousin of the classic London Porter. The higher strength and cold fermentation help to create a smooth, less fruity porter, rich in roasted malt flavors and aromas. The “Admiral” Stache has a deep brown hue with a light caramel head. Toffee and milk chocolate dominate the flavor with subtle hints of dried fruit. One month of aging in Bourbon Barrels imparted a layer of vanilla and oak.\r\n\r\nWe first developed this beer in 2007. Our first attempted batch of beer at the 2nd street location was a Baltic Porter. What we ended up with became known as “Shake Down Nut Brown”. You can guess what went wrong from there… But, so many things right! Every year that has gone by, the beer has gotten a little bit stronger, in flavor and alcohol.\r\n\r\nWe use a black malt for the dark rich color and an extra special malt for the dried fruit flavors. Baltic Porters are fermented cold with a lager yeast. That long slow maturation creates a smooth flavor profile. The anticipation of the bourbon barrel aging it the most exciting part of this brew process. We want that oak character with hints of bourbon, we use 3rd run barrels for this result. Each batch has been slightly different from the last.",
                    "abv": "7",
                    "ibu": "23",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Seasonal",
                        "description": "Available at the same time of year, every year.",
                        "id": 4
                    },
                    "style": {
                        "category": {
                            "name": "Other Lager",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Baltic-Style Porter",
                        "shortName": "Baltic Porter",
                        "description": "A true smooth cold-fermented and cold lagered beer, brewed with lager yeast. Black to very deep ruby/garnet in color. Overall, Baltic Porters have a very smooth lagered character with distinctive caramelized sugars, licorice and chocolate-like character of roasted malts and dark sugars. Roasted dark malts should not contribute bitterness, or astringent roast character. A low degree of smokiness from malt may be evident. Debitterized roast malts are best used for this style. Because of its alcoholic strength, aroma may include gentle (low) lager fruitiness (berries, grapes, plums, not banana; ale-like fruitiness from warm temperature fermentation is not appropriate), complex alcohols, cocoa-like, roast malt (and sometimes coffee-like roast barley, yet not bitter). Hop aroma is very low, though a hint of floral or sweet hop aroma can complement aromatics and flavor without dominance. Baltic Porters are not hop bitter dominated and expressed as low to medium-low. Baltic porters range from having medium to full body complemented with a medium-low to medium level of malty sweetness. No butterscotch-like diacetyl or sweet corn-like dimethylsulfide (DMS) should be apparent in aroma or flavor.",
                        "ibuMin": "35",
                        "ibuMax": "40",
                        "abvMin": "7.5",
                        "abvMax": "9",
                        "srmMin": "40",
                        "srmMax": "40",
                        "ogMin": "1.072",
                        "fgMin": "1.016",
                        "fgMax": "1.022",
                        "id": 104
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/tmEthz/upload_3Jl1St-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/tmEthz/upload_3Jl1St-large.png"
                    }
                },
                {
                    "id": "WfTRD1",
                    "name": "#1 Brown Brett Braggot",
                    "description": "This beer started its life as a brown ale that just wanted to be a bit more. Our farmer Rally, who picks up spent grains also happens to have a pretty thriving bee business. He transports his hives from state to state pollinating large crops for farms as far south as Georgia peach orchards and up north to Maine for Blueberry fields. Having just returned from a blueberry pollination in Maine and looking to sell off some of his honey we jumped on close to 200 lbs of this liquid gold and added it to the brown ale during secondary fermentation. Also added to the Disco funk tank was a blend of yeast, one a Belgian Saison Yeast and the other, our buddy Brettanomyces (aka Brett). This wild yeast strain adds that slight Belgian Funk to our tank and get’s the disco party started.",
                    "abv": "6",
                    "ibu": "18",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": null,
                    "style": {
                        "category": {
                            "name": "Mead, Cider, & Perry",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Braggot",
                        "shortName": "Braggot",
                        "description": "A harmonious blend of mead and beer, with the distinctive characteristics of both. A wide range of results are possible, depending on the base style of beer, variety of honey and overall sweetness and strength. Beer flavors tend to somewhat mask typical honey flavors found in other meads.",
                        "ibuMin": null,
                        "ibuMax": null,
                        "abvMin": null,
                        "abvMax": null,
                        "srmMin": null,
                        "srmMax": null,
                        "ogMin": null,
                        "fgMin": null,
                        "fgMax": null,
                        "id": 147
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/WfTRD1/upload_pvShMp-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/WfTRD1/upload_pvShMp-large.png"
                    }
                },
                {
                    "id": "uLkd3a",
                    "name": "#2 Brett Golden Sour",
                    "description": "This beer had a long weekend in our brew kettle allowing beer bugs (Pediococcus and Latcobacillus) to get down get down and do their sour thang. While yeast strains eat sugar and produce alcohol beer bugs eat sugar and produce acids. This gives sour beers their puckering power. After letting the bugs play in the sweet wort pool we boil the beer and add a touch of earthy hops. Disco Pig #2 Brett Golden Sour is 100% Brett fermented to replicate as closely as possible what a traditional Belgian wild fermented sour beer should be!",
                    "abv": "6.5",
                    "ibu": "9",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": null,
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "Golden or Blonde Ale",
                        "shortName": "Blonde",
                        "description": "Golden or Blonde ales are straw to golden blonde in color. They have a crisp, dry palate, light to medium body, and light malt sweetness. Low to medium hop aroma may be present but does not dominate. Bitterness is low to medium. Fruity esters may be perceived but do not predominate. Diacetyl should not be perceived. Chill haze should be absent.",
                        "ibuMin": "15",
                        "ibuMax": "25",
                        "abvMin": "4",
                        "abvMax": "5",
                        "srmMin": "3",
                        "srmMax": "7",
                        "ogMin": "1.045",
                        "fgMin": "1.008",
                        "fgMax": "1.016",
                        "id": 36
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/uLkd3a/upload_dag3lM-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/uLkd3a/upload_dag3lM-large.png"
                    }
                },
                {
                    "id": "hB0QeO",
                    "name": "#9",
                    "description": "Not quite pale ale.  A beer cloaked in secrecy.  An ale whose mysterious unusual palate will swirl across your tongue and ask more questions than it answers.\r\n\r\nA sort of dry, crisp, fruity, refreshing, not-quite pale ale.  #9 is really impossible to describe because there's never been anything else quite like it.  Our secret ingredient introduces a most unusual aroma which is balanced with residual sweetness.",
                    "abv": "5.1",
                    "ibu": "20",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Year Round",
                        "description": "Available year round as a staple beer.",
                        "id": 1
                    },
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "American-Style Pale Ale",
                        "shortName": "American Pale",
                        "description": "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
                        "ibuMin": "30",
                        "ibuMax": "42",
                        "abvMin": "4.5",
                        "abvMax": "5.6",
                        "srmMin": "6",
                        "srmMax": "14",
                        "ogMin": "1.044",
                        "fgMin": "1.008",
                        "fgMax": "1.014",
                        "id": 25
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/hB0QeO/upload_tI37PC-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/hB0QeO/upload_tI37PC-large.png"
                    }
                },
                {
                    "id": "m8f62Y",
                    "name": "#KoLSCH",
                    "description": "Social Media have revolutionized human interaction ... and for all their pro's and con's, they cannot be overlooked for their power to give a platform to be heard, a voice to the otherwise voiceless. \r\n\r\nAs a nod to this, we bring you \"#KÖLSCH\" Köln-style Ale. We start by stripping our water down to the bare essentials then rebuild it to match the mineral content of the water in Köln, Germany. Then we add in tons of German Pilsner malts and eine kleine menge of German Perle and Tettnang hops. Easy going, crisp and refreshing!",
                    "abv": "4.8",
                    "ibu": "27",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pilsner",
                        "id": 4
                    },
                    "available": {
                        "name": "Year Round",
                        "description": "Available year round as a staple beer.",
                        "id": 1
                    },
                    "style": {
                        "category": {
                            "name": "German Origin Ales",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "German-Style Kölsch / Köln-Style Kölsch",
                        "shortName": "Kölsch",
                        "description": "Kölsch is warm fermented and aged at cold temperatures (German ale or alt-style beer). Kölsch is characterized by a golden to straw color and a slightly dry, subtly sweet softness on the palate, yet crisp. Good, dense head retention is desirable. Light pearapple-Riesling wine-like fruitiness may be apparent, but is not necessary for this style. Caramel character should not be evident. The body is light to medium-light. This beer has low hop flavor and aroma with medium bitterness. Wheat can be used in brewing this beer. Ale yeast is used for fermentation, though lager yeast is sometimes used in the bottle or final cold conditioning process. Fruity esters should be minimally perceived, if at all. Chill haze should be absent.",
                        "ibuMin": "18",
                        "ibuMax": "25",
                        "abvMin": "4.8",
                        "abvMax": "5.3",
                        "srmMin": "4",
                        "srmMax": "6",
                        "ogMin": "1.042",
                        "fgMin": "1.006",
                        "fgMax": "1.01",
                        "id": 45
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/m8f62Y/upload_IHiHKI-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/m8f62Y/upload_IHiHKI-large.png"
                    }
                },
                {
                    "id": "Tx1Y4D",
                    "name": "#NOFILTER IPA",
                    "description": "Juicy New England style IPA dry hopped with a massive amount of citra and mosaic hops.",
                    "abv": "7",
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": null,
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "American-Style India Pale Ale",
                        "shortName": "American IPA",
                        "description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
                        "ibuMin": "50",
                        "ibuMax": "70",
                        "abvMin": "6.3",
                        "abvMax": "7.5",
                        "srmMin": "6",
                        "srmMax": "14",
                        "ogMin": "1.06",
                        "fgMin": "1.012",
                        "fgMax": "1.018",
                        "id": 30
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/Tx1Y4D/upload_oZCVc7-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/Tx1Y4D/upload_oZCVc7-large.png"
                    }
                },
                {
                    "id": "zrbNet",
                    "name": "#NOHOLDSIE Holdsie Da Deuce",
                    "description": "Rye Tripel aged in red Wine Barrels",
                    "abv": "8.2",
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": {
                        "name": "Limited",
                        "description": "Limited availability.",
                        "id": 2
                    },
                    "style": {
                        "category": {
                            "name": "Belgian And French Origin Ales",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Belgian-Style Tripel",
                        "shortName": "Belgian Tripel",
                        "description": "Tripels are often characterized by a complex, sometimes mild spicy character. Clove-like phenolic flavor and aroma may be evident at extremely low levels. Yeast-generated  fruity esters, including banana, are also common, but not necessary. These pale/light-colored ales may finish sweet, though any sweet finish should be light. The beer is characteristically medium and clean in body with an equalizing hop/malt balance and a perception of medium to medium high hop bitterness. Traditional Belgian Tripels are often well attenuated. Brewing sugar may be used to lighten the perception of body. Its sweetness will come from very pale malts. There should not be character from any roasted or dark malts. Low hop flavor is acceptable. Alcohol strength and flavor should be perceived as evident. Head retention is dense and mousse-like. Chill haze is acceptable at low serving temperatures. Traditional Tripels are bottle conditioned, may exhibit slight yeast haze but the yeast should not be intentionally roused. Oxidative character if evident in aged Tripels should be mild and pleasant.",
                        "ibuMin": "20",
                        "ibuMax": "45",
                        "abvMin": "7",
                        "abvMax": "10",
                        "srmMin": "4",
                        "srmMax": "9",
                        "ogMin": "1.07",
                        "fgMin": "1.01",
                        "fgMax": "1.018",
                        "id": 59
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/zrbNet/upload_NO3CdZ-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/zrbNet/upload_NO3CdZ-large.png"
                    }
                },
                {
                    "id": "EV2zxl",
                    "name": "#NOHOLDSIE Holdsie San",
                    "description": "Rye Tripel aged in Bourbon Barrels",
                    "abv": "8.2",
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": {
                        "name": "Limited",
                        "description": "Limited availability.",
                        "id": 2
                    },
                    "style": {
                        "category": {
                            "name": "Belgian And French Origin Ales",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Belgian-Style Tripel",
                        "shortName": "Belgian Tripel",
                        "description": "Tripels are often characterized by a complex, sometimes mild spicy character. Clove-like phenolic flavor and aroma may be evident at extremely low levels. Yeast-generated  fruity esters, including banana, are also common, but not necessary. These pale/light-colored ales may finish sweet, though any sweet finish should be light. The beer is characteristically medium and clean in body with an equalizing hop/malt balance and a perception of medium to medium high hop bitterness. Traditional Belgian Tripels are often well attenuated. Brewing sugar may be used to lighten the perception of body. Its sweetness will come from very pale malts. There should not be character from any roasted or dark malts. Low hop flavor is acceptable. Alcohol strength and flavor should be perceived as evident. Head retention is dense and mousse-like. Chill haze is acceptable at low serving temperatures. Traditional Tripels are bottle conditioned, may exhibit slight yeast haze but the yeast should not be intentionally roused. Oxidative character if evident in aged Tripels should be mild and pleasant.",
                        "ibuMin": "20",
                        "ibuMax": "45",
                        "abvMin": "7",
                        "abvMax": "10",
                        "srmMin": "4",
                        "srmMax": "9",
                        "ogMin": "1.07",
                        "fgMin": "1.01",
                        "fgMax": "1.018",
                        "id": 59
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/EV2zxl/upload_3mwAdV-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/EV2zxl/upload_3mwAdV-large.png"
                    }
                },
                {
                    "id": "cBKBoK",
                    "name": "#\u200eNOHOLDSIE\u202c Holdsie Uno",
                    "description": "Rye Tripel aged in White Wine Barrels",
                    "abv": "8.2",
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": {
                        "name": "Limited",
                        "description": "Limited availability.",
                        "id": 2
                    },
                    "style": {
                        "category": {
                            "name": "Belgian And French Origin Ales",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Belgian-Style Tripel",
                        "shortName": "Belgian Tripel",
                        "description": "Tripels are often characterized by a complex, sometimes mild spicy character. Clove-like phenolic flavor and aroma may be evident at extremely low levels. Yeast-generated  fruity esters, including banana, are also common, but not necessary. These pale/light-colored ales may finish sweet, though any sweet finish should be light. The beer is characteristically medium and clean in body with an equalizing hop/malt balance and a perception of medium to medium high hop bitterness. Traditional Belgian Tripels are often well attenuated. Brewing sugar may be used to lighten the perception of body. Its sweetness will come from very pale malts. There should not be character from any roasted or dark malts. Low hop flavor is acceptable. Alcohol strength and flavor should be perceived as evident. Head retention is dense and mousse-like. Chill haze is acceptable at low serving temperatures. Traditional Tripels are bottle conditioned, may exhibit slight yeast haze but the yeast should not be intentionally roused. Oxidative character if evident in aged Tripels should be mild and pleasant.",
                        "ibuMin": "20",
                        "ibuMax": "45",
                        "abvMin": "7",
                        "abvMax": "10",
                        "srmMin": "4",
                        "srmMax": "9",
                        "ogMin": "1.07",
                        "fgMin": "1.01",
                        "fgMax": "1.018",
                        "id": 59
                    }
                },
                {
                    "id": "ZQzj1u",
                    "name": "'Lil Griz",
                    "description": "Deliberately blazing our own trail, we brewed this barrel aged brown ale believing there is room for a new craft beer category: “Sessionable Bourbon Barrel Aged Beers”. Weighing in at 6.8% ABV ( Alc. 6.8% by Vol. ), the rich chocolate notes & creaminess of the flaked oats easily justify this beer bringing home a FoBAB medal this year. We hope you enjoy the ‘Lil Griz.",
                    "abv": "6.8",
                    "ibu": "34",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": null,
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "American-Style Brown Ale",
                        "shortName": "American Brown",
                        "description": "American brown ales range from deep copper to brown in color. Roasted malt caramel-like and chocolate-like characters should be of medium intensity in both flavor and aroma. American brown ales have evident low to medium hop flavor and aroma, medium to high hop bitterness, and a medium body. Estery and fruity-ester characters should be subdued. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.",
                        "ibuMin": "25",
                        "ibuMax": "45",
                        "abvMin": "4",
                        "abvMax": "6.4",
                        "srmMin": "15",
                        "srmMax": "26",
                        "ogMin": "1.04",
                        "fgMin": "1.01",
                        "fgMax": "1.018",
                        "id": 37
                    }
                },
                {
                    "id": "7WoDkH",
                    "name": "'Merican",
                    "description": null,
                    "abv": "5.8",
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": null,
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "American-Style Amber/Red Ale",
                        "shortName": "Amber",
                        "description": "American amber/red ales range from light copper to light brown in color. They are characterized by American-variety hops used to produce the perception of medium hop bitterness, flavor, and medium aroma. Amber ales have medium-high to high maltiness with medium to low caramel character. They should have medium to medium-high body. The style may have low levels of fruityester flavor and aroma. Diacetyl can be either absent or barely perceived at very low levels. Chill haze is allowable at cold temperatures. Slight yeast haze is acceptable for bottle-conditioned products.",
                        "ibuMin": "30",
                        "ibuMax": "40",
                        "abvMin": "4.5",
                        "abvMax": "6",
                        "srmMin": "11",
                        "srmMax": "18",
                        "ogMin": "1.048",
                        "fgMin": "1.012",
                        "fgMax": "1.018",
                        "id": 32
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/7WoDkH/upload_JsZsYY-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/7WoDkH/upload_JsZsYY-large.png"
                    }
                },
                {
                    "id": "c4f2KE",
                    "name": "'Murican Pilsner",
                    "description": null,
                    "abv": "5.5",
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pilsner",
                        "id": 4
                    },
                    "available": null,
                    "style": {
                        "category": {
                            "name": "North American Lager",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "American-Style Pilsener",
                        "shortName": "American Pilsener",
                        "description": "This classic and unique pre-Prohibition American-style Pilsener is straw to deep gold in color. Hop bitterness, flavor and aroma are medium to high, and use of noble-type hops for flavor and aroma is preferred. Up to 25 percent corn and/or rice in the grist should be used. Malt flavor and aroma are medium. This is a light-medium to medium-bodied beer. Sweet corn-like dimethylsulfide (DMS), fruity esters and American hop-derived citrus flavors or aromas should not be perceived. Diacetyl is not acceptable. There should be no chill haze. Competition organizers may wish to subcategorize this style into rice and corn subcategories.",
                        "ibuMin": "25",
                        "ibuMax": "40",
                        "abvMin": "5",
                        "abvMax": "6",
                        "srmMin": "3",
                        "srmMax": "6",
                        "ogMin": "1.045",
                        "fgMin": "1.012",
                        "fgMax": "1.018",
                        "id": 98
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/c4f2KE/upload_jjKJ7g-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/c4f2KE/upload_jjKJ7g-large.png"
                    }
                },
                {
                    "id": "EPLPz5",
                    "name": "'n Toeback",
                    "description": "'n Toeback is a top fermenting 'Kempense Quattro'.\r\nLegend says that after drinking a toeback quattro one of the 'Wildemannen' takes the Sint-Katharina church of Hoogstraten out for a walk. He can carry a 105 meter tower, weighing 100 metric tons on his back! A magic beer, that 'toeback'!",
                    "abv": "9.5",
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": null,
                    "style": {
                        "category": {
                            "name": "Belgian And French Origin Ales",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Belgian-Style Pale Strong Ale",
                        "shortName": "Belgian Pale Strong",
                        "description": "Belgian pale strong ales are pale to golden in color with relatively light body for a beer of its alcoholic strength. Often brewed with light colored Belgian \"candy\" sugar, these beers are well attenuated. The perception of hop bitterness is medium-low to medium -high, with hop flavor and aroma also in this range. These beers are highly attenuated and have a perceptively deceiving high alcoholic character-being light to medium bodied rather than full bodied. The intensity of malt character should be low to medium, often surviving along with a complex fruitiness. Very little or no diacetyl is perceived. Herbs and spices are sometimes used to delicately flavor these strong ales. Low levels of phenolic spiciness from yeast byproducts may also be perceived. Chill haze is allowable at cold temperatures.",
                        "ibuMin": "20",
                        "ibuMax": "50",
                        "abvMin": "7",
                        "abvMax": "11",
                        "srmMin": "4",
                        "srmMax": "10",
                        "ogMin": "1.064",
                        "fgMin": "1.012",
                        "fgMax": "1.024",
                        "id": 63
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/EPLPz5/upload_WLs95w-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/EPLPz5/upload_WLs95w-large.png"
                    }
                },
                {
                    "id": "IkRF2B",
                    "name": "'Nother Day in Paradise",
                    "description": null,
                    "abv": null,
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": {
                        "name": "Not Available",
                        "description": "Beer is not available.",
                        "id": 3
                    },
                    "style": {
                        "category": {
                            "name": "Hybrid/mixed Beer",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Specialty Beer",
                        "shortName": "Specialty",
                        "description": "These beers are brewed using unusual fermentable sugars, grains and starches that contribute to alcohol content other than, or in addition to, malted barley. Nuts generally have some degree of fermentables, thus beers brewed with nuts would appropriately be entered in this category. The distinctive characters of these special ingredients should be evident either in the aroma, flavor or overall balance of the beer, but not necessarily in overpowering quantities. For example, maple syrup or potatoes would be considered unusual. Rice, corn, or wheat are not considered unusual. Special ingredients must be listed when competing. A statement by the brewer explaining the special nature of the beer, ingredient(s) and achieved character is essential in order for fair assessment in competitions. If this beer is a classic style with some specialty ingredient(s), the brewer should also specify the classic style. Guidelines for competing: Spiced beers using unusual fermentables should be entered in the experimental category. Fruit beers using unusual fermentables should be entered in the fruit beer category.",
                        "ibuMin": null,
                        "ibuMax": "100",
                        "abvMin": "2.5",
                        "abvMax": "25",
                        "srmMin": "1",
                        "srmMax": "100",
                        "ogMin": "1.03",
                        "fgMin": "1.006",
                        "fgMax": "1.03",
                        "id": 125
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/IkRF2B/upload_pe8G4j-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/IkRF2B/upload_pe8G4j-large.png"
                    }
                },
                {
                    "id": "i51yaD",
                    "name": "'t Smisje Kirst",
                    "description": null,
                    "abv": "11",
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": null,
                    "style": {
                        "category": {
                            "name": "Belgian And French Origin Ales",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Belgian-Style Dark Strong Ale",
                        "shortName": "Belgian Dark Strong",
                        "description": "Belgian dark strong ales are amber to dark brown in color. Often, though not always, brewed with dark Belgian \"candy\" sugar, these beers can be well attenuated, ranging from medium to full-bodied. The perception of hop bitterness is low to medium, with hop flavor and aroma also in this range. Fruity complexity along with the soft flavors of roasted malts add distinct character. The alcohol strength of these beers can often be deceiving to the senses. The intensity of malt character can be rich, creamy, and sweet with intensities ranging from medium to high. Very little or no diacetyl is perceived. Herbs and spices are sometimes used to delicately flavor these strong ales. Low levels of phenolic spiciness from yeast byproducts may also be perceived. Chill haze is allowable at cold temperatures.",
                        "ibuMin": "20",
                        "ibuMax": "50",
                        "abvMin": "7",
                        "abvMax": "11",
                        "srmMin": "9",
                        "srmMax": "35",
                        "ogMin": "1.064",
                        "fgMin": "1.012",
                        "fgMax": "1.024",
                        "id": 64
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/i51yaD/upload_1WsEQd-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/i51yaD/upload_1WsEQd-large.png"
                    }
                },
                {
                    "id": "qbRV90",
                    "name": "'tis the Saison",
                    "description": "A Saison brewed with rye malt and three types of peppercorn.  This is Bart’s first NoDable Series brew so come out and enjoy!",
                    "abv": "7",
                    "ibu": "30",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Limited",
                        "description": "Limited availability.",
                        "id": 2
                    },
                    "style": {
                        "category": {
                            "name": "Belgian And French Origin Ales",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "French & Belgian-Style Saison",
                        "shortName": "Saison",
                        "description": "Beers in this category are golden to deep amber in color. There may be quite a variety of characters within this style. Generally: They are light to medium in body. Malt aroma is low to medium-low. Esters are medium to high in  aroma, while, complex alcohols, herbs, spices, low Brettanomyces character and even clove and smoke-like phenolics may or may not be evident in the overall balanced beer. Hop aroma and flavor may be at low to medium levels. Malt flavor is low but provides foundation for the overall balance. Hop bitterness is moderate to moderately assertive. Herb and/or spice flavors, including black pepper-like notes, may or may not be evident. Fruitiness from fermentation is generally in character. A balanced small amount of sour or acidic flavors is acceptable when in balance with other components. Earthy, cellar-like, musty aromas are okay. Diacetyl should not be perceived. Chill or slight yeast haze is okay. Often bottle conditioned with some yeast character and high carbonation. French & Belgian-Style Saison may have Brettanomyces characters that are slightly acidity, fruity, horsey, goaty and/or leather-like.",
                        "ibuMin": "20",
                        "ibuMax": "40",
                        "abvMin": "4.5",
                        "abvMax": "8.5",
                        "srmMin": "4",
                        "srmMax": "14",
                        "ogMin": "1.055",
                        "fgMin": "1.004",
                        "fgMax": "1.016",
                        "id": 72
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/qbRV90/upload_OhEPYR-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/qbRV90/upload_OhEPYR-large.png"
                    }
                },
                {
                    "id": "GMWSAD",
                    "name": "(401) India Pale Ale",
                    "description": null,
                    "abv": null,
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": null,
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "American-Style India Pale Ale",
                        "shortName": "American IPA",
                        "description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
                        "ibuMin": "50",
                        "ibuMax": "70",
                        "abvMin": "6.3",
                        "abvMax": "7.5",
                        "srmMin": "6",
                        "srmMax": "14",
                        "ogMin": "1.06",
                        "fgMin": "1.012",
                        "fgMax": "1.018",
                        "id": 30
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/GMWSAD/upload_3dlRGl-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/GMWSAD/upload_3dlRGl-large.png"
                    }
                },
                {
                    "id": "tciJOF",
                    "name": "(512) ALT",
                    "description": "(512) ALT is a German-style amber ale that is fermented cooler than typical ales and cold conditioned like a lager. ALT means \"old\" in German and refers to a beer style made using ale yeast after many German brewers had switched to newly discovered lager yeast. This ale has a very smooth, yet pronounced, hop bitterness with a malty backbone and a characteristic German yeast character. Made with 98% Organic 2-row and Munch malts and US noble hops.",
                    "abv": "6",
                    "ibu": "36",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Spring",
                        "description": "Available during the spring months.",
                        "id": 5
                    },
                    "style": {
                        "category": {
                            "name": "German Origin Ales",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "German-Style Altbier",
                        "shortName": "Altbier",
                        "description": "German-Style Altbiers are copper to dark brown ales, originally from the Düsseldorf area. No chill haze should be perceived. A variety of malts including wheat may be used to produce medium-low to medium malt aroma. Fruityester aroma can be low. No diacetyl aroma should be perceived. Hop aroma is low to medium. A variety of malts including wheat may be used to produce medium-low to medium level malty flavor. Hop flavor is low to medium. Hop bitterness is medium to very high (although the 25 to 35 IBU range is more normal for the majority of Altbiers from Düsseldorf). Fruity-ester flavors can be low. No diacetyl should be perceived. The overall impression is clean, crisp, and flavorful often with a dry finish. Body is medium.",
                        "ibuMin": "25",
                        "ibuMax": "52",
                        "abvMin": "4.3",
                        "abvMax": "5.5",
                        "srmMin": "11",
                        "srmMax": "19",
                        "ogMin": "1.044",
                        "fgMin": "1.008",
                        "fgMax": "1.014",
                        "id": 55
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/tciJOF/upload_cdbSIJ-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/tciJOF/upload_cdbSIJ-large.png"
                    }
                },
                {
                    "id": "6PPnT2",
                    "name": "(512) Black IPA",
                    "description": "An entirely new creation from organic 2-row, organic Crystal 60 and Carafa III, a huskless black malt that gives this beer it’s black color with notes of coffee and chicory without any tannic bitterness. The hop additions are many and generous, featuring Apollo, Horizon, and Nugget, clocking the beer in at 70 IBU. Over 11 pounds per batch of Nugget hops are added directly to the fermenter yielding a resiny herbal and spicy aroma. A hybrid style for dark beer fans who love hops.",
                    "abv": "7.5",
                    "ibu": "70",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Spring",
                        "description": "Available during the spring months.",
                        "id": 5
                    },
                    "style": {
                        "category": {
                            "name": "Hybrid/mixed Beer",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Specialty Beer",
                        "shortName": "Specialty",
                        "description": "These beers are brewed using unusual fermentable sugars, grains and starches that contribute to alcohol content other than, or in addition to, malted barley. Nuts generally have some degree of fermentables, thus beers brewed with nuts would appropriately be entered in this category. The distinctive characters of these special ingredients should be evident either in the aroma, flavor or overall balance of the beer, but not necessarily in overpowering quantities. For example, maple syrup or potatoes would be considered unusual. Rice, corn, or wheat are not considered unusual. Special ingredients must be listed when competing. A statement by the brewer explaining the special nature of the beer, ingredient(s) and achieved character is essential in order for fair assessment in competitions. If this beer is a classic style with some specialty ingredient(s), the brewer should also specify the classic style. Guidelines for competing: Spiced beers using unusual fermentables should be entered in the experimental category. Fruit beers using unusual fermentables should be entered in the fruit beer category.",
                        "ibuMin": null,
                        "ibuMax": "100",
                        "abvMin": "2.5",
                        "abvMax": "25",
                        "srmMin": "1",
                        "srmMax": "100",
                        "ogMin": "1.03",
                        "fgMin": "1.006",
                        "fgMax": "1.03",
                        "id": 125
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/6PPnT2/upload_Cnl1UJ-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/6PPnT2/upload_Cnl1UJ-large.png"
                    }
                },
                {
                    "id": "VwR7Xg",
                    "name": "(512) Bruin (A.K.A. Brown Bear)",
                    "description": "At once cuddly and ferocious, (512) BRUIN combines a smooth, rich maltiness and mahogany color with a solid hop backbone and stealthy 7.6% alcohol. Made with Organic 2 Row and Munich malts, plus Chocolate and Crystal malts, domestic hops, and a touch of molasses, this brew has notes of raisins, dark sugars, and cocoa, and pairs perfectly with food and the crisp fall air.",
                    "abv": "7.6",
                    "ibu": "30",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Fall",
                        "description": "Available during the fall months.",
                        "id": 7
                    },
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "American-Style Brown Ale",
                        "shortName": "American Brown",
                        "description": "American brown ales range from deep copper to brown in color. Roasted malt caramel-like and chocolate-like characters should be of medium intensity in both flavor and aroma. American brown ales have evident low to medium hop flavor and aroma, medium to high hop bitterness, and a medium body. Estery and fruity-ester characters should be subdued. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.",
                        "ibuMin": "25",
                        "ibuMax": "45",
                        "abvMin": "4",
                        "abvMax": "6.4",
                        "srmMin": "15",
                        "srmMax": "26",
                        "ogMin": "1.04",
                        "fgMin": "1.01",
                        "fgMax": "1.018",
                        "id": 37
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/VwR7Xg/upload_MiNs9j-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/VwR7Xg/upload_MiNs9j-large.png"
                    }
                },
                {
                    "id": "SqP18Z",
                    "name": "(512) Cascabel Cream Stout",
                    "description": "Smooth and roasty, and black as night, (512) Cascabel Cream Stout is brewed to a hair under 6% abv using almost 90% Organic Two Row and Crystal Malts, Chocolate Malt, and Roasted Barley. Non-fermentable Brewers Lactose is added for lasting sweetness, and over 20 pounds of Guajillo Chiles are added to warm you up when the night gets “chile”.",
                    "abv": "6",
                    "ibu": "20",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Winter",
                        "description": "Available during the winter months.",
                        "id": 8
                    },
                    "style": {
                        "category": {
                            "name": "British Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "Sweet or Cream Stout",
                        "shortName": "Sweet Stout",
                        "description": "Sweet stouts, also referred to as cream stouts, have less roasted bitter flavor and a full-bodied mouthfeel. The style can be given more body with milk sugar (lactose) before bottling. Malt sweetness, chocolate, and caramel flavor should dominate the flavor profile and contribute to the aroma. Hops should balance and suppress some of the sweetness without contributing apparent flavor or aroma. The overall impression should be sweet and full-bodied.",
                        "ibuMin": "15",
                        "ibuMax": "25",
                        "abvMin": "3",
                        "abvMax": "6",
                        "srmMin": "40",
                        "srmMax": "40",
                        "ogMin": "1.045",
                        "fgMin": "1.012",
                        "fgMax": "1.02",
                        "id": 20
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/SqP18Z/upload_8FxcuW-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/SqP18Z/upload_8FxcuW-large.png"
                    }
                },
                {
                    "id": "SV7JCk",
                    "name": "(512) FIVE",
                    "description": "(512) FIVE is the culmination of our experience thus far and features a lineup of some of our favorite ingredients. Organic American two-row and English Maris Otter malts lay the foundation, while a generous dose of English roasted barley, black malt and chocolate malt create layers of roasty, dark complexity. American and Belgian crystal malts give balance and depth to the roasted character. Multiple additions of UK Fuggle hops impart an earthy, spicy finish to this deep, dark Imperial Stout.",
                    "abv": "10.1",
                    "ibu": "45",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Snifter",
                        "id": 6
                    },
                    "available": {
                        "name": "Winter",
                        "description": "Available during the winter months.",
                        "id": 8
                    },
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "American-Style Imperial Stout",
                        "shortName": "American Imperial Stout",
                        "description": "Black in color, American-style imperial stouts typically have a high alcohol content. Generally characterized as very robust. The extremely rich malty flavor and aroma are balanced with assertive hopping and fruity-ester characteristics. Bitterness should be moderately high to very high and balanced with full sweet malt character. Roasted malt astringency and bitterness can be moderately perceived but should not overwhelm the overall character. Hop aroma is usually moderately-high to overwhelmingly hop-floral, -citrus or -herbal. Diacetyl (butterscotch) levels should be absent.",
                        "ibuMin": "50",
                        "ibuMax": "80",
                        "abvMin": "7",
                        "abvMax": "12",
                        "srmMin": "40",
                        "srmMax": "40",
                        "ogMin": "1.08",
                        "fgMin": "1.02",
                        "fgMax": "1.03",
                        "id": 43
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/SV7JCk/upload_RNljF3-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/SV7JCk/upload_RNljF3-large.png"
                    }
                },
                {
                    "id": "oJFZwK",
                    "name": "(512) FOUR",
                    "description": "For our 4th anniversary, we turned to one of our greatest inspirations, the rich brewing tradition of Great Britain.\r\n\r\n(512) FOUR is a classic English-style Strong Ale. The biscuity Maris Otter and caramelly Crystal malts contribute notes of toast, toffee, and dried fruits, which are perfectly balanced with a blend of authentic UK Fuggle and East Kent Golding hops. Dry-hopped with Northdown, (512) FOUR is a complex and satisfying ale.",
                    "abv": "7.5",
                    "ibu": "35",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Limited",
                        "description": "Limited availability.",
                        "id": 2
                    },
                    "style": {
                        "category": {
                            "name": "British Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "Strong Ale",
                        "shortName": "Strong Ale",
                        "description": "Light amber to mid-range brown in color, strong ales are medium to full bodied with a malty sweetness and may have low levels of roast malt character. Hop aroma should be minimal and flavor can vary from none to medium in character intensity. Fruity-ester flavors and aromas can contribute to the character of this ale. Bitterness should be minimal but evident and balanced with malt and/or caramel-like sweetness. Alcohol types can be varied and complex. A rich, often sweet and complex estery character may be evident. Very low levels of diacetyl are acceptable. Chill haze is acceptable at low temperatures. (This style may often be split into two categories, strong and very strong.)",
                        "ibuMin": "30",
                        "ibuMax": "65",
                        "abvMin": "7",
                        "abvMax": "11",
                        "srmMin": "8",
                        "srmMax": "21",
                        "ogMin": "1.06",
                        "fgMin": "1.014",
                        "fgMax": "1.04",
                        "id": 14
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/oJFZwK/upload_B40pzO-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/oJFZwK/upload_B40pzO-large.png"
                    }
                },
                {
                    "id": "ezGh5N",
                    "name": "(512) IPA",
                    "description": "(512) India Pale Ale is a big, aggressively dry-hopped American IPA with smooth bitterness (~65 IBU) balanced by medium maltiness. Organic 2-row malted barley, loads of hops, and great Austin water create an ale with apricot and vanilla aromatics that lure you in for more.",
                    "abv": "7",
                    "ibu": "65",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Year Round",
                        "description": "Available year round as a staple beer.",
                        "id": 1
                    },
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "American-Style India Pale Ale",
                        "shortName": "American IPA",
                        "description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
                        "ibuMin": "50",
                        "ibuMax": "70",
                        "abvMin": "6.3",
                        "abvMax": "7.5",
                        "srmMin": "6",
                        "srmMax": "14",
                        "ogMin": "1.06",
                        "fgMin": "1.012",
                        "fgMax": "1.018",
                        "id": 30
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/ezGh5N/upload_r8SNni-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/ezGh5N/upload_r8SNni-large.png"
                    }
                },
                {
                    "id": "s8rdpK",
                    "name": "(512) ONE",
                    "description": "Our first anniversary release is a Belgian-style strong ale that is amber in color, with a light to medium body. Subtle malt sweetness is balanced with just enough hops. Soft honey aromas lead the way into rich raisin and mildly spicy, cake-like flavors. Made with 80% Organic Malted Barley, Belgian Specialty grains, Forbidden Fruit yeast, domestic hops and Round Rock local wildflower honey, this beer’s strength can be deceiving.",
                    "abv": "8",
                    "ibu": "22",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Tulip",
                        "id": 8
                    },
                    "available": {
                        "name": "Limited",
                        "description": "Limited availability.",
                        "id": 2
                    },
                    "style": {
                        "category": {
                            "name": "Belgian And French Origin Ales",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Belgian-Style Pale Strong Ale",
                        "shortName": "Belgian Pale Strong",
                        "description": "Belgian pale strong ales are pale to golden in color with relatively light body for a beer of its alcoholic strength. Often brewed with light colored Belgian \"candy\" sugar, these beers are well attenuated. The perception of hop bitterness is medium-low to medium -high, with hop flavor and aroma also in this range. These beers are highly attenuated and have a perceptively deceiving high alcoholic character-being light to medium bodied rather than full bodied. The intensity of malt character should be low to medium, often surviving along with a complex fruitiness. Very little or no diacetyl is perceived. Herbs and spices are sometimes used to delicately flavor these strong ales. Low levels of phenolic spiciness from yeast byproducts may also be perceived. Chill haze is allowable at cold temperatures.",
                        "ibuMin": "20",
                        "ibuMax": "50",
                        "abvMin": "7",
                        "abvMax": "11",
                        "srmMin": "4",
                        "srmMax": "10",
                        "ogMin": "1.064",
                        "fgMin": "1.012",
                        "fgMax": "1.024",
                        "id": 63
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/s8rdpK/upload_seL9LP-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/s8rdpK/upload_seL9LP-large.png"
                    }
                },
                {
                    "id": "2fXsvw",
                    "name": "(512) Pale",
                    "description": "(512) Pale is a copper colored American Pale Ale that balances earthy hop bitterness and bright hop flavor with a rich malty body. Made with Organic 2-row malt and US grown hops like all (512) ales, this beer is refreshing and not to be missed.",
                    "abv": "6",
                    "ibu": "30",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Year Round",
                        "description": "Available year round as a staple beer.",
                        "id": 1
                    },
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "American-Style Pale Ale",
                        "shortName": "American Pale",
                        "description": "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
                        "ibuMin": "30",
                        "ibuMax": "42",
                        "abvMin": "4.5",
                        "abvMax": "5.6",
                        "srmMin": "6",
                        "srmMax": "14",
                        "ogMin": "1.044",
                        "fgMin": "1.008",
                        "fgMax": "1.014",
                        "id": 25
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/2fXsvw/upload_c0Trtt-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/2fXsvw/upload_c0Trtt-large.png"
                    }
                },
                {
                    "id": "NZYBId",
                    "name": "(512) Peach Sour",
                    "description": "We produced Peach Sour using a sour mash technique. We encouraged the naturally occurring wild yeast and bacteria that come in with the organic barley and wheat to spontaneously ferment at warm temperatures over a three day period. Fermentation was completed in stainless and racked to a 1,000 gallon Foeder (large oak barrel) for aging. After being on the wood for two months, we added 200 pounds of fresh peaches and allowed it to age another 12 months before packaging it for you. We hope you enjoy!",
                    "abv": "6.2",
                    "ibu": "8",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Tulip",
                        "id": 8
                    },
                    "available": {
                        "name": "Limited",
                        "description": "Limited availability.",
                        "id": 2
                    },
                    "style": {
                        "category": {
                            "name": "Hybrid/mixed Beer",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Wood- and Barrel-Aged Sour Beer",
                        "shortName": "BBL Aged Sour",
                        "description": "A wood- or barrel-aged sour beer is any lager, ale or hybrid beer, either a traditional style or a unique experimental beer that has been aged for a period of time in a wooden barrel or in contact with wood and has developed a bacterial induced natural acidity. This beer is aged in wood with the intention of introducing the micro flora present in the wood. Sometimes wood aging is intended to impart the particularly unique character of the wood, but wood-aged is not necessarily synonymous with imparting wood-flavors. Wood character can be characterized as a complex blend of vanillin and unique wood character. Wood-derived character can also be characterized by flavors of the product that was in the barrel during prior use. These wood-derived flavors, if present in this style, can be very low in character and barely perceived or evident or assertive as wood-derived flavors. Any degree of woodderived flavors should be in balance with other beer character. Fruit and herb/spiced versions may take on the hue, flavors and aromas of added ingredients.  Usually bacteria and \"wild\" yeasts fermentation contributes complex esters and results in a dry to very dry beer. Ultimately a balance of flavor, aroma and mouthfeel are sought with the marriage of acidity, complex esters, and new beer with wood and/or barrel flavors. Beers in this style may or may not have Brettanomyces character.  Brewers when entering this category should specify type of barrel used and any other special treatment or ingredients used. Competition managers may create style subcategories to differentiate between high alcohol and low alcohol beers and very dark and lighter colored beer as well as for fruit beers and non-fruit beers. Competitions may develop guidelines requesting brewers to specify what kind of wood (new or used oak, other wood varieties). The brewer may be asked to explain the special nature (wood used, base beer style(s) and achieved character) of the beer.",
                        "ibuMin": null,
                        "ibuMax": null,
                        "abvMin": null,
                        "abvMax": null,
                        "srmMin": null,
                        "srmMax": null,
                        "ogMin": null,
                        "fgMin": null,
                        "fgMax": null,
                        "id": 136
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/NZYBId/upload_fZwIL9-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/NZYBId/upload_fZwIL9-large.png"
                    }
                },
                {
                    "id": "9O3QPg",
                    "name": "(512) SIX",
                    "description": "(512) SIX is a Belgian Style Dubbel with as many organic Belgian ingredients as possible. Castle Pale, Special B and Cara-Munich lend unique Belgian terrior based flavors of dark fruits like plum, raisin and chocolate. Candi sugar cranks the alcohol without increasing the body. This low hopped malty beast from the dungeons of (512) will make a cold day warmer and our 6th Anniversary event one for the books.",
                    "abv": "7.5",
                    "ibu": "25",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Tulip",
                        "id": 8
                    },
                    "available": {
                        "name": "Limited",
                        "description": "Limited availability.",
                        "id": 2
                    },
                    "style": {
                        "category": {
                            "name": "Belgian And French Origin Ales",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Belgian-Style Dubbel",
                        "shortName": "Belgian Dubbel",
                        "description": "This medium-bodied, red to dark brown colored ale has a malty sweetness and chocolate-like caramel aroma. A light hop flavor and/or aroma is acceptable. Dubbels are also characterized by low-medium to medium bitterness. No diacetyl is acceptable. Yeastgenerated fruity esters (especially banana) are appropriate at low levels. Head retention is dense and mousse-like. Chill haze is acceptable at low serving temperatures. Often bottle conditioned a slight yeast haze and flavor may be evident.",
                        "ibuMin": "20",
                        "ibuMax": "30",
                        "abvMin": "6.25",
                        "abvMax": "7.5",
                        "srmMin": "16",
                        "srmMax": "36",
                        "ogMin": "1.06",
                        "fgMin": "1.012",
                        "fgMax": "1.016",
                        "id": 58
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/9O3QPg/upload_GIORHy-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/9O3QPg/upload_GIORHy-large.png"
                    }
                },
                {
                    "id": "A78JSF",
                    "name": "(512) THREE",
                    "description": "For our 3rd Anniversary release we knew we had to pull out all the stops. Please welcome to the family… (512) THREE Belgian Style Tripel! Brewed in the spirit of the abbey ales of Belgium, (512) THREE pours a deep golden with a dense, creamy white head. The authentic Belgian yeast strain produces a complex, spicy palate that balances ripe fruity esters with bready malts and firm but subtle hops. Our house-made liquid invert sugar contributes an effervescent mouthfeel that finishes smooth and silky but enticingly dry, barely betraying its nearly 9.5% ABV/VOL!",
                    "abv": "9.5",
                    "ibu": "22",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Limited",
                        "description": "Limited availability.",
                        "id": 2
                    },
                    "style": {
                        "category": {
                            "name": "Belgian And French Origin Ales",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Belgian-Style Tripel",
                        "shortName": "Belgian Tripel",
                        "description": "Tripels are often characterized by a complex, sometimes mild spicy character. Clove-like phenolic flavor and aroma may be evident at extremely low levels. Yeast-generated  fruity esters, including banana, are also common, but not necessary. These pale/light-colored ales may finish sweet, though any sweet finish should be light. The beer is characteristically medium and clean in body with an equalizing hop/malt balance and a perception of medium to medium high hop bitterness. Traditional Belgian Tripels are often well attenuated. Brewing sugar may be used to lighten the perception of body. Its sweetness will come from very pale malts. There should not be character from any roasted or dark malts. Low hop flavor is acceptable. Alcohol strength and flavor should be perceived as evident. Head retention is dense and mousse-like. Chill haze is acceptable at low serving temperatures. Traditional Tripels are bottle conditioned, may exhibit slight yeast haze but the yeast should not be intentionally roused. Oxidative character if evident in aged Tripels should be mild and pleasant.",
                        "ibuMin": "20",
                        "ibuMax": "45",
                        "abvMin": "7",
                        "abvMax": "10",
                        "srmMin": "4",
                        "srmMax": "9",
                        "ogMin": "1.07",
                        "fgMin": "1.01",
                        "fgMax": "1.018",
                        "id": 59
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/A78JSF/upload_COtQzI-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/A78JSF/upload_COtQzI-large.png"
                    }
                },
                {
                    "id": "X4KcGF",
                    "name": "(512) TWO",
                    "description": "We went all out on the hops for our 2nd Anniversary release, a Double IPA. Eight varieties of hops (including Glacier, Horizon, Nugget, and Columbus) spread out over 10 different additions (including whole-leaf Simcoe and Nugget in the grant, and 2 separate dry-hoppings!) add up to 99 IBUs of pure hoppy goodness . A solid malt backbone supports the smooth bitterness, complex flavors, and intoxicating aroma. And like all (512) ales, this one is made using over 80% USDA certified organic ingredients.",
                    "abv": "9",
                    "ibu": "99",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Summer",
                        "description": "Available during the summer months.",
                        "id": 6
                    },
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "Imperial or Double India Pale Ale",
                        "shortName": "Imperial IPA",
                        "description": "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
                        "ibuMin": "65",
                        "ibuMax": "100",
                        "abvMin": "7.5",
                        "abvMax": "10.5",
                        "srmMin": "5",
                        "srmMax": "13",
                        "ogMin": "1.075",
                        "fgMin": "1.012",
                        "fgMax": "1.02",
                        "id": 31
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/X4KcGF/upload_Zcoan4-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/X4KcGF/upload_Zcoan4-large.png"
                    }
                },
                {
                    "id": "USaRyl",
                    "name": "(512) Whiskey Barrel Double Pecan Porter",
                    "description": "(512) Double Pecan Porter is a robust porter accented by locally grown roasted pecans and subtly enhanced by aging in recently emptied oak whiskey barrels. For the first ever bottling, only one 200L barrel was bottled. Notes of chocolate, coffee and pecan marry with the subtle flavors of vanilla and whiskey to make this a wonderful winter warmer worth sharing and savoring. We sincerely hope you enjoy every sip.",
                    "abv": "9.5",
                    "ibu": "30",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Limited",
                        "description": "Limited availability.",
                        "id": 2
                    },
                    "style": {
                        "category": {
                            "name": "Hybrid/mixed Beer",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Wood- and Barrel-Aged Strong Beer",
                        "shortName": "BBL Aged Strong",
                        "description": "Any strong classic style or unique, experimental style of beer can be wood or barrel-aged for a period of time in a wooden barrel or in contact with wood. This beer is aged with the intention of imparting the particularly unique character of the wood and/or what has previously been in the barrel. New wood character can be characterized as a complex blend of vanillin and unique wood character but wood aged is not necessarily synonymous with imparting wood-flavors. Used sherry, rum, bourbon, scotch, port, wine and other barrels are often used, imparting complexity and uniqueness to beer. Ultimately a balance of flavor, aroma and mouthfeel are sought with the marriage of new beer with wood and/or barrel flavors. Primary character of the beer style may or may not be apparent. Sour wood-aged beer of any color is outlined in other categories. Beers in this style may or may not have Brettanomyces character. The brewer must explain the special nature of the beer to allow for accurate judging. Comments could include: type of wood used (new or old, oak or other wood type), type of barrel used (new, port/ whiskey/ wine/ sherry/ other), base beer style or achieved character. Beer entries not accompanied by this information will be at a disadvantage during judging.",
                        "ibuMin": null,
                        "ibuMax": null,
                        "abvMin": null,
                        "abvMax": null,
                        "srmMin": null,
                        "srmMax": null,
                        "ogMin": null,
                        "fgMin": null,
                        "fgMax": null,
                        "id": 135
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/USaRyl/upload_1rXpCX-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/USaRyl/upload_1rXpCX-large.png"
                    }
                },
                {
                    "id": "bXwskR",
                    "name": "(512) White IPA",
                    "description": "Refreshingly light, this Belgian inspired India Pale Ale delivers hot weather satisfaction with pronounced hop character and flavor. Built like a Belgian wheat beer, but brewed, hopped and finished  like an IPA, two classic brewing cultures collide in this delightful creation that is both sessionable and amazingly flavorful.",
                    "abv": "5.3",
                    "ibu": "55",
                    "isOrganic": "Y",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Summer",
                        "description": "Available during the summer months.",
                        "id": 6
                    },
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "American-Style India Pale Ale",
                        "shortName": "American IPA",
                        "description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
                        "ibuMin": "50",
                        "ibuMax": "70",
                        "abvMin": "6.3",
                        "abvMax": "7.5",
                        "srmMin": "6",
                        "srmMax": "14",
                        "ogMin": "1.06",
                        "fgMin": "1.012",
                        "fgMax": "1.018",
                        "id": 30
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/bXwskR/upload_0m1DZl-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/bXwskR/upload_0m1DZl-large.png"
                    }
                },
                {
                    "id": "XnPVIo",
                    "name": "(512) Wild Bear",
                    "description": "(512)’s first excursion into the world of so-called wild fermentation, Wild Bear’s origins lie in our Fall seasonal, BRUIN. After primary fermentation, we added Brettanomyces yeast and Pediococcus bacteria cultures, and aged the blend in new oak barrels for over 10 months. This combination of wild “bugs” and barrel aging gives (512) Wild Bear a complex and enticing aroma of tart cherries, oak, and a touch of barnyard “funkiness”, a crisp, tart flavor that will intensify with age, and an effervescent, oaky finish that leaves the palate clean. More recent versions are aged in one of our 45HL Foeder for 24 months.",
                    "abv": "8.5",
                    "ibu": "9",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Tulip",
                        "id": 8
                    },
                    "available": {
                        "name": "Seasonal",
                        "description": "Available at the same time of year, every year.",
                        "id": 4
                    },
                    "style": {
                        "category": {
                            "name": "Hybrid/mixed Beer",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Specialty Beer",
                        "shortName": "Specialty",
                        "description": "These beers are brewed using unusual fermentable sugars, grains and starches that contribute to alcohol content other than, or in addition to, malted barley. Nuts generally have some degree of fermentables, thus beers brewed with nuts would appropriately be entered in this category. The distinctive characters of these special ingredients should be evident either in the aroma, flavor or overall balance of the beer, but not necessarily in overpowering quantities. For example, maple syrup or potatoes would be considered unusual. Rice, corn, or wheat are not considered unusual. Special ingredients must be listed when competing. A statement by the brewer explaining the special nature of the beer, ingredient(s) and achieved character is essential in order for fair assessment in competitions. If this beer is a classic style with some specialty ingredient(s), the brewer should also specify the classic style. Guidelines for competing: Spiced beers using unusual fermentables should be entered in the experimental category. Fruit beers using unusual fermentables should be entered in the fruit beer category.",
                        "ibuMin": null,
                        "ibuMax": "100",
                        "abvMin": "2.5",
                        "abvMax": "25",
                        "srmMin": "1",
                        "srmMax": "100",
                        "ogMin": "1.03",
                        "fgMin": "1.006",
                        "fgMax": "1.03",
                        "id": 125
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/XnPVIo/upload_XCxTBJ-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/XnPVIo/upload_XCxTBJ-large.png"
                    }
                },
                {
                    "id": "QLp4mV",
                    "name": "(512) Wit",
                    "description": "Made in the style of the Belgian wheat beers that are so refreshing, (512) Wit is a hazy ale spiced with coriander and domestic grapefruit peel. 50% US Organic 2-row malted barley and 50% US unmalted wheat and oats make this a light, crisp ale well suited for any occasion.",
                    "abv": "5.1",
                    "ibu": "10",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Year Round",
                        "description": "Available year round as a staple beer.",
                        "id": 1
                    },
                    "style": {
                        "category": {
                            "name": "Belgian And French Origin Ales",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Belgian-Style White (or Wit) / Belgian-Style Wheat",
                        "shortName": "Witbier",
                        "description": "Belgian white ales are very pale in color and are brewed using unmalted wheat and malted barley and are spiced with coriander and orange peel. Coriander and light orange peel aroma should be perceived as such or as an unidentified spiciness. Phenolic spiciness and yeast flavors may be evident at mild levels. These beers are traditionally bottle conditioned and served cloudy. An unfiltered starch and yeast haze should be part of the appearance. The low to medium body should have some degree of creaminess from wheat starch. The style is further characterized by the use of noble-type hops to achieve low hop bitterness and little to no apparent hop flavor. This beer has no diacetyl and a low to medium fruity-ester level. Mild acidity is appropriate.",
                        "ibuMin": "10",
                        "ibuMax": "17",
                        "abvMin": "4.8",
                        "abvMax": "5.2",
                        "srmMin": "2",
                        "srmMax": "4",
                        "ogMin": "1.044",
                        "fgMin": "1.006",
                        "fgMax": "1.01",
                        "id": 65
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/QLp4mV/upload_FfMhAC-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/QLp4mV/upload_FfMhAC-large.png"
                    }
                },
                {
                    "id": "jj8YRF",
                    "name": "(860) India Pale Ale",
                    "description": null,
                    "abv": null,
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": null,
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "American-Style India Pale Ale",
                        "shortName": "American IPA",
                        "description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
                        "ibuMin": "50",
                        "ibuMax": "70",
                        "abvMin": "6.3",
                        "abvMax": "7.5",
                        "srmMin": "6",
                        "srmMax": "14",
                        "ogMin": "1.06",
                        "fgMin": "1.012",
                        "fgMax": "1.018",
                        "id": 30
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/jj8YRF/upload_BwXlKY-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/jj8YRF/upload_BwXlKY-large.png"
                    }
                },
                {
                    "id": "thTbY7",
                    "name": "(904) Weissguy",
                    "description": "A traditional Bavarian style Hefeweissen, notes of clove, orange and coriander along with a cloudy yeast character make this a summer favorite.",
                    "abv": "4.4",
                    "ibu": "19",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Weizen",
                        "id": 9
                    },
                    "available": null,
                    "style": {
                        "category": {
                            "name": "German Origin Ales",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "South German-Style Hefeweizen / Hefeweissbier",
                        "shortName": "Hefeweizen",
                        "description": "The aroma and flavor of a Weissbier with yeast is decidedly fruity and phenolic. The phenolic characteristics are often described as clove-, nutmeg-like, mildly smoke-like or even vanilla-like. Banana-like esters should be present at low to medium-high levels. These beers are made with at least 50 percent malted wheat, and hop rates are quite low. Hop flavor and aroma are absent or present at very low levels. Weissbier is well attenuated and very highly carbonated and a medium to full bodied beer. The color is very pale to pale amber. Because yeast is present, the beer will have yeast flavor and a characteristically fuller mouthfeel and may be appropriately very cloudy. No diacetyl should be perceived.",
                        "ibuMin": "10",
                        "ibuMax": "15",
                        "abvMin": "4.9",
                        "abvMax": "5.5",
                        "srmMin": "3",
                        "srmMax": "9",
                        "ogMin": "1.047",
                        "fgMin": "1.008",
                        "fgMax": "1.016",
                        "id": 48
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/thTbY7/upload_jxcOpY-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/thTbY7/upload_jxcOpY-large.png"
                    }
                },
                {
                    "id": "FLkbzq",
                    "name": "(KU)Jenga Smash",
                    "description": "IPA Collab w/ Two Stones Brewpub.",
                    "abv": "7.7",
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": null,
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "American-Style India Pale Ale",
                        "shortName": "American IPA",
                        "description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
                        "ibuMin": "50",
                        "ibuMax": "70",
                        "abvMin": "6.3",
                        "abvMax": "7.5",
                        "srmMin": "6",
                        "srmMax": "14",
                        "ogMin": "1.06",
                        "fgMin": "1.012",
                        "fgMax": "1.018",
                        "id": 30
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/FLkbzq/upload_BfrB6Y-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/FLkbzq/upload_BfrB6Y-large.png"
                    }
                },
                {
                    "id": "3BSrTW",
                    "name": "(Take The) Causeway IPA",
                    "description": "Copious amounts of Citra and Simcoe hops are used throughout the brewing process in this American India Pale Ale. From first-wort to bittering, flavor, aroma and dry hops, an artful combination of just two extraordinary hops leads to an explosively hoppy finish on the palate. These hops are hard for us to get our hands on, so get it while you can.",
                    "abv": "7.5",
                    "ibu": "56",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": {
                        "name": "Year Round",
                        "description": "Available year round as a staple beer.",
                        "id": 1
                    },
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "American-Style India Pale Ale",
                        "shortName": "American IPA",
                        "description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
                        "ibuMin": "50",
                        "ibuMax": "70",
                        "abvMin": "6.3",
                        "abvMax": "7.5",
                        "srmMin": "6",
                        "srmMax": "14",
                        "ogMin": "1.06",
                        "fgMin": "1.012",
                        "fgMax": "1.018",
                        "id": 30
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/3BSrTW/upload_c9mjLD-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/3BSrTW/upload_c9mjLD-large.png"
                    }
                },
                {
                    "id": "nMK1nd",
                    "name": ".999",
                    "description": "A traditional English IPA, moderately hopped with a dry finish. The malt is present via moderately low caramel flavor.  This beer provides a pleasantly smooth option to the American IPA. Dry-hopped with Cascade hops to provide a pleasant citrus aroma.",
                    "abv": "7",
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Year Round",
                        "description": "Available year round as a staple beer.",
                        "id": 1
                    },
                    "style": {
                        "category": {
                            "name": "British Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "English-Style India Pale Ale",
                        "shortName": "English IPA",
                        "description": "Most traditional interpretations of English-style India pale ales are characterized by medium-high hop bitterness with a medium to medium-high alcohol content. Hops from a variety of origins may be used to contribute to a high hopping rate. Earthy and herbal English-variety hop character is the perceived end, but may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer, sometimes with subtle and balanced character of sulfur compounds. This pale gold to deep copper-colored ale has a medium to high, flowery hop aroma and may have a medium to strong hop flavor (in addition to the hop bitterness). English-style India pale ales possess medium maltiness and body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill haze is allowable at cold temperatures. Hops of other origins may be used for bitterness or approximating traditional English character.",
                        "ibuMin": "35",
                        "ibuMax": "63",
                        "abvMin": "5",
                        "abvMax": "7",
                        "srmMin": "6",
                        "srmMax": "14",
                        "ogMin": "1.05",
                        "fgMin": "1.012",
                        "fgMax": "1.018",
                        "id": 2
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/nMK1nd/upload_2lmQHA-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/nMK1nd/upload_2lmQHA-large.png"
                    }
                },
                {
                    "id": "qbsiWU",
                    "name": "007 PALE",
                    "description": "A SINGLE HOP PALE WITH EXPERIMENTAL 007 HOPS",
                    "abv": "5.5",
                    "ibu": "45",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": null,
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "American-Style Pale Ale",
                        "shortName": "American Pale",
                        "description": "American pale ales range from deep golden to copper in color. The style is characterized by fruity, floral and citrus-like American-variety hop character producing medium to medium-high hop bitterness, flavor, and aroma. Note that the \"traditional\" style of this beer has its origins with certain floral, fruity, citrus-like, piney, resinous, or sulfur-like American hop varietals. One or more of these hop characters is the perceived end, but the perceived hop characters may be a result of the skillful use of hops of other national origins. American pale ales have medium body and low to medium maltiness. Low caramel character is allowable. Fruity-ester flavor and aroma should be moderate to strong. Diacetyl should be absent or present at very low levels. Chill haze is allowable at cold temperatures.",
                        "ibuMin": "30",
                        "ibuMax": "42",
                        "abvMin": "4.5",
                        "abvMax": "5.6",
                        "srmMin": "6",
                        "srmMax": "14",
                        "ogMin": "1.044",
                        "fgMin": "1.008",
                        "fgMax": "1.014",
                        "id": 25
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/qbsiWU/upload_ZAm6Hc-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/qbsiWU/upload_ZAm6Hc-large.png"
                    }
                },
                {
                    "id": "RYSZyK",
                    "name": "0311 Ale",
                    "description": null,
                    "abv": "5.2",
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": null,
                    "style": {
                        "category": {
                            "name": "Hybrid/mixed Beer",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Specialty Beer",
                        "shortName": "Specialty",
                        "description": "These beers are brewed using unusual fermentable sugars, grains and starches that contribute to alcohol content other than, or in addition to, malted barley. Nuts generally have some degree of fermentables, thus beers brewed with nuts would appropriately be entered in this category. The distinctive characters of these special ingredients should be evident either in the aroma, flavor or overall balance of the beer, but not necessarily in overpowering quantities. For example, maple syrup or potatoes would be considered unusual. Rice, corn, or wheat are not considered unusual. Special ingredients must be listed when competing. A statement by the brewer explaining the special nature of the beer, ingredient(s) and achieved character is essential in order for fair assessment in competitions. If this beer is a classic style with some specialty ingredient(s), the brewer should also specify the classic style. Guidelines for competing: Spiced beers using unusual fermentables should be entered in the experimental category. Fruit beers using unusual fermentables should be entered in the fruit beer category.",
                        "ibuMin": null,
                        "ibuMax": "100",
                        "abvMin": "2.5",
                        "abvMax": "25",
                        "srmMin": "1",
                        "srmMax": "100",
                        "ogMin": "1.03",
                        "fgMin": "1.006",
                        "fgMax": "1.03",
                        "id": 125
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/RYSZyK/upload_iGGMFp-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/RYSZyK/upload_iGGMFp-large.png"
                    }
                },
                {
                    "id": "b0mE6Y",
                    "name": "05.30.16 Tangerine IPA",
                    "description": "After brewing this intense double IPA with more than 10 different hops and consistently delivering it faster than any bottled IPA on the planet, we decided to do something different with this Stone Enjoy By IPA—we took it to another level, again. Puréed tangerines were added to the batch to create a devastatingly fresh IPA with a tang of tangerine. The orangey, tangerine flavors yielded by this addition to the recipe meld beautifully with the bitterness of the hops. True to this series, Stone Enjoy By Tangerine IPA is brewed specifically NOT to last, and should be enjoyed within 37 days.",
                    "abv": "9.4",
                    "ibu": "90",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": null,
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "American-Style India Pale Ale",
                        "shortName": "American IPA",
                        "description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
                        "ibuMin": "50",
                        "ibuMax": "70",
                        "abvMin": "6.3",
                        "abvMax": "7.5",
                        "srmMin": "6",
                        "srmMax": "14",
                        "ogMin": "1.06",
                        "fgMin": "1.012",
                        "fgMax": "1.018",
                        "id": 30
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/b0mE6Y/upload_Q89vb2-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/b0mE6Y/upload_Q89vb2-large.png"
                    }
                },
                {
                    "id": "btwcy1",
                    "name": "077XX India Pale Ale",
                    "description": "Like all things truly Jersey, 077XX makes the most in balancing through its accentuation of extremes. Inspired by the west coast IPAs we love, we added a thump of hops to a dynamic malt profile and chose a yeast to drive these two further than they wanted to go. Throw our water into this mix and you will find dank green resinous hops popping over orange, mango and papaya aromas, with just enough sweetness of body to make the long finish a pleasure to have around. A double IPA perfect for adding fuel to the fire of a dinner, a game, or an idea, drink it when your night matters. (Available only in NJ)",
                    "abv": "7.8",
                    "ibu": "80",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Year Round",
                        "description": "Available year round as a staple beer.",
                        "id": 1
                    },
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "Imperial or Double India Pale Ale",
                        "shortName": "Imperial IPA",
                        "description": "Imperial or Double India Pale Ales have intense hop bitterness, flavor and aroma. Alcohol content is medium-high to high and notably evident. They range from deep golden to medium copper in color. The style may use any variety of hops. Though the hop character is intense it's balanced with complex alcohol flavors, moderate to high fruity esters and medium to high malt character. Hop character should be fresh and lively and should not be harsh in quality. The use of large amounts of hops may cause a degree of appropriate hop haze. Imperial or Double India Pale Ales have medium-high to full body. Diacetyl should not be perceived. The intention of this style of beer is to exhibit the fresh and bright character of hops. Oxidative character and aged character should not be present.",
                        "ibuMin": "65",
                        "ibuMax": "100",
                        "abvMin": "7.5",
                        "abvMax": "10.5",
                        "srmMin": "5",
                        "srmMax": "13",
                        "ogMin": "1.075",
                        "fgMin": "1.012",
                        "fgMax": "1.02",
                        "id": 31
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/btwcy1/upload_i7ZBNw-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/btwcy1/upload_i7ZBNw-large.png"
                    }
                },
                {
                    "id": "FWiYZi",
                    "name": "08.08.08 Vertical Epic Ale",
                    "description": "No single day can contain something as momentous as our 20th anniversary here at Stone Brewing. So we’re celebrating this milestone over the course of an entire year by releasing some fan-favorite beers from our 20-year history, using their original recipes and bottle art, and looking back on some highlights from the past on our way into a future filled with continued creativity, passion and a helluva lot of fun.",
                    "abv": "8.9",
                    "ibu": "45",
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": null,
                    "style": {
                        "category": {
                            "name": "Belgian And French Origin Ales",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Belgian-Style Pale Ale",
                        "shortName": "Belgian Pale",
                        "description": "Belgian-style pale ales are characterized by low but noticeable hop bitterness, flavor, and aroma. Light to medium body and low malt aroma are typical. They are light amber to deep amber in color. Noble-type hops are commonly used. Low to medium fruity esters are evident in aroma and flavor. Low levels of phenolic spiciness from yeast byproducts may be perceived. Low caramel or toasted malt flavor is okay. Diacetyl should not be perceived. Chill haze is allowable at cold temperatures.",
                        "ibuMin": "20",
                        "ibuMax": "30",
                        "abvMin": "4",
                        "abvMax": "6",
                        "srmMin": "6",
                        "srmMax": "12",
                        "ogMin": "1.044",
                        "fgMin": "1.008",
                        "fgMax": "1.014",
                        "id": 62
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/FWiYZi/upload_fQcVbg-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/FWiYZi/upload_fQcVbg-large.png"
                    }
                },
                {
                    "id": "OM0rIm",
                    "name": "1 North Lager",
                    "description": "A classic Vienna lager style beer. Similar to an Oktoberfest, but not quite as malty, the 1 N. Lager (named after our address) is a medium bodied lager that normally comes around in late summer and fall.\r\n\r\nGrain: 2 Row, Munich 10, Vienna, Caramel 60\r\nHops: Saaz, Mt. Hood",
                    "abv": null,
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": {
                        "name": "Year Round",
                        "description": "Available year round as a staple beer.",
                        "id": 1
                    },
                    "style": {
                        "category": {
                            "name": "European-germanic Lager",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Vienna-Style Lager",
                        "shortName": "Vienna Lager",
                        "description": "Beers in this category are reddish brown or copper colored. They are medium in body. The beer is characterized by malty aroma and slight malt sweetness. The malt aroma and flavor should have a notable degree of toasted and/or slightly roasted malt character. Hop bitterness is clean and crisp. Noble-type hop aromas and flavors should be low or mild. Diacetyl, chill haze and ale-like fruity esters should not be perceived.",
                        "ibuMin": "22",
                        "ibuMax": "28",
                        "abvMin": "4.8",
                        "abvMax": "5.4",
                        "srmMin": "12",
                        "srmMax": "16",
                        "ogMin": "1.046",
                        "fgMin": "1.012",
                        "fgMax": "1.018",
                        "id": 80
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/OM0rIm/upload_pgpZbA-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/OM0rIm/upload_pgpZbA-large.png"
                    }
                },
                {
                    "id": "R6YHvd",
                    "name": "1 Year Anniversary",
                    "description": "We put together an American style wheatwine, a sort of forgotten hybrid of a barleywine style ale. We utilized five different types of wheat for our biggest beer yet. We promptly aged it in local white wine barrels that'll round out the tart, full bodies, herbaceous hop profile, enhancing one year down, and forever to go! Cheers!",
                    "abv": "8.4",
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": {
                        "name": "Limited",
                        "description": "Limited availability.",
                        "id": 2
                    },
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "American-Style Wheat Wine Ale",
                        "shortName": "Wheatwine",
                        "description": "American style wheat wines range from gold to deep amber and are brewed with 50% or more wheat malt. They have full body and high residual malty sweetness. Perception of bitterness is moderate to medium -high. Fruity-ester characters are often high and counterbalanced by complexity of alcohols and high alcohol content. Hop aroma and flavor are at low to medium levels. Very low levels of diacetyl may be acceptable. Bready, wheat, honey-like and/or caramel aroma and flavor are often part of the character. Phenolic yeast character, sulfur, and/or sweet corn-like dimethylsulfide (DMS) should not be present. Oxidized, stale and aged characters are not typical of this style. Chill haze is allowable.",
                        "ibuMin": "45",
                        "ibuMax": "85",
                        "abvMin": "8.4",
                        "abvMax": "12",
                        "srmMin": "8",
                        "srmMax": "15",
                        "ogMin": "1.088",
                        "fgMin": "1.024",
                        "fgMax": "1.032",
                        "id": 35
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/R6YHvd/upload_vb0zwK-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/R6YHvd/upload_vb0zwK-large.png"
                    }
                },
                {
                    "id": "66mYWQ",
                    "name": "1/2 Ale",
                    "description": null,
                    "abv": "3.4",
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Pint",
                        "id": 5
                    },
                    "available": null,
                    "style": {
                        "category": {
                            "name": "Belgian And French Origin Ales",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "French & Belgian-Style Saison",
                        "shortName": "Saison",
                        "description": "Beers in this category are golden to deep amber in color. There may be quite a variety of characters within this style. Generally: They are light to medium in body. Malt aroma is low to medium-low. Esters are medium to high in  aroma, while, complex alcohols, herbs, spices, low Brettanomyces character and even clove and smoke-like phenolics may or may not be evident in the overall balanced beer. Hop aroma and flavor may be at low to medium levels. Malt flavor is low but provides foundation for the overall balance. Hop bitterness is moderate to moderately assertive. Herb and/or spice flavors, including black pepper-like notes, may or may not be evident. Fruitiness from fermentation is generally in character. A balanced small amount of sour or acidic flavors is acceptable when in balance with other components. Earthy, cellar-like, musty aromas are okay. Diacetyl should not be perceived. Chill or slight yeast haze is okay. Often bottle conditioned with some yeast character and high carbonation. French & Belgian-Style Saison may have Brettanomyces characters that are slightly acidity, fruity, horsey, goaty and/or leather-like.",
                        "ibuMin": "20",
                        "ibuMax": "40",
                        "abvMin": "4.5",
                        "abvMax": "8.5",
                        "srmMin": "4",
                        "srmMax": "14",
                        "ogMin": "1.055",
                        "fgMin": "1.004",
                        "fgMax": "1.016",
                        "id": 72
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/66mYWQ/upload_JBpzQs-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/66mYWQ/upload_JBpzQs-large.png"
                    }
                },
                {
                    "id": "BWQehj",
                    "name": "10 Barrel OG. Wheat IPA",
                    "description": null,
                    "abv": "6.5",
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": {
                        "name": "Weizen",
                        "id": 9
                    },
                    "available": null,
                    "style": {
                        "category": {
                            "name": "North American Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "American-Style India Pale Ale",
                        "shortName": "American IPA",
                        "description": "American-style India pale ales are perceived to have medium-high to intense hop bitterness, flavor and aroma with medium-high alcohol content. The style is further characterized by floral, fruity, citrus-like, piney, resinous, or sulfur-like American-variety hop character. Note that one or more of these American-variety hop characters is the perceived end, but the hop characters may be a result of the skillful use of hops of other national origins. The use of water with high mineral content results in a crisp, dry beer. This pale gold to deep copper-colored ale has a full, flowery hop aroma and may have a strong hop flavor (in addition to the perception of hop bitterness). India pale ales possess medium maltiness which contributes to a medium body. Fruity-ester flavors and aromas are moderate to very strong. Diacetyl can be absent or may be perceived at very low levels. Chill and/or hop haze is allowable at cold temperatures. (English and citrus-like American hops are considered enough of a distinction justifying separate American-style IPA and English-style IPA categories or subcategories. Hops of other origins may be used for bitterness or approximating traditional American or English character. See English-style India Pale Ale",
                        "ibuMin": "50",
                        "ibuMax": "70",
                        "abvMin": "6.3",
                        "abvMax": "7.5",
                        "srmMin": "6",
                        "srmMax": "14",
                        "ogMin": "1.06",
                        "fgMin": "1.012",
                        "fgMax": "1.018",
                        "id": 30
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/BWQehj/upload_mJfcvl-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/BWQehj/upload_mJfcvl-large.png"
                    }
                },
                {
                    "id": "oM70ly",
                    "name": "10 Commandments",
                    "description": null,
                    "abv": "10",
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": null,
                    "style": {
                        "category": {
                            "name": "Hybrid/mixed Beer",
                            "createDate": "2012-03-21 20:06:46"
                        },
                        "name": "Specialty Honey Lager or Ale",
                        "shortName": "Honey Beer",
                        "description": "These beers are brewed using honey in addition to malted barley. Beers may be brewed to a traditional style or may be experimental. Character of honey should be evident in flavor and aroma and balanced with the other components without overpowering them. A statement by the brewer explaining the classic or other style of the beer, and the type of honey used is essential in order for fair assessment in competitions.",
                        "ibuMin": null,
                        "ibuMax": "100",
                        "abvMin": "2.5",
                        "abvMax": "12",
                        "srmMin": "1",
                        "srmMax": "100",
                        "ogMin": "1.03",
                        "fgMin": "1.006",
                        "fgMax": "1.03",
                        "id": 126
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/oM70ly/upload_IcVU8o-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/oM70ly/upload_IcVU8o-large.png"
                    }
                },
                {
                    "id": "VxrC7C",
                    "name": "10 Day Scottish Ale",
                    "description": "A dark amber ale that focuses on the rich, nutty flavors of the malted barley it is made from. Malty and lightly sweet with a smooth, clean finish.",
                    "abv": "5.4",
                    "ibu": null,
                    "isOrganic": "N",
                    "status": "verified",
                    "glass": null,
                    "available": null,
                    "style": {
                        "category": {
                            "name": "British Origin Ales",
                            "createDate": "2012-03-21 20:06:45"
                        },
                        "name": "Scotch Ale",
                        "shortName": "Scotch Ale",
                        "description": "Scotch ales are overwhelmingly malty and full-bodied. Perception of hop bitterness is very low. Hop flavor and aroma are very low or nonexistent. Color ranges from deep copper to brown. The clean alcohol flavor balances the rich and dominant sweet maltiness in flavor and aroma. A caramel character is often a part of the profile. Dark roasted malt flavors and aroma may be evident at low levels. If present, fruity esters are generally at low aromatic and flavor levels. Low diacetyl levels are acceptable. Chill haze is allowable at cold temperatures. Though there is little evidence suggesting that traditionally made strong Scotch ales exhibited peat smoke character, the current marketplace offers many Scotch Ales with peat or smoke character present at low to medium levels. Thus a peaty/smoky character may be evident at low levels (ales with medium or higher smoke character would be considered a smoke flavored beer and considered in another category). Scotch Ales may be split into two subcategories: Traditional (no smoke character) and Peated (low level of peat smoke character).",
                        "ibuMin": "25",
                        "ibuMax": "35",
                        "abvMin": "6.2",
                        "abvMax": "8",
                        "srmMin": "15",
                        "srmMax": "30",
                        "ogMin": "1.072",
                        "fgMin": "1.016",
                        "fgMax": "1.028",
                        "id": 15
                    },
                    "labels": {
                        "medium": "https://s3.amazonaws.com/brewerydbapi/beer/VxrC7C/upload_jlVWHQ-medium.png",
                        "large": "https://s3.amazonaws.com/brewerydbapi/beer/VxrC7C/upload_jlVWHQ-large.png"
                    }
                }
            ]
        }
    }

    getItems(){
        return this.state.items.map((beer) => {
            var thumbnail = beer.labels == undefined? '' : beer.labels.medium;
            return (<div className="col-xs-4">
                        <BeerItem thumbnail={thumbnail} beername={beer.name} />
                    </div>
              );
        });
    }

    render() {
        var items = this.getItems();
        return (
            <div>
                <div className="turquoise-bg">
                    <div className="container">
                    <h1 className="black-text bold fs-50 no-margin white-text" id="SearchHeader">Search Our Huge Beer Inventory</h1>
                    <Filter/>
                    </div>
                    
                </div>
                <div className="container">
                    {items}
                </div>
            </div>
        );
    }

}

export default Dashboard;
