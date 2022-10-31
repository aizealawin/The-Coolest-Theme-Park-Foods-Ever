const db = require('../db')
const Food = require('../models/food')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const foods = [
    {
      name: 'Cotton Candy',
      description: 'A cloud of sugary goodness. Some would say delicious.',
      image: 'https://m.media-amazon.com/images/I/31wN2GySfzL._AC_SY350_.jpg',
      retail_price: '$7.00',
      vendor_price: '$0.50'
    },
    {
      name: 'Candy Apple',
      description: 'An apple infused with diabetes.',
      image: 'https://i.imgur.com/wUTBc2lb.jpg',
      retail_price: '$10.00',
      vendor_price: '$1.50'
    },
    {
      name: 'Funnel Cake',
      description: 'Swirly fried dough. Why would I eat this? Cholesterol.',
      image: 'https://i.imgur.com/UfKy2zfb.jpg',
      retail_price: '$11.00',
      vendor_price: '$2.50'
    },
    {
      name: 'Turkey Leg',
      description: 'Giant turkey leg to share for two? Them bois big.',
      image: 'https://i.imgur.com/vkk3KV1b.jpg',
      retail_price: '$15.00',
      vendor_price: '$1.00'
    },
    {
      name: 'Fried Oreos',
      description:
        'Definitely the best thing on this list. But will kill you fastest.',
      image: 'https://i.imgur.com/P84SfBKb.jpg',
      retail_price: '$5.00',
      vendor_price: '$0.05'
    },
    {
      name: 'Strawberry Lemonade',
      description:
        "Sugary and sweet. Has salt in it though so it doesn't quench thirst.",
      image: 'https://i.imgur.com/9Lz2wNCb.jpg',
      retail_price: '$4.50',
      vendor_price: '$0.30'
    },
    {
      name: 'Just Water',
      description: 'Tap water. Rebottled. You paid for this...?',
      image: 'https://i.imgur.com/dwldDKLb.jpg',
      retail_price: '$100.00',
      vendor_price: '$0.00'
    }
  ]

  await Food.insertMany(foods)
  console.log('Created some foods!')
}
const run = async () => {
  await main()
  db.close()
}

run()
