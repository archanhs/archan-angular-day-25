import { Component } from '@angular/core';
import { IMenu } from 'src/app/interfaces/i-menu';

@Component({
  selector: 'app-menu-app',
  templateUrl: './menu-app.component.html',
  styleUrls: ['./menu-app.component.css'],
})
export class MenuAppComponent {
  menus: IMenu[] = [];
  menu: IMenu;
  totalHarga: number = 0;
  ppn: number = 0.11;
  nominalBayar: number = 0;
  grandTotal: number = 0;
  isTidakCukup: boolean = false;
  statusPembayaran: string = '';
  validasiInput: string = '';
  kembalian: number = 0;
  constructor() {
    this.menu = {
      name: '',
      qty: 0,
      price: 0,
      subTotal: 0,
    };
  }

  addMenu() {
    if (this.menu.name === '') {
      this.validasiInput = 'name';
    } else if (this.menu.qty <= 0) {
      this.validasiInput = 'qty';
    } else if (this.menu.price <= 0) {
      this.validasiInput = 'price';
    } else {
      let temp: IMenu = {
        name: this.menu.name,
        qty: this.menu.qty,
        price: this.menu.price,
        subTotal: this.menu.qty * this.menu.price,
      };
      this.totalHarga += temp.subTotal;
      this.menus.push(temp);
      this.validasiInput = '';
    }
  }
  deleteMenu(index: number) {
    this.totalHarga -= this.menus[index].subTotal;
    this.menus.splice(index, 1);
  }
  bayar($event: any) {
    if ($event.which === 13) {
      this.grandTotal = this.totalHarga + this.totalHarga * this.ppn;
      if (this.grandTotal > this.nominalBayar) {
        this.isTidakCukup = true;
        this.statusPembayaran = 'gagal';
      } else {
        this.isTidakCukup = false;
        this.kembalian = this.nominalBayar - this.grandTotal;
        if (this.kembalian > 0) {
          this.statusPembayaran = 'kembalian';
        } else {
          this.statusPembayaran = 'pas';
        }
      }
    }
  }
  bayarOnClick() {
    this.grandTotal = this.totalHarga + this.totalHarga * this.ppn;
    if (this.grandTotal > this.nominalBayar) {
      this.isTidakCukup = true;
      this.statusPembayaran = 'gagal';
    } else {
      this.isTidakCukup = false;
      this.kembalian = this.nominalBayar - this.grandTotal;
      if (this.kembalian > 0) {
        this.statusPembayaran = 'kembalian';
      } else {
        this.statusPembayaran = 'pas';
      }
    }
  }
}
