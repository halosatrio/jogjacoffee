const coffees = [
  {
    _id: "blanco1",
    name: "Arundaya Double Wash - 200gr",
    company: "Blanco Coffee Roaster",
    price: "Rp110.000",
    description: `Origin: Aceh Gayo
	Farm: Pantan Musara (Full Organic Farm)
	Altitude: 1.650 masl
	Cultivar: Single Varietas (Abyssinia)
	Processing: Double Washed
	Roasting: Filter Roast
	Notes: Vanilla Aroma, Green Apple, Rounded Body, Caramel Finish`,
    isRecomended: false,
    isTerbaru: false,
    isPilihan: false,
    imageUrl: "/img/blanco1.jpg",
  },
  {
    _id: "blanco3",
    name: "Arundaya Giling Basah - 200gr",
    company: "Blanco Coffee Roaster",
    price: "Rp90.000",
    description: `Origin: Aceh Gayo
	Farm: Pantan Musara (Full Organic Farm)
	Altitude: 1.650 masl
	Cultivar: Abyssinia, Catura, Bourbon 
	Processing: Giling Basah (Wet Hulled)
	Roasting: Filter Roast
	Notes: Mapple Syrup Aroma, Passion Fruit, Smooth Body, Black Tea Finish`,
    isRecomended: false,
    isTerbaru: false,
    isPilihan: false,
    imageUrl: "/img/blanco3.jpg",
  },
  {
    _id: "blanco8",
    name: "Ijen Madu Merah - 200gr",
    company: "Blanco Coffee Roaster",
    price: "Rp95.000",
    description: `Origin: Banyuwangi, Mt. Ijen, East Java
	Farm: Ijen Lestari
	Altitude: 1100 - 1200 masl
	Cultivar: Cobra, USDA 762, Lini S
	Processing: Red Honey
	Roasting: Filter Roast
	Notes: Oolong Tea Aroma, Palm Sugar, syrupy body with hints of chocolate.`,
    isRecomended: false,
    isTerbaru: false,
    isPilihan: false,
    imageUrl: "/img/blanco8.jpg",
  },
  {
    _id: "riphy3",
    name: "Robusta Jepalo - Pati Jawa tengah - 1kg",
    company: "Riphy Coffee Roastery",
    price: "Rp150.000",
    description: `Altitude: 700 - 900 Mdpl
                  Varietas: Tugusari - Mix
                  process: Natural
                  Level Roast: Medium - Dark
                  Notes: Sweet dark chocolate`,
    isRecomended: false,
    isTerbaru: false,
    isPilihan: false,
  },
];

export function getCoffees() {
  return coffees;
}

export function getCoffee(id) {
  return coffees.find((c) => c._id === id);
}
