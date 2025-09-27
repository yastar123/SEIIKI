import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldCheck } from "lucide-react";

export default function SloVerificationPage() {
  return (
    <div className="bg-secondary min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                <ShieldCheck className="h-10 w-10 text-primary" />
            </div>
            <CardTitle className="text-3xl font-bold font-headline">Verifikasi Sertifikat Laik Operasi</CardTitle>
            <CardDescription className="text-lg pt-2">
              Masukkan Nomor Registrasi SLO Anda untuk memeriksa keaslian dan statusnya.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Contoh: 12345/ABC/2023"
                className="text-center h-12 text-lg flex-grow"
              />
              <Button type="submit" size="lg" className="h-12">
                Verifikasi Sekarang
              </Button>
            </form>
            <div className="mt-8 p-4 bg-muted rounded-lg text-center min-h-[100px] flex items-center justify-center">
                <p className="text-muted-foreground">Hasil verifikasi akan ditampilkan di sini.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
