'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Edit, Trash2, Save, Phone, Mail, MapPin, Globe } from 'lucide-react';

// Mock data
const mockContactInfo = [
  {
    id: '1',
    type: 'PHONE',
    label: 'Telepon Kantor Pusat',
    value: '+62 21 1234 5678',
    icon: 'Phone',
    order: 1,
  },
  {
    id: '2',
    type: 'EMAIL',
    label: 'Email Resmi',
    value: 'info@seiiki.co.id',
    icon: 'Mail',
    order: 2,
  },
  {
    id: '3',
    type: 'ADDRESS',
    label: 'Alamat Kantor Pusat',
    value: 'Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta 10110',
    icon: 'MapPin',
    order: 3,
  },
];

const contactTypes = [
  { value: 'PHONE', label: 'Telepon', icon: Phone },
  { value: 'EMAIL', label: 'Email', icon: Mail },
  { value: 'ADDRESS', label: 'Alamat', icon: MapPin },
  { value: 'SOCIAL', label: 'Social Media', icon: Globe },
];

export default function ContactInfoPage() {
  const [contactInfo, setContactInfo] = useState(mockContactInfo);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    type: '',
    label: '',
    value: '',
    icon: '',
    order: 0,
  });

  const handleEdit = (contact: typeof mockContactInfo[0]) => {
    setEditingId(contact.id);
    setEditForm({
      type: contact.type,
      label: contact.label,
      value: contact.value,
      icon: contact.icon,
      order: contact.order,
    });
  };

  const handleSave = () => {
    if (editingId) {
      setContactInfo(prev =>
        prev.map(contact =>
          contact.id === editingId
            ? { ...contact, ...editForm }
            : contact
        )
      );
      setEditingId(null);
      setEditForm({ type: '', label: '', value: '', icon: '', order: 0 });
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({ type: '', label: '', value: '', icon: '', order: 0 });
  };

  const getTypeIcon = (type: string) => {
    const typeInfo = contactTypes.find(t => t.value === type);
    return typeInfo ? typeInfo.icon : Phone;
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Informasi Kontak</h1>
          <p className="text-muted-foreground">
            Kelola informasi kontak yang ditampilkan di website
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Kontak
        </Button>
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
                  </div>
                  <div className="flex gap-2">
                    {editingId === contact.id ? (
                      <>
                        <Button size="sm" onClick={handleSave}>
                          <Save className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={handleCancel}>
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button size="sm" variant="outline" onClick={() => handleEdit(contact)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {editingId === contact.id ? (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="type">Tipe Kontak</Label>
                      <Select value={editForm.type} onValueChange={(value) => setEditForm(prev => ({ ...prev, type: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih tipe kontak" />
                        </SelectTrigger>
                        <SelectContent>
                          {contactTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="label">Label</Label>
                      <Input
                        id="label"
                        value={editForm.label}
                        onChange={(e) => setEditForm(prev => ({ ...prev, label: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="value">Nilai</Label>
                      <Input
                        id="value"
                        value={editForm.value}
                        onChange={(e) => setEditForm(prev => ({ ...prev, value: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="order">Urutan</Label>
                      <Input
                        id="order"
                        type="number"
                        value={editForm.order}
                        onChange={(e) => setEditForm(prev => ({ ...prev, order: parseInt(e.target.value) }))}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="text-lg">{contact.value}</p>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Tipe: {contact.type}</span>
                      <span>Urutan: {contact.order}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}