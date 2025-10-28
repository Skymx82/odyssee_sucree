export interface Creation {
  id: string;
  name: string;
  image: string;
  category: 'wedding' | 'birthday' | 'entremets' | 'tarte' | 'mignardises' | 'other';
}

export const creations: Creation[] = [
  // Wedding Cakes
  { id: 'wedding-1', name: 'Wedding Cake', image: '/photos site/wedding cake.jpeg', category: 'wedding' },
  { id: 'wedding-2', name: 'Wedding Cake Élégant', image: '/photos site/wedding cake (2).jpeg', category: 'wedding' },
  
  // Layer Cakes
  { id: 'layer-1', name: 'Layer Cake', image: '/photos site/layer cake.jpeg', category: 'birthday' },
  { id: 'layer-2', name: 'Layer Cake Gourmand', image: '/photos site/layer cake (2).jpeg', category: 'birthday' },
  { id: 'layer-3', name: 'Layer Cake 18 ans', image: '/photos site/layer cake 18.jpeg', category: 'birthday' },
  { id: 'layer-4', name: 'Layer Cake Avatar', image: '/photos site/layer cake Avatar.jpeg', category: 'birthday' },
  { id: 'layer-5', name: 'Layer Cake Halloween', image: '/photos site/layer cake Halloween.jpeg', category: 'birthday' },
  { id: 'layer-6', name: 'Layer Cake Stitch', image: '/photos site/layer cake Stitch.jpeg', category: 'birthday' },
  { id: 'layer-7', name: 'Layer Cake Basket', image: '/photos site/layer cake basket.jpeg', category: 'birthday' },
  
  // Number Cakes
  { id: 'number-1', name: 'Number Cake 17', image: '/photos site/number cake 17.jpeg', category: 'birthday' },
  { id: 'number-2', name: 'Number Cake 18', image: '/photos site/number cake 18.jpeg', category: 'birthday' },
  { id: 'number-3', name: 'Number Cake 20', image: '/photos site/number cake 20.jpeg', category: 'birthday' },
  { id: 'number-4', name: 'Number Cake 30', image: '/photos site/number cake 30.jpeg', category: 'birthday' },
  
  // Letter Cake
  { id: 'letter-1', name: 'Letter Cake aux Fruits Rouges', image: '/photos site/letter cake aux fruits rouges.jpeg', category: 'birthday' },
  
  // Piñata Cake
  { id: 'pinata-1', name: 'Piñata Cake', image: '/photos site/piñata cake.jpeg', category: 'birthday' },
  
  // Entremets
  { id: 'entremets-1', name: 'Entremets Citron Fraise', image: '/photos site/entremets citron fraise.jpeg', category: 'entremets' },
  { id: 'entremets-2', name: 'Entremets Citron Menthe', image: '/photos site/entremets citron menthe.jpeg', category: 'entremets' },
  { id: 'entremets-3', name: 'Entremets Passion Framboise', image: '/photos site/entremets passion framboise.jpeg', category: 'entremets' },
  { id: 'entremets-4', name: 'Entremets Passion Framboise 8 pers', image: '/photos site/entremets passion framboise 8 pers.jpeg', category: 'entremets' },
  { id: 'entremets-5', name: 'Entremets Tiramisu', image: '/photos site/entremets tiramisu.jpeg', category: 'entremets' },
  { id: 'entremets-6', name: 'Entremets Vanille Spéculoos', image: '/photos site/entremets vanille spéculoos.jpeg', category: 'entremets' },
  { id: 'fraisier-1', name: 'Fraisier', image: '/photos site/fraisier.jpeg', category: 'entremets' },
  { id: 'fraisier-2', name: 'Fraisier XXL', image: '/photos site/fraisier XXL.jpeg', category: 'entremets' },
  { id: 'fraisier-3', name: 'Personnalisation Fraisier', image: '/photos site/personnalisation fraisier.jpeg', category: 'entremets' },
  { id: 'framboisier-1', name: 'Framboisier', image: '/photos site/framboisier.jpeg', category: 'entremets' },
  { id: 'foret-1', name: 'Forêt Noire', image: '/photos site/forêt noire.jpeg', category: 'entremets' },
  
  // Bûches
  { id: 'buche-1', name: 'Bûche Citron et Praliné', image: '/photos site/bûche citron et praliné.jpeg', category: 'other' },
  { id: 'buche-2', name: 'Bûche Vanille Pommes Caramélisées', image: '/photos site/bûche vanille pommes caramélisées.jpeg', category: 'other' },
  
  // Tartes
  { id: 'tarte-1', name: 'Tarte Abricot Nectarine', image: '/photos site/tarte abricot nectarine.jpeg', category: 'tarte' },
  { id: 'tarte-2', name: 'Tarte Café', image: '/photos site/tarte café.jpeg', category: 'tarte' },
  { id: 'tarte-3', name: 'Tarte Chocolat Praliné', image: '/photos site/tarte chocolat praliné.jpeg', category: 'tarte' },
  { id: 'tarte-4', name: 'Tarte Citron Meringuée', image: '/photos site/tarte citron meringuée.jpeg', category: 'tarte' },
  { id: 'tarte-5', name: 'Tarte Fraises', image: '/photos site/tarte fraises.jpeg', category: 'tarte' },
  { id: 'tarte-6', name: 'Tarte Fraises Framboises', image: '/photos site/tarte fraises framboises.jpeg', category: 'tarte' },
  { id: 'tarte-7', name: 'Tarte Framboises', image: '/photos site/tarte framboises.jpeg', category: 'tarte' },
  { id: 'tartelette-1', name: 'Tartelette Figues', image: '/photos site/tartelette figues.jpeg', category: 'tarte' },
  { id: 'tartelette-2', name: 'Tartelette Framboises Hibiscus', image: '/photos site/tartelette framboises hibiscus.jpeg', category: 'tarte' },
  
  // Pâtisseries classiques
  { id: 'saint-1', name: 'Saint Honoré', image: '/photos site/saint honoré.jpeg', category: 'other' },
  { id: 'paris-1', name: 'Paris Brest', image: '/photos site/paris brest.jpeg', category: 'other' },
  { id: 'millefeuilles-1', name: 'Millefeuilles', image: '/photos site/millefeuilles.jpeg', category: 'other' },
  { id: 'tropezienne-1', name: 'Tropézienne', image: '/photos site/tropézienne.jpeg', category: 'other' },
  { id: 'tropezienne-2', name: 'Tropézienne Fraises', image: '/photos site/tropézienne fraises.jpeg', category: 'other' },
  { id: 'tropezienne-3', name: 'Tropézienne Framboises', image: '/photos site/tropézienne framboises.jpeg', category: 'other' },
  
  // Pavlovas
  { id: 'pavlova-1', name: 'Pavlova Framboises', image: '/photos site/pavlova framboises.jpeg', category: 'other' },
  { id: 'pavlova-2', name: 'Pavlova Fruits Rouges', image: '/photos site/pavlova fruits rouges.jpeg', category: 'other' },
  
  // Éclairs
  { id: 'eclair-1', name: 'Éclair Nutella', image: '/photos site/éclair Nutella.jpeg', category: 'other' },
  { id: 'eclair-2', name: 'Éclair Café', image: '/photos site/éclair café.jpeg', category: 'other' },
  { id: 'eclair-3', name: 'Éclair Chocolat', image: '/photos site/éclair chocolat.jpeg', category: 'other' },
  
  // Choux
  { id: 'choux-1', name: 'Choux Cake', image: '/photos site/choux cake.jpeg', category: 'other' },
  
  // Mignardises
  { id: 'mignardises-1', name: 'Mini Choux Café', image: '/photos site/mignardises mini choux café.jpeg', category: 'mignardises' },
  { id: 'mignardises-2', name: 'Mini Choux Chocolat', image: '/photos site/mignardises mini choux chocolat.jpeg', category: 'mignardises' },
  { id: 'mignardises-3', name: 'Mini Choux Vanille', image: '/photos site/mignardises mini choux vanille.jpeg', category: 'mignardises' },
  { id: 'mignardises-4', name: 'Mini Pavlova Framboise', image: '/photos site/mignardises mini pavlova framboise.jpeg', category: 'mignardises' },
  { id: 'mignardises-5', name: 'Mini Tropéziennes', image: '/photos site/mignardises mini tropéziennes.jpeg', category: 'mignardises' },
  { id: 'mignardises-6', name: 'Mini Verrines Banoffee', image: '/photos site/mignardises mini verrines banoffee.jpeg', category: 'mignardises' },
  { id: 'mignardises-7', name: 'Mini Verrines Framboisiers', image: '/photos site/mignardises mini verrines framboisiers.jpeg', category: 'mignardises' },
  { id: 'mignardises-8', name: 'Mini Verrines Tiramisu', image: '/photos site/mignardises mini verrines tiramisu.jpeg', category: 'mignardises' },
  
  // Autres
  { id: 'canneles-1', name: 'Cannelés', image: '/photos site/cannelés.jpeg', category: 'other' },
  { id: 'spritz-1', name: 'Spritz', image: '/photos site/spritz.jpeg', category: 'other' },
  { id: 'chocolats-1', name: '3 Chocolats', image: '/photos site/3 chocolats.jpeg', category: 'other' },
  { id: 'sables-1', name: 'Sablés Personnalisés Mariage', image: '/photos site/sablés personnalisés mariage.jpeg', category: 'wedding' },
];

export const categories = [
  { id: 'all', label: 'Toutes les créations' },
  { id: 'wedding', label: 'Mariages' },
  { id: 'birthday', label: 'Anniversaires' },
  { id: 'entremets', label: 'Entremets' },
  { id: 'tarte', label: 'Tartes' },
  { id: 'mignardises', label: 'Mignardises' },
  { id: 'other', label: 'Autres créations' },
] as const;
