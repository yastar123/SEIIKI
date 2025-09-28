'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Loader2 } from 'lucide-react';
import { useStatistics } from '@/hooks/use-admin-data';
import { StatisticsForm } from '@/components/admin/statistics-form';
import { DeleteConfirmDialog } from '@/components/admin/delete-confirm-dialog';


export default function StatisticsPage() {
  const { statistics, loading, error, refetch } = useStatistics();

  const handleDelete = async (id: string) => {
    const response = await fetch(`/api/admin/statistics/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete statistic');
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
          <h1 className="text-3xl font-bold tracking-tight">Statistik</h1>
          <p className="text-muted-foreground">
            Kelola angka-angka penting yang ditampilkan di homepage
          </p>
        </div>
        <StatisticsForm mode="create" onSuccess={refetch} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {statistics.map((stat) => (
          <Card key={stat.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Statistik #{stat.order}
                </div>
                <div className="flex gap-2">
                  <StatisticsForm 
                    mode="edit" 
                    statistic={stat} 
                    onSuccess={refetch} 
                  />
                  <DeleteConfirmDialog
                    title="Statistik"
                    description="Data statistik ini akan dihapus permanen."
                    onConfirm={() => handleDelete(stat.id)}
                  />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}