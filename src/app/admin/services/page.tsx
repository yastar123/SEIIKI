'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Loader2 } from 'lucide-react';
import { useServices } from '@/hooks/use-admin-data';
import { ServiceForm } from '@/components/admin/service-form';
import { DeleteConfirmDialog } from '@/components/admin/delete-confirm-dialog';

export default function ServicesPage() {
  const { services, loading, error, refetch } = useServices();

  const handleDelete = async (id: string) => {
    const response = await fetch(`/api/admin/services/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete service');
    }
    refetch();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Error: {error}</p>
        <Button onClick={refetch} className="mt-4">
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Layanan</h1>
          <p className="text-muted-foreground">
            Kelola layanan yang ditampilkan di website
          </p>
        </div>
        <ServiceForm mode="create" onSuccess={refetch} />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="flex items-center gap-2">
                  {service.title}
                  {service.featured && (
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  )}
                </CardTitle>
                <div className="flex gap-1">
                  <ServiceForm 
                    mode="edit" 
                    service={service} 
                    onSuccess={refetch} 
                  />
                  <DeleteConfirmDialog
                    title="Layanan"
                    description="Layanan ini akan dihapus permanen dari website."
                    onConfirm={() => handleDelete(service.id)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
              
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Icon: {service.icon}</span>
                <span>Order: {service.order}</span>
              </div>
              
              <div className="flex gap-2">
                <Badge variant="outline">
                  {service.featured ? 'Featured' : 'Regular'}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}