class MyArray <T> {
    private collection: Array<T> = [];
  
    add(value: T): void {
      this.collection.push(value);
    }
  
    remove(value: T): void {
      this.collection = this.collection.filter(item => item !== value);
    }
  
    getValues(): Array<T> {
      return this.collection;
    }
  }
  
  const stringAry = new MyArray<string>();
  stringAry.add('aaa');
  stringAry.add('bbb');
  stringAry.add('ccc');
  stringAry.remove('bbb');
  console.log(stringAry.getValues())
  //=> [ 'aaa', 'ccc' ]
  
  const numberAry = new MyArray<number>();
  numberAry.add(1);
  numberAry.add(2);
  numberAry.add(3);
  numberAry.remove(2);
  console.log(numberAry.getValues());
  //=> [ 1, 3 ]
  
  const booleanAry = new MyArray<number | string>()
  booleanAry.add(true)
  booleanAry.add(false)
  //=> You shouldn't be able to do these.
  
  
  const typeMixedAry = new MyArray<number>();
  typeMixedAry.add(1);
  typeMixedAry.add(2);
  typeMixedAry.add('a');