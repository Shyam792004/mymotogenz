import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Activity,
    PlusCircle,
    Trash2,
} from 'lucide-react';

const AdminDashboard = () => {
    const [services, setServices] = useState([
        { id: 1, title: 'Car Maintenance', completed: 150, pending: 10, description: 'Regular and preventive maintenance for all car models.' },
        { id: 2, title: 'Parts Replacement', completed: 75, pending: 5, description: 'Genuine parts for your vehicle\'s specific needs.' },
        { id: 3, title: 'Customer Support', completed: 200, pending: 15, description: 'Get help and support anytime, anywhere.' },
        { id: 4, title: 'Service Customization', completed: 50, pending: 5, description: 'Customize your service plan to fit your needs.' },
    ]);

    const [editService, setEditService] = useState(null);
    const [newServiceTitle, setNewServiceTitle] = useState('');
    const [newServiceCompleted, setNewServiceCompleted] = useState(0);
    const [newServicePending, setNewServicePending] = useState(0);
    const [newServiceDescription, setNewServiceDescription] = useState('');

    const handleAddService = () => {
        const newService = {
            id: services.length + 1,
            title: 'New Service',
            completed: 0,
            pending: 0,
            description: 'Description of the new service.',
        };
        setServices([...services, newService]);
    };

    const handleEditService = (service) => {
        setEditService(service);
        setNewServiceTitle(service.title);
        setNewServiceCompleted(service.completed);
        setNewServicePending(service.pending);
        setNewServiceDescription(service.description);
    };

    const handleSaveEdit = () => {
        setServices(services.map(service => 
            service.id === editService.id 
                ? { 
                    ...service, 
                    title: newServiceTitle, 
                    completed: newServiceCompleted,
                    pending: newServicePending,
                    description: newServiceDescription 
                  } 
                : service
        ));
        setEditService(null);
    };

    const handleCancelEdit = () => {
        setEditService(null);
    };

    const handleDeleteService = (serviceId) => {
        setServices(services.filter(service => service.id !== serviceId));
    };

    return (
        <div className="p-4">
            <div className="flex justify-end mb-4">
                <button 
                    onClick={handleAddService} 
                    className="flex items-center bg-green-500 text-white p-2 rounded"
                >
                    <PlusCircle className="h-6 w-6 mr-2" />
                    Add New Service
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> 
                {services.map(service => (
                    <div key={service.id}>
                        <Card className='border border-primary hover:shadow-lg transition-shadow duration-300'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {service.title}
                                </CardTitle>
                                <Activity className="h-6 w-6 text-primary" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{service.completed + service.pending}</div>
                                <div className="text-lg font-semibold mt-2">Completed: {service.completed}</div>
                                <div className="text-lg font-semibold">Pending: {service.pending}</div>
                                <div className="flex space-x-2 mt-2">
                                    <button
                                        className="flex-1 bg-blue-500 text-white p-2 rounded"
                                        onClick={() => handleEditService(service)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="flex-1 bg-red-500 text-white p-2 rounded"
                                        onClick={() => handleDeleteService(service.id)}
                                    >
                                        <Trash2 className="h-5 w-5 mx-auto" />
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}

                {editService && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-4 rounded">
                            <h2 className="text-xl mb-4">Edit Service</h2>
                            <div className="mb-4">
                                <label className="block mb-1">Title</label>
                                <input 
                                    type="text" 
                                    className="w-full border p-2"
                                    value={newServiceTitle}
                                    onChange={(e) => setNewServiceTitle(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Total Number</label>
                                <input 
                                    type="number" 
                                    className="w-full border p-2"
                                    value={newServiceCompleted + newServicePending}
                                    disabled
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Completed</label>
                                <input 
                                    type="number" 
                                    className="w-full border p-2"
                                    value={newServiceCompleted}
                                    onChange={(e) => setNewServiceCompleted(parseInt(e.target.value))}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Pending</label>
                                <input 
                                    type="number" 
                                    className="w-full border p-2"
                                    value={newServicePending}
                                    onChange={(e) => setNewServicePending(parseInt(e.target.value))}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1">Description</label>
                                <input 
                                    type="text" 
                                    className="w-full border p-2"
                                    value={newServiceDescription}
                                    onChange={(e) => setNewServiceDescription(e.target.value)}
                                />
                            </div>
                            <button 
                                className="bg-blue-500 text-white p-2 rounded mr-2"
                                onClick={handleSaveEdit}
                            >
                                Save
                            </button>
                            <button 
                                className="bg-gray-500 text-white p-2 rounded"
                                onClick={handleCancelEdit}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
