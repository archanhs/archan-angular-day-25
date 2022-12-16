import { Component } from '@angular/core';

@Component({
  selector: 'app-pbb-count',
  templateUrl: './pbb-count.component.html',
  styleUrls: ['./pbb-count.component.css'],
})
export class PbbCountComponent {
  luasTanah: number = 0;
  luasBangunan: number = 0;
  njopTanah: number = 0;
  njopBangunan: number = 0;
  result: string = '';
  pajakPBB: number = 0.005;
  faktorPengurang: number = 15000;
  hargaTanah: number = 0;
  hargaBangunan: number = 0;
  pbb: number = 0;
  hitungPbb() {
    this.hargaTanah = this.luasTanah * this.njopTanah;
    this.hargaBangunan = this.luasBangunan * this.njopBangunan;
    this.pbb =
      (this.hargaTanah + this.hargaBangunan - 12000000) * 0.2 * this.pajakPBB -
      this.faktorPengurang;
    this.result = 'Jumlah PBB pertahun adalah ' + this.pbb;
  }
}
