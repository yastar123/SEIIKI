'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Plus, Search, Edit, Trash2, Shield, User } from 'lucide-react';

// Mock data
const mockUsers = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@seiiki.co.id',
    role: 'ADMIN',
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2025-01-15T10:30:00Z',
  },
  {
    id: '2',
    name: 'Content Editor',
    email: 'editor@seiiki.co.id',
    role: 'EDITOR',
    createdAt: '2024-06-20T14:20:00Z',
    updatedAt: '2025-01-10T09:15:00Z',
  },
  {
    id: '3',
    name: 'John Doe',
    email: 'john.doe@email.com',
    role: 'USER',
    createdAt: '2024-12-01T08:45:00Z',
    updatedAt: '2024-12-15T16:30:00Z',
  },
];

const roleColors = {
  ADMIN: 'destructive',
  EDITOR: 'default', 
  USER: 'secondary',
} as const;

const roleIcons = {
  ADMIN: Shield,
  EDITOR: Edit,
  USER: User,
} as const;

export default function UsersPage() {
  const [users] = useState(mockUsers);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">
            Kelola pengguna dan hak akses sistem
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Tambah User
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Cari user..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="grid gap-6">
        {filteredUsers.map((user) => {
          const RoleIcon = roleIcons[user.role as keyof typeof roleIcons];
          
          return (
            <Card key={user.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <RoleIcon className="h-5 w-5" />
                      {user.name}
                      <Badge variant={roleColors[user.role as keyof typeof roleColors]}>
                        {user.role}
                      </Badge>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {user.email}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>
                    Bergabung: {new Date(user.createdAt).toLocaleDateString('id-ID')}
                  </span>
                  <span>
                    Terakhir update: {new Date(user.updatedAt).toLocaleDateString('id-ID')}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <User className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-2 text-sm font-semibold">Tidak ada user</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Tidak ada user yang cocok dengan pencarian Anda.
          </p>
        </div>
      )}
    </div>
  );
}