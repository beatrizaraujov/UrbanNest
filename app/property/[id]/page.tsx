// app/property/[id]/page.tsx
import { properties } from "../../constants/propertiesData";
import { notFound } from "next/navigation";
import PropertyGallery from "./_components/PropertyGallery"; 
import PropertyInfo from "./_components/PropertyInfo";
import ContactForm from "./_components/ContactForm";

export default async function PropertyDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = properties.find((p) => p.id.toString() === id);

  if (!property) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
        
        
        <PropertyGallery gallery={property.gallery} title={property.title} />

        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          
          <div className="lg:col-span-2">
            <PropertyInfo 
              title={property.title}
              location={property.location}
              price={property.price}
              description={property.description}
              
              amenities={property.amenities}
             
            />
          </div>

          
          <div className="lg:col-span-1">
            <ContactForm broker={property.broker} />
          </div>

        </div>
      </div>
    </main>
  );
}