import React, { Component } from 'react';
import './Details.css'
import '../../Assets/css/common.css'
import Filter from '../../Components/Filter'

const defaultThumbnail = 'http://cdn2.insidermonkey.com/blog/wp-content/uploads/2015/07/shutterstock_113954089-400x340.jpg';

class Details extends Component {

    constructor(props){
        super(props);
        this.state ={};
        this.state.beer = {
            "id": "tmEthz",
            "name": "\"Admiral\" Stache",
            "nameDisplay": "\"Admiral\" Stache",
            "description": "Milwaukee Brewing Co’s take on a classic European style. Baltic Porters are the stronger lager fermented cousin of the classic London Porter. The higher strength and cold fermentation help to create a smooth, less fruity porter, rich in roasted malt flavors and aromas. The “Admiral” Stache has a deep brown hue with a light caramel head. Toffee and milk chocolate dominate the flavor with subtle hints of dried fruit. One month of aging in Bourbon Barrels imparted a layer of vanilla and oak.\r\n\r\nWe first developed this beer in 2007. Our first attempted batch of beer at the 2nd street location was a Baltic Porter. What we ended up with became known as “Shake Down Nut Brown”. You can guess what went wrong from there… But, so many things right! Every year that has gone by, the beer has gotten a little bit stronger, in flavor and alcohol.\r\n\r\nWe use a black malt for the dark rich color and an extra special malt for the dried fruit flavors. Baltic Porters are fermented cold with a lager yeast. That long slow maturation creates a smooth flavor profile. The anticipation of the bourbon barrel aging it the most exciting part of this brew process. We want that oak character with hints of bourbon, we use 3rd run barrels for this result. Each batch has been slightly different from the last.",
            "abv": "7",
            "ibu": "23",
            "glasswareId": 5,
            "srmId": 37,
            "availableId": 4,
            "styleId": 104,
            "isOrganic": "N",
            "labels": {
                "icon": "https://s3.amazonaws.com/brewerydbapi/beer/tmEthz/upload_3Jl1St-icon.png",
                "medium": "https://s3.amazonaws.com/brewerydbapi/beer/tmEthz/upload_3Jl1St-medium.png",
                "large": "https://s3.amazonaws.com/brewerydbapi/beer/tmEthz/upload_3Jl1St-large.png"
            },
            "status": "verified",
            "statusDisplay": "Verified",
            "originalGravity": "1.071",
            "createDate": "2012-09-09 13:35:27",
            "updateDate": "2016-11-11 14:23:06",
            "glass": {
                "id": 5,
                "name": "Pint",
                "createDate": "2012-01-03 02:41:33"
            },
            "srm": {
                "id": 37,
                "name": "37",
                "hex": "3F0708"
            },
            "available": {
                "id": 4,
                "name": "Seasonal",
                "description": "Available at the same time of year, every year."
            },
            "style": {
                "id": 104,
                "categoryId": 9,
                "category": {
                    "id": 9,
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
                "createDate": "2012-03-21 20:06:46",
                "updateDate": "2015-04-07 15:41:46"
            }
        };
    }

    render(){
        let beer = this.state.beer;
        let thumbnail = beer.labels == undefined? defaultThumbnail : beer.labels.medium;
        let organic = beer.isOrganic == "N"? "No" : "Yes";
        let availability = beer.available.description;
        let glass = beer.glass.name;
        let srm = beer.srm.hex;
        
        return (
                <div id="DetailsPage">

                    <div className="turquoise-bg">
                        <div className="container">
                            <Filter/>
                        </div>
                    </div>
                    <div className="container">
                        <div className="h20"/>
                        <div className="row">
                            <div>
                                <img src={thumbnail} className="center-item"/>
                                <div className="h10"/>
                                <div className="center-text">
                                    <span className="fs-40 bold">{beer.name}</span>
                                </div>
                                <div className="h10"/>
                                <p className="fs-20 justify-text"><span className="bold">Description:</span> {beer.description}</p>
                                <p className="fs-20"><span className="bold">Verification Status:</span> {beer.statusDisplay}</p>
                                <p className="fs-20"><span className="bold">ABV:</span> {beer.abv}</p>
                                <p className="fs-20"><span className="bold">IBU:</span> {beer.ibu}</p>
                                <p className="fs-20"><span className="bold">Organic:</span> {organic}</p>
                                <p className="fs-20"><span className="bold">Availability:</span> {availability}</p>
                                <p className="fs-20"><span className="bold">Glass:</span> {glass}</p>
                                <p className="fs-20"><span className="bold">SRM:</span> #{srm}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
}

export default Details;