import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Bot, Minus, Plus, RotateCcw, FileText, Phone, Car, Truck, X } from 'lucide-react';
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
const categories: Category[] = [{
  id: 'salon',
  name: 'Salon',
  icon: '🛋️'
}, {
  id: 'cuisine',
  name: 'Cuisine',
  icon: '🍽️'
}, {
  id: 'chambre',
  name: 'Chambre',
  icon: '🛏️'
}, {
  id: 'salle-de-bain',
  name: 'Salle de bain',
  icon: '🚿'
}, {
  id: 'bureau',
  name: 'Bureau',
  icon: '💼'
}, {
  id: 'jardin',
  name: 'Jardin & Balcon',
  icon: '🌿'
}, {
  id: 'divers',
  name: 'Divers',
  icon: '📦'
}];
const furnitureDatabase: FurnitureItem[] = [
// Salon
{
  id: '1',
  name: "Canapé d'angle",
  icon: '🛋️',
  volume: 2.5,
  quantity: 0,
  category: 'salon'
}, {
  id: '2',
  name: 'Canapé 3 places',
  icon: '🛋️',
  volume: 2,
  quantity: 0,
  category: 'salon'
}, {
  id: '3',
  name: 'Canapé 2 places',
  icon: '🛋️',
  volume: 1.5,
  quantity: 0,
  category: 'salon'
}, {
  id: '4',
  name: 'Fauteuil',
  icon: '🪑',
  volume: 0.8,
  quantity: 0,
  category: 'salon'
}, {
  id: '5',
  name: 'Pouf',
  icon: '🪑',
  volume: 0.3,
  quantity: 0,
  category: 'salon'
}, {
  id: '6',
  name: 'Méridienne',
  icon: '🛋️',
  volume: 1.8,
  quantity: 0,
  category: 'salon'
}, {
  id: '7',
  name: 'Banquette',
  icon: '🛋️',
  volume: 1.2,
  quantity: 0,
  category: 'salon'
}, {
  id: '8',
  name: 'Table basse',
  icon: '🏓',
  volume: 0.5,
  quantity: 0,
  category: 'salon'
}, {
  id: '9',
  name: 'Bibliothèque grande',
  icon: '📚',
  volume: 1.5,
  quantity: 0,
  category: 'salon'
}, {
  id: '10',
  name: 'Bibliothèque moyenne',
  icon: '📚',
  volume: 1,
  quantity: 0,
  category: 'salon'
}, {
  id: '11',
  name: 'Meuble TV',
  icon: '📺',
  volume: 0.8,
  quantity: 0,
  category: 'salon'
}, {
  id: '12',
  name: 'Piano droit',
  icon: '🎹',
  volume: 2,
  quantity: 0,
  category: 'salon'
}, {
  id: '13',
  name: 'Tapis grande taille',
  icon: '🧑‍🎨',
  volume: 0.4,
  quantity: 0,
  category: 'salon'
}, {
  id: '14',
  name: 'Lampadaire',
  icon: '💡',
  volume: 0.2,
  quantity: 0,
  category: 'salon'
}, {
  id: '15',
  name: 'Console',
  icon: '🏺',
  volume: 0.6,
  quantity: 0,
  category: 'salon'
}, {
  id: '16',
  name: 'Guéridon',
  icon: '🏓',
  volume: 0.3,
  quantity: 0,
  category: 'salon'
},

// Cuisine
{
  id: '17',
  name: 'Réfrigérateur',
  icon: '❄️',
  volume: 1.2,
  quantity: 0,
  category: 'cuisine'
}, {
  id: '18',
  name: 'Cuisinière',
  icon: '🔥',
  volume: 1,
  quantity: 0,
  category: 'cuisine'
}, {
  id: '19',
  name: 'Lave-vaisselle',
  icon: '🧽',
  volume: 0.8,
  quantity: 0,
  category: 'cuisine'
}, {
  id: '20',
  name: 'Table de cuisine',
  icon: '🍽️',
  volume: 0.6,
  quantity: 0,
  category: 'cuisine'
}, {
  id: '21',
  name: 'Chaise de cuisine',
  icon: '🪑',
  volume: 0.2,
  quantity: 0,
  category: 'cuisine'
}, {
  id: '22',
  name: 'Lave-linge',
  icon: '🧺',
  volume: 0.9,
  quantity: 0,
  category: 'cuisine'
}, {
  id: '23',
  name: 'Micro-ondes',
  icon: '📻',
  volume: 0.1,
  quantity: 0,
  category: 'cuisine'
}, {
  id: '24',
  name: 'Four',
  icon: '🔥',
  volume: 0.7,
  quantity: 0,
  category: 'cuisine'
}, {
  id: '25',
  name: 'Congélateur',
  icon: '🧊',
  volume: 1,
  quantity: 0,
  category: 'cuisine'
}, {
  id: '26',
  name: 'Meuble bas cuisine',
  icon: '🗄️',
  volume: 0.8,
  quantity: 0,
  category: 'cuisine'
}, {
  id: '27',
  name: 'Meuble haut cuisine',
  icon: '🗄️',
  volume: 0.5,
  quantity: 0,
  category: 'cuisine'
}, {
  id: '28',
  name: 'Îlot central',
  icon: '🏝️',
  volume: 1.5,
  quantity: 0,
  category: 'cuisine'
},

// Chambre
{
  id: '29',
  name: 'Lit double',
  icon: '🛏️',
  volume: 2,
  quantity: 0,
  category: 'chambre'
}, {
  id: '30',
  name: 'Lit simple',
  icon: '🛏️',
  volume: 1.5,
  quantity: 0,
  category: 'chambre'
}, {
  id: '31',
  name: 'Armoire 3 portes',
  icon: '🚪',
  volume: 2.5,
  quantity: 0,
  category: 'chambre'
}, {
  id: '32',
  name: 'Commode',
  icon: '📦',
  volume: 0.8,
  quantity: 0,
  category: 'chambre'
}, {
  id: '33',
  name: 'Table de chevet',
  icon: '🏠',
  volume: 0.3,
  quantity: 0,
  category: 'chambre'
}, {
  id: '34',
  name: 'Matelas',
  icon: '🛏️',
  volume: 0.8,
  quantity: 0,
  category: 'chambre'
}, {
  id: '35',
  name: 'Dressing',
  icon: '👔',
  volume: 3,
  quantity: 0,
  category: 'chambre'
}, {
  id: '36',
  name: 'Coiffeuse',
  icon: '💄',
  volume: 0.6,
  quantity: 0,
  category: 'chambre'
}, {
  id: '37',
  name: 'Coffre rangement',
  icon: '🧳',
  volume: 0.4,
  quantity: 0,
  category: 'chambre'
}, {
  id: '38',
  name: 'Miroir grande taille',
  icon: '🪞',
  volume: 0.2,
  quantity: 0,
  category: 'chambre'
},

// Salle de bain
{
  id: '39',
  name: 'Meuble vasque',
  icon: '🚿',
  volume: 0.7,
  quantity: 0,
  category: 'salle-de-bain'
}, {
  id: '40',
  name: 'Colonne de rangement',
  icon: '🏛️',
  volume: 0.5,
  quantity: 0,
  category: 'salle-de-bain'
}, {
  id: '41',
  name: 'Baignoire',
  icon: '🛁',
  volume: 2,
  quantity: 0,
  category: 'salle-de-bain'
}, {
  id: '42',
  name: 'Douche cabine',
  icon: '🚿',
  volume: 1.5,
  quantity: 0,
  category: 'salle-de-bain'
}, {
  id: '43',
  name: 'Lave-linge',
  icon: '🧺',
  volume: 0.9,
  quantity: 0,
  category: 'salle-de-bain'
}, {
  id: '44',
  name: 'Sèche-linge',
  icon: '🌀',
  volume: 0.9,
  quantity: 0,
  category: 'salle-de-bain'
}, {
  id: '45',
  name: 'Miroir salle de bain',
  icon: '🪞',
  volume: 0.1,
  quantity: 0,
  category: 'salle-de-bain'
},

// Bureau
{
  id: '46',
  name: 'Bureau',
  icon: '🖥️',
  volume: 0.8,
  quantity: 0,
  category: 'bureau'
}, {
  id: '47',
  name: 'Chaise de bureau',
  icon: '🪑',
  volume: 0.3,
  quantity: 0,
  category: 'bureau'
}, {
  id: '48',
  name: 'Armoire bureau',
  icon: '🗄️',
  volume: 1.5,
  quantity: 0,
  category: 'bureau'
}, {
  id: '49',
  name: 'Étagères',
  icon: '📚',
  volume: 0.6,
  quantity: 0,
  category: 'bureau'
}, {
  id: '50',
  name: 'Caisson mobile',
  icon: '📦',
  volume: 0.3,
  quantity: 0,
  category: 'bureau'
}, {
  id: '51',
  name: 'Table de réunion',
  icon: '🏓',
  volume: 1.2,
  quantity: 0,
  category: 'bureau'
}, {
  id: '52',
  name: 'Coffre-fort',
  icon: '🔒',
  volume: 0.4,
  quantity: 0,
  category: 'bureau'
}, {
  id: '53',
  name: 'Imprimante',
  icon: '🖨️',
  volume: 0.1,
  quantity: 0,
  category: 'bureau'
},

// Jardin & Balcon
{
  id: '54',
  name: 'Table de jardin',
  icon: '🏓',
  volume: 0.8,
  quantity: 0,
  category: 'jardin'
}, {
  id: '55',
  name: 'Chaise de jardin',
  icon: '🪑',
  volume: 0.2,
  quantity: 0,
  category: 'jardin'
}, {
  id: '56',
  name: 'Parasol',
  icon: '☂️',
  volume: 0.3,
  quantity: 0,
  category: 'jardin'
}, {
  id: '57',
  name: 'Barbecue',
  icon: '🔥',
  volume: 0.6,
  quantity: 0,
  category: 'jardin'
}, {
  id: '58',
  name: 'Bain de soleil',
  icon: '🏖️',
  volume: 0.5,
  quantity: 0,
  category: 'jardin'
}, {
  id: '59',
  name: 'Salon de jardin',
  icon: '🛋️',
  volume: 2,
  quantity: 0,
  category: 'jardin'
}, {
  id: '60',
  name: 'Tondeuse',
  icon: '🌱',
  volume: 0.4,
  quantity: 0,
  category: 'jardin'
}, {
  id: '61',
  name: 'Jardinières',
  icon: '🪴',
  volume: 0.2,
  quantity: 0,
  category: 'jardin'
},

// Divers
{
  id: '62',
  name: 'Cartons',
  icon: '📦',
  volume: 0.1,
  quantity: 0,
  category: 'divers'
}, {
  id: '63',
  name: 'Aspirateur',
  icon: '🧹',
  volume: 0.2,
  quantity: 0,
  category: 'divers'
}, {
  id: '64',
  name: 'Vélo',
  icon: '🚲',
  volume: 0.8,
  quantity: 0,
  category: 'divers'
}, {
  id: '65',
  name: 'Tableau',
  icon: '🖼️',
  volume: 0.1,
  quantity: 0,
  category: 'divers'
}, {
  id: '66',
  name: 'Plantes grandes',
  icon: '🪴',
  volume: 0.3,
  quantity: 0,
  category: 'divers'
}, {
  id: '67',
  name: 'Valises',
  icon: '🧳',
  volume: 0.2,
  quantity: 0,
  category: 'divers'
}, {
  id: '68',
  name: 'Instruments musique',
  icon: '🎸',
  volume: 0.5,
  quantity: 0,
  category: 'divers'
}, {
  id: '69',
  name: 'Équipement sport',
  icon: '⚽',
  volume: 0.4,
  quantity: 0,
  category: 'divers'
}];
const getVehicleRecommendation = (volume: number) => {
  if (volume <= 3) return {
    type: 'Camions + remorque (3m³)',
    icon: Car,
    description: 'Idéal pour petits déménagements ou quelques meubles'
  };
  if (volume <= 8) return {
    type: 'Camionnette (8m³)',
    icon: Truck,
    description: 'Parfait pour studio ou petit 2 pièces'
  };
  if (volume <= 15) return {
    type: 'Petit camion (15m³)',
    icon: Truck,
    description: 'Adapté pour appartement 3-4 pièces'
  };
  if (volume <= 30) return {
    type: 'Camion moyen (30m³)',
    icon: Truck,
    description: 'Pour grande maison ou bureau'
  };
  return {
    type: 'Grand camion (40m³+)',
    icon: Truck,
    description: 'Pour très gros déménagements'
  };
};
export const VolumeEstimator = () => {
  const [selectedCategory, setSelectedCategory] = useState('salon');
  const [furniture, setFurniture] = useState<FurnitureItem[]>(furnitureDatabase);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [showQuoteDialog, setShowQuoteDialog] = useState(false);
  const [customItem, setCustomItem] = useState({
    name: '',
    volume: '',
    category: 'salon'
  });
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    email: '',
    phone: '',
    addressFrom: '',
    addressTo: '',
    date: '',
    message: ''
  });
  const {
    toast
  } = useToast();
  const totalVolume = furniture.reduce((sum, item) => sum + item.volume * item.quantity, 0);
  const vehicle = getVehicleRecommendation(totalVolume);
  const filteredFurniture = furniture.filter(item => item.category === selectedCategory && (searchTerm === '' || item.name.toLowerCase().includes(searchTerm.toLowerCase())));
  const updateQuantity = (id: string, change: number) => {
    setFurniture(prev => prev.map(item => item.id === id ? {
      ...item,
      quantity: Math.max(0, item.quantity + change)
    } : item));
  };
  const resetAll = () => {
    setFurniture(prev => prev.map(item => ({
      ...item,
      quantity: 0
    })));
    toast({
      title: "Réinitialisation",
      description: "Toutes les quantités ont été remises à zéro"
    });
  };
  const handleChatGPTSearch = () => {
    const query = searchTerm || 'mobilier déménagement volume';
    window.open(`https://chatgpt.com/?q=${encodeURIComponent(query)}`, '_blank');
  };
  const handleGoogleSearch = () => {
    const query = searchTerm || 'mobilier déménagement volume';
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  };
  const requestQuote = () => {
    setShowQuoteDialog(true);
  };
  const submitQuote = () => {
    toast({
      title: "Demande envoyée",
      description: "Nous vous contacterons sous 24h"
    });
    setShowQuoteDialog(false);
    setQuoteForm({
      name: '',
      email: '',
      phone: '',
      addressFrom: '',
      addressTo: '',
      date: '',
      message: ''
    });
  };
  const addCustomItem = () => {
    if (customItem.name && customItem.volume) {
      const newItem: FurnitureItem = {
        id: Date.now().toString(),
        name: customItem.name,
        icon: '📦',
        volume: parseFloat(customItem.volume),
        quantity: 1,
        category: customItem.category
      };
      setFurniture(prev => [...prev, newItem]);
      setCustomItem({
        name: '',
        volume: '',
        category: 'salon'
      });
      setShowCustomForm(false);
      toast({
        title: "Objet ajouté",
        description: `${newItem.name} a été ajouté à la catégorie ${categories.find(c => c.id === newItem.category)?.name}`
      });
    }
  };
  return <div className="min-h-screen bg-light-gray">
      {/* Header */}
      <div className="bg-sky-blue text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">ESTIMATEUR DE VOLUME</h1>
          <div className="flex items-center justify-center gap-2">
            
            
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
                <Input placeholder="Rechercher un meuble..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full" />
                
                <div className="flex gap-2 flex-wrap">
                  <Button variant="outline" onClick={handleChatGPTSearch} className="flex items-center gap-2">
                    <Bot className="h-4 w-4" />
                    🤖 Rechercher avec ChatGPT
                  </Button>
                  <Button variant="outline" onClick={handleGoogleSearch} className="flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    🔍 Rechercher avec Google
                  </Button>
                </div>
                
                <div className="flex justify-between items-center">
                  {!showCustomForm ? <Button variant="ghost" size="sm" onClick={() => setShowCustomForm(true)}>
                      + Ajouter un objet personnalisé
                    </Button> : <div className="flex-1 space-y-3 p-4 border rounded-lg bg-muted/50">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">Nouvel objet personnalisé</h4>
                        <Button variant="ghost" size="sm" onClick={() => setShowCustomForm(false)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <Input placeholder="Nom de l'objet" value={customItem.name} onChange={e => setCustomItem(prev => ({
                      ...prev,
                      name: e.target.value
                    }))} />
                        <Input type="number" step="0.1" placeholder="Volume (m³)" value={customItem.volume} onChange={e => setCustomItem(prev => ({
                      ...prev,
                      volume: e.target.value
                    }))} />
                        <Select value={customItem.category} onValueChange={value => setCustomItem(prev => ({
                      ...prev,
                      category: value
                    }))}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map(cat => <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <Button size="sm" onClick={addCustomItem} disabled={!customItem.name || !customItem.volume}>
                        Ajouter
                      </Button>
                    </div>}
                  <Button variant="ghost" size="sm">
                    Afficher
                  </Button>
                </div>
              </div>
            </Card>

            {/* Categories */}
            <Card className="p-4">
              <h2 className="text-lg font-semibold mb-3">Catégories</h2>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(category => <Button key={category.id} variant={selectedCategory === category.id ? "default" : "outline"} onClick={() => setSelectedCategory(category.id)} className="flex items-center gap-1 h-auto py-2 px-3 text-xs" size="sm">
                    <span className="text-sm">{category.icon}</span>
                    <span>{category.name}</span>
                  </Button>)}
              </div>
            </Card>

            {/* Furniture Items */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 capitalize">{categories.find(c => c.id === selectedCategory)?.name}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredFurniture.map(item => <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg bg-card">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-medium-gray">{item.volume} m³</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity === 0}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>)}
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
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Véhicule recommandé
                </h3>
                <div className="space-y-3">
                  <Badge variant="secondary" className="w-full justify-center py-3 flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <vehicle.icon className="h-6 w-6" />
                      <span className="font-medium">{vehicle.type}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{vehicle.description}</p>
                  </Badge>
                </div>
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
                <Button variant="outline" onClick={resetAll} className="w-full">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Réinitialiser
                </Button>
                
                <Dialog open={showQuoteDialog} onOpenChange={setShowQuoteDialog}>
                  <DialogTrigger asChild>
                    <Button onClick={requestQuote} className="w-full bg-sky-blue hover:bg-sky-blue-dark">
                      <FileText className="h-4 w-4 mr-2" />
                      📋 Demander un devis
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Demande de devis personnalisé</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Nom complet</Label>
                          <Input id="name" value={quoteForm.name} onChange={e => setQuoteForm(prev => ({
                          ...prev,
                          name: e.target.value
                        }))} placeholder="Votre nom" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" value={quoteForm.email} onChange={e => setQuoteForm(prev => ({
                          ...prev,
                          email: e.target.value
                        }))} placeholder="votre@email.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Téléphone</Label>
                          <Input id="phone" value={quoteForm.phone} onChange={e => setQuoteForm(prev => ({
                          ...prev,
                          phone: e.target.value
                        }))} placeholder="079 200 43 43" />
                        </div>
                        <div>
                          <Label htmlFor="date">Date souhaitée</Label>
                          <Input id="date" type="date" value={quoteForm.date} onChange={e => setQuoteForm(prev => ({
                          ...prev,
                          date: e.target.value
                        }))} />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="addressFrom">Adresse de départ</Label>
                        <Input id="addressFrom" value={quoteForm.addressFrom} onChange={e => setQuoteForm(prev => ({
                        ...prev,
                        addressFrom: e.target.value
                      }))} placeholder="Adresse de départ" />
                      </div>
                      <div>
                        <Label htmlFor="addressTo">Adresse d'arrivée</Label>
                        <Input id="addressTo" value={quoteForm.addressTo} onChange={e => setQuoteForm(prev => ({
                        ...prev,
                        addressTo: e.target.value
                      }))} placeholder="Adresse d'arrivée" />
                      </div>
                      <div>
                        <Label htmlFor="message">Message (optionnel)</Label>
                        <Textarea id="message" value={quoteForm.message} onChange={e => setQuoteForm(prev => ({
                        ...prev,
                        message: e.target.value
                      }))} placeholder="Informations supplémentaires..." rows={3} />
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <p className="text-sm font-medium">Estimation actuelle :</p>
                        <p className="text-lg font-bold text-primary">{totalVolume.toFixed(1)} m³</p>
                        <p className="text-sm text-muted-foreground">Véhicule : {vehicle.type}</p>
                      </div>
                      <Button onClick={submitQuote} className="w-full" disabled={!quoteForm.name || !quoteForm.email || !quoteForm.phone || !quoteForm.addressFrom || !quoteForm.addressTo}>
                        Envoyer la demande
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button variant="outline" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  079 200 43 43
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>;
};