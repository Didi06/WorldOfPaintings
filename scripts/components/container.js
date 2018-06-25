import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Painters from './painters';
import Art from './art';
import NavBar from './navbar';
import Home from './home';
import Cart from './cart';
import Login from './login';
import MyAccount from './myaccount';


class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showArtistsInfo: false,
            clickArtistVisible: false,
            artistIndex: 0,
            showArtInfo: false,
            selectedArtist: {},
            slectedArtistIndex: -1,
            cart: [],
            allArt: [],


            artists: [
                {
                    "id": 6,
                    "name": "Leonardo da Vinci",
                    "keywords": [],
                    "Periods": ["High Renaissance", "Early renaissance", "Renaissance", "Italian Renaissance", "Florentine painting"],
                    "image": "https://f.ptcdn.info/889/051/000/ornf8zch4AckNdr2nq4-o.jpg",
                    "nationality": "Italian",
                    "biography": "Leonardo di ser Piero da Vinci (Italian 15 April 1452 – 2 May 1519), more commonly Leonardo da Vinci or simply Leonardo, was an Italian polymath of the Renaissance, whose areas of interest included invention, painting, sculpting, architecture, science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, writing, history, and cartography. He has been variously called the father of paleontology, ichnology, and architecture, and is widely considered one of the greatest painters of all time.",
                    "similar_artists": [],
                    "education": "Leonardo da Vinci: Early Career. Da Vinci received no formal education beyond basic reading, writing and math, but his father appreciated his artistic talent and apprenticed him at around age 15 to the noted sculptor and painter Andrea del Verrocchio, of Florence.",
                    "known for": "Art, science",
                    "work": [
                        "Mona Lisa",
                        "The Last Supper",
                        "Salvator Mundi",
                        "The Vitruvian Man"

                    ],
                    "birthday": "April 15, 1452, Anchiano, Italy",
                    "deathday": "May 2, 1519, Clos Lucé, Amboise, France",
                    "movement": "High Renaissance",
                    "art": [
                        {
                            piece: "Mona Lisa",
                            description: "The Mona Lisa is a half-length portrait painting by the Italian Renaissance artist Leonardo da Vinci that has been described as the best known, the most visited, the most written about, the most sung about, the most parodied work of art in the world. The Mona Lisa is also one of the most valuable paintings in the world. It holds the Guinness World Record for the highest known insurance valuation in history at $100 million in 1962 which is worth nearly $800 million in 2017.",
                            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
                            price: 500000,
                            inventory: 1
                        },
                        {
                            piece: "The Last Supper",
                            description: "The Last Supper is a late 15th-century mural painting by Leonardo da Vinci housed by the refectory of the Convent of Santa Maria delle Grazie in Milan. It is one of the world's most recognizable paintings. The work is presumed to have been started around 1495–96 and was commissioned as part of a plan of renovations to the church and its convent buildings by Leonardo's patron Ludovico Sforza, Duke of Milan.",
                            url: "http://sohanews.sohacdn.com/zoom/600_315/2016/leonardo-da-vinci-last-supper-copy-wga12732-1459089330048-76-168-602-957-crop-1459089393777.jpg",
                            price: 300000,
                            inventory: 1
                        },
                        {
                            piece: "The Vitruvian Man",
                            description: "The Vitruvian Man (The proportions of the human body according to Vitruvius), is a drawing by Leonardo da Vinci around 1490. It is accompanied by notes based on the work of the architect Vitruvius. The drawing, which is in pen and ink on paper, depicts a man in two superimposed positions with his arms and legs apart and inscribed in a circle and square. The drawing and text are sometimes called the Canon of Proportions or, less often, Proportions of Man",
                            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/300px-Da_Vinci_Vitruve_Luc_Viatour.jpg",
                            price: 250000,
                            inventory: 1
                        },
                    ]
                },
                {
                    "id": 1,
                    "name": "Pablo Picasso",
                    "keywords": [],
                    "Periods": ["Cubism", "Surrealism", "Expressionism", "Post-Impressionism", "the African-influenced Period (1907–1909)"],
                    "image": "http://www.theartstory.org/images20/new_design/bio/bio_picasso_pablo.jpg",
                    "nationality": "Spanish",
                    "biography": "Pablo Ruiz Picasso(25 October 1881 – 8 April 1973) was a Spanish painter, sculptor, printmaker, ceramicist, stage designer, poet and playwright who spent most of his adult life in France. Regarded as one of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore. Among his most famous works are the proto-Cubist Les Demoiselles d'Avignon (1907), and Guernica (1937), a dramatic portrayal of the bombing of Guernica by the German and Italian air forces.",
                    "similar_artists": [],
                    "education": "	José Ruiz y Blasco (father), Real Academia de Bellas Artes de San Fernando",
                    "known for": "Painting, drawing, sculpture, printmaking, ceramics, stage design, writing",
                    "work": [
                        "The Old Guitarist (1903)",
                        "Le Reve (1932)",
                        "Guernica (1937)",
                        "The Weeping Woman (1937)"
                    ],
                    "birthday": "October 25, 1881, Málaga, Spain",
                    "deathday": "April 8, 1973, Mougins, France",
                    "movement": "Cubism, Surrealism",
                    "art": [
                        {
                            piece: "The Old Guitarist (1903)",
                            description: "The Old Guitarist is an oil painting by Pablo Picasso created late 1903 – early 1904. It depicts an old, blind, haggard man with threadbare clothing weakly hunched over his guitar, playing in the streets of Barcelona, Spain.",
                            url: "https://swh-826d.kxcdn.com/wp-content/uploads/2012/06/Pablo-picasso-painting.jpg",
                            price: 250000,
                            inventory: 1
                        },
                        {
                            piece: "Le Rêve / The Dream (1932)",
                            description: "Le Reve (The Dream) is a 1932 oil painting (48 inches x 36 inches ) by Pablo Picasso, then 50 years old, portraying his 22 years old mistress Marie-Therese Walter. It is said to have been painted in one afternoon, on 24 January 1932. It belongs to Picasso's period of distorted depictions, with its oversimplified outlines and contrasted colors resembling early Fauvism.",
                            url: "https://i.pinimg.com/originals/ca/4b/79/ca4b7944ac678aba302af8dc32ff0d89.jpg",
                            price: 200000,
                            inventory: 1
                        },
                        {
                            piece: "Guernica (1937)",
                            description: "Guernica is a mural-sized oil painting on canvas by Spanish artist Pablo Picasso completed in June 1937,[2] at his home on Rue des Grands Augustins, in Paris. The painting, now in the Museo Reina Sofia in Madrid, was done with a palette of gray, black, and white, and is regarded by many art critics as one of the most moving and powerful anti-war paintings in history.[3] Standing at 3.49 meters (11 ft 5 in) tall and 7.76 meters (25 ft 6 in) wide, the large mural shows the suffering of people wrenched by violence and chaos. Prominent in the composition are a gored horse, a bull, and flames.",
                            url: "https://www.topofart.com/images/artists/Pablo_Picasso/paintings/picasso026.jpg",
                            price: 250000,
                            inventory: 1
                        }
                    ],
                },
                {
                    "id": 2,
                    "name": "Henri Matisse,",
                    "keywords": [],
                    "Periods": [" Expressionism", "Post-Impressionism", "Fauvism"],
                    "image": "https://d1k5w7mbrh6vq5.cloudfront.net/images/cache/9d/a9/ff/9da9ffccfee9943cd7379bb6a2f61342.jpg",
                    "nationality": "French",
                    "biography": "Henri Émile Benoît Matisse (31 December 1869 – 3 November 1954) was a French artist, known for both his use of color and his fluid and original draughtsman ship. He was a draughtsman, printmaker, and sculptor, but is known primarily as a painter. Matisse is commonly regarded, along with Pablo Picasso, as one of the artists who best helped to define the revolutionary developments in the visual arts throughout the opening decades of the twentieth century, responsible for significant developments in painting and sculpture.",
                    "similar_artists": [],
                    "education": "Académie Julian, William-Adolphe Bouguereau, Gustave Moreau",
                    "known for": "Painting, printmaking, sculpture, drawing, collage",
                    "work": [
                        "Woman with a Hat (1905)",
                        "L'Odalique, harmonie bleue",
                        "Nu bleu (1907)",
                        "La Danse (1909)",

                    ],
                    "birthday": "December 31, 1869, Le Cateau-Cambrésis, France",
                    "deathday": "November 3, 1954, Nice, France",
                    "movement": "Fauvism, Modernism, Post-Impressionism",
                    "art": [
                        {
                            piece: "L'Odalique, harmonie bleue",
                            description: "L'Odalisque, harmonie bleue, signed and dated 'Henri Matisse 37' (lower right), oil on canvas, 23¾ x 19½ in. (60.3 x 49.5 cm.), Painted in 1937.",
                            url: "https://dg19s6hp6ufoh.cloudfront.net/pictures/612986568/large/11337860046_b07f31d985_z.jpeg?1461448980",
                            price: 50000,
                            inventory: 1
                        },
                        {
                            piece: "Woman with a Hat (1905)",
                            description: "This is a portrait, titled La Femme au Chapeau or Woman with a Hat made by Henri Matisse in 1905 of his wife, Amelie Parayre. She is depicted in an elaborate outfit with classic attributes of the French bourgeoisie: a gloved arm holding a fan and an elaborate hat atop her head.",
                            url: "http://www.henrimatisse.org/images/gallery/woman-with-a-hat.jpg",
                            price: 80000,
                            inventory: 1
                        },
                        {
                            piece: "La Danse (1909)",
                            description: "In March 1909, Matisse painted a preliminary version of this work, known as Dance (I).[2] It was a compositional study and uses paler colors and less detail. The painting was highly regarded by the artist who once called it the overpowering climax of luminosity; it is also featured in the background of Matisse's La Danse with Nasturtiums (1912).",
                            url: "http://www.artfixdaily.com/images/newsfeed/Oct12_matisse972x650.jpg",
                            price: 100000,
                            inventory: 1
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "Vincent van Gogh",
                    "keywords": [],
                    "Periods": ["Realism", "Post-Impressionism", "Modern art", "Impressionism", "Japonism", "Pointillism", "Neo-impressionism"],
                    "image": "http://portalb.mk/wp-content/uploads/2014/05/54FBDE965EBE8E97AD4051E52C24B66D.jpg",
                    "nationality": "Dutch",
                    "biography": "Vincent Willem van Gogh (30 March 1853 – 29 July 1890) was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade he created about 2,100 artworks, including around 860 oil paintings, most of them in the last two years of his life. They include landscapes, still life’s, portraits and self-portraits, and are characterized by bold colors and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art. His suicide at 37 followed years of mental illness and poverty.",
                    "similar_artists": [],
                    "education": "Royal Academy of Fine Arts (1886–1886), Willem II College (1866–1868)",
                    "known for": "Painting, drawing",
                    "work": [
                        "Sorrow (1882)",
                        "Irises (1889)",
                        "Vase with Fifteen Sunflowers (1888)",
                        "Portrait of Dr. Gachet (1890)",

                    ],
                    "birthday": "March 30, 1853, Zundert, Netherlands",
                    "deathday": "July 29, 1890, Auvers-sur-Oise, France",
                    "movement": "Post-Impressionism",
                    "art": [
                        {
                            piece: "Vase with Fifteen Sunflowers (1888)",
                            description: "Sunflowers (original title, in French: Tournesols) is the name of two series of still life paintings by the Dutch painter Vincent van Gogh. The first series, executed in Paris in 1887, depicts the flowers lying on the ground, while the second set, executed a year later in Arles, shows a bouquet of sunflowers in a vase.",
                            url: "https://media.overstockart.com/optimized/cache/data/artistcategorypictures/Subject/VG411-1000x1000.jpg",
                            price: 100000,
                            inventory: 1
                        },
                        {
                            piece: "Irises (1889)",
                            description: "Vincent van Gogh, Irises. 1889. Post-Impressionism. Oil on canvas. Getty Museum, Los Angeles, California, USA. Place of Creation: France. This image could have imperfections as it’s either historical or reportage.",
                            url: "https://dnq5fc8vfw3ev.cloudfront.net/thumbs/aspect-large-normal/45000/45074/Van-Gogh/Irises.jpg?ts=1528025441",
                            price: 120000,
                            inventory: 1
                        },
                        {
                            piece: "Portrait of Dr. Gachet (1890)",
                            description: "Portrait of Dr. Gachet is one of the most revered paintings by the Dutch artist Vincent van Gogh. It depicts Dr. Paul Gachet who took care of Van Gogh during the final months of his life",
                            url: "http://www.vggallery.com/painting/f_0753.jpg",
                            price: 200000,
                            inventory: 1
                        }
                    ]
                },
                {
                    "id": 4,
                    "name": "Claude Monet",
                    "keywords": [],
                    "Periods": ["Impressionism", "Modern art", "Realism"],
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/220px-Claude_Monet_1899_Nadar_crop.jpg",
                    "nationality": "French",
                    "biography": "Oscar-Claude Monet (14 November 1840 – 5 December 1926) was a founder of French Impressionist painting, and the most consistent and prolific practitioner of the movement's philosophy of expressing one's perceptions before nature, especially as applied to plain air landscape painting. The term Impressionism is derived from the title of his painting Impression, soleil levant (Impression, Sunrise), which was exhibited in 1874 in the first of the independent exhibitions mounted by Monet and his associates as an alternative to the Salon de Paris.",
                    "similar_artists": [],
                    "education": "Académie Suisse (1859–1860), École nationale supérieure des Beaux-Arts",
                    "known for": "Painting",
                    "work": [
                        "Impression, Sunrise",
                        "London Parliament series",
                        "Water Lilies",
                        "Haystacks",

                    ],
                    "birthday": "November 14, 1840, Paris, France",
                    "deathday": "December 5, 1926, Giverny, France",
                    "movement": "Impressionism",
                    "art": [
                        {
                            piece: "Water Lilies",
                            description: "Water Lilies (1916) National Museum of Western Art, Tokyo. One of 250 water lily paintings created by Monet at Giverny. Ranked among the greatest 20th century paintings.",
                            url: "https://i.ytimg.com/vi/XeApLWd7240/maxresdefault.jpg",
                            price: 150000,
                            inventory: 1
                        },
                        {
                            piece: "Haystacks",
                            description: "Haystacks is a title of a series of impressionist paintings by Monet. The primary subjects of all of the paintings in the series are stacks of hay in the field after the harvest season",
                            url: "http://allart.biz/up/photos/album/M_N/Oscar_Claude_Monet/oscar_claude_monet_0279_allart_biz_haystacks_end_of_summer_morning_1891.jpg",
                            price: 90000,
                            inventory: 1
                        },
                        {
                            piece: "Impression, Sunrise",
                            description: "Is a painting by Claude Monet. Shown at what would later be known as the Exhibition of the Impressionists in April 1874, the painting is attributed to giving rise to the name of the Impressionist movement. Impression, Sunrise depicts the port of Le Havre, Monet's hometown, and is his most famous painting of the harbor.",
                            url: "https://media.overstockart.com/optimized/cache/data/product_images/MON2534-1000x1000.jpg",
                            price: 100000,
                            inventory: 1

                        },
                    ]
                },
                {
                    "id": 5,
                    "name": "Jackson Pollock",
                    "keywords": [],
                    "Periods": ["Abstract expressionism", "Expressionism", "Modern art", "Action painting"],
                    "image": "https://uploads3.wikiart.org/images/paul-jackson-pollock.jpg!Portrait.jpg",
                    "nationality": "Amrican",
                    "biography": "Jackson Pollock (January 28, 1912 – August 11, 1956) was an American painter and a major figure in the abstract expressionist movement. He was well known for his unique style of drip painting. During his lifetime, Pollock enjoyed considerable fame and notoriety; he was a major artist of his generation. Regarded as reclusive, he had a volatile personality, and struggled with alcoholism for most of his life. In 1945, he married the artist Lee Krasner, who became an important influence on his career and on his legacy.",
                    "similar_artists": [],
                    "education": "Art Students League of New York",
                    "known for": "Painting",
                    "work": [
                        "Number 3",
                        "Number 5, 1948",
                        "Number 1",
                        "Going West"
                    ],
                    "birthday": " January 28, 1912, Cody, WY",
                    "deathday": " August 11, 1956, Springs, NY",
                    "movement": "Abstract expressionism",
                    "art": [
                        {
                            piece: "Number 5, 1948",
                            description: "Through his drip action technique, Pollock would create layers upon layers of paint, created in a chaotic assemblage of drips and splashes oil paintings.",
                            url: "http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/jhk4jh45jk.png?itok=CrV78z9S&resize=1100x619",
                            price: 200000,
                            inventory: 1
                        },
                        {
                            piece: "Number 3",
                            description: "Through his drip action technique, Pollock would create layers upon layers of paint, created in a chaotic assemblage of drips and splashes oil paintings.",
                            url: "http://en.wahooart.com/Art.nsf/O/8EWJXG/$File/Jackson-Pollock-Number-3-1950.JPG",
                            price: 120000,
                            inventory: 1
                        },
                        {
                            piece: "Number 1",
                            description: "Through his drip action technique, Pollock would create layers upon layers of paint, created in a chaotic assemblage of drips and splashes oil paintings.",
                            url: "https://d32dm0rphc51dk.cloudfront.net/YIAUNeqMfbQPtCjQts_JRA/larger.jpg",
                            price: 150000,
                            inventory: 1

                        }
                    ]
                },

            ],
        }

    }




    /* function to add itmes to the cart   */
    addToCart(item) {
        console.log(item)
        this.setState((prevState) => {
            return {
                cart: prevState.cart.concat(item)
            }
        }

        )
    }

    /* function to remove item from the cart   */
    removeItem(index) {
        var remove = [...this.state.cart]
        remove.splice(index, 1);

        this.setState({
            cart: remove,
        })

    }


    /* function to push each item into the cart  */
    calTotal() {
        var newArt = [...this.state.cart];
        var sum = 0;
        for (var i = 0; i < cart.lenght; i++) {
            sum += newArt[i]
        }
    }

    /* function to show all arts on the art page*/
    componentDidMount() {
        let allArt = [];
        for (var artist of this.state.artists) {
            var temp = artist.art.slice()
            for (let i = 0; i < temp.length; i++) {
                allArt.push(temp[i]);
            }
        }

        this.setState({
            allArt: allArt
        })



    }




    render() {
        return (
            <div className="container">

                <NavBar />
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route path="/artists" render={() => <Painters artists={this.state.artists} />} />
                    <Route path="/art" render={() => <Art art={this.state.allArt} addToCart={this.addToCart.bind(this)} />} />
                    <Route path="/cart" render={() => <Cart items={this.state.cart} removeItem={this.removeItem.bind(this)} calTotal={this.calTotal.bind(this)} />} />
                    <Route path="/myaccount" component={MyAccount} />
                    <Route path="/login" component={Login} />
                </Switch>
            </div>
        )
    }
}

export default Container;