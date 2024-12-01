export default function UserProfile() {
    const user = {
      name: "María García",
      email: "maria.garcia@ejemplo.com",
      phone: "+34 123 456 789",
      address: "Calle Mayor 123, 28001 Madrid, España",
      paypal: "maria.garcia@paypal.com"
    }
  
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white shadow rounded-lg overflow-hidden">
          <div className="flex flex-col items-center p-6 border-b">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
              <img
                className="w-full h-full object-cover"
                src="/placeholder.svg?height=96&width=96"
                alt={user.name}
              />
            </div>
            <h2 className="mt-4 text-2xl font-bold">{user.name}</h2>
          </div>
          <div className="p-6">
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Correo electrónico</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.email}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Teléfono</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.phone}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Dirección</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.address}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Cuenta de PayPal</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.paypal}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    );
  
  }
  