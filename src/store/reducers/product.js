const team_price = 400.00;
const brazil_price = 250.00;
const nba_price = 350.00;
const european_classA_price = 399.99;
const european_classB_price = 350.00;
const european_classC_price = 299.99;


const productsList = [
    {
      id_product: 1,
      category: "nacional",
      fk_idcategorys: 1,
      name_product: "Flamengo 2020",
      price: brazil_price,
      image: "./images/futebol/fla.jpg",
      id_categorys: 1,
      name_categorys: "Clubes brasileiros",
      selected: false
    },
    {
      id_product: 2,
      category: "nacional",
      fk_idcategorys: 1,
      name_product: "Palmeiras 2020",
      price: brazil_price,
      image: "./images/futebol/palmeiras.jpg",
      id_categorys: 1,
      name_categorys: "Clubes brasileiros",
      selected: false
    },
    {
      id_product: 3,
      category: "nacional",
      fk_idcategorys: 1,
      name_product: "Grêmio 2020",
      price: brazil_price,
      image: "./images/futebol/gremio.jpg",
      id_categorys: 1,
      name_categorys: "Clubes brasileiros",
      selected: false
    },
    {
      id_product: 4,
      category: "nacional",
      fk_idcategorys: 1,
      name_product: "Atletico-MG 2020",
      price: brazil_price,
      image: "./images/futebol/atletico.jpg",
      id_categorys: 1,
      name_categorys: "Clubes brasileiros",
      selected: false
    },
    {
      id_product: 5,
      category: "nacional",
      fk_idcategorys: 1,
      name_product: "Athletico-PR 2020",
      price: brazil_price,
      image: "./images/futebol/atletico-pr.jpg",
      id_categorys: 1,
      name_categorys: "Clubes brasileiros",
      selected: false
    },
    {
      id_product: 6,
      category: "nacional",
      fk_idcategorys: 1,
      name_product: "Corinthians 2020",
      price: brazil_price,
      image: "./images/futebol/corinthias.jpg",
      id_categorys: 1,
      name_categorys: "Clubes brasileiros",
      selected: false
    },
    {
      id_product: 7,
      category: "nacional",
      fk_idcategorys: 1,
      name_product: "Fluminense 2020",
      price: brazil_price,
      image: "./images/futebol/flu.jpg",
      id_categorys: 1,
      name_categorys: "Clubes brasileiros",
      selected: false
    },
    {
      id_product: 8,
      category: "nacional",
      fk_idcategorys: 1,
      name_product: "Juventude 2020",
      price: brazil_price,
      image: "./images/futebol/ju.jpg",
      id_categorys: 1,
      name_categorys: "Clubes brasileiros",
      selected: false
    },
    {
      id_product: 9,
      category: "nacional",
      fk_idcategorys: 1,
      name_product: "Santos 2020",
      price: brazil_price,
      image: "./images/futebol/santos.jpg",
      id_categorys: 1,
      name_categorys: "Clubes brasileiros",
      selected: false
    },
    {
      id_product: 10,
      category: "nacional",
      fk_idcategorys: 1,
      name_product: "São Paulo 2020",
      price: brazil_price,
      image: "./images/futebol/saopaulo.jpg",
      id_categorys: 1,
      name_categorys: "Clubes brasileiros",
      selected: false
    },
    {
      id_product: 11,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "Ajax 2020/21",
      price: european_classC_price,
      image: "./images/futebol/ajax.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 12,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "Arsenal 2020/21",
      price: european_classC_price,
      image: "./images/futebol/arsenal.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 13,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "A. Madrid 2020/21",
      price: european_classC_price,
      image: "./images/futebol/atletico-madrid.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 14,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "Barcelona 2020/21",
      price: european_classB_price,
      image: "./images/futebol/barcelona.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 15,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "Bayern 2020/21",
      price: european_classA_price,
      image: "./images/futebol/bayern.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 16,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "Borussia 2020/21",
      price: european_classC_price,
      image: "./images/futebol/borussia.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 17,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "Chelsea 2020/21",
      price: european_classB_price,
      image: "./images/futebol/chelsea.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 18,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "Inter 2020/21",
      price: european_classC_price,
      image: "./images/futebol/inter.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 19,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "Juventus 2020/21",
      price: european_classB_price,
      image: "./images/futebol/juv.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 20,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "Leipzig 2020/21",
      price: european_classC_price,
      image: "./images/futebol/leipzig.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 21,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "Liverpool 2020/21",
      price: european_classB_price,
      image: "./images/futebol/liverpool.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 22,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "Lyon 2020/21",
      price: european_classC_price,
      image: "./images/futebol/lyon.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 23,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "Man.City 2020/21",
      price: european_classA_price,
      image: "./images/futebol/man-city.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 24,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "M. United 2020/21",
      price: european_classB_price,
      image: "./images/futebol/man-united.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 25,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "Milan 2020/21",
      price: european_classC_price,
      image: "./images/futebol/milan.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 26,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "Monaco 2020/21",
      price: european_classC_price,
      image: "./images/futebol/monaco.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 27,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "PSG 2020/21",
      price: european_classB_price,
      image: "./images/futebol/psg.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 28,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "Real Madrid 2020/21",
      price: european_classA_price,
      image: "./images/futebol/real_madrid.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 29,
      category: "europeu",
      fk_idcategorys: 2,
      name_product: "Roma 2020/21",
      price: european_classC_price,
      image: "./images/futebol/roma.jpg",
      id_categorys: 2,
      name_categorys: "Clubes europeus",
      selected: false
    },
    {
      id_product: 47,
      category: "historica",
      fk_idcategorys: 3,
      name_product: "Brasil 1994",
      price: 200,
      image: "./images/futebol/brasil94.jpg",
      id_categorys: 3,
      name_categorys: "Camisas históricas",
      selected: false
    },
    {
      id_product: 48,
      category: "historica",
      fk_idcategorys: 3,
      name_product: "Flamengo 1981",
      price: 450,
      image: "./images/futebol/fla81.jpg",
      id_categorys: 3,
      name_categorys: "Camisas históricas",
      selected: false
    },
    {
      id_product: 30,
      category: "selecao",
      fk_idcategorys: 4,
      name_product: "Austrália 2020",
      price: team_price,
      image: "./images/futebol/australia.jpg",
      id_categorys: 4,
      name_categorys: "Seleções nacionais",
      selected: false
    },
    {
      id_product: 31,
      category: "selecao",
      fk_idcategorys: 4,
      name_product: "Alemanha 2020",
      price: team_price,
      image: "./images/futebol/alemanha.jpg",
      id_categorys: 4,
      name_categorys: "Seleções nacionais",
      selected: false
    },
    {
      id_product: 32,
      category: "selecao",
      fk_idcategorys: 4,
      name_product: "Argentina 2020",
      price: team_price,
      image: "./images/futebol/argentina.jpg",
      id_categorys: 4,
      name_categorys: "Seleções nacionais",
      selected: false
    },
    {
      id_product: 33,
      category: "selecao",
      fk_idcategorys: 4,
      name_product: "Brasil 2020",
      price: team_price,
      image: "./images/futebol/brasil.jpg",
      id_categorys: 4,
      name_categorys: "Seleções nacionais",
      selected: false
    },
    {
      id_product: 34,
      category: "selecao",
      fk_idcategorys: 4,
      name_product: "Canadá 2020",
      price: team_price,
      image: "./images/futebol/canada.jpg",
      id_categorys: 4,
      name_categorys: "Seleções nacionais",
      selected: false
    },
    {
      id_product: 35,
      category: "selecao",
      fk_idcategorys: 4,
      name_product: "Costa Rica 2020",
      price: team_price,
      image: "./images/futebol/costa.jpg",
      id_categorys: 4,
      name_categorys: "Seleções nacionais",
      selected: false
    },
    {
      id_product: 36,
      category: "selecao",
      fk_idcategorys: 4,
      name_product: "Korea 2020",
      price: team_price,
      image: "./images/futebol/corea.jpg",
      id_categorys: 4,
      name_categorys: "Seleções nacionais",
      selected: false
    },
    {
      id_product: 37,
      category: "selecao",
      fk_idcategorys: 4,
      name_product: "Espanha 2020",
      price: team_price,
      image: "./images/futebol/espanha.jpg",
      id_categorys: 4,
      name_categorys: "Seleções nacionais",
      selected: false
    },
    {
      id_product: 38,
      category: "selecao",
      fk_idcategorys: 4,
      name_product: "EUA 2020",
      price: team_price,
      image: "./images/futebol/eua.jpg",
      id_categorys: 4,
      name_categorys: "Seleções nacionais",
      selected: false
    },
    {
      id_product: 39,
      category: "selecao",
      fk_idcategorys: 4,
      name_product: "França 2020",
      price: team_price,
      image: "./images/futebol/franca.jpg",
      id_categorys: 4,
      name_categorys: "Seleções nacionais",
      selected: false
    },
    {
      id_product: 40,
      category: "selecao",
      fk_idcategorys: 4,
      name_product: "Itália 2020",
      price: team_price,
      image: "./images/futebol/italia.jpg",
      id_categorys: 4,
      name_categorys: "Seleções nacionais",
      selected: false
    },
    {
      id_product: 41,
      category: "selecao",
      fk_idcategorys: 4,
      name_product: "Inglaterra 2020",
      price: team_price,
      image: "./images/futebol/inglaterra.jpg",
      id_categorys: 4,
      name_categorys: "Seleções nacionais",
      selected: false
    },
    {
      id_product: 42,
      category: "selecao",
      fk_idcategorys: 4,
      name_product: "Jamaica 2020",
      price: team_price,
      image: "./images/futebol/jamaica.jpg",
      id_categorys: 4,
      name_categorys: "Seleções nacionais",
      selected: false
    },
    {
      id_product: 43,
      category: "selecao",
      fk_idcategorys: 4,
      name_product: "Japão 2020",
      price: team_price,
      image: "./images/futebol/japao.jpg",
      id_categorys: 4,
      name_categorys: "Seleções nacionais",
      selected: false
    },
    {
      id_product: 44,
      category: "selecao",
      fk_idcategorys: 4,
      name_product: "Nigéria 2020",
      price: team_price,
      image: "./images/futebol/nigeria.jpg",
      id_categorys: 4,
      name_categorys: "Seleções nacionais",
      selected: false
    },
    {
      id_product: 45,
      category: "selecao",
      fk_idcategorys: 4,
      name_product: "Portugal 2020",
      price: team_price,
      image: "./images/futebol/portugal.jpg",
      id_categorys: 4,
      name_categorys: "Seleções nacionais",
      selected: false
    },
    {
      id_product: 46,
      category: "selecao",
      fk_idcategorys: 4,
      name_product: "Senegal 2020",
      price: team_price,
      image: "./images/futebol/senegal.jpg",
      id_categorys: 4,
      name_categorys: "Seleções nacionais",
      selected: false
    },
    {
      id_product: 47,
      category: "club",
      fk_idcategorys: 5,
      name_product: "Warriors",
      price: nba_price,
      image: "./images/basquete/curry.jpg",
      id_categorys: 5,
      name_categorys: "NBA",
      selected: false
    },
    {
        id_product: 48,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Warriors",
        price: nba_price,
        image: "./images/basquete/klay.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 49,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Warriors",
        price: nba_price,
        image: "./images/basquete/green.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 50,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Bucks",
        price: nba_price,
        image: "./images/basquete/ante.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 51,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Miami",
        price: nba_price,
        image: "./images/basquete/butler.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 52,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Miami",
        price: nba_price,
        image: "./images/basquete/herro.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 53,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Mavericks",
        price: nba_price,
        image: "./images/basquete/doncic.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 54,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Lakers",
        price: nba_price,
        image: "./images/basquete/james.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 55,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Lakers",
        price: nba_price,
        image: "./images/basquete/davis.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 56,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Memphis",
        price: nba_price,
        image: "./images/basquete/ja.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 57,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Jazz",
        price: nba_price,
        image: "./images/basquete/gobert.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 58,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Jazz",
        price: nba_price,
        image: "./images/basquete/gobert2.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 59,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Clippers",
        price: nba_price,
        image: "./images/basquete/mitchell.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 60,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Clippers",
        price: nba_price,
        image: "./images/basquete/george.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 61,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Clippers",
        price: nba_price,
        image: "./images/basquete/leonard.jpeg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 62,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Phoenix",
        price: nba_price,
        image: "./images/basquete/booker.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 63,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Phoenix",
        price: nba_price,
        image: "./images/basquete/paul.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 64,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Nets",
        price: nba_price,
        image: "./images/basquete/durant.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 65,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Nets",
        price: nba_price,
        image: "./images/basquete/durant2.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 66,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Nets",
        price: nba_price,
        image: "./images/basquete/harden.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 67,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Nets",
        price: nba_price,
        image: "./images/basquete/irving.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 68,
        category: "club",
        fk_idcategorys: 5,
        name_product: "Hawks",
        price: nba_price,
        image: "./images/basquete/Young.jpg",
        id_categorys: 5,
        name_categorys: "NBA",
        selected: false
    },
    {
        id_product: 69,
        category: "team",
        fk_idcategorys: 6,
        name_product: "EUA",
        price: team_price,
        image: "./images/basquete/durant3.jpg",
        id_categorys: 6,
        name_categorys: "EUA",
        selected: false
    },
    {
        id_product: 70,
        category: "team",
        fk_idcategorys: 6,
        name_product: "EUA",
        price: team_price,
        image: "./images/basquete/mitchell2.jpg",
        id_categorys: 6,
        name_categorys: "EUA",
        selected: false
    },
    {
        id_product: 71,
        category: "team",
        fk_idcategorys: 6,
        name_product: "EUA",
        price: team_price,
        image: "./images/basquete/tatum.jpg",
        id_categorys: 6,
        name_categorys: "EUA",
        selected: false
    },
    {
        id_product: 72,
        category: "team",
        fk_idcategorys: 6,
        name_product: "EUA",
        price: team_price,
        image: "./images/basquete/harden2.jpg",
        id_categorys: 6,
        name_categorys: "EUA",
        selected: false
    },
    {
        id_product: 73,
        category: "team",
        fk_idcategorys: 6,
        name_product: "EUA",
        price: team_price,
        image: "./images/basquete/davis2.jpg",
        id_categorys: 6,
        name_categorys: "EUA",
        selected: false
    },
];

export default productsList;