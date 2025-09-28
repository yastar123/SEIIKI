'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, MessageCircle, Loader2 } from 'lucide-react';
import { useContactInfo } from '@/hooks/use-admin-data';
import { ContactInfoForm } from '@/components/admin/contact-info-form';
import { DeleteConfirmDialog } from '@/components/admin/delete-confirm-dialog';

const contactTypes = [
  { value: 'PHONE', label: 'Telepon', icon: Phone },
  { value: 'EMAIL', label: 'Email', icon: Mail },
  { value: 'ADDRESS', label: 'Alamat', icon: MapPin },
  { value: 'SOCIAL', label: 'Social Media', icon: MessageCircle },
];

export default function ContactInfoPage() {
  const { contactInfo, loading, error, refetch } = useContactInfo();

  const handleDelete = async (id: string) => {
    const response = await fetch(`/api/admin/contact-info/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete contact info');
    }
    refetch();
  };

  const getTypeIcon = (type: string) => {
    const typeInfo = contactTypes.find(t => t.value === type);
    return typeInfo ? typeInfo.icon : Phone;
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
          <h1 className="text-3xl font-bold tracking-tight">Informasi Kontak</h1>
          <p className="text-muted-foreground">
            Kelola informasi kontak yang ditampilkan di website (termasuk WhatsApp untuk customer service)
          </p>
        </div>
        <ContactInfoForm mode="create" onSuccess={refetch} />
      </div>

      <div className="grid gap-6">
        {contactInfo.map((contact) => {
          const IconComponent = getTypeIcon(contact.type);
          
          return (
            <Card key={contact.id}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <IconComponent className="h-5 w-5" />
                    {contact.label}
                    {contact.label.toLowerCase().includes('whatsapp') && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        WhatsApp CS
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <ContactInfoForm 
                      mode="edit" 
                      contactInfo={contact} 
                      onSuccess={refetch} 
                    />
                    <DeleteConfirmDialog
                      title="Kontak Info"
                      description="Informasi kontak ini akan dihapus permanen."
                      onConfirm={() => handleDelete(contact.id)}
                    />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-lg font-medium">{contact.value}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <Badge variant="outline">{contact.type}</Badge>
                    <span>Urutan: {contact.order}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
        
        {contactInfo.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-muted-foreground mb-4">Belum ada informasi kontak</p>
              <ContactInfoForm mode="create" onSuccess={refetch} />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}