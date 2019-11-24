import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-request',
  templateUrl: './purchase-request.page.html',
  styleUrls: ['./purchase-request.page.scss'],
})
export class PurchaseRequestPage implements OnInit {
  listOfItems: Array<any> = [{ label: 'item1', value: 'item1' },
  { label: 'item2', value: 'item2' },
  { label: 'item3', value: 'item3' },
  { label: 'item4', value: 'item4' },
  { label: 'item5', value: 'item5' },
  { label: 'item6', value: 'item6' },
  { label: 'item7', value: 'item7' },
  { label: 'item8', value: 'item8' },
  { label: 'item9', value: 'item9' }]

  itemList: Array<any> = [{ itemName: 'item4', quantity: 5 }, { itemName: 'item2', quantity: 88 }, { itemName: 'item6', quantity: 99 }]
  quantity: Array<any> = [];

  constructor() { }

  ngOnInit() {
    Array(100).fill(0).map((x, i) => {
      this.quantity.push({ label: `${i + 1}`, value: i + 1 })
    });
  }


  checkVal() {
    console.log(this.itemList)
  }
  addNewRow() {
    this.itemList.push({ itemName: '', quantity: 0 })
  }
  deleteItem(index) {
    this.itemList.splice(index, 1);
  }

}
