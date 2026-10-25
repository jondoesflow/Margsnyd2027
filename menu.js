// Margherita's of Deal menu, transcribed from the restaurant's printed menu
// (margheritasitalian.com/menu-2 PDF). Prices in GBP.
// diet: v = vegetarian, vg = vegan, gf = gluten-free, df = dairy-free
// options: items with more than one price/choice; each option is ordered separately.

window.MENU = [
  {
    id: "platters", title: "Platters",
    items: [
      { name: "Antipasti Meat & Cheese Board", price: 16.50, desc: "selection of Italian meat & cheese, with vegetable crudités, olives, toasted bread, extra virgin olive, aged balsamic vinegar" },
      { name: "Antipasti Veggie Board", price: 14.50, diet: ["vg"], desc: "grilled artichokes, aubergines, red peppers caper berries, whole balsamic onions, olives & toasted bread, extra virgin olive, aged balsamic vinegar" }
    ]
  },
  {
    id: "starters", title: "Starters",
    items: [
      { name: "Zuppa", price: 7.70, diet: ["vg"], desc: "fresh vegetable soup & house bread" },
      { name: "Margherita's Mixed Olives", price: 6.40, diet: ["vg"] },
      { name: "Tomato Salad", price: 6.40, diet: ["vg"], desc: "with red onion & olive oil" },
      { name: "Rocket Salad", price: 5.70, diet: ["v"], desc: "with parmesan & olive oil" },
      { name: "Caprese Salad", price: 6.70, diet: ["v"], desc: "tomato, basil & Bufala mozzarella" },
      { name: "Traditional Bruschetta", price: 6.40, diet: ["vg"], desc: "toasted house bread topped with tomato, garlic, onion & basil" },
      { name: "Bruschetta Bello", price: 6.00, diet: ["vg"], desc: "mushrooms, garlic, white wine & herbs" },
      { name: "Bruschetta Tricolor", price: 7.40, diet: ["vg"], desc: "fresh tomato & garlic, olive tapenade with avocado, a drizzle of fresh chilli & extra virgin olive oil" },
      { name: "Melone", price: 7.70, diet: ["vg"], desc: "seasonal melon with strawberries" },
      { name: "Parma Melone", price: 7.70, desc: "seasonal melon with Parma ham" },
      { name: "Tricolor Salad", price: 7.70, diet: ["v"], desc: "avocado, tomato, mozzarella & basil" },
      { name: "Deep Fried Calamari", price: 8.40, desc: "with garlic mayonnaise" },
      { name: "Deep Fried Zucchini", price: 8.40, diet: ["vg", "gf"], desc: "deep fried courgette sticks with vegan garlic mayonnaise" },
      { name: "Caponata", price: 7.70, diet: ["vg"], desc: "Sicilian dish of cubed aubergines, courgettes, peppers, tomatoes, sultanas, pine nuts in a sweet and sour sauce, served with toasted house bread" },
      { name: "Gamberoni Sicilia", price: 7.70, desc: "grilled king prawns, garlic & white wine sauce" },
      { name: "Funghi Crocante", price: 7.70, desc: "flat mushrooms stuffed with mozzarella, gorgonzola and crispy pancetta, on a bed of rocket with balsamic & olive oil dressing" },
      { name: "Mussels in Garlic & White Wine", price: 9.40 },
      { name: "Asparagi & Pancetta", price: 7.70, desc: "grilled asparagus, served with crispy pancetta, rocket & shavings of parmesan cheese, drizzled in an 'extra virgin' oil dressing" }
    ]
  },
  {
    id: "fresh-pasta", title: "Fresh Pasta of the Day",
    items: [
      { name: "Tortelloni Black Truffle Burrata", price: 15.90, diet: ["v"], desc: "with white wine garlic & fresh herbs" },
      { name: "Tortelloni Loch Fyne Salmon", price: 15.90, desc: "with lemon butter sauce" },
      { name: "Tortelloni Pumpkin & Sage", price: 14.90, diet: ["vg"], desc: "with sage butter" },
      { name: "Gnocchi Napoli", price: 14.50, diet: ["vg", "gf"], desc: "fresh potato gnocchi filled with tomato and baked in a tomato Napoli sauce" },
      { name: "Spinach & Ricotta Cannelloni", price: 13.90, diet: ["v"], desc: "fresh pasta tubes, filled with ricotta & spinach, baked in the oven with house Napoli sauce, crusted cheese top" },
      { name: "Beetroot & Goat Cheese Ravioli", price: 12.50, diet: ["v"], desc: "beetroot & goat cheese ravioli with walnut pesto" },
      { name: "Pea & Shallot Ravioli", price: 13.90, diet: ["vg"], desc: "with our house Napoli tomato sauce, fresh mint and a drizzle of chilli sauce" },
      { name: "House Lasagne", price: 14.50, desc: "made with ground beef & béchamel sauce" },
      { name: "House Aubergine Parmigiana", price: 12.50, diet: ["v", "gf"], desc: "vegetarian gluten-free lasagne alternative" }
    ]
  },
  {
    id: "spaghetti", title: "Spaghetti",
    items: [
      { name: "Bolognese", price: 14.50, desc: "rich marinated beef & a tomato ragu" },
      { name: "Vegan Bolognese", price: 14.50, diet: ["vg"], desc: "lentils and house recipe napoli tomato sauce" },
      { name: "Carbonara", price: 14.90, desc: "parmesan creamy sauce & pancetta" },
      { name: "Chilli & Garlic", price: 12.50, diet: ["vg"], desc: "a simple classic, with full flavour" },
      { name: "Pescatore", price: 17.90, desc: "mixed seafood in a white wine sauce" },
      { name: "Traditional Chef's Meatballs", price: 15.90, desc: "in house Napoli sauce" },
      { name: "Spaghetti Vongole", price: 16.90, desc: "clams, white wine, garlic, cherry tomatoes, parsley and lemon" }
    ]
  },
  {
    id: "penne", title: "Penne",
    items: [
      { name: "Salsiccia (Penne)", price: 15.90, desc: "picante vegan Italian sausage and rich tomato sauce" },
      { name: "Arabiata", price: 14.50, diet: ["vg"], desc: "garlic, chilli, cherry tomatoes, basil & tomato sauce" },
      { name: "Gamberoni", price: 16.90, desc: "king prawns, garlic, white wine, cream, spinach & tomato" },
      { name: "Puttanesca", price: 14.50, desc: "tomato sauce, cherry tomato, anchovy, capers, jalapeño pepper & herbs" },
      { name: "Salmone", price: 16.50, desc: "salmon, asparagus & cherry tomato in creamy tomato sauce" },
      { name: "Trevisane", price: 15.90, desc: "roasted chicken, pancetta bacon, mixed mushrooms in a creamy sauce with melted mozzarella cheese" },
      { name: "Rigatoni Capricciosi", price: 15.50, diet: ["v"], desc: "tube pasta, asparagus, mushrooms, spinach in gorgonzola sauce" }
    ]
  },
  {
    id: "tagliatelle", title: "Tagliatelle",
    items: [
      { name: "Alfredo", price: 14.90, desc: "with chicken breast, asparagus, porcini mushrooms in a cream and brandy sauce" },
      { name: "Zucchini", price: 14.50, diet: ["vg"], desc: "courgettes, garlic and fresh parsley, with a white wine and herb sauce" },
      { name: "Gamberi et Pollo", price: 15.90, desc: "king prawns and chicken breast in a white wine and tomato sauce, lightly seasoned with chili" },
      { name: "Gamberi Linguine", price: 15.90, desc: "large chargrilled king prawns, on a bed of linguine pasta, courgette, asparagus, cherry tomatoes, light garlic and white wine sauce" }
    ]
  },
  {
    id: "risotto", title: "Risotto",
    items: [
      { name: "Alexia", price: 15.40, diet: ["v"], desc: "goat's cheese, mushrooms, garlic & spinach" },
      { name: "Steffi", price: 15.40, diet: ["vg"], desc: "roasted Mediterranean vegetables, mixed herbs, tomato sauce & garlic" },
      { name: "Zafferano", price: 15.40, desc: "saffron, mushrooms, white wine, cream, parmesan & fresh herbs" },
      { name: "VeZafferano", price: 15.40, diet: ["vg"], desc: "saffron, mushrooms, stock, white wine & fresh herbs" },
      { name: "Marinara", price: 16.40, desc: "seafood risotto with clams, mussels, king prawns & calamari, in a tomato & white wine sauce, dressed with fresh herbs" },
      { name: "Swap to Gluten-free Pasta", price: 1.70, diet: ["gf"], swap: true, desc: "add to any pasta dish, and say which one in your notes" }
    ]
  },
  {
    id: "meat-free-pizza", title: "Meat Free Pizza",
    items: [
      { name: "Margherita", price: 11.90, diet: ["v"], desc: "tomato sauce, mozzarella & fresh basil" },
      { name: "Margherita di Bufala", price: 12.90, diet: ["v"], desc: "tomato sauce, bufala mozzarella & fresh basil" },
      { name: "Funghi e Spinaci", price: 14.90, diet: ["v"], desc: "mushroom, spinach, tomato sauce & mozzarella" },
      { name: "Giardiniera", price: 13.20, diet: ["v"], desc: "roasted Mediterranean vegetables, marinated artichoke & mozzarella" },
      { name: "Napoli", price: 14.50, diet: ["v"], desc: "tomato sauce, capers, olives & mozzarella" },
      { name: "Pizza Quattro Formaggi", price: 14.90, diet: ["v"], desc: "gorgonzola, mozzarella, parmesan & bufala mozzarella" },
      { name: "Pizza Caprese", price: 14.50, diet: ["v"], desc: "traditional tomato base, topped with fresh tomato, bufala mozzarella, basil leaves, drizzle of garlic and oregano" },
      { name: "Caprino", price: 15.90, diet: ["v"], desc: "goat's cheese, spinach, cherry tomatoes & caramelised onions" }
    ]
  },
  {
    id: "vegan-pizza", title: "Vegan Pizza",
    items: [
      { name: "VeFunky", price: 13.50, diet: ["vg"], desc: "white base, mushrooms, pumpkin seeds, chilli flakes, soy truffle glaze" },
      { name: "VeScotland", price: 14.90, diet: ["vg"], desc: "tomato base, vegan haggis bites, vegan mozzarella, fresh chilli, jalapeños" },
      { name: "VeMargherita", price: 13.50, diet: ["vg"], desc: "traditional margherita with oregano & vegan mozzarella" },
      { name: "VeChic", price: 15.90, diet: ["vg"], desc: "dry roasted fajita veggies, chickpeas, garlic humus, topped with rocket, golden raisins and pine nuts" },
      { name: "VeGiardiniera", price: 13.20, diet: ["vg"], desc: "roasted Mediterranean vegetables, marinated artichoke & vegan mozzarella" }
    ]
  },
  {
    id: "meat-pizza", title: "Meat Pizza",
    items: [
      { name: "Bello", price: 15.90, desc: "artichoke, pepperoni, anchovy, chilli, jalapeños, mushrooms, garlic & mozzarella" },
      { name: "Milano", price: 14.90, desc: "no tomato base, fresh cherry tomato, fresh garlic, ham, fresh basil & mozzarella" },
      { name: "Calzone", price: 16.50, desc: "folded pizza dough, baked with your choice of ingredients waiting inside",
        options: [
          { label: "Bolognese", price: 16.50 },
          { label: "Mista", price: 16.50 },
          { label: "Giardiniera", price: 16.50 },
          { label: "Italian meats", price: 16.50 }
        ] },
      { name: "Capricciosa", price: 15.90, desc: "ham, mushrooms, artichokes & olives" },
      { name: "Frutti-di-Mare", price: 16.90, desc: "mixed seafood" },
      { name: "Italia", price: 15.90, desc: "pepperoni, peppers, chilli, mozzarella & sun-dried tomatoes" },
      { name: "Pepperoni", price: 14.90, desc: "spicy Italian sausage, tomato sauce, fresh chillies & mozzarella" },
      { name: "Scotland", price: 14.90, desc: "margherita with haggis topping (or try half and half with another topping)" },
      { name: "Pizza Parma", price: 15.90, desc: "parma ham, tomato sauce, mozzarella & rocket" },
      { name: "Quattro Stagioni", price: 15.90, desc: "mushrooms, olives, pepperoni, ham, tomato sauce & mozzarella" },
      { name: "Mista", price: 16.50, desc: "pepperoni, ham, chicken, bolognese, tomato sauce & mozzarella" },
      { name: "Charcuterie", price: 16.90, desc: "topped with Italian mixed meats, Salami, Mortadella, Prosciutto & Ham, rocket & parmesan drizzle" },
      { name: "Salsiccia (Pizza)", price: 16.90, desc: "topped with local organic sausage made to traditional Italian recipe, red onions, drizzle of hot chilli 'Hilltop' honey" },
      { name: "Swap to Gluten-free Pizza Base", price: 1.70, diet: ["gf"], swap: true, desc: "add to any pizza, and say which one in your notes" },
      { name: "Swap to Vegan Cheese", price: 1.70, diet: ["vg"], swap: true, desc: "add to any pizza, and say which one in your notes" }
    ]
  },
  {
    id: "salads-grills", title: "Salads & Grills", note: "All served with toasted house bread and olive oil",
    items: [
      { name: "Chicken Caesar Salad", price: 14.90, desc: "chargrilled chicken, romani leaves, anchovy, house dressing and croutons" },
      { name: "Super Food Salad", price: 13.90, diet: ["vg"], desc: "romani leaves, avocado, mixed whole lentils, quinoa, chickpeas, pumpkin seeds, roasted red peppers, chilli & fresh lime juice" },
      { name: "The Big Greek", price: 13.90, diet: ["vg"], desc: "chunks of vegan mozzarella, vine tomatoes, cucumber, red onion, red peppers, Kalamata olives, olive oil & oregano" }
    ]
  },
  {
    id: "breads-sides", title: "Breads & Sides",
    items: [
      { name: "Olives with Grissini", price: 7.40, diet: ["vg"], desc: "grissini, flat breads, served with extra virgin olive oil & balsamic vinegar" },
      { name: "Focaccia Aglio", price: 7.40, diet: ["vg"], desc: "garlic and oil" },
      { name: "Focaccia Rosmarino", price: 7.40, diet: ["vg"], desc: "rosemary" },
      { name: "Focaccia Aglio Olio e Pepperoncino", price: 7.40, diet: ["vg"], desc: "garlic, olive oil & chilli pepper" },
      { name: "Focaccia Aglio e Mozzarella", price: 8.70, desc: "garlic & mozzarella" },
      { name: "VeFocaccia Aglio e Mozzarella", price: 8.70, diet: ["vg"], desc: "garlic & vegan cheese" },
      { name: "Skin-on-Fries", price: 4.20, diet: ["vg"], desc: "tossed in garlic & oregano",
        options: [ { label: "Small", price: 4.20 }, { label: "Large", price: 5.90 } ] },
      { name: "Sweet Potato Fries", price: 4.20, diet: ["vg"],
        options: [ { label: "Small", price: 4.20 }, { label: "Large", price: 5.90 } ] }
    ]
  }
];
