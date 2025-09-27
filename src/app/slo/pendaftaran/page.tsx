import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function SloRegistrationPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold font-headline text-primary">Pendaftaran Sertifikat Laik Operasi (SLO)</CardTitle>
            <CardDescription className="text-lg">
              Silakan isi formulir di bawah ini dengan data yang benar dan lengkap.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <fieldset className="border p-4 rounded-md">
                <legend className="px-2 font-medium">Data Pemohon</legend>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="id-number">No. KTP</Label>
                    <Input id="id-number" placeholder="320xxxxxxxxxxxxx" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">No. Telepon / HP</Label>
                    <Input id="phone" type="tel" placeholder="0812xxxxxxxx" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="anda@email.com" />
                  </div>
                </div>
              </fieldset>
              
              <fieldset className="border p-4 rounded-md">
                <legend className="px-2 font-medium">Data Instalasi</legend>
                <div className="space-y-4 mt-2">
                   <div className="space-y-2">
                      <Label htmlFor="address">Alamat Lengkap Instalasi</Label>
                      <Textarea id="address" placeholder="Jl. Contoh No. 1, RT/RW, Kelurahan, Kecamatan, Kota, Kode Pos" />
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="space-y-2">
                       <Label>Jenis Instalasi</Label>
                       <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Jenis Instalasi" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tr-rumah">Tegangan Rendah - Rumah Tinggal</SelectItem>
                          <SelectItem value="tr-bisnis">Tegangan Rendah - Bisnis</SelectItem>
                          <SelectItem value="tm-industri">Tegangan Menengah - Industri</SelectItem>
                        </SelectContent>
                      </Select>
                     </div>
                     <div className="space-y-2">
                       <Label>Daya Tersambung (VA)</Label>
                       <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Daya" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="900">900 VA</SelectItem>
                          <SelectItem value="1300">1300 VA</SelectItem>
                          <SelectItem value="2200">2200 VA</SelectItem>
                          <SelectItem value="3500">3500 VA</SelectItem>
                          <SelectItem value="5500">5500 VA</SelectItem>
                        </SelectContent>
                      </Select>
                     </div>
                   </div>
                </div>
              </fieldset>
              
              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full">
                  Kirim Pendaftaran
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Dengan menekan tombol ini, Anda setuju dengan Syarat &amp; Ketentuan kami. Tim kami akan segera menghubungi Anda untuk proses selanjutnya.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
