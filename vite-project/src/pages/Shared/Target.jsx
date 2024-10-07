import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Target = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedTireBrand, setSelectedTireBrand] = useState('');
  const [selectedServiceType, setSelectedServiceType] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedEngineType, setSelectedEngineType] = useState('');

  const navigate = useNavigate();

  const [services] = useState([
    { name: 'Engine Repair', price: '$250.00', color: 'Red', tireBrand: 'Michelin', type: 'Repair', engine: 'V6' },
    { name: 'Brake Replacement', price: '$150.00', color: 'Blue', tireBrand: 'Bridgestone', type: 'Replacement', engine: 'V4' },
    { name: 'Basic Service', price: '$100.00', color: 'Green', tireBrand: 'Goodyear', type: 'Service', engine: 'V8' },
    { name: 'Steering Alignment', price: '$200.00', color: 'Red', tireBrand: 'Pirelli', type: 'Alignment', engine: 'V6' },
    { name: 'Coolant Flush', price: '$75.00', color: 'Blue', tireBrand: 'Continental', type: 'Flush', engine: 'V4' },
    { name: 'Water Wash', price: '$50.00', color: 'Green', tireBrand: 'Dunlop', type: 'Wash', engine: 'V8' },
  ]);

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedColor ? service.color === selectedColor : true) &&
    (selectedTireBrand ? service.tireBrand === selectedTireBrand : true) &&
    (selectedServiceType ? service.type === selectedServiceType : true) &&
    (selectedPriceRange ? parseFloat(service.price.replace('$', '')) <= parseFloat(selectedPriceRange) : true) &&
    (selectedEngineType ? service.engine === selectedEngineType : true)
  );

  // Function to handle navigation with filters as query parameters
  const handleCustomizeClick = () => {
    const queryParams = new URLSearchParams({
      searchQuery,
      selectedColor,
      selectedTireBrand,
      selectedServiceType,
      selectedPriceRange,
      selectedEngineType,
      services: JSON.stringify(filteredServices.map(service => ({
        name: service.name,
        price: service.price,
        color: service.color,
        tireBrand: service.tireBrand,
        type: service.type,
        engine: service.engine,
      }))), // Convert filtered services to a JSON string
    }).toString();

    navigate(`/price?${queryParams}`);
  };

  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-col gap-4'>
          <CardTitle>Customize Service</CardTitle>
          <Input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full'
          />
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className='w-full p-2 border rounded'
          >
            <option value="">All Colors</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </select>
          <select
            value={selectedTireBrand}
            onChange={(e) => setSelectedTireBrand(e.target.value)}
            className='w-full p-2 border rounded'
          >
            <option value="">All Tire Brands</option>
            <option value="Michelin">Michelin</option>
            <option value="Bridgestone">Bridgestone</option>
            <option value="Goodyear">Goodyear</option>
            <option value="Pirelli">Pirelli</option>
            <option value="Continental">Continental</option>
            <option value="Dunlop">Dunlop</option>
          </select>
          <select
            value={selectedServiceType}
            onChange={(e) => setSelectedServiceType(e.target.value)}
            className='w-full p-2 border rounded'
          >
            <option value="">All Service Types</option>
            <option value="Repair">Repair</option>
            <option value="Replacement">Replacement</option>
            <option value="Service">Service</option>
            <option value="Alignment">Alignment</option>
            <option value="Flush">Flush</option>
            <option value="Wash">Wash</option>
          </select>
          <select
            value={selectedPriceRange}
            onChange={(e) => setSelectedPriceRange(e.target.value)}
            className='w-full p-2 border rounded'
          >
            <option value="">All Price Ranges</option>
            <option value="100">Up to $100</option>
            <option value="200">Up to $200</option>
            <option value="300">Up to $300</option>
          </select>
          <select
            value={selectedEngineType}
            onChange={(e) => setSelectedEngineType(e.target.value)}
            className='w-full p-2 border rounded'
          >
            <option value="">All Engine Types</option>
            <option value="V4">V4</option>
            <option value="V6">V6</option>
            <option value="V8">V8</option>
          </select>
        </CardHeader>
        <CardContent>
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <div key={index} className='p-2 border-b'>
                <h3 className='text-lg font-semibold'>{service.name}</h3>
                <p>Price: {service.price}</p>
                <p>Color: {service.color}</p>
                <p>Tire Brand: {service.tireBrand}</p>
                <p>Type: {service.type}</p>
                <p>Engine: {service.engine}</p>
              </div>
            ))
          ) : (
            <p className='text-center'>No services found</p>
          )}
          <Button className='w-full mt-4' onClick={handleCustomizeClick}>
            Customize My Car
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Target;
