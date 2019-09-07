function bamazonMarket(item_id , product_name, department_name, price, stock_quantity) {
    this.item_id = item_id;
    this.product_name = product_name;
    this.department_name = department_name;
    this.price = price;
    this.stock_quantity = stock_quantity;
  }
  var allItems = {
  iphone: new bamazonMarket("A0001", "IPHONE X", "sell", 999, 200),
  hpLap: new bamazonMarket("A0002", "HP ENVY x360 Laptop", "sell", 699.99, 100),
  earbuds:  new bamazonMarket("A0003", "Google Pixel USB-C earbuds", "sell", 30, 500),
  powerbank: new bamazonMarket("A0004", "powerbank 5000mAh", "sell", 24.99, 243),
  alexa: new bamazonMarket("A0005", "alexa", "sell", 750, 20),
  keyboard: new bamazonMarket("A0006", "HP Classic Wired Keyboard", "sell", 12.99, 765),
  speaker: new bamazonMarket("A0007", "Sony SRS-XB10-Speaker", "sell", 49.99, 120),
  mouse:  new bamazonMarket("A0008", "Staples 23420 Wireless Optical Mouse", "sell", 10, 5000),
  monitor: new bamazonMarket("A0009", "Dell 24 Ultrathin Monitor", "sell", 240, 4),
  appleWatch: new bamazonMarket("A0010", "Apple Watch Series 4", "sell", 500, 11),
}



  
  console.table([allItems.iphone, allItems.hpLap, allItems.earbuds, allItems.powerbank, allItems.alexa, allItems.keyboard, allItems.speaker, allItems.mouse, allItems.monitor, allItems.appleWatch]);
  