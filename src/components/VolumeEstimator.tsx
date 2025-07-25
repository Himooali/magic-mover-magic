import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { Search, Bot, Minus, Plus, RotateCcw, FileText, Phone, Car } from 'lucide-react';

interface FurnitureItem {
  id: string;
  name: string;
  icon: string;
  volume: number;
  quantity: number;
  category: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: 'salon', name: 'Salon', icon: '🛋️' },
  { id: 'cuisine', name: 'Cuisine', icon: '🍽️' },
  { id: 'chambre', name: 'Chambre', icon: '🛏️' },
  { id: 'salle-de-bain', name: 'Salle de bain', icon: '🚿' },
  { id: 'bureau', name: 'Bureau', icon: '💼' },
  { id: 'jardin', name: 'Jardin & Balcon', icon: '🌿' },
  { id: 'divers', name: 'Divers', icon: '📦' },
];

const furnitureDatabase: FurnitureItem[] = [
  // Salon
  { id: '1', name: "Canapé d'angle", icon: '🛋️', volume: 2.5, quantity: 0, category: 'salon' },
  { id: '2', name: 'Canapé 3 places', icon: '🛋️', volume: 2, quantity: 0, category: 'salon' },
  { id: '3', name: 'Canapé 2 places', icon: '🛋️', volume: 1.5, quantity: 0, category: 'salon' },
  { id: '4', name: 'Fauteuil', icon: '🪑', volume: 0.8, quantity: 0, category: 'salon' },
  { id: '5', name: 'Pouf', icon: '🪑', volume: 0.3, quantity: 0, category: 'salon' },
  { id: '6', name: 'Méridienne', icon: '🛋️', volume: 1.8, quantity: 0, category: 'salon' },
  { id: '7', name: 'Banquette', icon: '🛋️', volume: 1.2, quantity: 0, category: 'salon' },
  { id: '8', name: 'Table basse', icon: '🏓', volume: 0.5, quantity: 0, category: 'salon' },
  { id: '9', name: 'Bibliothèque grande', icon: '📚', volume: 1.5, quantity: 0, category: 'salon' },
  { id: '10', name: 'Bibliothèque moyenne', icon: '📚', volume: 1, quantity: 0, category: 'salon' },
  { id: '11', name: 'Meuble TV', icon: '📺', volume: 0.8, quantity: 0, category: 'salon' },
  { id: '12', name: 'Piano droit', icon: '🎹', volume: 2, quantity: 0, category: 'salon' },
  
  // Cuisine
  { id: '13', name: 'Réfrigérateur', icon: '❄️', volume: 1.2, quantity: 0, category: 'cuisine' },
  { id: '14', name: 'Cuisinière', icon: '🔥', volume: 1, quantity: 0, category: 'cuisine' },
  { id: '15', name: 'Lave-vaisselle', icon: '🧽', volume: 0.8, quantity: 0, category: 'cuisine' },
  { id: '16', name: 'Table de cuisine', icon: '🍽️', volume: 0.6, quantity: 0, category: 'cuisine' },
  { id: '17', name: 'Chaise de cuisine', icon: '🪑', volume: 0.2, quantity: 0, category: 'cuisine' },
  
  // Chambre
  { id: '18', name: 'Lit double', icon: '🛏️', volume: 2, quantity: 0, category: 'chambre' },
  { id: '19', name: 'Lit simple', icon: '🛏️', volume: 1.5, quantity: 0, category: 'chambre' },
  { id: '20', name: 'Armoire 3 portes', icon: '🚪', volume: 2.5, quantity: 0, category: 'chambre' },
  { id: '21', name: 'Commode', icon: '📦', volume: 0.8, quantity: 0, category: 'chambre' },
  { id: '22', name: 'Table de chevet', icon: '🏠', volume: 0.3, quantity: 0, category: 'chambre' },
];

const getVehicleRecommendation = (volume: number) => {
  if (volume <= 3) return { type: 'Voiture + remorque (3m³)', icon: '🚗' };
  if (volume <= 8) return { type: 'Camionnette (8m³)', icon: '🚐' };
  if (volume <= 15) return { type: 'Petit camion (15m³)', icon: '🚚' };
  if (volume <= 30) return { type: 'Camion moyen (30m³)', icon: '🚛' };
  return { type: 'Grand camion (40m³+)', icon: '🚛' };
};

export const VolumeEstimator = () => {
  const [selectedCategory, setSelectedCategory] = useState('salon');
  const [furniture, setFurniture] = useState<FurnitureItem[]>(furnitureDatabase);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const totalVolume = furniture.reduce((sum, item) => sum + (item.volume * item.quantity), 0);
  const vehicle = getVehicleRecommendation(totalVolume);

  const filteredFurniture = furniture.filter(item => 
    item.category === selectedCategory && 
    (searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const updateQuantity = (id: string, change: number) => {
    setFurniture(prev => prev.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(0, item.quantity + change) }
        : item
    ));
  };

  const resetAll = () => {
    setFurniture(prev => prev.map(item => ({ ...item, quantity: 0 })));
    toast({
      title: "Réinitialisation",
      description: "Toutes les quantités ont été remises à zéro",
    });
  };

  const handleChatGPTSearch = () => {
    toast({
      title: "Recherche ChatGPT",
      description: "Fonctionnalité à venir...",
    });
  };

  const handleGoogleSearch = () => {
    toast({
      title: "Recherche Google",
      description: "Fonctionnalité à venir...",
    });
  };

  const requestQuote = () => {
    toast({
      title: "Demande de devis",
      description: "Redirection vers le formulaire de contact...",
    });
  };

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-sky-blue text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">ESTIMATEUR DE VOLUME</h1>
          <div className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" />
            <span className="text-lg font-semibold">079 200 43 43</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Search and Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search Section */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Search className="h-5 w-5" />
                Rechercher un objet
              </h2>
              
              <div className="space-y-4">
                <Input
                  placeholder="Rechercher un meuble..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
                
                <div className="flex gap-2 flex-wrap">
                  <Button 
                    variant="outline" 
                    onClick={handleChatGPTSearch}
                    className="flex items-center gap-2"
                  >
                    <Bot className="h-4 w-4" />
                    🤖 Rechercher avec ChatGPT
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleGoogleSearch}
                    className="flex items-center gap-2"
                  >
                    <Search className="h-4 w-4" />
                    🔍 Rechercher avec Google
                  </Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <Button variant="ghost" size="sm">
                    + Ajouter un objet personnalisé
                  </Button>
                  <Button variant="ghost" size="sm">
                    Afficher
                  </Button>
                </div>
              </div>
            </Card>

            {/* Categories */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Catégories</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex flex-col items-center gap-2 h-auto py-4"
                  >
                    <span className="text-2xl">{category.icon}</span>
                    <span className="text-sm">{category.name}</span>
                  </Button>
                ))}
              </div>
            </Card>

            {/* Furniture Items */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 capitalize">{categories.find(c => c.id === selectedCategory)?.name}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredFurniture.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg bg-card">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-medium-gray">{item.volume} m³</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity === 0}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Estimation */}
          <div className="space-y-6">
            <Card className="p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Estimation</h2>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-sky-blue mb-2">
                  {totalVolume.toFixed(1)} m³
                </div>
                <p className="text-medium-gray">Volume total estimé</p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Véhicule recommandé
                </h3>
                <Badge variant="secondary" className="w-full justify-center py-2">
                  <span className="mr-2">{vehicle.icon}</span>
                  {vehicle.type}
                </Badge>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-red-600">📍 Conseils :</h3>
                <ul className="text-sm space-y-2 text-medium-gray">
                  <li>• Ajoutez 10-15% pour les affaires diverses</li>
                  <li>• Prévoyez du matériel d'emballage</li>
                  <li>• Contactez-nous pour un devis précis</li>
                  <li>• Réservez à l'avance pour de meilleurs tarifs</li>
                </ul>
              </div>

              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  onClick={resetAll}
                  className="w-full"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Réinitialiser
                </Button>
                
                <Button 
                  onClick={requestQuote}
                  className="w-full bg-sky-blue hover:bg-sky-blue-dark"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  📋 Demander un devis
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  079 200 43 43
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};