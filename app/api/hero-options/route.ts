import { NextResponse } from "next/server";

export async function GET() {
  
  const options = {
    locations: [
      "New York, USA", 
      "London, UK", 
      "Dubai, UAE", 
      "Paris, France", 
      "Monaco, MC", 
      "Tokyo, Japan", 
      "Los Angeles, USA", 
      "Swiss Alps, Switzerland", 
      "Santorini, Greece", 
      "Miami, USA"
    ],
    propertyTypes: [
      "Penthouse", 
      "Luxury Villa", 
      "Modern Apartment", 
      "Mansion", 
      "Beach House", 
      "Duplex", 
      "Loft", 
      "Townhouse", 
      "Chateau", 
      "Private Island"
    ],
    prices: [
      "$5,000", 
      "$10,000", 
      "$25,000", 
      "$50,000", 
      "$100,000", 
      "$250,000", 
      "$500,000", 
      "$1,000,000", 
      "$5,000,000", 
      "$10,000,000+"
    ]
  };

  
  return NextResponse.json(options);
}