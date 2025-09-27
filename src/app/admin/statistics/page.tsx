'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Edit, Trash2, Save } from 'lucide-react';

// Mock data
const mockStats = [
  {
    id: '1',
    label: 'Tahun Pengalaman',
    value: '10+',
    order: 1,
  },
  {
    id: '2',
    label: 'Sertifikat Diterbitkan',
    value: '15,000+',
    order: 2,
  },
  {
    id: '3',
    label: 'Kantor Wilayah',
    value: '25',
    order: 3,
  },
  {
    id: '4',
    label: 'Kepuasan Pelanggan',
    value: '99%',
    order: 4,
  },
];

export default function StatisticsPage() {
  const [statistics, setStatistics] = useState(mockStats);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ label: '', value: '', order: 0 });

  const handleEdit = (stat: typeof mockStats[0]) => {
    setEditingId(stat.id);
    setEditForm({ label: stat.label, value: stat.value, order: stat.order });
  };

  const handleSave = () => {
    if (editingId) {
      setStatistics(prev =>
        prev.map(stat =>
          stat.id === editingId
            ? { ...stat, ...editForm }
            : stat
        )
      );
      setEditingId(null);
      setEditForm({ label: '', value: '', order: 0 });
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditForm({ label: '', value: '', order: 0 });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Statistik</h1>
          <p className="text-muted-foreground">
            Kelola angka-angka penting yang ditampilkan di homepage
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Statistik
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {statistics.map((stat) => (
          <Card key={stat.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Statistik #{stat.order}</span>
                <div className="flex gap-2">
                  {editingId === stat.id ? (
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
                      <Button size="sm" variant="outline" onClick={() => handleEdit(stat)}>
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
            <CardContent className="space-y-4">
              {editingId === stat.id ? (
                <div className="space-y-4">
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
                <div className="text-center py-8">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}