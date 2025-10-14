import { MapPin, Phone, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface StoreCardProps {
  name: string;
  address: string;
  neighborhood: string;
  city: string;
  phone: string;
  hours: string;
  image: string;
  mapsUrl?: string;
}

export const StoreCard = ({
  name,
  address,
  neighborhood,
  city,
  phone,
  hours,
  image,
  mapsUrl = "#",
}: StoreCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
            <p>
              {address} - {neighborhood}, {city}
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
            <a href={`tel:${phone.replace(/\D/g, '')}`} className="hover:text-primary transition-colors">
              {phone}
            </a>
          </div>
          
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
            <p>{hours}</p>
          </div>
        </div>
        
        <Button 
          variant="hero" 
          className="w-full"
          onClick={() => window.open(mapsUrl, '_blank')}
        >
          Ver no Mapa
        </Button>
      </CardContent>
    </Card>
  );
};
