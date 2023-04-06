let xAxisData = [
  { name: "Jan", users: 1_200 },
  { name: "Feb", users: 2_600 },
  { name: "Mar", users: 900 },
  { name: "Apr", users: 1_000 },
  { name: "May", users: 2_090 },
  { name: "Jun", users: 3_200 },
  { name: "Jul", users: 1_500 },
  { name: "Aug", users: 1_500 },
  { name: "Sep", users: 2_200 },
  { name: "Oct", users: 2_135 },
  { name: "Nov", users: 800 },
  { name: "Dec", users: 1_020 },
];

let newMembers = [
  {
    id: 1,
    username: "Farzane_2630",
    job: "web Developer",
    img: "/Images/avatar.1.png",
  },
  {
    id: 2,
    username: "Hossein1988",
    job: "Android Developer",
    img: "/Images/avatar.2.png",
  },
  { id: 3, username: "s@r@", job: "SEO Eng", img: "/Images/avatar,4.png" },
  {
    id: 4,
    username: "dibaaa4321",
    job: "Back-end Developer",
    img: "/Images/avatar.5.png",
  },
];

const transactions = [
  {
    id: 1,
    customer: "Qadir Yolme",
    date: "12 Jun 2022",
    amount: 123,
    status: "Approved",
    img: "/Images/avatar.1.png",
  },
  {
    id: 2,
    customer: "Amin Saeedi",
    date: "23 Jul 2022",
    amount: 123,
    status: "Declined",
    img: "/Images/avatar.2.png",
  },
  {
    id: 3,
    customer: "Mohammad Qol",
    date: "28 May 2022",
    amount: 123,
    status: "Pending",
    img: "/Images/avatar.3.png",
  },
  {
    id: 4,
    customer: "Sasan Moq",
    date: "1 Feb 2022",
    amount: 123,
    status: "Approved",
    img: "/Images/avatar.5.png",
  },
];

const userRows = [
  {
    id: 1,
    username: "Farzane Kazemi",
    avatar: "/Images/avatar.5.png",
    transactions: "$123",
    email: 'farzane@gmail.com'
  },
  {
    id: 2,
    username: "ali moradi",
    avatar: "/Images/avatar.1.png",
    status: "non-active",
    transactions: "$312",
    email: 'farzane@gmail.com'
  },
  {
    id: 3,
    username: "John Muller",
    avatar: "/Images/avatar.2.png",
    status: "active",
    transactions: "$230",
    email: 'farzane@gmail.com'
  },
  {
    id: 4,
    username: "Zahra Qorbani",
    avatar: "/Images/avatar,4.png",
    status: "active",
    transactions: "$99.99",
    email: 'farzane@gmail.com'
  },
  {
    id: 5,
    username: "Hosein kazemi",
    avatar: "/Images/avatar.png",
    status: "non-active",
    transactions: "$110",
    email: 'farzane@gmail.com'
  },
];

const products = [
    {
      id: 1,
      title: "Acer",
      avatar: "/Images/lp.5.jfif",
      price: "$123",
      status: 'active',
      stock: 1_000
    },
    {
      id: 2,
      title: "Lenovo",
      avatar: "/Images/lp.4.jfif",
      status: "non-active",
      price: "$312",
      status: 'non-active',
      stock: 0
    },
    {
      id: 3,
      title: "HP",
      avatar: "/Images/lp.3.jfif",
      price: "$230",
      status: 'non-active',
      stock: 0
    },
    {
      id: 4,
      title: "Dell",
      avatar: "/Images/lp.2.jfif",
      price: "$99.99",
      status: 'active',
      stock: 900
    },
    {
      id: 5,
      title: "Samsung",
      avatar: "/Images/lp.1.jfif",
      price: "$110",
      status: 'active',
      stock: 10
    },
  ];

  const productsData =[
    {'name': 'Feb', 'sales': 3_000},
    {'name': 'Jun', 'sales': 4_000},
    {'name': 'Sep', 'sales': 5_000},
  ]

export { xAxisData, newMembers, transactions, userRows, products, productsData };
