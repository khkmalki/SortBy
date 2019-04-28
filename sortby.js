let list = [{
    name: "zaza",
    price: 22
  }, {
    name: "mango",
    price: 7
  }, {
    name: "apple",
    price: 7
  }, {
    name: "orange",
    price: 5
  }];
  
  let arr = [];
  list.sort((i, b) => i.price - b.price);
  list.forEach((elm, index) => {
    if (arr.length === 0) {
      arr.push(elm);
    } else {
      let nameExists = arr.findIndex(o => o && o.name === elm.name);
      if (nameExists === -1) {
        let samePriceIndex = arr.findIndex(o => o && o.price === elm.price);
        if (samePriceIndex === -1) {
          arr.push(elm);
        } else {
          let k = [elm, arr[samePriceIndex]];
          k.sort((b, c) => b.name - c.name);
          arr.splice(samePriceIndex,1);
          arr.push(...k);
        }
      }
    }
  });
  
  console.log(arr);
  