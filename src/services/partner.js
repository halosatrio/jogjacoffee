export const partner = [
  {
    _id: "partner-1",
    name: "Riphy Coffee Roastery",
    imageUrl: "/images/logo-riphy.jpg",
  },
  {
    _id: "partner-2",
    name: "Lestari Coffee Roasters",
    imageUrl: "/images/logo-lestari.jpg",
  },
  {
    _id: "partner-3",
    name: "Blanco Coffee Indonesia",
    imageUrl: "/images/logo-blanco.jpg",
  },
  {
    _id: "partner-4",
    name: "Space Coffee Roastery",
    imageUrl: "/images/logo-space.jpg",
  },
  {
    _id: "partner-5",
    name: "Djaya Coffee Roasters",
    imageUrl: "/images/logo-djaya.jpg",
  },
  {
    _id: "partner-6",
    name: "Maige Coffee Roastery",
    imageUrl: "/images/logo-maige.jpg",
  },
  {
    _id: "partner-7",
    name: "Epic Coffee",
    imageUrl: "/images/logo-epic.jpg",
  },
  {
    _id: "partner-8",
    name: "IMBA Coffee",
    imageUrl: "/images/logo-imba.jpg",
  },
];

export function getPartner() {
  return partner.filter((p) => p);
}
