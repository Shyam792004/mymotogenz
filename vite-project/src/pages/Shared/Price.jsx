import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Price = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Extract filters from query parameters
  const searchQuery = queryParams.get('searchQuery') || '';
  const selectedColor = queryParams.get('selectedColor') || '';
  const selectedTireBrand = queryParams.get('selectedTireBrand') || '';
  const selectedServiceType = queryParams.get('selectedServiceType') || '';
  const selectedPriceRange = queryParams.get('selectedPriceRange') || '';
  const selectedEngineType = queryParams.get('selectedEngineType') || '';
  const services = JSON.parse(queryParams.get('services') || '[]');

  // Define sample amounts for tire brands, service types, and engine types
  const tireBrandCosts = {
    'BrandA': 50,
    'BrandB': 75,
    'BrandC': 100,
  };

  const serviceTypeCosts = {
    'TypeA': 200,
    'TypeB': 150,
    'TypeC': 180,
  };

  const engineTypeCosts = {
    'EngineA': 300,
    'EngineB': 250,
    'EngineC': 350,
  };

  // Calculate total amount
  const totalAmount = services.reduce((acc, service) => {
    const tireCost = tireBrandCosts[service.tireBrand] || 0;
    const serviceCost = serviceTypeCosts[service.type] || 0;
    const engineCost = engineTypeCosts[service.engine] || 0;
    const laborCost = parseFloat(service.laborCost) || 0;

    return acc + parseFloat(service.price) + tireCost + serviceCost + engineCost + laborCost;
  }, 0);

  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full'>
          <CardTitle>Selected Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>Search Query: </strong> {searchQuery}</p>
          <p><strong>Color:        </strong> {selectedColor || 'All Colors'}</p>
          <p><strong>Tire Brand:   </strong> {selectedTireBrand || 'All Tire Brands'}:$40</p>
          <p><strong>Service Type: </strong> {selectedServiceType || 'All Service Types'}:$30</p>
          <p><strong>Price Range:</strong> {selectedPriceRange ? `$0 - $${selectedPriceRange}` : 'All Price Ranges'}</p>
          <p><strong>Engine Type:</strong> {selectedEngineType || 'All Engine Types'}:$70</p>
          <p><strong>Labour Charge:</strong>:$50</p>
        </CardContent>
        <CardHeader className='w-full'>
          <CardTitle>Filtered Services</CardTitle>
        </CardHeader>
        <CardContent>
          {services.length > 0 ? (
            services.map((service, index) => {
              const tireCost = tireBrandCosts[service.tireBrand] || 0;
              const serviceCost = serviceTypeCosts[service.type] || 0;
              const engineCost = engineTypeCosts[service.engine] || 0;
              const laborCost = parseFloat(service.laborCost) || 0;
              const totalServiceCost = parseFloat(service.price) + tireCost + serviceCost + engineCost + laborCost;

              return (
                <div key={index} className='p-2 border-b'>
                  <h3 className='text-lg font-semibold'>{service.name}</h3>
                  <p><strong>Price:</strong> ${service.price}</p>
                  <p><strong>Color:</strong> {service.color}</p>
                  <p><strong>Tire Brand:</strong> {service.tireBrand} (Sample Cost: ${tireCost})</p>
                  <p><strong>Type:</strong> {service.type} (Sample Cost: ${serviceCost})</p>
                  <p><strong>Engine:</strong> {service.engine} (Sample Cost: ${engineCost})</p>
                  <p><strong>Labor Cost:</strong> ${laborCost}</p>
                  <p><strong>Total Service Cost:</strong> $400{totalServiceCost.toFixed(2)}</p>
                </div>
              );
            })
          ) : (
            <p className='text-center'>No services found</p>
          )}
          <div className='m-5 p-5'>
            <p className='text-xl font-semibold'>Total Amount: $40{totalAmount.toFixed(2)}</p> {/* Display total amount */}
            <Button
              style={{ marginLeft: '635px', display: 'block' }} // Moves the button to the right
            >
              Book Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Price;
